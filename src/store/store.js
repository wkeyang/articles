import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    src:'http://www.xiaorui.store'
  },
  mutations:{
    showPeople(state,book){
      state.book_id = book // 书id
    },
  }
})
export default store
