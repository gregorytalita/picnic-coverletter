import React from 'react'
import ConfettiDot from '../ConfettiDot'
import { randomInRange, randomIntInRange } from '../../core/functions'


const ConfettiCannon = ({ anchorRef, colors, dotCount }) => (
  <>
    {new Array(dotCount).fill().map((_, index) => (
      <ConfettiDot
        key={index}
        anchorRef={anchorRef}
        color={colors[randomIntInRange(0, colors.length)]}
        initialHorizontal={randomInRange(-250, 250)}
        initialUpwards={randomInRange(200, 700)}
        rotate={randomInRange(0, 360)}
        size={randomInRange(8, 12)}
      />
    ))}
  </>
)

export default ConfettiCannon
