import fetch from 'isomorphic-unfetch'
import { applyFileAdapters, toJSON, csvToJSON } from './adapters'

const request = async (url, options = null) => {
  try {
    const response = await fetch(`${process.env.API}${url}`, options)
    const textFile = await response.text()
    const json = await applyFileAdapters(textFile, [toJSON, csvToJSON])

    return json
  } catch (error) {
    throw error
  }
}

export default request
