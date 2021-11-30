import { login } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  // 初始化的时候从缓存中读取状态 并赋值到初始化的状态上
  token: getToken() // 设置token初始状态   token持久化 => 放到缓存中
}

const mutations = {
  // 设置token
  setToken(state, token) {
    state.token = token // 设置token
    setToken(token) // vuex和 缓存数据的同步
  },
  // 删除缓存
  removeToken(state) {
    state.token = null // 删除vuex的token
    removeToken() // 先清除 vuex  再清除缓存 vuex和 缓存数据的同步
  }
}

const actions = {
  async login(context, data) {
    const result = await login(data)
    // axios默认给数据加了一层data
    if (result.data.success) {
      // actions 修改state 必须通过mutations
      context.commit('setToken', result.data.data)
    }
  }
}

export default {
  state,
  mutations,
  actions
}

