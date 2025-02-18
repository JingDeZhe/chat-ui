export function formatMessage(arg: string | Object, config: string | Object = 'text') {
  const data = typeof arg === 'string' ? { content: arg } : arg
  const rendererConfig = typeof config === 'string' ? { type: config } : config
  return {
    ...rendererConfig,
    data,
  }
}
