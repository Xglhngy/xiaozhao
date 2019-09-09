import Card from './image.js';
const app = getApp()
Page({
  imagePath: '',
  data: {
    "bnrUrl": [{
      "url": "https://file.zlf.cn/file/showFile?filePath=/201908/31/B3BBB363654EB0423B597CDC460A6EB7.jpg&sign=7b86cb77a2e22f2e29386fdc917a3a10&fileType=normal&isOnLine=T"
    }, {
        "url": "https://file.zlf.cn/file/showFile?filePath=/201908/31/6D4B3A0607378A0CE2C677FB7BC18848.jpg&sign=5bf30a2c0e5fbaecd1e59d0c47c225ff&fileType=normal&isOnLine=T"
    }, {
        "url": "https://file.zlf.cn/file/showFile?filePath=/201908/31/C20E46389CB101B2F6E79761B85ECA0C.jpg&sign=cd5fb020661fa4f3bd8b623e735428b2&fileType=normal&isOnLine=T"
    }],
    src:"https://file.zlf.cn/file/showFile?filePath=/201908/17/940EC71A9E12831A5D0230E17413ECCF.mp4&sign=89442249cc08be6593b6683d21b349fd&fileType=normal&isOnLine=T",
    alet:"https://file.zlf.cn/file/showFile?filePath=/201908/17/9D51624AB33EB3601F48A3B4636B80F9.jpg&sign=604e8c29ea3019ba3170d69b9f7a5dc6&fileType=normal&isOnLine=T",
    hidden:true,
    wx: "../images/weixin-line.png",
    friend: "../images/pyq.png",
    template:{},
    show:true,
    showModel:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onImgOK(e) {
    // console.log(0)
    this.imagePath = e.detail.path;
    // console.log(e);
  },
  onImgErr(e){
    // console.log(45)
    // console.log(e);
  },
  showmod:function(){
    this.setData({
      show:true
    })
  },
  saveImage() {
    var that=this
    wx.showLoading({
      title: '保存中...'
    })
    wx.saveImageToPhotosAlbum({
      filePath: this.imagePath,
      success(res) {
        wx.hideLoading()
        // console.log("success");
        that.setData({
          show: true
        })
        wx.showModal({
          title: '提示',
          content: '您的推广海报已存入手机相册，赶快分享给好友吧',
          showCancel: false,
        })
      },
      fail: function (err) {
        if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
          // 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用
          wx.showModal({
            title: '提示',
            content: '需要您授权保存相册',
            showCancel: false,
            success: modalSuccess => {
              wx.openSetting({
                success(settingdata) {
                  // console.log("settingdata", settingdata)
                  if (settingdata.authSetting['scope.writePhotosAlbum']) {
                    wx.showModal({
                      title: '提示',
                      content: '获取权限成功,再次点击即可保存',
                      showCancel: false,
                    })
                  } else {
                    wx.showModal({
                      title: '提示',
                      content: '获取权限失败，将无法保存到相册哦~',
                      showCancel: false,
                    })
                  }
                },
                fail(failData) {
                  // console.log("failData", failData)
                },
                complete(finishData) {
                  // console.log("finishData", finishData)
                }
              })
            }
          })
        }
      }
    });
  },
  tohide:function(){
    this.setData({
      show: true,
    });
  },
  friend: function () {
    // console.log(1)
    this.setData({
      template: new Card().palette(),
    });
    this.setData({
      show: false
    })
  },

  onLoad: function (options) {
    
    if (app.globalData.userInfo) {
      // console.log(1)
      this.setData({
        showModel: false
      })
    } else if (this.data.canIUse) {
      // console.log(2)
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          showModel: false
        })
      }
    } else {
      // console.log(3)
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          // console.log(res.userInfo)
          app.globalData.userInfo = res.userInfo
          this.setData({
            showModel: false
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      hasUserInfo: false
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // this.setData({
    //   hidden: true
    // })
  },

  
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  alerter:function(){
    this.setData({
      hidden: false
    })
  },
  hide:function(){
    this.setData({
      hidden: true
    })
  },


    /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    let users = wx.getStorageSync('user');
    if (res.from === 'button') { }
    return {
      title: '周六福珠宝股份有限公司',
      path: '/pages/about/about',
      success: function (res) {
        // console.log(res)
      }
    }
  }
})