# 用法

## 效果

<div style="padding:1em; border:1px solid #ccc;
border-radius:10px;
margin-top:20px;">
    <xs-timePicker
    :startOptions="startOptions"
    :endOptions="startOptions"
  ></xs-timePicker>
</div>

<script setup >
const startOptions = {
  size: "large",
};
</script>

## 代码示例

```js
<TimePicker
    :startOptions="startOptions"
    :endOptions="startOptions"
  ></TimePicker>

<script setup >
const startOptions = {
  size: "large",
};
</script>
```
