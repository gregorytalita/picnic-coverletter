import React from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

import Thinking from '../../assets/thinking.svg'

const Faces = () => (
  <>
    <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.1 }}>
      <img alt='Thinking Face svg' src={Thinking} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
      <img alt='Thinking Face svg' src={Thinking} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
    </ParallaxLayer>

    <ParallaxLayer offset={0.5} speed={0.5} style={{ opacity: 0.1 }}>
      <img alt='Thinking Face svg' src={Thinking} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
      <img alt='Thinking Face svg' src={Thinking} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
    </ParallaxLayer>

    <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 0.2 }}>
      <img alt='Thinking Face svg' src={Thinking} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
      <img alt='Thinking Face svg' src={Thinking} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
    </ParallaxLayer>

    <ParallaxLayer offset={0.3} speed={-0.1} style={{ opacity: 0.4 }}>
      <img alt='Thinking Face svg' src={Thinking} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
      <img alt='Thinking Face svg' src={Thinking} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
      <img alt='Thinking Face svg' src={Thinking} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
    </ParallaxLayer>

    <ParallaxLayer offset={0.15} speed={0.4} style={{ opacity: 0.6 }}>
      <img alt='Thinking Face svg' src={Thinking} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
      <img alt='Thinking Face svg' src={Thinking} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
    </ParallaxLayer>
  </>
)

export default Faces
