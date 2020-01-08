import React from 'react'
import styled from 'styled-components'
import { confettiColors } from '../../core/constants'
import { ToDo } from '../'

const ToDoListStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`

const ToDoList = ({ toDos, setPoints }) => (
  <ToDoListStyle>
    {toDos.map(toDo => (
      <ToDo
        colors={confettiColors}
        key={toDo}
        text={toDo}
        setPoints={setPoints}
      />
    ))}
  </ToDoListStyle>
)

export default ToDoList
