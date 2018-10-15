# 这是一篇对 gulp 的理解和开发的文档
## 参考博客 https://blog.csdn.net/asd940726/article/details/46907633
* npm install gulp --save --dev  安装包

* 创建任务  task
````js 
gulp.task('name',function () { // 有任务名称
}) 
```

* 引用文件 src
````js
gulp.task('name',function () { // 有任务名称
  gulp.src('/*.js')
}) 
```

* 数据流 pipe
````js
gulp.task('name',function () { // 有任务名称
  gulp.src('/*.js')
  .pipe() // 将上次的结果流向这里
})
```

* 数据流 dest
````js
gulp.task('name',function () { // 有任务名称
  gulp.src('/*.js')
  .pipe(jade()) // 将上次的结果流向这里
  .pipe(gulp.dest('build-dev/')) // 将文件导出 
})
```

* 监听 watch

````js
gulp.watch('/*.js',['jade','uplify']).on('change',function(event){
  console.log('this file change', event.path , 'was', event.type ,'runing task ...')
})
```

* 这个文档根本就不可用, 首先就是我还没用了解过gulp, 在项目开发的时候也是别人搭建好的。而且工具而已,理解就行，没有必要去认真的学习。

* 还用要补充的是等我将整个项目,完全跑通了之后,在次回来整理这些文档,我也是边学，一边整理。不能说肯定会乱。百分之一万会乱。百分百已经是少的了。

* 插件的使用 npm 包 gulp-load-plugins 插件包

````js
let gulpLoadPlugins = require('gulp-load-plugins')
let plugins = gulpLoadPlugins()

gulp.task('js', function () {
  return gulp.src('/js/*.js')
    .pipe(plugins.jshint()) //js 检查
    .pipe(gulp.dest('build'))
})
```
* 事件监听 watch 该事件的函数

````js
let watcher = gulp.watch('templates/*.tmpl.html',['build']);;
// on 监听事件 1.change 2.end 3.error 4.ready 5.nomatch 
// watcher 上的方法 watcher.end() watcher.files() watcher.add() watcher.remove()
```

* 热更新 liveReload browsersync
````js
var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
   var files = [
      'app/**/*.html',
      'app/assets/css/**/*.css',
      'app/assets/imgs/**/*.png',
      'app/assets/js/**/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './app'
      }
   });
});
```

