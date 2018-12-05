(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{171:function(e,n,t){"use strict";t.r(n);var a=t(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"webpack分离生产和开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack分离生产和开发环境","aria-hidden":"true"}},[e._v("#")]),e._v(" webpack分离生产和开发环境")]),e._v(" "),t("p",[e._v("我们的项目，在开发和生产环境下，需要构建的目标差异很大。在开发环境中，我们需要具有调试追踪的source map，需要本地服务器dev server，需要热加载和热替换模块。而在生产环境中，我们则需要更快的访问速度，更小的代码体积，更优化的资源。因此我们需要将开发环境和生产环境的配置独立开来。")]),e._v(" "),t("h2",{attrs:{id:"项目基本结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目基本结构","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目基本结构")]),e._v(" "),t("p",[e._v("这里只放出代码结构，没有安装的插件根据配置自行安装。。。webpack.config文件在稍后的步骤中，我们再重新创建，因此暂时不创建webpack配置文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("project\n|- src\n  |- index.js\n  |- print.js\n  |- style.css\n|- package.json\n")])])]),t("p",[e._v("代码如下"),t("br"),e._v("\n/src/index.js")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import { printMe } from './print.js'\nimport './style.css'\n\nif (process.env.NODE_ENV !== 'production') {\n  console.log('we are in development mode!')\n}\n\nfunction component () {\n  var ele = document.createElement('div')\n  var btn = document.createElement('button')\n  \n  btn.innerHTML = \"Click me and check the console!\"\n  btn.onclick = printMe\n\n  ele.appendChild(btn)\n  return ele\n}\n\ndocument.body.appendChild(component())\n")])])]),t("p",[e._v("/src/print.js")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export function printMe() {\n  console.log('I get called from print.js!')\n  console.log('new hot accept6')\n  // consola.error('error!!!')\n}\n\nexport function print2() { // 不使用的function，这里用来展示tree-shaking\n  console.log(\"print 2\")\n}\n\nexport function print3() { // 不使用的function，这里用来展示tree-shaking\n  console.log(\"print 3\")\n}\n")])])]),t("p",[e._v("/src/style.css")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("body {\n background-color: rgb(180, 236, 189);\n}\n")])])]),t("h2",{attrs:{id:"基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 基本配置")]),e._v(" "),t("p",[e._v("主要思路是webpack可以用config指令来配置打包时所依赖的配置文件，例如"),t("code",[e._v("webpack --config webpack.prod.js")]),e._v("，因此我们可以通过在package.json中配置不同的script脚本来实现生产和开发环境的分离。但是本着不重复的原则，因此我们需要在建立一个公用的common配置来保存那些通用配置。"),t("br"),e._v("\n新增配置文件如下")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("project\n|- webpack.common.js\n|- webpack.dev.js\n|- webpack.prod.js\n")])])]),t("p",[e._v("project/webpack.common.js")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const path = require('path')\nconst HtmlWebpckPlugin = require('html-webpack-plugin')\nconst CleanWebpackPlugin = require('clean-webpack-plugin')\n\nmodule.exports = {\n  mode: \"production\",\n  entry: {\n    app: './src/index.js',\n  },\n  plugins: [\n    new CleanWebpackPlugin(['dist']), // 用于在每次构建时，清理dist文件夹\n    new HtmlWebpckPlugin({ // 会自动生成index.html，并自动引入js依赖\n      title: 'Output Management'\n    })\n  ],\n  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: ['style-loader', 'css-loader']\n      }\n    ]\n  },\n  output: {\n    // 多入口，必须有多输出, 根据name和hash生成，确保每一次生成的JS文件都不一样\n    filename: '[name].[hash].bundle.js', \n    path: path.resolve(__dirname, 'dist'),\n  }\n}\n")])])]),t("p",[e._v("webpack.dev.js")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const merge = require('webpack-merge') // 使用webpack自带的merge功能合并配置文件\nconst common = require('./webpack.common.js')\nconst webpack = require('webpack')\n\nmodule.exports = merge(common, {\n  mode: 'development', // 配置编译环境为development\n  devtool: 'inline-source-map', // 代码异常追踪\n  devServer: {  // dev server 自带本地服务器功能。可以通过localhost：port访问\n    contentBase: './dist',\n    hot: true, // 热加载设置允许\n  },\n  plugins: [\n    new webpack.HotModuleReplacementPlugin() // 热加载模块\n  ],\n})\n")])])]),t("p",[e._v("webpack.prod.js")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const merge = require('webpack-merge')\nconst common = require('./webpack.common.js')\nconst UglifyJSPlugin = require('uglifyjs-webpack-plugin')\nconst webpack = require('webpack')\n\nmodule.exports = merge(common, {\n  mode: 'production',\n  devtool: 'source-map',\n  plugins: [\n    new UglifyJSPlugin({ // 代码压缩插件启用。\n      sourceMap: true\n    }),\n    new webpack.DefinePlugin({ // 该插件用于设置环境变量process.env.NODE_ENV \n      'process.env.NODE_ENV': JSON.stringify('production')\n    })\n  ]\n})\n")])])]),t("p",[e._v("package.json")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('···\nscript: {\n  ···\n  "build": "webpack --config webpack.prod.js",\n  "start": "webpack-dev-server --open --config webpack.dev.js"\n  ···\n}\n···\n')])])]),t("h2",{attrs:{id:"热加载模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#热加载模块","aria-hidden":"true"}},[e._v("#")]),e._v(" 热加载模块")]),e._v(" "),t("p",[e._v("开发环境中采用的热加载模块。需要在index.js中修改函数。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("···\n// document.body.appendChild(component())\nif (process.env.NODE_ENV == 'production') { // 生产环境不使用热加载\n  document.body.appendChild(component())\n} else {\n    let element = component() // 当print.js改变导致页面重新渲染时，重新获取渲染的元素\n    document.body.appendChild(element)\n\n    if (module.hot) { // 检测热加载模块是否生效\n      module.hot.accept('./print.js', () => {\n        console.log('accepting the updated printMe module')\n\n        document.body.removeChild(element) // 当热加载生效后，删除旧的元素，添加新的元素\n        element = component()\n        document.body.appendChild(element)\n      })\n    }\n}\n\n")])])])])}],!1,null,null,null);s.options.__file="4.md";n.default=s.exports}}]);