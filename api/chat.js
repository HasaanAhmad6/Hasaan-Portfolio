import {
  runRagPipeline,
  createGeminiEmbeddingAdapter,
  createGeminiLLMAdapter,
  createSupabaseVectorStore,
} from '@hasaan_6/rag-chatbot-widget/server'

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { question, conversation } = req.body

    if (!question) {
      return res.status(400).json({ error: 'Question is required' })
    }

    const supabaseUrl = process.env.VITE_SUPABASE_URL
    const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY
    const geminiApiKey = process.env.VITE_GEMINI_API_KEY

    if (!supabaseUrl || !supabaseAnonKey || !geminiApiKey) {
      return res.status(500).json({ error: 'Missing environment variables on server' })
    }

    const config = {
      embeddingAdapter: createGeminiEmbeddingAdapter(geminiApiKey),
      llmAdapter: createGeminiLLMAdapter(geminiApiKey, 'gemini-2.5-flash'),
      vectorStore: createSupabaseVectorStore(supabaseUrl, supabaseAnonKey),
    }

    const result = await runRagPipeline(question, conversation || [], config)
    return res.status(200).json(result)
  } catch (error) {
    console.error('[Chat API Error]:', error)
    return res.status(500).json({
      error: 'Internal Server Error',
      message: error instanceof Error ? error.message : String(error),
    })
  }
}
