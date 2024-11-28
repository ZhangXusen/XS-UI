# 用法

 <div class="trends">
    <xs-trend color="blue"> </xs-trend>
    <xs-trend text="下降" icon="arrowdown" type="down" color="red"> </xs-trend>
    <xs-trend color="blue"> <el-button type="primary" size="small">插槽</el-button> </xs-trend>
    <xs-trend color="red" text="颜色反转" reverseColor></xs-trend>
    <xs-trend color="red" text="文字颜色" text-color="red"></xs-trend>
    <xs-trend text="自选图标" icon="edit"></xs-trend>
  </div>

## 代码示例

```js
<div class="trends">
  <xs-trend color="blue"> </xs-trend>
  <xs-trend text="下降" icon="arrowdown" type="down" color="red">
    {' '}
  </xs-trend>
  <xs-trend color="blue">
    <el-button type="primary" size="small">
      插槽
    </el-button>
  </xs-trend>
  <xs-trend color="red" text="颜色反转" reverseColor></xs-trend>
  <xs-trend color="red" text="文字颜色" text-color="red"></xs-trend>
  <xs-trend text="自选图标" icon="edit"></xs-trend>
</div>
```
