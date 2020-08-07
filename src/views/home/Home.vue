<template>
    <div class="index">
        <NavigatorBar :title="$t(title)" @touchLeft="left" @touchRight="right" :custom="true" :customTitle="true" :size="20" :dot="true" :color="color"></NavigatorBar>  
        <Grid :customContent="true" :imgs="imgs"></Grid>
        <van-swipe-cell v-for="(item,index) in goods" :key="index">
            <Card 
            :customTags="true" 
            :customFoot="true"
            :price="item.price"
            :originPrice="item.originPrice"
            :desc="item.desc"
            :thumb="item.thumb"
            :tag="item.tag"
            ></Card>
            <template #right>
                <Button :square="true"  type="danger" text="删除" />
            </template>
        </van-swipe-cell>
        <v-top />
    </div>
</template>

<script>
import axios from 'axios';
import NavigatorBar from '@/components/NavBar/NavBar'
import Grid from '@/components/Grid/Grid'
import Card from '@/components/Card/Card'
import Button from '@/components/Button/Button'

export default {
    mounted(){
        this.fetch.get('/api/index').then(res=>{
            console.log(res);
        })
    },
    data(){
        return {
            title: 'home.home',
            icon: 'point-gift-o',
            color:'#323233',
            imgs:[
                {title:'',src:'https://img.yzcdn.cn/vant/apple-1.jpg',url:'http://www.baidu.com',to:'/dashboard/category'},
                {title:'',src:'https://img.yzcdn.cn/vant/apple-2.jpg',url:'http://www.baidu.com',to:'/dashboard/category'},
                {title:'',src:'https://img.yzcdn.cn/vant/apple-3.jpg',url:'http://www.baidu.com',to:'/dashboard/category'},
            ],
            goods:[
                {title:'iphone10',desc:'爱疯手机，你的最爱！',price:6500,originPrice:8500,thumb:'https://img.yzcdn.cn/vant/ipad.jpeg',tag:''},
                {title:'iphone11',desc:'爱疯手机，你的最爱！',price:7500,originPrice:9500,thumb:'https://img.yzcdn.cn/vant/cat.jpeg',tag:''},
                {title:'iphone12',desc:'爱疯手机，你的最爱！',price:8500,originPrice:10500,thumb:'https://img.yzcdn.cn/vant/ipad.jpeg',tag:''},
                {title:'iphone13',desc:'爱疯手机，你的最爱！',price:9500,originPrice:11500,thumb:'https://img.yzcdn.cn/vant/cat.jpeg',tag:''},
                {title:'iphone10',desc:'爱疯手机，你的最爱！',price:6500,originPrice:8500,thumb:'https://img.yzcdn.cn/vant/ipad.jpeg',tag:''},
                {title:'iphone11',desc:'爱疯手机，你的最爱！',price:7500,originPrice:9500,thumb:'https://img.yzcdn.cn/vant/cat.jpeg',tag:''},
                {title:'iphone12',desc:'爱疯手机，你的最爱！',price:8500,originPrice:10500,thumb:'https://img.yzcdn.cn/vant/ipad.jpeg',tag:''},
                {title:'iphone13',desc:'爱疯手机，你的最爱！',price:9500,originPrice:11500,thumb:'https://img.yzcdn.cn/vant/cat.jpeg',tag:''},
                {title:'iphone10',desc:'爱疯手机，你的最爱！',price:6500,originPrice:8500,thumb:'https://img.yzcdn.cn/vant/ipad.jpeg',tag:''},
                {title:'iphone11',desc:'爱疯手机，你的最爱！',price:7500,originPrice:9500,thumb:'https://img.yzcdn.cn/vant/cat.jpeg',tag:''},
                {title:'iphone12',desc:'爱疯手机，你的最爱！',price:8500,originPrice:10500,thumb:'https://img.yzcdn.cn/vant/ipad.jpeg',tag:''},
                {title:'iphone13',desc:'爱疯手机，你的最爱！',price:9500,originPrice:11500,thumb:'https://img.yzcdn.cn/vant/cat.jpeg',tag:''},
            ]
        }
    },
    methods:{
        left(){
            console.log('backup left');
        },
        right(){
            console.log('touch right');
        }
    },
    components:{
        NavigatorBar,
        Grid,
        Card,
        Button
    }
}
</script>

<style lang="">
.svg-icon {
  width: 3em;
  height: 3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>