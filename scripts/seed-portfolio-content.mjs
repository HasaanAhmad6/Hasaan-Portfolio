import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import {
  createGeminiEmbeddingAdapter,
  createOpenAIEmbeddingAdapter,
  ingestDocument,
} from '@hasaan_6/rag-chatbot-widget'

function loadEnvFile(filePath) {
  const env = {}

  const contents = readFileSync(filePath, 'utf8')

  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim()

    if (!trimmed || trimmed.startsWith('#')) {
      continue
    }

    const equalsIndex = trimmed.indexOf('=')

    if (equalsIndex === -1) {
      continue
    }

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

  return env
}

function toChunks() {
  return [
    {
      metadata: {
        title: 'Hero and introduction',
        section: 'hero',
        url: '/#top',
      },
      content:
        'Hasaan Ahmad is a Computer Science student and full-stack developer focused on React, AWS, and AI/ML. He is available for internships and freelance projects and is based in Gujranwala, Pakistan.',
    },
    {
      metadata: {
        title: 'About me',
        section: 'about',
        url: '/#about',
      },
      content:
        'Hasaan is a passionate Computer Science undergraduate at the University of Central Punjab who builds innovative web applications and AI-powered solutions. He has hands-on experience with React, AWS, and machine learning and wants internship opportunities and freelance projects.',
    },
    {
      metadata: {
        title: 'Skills and expertise',
        section: 'skills',
        url: '/#skills',
      },
      content:
        'Frontend Development: React.js, JavaScript ES6+, Tailwind CSS, Responsive Design. Cloud and DevOps: AWS EC2, S3, Lambda, Firebase, REST APIs, Serverless. Database Systems: SQL/MySQL, MongoDB, Database Design, Query Optimization. AI and Machine Learning: TensorFlow, Python, Computer Vision, Data Analysis.',
    },
    {
      metadata: {
        title: 'Featured projects',
        section: 'projects',
        url: '/#projects',
      },
      content:
        'Featured projects include an image tampering detection system using TensorFlow, Flask, and OpenCV with 90 percent plus accuracy; a Firebase automation tool that reduced processing time by 60 percent; an electricity consumption forecasting app using AWS Free Tier, Python, Streamlit, and Pandas; and a truck dispatch management system built with SQL and MySQL for daily operations.',
    },
    {
      metadata: {
        title: 'Continuous learning',
        section: 'learning',
        url: '/#learning',
      },
      content:
        'Current learning goals include advanced AWS architecture, deep learning and neural networks, and scalable backend development with APIs, microservices, and performance optimization.',
    },
    {
      metadata: {
        title: 'Contact details',
        section: 'contact',
        url: '/#contact',
      },
      content:
        'Contact details: email hasaanahmadn6@gmail.com, phone +92 300 1234567, location Gujranwala, Pakistan. Social profiles include GitHub at github.com/Hasaan6 and LinkedIn at linkedin.com/in/hasaan-ahmad-13b605334/.',
    },
  ]
}

async function main() {
  const envPath = resolve(process.cwd(), '.env')
  const env = loadEnvFile(envPath)

  const supabaseUrl = env.VITE_SUPABASE_URL
  const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY
  const supabaseServiceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY
  const geminiApiKey = env.VITE_GEMINI_API_KEY
  const openAiApiKey = env.OPENAI_API_KEY
  const embeddingProvider = (env.EMBEDDING_PROVIDER || 'gemini').toLowerCase()

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing one or more required values in .env')
  }

  const writeKey = supabaseServiceRoleKey || supabaseAnonKey

  console.log('Run supabase/chatbot-schema.sql (or chatbot-schema-migrate-to-3072.sql) in Supabase first.')
  console.log('Then run this script to seed the portfolio content.')
  if (!supabaseServiceRoleKey) {
    console.log('Warning: SUPABASE_SERVICE_ROLE_KEY is not set, so the script will use the anon key.')
  }

  let embeddingAdapter

  if (embeddingProvider === 'openai') {
    if (!openAiApiKey) {
      throw new Error('OPENAI_API_KEY is required when EMBEDDING_PROVIDER=openai')
    }

    console.log('Use supabase/chatbot-schema-openai.sql before seeding with OpenAI embeddings.')
    embeddingAdapter = createOpenAIEmbeddingAdapter(openAiApiKey, 'text-embedding-3-small')
  } else {
    if (!geminiApiKey) {
      throw new Error('VITE_GEMINI_API_KEY is required when EMBEDDING_PROVIDER is not openai')
    }

    console.log('Using gemini-embedding-001 (3072 dimensions).')
    embeddingAdapter = createGeminiEmbeddingAdapter(geminiApiKey)
  }

  const probe = await embeddingAdapter('dimension check')
  console.log('Embedding dimensions:', probe.length)

  const chunks = toChunks()

  for (const chunk of chunks) {
    await ingestDocument(
      chunk.content,
      chunk.metadata,
      embeddingAdapter,
      supabaseUrl,
      writeKey,
    )
  }

  console.log(`Seeded ${chunks.length} documents into Supabase.`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
