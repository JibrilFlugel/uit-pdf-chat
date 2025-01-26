# UIT PDF Chat

## Features

- Interactive chat interface
- Upload PDFs to the knowledge base
- Chatbot answers based on the uploaded PDFs
- Can do chitchat

## Tech Stack

- [Next.js](https://nextjs.org) React framework for building server-side rendered and statically generated web applications.
- [Vercel AI SDK](https://sdk.vercel.ai/docs) SDK for integrating AI into applications, hosted on Vercel.
- [Shadcn/ui](https://ui.shadcn.com) A UI component library for building user interfaces.
- [Postgres](https://www.postgresql.org) An open-source relational database management system.
  - Its extension, [pgvector](https://github.com/pgvector/pgvector), is used for storing embeddings and similarity searching.
- [Blob](https://vercel.com/docs/storage/vercel-blob) A storage solution provided by Vercel for handling large binary objects.
- [NextAuth.js](https://github.com/nextauthjs/next-auth) An authentication library for Next.js applications.

## Model

- [mxbai-embed-large](https://ollama.com/library/mxbai-embed-large) for embeddings
- [GPT-3.5 Turbo](https://platform.openai.com/docs/models#gpt-3-5-turbo) for text generation

## How to run (locally)

Before running the project locally, ensure you have the following prerequisites set up:

1. **Node.js**: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).

2. **PostgreSQL**: Install PostgreSQL and set it up. You can download it from [here](https://www.postgresql.org/download/).

3. **Environment Variables**: Create a `.env.local` file in the root directory of the project and add the following variables (refer to `.env.example` for guidance):

   ```env
   //not necessarily needed if you want to change to another model provider for text generating model
   OPENAI_API_KEY=your_openai_api_key

   //openssl rand -base64 32
   AUTH_SECRET=your_auth_secret

   BLOB_READ_WRITE_TOKEN=your_blob_read_write_token

   POSTGRES_URL=your_postgres_url

   //Default URL would be http://localhost:11434 if this value is missing. If you are using ngrok, change this value to the new URL provided everytime you create an ngrok endpoint.
   OLLAMA_BASE_URL=your_ollama_base_url
   ```

   Replace `your_openai_api_key`, `your_auth_secret`, `your_blob_read_write_token`, `your_postgres_url`, and `your_ollama_base_url` with your actual values.

Once you have these prerequisites set up, follow the steps below to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/uit-pdf-chat.git
   ```
2. Navigate to the project directory:
   ```bash
   cd uit-pdf-chat
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create the `.env.local` file:
   ```bash
   touch .env.local
   ```
5. Add the environment variables to the `.env.local` file as mentioned above.

6. Build the project:

   ```bash
   npm run build
   ```

7. Start the development server:
   ```bash
   npm run dev
   ```
8. Open your browser and go to `http://localhost:3000`

## Demo
[![Demo](https://markdown-videos-api.jorgenkh.no/url?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9_rforZjJSI)](https://www.youtube.com/watch?v=9_rforZjJSI)
