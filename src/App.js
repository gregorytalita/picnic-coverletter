import React, { useState } from 'react'
import { Parallax } from 'react-spring/renderprops-addons'
import { toDos } from './core/constants'
import { 
  Clouds, 
  Faces, 
  ToDoList, 
  Introduction,
  ParallaxLayerCentered,
  ContentWrapper
} from './components'

const App = () => {
  const [ points, setPoints ] = useState(0)

  const getContact = () => {
    if(points <= toDos.length/2) {
      return 'I`m sure that I can do that, let`s grab a coffee and talk more about it'
    } else if (points >= toDos.length - 2) {
      return 'When is my first day? I`m more than ready!'
    } else if (points >= toDos.length/2){
      return 'Seems like I have almost all qualities...'
    }
  }

  return (
    <Parallax pages={3}>
      <Clouds />
      <Faces />

      <ParallaxLayerCentered offset={0} speed={1}>
        <Introduction texts={[
          {
            text: ['Are you looking for', 'a', 'Web Developer?'],
            time: 1000
          },
          {
            text: ['I think', 'you just found', 'the right candidate'],
            time: 4500
          },
          {
            text: ['I`m more than ready!', 'Scroll to check it out'],
            time: 9000
          }
        ]}/>
      </ParallaxLayerCentered>

      <ParallaxLayerCentered factor={1} offset={1} speed={1.5}>
        <ContentWrapper>
          <h1 style={{textAlign: 'center'}}>
            Click at the qualities that you think <br/> the perfect candidate should have/do:
          </h1>
          <ToDoList toDos={toDos} setPoints={setPoints}/>
        </ContentWrapper>
      </ParallaxLayerCentered>

      <ParallaxLayerCentered factor={1.25} offset={2} speed={0.4}>
        <ContentWrapper>
          <h1 style={{textAlign: 'center'}}>
            {getContact()}          
          </h1>
          <p style={{textAlign: 'center'}}>
            Check out my <a href='https://www.linkedin.com/in/gregory-talita/' target='_blank'>Linkedin</a> or 
            Let's schedule a <a href='mailto:talitagregory@hotmail.com'>call</a>!
          </p>
          </ContentWrapper>
      </ParallaxLayerCentered>
    </Parallax> 
  )
}

export default App
