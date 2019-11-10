export const toJSON = async (file: string) => {
  try {
    return JSON.parse(file)
  } catch (error) {
    throw new Error(`File is invalid JSON`)
  }
}

export const csvToJSON = async (file: string) => {
  try {
    const lines = file.split('\n')
    const headLine = lines.shift()
    const headers = headLine.split(',')

    return lines.map((line) => {
      const currentline = line.split(',')

      return headers.reduce((state, header, index) => {
        state[header] = currentline[index]
        return state
      }, {})
    })
  } catch (error) {
    throw new Error(`File is invalid CSV`)
  }
}

export const applyFileAdapters = async (file, adapters) => {
  const [adapter, ...restAdapters] = adapters

  try {
    return await adapter(file)
  } catch (error) {
    if (restAdapters.length !== 0) {
      return await applyFileAdapters(file, restAdapters)
    }

    throw error
  }
}
