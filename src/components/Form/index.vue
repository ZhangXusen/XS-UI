<!--
 * new page
 * @author: ZhangXusen
 * @since: 2022-08-08
 * index.vue
-->
<template>
  <el-form
    :validate-on-rule-change="false"
    v-bind="$attrs"
    :rules="rules"
    :model="model"
    v-if="model"
    ref="form"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-if="item.type !== 'upload' && item.type !== 'editor'"
          v-bind="item.attrs"
          v-model="model[item.prop]"
          :is="`el-${item.type}`"
        ></component>
        <el-upload
          v-if="item.type === 'upload'"
          v-bind="item.UploadAttrs"
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :on-exceed="onExceed"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :http-request="props.httpRequest"
        >
          <slot name="uploadArea"> </slot>
          <slot name="uploadTip"></slot>
        </el-upload>
        <div id="editor" v-if="item.type === 'editor'"></div>
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-bind="item.attrs"
          v-model="model[item.prop]"
          :is="`el-${item.type}`"
        >
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :label="child.label"
            :value="child.value"
            :is="`el-${child.type}`"
          ></component>
        </component>
      </el-form-item>
    </template>
    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { PropType } from "vue";
import { FormOptions, FormInstance } from "./types.js";
import cloneDeep from "lodash/cloneDeep";
import E from "wangeditor";
const form = ref<FormInstance | null>();
const edit = ref(null);
const emits = defineEmits([
  "on-preview",
  "on-remove",
  "on-success",
  "on-error",
  "on-progress",
  "on-change",
  "on-exceed",
  "before-upload",
  "before-remove",
]);
const props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  httpRequest: {
    type: Function,
  },
});

const model = ref<any>(null);
const rules = ref<any>(null);
const initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {};
    let r: any = {};
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value; //prop:value
      r[item.prop!] = item.rules as any;
      if (item.type === "editor") {
        //初始化富文本
        nextTick(() => {
          if (document.getElementById("editor")) {
            const editor = new E("#editor");
            if (item.placeholder) {
              editor.config.placeholder = item.placeholder;
            }
            editor.create();
            //初始富文本内容
            editor.txt.html(item.value);
            editor.config.onchange = (newHtml: string) => {
              // console.log(newHtml);
              model.value[item.prop!] = newHtml;
            };
            edit.value = editor;
          }
        });
      }
    });
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
  }
};
onMounted(() => {
  initForm();
});

// 上传组件的所有方法
let onPreview = (file: File) => {
  emits("on-preview", file);
};
let onRemove = (file: File, fileList: FileList) => {
  emits("on-remove", { file, fileList });
};
let onSuccess = (response: any, file: File, fileList: FileList) => {
  // 上传图片成功 给表单上传项赋值
  let uploadItem = props.options.find((item) => item.type === "upload")!;
  model.value[uploadItem.prop!] = { response, file, fileList };
  emits("on-success", { response, file, fileList });
};
let onError = (err: any, file: File, fileList: FileList) => {
  emits("on-error", { err, file, fileList });
};
let onProgress = (event: any, file: File, fileList: FileList) => {
  emits("on-progress", { event, file, fileList });
};
let onChange = (file: File, fileList: FileList) => {
  emits("on-change", { file, fileList });
};
let beforeUpload = (file: File) => {
  emits("before-upload", file);
};
let beforeRemove = (file: File, fileList: FileList) => {
  emits("before-remove", { file, fileList });
};
let onExceed = (files: File, fileList: FileList) => {
  emits("on-exceed", { files, fileList });
};

// 重置表单方法
const resetFields = () => {
  form.value!.resetFields(); //重置ele表单
  //重置富文本表单
  if (props.options && props.options.length) {
    let editorItem = props.options.find((item) => item.type === "editor");
    edit.value.txt.html(editorItem.value);
  }
};

//el内置表单验证
const validate = () => {
  return form.value!.validate;
};
//获取表单数据
const getFormData = () => {
  return model.value;
};
//分发resetFields,可以在该组件ref实例中访问到
defineExpose({
  resetFields,
  validate,
  getFormData,
});
</script>

<style scoped lang="scss"></style>
