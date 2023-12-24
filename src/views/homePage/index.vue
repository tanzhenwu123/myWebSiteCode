<script setup>
import flower from '../../assets/image/flower.png'
</script>
<template>
  <div class="homeContent" style="background: #000">
    <div class="context">
      <img src="../../assets/image/flower.png">
      <p style="color: #fff;text-align: center;margin: 15px 0 0 0">好想废话啊</p>
    </div>
  </div>
  <div class="introduce" style="margin: 25px 0 0 0 ">
    <a-typography style="background: #000;">
      <a-typography-title :level="3" style="color: #fff">关于计算机语言</a-typography-title>
      <a-carousel autoplay>
        <a-typography>
          <a-typography-title :level="3">javascript</a-typography-title>
          <a-typography-paragraph>111</a-typography-paragraph>
        </a-typography>
        <a-typography>
          <a-typography-title :level="3">nodejs</a-typography-title>
          <a-typography-paragraph>222</a-typography-paragraph>
        </a-typography>
        <a-typography>
          <a-typography-title :level="3">c++</a-typography-title>
          <a-typography-paragraph>333</a-typography-paragraph>
        </a-typography>
      </a-carousel>
    </a-typography>
  </div>
  <div class="news">
    <a-layout>
      <a-layout-header class="newsHeader">
        <p>最新消息</p>
        <p>查看全部</p>
      </a-layout-header>
      <a-layout-content>
        <a-row v-for="item in 2" justify="space-around" style="margin: 0px 0 10px 0">
          <a-col v-for="_item in 3" :span="7" style="height: 340px;background: aliceblue; display: flex;align-items: center;justify-content: center">{{_item}}</a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </div>
  <div class="range">
    <a-row justify="space-around" style="margin: 25px 0 25px 0">
      <a-col :span="6" style="display: flex;justify-content: center;align-items: center; height: 242px;background: #000; color: #fff">博客发布</a-col>
      <a-col :span="6" style="display: flex;justify-content: center;align-items: center; height: 242px;background: #000; color: #fff">浏览数</a-col>
      <a-col :span="6" style="display: flex;justify-content: center;align-items: center; height: 242px;background: #000; color: #fff">留言数</a-col>
      <a-col :span="6" style="display: flex;justify-content: center;align-items: center; height: 242px;background: #000; color: #fff">回复数</a-col>
    </a-row>
  </div>
  <div class="thank" style="display: flex; justify-content: center; background: #000; margin: 25px 0 25px 0; padding: 25px 0 25px 0">
    <a-card style="width: 440px">
      <h2>感谢你浏览我的博客</h2>
      <a-avatar></a-avatar>
      <h3>dear-process</h3>
      <h4>as player</h4>
    </a-card>
  </div>
  <div class="telMe" style="background: #000; margin: 25px 0 25px 0; padding: 25px 0 25px 25px">
    <a-card style="width: 440px">
      <h2>联系我</h2>
      <h4>微信：</h4>
      <a-qrcode value="https://www.antdv.com/" />
      <h4>QQ: 1105049762</h4>
    </a-card>
  </div>
</template>
<style scoped>
.homeContent{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 843px;
}
.newsHeader{
  margin: 25px 0 25px 0 ;
  color: #fff;
  p:first-child {
    float: left;
  }
  p:last-child {
    float: right;
  }
}
</style>