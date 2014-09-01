![bank](https://raw.githubusercontent.com/iMusic/link/master/assets/bank.png)
#### 记录前端的一些功能，大部分是新增加的API，所以可能高级浏览器才支持。有些是特定浏览器才有的API（一般是chrome）

_更新中_

-
* __上传__  &nbsp;&nbsp;  2014/7/6
   &nbsp;&nbsp;自定义样式，参考：KISSY的[Uploader](http://gallery.kissyui.com/uploader/1.5/guide/index.html)  
    :one: &nbsp;传统上传。form，flash。  
    :two: &nbsp;**XMLHttpRequest Level 2**上传  支持多文件，显示进度条以及图片预览
   - [x] 点击按钮上传
   - [x] 拖动上传
   - [ ] 截图上传（目前仅chrome支持）  

    >  可能用到的一些API或方法: 上传用到`XHR2`, `FormData`；拖动中用到`dataTransfer`接口和html5的拖放事件；预览图片用到`FileReader`的`readAsDataURL`转成base64或者用`blob`数据，截图仅chrome支持`clipboardData.items`。 

-
* __grunt 实现静态页面的自动刷新__ &nbsp;&nbsp;  2014/7/7
* 需安装的插件
   - [x] `grunt-contrib-connect`    // 现已集成livereload功能，所以不用另外安装connect-livereload插件
   - [x] `grunt-contrib-watch`
* GruntFile配置   

  ```javascript
    module.exports = function(grunt){
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
          options: {
            port: 8000,
            hostname: 'localhost',
            livereload: 35729
          },
          server: {
            options: {
              open: false, //true 自动打开面
              base: ['.'] //主目录，“.”表示GruntFile.js所在目录 src为下面的src目录
            }
          }
        },

        watch: {
          livereload: {
            options: {
              livereload: 35729
            },
            files: ['*.html']  // 设置监听的文件
          }
        }
      });

      grunt.loadNpmTasks('grunt-contrib-connect');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.registerTask('server', ['connect:server', 'watch']);
    }
  ```
* 最后`grunt server`，这样修改并保存被监听文件时，页面会自动刷新。 

 >  [Markman](http://www.getmarkman.com/)的作者开发的F5工具也能实现类似功能，很方便，[[F5官网]](http://www.getf5.com/)

-
* __跨域__
 + jsonp
 + iframe  
   ● document.domain  
   ● window.name  
   ● location.hash  
   ● postMessage  
   ● navigator (IE6 bug)
 + CORS  
   ● XMLHttpRequest (modern browser)  
   ● XDomainRequest (IE8+)

-
* __canvas图片的操作__

-
* __auido & video__

-
* ...

---
