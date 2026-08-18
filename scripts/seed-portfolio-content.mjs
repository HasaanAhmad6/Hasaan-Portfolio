import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import {
  createGeminiEmbeddingAdapter,
  createOpenAIEmbeddingAdapter,
  ingestDocument,
} from '@hasaan_6/rag-chatbot-widget/server'

function loadEnvFile(filePath) {
  const env = {}
  try {
    const contents = readFileSync(filePath, 'utf8')
    for (const line of contents.split(/\r?\n/)) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const equalsIndex = trimmed.indexOf('=')
      if (equalsIndex === -1) continue
      const key = trimmed.slice(0, equalsIndex).trim()
      let value = trimmed.slice(equalsIndex + 1).trim()
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1)
      }
      env[key] = value
    }
  } catch {
    // ignore if file doesn't exist
  }
  return env
}

function toChunks() {
  return [
    {
      metadata: {
        title: 'Hero and introduction',
        section: 'hero',
        url: '/#hero',
      },
      content:
        'Hasaan Ahmad is a Computer Science undergraduate and full-stack developer specializing in React, Next.js, AWS Cloud, and AI/Machine Learning solutions. He is available for internships, full-time engineering roles, and freelance projects. He is based in Gujranwala, Pakistan and open to remote work worldwide.',
    },
    {
      metadata: {
        title: 'About me and Education',
        section: 'about',
        url: '/#about',
      },
      content:
        'Hasaan Ahmad is a Computer Science undergraduate at the University of Central Punjab. He builds innovative web applications, scalable cloud backends, and AI-powered solutions. He possesses hands-on expertise with React, Next.js, Three.js, AWS EC2/S3/Lambda, TensorFlow, Flask, and database architecture.',
    },
    {
      metadata: {
        title: 'Technical Skills and Expertise',
        section: 'skills',
        url: '/#skills',
      },
      content:
        'Frontend Development: React, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Framer Motion, Responsive Design. Cloud and DevOps: AWS (EC2, S3, Lambda), Firebase Cloud Functions, REST APIs, Serverless. Database Systems: PostgreSQL, MySQL, MongoDB, Supabase pgvector, Schema Normalization, Query Optimization. AI and Machine Learning: TensorFlow, Python, Computer Vision, OpenCV, RAG (Retrieval-Augmented Generation), Gemini LLM, LangChain.',
    },
    {
      metadata: {
        title: 'Project: Image Tampering Detection System',
        section: 'projects',
        url: '/projects/image-tampering-detection',
      },
      content:
        'Image Tampering Detection System: AI-powered computer vision system built with TensorFlow, Python, OpenCV, and Flask that detects authentic vs manipulated or spliced images with over 90% accuracy, providing real-time manipulation heatmaps and forensic analysis.',
    },
    {
      metadata: {
        title: 'Project: RAG Conversational Assistant & NPM Widget',
        section: 'projects',
        url: '/projects/rag-portfolio-chatbot',
      },
      content:
        'RAG Conversational Assistant (@hasaan_6/rag-chatbot-widget): A production-grade retrieval-augmented generation chatbot widget published on NPM. Built with React, Next.js, Supabase pgvector cosine similarity search, and Google Gemini 2.5 flash LLM for intelligent, context-aware interactive answers.',
    },
    {
      metadata: {
        title: 'Project: Firebase Automation Tool',
        section: 'projects',
        url: '/projects/firebase-automation-tool',
      },
      content:
        'Firebase Automation Tool: Serverless workflow automation platform leveraging Firebase Cloud Functions, Node.js, and Cloud Firestore to streamline event-driven business operations, cutting manual processing time by 60%.',
    },
    {
      metadata: {
        title: 'Project: Electricity Consumption Forecasting',
        section: 'projects',
        url: '/projects/electricity-consumption-forecasting',
      },
      content:
        'Electricity Consumption Forecasting: Time-series forecasting machine learning application deployed on AWS EC2 with Python, Streamlit, and Pandas to predict power consumption trends and help optimize energy distribution.',
    },
    {
      metadata: {
        title: 'Project: Truck Dispatch Management System',
        section: 'projects',
        url: '/projects/truck-dispatch-management-system',
      },
      content:
        'Truck Dispatch Management System: Comprehensive relational logistics database system designed in SQL and MySQL to coordinate drivers, fleet vehicles, delivery routes, and schedules for 100+ daily transit operations with optimized indexing.',
    },
    {
      metadata: {
        title: 'Contact Information and Social Profiles',
        section: 'contact',
        url: '/#connect',
      },
      content:
        'Hasaan Ahmad contact details: Email: hasaanahmadn6@gmail.com. Location: Gujranwala, Pakistan. WhatsApp: +92 303 5696807. GitHub: https://github.com/Hasaan6. LinkedIn: https://www.linkedin.com/in/hasaan-ahmad-13b605334/. Open to internships, full-time software engineering roles, and freelance collaborations.',
    },
  ]
}

async function seed() {
  const envLocal = loadEnvFile(resolve(process.cwd(), '.env.local'))
  const env = loadEnvFile(resolve(process.cwd(), '.env'))
  const merged = { ...env, ...envLocal, ...process.env }

  const supabaseUrl =
    merged.NEXT_PUBLIC_SUPABASE_URL || merged.SUPABASE_URL || merged.VITE_SUPABASE_URL
  const supabaseKey =
    merged.SUPABASE_SERVICE_ROLE_KEY || merged.SUPABASE_ANON_KEY || merged.VITE_SUPABASE_ANON_KEY
  const geminiApiKey = merged.GEMINI_API_KEY || merged.VITE_GEMINI_API_KEY
  const openAiApiKey = merged.OPENAI_API_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing Supabase URL or Key in environment.')
    process.exit(1)
  }

  const provider = (merged.EMBEDDING_PROVIDER || 'gemini').toLowerCase()
  let embedText

  if (provider === 'openai') {
    if (!openAiApiKey) {
      console.error('❌ Missing OPENAI_API_KEY for OpenAI embeddings.')
      process.exit(1)
    }
    embedText = createOpenAIEmbeddingAdapter(openAiApiKey)
  } else {
    if (!geminiApiKey) {
      console.error('❌ Missing GEMINI_API_KEY for Gemini embeddings.')
      process.exit(1)
    }
    embedText = createGeminiEmbeddingAdapter(geminiApiKey)
  }

  console.log(`🚀 Starting portfolio content ingestion using [${provider}] embeddings...`)

  const chunks = toChunks()
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i]
    console.log(`Processing [${i + 1}/${chunks.length}]: ${chunk.metadata.title}...`)
    try {
      await ingestDocument(
        chunk.content,
        chunk.metadata,
        embedText,
        supabaseUrl,
        supabaseKey
      )
      console.log(`✅ Ingested: ${chunk.metadata.title}`)
    } catch (err) {
      console.error(`❌ Failed to ingest ${chunk.metadata.title}:`, err.message || err)
    }
  }

  console.log('🎉 Portfolio knowledge base successfully seeded!')
}

seed().catch((err) => {
  console.error('Fatal error seeding portfolio:', err)
  process.exit(1)
})
