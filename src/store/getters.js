/*
 * @Author: shaohb
 * @Date: 2021-11-25 16:59:00
 * @LastEditors: shaohb
 * @LastEditTime: 2021-11-30 17:09:47
 * @Description:
 */
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token // 在根级的getters上 开发子模块的属性给别人看 给别人用
}
export default getters
