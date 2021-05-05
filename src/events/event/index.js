exports.handler = async function subscribe (event) {
  console.log('Received event!')
  console.log('process.env.CUSTOM_ENV_VAR:', process.env.CUSTOM_ENV_VAR)
  return
}
