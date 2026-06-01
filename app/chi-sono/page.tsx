import { Metadata } from 'next'
import { ChiSonoHero } from './components/ChiSonoHero'
import { Stemma } from './components/Stemma'
import { Story } from './components/Story'
import { Credentials } from './components/Credentials'
import { Values } from './components/Values'
import { ChiSonoCTA } from './components/ChiSonoCTA'

export const metadata: Metadata = {
  title: 'Chi Sono',
  description:
    'Io sono Luca Pellicari. Non sono qui per motivarti. Sono qui per aiutarti a diventare ciò che già sei. Fondatore AlphaKom & Quantum Academy.',
}

export default function ChiSonoPage() {
  return (
    <>
      <ChiSonoHero />
      <Stemma />
      <Story />
      <Credentials />
      <Values />
      <ChiSonoCTA />
    </>
  )
}
