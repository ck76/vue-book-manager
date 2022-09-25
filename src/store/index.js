import { createStore } from 'vuex'
import { UPDATE_CURRENT, UPDATE_BOOK } from './mutation-types'
import createPersistedState from 'vuex-persistedstate'

/**
 * TODO https://vuex.vuejs.org/zh/guide/#%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84-store
 * 每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：

 Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。
 这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。
 */
export default createStore({
  state: {
    books: [],
    current: null
  },
  getters: {
    //获取图书数量
    bookCount(state) {
      return state.books.length
    },
    //列出所有的书
    allBooks(state) {
      return state.books
    },
    //通过页码获取数据
    getRangeByPage(state) {
      return page => {
        const SIZE = 3
        return state.books.slice((page - 1) * SIZE, (page - 1) * SIZE + SIZE)
      }
    },
    //通过ID获取数据
    getBookById(state) {
      return id => {
        return state.books.find(book => book.id === id)
      }
    },
    //获取当前
    current(state) {
      return state.current;
    }
  },
  mutations: {
    //更新当前
    [UPDATE_CURRENT](state, payload) {
      state.current = payload
    },
    //更新图书信息
    [UPDATE_BOOK](state, payload) {
      const b = this.getters.getBookById(payload.id)
      if (b) {
        Object.assign(b, payload)
      } else {
        state.books.push(payload)
      }
    }
  },
  actions: {
    //提交行为
    [UPDATE_CURRENT]({ commit }, payload) {
      commit(UPDATE_CURRENT, payload)
    },
    //提交行为
    [UPDATE_BOOK]({ commit }, payload) {
      commit(UPDATE_BOOK, payload)
    }
  },
  plugins: [
    createPersistedState({
      key: 'reading-recorder',
      storage: localStorage
    })
  ]
})
