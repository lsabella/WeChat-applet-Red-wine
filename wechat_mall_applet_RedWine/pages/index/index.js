const product = require('../../utils/product.js')
var app = getApp()

Page({
  data: {
    items: [],
    slides: [],
    navs: [{icon: "../../images/icon-new-list1.png", name: "红葡萄酒", typeId: 1},
           {icon: "../../images/icon-new-list2.png", name: "白葡萄酒", typeId: 2},
           {icon: "../../images/icon-new-list3.png", name: "包装盒", typeId: 3}],
    popularity_products: [],
    new_products: [],
    hot_products: [],
    promotions: []
  },

  onShareAppMessage: function () {
    return {
      title: "纵达酒业",
      desc: "商城首页",
      path: `pages/index/index`
    }
  },

  bindShowProduct: function (e) {
    wx.navigateTo({
      url: `../show_product/show_product?id=${e.currentTarget.dataset.id}`
    })
  },


  catchTapCategory: function (e) {
    wx.navigateTo({
      url: `../category/category?type=${e.currentTarget.dataset.type}&typeId=${e.currentTarget.dataset.typeid}`
    })
  },

  onLoad: function() {
    var that = this
    product.getProducts(function(result) {
      console.log(result.data);
      //var data = getApp().store.sync(result.data);
      //console.log(data);
      that.setData({items: result.data})
      wx.setStorage({
        key: `hot_product`,
        data: result.data
      })
    })

    product.getSlides(function(result) {
     // var data = app.store.sync(result.data)
      that.setData({'slides': result.data})
      wx.setStorage({
        key:"indexSlides",
        data:result.data
      })
    })

    // product.getProducts(function(result) {
    //   var data = app.store.sync(result.data)
    //   that.setData({
    //     items: data,
    //     popularity_products: data.filter(product => (product.flag === '最热' && product['promotion-url'])),
    //     new_products:        data.filter(product => (product.flag === '新品' && product['promotion-url'])),
    //     hot_products:        data.filter(product => (product.flag === '火爆' && product['promotion-url'])),
    //   })
    //   wx.setStorageSync('products', data)
    // })

    // wx.getNetworkType({
    //   success: function(res) {
    //     var networkType = res.networkType // 返回网络类型2g，3g，4g，wifi
    //     if (networkType) {
    //     } else {
    //        cache = wx.getStorageSync('products')
    //        if (cache) {
    //          that.setData({'items': cache})
    //        } else {
    //          that.setData({'items': []})
    //        }
    //     }
    //   }
    // })
  }
})
