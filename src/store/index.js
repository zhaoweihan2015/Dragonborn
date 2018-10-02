import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
let state = {
  info: '1',
  canvaSet: {
    w: 800,
    h: 600,
    fontColor: "#000",
    backGroundColor: "#fff"
  },
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
  setInfo(state, value) {
    state.info = value;
  },
  set(state, value) {
    for (const key in value) {
      state.canvaSet[key] = value[key];
    }
  }
}
export default new Vuex.Store({
  state,
  mutations
})
