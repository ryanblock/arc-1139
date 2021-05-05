let arc = require('@architect/functions')
exports.handler = async function http (req) {
  console.log(`Got HTTP request!`)
  console.log('process.env.CUSTOM_ENV_VAR:', process.env.CUSTOM_ENV_VAR)
  let fired = await arc.events.publish({ name: 'event', payload: {}})
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `fired event: ${fired}`
  }
}
