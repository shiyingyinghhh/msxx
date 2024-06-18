Page({
  data: {
    courseList: [
      // 课程列表数据
      { image: '../../assets/pra/p.png', title: 'Python基础教程', url:  '../../pages/prc-1/prc-1', description: 'Python 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。' },
      { image: '../../assets/pra/css.png',title: 'CSS3基础教程', url: '../../pages/prc-2/prc-2', description: 'CSS 是一种用来为结构化文档添加样式的计算机语言' },
      { image: '../../assets/pra/d.png', title: 'Django 基础入门', url: '../../pages/', description: '面向已经有 Python 基础同时想要学习使用 Django 框架进行 Web 开发的同学' },
      { image: '../../assets/pra/j.png', title: 'JavaScript基础入门教程', url: '../../pages/', description: '面向完全没有经验的新手，但推荐先学习 HTML 基础课和 CSS 基础课。' },
      { image: '../../assets/pra/L.png', title: 'Linux基本入门教程', url: '../../pages', description: '本课程为 Linux 的基本使用入门，面向没有经验的新手。' },
      
      { image: '../../assets/pra/s.png', title: '蓝桥杯直通国赛班(Java 组)', url: '../../pages/', description: '面向已经熟悉 Spring 和 Spring MVC 开发的同学。' },
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