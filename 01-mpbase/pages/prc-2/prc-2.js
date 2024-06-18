Page({
  data: {
    readCount: 19565728
  },
  startReading: function() {
    // 这里可以跳转到具体的教程页面
    wx.navigateTo({
      url: '/page/specific-tutorial'
    });
  }
});