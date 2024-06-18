// pages/like/like.js
Page({
  data: {
    isLoggedIn: false,
    favorites: [],
  },

  onLoad: function() {
    this.checkLoginStatus();
  },

  checkLoginStatus: function() {
    // 检查登录状态的逻辑
  },

  getFavorites: function() {
    const that = this;
    wx.cloud.database().collection('favorites').where({
      userId: '当前用户ID', // 需要根据实际获取用户ID
    }).get({
      success(res) {
        that.setData({
          favorites: res.data,
        });
      },
      fail(err) {
        console.error('获取收藏失败', err);
      }
    });
  },

  goToTutorial: function(e) {
    // 跳转到教程页面的逻辑
  },
});