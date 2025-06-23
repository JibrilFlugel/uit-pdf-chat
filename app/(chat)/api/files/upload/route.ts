import { auth } from "@/app/(auth)/auth";
import { insertChunks } from "@/app/db";
import { getPdfContentFromUrl } from "@/utils/pdf";
import { google } from "@/ai";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { put } from "@vercel/blob";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  let session = await auth();

  if (!session) {
    return Response.redirect("/login");
  }

  const { user } = session;

  if (!user) {
    return Response.redirect("/login");
  }

  if (request.body === null) {
    return new Response("Request body is empty", { status: 400 });
  }

  const { downloadUrl } = await put(`${user.email}/${filename}`, request.body, {
    access: "public",
  });

  const content = await getPdfContentFromUrl(downloadUrl);
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 20,
  });
  const chunkedContent = await textSplitter.createDocuments([content]);

  const { embeddings } = await google.models.embedContent({
    model: "text-embedding-004",
    contents: chunkedContent.map((chunk) => chunk.pageContent),
    config: {
      outputDimensionality: 10,
      taskType: "SEMANTIC_SIMILARITY",
    },
  });

  if (!embeddings) {
    return new Response("Failed to generate embeddings", { status: 500 });
  }

  await insertChunks({
    chunks: chunkedContent.map((chunk, i) => ({
      id: `${user.email}/${filename}/${i}`,
      filePath: `${user.email}/${filename}`,
      content: chunk.pageContent,
      embedding: embeddings[i].values,
    })),
  });

  return Response.json({});
}
