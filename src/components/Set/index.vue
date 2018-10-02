<template>
    <el-form class="set" ref="form" :model="set">
        <el-form-item label="宽度：">
            <el-input-number v-model="set.w" :min="100"></el-input-number>
        </el-form-item>
        <el-form-item label="高度：">
            <el-input-number v-model="set.h" :min="55"></el-input-number>
        </el-form-item>
        <el-form-item label="文字颜色：">
            <el-color-picker v-model="set.fontColor"></el-color-picker>
        </el-form-item>
        <el-form-item label="背景颜色：">
            <el-color-picker v-model="set.backGroundColor"></el-color-picker>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">设置</el-button>
            <el-button @close="$emit('close', false)">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            set: {}
        }
    },
    created() {
        this.set = JSON.parse(JSON.stringify(this.$store.state.canvaSet));
    },
    methods: {
        onSubmit() {
            this.$store.commit("set", this.set);
            this.$emit("close", false);
        }
    }
}
</script>

<style>
.set .el-form-item__label{
    width: 100px;
}
</style>
