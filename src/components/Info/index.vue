<template>
    <el-row class="info">
        <el-input type="textarea" autosize placeholder="请输入内容" v-model="info">
        </el-input>
        <div class="button-area">
            <el-button type="button" @click="translate">翻译</el-button>
        </div>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            info: ""
        }
    },
    methods: {
        translate() {
            this.$store.commit("setInfo", this.info);
            this.$emit("print");
            this.$emit("close", false);
        }
    }
};
</script>

<style>
.info textarea {
  resize: none;
  min-height: 300px !important;
}
.info .button-area {
  padding-top: 20px;
  text-align: center;
}
</style>
