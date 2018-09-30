<template>
    <div>
        <el-input type="textarea" autosize placeholder="请输入内容" v-model="info">
        </el-input>
        <el-button @click="setInfo">CLCK</el-button>
    </div>
</template>

<script>
export default {
    name: "InputInfo",
    data() {
        return {
            info: ''
        }
    },
    methods: {
        setInfo() {
            this.$store.commit('setMessage',this.info);
        }
    }
}    
</script>

<style>
</style>
