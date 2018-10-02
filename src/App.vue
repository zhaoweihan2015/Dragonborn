<template>
  <div class="result">
    <div class="button-set">
      <div :style="canvasWidth">
        <el-button @click="controlInfo(true)">输入文本</el-button>
        <el-button @click="controlSet(true)">设置</el-button>
      </div>
    </div>
    <result ref="result" />
    <el-dialog title="输入文本" :visible.sync="showInfo">
      <info @close="controlInfo" @print="printNow" />
    </el-dialog>
    <el-dialog title="设置" :visible.sync="showSet">
      <set @close="controlSet" />
    </el-dialog>
  </div>
</template>

<script>
import Info from "./components/Info";
import Result from "./components/Result";
import Set from "./components/Set";
export default {
  data() {
    return {
      showInfo: false,
      showSet: false,
    }
  },
  components: {
    Info,
    Result,
    Set
  },
  mounted(){
    console.log(this.canvasWidth)
  },
  computed: {
    canvasWidth() {
      return `width:${this.$store.state.canvaSet.w}px`;
    }
  },
  methods: {
    controlInfo(value) {
      this.showInfo = value;
    },
    controlSet(value) {
      this.showSet = value;
    },
    printNow() {
      this.$refs.result.print();
    }
  }
};
</script>

<style>
.result {
  padding: 0 10%;
}
.result .button-set {
  text-align: left;
  padding: 20px 0;
}
.result .button-set>div{
  margin: 0 auto;
}
</style>
