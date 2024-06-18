// cloud/functions/sclist/index.js
const cloud = require('wx-server-sdk')

cloud.init()

exports.main = async (event, context) => {
  const { action, tutorialId, userId } = event;
  const db = cloud.database();
  const favorites = db.collection('favorites');

  try {
    switch (action) {
      case 'add':
        await favorites.add({
          data: {
            userId,
            tutorialId,
            tutorialName: '教程名称', // 需要传入教程名称
            timestamp: db.serverDate(),
          },
        });
        break;
      case 'remove':
        await favorites.doc(tutorialId).remove();
        break;
      default:
        throw new Error('Invalid action');
    }
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
      errMsg: e.message,
    };
  }
}