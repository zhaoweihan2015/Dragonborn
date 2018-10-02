<template>
  <div class="result">
    <el-input type="textarea" autosize placeholder="请输入内容" v-model="info">
    </el-input>
    <el-row>
      <el-col :span="24" class="result-show">
        <canvas ref="canvas" :width="canvaSet.w" :height="canvaSet.h"></canvas>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvaSet: {
        w: 800,
        h: 600,
        fontColor: "#fff",
        backGroundColor: "#000"
      },
      info: "",
      ctx: null,
      map: null,
      isReady: false
    };
  },
  computed: {
    specialWordMap() {
      return this.$store.state.specialWordMap;
    }
  },
  watch: {
    info(val) {
      this.printWord(this.specialWord(val));
    }
  },
  mounted() {
    this.setCanvas();
  },
  methods: {
    specialWord(info) {
      this.specialWordMap.forEach(type => {
        info = info.replace(type.reg, type.val);
      });
      return info;
    },
    imageReload() {
      let img = new Image();
      img.onload = () => {
        this.map = img;
        this.isReady = true;
      };
      img.src = wordMap;
    },
    setCanvas() {
      let { w, h } = this.canvaSet;
      let canvas = this.$refs.canvas;
      this.ctx = canvas.getContext("2d");
      this.ctx.font = "40px dragonscript";
      this.ctx.fillRect(0, 0, w, h);
    },
    clear() {
      let { w, h, backGroundColor } = this.canvaSet;
      this.ctx.fillStyle = backGroundColor;
      this.ctx.fillRect(0, 0, w, h);
    },
    printWord(val) {
      this.clear();
      let { w, fontColor } = this.canvaSet;
      let maxNumber = parseInt((w - 10) / 36);
      this.ctx.fillStyle = fontColor;

      let nowValueList = [],
        nowLength,
        nowY = 0;
      val.split(/[\n|\r]/).forEach(line => {
        nowLength = 0
        line.split(/\s/).forEach(e => {
          if (nowLength + e.length >= (maxNumber - 1)) {
            nowLength = e.length;
            nowY++;
            nowValueList[nowY] = e + " ";
          } else {
            nowLength += e.length;
            nowValueList[nowY] = (nowValueList[nowY] ? nowValueList[nowY] : "") + e + " ";
          }
        });
        nowY++;
      })
      nowValueList.forEach((e, i) => {
        this.ctx.fillText(e, 5, 45 * (i + 1));
      });
    }
  }
};
</script>

<style>
@font-face {
  font-family: "dragonscript";
  src: url("./assets/dragon_alphabet.ttf");
}
.result .result-show div {
  display: block;
  float: left;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  outline: 1px solid black;
}
canvas {
  border: 1px solid black;
  font-family: dragonscript;
}
</style>
