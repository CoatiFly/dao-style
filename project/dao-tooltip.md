# tooltip（提示文字）

tooltip 是一个提示文字的组件。代码请参照目录：[src/components/dao-tooltip](../src/components/dao-tooltip)。

## 使用方法

### html 使用方法

```html
<dao-tooltip
  [content="content"]
  [placement="placement"]
  [delay="delay"]
  [:append-to-body="appendToBody"]
  [:popper-cls="popperCls"]>
  <div slot="content"></div>
</dao-tooltip>
```

## 组件参数

### 组件接受的参数

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| content | String | 提示文字 |-|是|
| placement | String | 提示框出现位置，可选值 ```top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end```。 |bottom|否|
| delay | Number | 延时多长时间显示提示文字 |0|否|
| appendToBody | Boolean | 是否将 tooltip 元素添加到 body |true|否|
| popperCls | Array | appendToBody 之后为 tooltip 元素添加的类，一般用于修改 tooltip 元素的样式 | - |否|

### 组件 Slot 接受的参数

|参数名|类型|说明|默认值|是否必填|
|-----|---|----|----|---|
| content | HTML | tooltip 内嵌 HTML 文本，将覆盖 content 参数 |-|否|
