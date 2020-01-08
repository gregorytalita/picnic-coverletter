import React from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import Cloud from '../../assets/cloud.svg'

const Clouds = () => (
  <>
    <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
      <img alt='Cloud svg' src={Cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
      <img alt='Cloud svg' src={Cloud} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
    </ParallaxLayer>

    <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
      <img alt='Cloud svg' src={Cloud} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
      <img alt='Cloud svg' src={Cloud} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
    </ParallaxLayer>

    <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
      <img alt='Cloud svg' src={Cloud} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
      <img alt='Cloud svg' src={Cloud} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
    </ParallaxLayer>

    <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
      <img alt='Cloud svg' src={Cloud} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
      <img alt='Cloud svg' src={Cloud} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
      <img alt='Cloud svg' src={Cloud} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
    </ParallaxLayer>

    <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
      <img alt='Cloud svg' src={Cloud} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
      <img alt='Cloud svg' src={Cloud} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
    </ParallaxLayer>
  </>
)

export default Clouds
