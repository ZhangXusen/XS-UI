# 通知菜单
## 效果
<div style="padding:1em; border:1px solid #ccc;
border-radius:10px;
margin-top:20px;">
    <xs-notification :value="55" :max="50">
    <template #default>
      <xs-noticeList
        @clickItem="handleItem"
        @clickAction="handleAction"
        :list="list"
        :actions="actions"
      ></xs-noticeList>
    </template>
  </xs-notification>
  <br />
  <br />
  <br />
  <xs-notification :value="10" :max="50">1111</xs-notification><br />
	<br />
</div>

<script setup >
  const list= [
  {
    title: "通知",
    content: [
      {
        title: "蒂姆·库克回复了你的邮件",
        time: "2019-05-08 14:33:18",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      },
      {
        title: "蒂姆·库克回复了你的邮件",
        time: "2019-05-08 14:33:18",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      },
      {
        title: "斯蒂夫·沃兹尼亚克已批准了你的休假申请",
        time: "2019-05-08 14:33:18",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      },
    ],
  },
  {
    title: "关注",
    content: [
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "曲丽丽 评论了你",
        desc: " 描述信息描述信息描述信息",
        time: "3小时前",
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "曲丽丽 评论了你",
        desc: " 描述信息描述信息描述信息",
        time: "3小时前",
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "曲丽丽 评论了你",
        desc: " 描述信息描述信息描述信息",
        time: "3小时前",
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "曲丽丽 评论了你",
        desc: " 描述信息描述信息描述信息",
        time: "3小时前",
      },
    ],
  },
  {
    title: "代办",
    content: [
      {
        title: "任务名称",
        desc: "任务需要在 2017-01-12 20:00 前启动",
        tag: "未开始",
        tagType: "",
      },
      {
        title: "第三方紧急代码变更",
        desc: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务",
        tag: "马上到期",
        tagType: "warning",
      },
      {
        title: "信息安全考试",
        desc: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务",
        tag: "已耗时8天",
        tagType: "danger",
      },
      {
        title: "第三方紧急代码变更",
        desc: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务",
        tag: "已耗时8天",
        tagType: "warning",
      },
    ],
  },
];
const actions = [
  {
    text: "清空代办",
    icon: "delete",
  },
  {
    text: "查看更多",
    icon: "edit",
  },
];
const handleItem = (val) => {
	console.log(val);
};
const handleAction = (val) => {
	console.log(val);
};
</script>

## 代码示例
```js
<template>
	<xs-notification :value="55" :max="50">
		<template #default>
			<xs-noticeList
				@clickItem="handleItem"
				@clickAction="handleAction"
				:list="list"
				:actions="actions"
			></xs-noticeList>
		</template>
	</xs-notification>
	<br />
	<br />
	<xs-notification :value="10" :max="50">1111</xs-notification><br />
	<br />
	<xs-notification :value="55" :max="50" :isDot="true"></xs-notification><br />
	<br />
	<xs-notification :value="55" :max="50" icon="ChatRound"></xs-notification>
</template>

<script setup lang="ts">
import { list, actions } from "./data.ts";
const handleItem = (val: any) => {
	console.log(val);
};
const handleAction = (val: any) => {
	console.log(val);
};
</script>

<style></style>

```