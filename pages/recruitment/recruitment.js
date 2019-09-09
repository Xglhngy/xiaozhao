
Page({
  data: {
    list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.code==205){
      wx.navigateTo({
        url: '/pages/recruitment/detail?ID=' + options.ID,
      })
    }
    var that=this
    wx.request({
      url:"https://sso.zlf.cn/hr/recruit/wxList",
      header: {
        "Content-Type": "application/x-www-form-urlencoded" //使用form方式传递参数
      },
      method: "POST",
      dataType: "json",
      success:function(res){
        // console.log(res)
        if(res.data.code==0){
          that.setData({
            list: res.data.rows
          })
        }
      
      }
    })
  },
  gotableinfo: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    var id = this.data.list[index].recruitId
    wx.navigateTo({
      url: '../recruitment/detail?ID='+id
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