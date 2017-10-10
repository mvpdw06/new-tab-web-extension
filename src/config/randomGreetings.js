const greetings = [
  'How are you doing?',
  'Nice to see you!',
  'How’s it going?',
  'How’s everything?',
  'Howdy!',
  'How’s your day?',
  'How’s today?',
  'What’s up?',
  'How’s it hanging?',
  'How’s life treating you?'
]

export const randomGreeting =
  greetings[Math.floor(Math.random() * greetings.length) + 1]
