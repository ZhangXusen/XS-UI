<!--
 * new page
 * @author: ZhangXusen
 * @since: 2022-08-08
 * index.vue
-->
<template>
  <Form
    ref="form"
    :options="options"
    label-width="100px"
    @on-change="handleChange"
    @before-upload="handleBeforeUpload"
    @on-preview="handlePreview"
    @on-remove="handleRemove"
    @before-remove="beforeRemove"
    @on-success="handleSuccess"
  >
    <template #uploadArea>
      <el-button type="primary">Click to upload</el-button>
    </template>
    <template #uploadTip>
      <div style="font-size: 12px; color: #ccc">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
    <template #action="scope">
      <el-button type="primary" @click="onSubmit(scope)">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </template>
  </Form>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { ElMessage, ElMessageBox } from "element-plus"
import {
  FormInstance,
  FormOptions,
  XsForm as Form
} from "@element-plus-plus/business-components"

interface Scope {
  form: FormInstance
  model: any
}

const form = ref(null)
const options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: "username",
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur"
      },
      {
        min: 2,
        max: 10,
        message: "用户名在2-10位之间",
        trigger: "blur"
      }
    ],
    attrs: {
      clearable: true
    }
  },
  {
    type: "input",
    value: "",
    label: "密码",
    prop: "password",
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur"
      },
      {
        min: 6,
        max: 15,
        message: "密码在6-15位之间",
        trigger: "blur"
      }
    ],
    attrs: {
      clearable: true
    }
  },
  {
    type: "select",
    value: "",
    placeholder: "请选择职位",
    prop: "role",
    label: "职位",
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "blur"
      }
    ],
    children: [
      {
        type: "option",
        label: "经理",
        value: "1"
      },
      {
        type: "option",
        label: "董事",
        value: "2"
      },
      {
        type: "option",
        label: "高管",
        value: "3"
      }
    ],
    attrs: {
      style: {
        width: "100%"
      }
    }
  },
  {
    type: "checkbox-group",
    value: [],
    label: "爱好",
    prop: "like",
    rules: [
      {
        required: true,
        message: "爱好不能为空",
        trigger: "blur"
      }
    ],
    children: [
      {
        type: "checkbox",
        label: "足球",
        value: "1"
      },
      {
        type: "checkbox",
        label: "篮球",
        value: "2"
      },
      {
        type: "checkbox",
        label: "排球",
        value: "3"
      }
    ]
  },
  {
    type: "radio-group",
    value: [],
    label: "性别",
    prop: "gender",
    rules: [
      {
        required: true,
        message: "性别不能为空",
        trigger: "blur"
      }
    ],
    children: [
      {
        type: "radio",
        label: "男",
        value: "1"
      },
      {
        type: "radio",
        label: "女",
        value: "2"
      },
      {
        type: "radio",
        label: "保密",
        value: "3"
      }
    ]
  },
  {
    type: "upload",
    label: "上传",
    prop: "picture",

    rules: [
      {
        required: true,
        message: "文件不能为空",
        trigger: "blur"
      }
    ],
    UploadAttrs: {
      action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
      multiple: true,
      limit: 3
    }
  },
  {
    type: "editor",
    value: "11111111",
    prop: "desc",
    label: "描述",
    placeholder: "请输入内容",
    rules: [
      {
        required: true,
        message: "描述不能为空",
        trigger: "blur"
      }
    ]
  }
]
const handleChange = (val: any) => {
  console.log(val)
}
const handleBeforeUpload = (val: any) => {
  console.log(val)
}
const handlePreview = (uploadFile: any) => {
  console.log(uploadFile)
}
const handleSuccess = (val: any) => {
  console.log(val)
}
const handleExceed = (val: any) => {
  ElMessage.warning(
    `The limit is 3, you selected ${
      val.files.length
    } files this time, add up to ${
      val.files.length + val.uploadFiles.length
    } totally`
  )
}
const handleRemove = (val: any) => {
  console.log(val.file, val.uploadFiles)
}
const beforeRemove = (val: any) => {
  return ElMessageBox.confirm(
    `Cancel the transfert of ${val.uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}

const onSubmit = (scope: Scope) => {
  scope.form.validate((valid) => {
    if (valid) {
      console.log(scope.model)
    } else {
      ElMessage.error("表单验证失败")
    }
  })
}
const resetForm = () => {
  // scope.form.resetFields();
  form.value.resetFields()
}
</script>

<style lang="scss" scoped></style>
