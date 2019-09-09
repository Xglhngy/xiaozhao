
Page({
  data: {
    code: '',
    num:null,
    list: []
    // listname: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */

  //获取openid和num
  onLoad: function (option) {
    var WxParse = require('../../wxParse/wxParse.js');
    var that = this
    that.setData({
      code: option.code,
      num:option.num
    })
    // console.log(option.code)
    // console.log(option.num)
    wx.request({
      url: 'https://sso.zlf.cn/hr/candidateTask/wxGetTaskList',
      method:'POST',
      data: { phone: that.data.num, openId: that.data.code},
      success: function (res) {
        // console.log(res)
        var time = that.formatTime(new Date());
        // console.log(res.data.data)
        var data = res.data.data
        if(data){
          for (var i = 0; i < data.length; i++) {
            if (data[i].openTime < time) {
              data[i].name = 'dataid'
              data[i].state = 'true'
            } else {
              data[i].name = 'lists'
              data[i].state = 'false'
            }
          }
        }else{
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false,
          })
        }
        
        that.setData({
          list: data
        })
      }
    })
  },
  formatTime: function (date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()

    return [year, month, day].map(this.formatNumber).join('-') + ' ' + [hour, minute, second].map(this.formatNumber).join(':')
  },
  formatNumber: function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  },
  back:function(){
    wx.switchTab({
      url: '/pages/about/about',
    });
  },
  todetail: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    // var time = new Date();  
    var time = this.formatTime(new Date());
    // console.log(time)
    // console.log(this.data.list[index].openTime)
    if (this.data.list[index].openTime < time) {
      wx.navigateTo({
        url: '../task/taskdetail?code=' + this.data.code + '&index=' + index + '&num=' + this.data.num
      })
    }

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