const product = require('../../utils/product.js')
var app = getApp()

Page({
  data: {
    title: '纵达酒业',
    items: null,
    accountType: '',
    categoryType: null
  },

  onLoad: function(params) {
   // console.log(params);
    var that = this
    this.setData({
      title: '纵达酒业 - ' + params.type,
      categoryType: params.typeId
    })
    product.getCategories(params.typeId, function(result) {
      console.log(result.data);
      //var data = getApp().store.sync(result.data);
      //console.log(data);
      that.setData({items: result.data})
      wx.setStorage({
        key: `cate_${params.typeId}`,
        data: result.data
      })
    }, function(fail) {
      var key = `cate_${params.typeId}`
      var data = wx.getStorage(key)
      wx.setData({items: data})
    })
  },

  onShow() {
    if (app.globalData.currentCustomer) {
      var accountType = app.globalData.currentCustomer.account_type
      this.setData({accountType: accountType})
    }
  },

  onReady() {
    wx.setNavigationBarTitle({ title: this.data.title })
  },

  bindTapProduct: function(e) {
    var that = this

    wx.navigateTo({
      url: `../show_product/show_product?id=${e.currentTarget.dataset.id}&type=${this.data.categoryType}`
    })
  }
})
