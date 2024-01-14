<template>
  <!-- 外层盒子  -->
  <div class="Waterfall wf-content">
    <!-- 图片外层盒子 遍历图片数组 -->
    <div class="wf-item" v-for="(item,index) in imageUrl" :key="index">
      <!-- @load图片加载完成再触发方法 -->
      <img :src="item" @load="imageonload" alt="">
    </div>
  </div>
</template>

<script>
import {Water} from "../waterJs/Water"
export default {
  name:"WaterFall",
  data(){
    return {
      // 使用require引入静态文件的图片 
      imageUrl: [
        require("../assets/img/1.png"),
        require("../assets/img/2.jpg"),
        require("../assets/img/3.jpg"),
        require("../assets/img/4.jpg"),
        require("../assets/img/5.jpg"),
        require("../assets/img/6.jpg"),
        require("../assets/img/7.jpg"),
        require("../assets/img/8.png"),
        require("../assets/img/9.jpg"),
        require("../assets/img/10.jpg"),
        require("../assets/img/11.jpg"),
        require("../assets/img/12.jpg"),
        require("../assets/img/13.jpg"),
        require("../assets/img/14.jpg"),
        require("../assets/img/15.jpg"),
        require("../assets/img/16.jpg"),
        require("../assets/img/17.jpg"),
        require("../assets/img/18.jpg"),
        require("../assets/img/19.jpg"),
        require("../assets/img/20.jpg"),
        require("../assets/img/21.jpg"),
        require("../assets/img/22.jpg"),
        require("../assets/img/23.jpg"),
        require("../assets/img/24.jpg"),
        require("../assets/img/25.jpg"),
        require("../assets/img/26.jpg"),
        require("../assets/img/27.png"),
        require("../assets/img/28.png"),
        require("../assets/img/29.png"),
        require("../assets/img/30.png"),
        require("../assets/img/31.png"),
        require("../assets/img/32.png"),
        require("../assets/img/33.png"),
        require("../assets/img/34.png"),
        require("../assets/img/35.png"),
        require("../assets/img/36.png"),
        require("../assets/img/37.png"),
        require("../assets/img/38.png")
      ]
    }
  },
  // 配置方法
  methods:{
    // 图片加载完成之后调用方法中的类传参构建瀑布流页面
    imageonload(){
      new Water({
        // 作用元素
        el:".wf-content",
        // 列
        column:4,
        // 间距
        gap:20
      })
    }
  }
}
</script>


<style scoped>
  .Waterfall{
    width:1920px;
    margin:0 auto;
    position:relative
  }
.wf-item{
  position:absolute;
  border:5px solid white;
  box-shadow: -3px 2px 5px rgba(0,0,0,0.5);
}
  .wf-item img{
    height:100%;
    width:100%
  }
</style>
