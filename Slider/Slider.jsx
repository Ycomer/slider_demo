import React from 'react';
require('./Slider.scss');


import Sliderarrows from './Sliderarrows/Sliderarrows';
import SLiderdots from './Sliderdots/Sliderdots';
import Slideritem from './Slideritem/Slideritem';

export default class Slider extends React.Compoment{
	constructor(props){
		return(props);
		this.state = {
			nowLocal:0,
		};
	}
	//向前多少
	turn(n) {

        console.log(); //它传入一个 参数 n ，决定向前或者向后移动多少个轮播项，向前和向后分别对于 － 和 ＋。

        var _n = this.state.nowLocal + n; //定义一个变量获取当前轮播页

        if(_n < 0) {

          _n = _n + this.props.items.length; //如果_n<0 向后轮播直到所有页面轮播完成
        }

        if(_n >= this.props.items.length) { //如果_n>items的长度

          _n = _n - this.props.items.length; //让当前轮播页变为第一页（长度相减为零）
        }

        this.setState({nowLocal: _n}); //改变最后状态未当前页面
         }
    //自动轮播
    goPlay() { //建立自动轮播函数

        if(this.props.autoplay) { //如果当前是自动轮播true
        this.autoPlayFlag = setInterval(() => { //执行setInterval来调用this.turn(1),向前移动轮播项
        this.turn(1);}, this.props.delay * 1000); // 根据配置的delay来决定多久移一次
        }
        } 
            Slider.autoPlayFlag = null; //当鼠标悬停是则停止轮播
            componentDidMount(){ this.goPlay();} //调用这个函数
            pausePLay(){ clearInterval(this.autoPlayFlag);} //当鼠标悬停的时候也就是轮播图的悬停，没毛病。 
    //停止轮播
     // 暂停自动轮播
    pausePlay() {
       clearInterval(this.autoPlayFlag);}

    componentDidMount() {
    this.goPlay();}

    render() {
        let count = this.props.items.length;

        let itemNodes = this.props.items.map((item, idx) => {
        return <SliderItem item={item} count={count} key={'item' + idx} />;
    });

        let arrowsNode = <SliderArrows turn={this.turn.bind(this)}/>;

        let dotsNode = <SliderDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal} />;

    return (
      <div
        className="slider"
        onMouseOver={this.props.pause?this.pausePlay.bind(this):null} onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
          <ul style={{
              left: -100 * this.state.nowLocal + "%",
              transitionDuration: this.props.speed + "s",
              width: this.props.items.length * 100 + "%"
            }}>
              {itemNodes}
          </ul>
          {this.props.arrows?arrowsNode:null}
          {this.props.dots?dotsNode:null}
        </div>
      );
  }
}

Slider.defaultProps = {
  speed: 1,
  delay: 2,
  pause: true,
  autoplay: true,
  dots: true,
  arrows: true,
  items: [],
};
Slider.autoPlayFlag = null;


}

