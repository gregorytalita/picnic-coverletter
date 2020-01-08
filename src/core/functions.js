export const randomInRange = (min, max) => Math.random() * (max - min) + min
export const randomIntInRange = (min, max) => Math.floor(randomInRange(min, max))
export const randomFromArray = array => array[randomIntInRange(0, array.length)]
export const flipCoin = () => Math.round(Math.random()) === 1
