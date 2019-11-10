import fs from 'fs'
import path from 'path'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

export default (req, res) => {
  const fileExtension = Math.random() > 0.5 ? 'json' : 'csv'
  const filePath = path.join(serverRuntimeConfig.PROJECT_ROOT, `/mock_data/testtakers.${fileExtension}`)
  const data = fs.readFileSync(filePath, 'binary')

  res.statusCode = 200
  res.send(data)
}
