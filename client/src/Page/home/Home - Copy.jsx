import React from 'react'
import Hero from '../../Compotment/Home/Hero'
import ChooseUs from '../../Compotment/Home/ChooseUs'
import KeepInTouch from '../../Compotment/Home/KeepInTouch'
import HomeQuote from '../../Compotment/Home/HomeQuote'
import Friendly from '../../Compotment/Home/Friendly'
import CredibilitySection from '../../Compotment/Home/CredibilitySection'
import Testinomial from '../../Compotment/Home/Testinomial'
import ServicesSection from '../../Compotment/Home/ServicesSection'

export default function Home() {
  return (
    <div>
      <Hero/>
      <HomeQuote/>
      <Friendly/>
      <ServicesSection/>
      <CredibilitySection/>
      <KeepInTouch/>
      <ChooseUs/>
      <Testinomial/>
    </div>
  )
}
