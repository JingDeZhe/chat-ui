import ky from 'ky'

export function chatWithAi(messages: ChatMessage[]) {
  return ky
    .post('http://localhost:5177/ai/qwen', {
      json: { messages },
      timeout: 20000,
    })
    .json()
    .then((d: any) => {
      return d.choices[0].message
    })
}
