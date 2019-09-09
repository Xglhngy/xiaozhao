const app = getApp()
Page({
  data: {
    LabelNew:'',
    userInfo: {},
    hasUserInfo: false,
    openid:'',
    show:true
  },

  /**
   * 生命周期函数--监听页面加载
   */

  //获取识别id
  onLoad: function (option) {
    console.log(1)
    // 获取id根据id判断用户是否直接绑定过
    var that = this
     wx.getStorage({
      key: 'code',
      success(res) {
        if(res.data==200){ 
          // console.log(res.data)
          wx.getStorage({
            key: 'openid',
            success(res) {
              that.data.openid = res.data
              wx.request({
                url: 'https://sso.zlf.cn/hr/candidateTask/getIsGenerateTask/' + res.data,
                method: 'GET',
                success: function (res) {
                  // console.log(that.data.openid)
                  // 如果有绑定过携带openid和num直接跳转
                  if (res.data.code == 200) {
                    wx.redirectTo({
                      url: '../task/validation?code=' + that.data.openid + '&num=',
                    })
                  } else {
                    that.setData({
                      show: false
                    })
                  }
                }
              })
            }
          })
        }else{
          console.log(res.data)
          wx.showModal({
            title: '提示',
            content: '您暂未授权',
            showCancel:false,
            success(res) {
              if (res.confirm) {
                wx.redirectTo({
                  url: '../about/about',
                })
              } 
            }
          })
        }
      }
    })
  },
  // 获取输入框的内容
  listenerNewLabelInput: function (e) {
    this.data.LabelNew = e.detail.value;
  },
  // 根据内容判断是否有对应数据
  comein:function(){
    console.log(1)
    var that=this
    wx.request({
      url: 'https://sso.zlf.cn/hr/candidateTask/generateTask',
      method:'POST',
      data: { phone: that.data.LabelNew, openId: that.data.openid,},
      success:function(res){
        // console.log(res)
        if(res.data.code==200){
          // console.log(res.data)
          // 若有对应数据携带参数跳转列表页
          wx.navigateTo({
            url: '../task/validation?code=&num=' + that.data.LabelNew,
          })
        }
        else if (res.data.code == 500){
          // console.log(res)
          // 返回错误数据
          wx.showModal({
            title: '提示',
            content: res.data.msg,
          })
        }
      }
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
  }
})