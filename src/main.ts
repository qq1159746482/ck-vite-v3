/*
 * @Author: PCOS-2022SXGVAQ\Administrator 1159746482@qq.com
 * @Date: 2022-10-17 16:21:19
 * @LastEditors: PCOS-2022SXGVAQ\Administrator 1159746482@qq.com
 * @LastEditTime: 2023-01-30 17:06:03
 * @FilePath: \github\ck-vite-v3\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import 'driver.js/dist/driver.min.css';
import 'vant/lib/index.css';
import router from './router/index.js';//添加router
import App from './App.vue'
import index from './dome/index.vue'

import { Image as VanImage } from 'vant';

let app = createApp(App)
app.config.errorHandler = (err, instance, info) => {
  // 处理错误，例如：报告给一个服务
  console.log("vue运行出异常了：",err);
}
app.use(VanImage).use(router).mount('#app')

//引入layui
/*
  const layui = (window as any).layer
  console.log("layui",layui);
  layui.msg('hello');
*/