<template>
    <div class="nav"> 
        <van-nav-bar
            :title="title"
            :left-text="left"
            :right-text="right"
            left-arrow
            @click-left="back"
            v-if="!custom"
        />
        <van-nav-bar :title="title" :left-text="left" left-arrow @click-left="onClickLeft" @click-right="onClickRight" v-else>
            <template #title v-if="customTitle">
                <van-icon :name="iconTitle" :size="size" :color="color" />
            </template>
            <template #left>
                <van-icon :name="iconLeft" :size="size" :color="color" />
            </template>
            <template #right>
                <van-icon :name="icon" :size="size" :dot="dot" :badge="badge" :color="color" />
            </template>
        </van-nav-bar>

    </div>
</template>

<script>
export default {
   props:{
        title: {
            type: String,
            default: ''
        },
        left: {
            type: String,
            default: '返回'
        },
        right:{
            type: String,
            default: '',
        },
        custom:{
            type:Boolean,
            default: false,
        },
        icon:{
            type: String,
            default: 'ellipsis'
        },
        size:{
            type: Number,
            default: 18,
        },
        dot:{
            type:Boolean,
            default:false,
        },
        badge:{
            type:String,
            default: '',
        },
        color:{
            type: String,
            default: '',
        },
        iconLeft:{
            type: String,
            default: 'arrow-left',
        },
        iconTitle:{
            type: String,
            default: 'apps-o',
        },
        customTitle:{
            type:Boolean,
            default: false,
        }
   },
   methods:{
       back(){
           this.$router.go(-1);
       },
       onClickLeft(){
           this.$emit('touchLeft');
       },
       onClickRight(){
           this.$emit('touchRight');
       }
   } 
}
</script>

<style lang="" scoped>
    
</style>