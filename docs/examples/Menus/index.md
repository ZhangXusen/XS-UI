# 菜单
## 效果
### 双层导航栏
<div style="padding:1em; border:1px solid #ccc;border-radius:10px;margin-top:20px;">
 <xs-menus
			:data="data1"
			defaultActive="1"
			name="a"
			index="b"
			icon="c"
			children="d"
		></xs-menus>
</div>

### 无限层级导航栏
<div style="padding:1em; border:1px solid #ccc;border-radius:10px;margin-top:20px;">
  <xs-infinite-menu :data="data2" :defaultActive="3"></xs-infinite-menu>
</div>

<script setup>
  const data1 = [
  {
    a: "导航1",
    b: "1",
    c: "Document",
  },
  {
    a: "导航2",
    b: "2",
    c: "Document",
  },
  {
    a: "导航3",
    b: "3",
    c: "Document",
    d: [
      {
        a: "导航3-1",
        b: "3-1",
        c: "Document",
      },
    ],
  },
];
const data2 = [
  {
    name: "导航1",
    index: "1",
    icon: "Document",
  },
  {
    name: "导航2",
    index: "2",
    icon: "Document",
  },
  {
    name: "导航3",
    index: "3",
    icon: "Document",
    children: [
      {
        name: "导航3-1",
        index: "3-1",
        icon: "Document",
        children: [
          {
            name: "导航3-1-1",
            index: "3-1-1",
            icon: "Document",
            children: [
              {
                name: "导航3-1-1-1",
                index: "3-1-1-1",
                icon: "Document",
                children: [
                  {
                    name: "导航3-1-1-1-1",
                    index: "3-1-1-1-1",
                    icon: "Document",
                    children: [
                      {
                        name: "导航3-1-1-1-1-1",
                        index: "3-1-1-1-1-1",
                        icon: "Document",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "导航3-1-2",
            index: "3-1-2",
            icon: "Document",
          },
        ],
      },
    ],
  },
];

</script>


```js
<template>
  <div style="width: 300px">
    <!-- <Menus
			:data="data1"
			defaultActive="1"
			name="a"
			index="b"
			icon="c"
			children="d"
		></Menus> -->
    <InfiniteMenu :data="data2" :defaultActive="3"></InfiniteMenu>
  </div>
</template>

<script setup lang="ts">
const data1 = [
  {
    a: "导航1",
    b: "1",
    c: "Document",
  },
  {
    a: "导航2",
    b: "2",
    c: "Document",
  },
  {
    a: "导航3",
    b: "3",
    c: "Document",
    d: [
      {
        a: "导航3-1",
        b: "3-1",
        c: "Document",
      },
    ],
  },
];

const data2 = [
  {
    name: "导航1",
    index: "1",
    icon: "Document",
  },
  {
    name: "导航2",
    index: "2",
    icon: "Document",
  },
  {
    name: "导航3",
    index: "3",
    icon: "Document",
    children: [
      {
        name: "导航3-1",
        index: "3-1",
        icon: "Document",
        children: [
          {
            name: "导航3-1-1",
            index: "3-1-1",
            icon: "Document",
            children: [
              {
                name: "导航3-1-1-1",
                index: "3-1-1-1",
                icon: "Document",
                children: [
                  {
                    name: "导航3-1-1-1-1",
                    index: "3-1-1-1-1",
                    icon: "Document",
                    children: [
                      {
                        name: "导航3-1-1-1-1-1",
                        index: "3-1-1-1-1-1",
                        icon: "Document",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "导航3-1-2",
            index: "3-1-2",
            icon: "Document",
          },
        ],
      },
    ],
  },
];
</script>

<style></style>

```
