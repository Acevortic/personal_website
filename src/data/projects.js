import aiReceptionistImg from '../images/AI_receptionist.png'
import discordVoiceBotImg from '../images/discord_voice_bot.png'

export const projects = [
  {
    id: 1,
    title: "AI Voice Receptionist Bot",
    description: "An intelligent AI-powered voice receptionist system that handles incoming phone calls autonomously. The bot uses Twilio for telephony infrastructure, ElevenLabs for natural voice synthesis, OpenAI for real-time speech transcription and conversation understanding, and PostgreSQL for storing call data and conversation history. Provides seamless customer service automation with human-like interactions.",
    technologies: ["Twilio", "ElevenLabs", "OpenAI", "PostgreSQL", "Python"],
    image: aiReceptionistImg,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Discord Gaming Session Summarizer",
    description: "A Discord voice bot that actively listens to gaming sessions and automatically generates AI-powered summaries of conversations and gameplay moments. Built with Python and the Discord API, it processes voice transcripts using OpenAI to create intelligent summaries that capture key moments, strategies, and highlights from gaming sessions with friends.",
    technologies: ["Python", "Discord API", "OpenAI", "Voice Processing"],
    image: discordVoiceBotImg,
    liveUrl: "#",
    githubUrl: "#",
  },
]
