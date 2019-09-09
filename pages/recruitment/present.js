
Page({
  data: {
    // 文本限制
    maxTextLen:600,
    // 姓名
    name:'',
    // 电话
    tel:'',
    // 性别
    sex:'1',
    // 地址
    household:'',
    // 身高
    height:'',
    weight:'',
    // 学历
    education:'',
    email:'',
    speciality:'',
    otherPosts:'',
    // 其他
    remark:'',
    recruitId:'',
    dateBirth:'',
    focusId:'',
    // 遍历家庭
    familySituationDoList: [{name:'',relationship: '', position: '', workUnit:''}],
    // 教育遍历
    educationalList: [{time: '', major: '', education:'',qs:'',jz:''}],
    // 工作遍历
    internshipList: [{ time: '', practiceUnit: '', internshipContent: '', qs: '', jz: ''}],
    // 荣誉遍历
    certificateDoList: [{ time: '', certificateName: '', issuingUnit: ''}],
    zsshow:false,
    hiddenzs:"/pages/images/jts.png",
    sxshow:false,
    hiddensx: "/pages/images/jts.png",
    educationshow: false,
    hiddeneducation: "/pages/images/jts.png",
    familyshow:false,
    hiddenfamily: "/pages/images/jts.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 家庭
  hiddenfamily: function () {
    if (this.data.familyshow) {
      this.setData({
        familyshow: false,
        hiddenfamily: "/pages/images/jts.png"
      })
    } else {
      this.setData({
        familyshow: true,
        hiddenfamily: "/pages/images/jt.png"
      })
    }
  },
  // 教育
  hiddeneducation:function(){
    if (this.data.educationshow) {
      this.setData({
        educationshow: false,
        hiddeneducation: "/pages/images/jts.png"
      })
    } else {
      this.setData({
        educationshow: true,
        hiddeneducation: "/pages/images/jt.png"
      })
    }
  },
  // 实习
  hiddensx:function(){
    if (this.data.sxshow) {
      this.setData({
        sxshow: false,
        hiddensx: "/pages/images/jts.png"
      })
    } else {
      this.setData({
        sxshow: true,
        hiddensx: "/pages/images/jt.png"
      })
    }
  },
  // 证书隐藏
  hiddenzs:function(){
    if (this.data.zsshow){
      this.setData({
        zsshow: false,
        hiddenzs: "/pages/images/jts.png"
      })
    }else{
      this.setData({
        zsshow: true,
        hiddenzs: "/pages/images/jt.png"
      })
    }
    
  },
  //获取识别id
  onLoad: function (option) {
    // console.log(option)
    this.setData({
      recruitId: option.recruitId
    })
  },
  // 取性别的值
  radioChange: function (e) {
    this.setData({
      sex: e.detail.value
    })
  },
  // 取日期的值
  bingDateChange:function(e){
    // console.log(e)
      this.setData({
       dateBirth: e.detail.value
      })
  },
  // 教育经历开始日期获取
  bingDateChange1: function (e) {
    let id = e.target.id;
    let l = id.length;
    let n = id.slice(l - 1)
    let data = this.data.educationalList
    data[n].qs = e.detail.value
    if(data[n].jz){
      data[n].time = data[n].qs + "/" + data[n].jz
    }
    this.setData({
      educationalList: data
    })
    //console.log(this.data.educationalList)
  },
  // 教育经历结束日期获取
  bingDateChangelast1: function (e) {
    let id = e.target.id;
    let l = id.length;
    let n = id.slice(l - 1)
    let data = this.data.educationalList
    data[n].jz = e.detail.value
    if(data[n].qs){
      data[n].time = data[n].qs + "/" + data[n].jz
    }
    this.setData({
      educationalList: data
    })
    // console.log(this.data.educationalList)
  },
  // 实习经历日期获取
  bingDateChange2: function (e) {
    let id = e.target.id;
    let l = id.length;
    let n = id.slice(l - 1)
    let data = this.data.internshipList
    data[n].qs = e.detail.value
    if (data[n].jz) {
      data[n].time = data[n].qs + "/" + data[n].jz
    }
    this.setData({
      internshipList: data
    })
    // console.log(this.data.internshipList)
  },
  bingDateChangelast2: function (e) {
    let id = e.target.id;
    let l = id.length;
    let n = id.slice(l - 1)
    let data = this.data.internshipList
    data[n].jz = e.detail.value
    if (data[n].qs) {
      data[n].time = data[n].qs + "/" + data[n].jz
    }
    this.setData({
      internshipList: data
    })
    // console.log(this.data.internshipList)
  },
  // 荣誉证书日期获取
  bingDateChange3: function (e) {
    let id = e.target.id;
    let l = id.length;
    let n = id.slice(l - 1)
    let data = this.data.certificateDoList
    data[n].time = e.detail.value
    this.setData({
      certificateDoList: data
    })
    // console.log(this.data.certificateDoList)
  },
  // 获取输入框内容
  // 填充到数组里
  bindKeyInput: function (event) {
    var that = this;
    var value = event.detail.value
    var id = event.currentTarget.dataset.id
    if (id.indexOf("xm") != -1) {
      var i = id.lastIndexOf("xm")
      var xmindex = id.substring(i + 2, id.length)
      
      var obj = that.data.familySituationDoList
      obj[xmindex].name = event.detail.value
      that.setData({
        familySituationDoList:obj
      })
    } else if (id.indexOf("gx") != -1){

      var i = id.lastIndexOf("gx")
      var gxindex = id.substring(i + 2, id.length)
     
      var obj = that.data.familySituationDoList
      obj[gxindex].relationship = event.detail.value
      that.setData({
        familySituationDoList: obj
      })
    } else if (id.indexOf("zw") != -1) {
      
      var i = id.lastIndexOf("zw")
      var zwindex = id.substring(i + 2, id.length)

      var obj = that.data.familySituationDoList
      obj[zwindex].position = event.detail.value
      that.setData({
        familySituationDoList: obj
      })
    } else if (id.indexOf("dw") != -1) {
      
      var i = id.lastIndexOf("dw")
      var dwindex = id.substring(i + 2, id.length)

      var obj = that.data.familySituationDoList
      obj[dwindex].workUnit = event.detail.value
      that.setData({
        familySituationDoList: obj
      })
    } else if (id.indexOf("zy") != -1) {
      
      var i = id.lastIndexOf("zy")
      var zyindex = id.substring(i + 2, id.length)
 
      var obj = that.data.educationalList
      obj[zyindex].major = event.detail.value
      that.setData({
        educationalList: obj
      })
    } else if (id.indexOf("xl") != -1) {
      
      var i = id.lastIndexOf("xl")
      var xlindex = id.substring(i + 2, id.length)

      var obj = that.data.educationalList
      obj[xlindex].education = event.detail.value
      that.setData({
        educationalList: obj
      })
    } else if (id.indexOf("sx") != -1) {
      
      var i = id.lastIndexOf("sx")
      var sxindex = id.substring(i + 2, id.length)
   
      var obj = that.data.internshipList
      obj[sxindex].practiceUnit = event.detail.value
      that.setData({
        internshipList: obj
      })
    } else if (id.indexOf("ct") != -1) {
      
      var i = id.lastIndexOf("ct")
      var ctindex = id.substring(i + 2, id.length)

      var obj = that.data.internshipList
      obj[ctindex].internshipContent = event.detail.value
      that.setData({
        internshipList: obj
      })
    } else if (id.indexOf("zs") != -1) {
      
      var i = id.lastIndexOf("zs")
      var zsindex = id.substring(i + 2, id.length)

      var obj = that.data.certificateDoList
      obj[zsindex].certificateName = event.detail.value
      that.setData({
        certificateDoList: obj
      })
    } else if (id.indexOf("bf") != -1) {
      
      var i = id.lastIndexOf("bf")
      var bfindex = id.substring(i + 2, id.length)
   
      var obj = that.data.certificateDoList
      obj[bfindex].issuingUnit = event.detail.value
      that.setData({
        certificateDoList: obj
      })
    }
  },

  // 提交时候的判断
  formSubmit:function(e){
    console.log(e)
    this.setData({
      name: e.detail.value.name,
      tel: e.detail.value.tel,
      household: e.detail.value.address,
      height: e.detail.value.height,
      weight: e.detail.value.weight,
      education: e.detail.value.education,
      email: e.detail.value.email,
      speciality: e.detail.value.hobby,
      otherPosts: e.detail.value.otherjobs,
      remark: e.detail.value.other
    })
 
    // 判断是否填写完整
    var that = this;
    if (this.data.name != '' && this.data.tel != '' && this.data.dateBirth != '' && this.household != '' && this.data.height != '' && this.data.weight != '' && this.data.education != '' && this.data.email != ''){
      if(this.data.email.indexOf("@") > 0){
        let family = this.data.familySituationDoList
        let f = true
        // 判断家庭情况是否填写完整
        for (var i = 0; i < family.length; i++) {
          if (family[i].name == '' || family[i].relationship == '' || family[i].position == '' || family[i].workUnit == '') {
            f = false
          }
        }
        if (f) {
          let education = this.data.educationalList
          let e = true
          // 判断教育是否填写完整
          for (var i = 0; i < education.length; i++) {
            if (education[i].time == '' || education[i].major == '' || education[i].education == '') {
              e = false
            }
          }
          if (e) {
            // 请求数据
            wx.showModal({
              title: '本人承诺',
              content: '以上所填写的资料皆为真是情况，本人愿意接受核实',
              confirmText: "确认",
              success: function (res) {
                if (res.confirm) {
                  wx.request({
                    url: 'https://sso.zlf.cn/hr/delivery/addDelivery',
                    method: "POST",
                    dataType: "json",
                    data: { name: that.data.name, phone: that.data.tel, recruitId: that.data.recruitId, education: that.data.education, remark: that.data.other, dateBirth: that.data.dateBirth, household: that.data.household, height: that.data.height, weight: that.data.weight, email: that.data.email, speciality: that.data.speciality, otherPosts: that.data.otherPosts, sex: that.data.sex, remark: that.data.remark, certificateDoList: that.data.certificateDoList, educationalList: that.data.educationalList, familySituationDoList: that.data.familySituationDoList, internshipList: that.data.internshipList },
                    success: function (res) {
                      // console.log(res)
                      if (res.data.code == 200) {
                        wx.showModal({
                          title: '提交申请成功',
                          confirmText: "确认",
                          showCancel: false,
                          success: function (res) {
                            if (res.confirm) {
                              wx.switchTab({ url: '/pages/recruitment/recruitment' })
                            }
                          }
                        })
                      } else if (res.data.code == 500) {
                        // console.log(that.data.recruitId)
                        // console.log(res.data)
                        wx.showModal({
                          title: res.data.msg,
                          confirmText: "确认",
                          showCancel: false,
                          success: function (res) {
                            if (res.confirm) {
                              wx.switchTab({ url: '/pages/recruitment/recruitment' })
                            }
                          }
                        })
                      }
                    }
                  })
                }
              }
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '请完善您的教育经历',
              confirmText: "确认",
              showCancel: false,
            })
          }
        } else {
          wx.showModal({
            title: '提示',
            content: '请完善您的家庭情况',
            confirmText: "确认",
            showCancel: false,
          })
        }
      }else {
        wx.showModal({
          title: '提示',
          content: '您的邮箱格式有误',
          confirmText: "确认",
          showCancel: false,
        })
      }
    }else{
      wx.showModal({
        title: '提示',
        content: '请完善您的个人信息',
        confirmText: "确认",
        showCancel: false,
      })
    }  
  },
  // 增加信息按钮
  add:function(e){
    // 家庭成员增加记录familyadd
    if (e.currentTarget.id =='familyadd'){
      if (this.data.familySituationDoList.length<6){
        var data = this.data.familySituationDoList;
        var obj = {};
        obj.name = '';
        obj.relationship = '';
        obj.position = '';
        obj.workUnit = '';
        data.push(obj)
        this.setData({
          familySituationDoList: data
        })
      }else{
        wx.showModal({
          title: '提醒',
          confirmText: "最多填写5条记录",
          showCancel: false,
        })
      }
      
    }
    // 教育经历增加educationadd
    else if(e.currentTarget.id == 'educationadd'){
      if (this.data.educationalList.length < 6){
        var data = this.data.educationalList;
        var obj = {};
        obj.time = '';
        obj.major = '';
        obj.education = '';
        data.push(obj)
        this.setData({
          educationalList: data
        })
      } else {
        wx.showModal({
          title: '提醒',
          confirmText: "最多填写5条记录",
          showCancel: false,
        })
      }
      // 实习经历增加internshipadd
    } else if (e.currentTarget.id=='internshipadd'){
      if (this.data.internshipList.length<6){
        var data = this.data.internshipList;
        var obj = {};
        obj.time = '';
        obj.practiceUnit = '';
        obj.internshipContent = '';
        data.push(obj)
        this.setData({
          internshipList: data
        })
      } else {
        wx.showModal({
          title: '提醒',
          confirmText: "最多填写5条记录",
          showCancel: false,
        })
      }
      // 荣誉数组增加honoradd
    } else if (e.currentTarget.id == 'honoradd'){
      if (this.data.certificateDoList.length<6){
        var data = this.data.certificateDoList;
        var obj = {};
        obj.time = '';
        obj.certificateName = '';
        obj.issuingUnit = '';
        data.push(obj)
        this.setData({
          certificateDoList: data
        })
      } else {
        wx.showModal({
          title: '提醒',
          confirmText: "最多填写5条记录",
          showCancel: false,
        })
      }
    }
  },
  // 信息减少时按钮
  reduce:function(e){
    // familysum 数组减少
    if (e.currentTarget.id == 'familyreduce') {
      var data = this.data.familySituationDoList;
      if (data.length > 1) {
        var that=this
        wx.showModal({
          title: '提示',
          content: '确认删除此记录？',
          confirmText: "确认",
          success:function(res){
            if (res.confirm){
              data.pop();
              that.setData({
                familySituationDoList: data
              })
            }
          }
        })
       
      }else{
        wx.showModal({
          title: '提示',
          content: '家庭信息至少一条记录',
          confirmText: "确认",
          showCancel:false
        })
      }
      // 教育数组减少educationreduce
    } else if (e.currentTarget.id == 'educationreduce') {
      var data = this.data.educationalList;
      if (data.length > 1) {
        var that = this
        wx.showModal({
          title: '提示',
          content: '确认删除此记录？',
          confirmText: "确认",
          success: function (res) {
            if (res.confirm) {
              data.pop();
              that.setData({
                educationalList: data
              })
            }
          }
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '教育经历至少一条记录',
          confirmText: "确认",
          showCancel: false
        })
      }
      // 实习经历数组减少internshipreduce
    } else if (e.currentTarget.id == 'internshipreduce') {
      var data = this.data.internshipList;
      if (data.length > 1) {
        var that = this
        wx.showModal({
          title: '提示',
          content: '确认删除此记录？',
          confirmText: "确认",
          success: function (res) {
            if (res.confirm) {
              data.pop();
              that.setData({
                internshipList: data
              })
            }
          }
        }) 
      } else {
        wx.showModal({
          title: '提示',
          content: '实习经历至少一条记录',
          confirmText: "确认",
          showCancel: false
        })
      }
      // 获得荣誉数组减少honorreduce
    } else if (e.currentTarget.id == 'honorreduce') {
      var data = this.data.certificateDoList;
      if (data.length > 1) {
        var that =this
        wx.showModal({
          title: '提示',
          content: '确认删除此记录？',
          confirmText: "确认",
          success: function (res) {
            if (res.confirm) {
              data.pop();
              that.setData({
                certificateDoList: data
              })
            }
          }
        }) 
      } else {
        wx.showModal({
          title: '提示',
          content: '证书荣誉至少一条记录',
          confirmText: "确认",
          showCancel: false
        })
      }
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
  onShareAppMessage: function () {
  
  }
})