import { NextResponse } from "next/server";
import {
  runRagPipeline,
  createGeminiEmbeddingAdapter,
  createGeminiLLMAdapter,
  createSupabaseVectorStore,
} from "@hasaan_6/rag-chatbot-widget/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { question, conversation } = body;

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "A valid question is required." },
        { status: 400 }
      );
    }

    const supabaseUrl =
      process.env.SUPABASE_URL ||
      process.env.NEXT_PUBLIC_SUPABASE_URL ||
      process.env.VITE_SUPABASE_URL;
    const supabaseAnonKey =
      process.env.SUPABASE_ANON_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      process.env.VITE_SUPABASE_ANON_KEY;
    const geminiApiKey =
      process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    if (!supabaseUrl || !supabaseAnonKey || !geminiApiKey) {
      console.error("Missing RAG environment variables:", {
        hasSupabaseUrl: !!supabaseUrl,
        hasSupabaseKey: !!supabaseAnonKey,
        hasGeminiKey: !!geminiApiKey,
      });
      return NextResponse.json(
        { error: "Server configuration missing required environment variables." },
        { status: 500 }
      );
    }

    const config = {
      embeddingAdapter: createGeminiEmbeddingAdapter(geminiApiKey),
      llmAdapter: createGeminiLLMAdapter(geminiApiKey, "gemini-2.5-flash"),
      vectorStore: createSupabaseVectorStore(supabaseUrl, supabaseAnonKey),
    };

    const result = await runRagPipeline(question, conversation || [], config);
    return NextResponse.json(result);
  } catch (error) {
    console.error("[Chat API Route Error]:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
