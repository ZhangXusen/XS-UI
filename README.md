# 简介

### Element-plus-plus 是二次封装 Element-Plus 常用业务组件的一个组件库。大幅提升了开发效率。
关联词:element-plus element-ui vue Vue js admin vite Vite TypeScript typescript TS

## 技术栈
Vue3+Vite+TS+Element-plus+Vuepress+WangEditor+FullCalendar

## 组件在线文档
https://zhangxusen.github.io/Elements-plus-plus/

## npm
```
npm install elements-plus-plus --save
```

## 引入组件
```
import xsUI from "elements-plus-plus";
app.use(xsUI);
```

## 项目结构
```

├─assets                                          静态资源                
├─components                                      组件
│  ├─Calendar                                      日历组件
│  ├─ChooseArea                                    区域选择组件
│  │  └─lib                                        区域JSON数据
│  ├─ChooseIcon                                    图表选择组件 
│  ├─CityPicker                                    城市选择组件
│  │  └─lib     
│  ├─container                                     首页展示
│  │  └─src
│  │      ├─navHeader                              首页头部
│  │      └─navSide                                首页导航栏
│  ├─Form                                          表单组件
│  ├─Menus                                         菜单组件
│  ├─ModalForm                                     弹出框表单
│  ├─NoticeList                                    通知列表
│  ├─Notification                                   
│  ├─Progress                                      进度条
│  ├─Table                                         表格  
│  ├─TimePicker                                    时间选择器      
│  └─Trend                                         趋势图标
├─hooks                                            Hook
│  └─useCopy                                       复制hooks
├─mock                                             模拟数据
├─router                                           路由配置
├─styles                                           样式
├─utils                                            封装小工具
└─view                                             视图
    ├─Calendar
    ├─ChooseArea
    ├─ChooseIcon
    ├─CityPicker
    ├─Form
    ├─Menus
    ├─ModalForm
    ├─Notification
    ├─Progress
    ├─Table
    ├─TimePicker
    └─Trend

```
