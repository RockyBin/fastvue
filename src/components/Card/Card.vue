<template>
    <div class="card">

        <van-card
        v-if="isNum"
        :num="num"
        :price="price"
        :tag="tag"
        :origin-price="originPrice"
        :desc="desc"
        :title="title"
        :thumb="thumb"
        :currency="currency"
        :thumb-link="thumbLink"
        @click="jump"
        >
            <template #tags v-if="customTags">
                <van-tag v-for="(item,index) in tags" :key="index" plain :type="item.type">{{item.title}}</van-tag>
            </template>
            <template #footer v-if="customFoot">
                <!-- <van-button v-for="(item,index) in btns" :key="index" :size="item.size">{{item.title}}</van-button> -->
                <Button v-for="(item,index) in btns" :key="index" type="default" :size="item.size" :text="item.title"  @jump="jumpUrl"/>
            </template>
        </van-card>
        
        <van-card
        :price="price"
        :tag="tag"
        :origin-price="originPrice"
        :desc="desc"
        :title="title"
        :thumb="thumb"
        :currency="currency"
        :thumb-link="thumbLink"
        @click="jump"
        v-else
        >
            <template #tags v-if="customTags">
                <van-tag v-for="(item,index) in tags" :key="index" plain :type="item.type">{{item.title}}</van-tag>
            </template>
            <template #footer v-if="customFoot">
                <!-- <van-button v-for="(item,index) in btns" :key="index" :size="item.size">{{item.title}}</van-button> -->
                <Button v-for="(item,index) in btns" :key="index" type="default" :size="item.size" :text="item.title" @jump="jumpUrl"/>
            </template>
        </van-card>

    </div>
</template>

<script>
import Button from '@/components/Button/Button'

export default {
    props:{
        customTags:{
            type:Boolean,
            default:false,
        },
        tags:{
            type:Array,
            default:()=>{
                return [
                    {title:'标签',type:'danger'},
                    {title:'标签',type:'danger'},
                ]
            }
        },
        customFoot:{
            type:Boolean,
            default:false,
        },
        btns:{
            type:Array,
            default:()=>{
                return [
                    {title:'按钮1',size:'mini'},
                    {title:'按钮2',size:'mini'},
                ]
            }
        },
        title:{
            type:String,
            default:'商品标题'
        },
        tag:{
            type:String,
            default:'最新'
        },
        isNum:{
            type:Boolean,
            default:false,
        },
        num:{
            type:Number,
            default:1
        },
        thumbLink:{
            type:String,
            default:''
        },
        currency:{
            type:String,
            default:'￥'
        },
        price:{
            type:Number,
            default:0
        },
        originPrice:{
            type:Number,
            default:0
        },
        desc:{
            type:String,
            default:'描述信息'
        },
        thumb:{
            type:String,
            default:'https://img.yzcdn.cn/vant/ipad.jpeg'
        },
    },
    methods:{
        jump(){
            console.log('jump')
        },
        jumpUrl(){
            console.log('jumpUrl');
        }
    },
    components:{
        Button
    }
    
}
</script>

<style lang="less" scoped>
    .van-tag--danger.van-tag--plain{
        display:inline-block;
        margin-right:.2rem;
    }
</style>