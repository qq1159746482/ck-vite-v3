/*
 * @Author: PCOS-2022SXGVAQ\Administrator 1159746482@qq.com
 * @Date: 2023-01-11 09:50:07
 * @LastEditors: PCOS-2022SXGVAQ\Administrator 1159746482@qq.com
 * @LastEditTime: 2023-01-11 10:03:03
 * @FilePath: \github\ck-vite-v3\src\utils\mode_util.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import Model from '../components/mode.vue'
export function openModel() {
  const dom = document.createElement('div');
  document.body.appendChild(dom)
  const model = createApp(Model, {
    modalVisible: true,
    close: () => {
      model.unmount();
      document.body.removeChild(dom)
    }
  })
  model.mount(dom)
}