import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1760832_4i9pxof1cj.js',
})
import App from './App'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import '@/vab'
/**
 
 * @description 正式环境默认使用mock，正式项目记得注释后再打包
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('@/utils/static')
  mockXHR()
}
createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .component('IconFont', IconFont)
  .mount('#app')
