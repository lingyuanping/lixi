## 脚本搭建
> build theme-chack(示例下次补充)
1. 创建主题: 生成字体图标数组,使用的是postcss,可以匹配css样式,将符合css规则的都生成一个数组(具体有待研究)
2. 使用的是 postcss.parse(str).nodes 就得到了一个符合css规则的数组,node.selector 获取类名
3. 将类名使用正则表达匹配写到一个数组上 match 返回一个数组,数组的第一是匹配的方法,第二就是小括号上的方法
4. 将匹配的icons写入到,examples.icons.json.(icon 完成)
> build i18n
1. 创建国际话 i18n = internationalization.因为internationalization 中间有18个字母,所以叫 i8n.
2. 将json文件结合tpl结合更新到主语言模板.模板是相对应的
3. replace 返回替换后的字符串
> build version 
1. 创建版本号(今天就不看了,看最主要的)
> entry.js
1. 有三个环境 1 > dev：开发环境 2 > produce: 生产环境 3 > play: 播放(?) 今天就只看开发环境
2. entry.js 就是有个问题一直弄不懂 没有写绝对路径.import 会找的到吗?(这个问题今后讨论,就当它会自己找)
3. 导进一个大的样式.这个样式应该包含了所有的样式
4. 导入路由配置文件(等下再研究)
5. 导入刚才生成的模板
6. 使用了 internationalization (耶 我也能全拼对)
7. 将模块都加载到了Vue 实例中去了
8. 实例化一个 router ,方式是hash,基本路径为当前目录(发现 router 不是一个简单的东西,今天晚上不学)
9. render： h => h(entry) 都不管了 明天再研究

> webpack-dev-server
1. 刚才的主题跑偏了，今天最最要的是webpack-dev-server
2. 引入了 webpack 全家桶 引入了 markdown-it(这是个好东西)
3. slugify 将中文变成拼音
4. 还有就是 cheerio 以前爬虫的时候使用过 就是将字符的html转化为 $ 对象
5. config 文件 今天也不研究
6. convert wrap 转换函数,包裹函数
7. webpackConfig 重头戏 1.entry 输入文件 2.output 输出文件 3.resolve 解析文件 别名 使用的modules
8. devServer 生成环境 一看就懂(不解释)
9. module 定义规则 1. enforce 强制在最先执行 先执行
  .jsx 加载器为 eslint-loader 2. 加载 vue 同上
   3 . es6|jsx|babel 4 . md 使用的是 vue-markdown-loader options选项使用锚 层级2,使用拼音 永久链接 permalinkBe 永久链接之前 permalinkBefore 4. 容器 挂在到 demo 上 , validate 验证 渲染render 

10. plugins要使用的脚本 