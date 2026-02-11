import aiReceptionistImg from '../images/AI_receptionist.png'
import discordVoiceBotImg from '../images/discord_voice_bot.png'
import localLLMImg from '../images/Local_LLM_API.png'

export const projects = [
  {
    id: 1,
    title: "AI Voice Receptionist Bot",
    description: "An intelligent AI-powered voice receptionist system that handles incoming phone calls autonomously. The bot uses Twilio for telephony infrastructure, ElevenLabs for natural voice synthesis, OpenAI for real-time speech transcription and conversation understanding, and PostgreSQL for storing call data and conversation history. Provides seamless customer service automation with human-like interactions.",
    technologies: ["Twilio", "ElevenLabs", "OpenAI", "PostgreSQL", "Python"],
    image: aiReceptionistImg,
    liveUrl: "https://www.loom.com/share/d3ce82de65b344099e9c01efaed7de38",
  },
  {
    id: 2,
    title: "Discord Gaming Session Summarizer",
    description: "A Discord voice bot that actively listens to gaming sessions and automatically generates AI-powered summaries of conversations and gameplay moments. Built with Python and the Discord API, it processes voice transcripts using OpenAI to create intelligent summaries that capture key moments, strategies, and highlights from gaming sessions with friends.",
    technologies: ["Python", "Discord API", "OpenAI", "Voice Processing"],
    image: discordVoiceBotImg,
  },
  {
  id: 3,
  title: "Local LLM API",
  description: "Built a local LLM API using MLX to run quantized models directly on-device, exposing a lightweight REST interface for secure, low-latency inference without relying on external cloud providers.",
  technologies: ["Python", "Ollama", "Local LLM", "MLX"],
  image: localLLMImg,
  liveUrl: "https://www.loom.com/share/c342df19b0b24fdfa1006a0da64c002a",
},
]
