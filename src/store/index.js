import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
let state = {
    message: '1',
    checkMap: {
        "aa": /aa/g,
        "ah": /ah/g,
        "ei": /ei/g,
        "ey": /ey/g,
        "oo": /oo/g,
        "ii": /ii/g,
        "ir": /ir/g,
        "ur": /ur/g,
        "uu": /uu/g,
        "a": /a/g,
        "b": /b/g,
        "d": /d/g,
        "e": /e/g,
        "f": /f/g,
        "g": /g/g,
        "h": /h/g,
        "i": /i/g,
        "j": /j/g,
        "k": /k/g,
        "l": /l/g,
        "m": /m/g,
        "n": /n/g,
        "o": /o/g,
        "p": /p/g,
        "q": /q/g,
        "r": /r/g,
        "s": /s/g,
        "t": /t/g,
        "u": /u/g,
        "v": /v/g,
        "w": /w/g,
        "x": /x/g,
        "y": /y/g,
        "z": /z/g,
    },
    imageMap: {
        "a": [0, 0],
        "aa": [0, 1],
        "ah": [0, 2],
        "b": [0, 3],
        "d": [0, 4],
        "e": [0, 5],
        "ei": [0, 6],
        "ey": [1, 0],
        "f": [1, 1],
        "g": [1, 2],
        "h": [1, 3],
        "i": [1, 4],
        "ii": [1, 5],
        "ir": [1, 6],
        "j": [2, 0],
        "k": [2, 1],
        "l": [2, 2],
        "m": [2, 3],
        "n": [2, 4],
        "o": [2, 5],
        "oo": [2, 6],
        "p": [3, 0],
        "q": [3, 1],
        "r": [3, 2],
        "s": [3, 3],
        "t": [3, 4],
        "u": [3, 5],
        "ur": [3, 6],
        "uu": [4, 0],
        "v": [4, 1],
        "w": [4, 2],
        "x": [4, 3],
        "y": [4, 4],
        "z": [4, 5],
    }
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