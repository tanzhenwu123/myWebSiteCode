<script setup>
const {data, total} = {
  total: 500,
  data: [
    {
      img: '',
      title: 'title1',
      context: '11'
    },
    {
      img: '',
      title: 'title2',
      context: '22'
    },
    {
      img: '',
      title: 'title3',
      context: '33'
    },
    {
      img: '',
      title: 'title4',
      context: '44'
    },
    {
      img: '',
      title: 'title5',
      context: '55'
    },
    {
      img: '',
      title: 'title6',
      context: '66'
    },
    {
      img: '',
      title: 'title7',
      context: '77'
    },
    {
      img: '',
      title: 'title8',
      context: '88'
    }
  ]
}

function renderVNode(_, {attrs: {vnode}}) {
  return vnode;
}
</script>

<template>
<div class="blogWrapper">
  <div class="blogSetType">
    <div>
      <h2>我的博客</h2>
      <h5>会有哪些新鲜事</h5>
    </div>
  </div>
  <div class="bolgContent">
    <header>
      <h3>
        我的博客
      </h3>
    </header>
    <a-row justify="space-around">
      <a-col v-for="item in data" :span="9">
        <a-card>
          <img :src="item.img" alt="" />
          <a-typography>
            <a-typography-title :level="5">{{item.title}}</a-typography-title>
            <a-typography-paragraph>{{item.context}}</a-typography-paragraph>
          </a-typography>
          <a-button>阅读博客</a-button>
        </a-card>
      </a-col>
    </a-row>
    <a-pagination :total="total" :pageSize="8">
      <template #itemRender="{ page, type, originalElement }">
        <a v-if="type === 'prev'">上一页</a>
        <a v-else-if="type === 'next'">下一页</a>
        <renderVNode v-else :vnode="originalElement" />
      </template>
    </a-pagination>
  </div>
</div>
</template>

<style lang="less" scoped>
.blogSetType {
  width: 100%;
  height: 436px;
  background: aqua;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 25px 0;
  div{
    text-align: center;
    h2 {
      font-size: 3.5em;
      font-weight: bold;
    }
    h5 {
      font-size: 1.7em;
      font-weight: bold;
    }
  }
}
</style>