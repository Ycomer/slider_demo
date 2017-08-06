import  React from 'react';
export default class SliderDots extends React.Component{
	constructor(props) {
		return(props);
	}


	handleDotClick(i) { //处理dot的点击函数
		var option = i - this.props.nowLocal; //定义当前的dot位置选项
		this.props.turn(option); //获取当前位置。this的作用凸显
	}

	render(){
		let dotNodes = [];
		let { count, nowLocal } = this.props; //轮播项目总数count
		for (let i = 0; i < count; i++) {
			dotNodes(i) = ( //dot 绑带函数并传入i值
				<span // span行内的输出内容。
	        key{'dot' + i}
          className= {
      	    "slider-dot" + (i === this.props.nowLocal?" slider-dot-selected":"")}//当i就是当前轮播项就多加一个slider-dot-selected
	      	onClick = {this.handleDotClick.bind(this,i)}//点击事件
	      </span>
	    )};
		return(
			<div className="slider-dot-warp">
				{dotNodes}
			</div>
		);
	}
}