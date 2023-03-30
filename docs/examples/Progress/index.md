# 用法
## 效果
<div style="padding:10px; border:1px solid #ccc;
border-radius:10px;
margin-top:20px;">
     <xs-progress :percentage="60" Animation></xs-progress>
  <xs-progress
    :percentage="60"
    Animation
    :text-inside="true"
    :stroke-width="20"
    status="exception"
  ></xs-progress>
  <xs-progress
    :percentage="100"
    Animation
    :text-inside="true"
    :stroke-width="20"
    status="exception"
    type="dashboard"
  ></xs-progress>
</div>

<script setup >

</script>

<style  scoped>
:deep(svg) {
  height: 120px;
  width: 120px;
}
</style>
## 代码示例
```js
<div style="padding:1em; border:1px solid #ccc;
border-radius:10px;
margin-top:20px;">
     <xs-progress :percentage="60" Animation></xs-progress>
  <xs-progress
    :percentage="60"
    Animation
    :text-inside="true"
    :stroke-width="20"
    status="exception"
  ></xs-progress>
  <xs-progress
    :percentage="100"
    Animation
    :text-inside="true"
    :stroke-width="20"
    status="exception"
    type="dashboard"
  ></xs-progress>
</div>

<script setup >

</script>

<style lang="scss" scoped>
:deep(svg) {
  height: 120px;
  width: 120px;
}
</style>
```

