<template>
    <el-row>
        <el-col :span="24" class="result-show">
            <canvas ref="canvas" :width="canvaSet.w" :height="canvaSet.h"></canvas>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            ctx: null,
            map: null,
            isReady: false
        };
    },
    computed: {
        // 获取文本
        info() {
            return this.$store.state.info;
        },
        // 初始化设置
        canvaSet() {
            return this.$store.state.canvaSet;
        },
        // 特殊字母对照表
        specialWordMap() {
            return this.$store.state.specialWordMap;
        }
    },
    watch: {
        canvaSet: {
            handler(val) {
                this.print();
            },
            deep: true
        }
    },
    mounted() {
        this.setCanvas();
    },
    methods: {
        print() {
            this.clear();
            this.$nextTick(() => {
                this.printWord(this.specialWord(this.info));
            })
        },
        // 特殊字母处理
        specialWord(info) {
            this.specialWordMap.forEach(type => {
                info = info.replace(type.reg, type.val);
            });
            return info;
        },
        // canvas画布初始化
        setCanvas() {
            let canvas = this.$refs.canvas;
            this.ctx = canvas.getContext("2d");

            this.clear();
        },
        // 画布清除
        clear() {
            let { w, h, backGroundColor } = this.canvaSet;
            this.ctx.fillStyle = backGroundColor;
            this.ctx.fillRect(0, 0, w, h);
        },
        // 文字打印
        printWord(val) {
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

            this.ctx.font = "40px dragonscript";
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
  src: url("../../assets/dragon_alphabet.ttf");
}
.result-show {
  text-align: center;
}
.result-show canvas {
  border: 1px solid #d6d6d6;
  font-family: dragonscript;
}
</style>
