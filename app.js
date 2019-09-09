//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.setTabBarStyle({
      color: '#333333',
      selectedColor: '#18a689',
      backgroundColor: '#ffffff',
      borderStyle: '#999'
    })
    // 登录
    wx.login({
      success: res => {
        // console.log(res.code)
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxf6b5c835f8937b71&secret=f526a1f10142852fd2ded794137632c4&js_code='+res.code +'&grant_type=authorization_code',
          success:function(res){
            // console.log(res.data.openid)
            wx.setStorageSync("code", '200')
            wx.setStorageSync("openid",res.data.openid)
          }
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
      fail:rsp => {
        // console.log(res)
        wx.setStorageSync("code", '500')
      }
    })
  },
  globalData: {
    userInfo: null
  }
})