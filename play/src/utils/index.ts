//转为小写驼峰命名法
export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase()
}
