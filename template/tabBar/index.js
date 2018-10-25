//初始化数据
let tabBarData = [
    {
      "pagePath": "/pages/index/index",
      "iconPath": "/static/images/home.png",
      "selectedIconPath": "/static/images/home_selected.png",
      "text": "首页",
      "openType": "reLaunch",
      "selected": true
    },
    {
      "pagePath": "/pages/add/add",
      "iconPath": "/static/images/add.png",
      "selectedIconPath": "/static/images/add.png",
      "openType": "navigate",
      "selected": false,
      "width": 96,
      "height": 96,
      "middle": true 
    },
    {
      "pagePath": "/pages/my/my",
      "iconPath": "/static/images/my.png",
      "selectedIconPath": "/static/images/my_selected.png",
      "text": "我的",
      "openType": "reLaunch",
      "selected": false,
    }
];

let init = (bindName="tabBar", index, target) =>{
  console.log(tabBarData);

  tabBarData.forEach(item=>{
      item.selected = false;
  });

  tabBarData[index]['selected'] = true;

  let that = target;
  let bindData = {};
  bindData[bindName] = tabBarData;
  that.setData({ bindData });
}

module.exports = {
  init
}