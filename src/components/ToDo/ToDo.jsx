import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import ConfettiCannon from '../ConfettiCannon'
import { positiveCheck } from '../../core/constants'
import { randomFromArray } from '../../core/functions'

const ToDoItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 800px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`
const Styled = styled.div`
  display: inline-block;
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
    }
    &:after {
      content: '✔';
      position: absolute;
      top: -1px; left: 2px;
      font-size: 2rem;
      color: #09ad7e;
      transition: all .2s;
    }
  }
  > input:not(:checked) + label {
      &:after {
        opacity: 0;
        transform: scale(0);
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`

const StyledSpan = styled.span`
  font-size: 1.6rem;
  color: #c23369;
  margin-left: 8px;
`

const ToDo = ({ colors, text, setPoints }) => {
  const confettiAnchorRef = useRef()
  const [done, setDone] = useState(false)

  const handleCheck = () => {
    setDone(!done)
    done ? setPoints(currentPoints => currentPoints-=1) : setPoints(currentPoints => currentPoints+=1)
  }

  return (
    <ToDoItem>
      <Styled onClick={handleCheck}>
        <input
          type="checkbox"
          checked={done}
        />
        <label>
          {text}
        </label>
        <StyledSpan>
          { done && randomFromArray(positiveCheck)}
        </StyledSpan>
      </Styled>
      {done && (
        <ConfettiCannon
          anchorRef={confettiAnchorRef}
          colors={colors}
          dotCount={50}
        />
      )}
    </ToDoItem>
  )
}

export default ToDo
