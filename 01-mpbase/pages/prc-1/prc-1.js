
Page({
  data: {
    isFavorited: false,
    tutorialId: 'tutorial123', // 教程的唯一标识
  },

  onLoad: function() {
    // 页面加载时检查是否已收藏
    this.checkFavoriteStatus();
  },

  startReading: function() {
    // 跳转到教程阅读页面的逻辑
  },

  toggleFavorite: function() {
    const isFavorited = this.data.isFavorited;
    const action = isFavorited ? 'remove' : 'add';
    wx.cloud.callFunction({
      name: 'sclist',
      data: {
        action,
        tutorialId: this.data.tutorialId,
        userId: '当前用户ID', // 需要根据实际获取用户ID
      },
      dataEncoding: 'base64',
    }).then(res => {
      if (res.errMsg === 'cloud.callFunction:ok') {
        this.setData({
          isFavorited: !isFavorited,
        });
      }
    }).catch(err => {
      console.error('调用失败', err);
    });
  },

  checkFavoriteStatus: function() {
    // 检查收藏状态的逻辑
  },
});