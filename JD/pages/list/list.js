// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   arr :[
     {img:'https://img10.360buyimg.com/n2/s240x240_jfs/t1/82688/30/14298/135272/5dbba2ddE595e0e0a/a5b58a45629ccad6.jpg!q70.jpg',tu:'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png',title:'OPPO照亮你的美',man:'￥1999.00',hao:'2万+条评论',dian:'OPPO旗舰店'},
     {img:'https://img14.360buyimg.com/n2/s240x240_jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg!q70.jpg',tu:'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png', title:'OPPO照亮你的美',man:'￥1999.00',hao:'2万+条评论',dian:'OPPO旗舰店'},
     {img:'https://img10.360buyimg.com/n2/s240x240_jfs/t1/93667/17/1463/293247/5dbee215Ea07a0979/6ca60bc8cf3db20c.jpg!q70.jpg',tu:'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png', title:'OPPO照亮你的美',man:'￥1999.00',hao:'2万+条评论',dian:'OPPO旗舰店'},
     {img:'https://img10.360buyimg.com/n2/s240x240_jfs/t1/103465/5/1404/294026/5dbee0c6Eddbf3e84/8443d6fa65fc50e8.jpg!q70.jpg',tu:'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png', title:'OPPO照亮你的美',man:'￥1999.00',hao:'2万+条评论',dian:'OPPO旗舰店'},
     {img:'https://img10.360buyimg.com/n2/s240x240_jfs/t1/82688/30/14298/135272/5dbba2ddE595e0e0a/a5b58a45629ccad6.jpg!q70.jpg',tu:'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png', title:'OPPO照亮你的美',man:'￥1999.00',hao:'2万+条评论',dian:'OPPO旗舰店'},
     {img:'https://img14.360buyimg.com/n2/s240x240_jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg!q70.jpg',tu:'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png', title:'OPPO照亮你的美',man:'￥1999.00',hao:'2万+条评论',dian:'OPPO旗舰店'},
     {img:'https://img14.360buyimg.com/n2/s240x240_jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg!q70.jpg',tu:'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png', title:'OPPO照亮你的美',man:'￥1999.00',hao:'2万+条评论',dian:'OPPO旗舰店'},
     {img:'https://img14.360buyimg.com/n2/s240x240_jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg!q70.jpg',tu:'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png', title:'OPPO照亮你的美',man:'￥1999.00',hao:'2万+条评论',dian:'OPPO旗舰店'},
     {img:'https://img14.360buyimg.com/n2/s240x240_jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg!q70.jpg',tu:'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png', title:'OPPO照亮你的美',man:'￥1999.00',hao:'2万+条评论',dian:'OPPO旗舰店'},
     {img:'https://img14.360buyimg.com/n2/s240x240_jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg!q70.jpg',tu:'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png', title:'OPPO照亮你的美',man:'￥1999.00',hao:'2万+条评论',dian:'OPPO旗舰店'},
     {img:'https://img14.360buyimg.com/n2/s240x240_jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg!q70.jpg',tu:'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png', title:'OPPO照亮你的美',man:'￥1999.00',hao:'2万+条评论',dian:'OPPO旗舰店'},
     {img:'https://img10.360buyimg.com/n2/s240x240_jfs/t1/93667/17/1463/293247/5dbee215Ea07a0979/6ca60bc8cf3db20c.jpg!q70.jpg',tu:'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png', title:'OPPO照亮你的美',man:'￥1999.00',hao:'2万+条评论',dian:'OPPO旗舰店'},
     {img:'https://img10.360buyimg.com/n2/s240x240_jfs/t1/103465/5/1404/294026/5dbee0c6Eddbf3e84/8443d6fa65fc50e8.jpg!q70.jpg',tu:'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png', title:'OPPO照亮你的美',man:'￥1999.00',hao:'2万+条评论',dian:'OPPO旗舰店'}
    
   ],
   topNum :0,
   show:'hide'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {

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
  }

  
})