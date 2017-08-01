const app = getApp()

function getProducts (resolve) {
  app.request({
    url: `${app.globalData.API_URL}/product/phoneHotPro.do`,
    success: resolve,
    fail: function(){}
  })
}


function getProduct (id, resolve) {
  app.request({
    url: `${app.globalData.API_URL}/product/phoneSelectProAndOneAssess.do?proId=${id}`,
    success: resolve,
    fail: function(){}
  })
}

function getSlides (resolve) {
  app.request({
    url: `${app.globalData.API_URL}/homePage/phoneHomePage.do`,
    success: resolve,
    fail: function(){}
  })
}

function getCategories (data, resolve, reject) {
  app.request({
    url: `${app.globalData.API_URL}/product/phoneProAll.do?clsId=${data}`,
    success: resolve,
    fail: reject
  })
}


module.exports = {
  getProducts (resolve) {
    return getProducts(resolve)
  },

  getProduct (id, resolve) {
    return getProduct(id, resolve)
  },

  getSlides (resolve) {
    return getSlides(resolve)
  },

  getCategories (data, resolve, reject) {
    return getCategories(data, resolve, reject)
  }
}
