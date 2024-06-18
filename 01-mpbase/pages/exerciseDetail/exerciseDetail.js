// 假设已经有一个函数来获取题目数据
const fetchQuestions = (type) => {
  // 这里应该是从服务器或本地文件获取题目数据的逻辑
  
  const questionsData = {
    python: [/* ...题目列表... */],
    java: [/* ...题目列表... */],
    c: [/* ...题目列表... */]
  };
  return questionsData[type] || [];
};

Page({
  onLoad: function(options) {
    const questions = fetchQuestions(options.type);
    this.setData({ questions });
  }
});