
Page({
  data: {
    hidden:true,
    list:[],
    listdata:[],
    listarr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  //获取识别id
  onLoad: function (option) {
    var WxParse = require('../../wxParse/wxParse.js');
    var that=this
    wx.request({
      url: 'https://sso.zlf.cn/hr/questionsAndAnswers/wxList',
      method: "POST",
      dataType: "json",
      success: function (res) {
        // console.log(res.data)
        if (res.data.code == 0 && res.data.rows.length>0){
          that.setData({
            hidden: false,
            list: res.data.rows
          })
          for (let i = 0; i < res.data.rows.length; i++) {
            WxParse.wxParse('ask' + i, 'html', res.data.rows[i].question, that);
            WxParse.wxParse('answer' + i, 'html', res.data.rows[i].answer, that);
            if (i === res.data.rows.length - 1) {
              WxParse.wxParseTemArray("asklist", 'ask', res.data.rows.length, that)
              WxParse.wxParseTemArray("anwserlist", 'answer', res.data.rows.length, that)
            }
          }
          let list = that.data.asklist;
          let list1 = that.data.anwserlist;
          list.map((item, index, arr) => {
            arr[index][0].id = 1;
            arr[index][0].name = 'test';

          });
          // console.log(list,list1)
          list1.map((item, index, arr) => {
            arr[index][0].id = 1;
            arr[index][0].name = 'test';

          });
          var listdata=[];
          for(var i=0;i<list.length;i++) {
            var obj={};
            obj.ask= list[i]
            obj.answer=list1[i]
            listdata[i]=obj;
          }
          that.setData({
            listdata: listdata
          })
          
        }
        // console.log(res)
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
  onShareAppMessage: function () {
   
  }
})