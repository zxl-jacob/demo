### 使用VUE实现表单提交

`功能要求`
1. 页面初始化远程加载数据填充到表单元素
2. 对表单元素进行校验（使用vue-validator API [http://vuejs.github.io/vue-validator/zh-cn/index.html](http://note.youdao.com/)）
3. 字段校验规则
- 商家名称：必填且字符数不能大于20
- 商家电话：必填且数字十一位
- 团购价：数字最小10最大100
- 是否打折：必填
- 行业类型必填：必填

4. 表单提交，校验通过方可提交，校验不通过弹窗提示。

`提示：`

- 数据的加载与提交使用jquery ajax模拟即可。远程接口不需要实现;
- 实现原型参考图片，如果样式实现有空难可以不完全实现样式，只需要功能完整即可

相关框架API

vue [http://cn.vuejs.org/guide/]

vue-validator [http://vuejs.github.io/vue-validator/zh-cn/index.html]
