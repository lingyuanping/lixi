## 定义开发规则
* 首先命名规则,所有的文件都要以子母和开发的顺序进行(这是让他人易读),这样还有个好处。就是有人来读写这个文件可以知道哪个文件是刚创立的哪个文件是没有创立的。还有就是为以后国际化奠定基础

* 每一个组件都需要有一个详细的说明文档。这接下来会更好的维护。必须要有单元测试,专业的就应该有。还有详细的说明文档。提供活跃的论坛进行讨论。

* 现在是写 package 的介绍。

### packge 的介绍
1. 首先 就是 脚本文件 script。里面有一大堆包。
2. 有一大堆脚本。

* 先从脚本开始
run build:file 主要是创建文件的 只要在 components.json 添加组件名称就可以生成对应的引入文件 /src/index.js 是自动生成的。
还有就是将 字体图标数组也会自动生成。生成的版本号不唯一。 唯一没有的就是没有自行启动浏览器。
  * clear: rimraf 清除 lib 上的东西，
  * build:theme 建筑主题 gulp 运行主题 然后 将主题的 东西拷贝到 lib/theme-chalk 上。
  * build:utils 单元测试 
  * 进行umd转换
  * 现在是使用 gh-pages 打包的代码提价到上面,而且是创建一个分支。
  * 但是部署的时候并不是将代码部署到上面前。而是将其部署到element.io 上去。
  * dist 是将所有的东西都打包。检测代码是否符合标准,webpack打包创建umd.创建theme。
  * 还有就是使用 esline 对代码的检测

* 然后就是各种各样的包了

* files 应该是上传的文件 将包上传到 npm 上。

* 对国际化的理解
  1. 首先, 如何使用：直接使用就是了,最简单的方法就是 Vue.use(ElementUI,{locale}).这样就可以使用了。而且没有什么使用考虑的。
  2. 直接引用,然后使用的是locale.use(lang)。组件上的语言就改变了。变成lang加载的属性了。 Vue.component(Button.name,Button)。
  3. 在打包的时候，资源的替换。使用的是webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/,'element-ui/lib/locale/lang/en')