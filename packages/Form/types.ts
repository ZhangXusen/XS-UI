import { RuleItem } from "./rules";
import { CSSProperties } from "vue";
import { ValidateFieldsError } from "async-validator";
export interface FormOptions {
  type:
    | "cascader"
    | "checkbox"
    | "checkbox-group"
    | "checkbox-button"
    | "color-picker"
    | "date-picker"
    | "input"
    | "input-number"
    | "radio"
    | "radio-group"
    | "radio-button"
    | "rate"
    | "select"
    | "select-option"
    | "switch"
    | "slider"
    | "time-picker"
    | "time-select"
    | "option"
    | "transfer"
    | "upload"
    | "editor";
  value?: any;
  label?: string;
  prop?: string;
  rules?: RuleItem[];
  placeholder?: string;
  //特有属性
  attrs?: {
    clearable?: boolean;
    showPasswords?: boolean;
    disabled?: boolean;
    style?: CSSProperties;
  };
  children?: FormOptions[];
  //上传
  UploadAttrs?: {
    action: string;
    header?: object;
    method?: "post" | "put" | "patch";
    multiple?: boolean;
    data?: any;
    name?: string;
    withCredentials?: boolean;
    showFileList?: boolean;
    drag?: boolean;
    accept?: string;
    thumbnailMode?: boolean;
    fileName?: any[];
    listType?: "text" | "picture" | "picture-card";
    autoUpload?: boolean;
    disabled?: boolean;
    limit?: number;
  };
}
interface Callback {
  (isValid?: boolean, invalidFields?: ValidateFieldsError): void;
}

export interface ValidateFieldCallback {
  (message?: string, invalidFields?: ValidateFieldsError): void;
}

export interface FormInstance {
  registerLabelWidth(width: number, oldWidth: number): void;
  deregisterLabelWidth(width: number): void;
  autoLabelWidth: string | undefined;
  emit: (evt: string, ...args: any[]) => void;
  labelSuffix: string;
  inline?: boolean;
  model?: Record<string, unknown>;
  size?: string;
  showMessage?: boolean;
  labelPosition?: string;
  labelWidth?: string;
  rules?: Record<string, unknown>;
  statusIcon?: boolean;
  hideRequiredAsterisk?: boolean;
  disabled?: boolean;
  validate: (callback?: Callback) => Promise<boolean>;
  resetFields: () => void;
  clearValidate: (props?: string | string[]) => void;
  validateField: (props: string | string[], cb: ValidateFieldCallback) => void;
}
