<template>
    <div class="grid">
        
        <van-grid :column-num="column" v-if="!customContent" :square="square">
            <van-grid-item v-for="(item,index) in total" :key="index"  :icon="icon" :text="item.title" :to="customTo ? item.to : ''" :url="item.url"/>
        </van-grid>

        <van-grid :border="false" :column-num="column" :square="square" v-else>
            <van-grid-item v-for="(item,index) in imgs" :key="index" :to="customTo ? item.to : ''" :url="item.url">
                <van-image :src="item.src" />
                <div v-if="item.title">{{item.title}}</div>
            </van-grid-item>
        </van-grid>

    </div>
</template>

<script>
export default {
    props:{
        customContent:{
            type:Boolean,
            default:false,
        },
        customTo:{
             type:Boolean,
            default:false,
        },
        column:{
            type:Number,
            default:3
        },
        total:{
            type:Array,
            default:()=>{
                return [
                    {title:'title1',url:'http://www.baidu.com',to:'/dashboard/category'},
                    {title:'title2',url:'http://www.baidu.com',to:'/dashboard/category'},
                    {title:'title3',url:'http://www.baidu.com',to:'/dashboard/category'},
                ];
            }
        },
        icon:{
            type:String,
            default:'photo-o'
        },
        text:{
            type:String,
            default:'text'
        },
        square:{
            type:Boolean,
            default:false,
        },
        //https://img.yzcdn.cn/vant/apple-1.jpg
        imgs:{
            type: Array,
            default:()=>{
                return [
                    {title:'title1',src:'https://img.yzcdn.cn/vant/apple-1.jpg',url:'http://www.baidu.com',to:'/dashboard/category'},
                    {title:'title2',src:'https://img.yzcdn.cn/vant/apple-2.jpg',url:'http://www.baidu.com',to:'/dashboard/category'},
                    {title:'title3',src:'https://img.yzcdn.cn/vant/apple-3.jpg',url:'http://www.baidu.com',to:'/dashboard/category'},
                ];
            }
        }
    }
}
</script>

<style lang="less" scoped>
    
</style>