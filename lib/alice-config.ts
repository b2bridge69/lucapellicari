export const ALICE_CONFIG = {
  // Agente ElevenLabs "enhanced". Hardcoded di proposito: ha la precedenza su un eventuale
  // NEXT_PUBLIC_ELEVENLABS_AGENT_ID impostato in hosting, così l'agente nuovo è sempre quello
  // usato dall'interfaccia custom di Alice. Per cambiare agente in futuro, modificare qui.
  agentId: 'agent_7801kz1f0jt4fz5rmaksvghvqjgr',
  name: 'Alice',
  role: 'Assistente AI',
  greeting: 'Ciao, sono Alice. Vuoi parlare?',
  // Frase d'apertura usata SOLO quando Alice viene lanciata dalla sezione AlphaKom (#alphakom).
  alphakomFirstMessage: 'Come funziona ALPHA IN-FLOW PROTOCOL AI?',
  // ATTENZIONE: mettere a `true` SOLO dopo aver abilitato l'override del "First message"
  // nell'agente ElevenLabs (Security) — e va riabilitato sul NUOVO agente, non si eredita.
  // Se è `true` senza quell'impostazione, ElevenLabs rifiuta la sessione e la conversazione
  // termina all'istante. Con `false` l'override non viene inviato e Alice funziona normalmente.
  // Rimesso a `false` durante lo switch al nuovo agente (impostazione di Security da riverificare).
  firstMessageOverrideEnabled: false,
  colors: {
    teal: '#6B9BAE',
    tealLight: '#8FB8C7',
    coral: '#C4956A',
    navy: '#3D5A73',
    navyDark: '#2C4356',
    cream: '#FAF7F2',
  },
} as const
