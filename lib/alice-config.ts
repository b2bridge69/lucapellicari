export const ALICE_CONFIG = {
  agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || '',
  name: 'Alice',
  role: 'Assistente AI',
  greeting: 'Ciao, sono Alice. Vuoi parlare?',
  // Frase d'apertura usata SOLO quando Alice viene lanciata dalla sezione AlphaKom (#alphakom).
  // Richiede che l'override del "First message" sia abilitato nell'agente su ElevenLabs.
  alphakomFirstMessage: 'Come funziona ALPHA IN-FLOW PROTOCOL AI?',
  colors: {
    teal: '#6B9BAE',
    tealLight: '#8FB8C7',
    coral: '#C4956A',
    navy: '#3D5A73',
    navyDark: '#2C4356',
    cream: '#FAF7F2',
  },
} as const
