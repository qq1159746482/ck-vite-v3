/*
 * @Author: PCOS-2022SXGVAQ\Administrator 1159746482@qq.com
 * @Date: 2023-01-09 10:57:43
 * @LastEditors: PCOS-2022SXGVAQ\Administrator 1159746482@qq.com
 * @LastEditTime: 2023-01-17 08:14:14
 * @FilePath: \github\ck-vite-v3\src\utils\util.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref, watchEffect } from 'vue'
const useLocalStorage = (key:string , val:any):any =>{
  const data = ref( localStorage.getItem(key) || val )
  watchEffect(()=>{
    localStorage.setItem(key, JSON.stringify(data.value))
  })
  return data;
}
interface stu{
  id: string
}

const a: stu = {
  id: ''
}
let ac:number | any = ref(3)
export {
  useLocalStorage
}