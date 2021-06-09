// 导入gulp模块
let gulp = require('gulp')
let cssmin = require('gulp-cssmin') // 压缩css
let autoprefixer = require('gulp-autoprefixer') // css属性自动添加前缀 -- 还需要在package.json中添加代码 17-21行
let sassmin = require('gulp-sass')  // 压缩sass
let uglify = require('gulp-uglify') // 压缩js
// let concat = require('gulp-concat') // 合并文件
// let rename = require('gulp-rename') // 重命名
let htmlmin = require('gulp-htmlmin')   // 压缩html
let del = require('del')    // 删除
let webserver = require('gulp-webserver')   // 自动刷新
let babel = require('gulp-babel')   // es6-es5

// 另一种方法 -- 运行 -- gulp lib1
// gulp.task('lib1',()=>{
//     // 读取指定文件
//     return gulp.src('./src/lib/jquery.js')
//     // 转存到指定位置
//     .pipe(gulp.dest('./dist/lib'))
// })


// 创建lib任务 -- 第三方文件不需要压缩
var lib1=()=>{ 
    // 读取指定文件
    return gulp.src('./src/lib/*.js')
    // 转存到指定位置
    .pipe(gulp.dest('./dist/lib'))
}
var fonts1=()=>{ 
    // 读取指定文件
    return gulp.src('./src/fonts/.\\**\\*')
    // 转存到指定位置
    .pipe(gulp.dest('./dist/fonts'))
}
// 创建img任务
var img1=()=>{
    return gulp.src('./src/images/*')
    .pipe(gulp.dest('./dist/images'))
}
// 创建css任务
var css1=()=>{
    return gulp.src('./src/css/*')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
// 创建sass任务
var sass1=()=>{
    return gulp.src('./src/sass/*')
    .pipe(sassmin())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
// 创建js任务
var js1=()=>{
    return gulp.src('./src/js/*')
    .pipe(babel({
        presets:['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

// 创建js合并任务
// var con1=()=>{
//     return gulp.src('./src/js/*')
//     .pipe(concat('hebing.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('./dist/js'))
// }
// 创建重命名任务
// var name1=()=>{
//     return gulp.src('./src/js/demo1.js')
//     .pipe(uglify())
//     .pipe(rename('demo1.min.js'))
//     .pipe(gulp.dest('./dist/js'))
// }
// 创建html任务
var html1=()=>{
    return gulp.src('./src/*.html')
    .pipe(htmlmin({
        removeAttributeQuotes:true, // 移除属性上的双引号
        removeComments:true,    // 移除注释
        collapseWhitespace:true,    // 移除所有空格,会变成一行代码
        minifyCSS:true, // 把页面里面style标签里面css样式也去空格 
        minifyJS:true,  // 把页面里面script标签里面js样式也去空格
        collapseBooleanAttributes:true, // 把值为布尔值的属性简写
    }))
    .pipe(gulp.dest('./dist'))
}
// 删除任务 -- 每次执行压缩之前先清空任务文件夹
var del1=()=>{
    return del(['./dist'])
}
// 创建webserver任务，实现自动打开浏览器和刷新
var web1=()=>{
    return gulp.src('./dist')
    .pipe(webserver({
        port:9527,  // 端口号，0-65535之间，尽量不要用0-1023
        open:'./home.html',  // 你默认打开的首页，路径从dist开始写
        livereload:true,    // 热更新，就是当dist里面代码有变化的时候自动刷新浏览器
    }))
}



// 自动监听
var watch1=()=>{
    gulp.watch('./src/css/*',css1);
    gulp.watch('./src/lib/*',lib1);
    gulp.watch('./src/img/*',img1);
    gulp.watch('./src/sass/*',sass1);
    gulp.watch('./src/js/*',js1);
    gulp.watch('./src/*.html',html1);
}

// 导出任务 -- 运行 -- gulp libHandler
// module.exports.libHandler = lib1
// module.exports.imgHandler = img1
// module.exports.cssHandler = css1
// module.exports.sassHandler = sass1
// module.exports.jsHandler = js1
// module.exports.concatHandler = con1
// module.exports.renameHandler = name1
// module.exports.htmlminHandler = html1
// module.exports.delHandler = del1

// 把上面创建好的任务全部导入在默认任务中   --   批量执行任务   -- 异步
// module.exports.default = gulp.parallel(lib1,img1,css1,sass1,js1,con1,name1,html1)

// 同步执行 -- 逐个执行
module.exports.default = gulp.series(del1,
    gulp.parallel(lib1,img1,css1,sass1,js1,html1,fonts1)
    ,web1
    ,watch1
)
// ↑ 第一个del1是同步的，也就是先执行第一个，后面的让它异步，不用分先后顺序，也可以不用 gulp.parallel()，让他逐个执行
// module.exports.default = gulp.series(del1,lib1,img1,css1,sass1,js1,con1,name1,html1)


