// pages/user-info/user-info.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    tel:'',
    address:'',
    imgurl:'../../assets/user/none.png',//云存储的头像
    person:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.cloud.callFunction({
        name:"loginopenid"
      }).then(res=>{
        console.log("获取到的当前用户openid",res.result.openid)
        wx.setStorageSync('openid', res.result.openid)
        //在用户表中查询当前的openid是否有对应的头像，有就显示
        db.collection("userlist").where({
          openid:res.result.openid
        }).get().then(res=>{
          console.log("获取的用户信息",res.data)
          console.log("用户是否存在",res.data.length)
          this.setData({
            person:res.data.length,
            imgurl:res.data[0].photo,
            name:res.data[0].name,
            tel:res.data[0].tel,
            address:res.data[0].address,

          })
          console.log("获取的头像",this.data.imgurl)
        })
      })
  },
//获取姓名
name(e){
  console.log("获取姓名",e.detail.value)
  this.setData({
    name:e.detail.value
  })
},
//获取电话
tel(e){
  console.log("获取电话",e.detail.value)
  this.setData({
    tel:e.detail.value
  })
},
//获取地址
address(e){
  console.log("获取地址",e.detail.value)
  this.setData({
    address:e.detail.value
  })
},
//上传头像
upload(){
console.log("点击上传头像")
console.log("外部的this",this)
let that=this
//拍摄或从手机相册中选择图片或视频
wx.chooseMedia({
  count: 1,
  mediaType: ['image','video'],
  sourceType: ['album', 'camera'],
  maxDuration: 30,
  camera: 'back',
  success(res) {
    console.log("头像",res.tempFiles[0].tempFilePath)
    //将本地资源上传至云存储空间
    wx.cloud.uploadFile({
      cloudPath: new Date().getTime() + 'photo.png',
      filePath: res.tempFiles[0].tempFilePath, // 文件路径
    }).then(res => {
      // get resource ID
      console.log("云存储的头像路径",res.fileID)
      that.setData({
        imgurl:res.fileID
      })
      console.log("内部的that",that)
      console.log("云存储的头像路径imgurl",that.data.imgurl)
    }).catch(error => {
      // handle error
    })
  }
})
},
//存储并登录
save(){

  //没注册，直接保存

  if(this.data.person==0){
    console.log("保存")
    let openid=wx.getStorageSync("openid")
    db.collection("userlist").add({
      data:{
        openid:openid,
        photo:this.data.imgurl,
        name:this.data.name,
        tel:this.data.tel,
        address:this.data.address,
      }
    }).then(res=>{
      wx.showToast({
        title: '信息已经保存成功',
      })
    })
  }else{
    //如果已经存在用户信息，则更新
    console.log("保存")
    let openid=wx.getStorageSync("openid")
    db.collection("userlist").where({
      openid:openid})
      .update({
      data:{
        openid:openid,
        photo:this.data.imgurl,
        name:this.data.name,
        tel:this.data.tel,
        address:this.data.address,
      }
    }).then(res=>{
      wx.showToast({
        title: '更新成功',
      })
    })
  }



},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.cloud.callFunction({
        name:"loginopenid"
      }).then(res=>{
        console.log("获取到的当前用户openid",res.result.openid)
        wx.setStorageSync('openid', res.result.openid)
        //在用户表中查询当前的openid是否有对应的头像，有就显示
        db.collection("userlist").where({
          openid:res.result.openid
        }).get().then(res=>{
          console.log("获取的用户信息",res.data)
          console.log("用户是否存在",res.data.length)
          this.setData({
            person:res.data.length,
            imgurl:res.data[0].photo
          })
          console.log("获取的头像",this.data.imgurl)
        })
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})