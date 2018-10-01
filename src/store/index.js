import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
let state = {
  message: '1',
  specialWordMap: [{
      reg: /aa/g,
      val: 1
    },
    {
      reg: /ei/g,
      val: 2
    },
    {
      reg: /ii/g,
      val: 3
    },
    {
      reg: /ah/g,
      val: 4
    },
    {
      reg: /uu/g,
      val: 5
    },
    {
      reg: /ur/g,
      val: 6
    },
    {
      reg: /ir/g,
      val: 7
    },
    {
      reg: /oo/g,
      val: 8
    },
    {
      reg: /ey/g,
      val: 9
    }
  ]
}
let mutations = {
  setMessage(state, value) {
    state.message = value;
  }
}
export default new Vuex.Store({
  state,
  mutations
})
