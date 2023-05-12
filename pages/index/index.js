// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    phone: '',
    code: '',
    agree: false,
    disableGetCode: false,
    getCodeText: '获取验证码',
    canNext: true
  },

  // 手机号输入框的值改变时触发
  onInputPhone: function (event) {
    this.setData({
      phone: event.detail.value
    })
  },

  // 获取验证码按钮点击时触发
  onGetCode: function () {
    // TODO: 发送验证码请求
    // 模拟请求发送成功
    wx.showToast({
      title: '验证码已发送',
      icon: 'success'
    })
    // 按钮变为禁用状态
    this.setData({
      disableGetCode: true,
      getCodeText: '30秒后重试'
    })
    // 30秒后解除禁用状态
    setTimeout(() => {
      this.setData({
        disableGetCode: false,
        getCodeText: '获取验证码'
      })
    }, 30000)
  },

  // 验证码输入框的值改变时触发
  onInputCode: function (event) {
    this.setData({
      code: event.detail.value
    })
  },

  // 用户条款勾选框改变时触发
  onAgree: function (event) {
    this.setData({
      agree: event.detail.value.length > 0
    })
  },

  // 下一步按钮点击时触发
  onNext: function () {
    if (!this.data.agree) {
      wx.showToast({
        title: '请勾选同意用户条款',
        icon: 'none'
      })
      return
    }
    if (this.data.code !== '1234') { // 模拟验证码是否正确
      wx.showToast({
        title: '验证码不正确',
        icon: 'none'
      })
      return
    }
    wx.showToast({
      title: '进入下一页',
      icon: 'success'
    })
    // TODO: 跳转到下一页
    wx.navigateTo({
      url: '/pages/next/next',
    })
  }
})
