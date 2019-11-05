// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[
      {img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/82688/30/14298/135272/5dbba2ddE595e0e0a/a5b58a45629ccad6.jpg!q80.dpg.webp'},
      {img:'https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/50577/2/11642/108880/5d8ae398E9023c162/2d075b5b6215c1d7.jpg!q70.dpg.webp'},
      {img:'https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/51073/27/11634/112991/5d8ae399E9663e368/1f74614ae9a60a41.jpg!q70.dpg.webp'},
      {img:'https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/76348/21/11264/64535/5d8ae3a2E3b327fbb/af9f472a2831507c.jpg!q70.dpg.webp'}
    ],

    // showNow:['now','',''],
    current:0,
    topNum :0,
    show:'hide'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {

  },
  change(evt){
    let current = evt.detail.current;
    // console.log(current);
    this.swiperFun(current);
  },

  // showNav(evt){
  //   let current = evt.target.dataset.index;

  //   this.swiperFun(current);
  // },
  swiperFun(current){
    // let showNow = this.data.showNow.map(val => '');
    // showNow[current] = 'now';
    this.setData({
      // showNow,
      current
    })
  },

  goHome(evt){
    this.setData({
      topNum:0
    })
  },
  scroll(evt){
    let scrollTop = evt.detail.scrollTop;
    let show = "hide"

    if(scrollTop >= 200){
      show = 'show';
    }
    this.setData({show});
  },

  onShareAppMessage: function () {
    return {
      title :'好好康的手机鸭！！！！！！！',
      // imageUrl: 'https://wx.1314000.cn/banner1.png',

      path:'/pages/share/share'
    }
  }


 
})