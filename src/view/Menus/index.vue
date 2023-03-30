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
//二级导航
import Menus from "../../components/Menus/index.vue";
//无限层级
import InfiniteMenu from "../../components/Menus/menu.tsx";
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
