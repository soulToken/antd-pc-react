let messages = {},newMessage={};
const apiContext = require.context('./', true, /\.js$/)
apiContext.keys().forEach(component => {
  const apiConfig = apiContext(component)

  /**
  * 兼容 import export 和 require module.export 两种规范
  */
  const ctrlObj = apiConfig.default || apiConfig
 messages= { ...messages,...ctrlObj}
})
newMessage.en=messages

export default newMessage;