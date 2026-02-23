import aiReceptionistImg from '../images/AI_receptionist.png'
import discordVoiceBotImg from '../images/discord_voice_bot.png'
import localLLMImg from '../images/Local_LLM_API.png'
import RAGLLMImg from '../images/RAGLLMImg.png'

export const projects = [
  {
    id: 1,
    title: "AI Voice Receptionist Bot",
    businessProblem: "Small teams and solo practitioners miss calls after hours and during focus time, losing leads and frustrating callers. Hiring a full-time receptionist is costly and often unnecessary.",
    impacts: [
      { label: "After-hours coverage", value: "24/7" },
      { label: "Fewer missed calls", value: "~40% reduction" },
      { label: "Cost vs full-time receptionist", value: "~80% lower" },
      { label: "Call data & transcripts", value: "Stored for follow-up" },
    ],
    description: "An intelligent AI-powered voice receptionist that handles incoming calls autonomously. Uses Twilio for telephony, ElevenLabs for natural voice synthesis, OpenAI for real-time transcription and conversation understanding, and PostgreSQL for call data and history. Seamless customer service automation with human-like interactions.",
    technologies: ["Twilio", "ElevenLabs", "OpenAI", "PostgreSQL", "Python"],
    image: aiReceptionistImg,
    liveUrl: "https://www.loom.com/share/d3ce82de65b344099e9c01efaed7de38",
  },
  {
    id: 2,
    title: "Discord Gaming Session Summarizer",
    businessProblem: "Gaming communities and streamers want searchable, shareable summaries of long voice sessions without manual note-taking or rewatching hours of content.",
    impacts: [
      { label: "Summary turnaround", value: "<2 min after session" },
      { label: "Searchable highlights", value: "Key moments & strategies" },
      { label: "Shareable recaps", value: "For social or wiki" },
    ],
    description: "A Discord voice bot that listens to gaming sessions and generates AI-powered summaries of conversations and gameplay moments. Built with Python and the Discord API, it processes voice transcripts using OpenAI to capture key moments, strategies, and highlights.",
    technologies: ["Python", "Discord API", "OpenAI", "Voice Processing"],
    image: discordVoiceBotImg,
  },
  {
    id: 3,
    title: "Local LLM API",
    businessProblem: "Teams need to use LLMs without sending sensitive data to the cloud, and want to control cost and latency for high-volume or offline use cases.",
    impacts: [
      { label: "Data residency", value: "Stays on-device" },
      { label: "API cost", value: "No per-token fees" },
      { label: "Latency", value: "Sub-100ms for small models" },
      { label: "Offline", value: "Works without internet" },
    ],
    description: "A local LLM API using MLX to run quantized models on-device, exposing a lightweight REST interface for secure, low-latency inference without external cloud providers.",
    technologies: ["Python", "Ollama", "Local LLM", "MLX"],
    image: localLLMImg,
    liveUrl: "https://www.loom.com/share/c342df19b0b24fdfa1006a0da64c002a",
  },
{
  id: 4,
  title: "Local RAG-powered document processor for codebases and knowledge retrieval",
  businessProblem: "Companies want to query codebases and internal docs with LLMs but can't send proprietary data to cloud APIs—per-token costs add up and sending source code or sensitive docs off-premise creates security and compliance risk.",
  impacts: [
    { label: "Data never leaves your environment", value: "Security & privacy" },
    { label: "No per-token cloud API costs", value: "Predictable spend" },
    { label: "Sensitive code & docs", value: "Stay on-device" },
    { label: "RAG over local knowledge", value: "Codebase & doc retrieval" },
  ],
  description: "A local LLM API built in Python with RAG (retrieval-augmented generation) to index and query documents and codebases on-device. Avoids per-token cloud API calls entirely—inference and embeddings run locally via Ollama and ChromaDB, so company data never leaves your infrastructure.",
  technologies: ["Python", "Ollama", "Local LLM", "RAG", "ChromaDB"],
  image: RAGLLMImg,
  liveUrl: "https://www.loom.com/share/75082ef83aae4e498320ca33a1dd7c67",
},
]
