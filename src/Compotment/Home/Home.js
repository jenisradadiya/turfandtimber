import React from 'react'
import Hero from './Hero'
import ChooseUs from './ChooseUs'
import KeepInTouch from './KeepInTouch'
import OtherServices from './OtherServices'

export default function Home() {
  return (
    <div>
      <Hero/>
      <OtherServices/>
      <KeepInTouch/>
      <ChooseUs/>
    </div>
  )
}
