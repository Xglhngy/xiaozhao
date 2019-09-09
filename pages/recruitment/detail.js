import Card from './image.js';

Page({
  data: {
    name:'',//岗位
    createTime:'',
    salary:'',//薪资
    number:"",//人数
    education:"",//学历
    experience:'',//经验
    contact:'',//工作地址
    companyName:'',//公司名称
    company:'',//公司信息
    information:"",//岗位职责
    alet: "../images/zp.jpg",
    hidden:true,
    recruitId:'',
    show:true,
    wx: "../images/weixin-line.png",
    friend: "../images/pyq.png",
    ID:'',
    mohidden:'true',
  },
  
  /**
   * 生命周期函数--监听页面加载
   */

  //获取识别id
  onLoad: function (option) {
    // console.log(option.ID)
    this.setData({
      ID:option.ID
    })
    var WxParse = require('../../wxParse/wxParse.js');
    var that=this;
    wx.request({
      url: "https://sso.zlf.cn/hr/recruit/wxRecuritDetail/"+option.ID,
      method: "GET",
      dataType: "json",
      success: function (res) {
        // console.log(res)
        if (res.data.data.company){
          that.setData({
            mohidden:false
          })
        }
        if (res.data.code == 200) {
          WxParse.wxParse('information', 'html', res.data.data.information, that, 5)
          WxParse.wxParse('contact', 'html', res.data.data.contact, that, 5)
          WxParse.wxParse('company', 'html', res.data.data.company, that, 5)
          that.setData({
            name: res.data.data.name,
            createTime: res.data.data.createTime,
            salary: res.data.data.salary,
            number: res.data.data.number,
            education: res.data.data.education,
            experience: res.data.data.experience,
            recruitId: res.data.data.recruitId
          })
        }

      }
    })
  },
  alter: function () {
    // console.log(123)
    this.setData({
      hidden: false
    })
  },
  gotableinfo:function(){
    // console.log(this.data.recruitId)
    wx.navigateTo({
      url: '../recruitment/present?recruitId='+this.data.recruitId
    })
  },
  hide: function () {
    // console.log(123)
    this.setData({
      hidden: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onImgOK(e) {
    // console.log(0)
    this.imagePath = e.detail.path;
    // console.log(e);
  },
  onImgErr(e) {
    // console.log(45)
    // console.log(e);
  },
  saveImage() {
    var that = this
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
  tohide: function () {
    this.setData({
      show: true,
    });
  },
  showbtn: function () {
    this.setData({
      show: true,
    });
  },
  friend: function () {
    console.log(1)
    this.setData({
      template: new Card().palette(),
    });
    this.setData({
      show: false
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    let users = wx.getStorageSync('user');
    if (res.from === 'button') { }
    return {
      title: '周六福珠宝股份有限公司',
      path: '/pages/recruitment/recruitment?code=205&ID=' + this.data.ID,
      success: function (res) {
        console.log(res) 
      }
    }
  }
})