import React from 'react'
import {
  ChatbotWidget,
  createGeminiEmbeddingAdapter,
  createGeminiLLMAdapter,
} from '@hasaan_6/rag-chatbot-widget'
import '@hasaan_6/rag-chatbot-widget/dist/chatbot.css'

function getChatbotConfig() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
  const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY

  if (!supabaseUrl || !supabaseAnonKey || !geminiApiKey) {
    return null
  }

  return {
    embeddingAdapter: createGeminiEmbeddingAdapter(geminiApiKey),
    llmAdapter: createGeminiLLMAdapter(geminiApiKey, 'gemini-2.5-flash'),
    supabaseUrl,
    supabaseAnonKey,
  }
}

export default function PortfolioChatbot({ theme = 'dark' }) {
  const config = getChatbotConfig()

  if (!config) {
    return null
  }

  return (
    <ChatbotWidget
      {...config}
      theme={theme}
      botName="Hasaan Assistant"
      botEyebrow="Portfolio Chat"
      toggleLabel="Chat with Hasaan"
      inputPlaceholder="Ask about my projects, skills, or experience..."
      welcomeMsg="Hi, I'm Hasaan's portfolio assistant. Ask me anything about my work, projects, or contact details."
      quickActions={[
        'Show me your projects',
        'What skills do you have?',
        'How can I contact you?',
      ]}
      fallbackMsg="I couldn't find that in the portfolio yet. You can still reach out using the contact form."
      leadFormConfig={{
        leadKicker: 'Let me know how I can help',
        serviceOptions: ['Portfolio Feedback', 'Freelance Project', 'Internship Opportunity', 'General Inquiry'],
        budgetOptions: ['< $1k', '$1k-$5k', '$5k+'],
        contactTimeOptions: ['This week', 'This month', 'Flexible'],
      }}
    />
  )
}
