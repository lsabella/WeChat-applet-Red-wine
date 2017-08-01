var app = getApp()
// const profile = require('../../utils/profile.js')

Page({
  data: {
      navbar: ['待付款', '待发货', '待收货', '已完成'],
      currentNavbar: '0'
     // swipers: [],
     // list: []
  },
  onShow: function() {
  },

  onLoad: function(params) {
    this.setData({
      currentNavbar: params.id
    })
  },

  /**
   * 切换 navbar
   */
  swichNav (e) {
    this.setData({
      currentNavbar: e.currentTarget.dataset.idx
      
    })
     console.log(e.currentTarget.dataset.idx)
    // if (e.currentTarget.dataset.idx == 1 && this.data.latest_list.length == 0) {
    //   this.pullUpLoadLatest()
    // }
  },


})