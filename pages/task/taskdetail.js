
Page({
  data: {
    code:'',
    index:'',
    listdata:'',
    title:'',
    num:'',
    validation: []
  },

  /**
   * 生命周期函数--监听页面加载
   */

  //获取识别id
  onLoad: function (option) {
    var WxParse = require('../../wxParse/wxParse.js');
    var that = this
    that.setData({
      code: option.code,
      index: option.index,
      num:option.num
    })
    wx.request({
      url: 'https://sso.zlf.cn/hr/candidateTask/wxGetTaskList',
      method: 'POST',
      data: { phone: that.data.num, openId: that.data.code },
      success: function (res) {
        // console.log(res.data.data)
        var i = option.index
        // console.log(res.data.data[i].title)
        that.setData({
          title: res.data.data[i].title
        })
        WxParse.wxParse('listdata', 'html', res.data.data[i].explain, that, 5)
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