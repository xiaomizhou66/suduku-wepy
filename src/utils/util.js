// 秒 => 00:00:00
const formatTime = (time) => {
  let h = Math.floor(time / 3600)
  h = (h < 10) ? '0' + h : h
  let m = Math.floor(time % 3600 / 60)
  m = (m < 10) ? '0' + m : m
  let s = time % 3600 % 60
  s = (s < 10) ? '0' + s : s
  return `${h}:${m}:${s}`
}

/* 可以将一些公共的代码抽离成为一个单独的 js (utils.js)文件，作为一个模块; 
模块只有通过 module.exports 或者 exports 才能对外暴露接口。 
所以当你在util.js里封装的方法想要在外部使用的话,必须通过 module.exports 或者 exports 对外暴露 
需要注意的是，这个文件名是指定的，只能是 utils 文件夹下的 util.js 文件，
改变了就会出错的。*/

module.exports = {
  formatTime: formatTime //'对外方法名':'本地方法名'
}
