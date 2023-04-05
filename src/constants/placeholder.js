const imputPlaceholder = [
  'Fast & Furious..., Ace Ventura..., the odd... ',
  'Spider-Man..., Avengers..., Batman...',
  'dr. dolittle..., tim tim..., 007...',
  'Avengers..., Matrix..., Balto...'
]

function getRandomPlaceholder(placeholders) {
  return Math.floor(Math.random() * placeholders.length)
}

function actualPlaceHolder(holders) {
  return holders[getRandomPlaceholder(imputPlaceholder)]
}

export const placeholder = actualPlaceHolder(imputPlaceholder)
