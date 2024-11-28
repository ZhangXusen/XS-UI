<!--
 * new page
 * @author: ZhangXusen
 * @since: 2022-08-09
 * index.vue
-->
<template>
  <div>
    <el-button type="primary" @click="open">open</el-button>
    <ModalForm
      v-model:visible="visible"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :options="options"
      isScroll
      title="编辑"
      top="3%"
      width="50%"
    >
      <template #footer="scope">
        <el-button @click="cancel(scope.form)">取消</el-button>
        <el-button type="primary" @click="confirm(scope.form)">确认</el-button>
      </template>
      <template #uploadArea>
        <el-button type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="font-size: 12px; color: #ccc">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
    </ModalForm>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { ElMessage } from "element-plus"

import { FormInstance, FormOptions } from "../../components/Form/types"
import { XsModalForm as ModalForm } from "@element-plus-plus/business-components"

const visible = ref<boolean>(false)
const open = () => {
  visible.value = !visible.value
}

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
        trigger: "change"
      },
      {
        min: 2,
        max: 10,
        message: "用户名在2-10位之间",
        trigger: "change"
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
        trigger: "change"
      },
      {
        min: 6,
        max: 15,
        message: "密码在6-15位之间",
        trigger: "change"
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
        trigger: "change"
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
        trigger: "change"
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
        trigger: "change"
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
        trigger: "change"
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
        trigger: "change"
      }
    ]
  }
]
//取消
const cancel = (form: FormInstance) => {
  visible.value = false
}
//确认
const confirm = (form: any) => {
  let validate = form.validate()
  let model = form.getFormData()
  validate((valid: any) => {
    if (valid) {
      ElMessage.success("验证成功")
      // console.log(model);
    } else {
      ElMessage.error("验证失败")
    }
  })
}

let handleSuccess = (val: any) => {
  console.log("success")
  console.log(val)
}
let handleChange = (val: any) => {
  console.log("change")
  console.log(val)
}
</script>

<style lang="scss" scoped></style>
