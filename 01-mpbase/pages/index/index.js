// index.js
Page({
  //跳转课程页面
  navigateToCourse: function() {
    wx.switchTab({
      url: '/pages/course/course'
    })
  },
  //跳转教程页面
  navigateToP: function() {
    wx.switchTab({
      url: '/pages/practice/practice'
    })
  },
  //跳转练习页面
  navigateToPractice: function() {
    wx.switchTab({
      url: '/pages/exercise/exercise'
    })
  },
  //跳转练习页面
  navigateToList:function() {
    wx.navigateTo({
      url: '/pages/exercise/exercise'
    })
  },


data: {
  courseList: [
    // 课程列表数据
    { image: '../../assets/swiper/1.png',title: '15届蓝桥杯14天省赛冲刺营2期', url: '../../pages/list/list', description: '聚焦知识点梳理，三种语言讲解省赛必备知识。' },
    { image: '../../assets/swiper/2.png', title: '蓝桥杯省赛无忧班(Java 组)第4期', url: '../../pages/list2/list2', description: '本课程聚焦于算法竞赛必备知识' },
    { image: '../../assets/swiper/3.png', title: '蓝桥杯省赛无忧班(Python 组)', url: '../../pages/list3/list3', description: '本课程聚焦于算法竞赛必备知识。' },
    { image: '../../assets/swiper/4.png', title: '蓝桥杯省赛无忧班(C&C++组)第4期', url: '../../pages/list4/list4', description: '本课程聚焦于算法竞赛必备知识。' },
    { image: '../../assets/swiper/6.png', title: '蓝桥杯直通国赛班(C&C++组)', url: '../../pages/list5/list5', description: '本课程专攻蓝桥杯重难点题型。' },
    { image: '../../assets/swiper/5.png', title: '蓝桥杯直通国赛班(Java 组)', url: '../../pages/list6/list6', description: '本课程专攻蓝桥杯重难点题型。' },
  ]
},
itemTap: function(event) {
  const url = event.currentTarget.dataset.url;
  if (url) {
    wx.navigateTo({
      url: url
    });
  }
}
})
