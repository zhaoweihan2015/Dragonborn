<template>
    <div class="result">
        <el-row>
            <el-col :span="24" class="result-show">
                <canvas ref="canvas" :width="canvaSet.w" :height="canvaSet.h"></canvas>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import wordMap from "../../assets/word.jpg";
export default {
    data() {
        return {
            result: [],
            canvaSet: {
                w: 600,
                h: 500
            },
            ctx: null,
            map: null,
            isReady: false
        }
    },
    computed: {
        info() {
            return this.$store.state.message;
        },
        checkMap() {
            return this.$store.state.checkMap;
        },
        imgMap() {
            return this.$store.state.imageMap;
        }
    },
    watch: {
        info(val) {
            if (!this.isReady) return
            this.changeToRes(val);
            this.numToImg();
        }
    },
    created() {
        this.imageReload();
    },
    mounted() {
        this.setCanvas();
    },
    methods: {
        changeToRes(val) {
            this.result = [];
            let { w, h } = this.canvaSet;
            this.ctx.clearRect(0, 0, w, h);

            let valueList = val.split(/\s+/);
            valueList.forEach((word, index) => {
                word = this.wordToNum(word.toLowerCase());
                if (index != valueList.length - 1) {
                    word.push("SPACE");
                }
                this.result = this.result.concat(word);
            });
        },
        wordToNum(word) {
            let list = [];
            for (const key in this.checkMap) {
                let im = this.imgMap[key];
                let res = `${im[1]}-${im[0]},`;
                word = word.replace(this.checkMap[key], res);
            }
            word.slice(0, word.length - 1).split(',').forEach(e => {
                let res = e.split('-');
                list.push({
                    x: res[0],
                    y: res[1]
                })
            })
            return list;
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
            let canvas = this.$refs.canvas;
            this.ctx = canvas.getContext("2d");
        },
        numToImg() {
            let sx = 0;
            let sy = 0;
            let print = e => {
                if (e !== "SPACE") {
                    this.ctx.drawImage(this.map, e.x * 50, e.y * 50, 50, 50, sx * 50, sy * 50, 50, 50);
                }
            }
            this.result.forEach(e => {
                if ((sx + 1) * 50 <= this.canvaSet.w) {
                    print(e);
                    sx++;
                } else {
                    sx = 0;
                    print(e)
                    sy++;
                }
            })
        }
    }
}
</script>

<style>
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
}
</style>
