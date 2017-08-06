import React from 'react';

export default class Sliderarrows extends React.Component{
	constractor(props){
		return(props);
	}
	handleArrowClick(option){
		this.props.turn(option);
	}

	render() {
		return(
      <div  className="slider-arrows-wrap">
      <span
      	className="slider-arrow slider-arrow-left"
        onClick="{this.handleArrowClick.bind(this,-1)}">
        &lt;//小于向左
      </span>
      <span className="slider-arrow slider-arrow-right"
        onClick="{this.handleArrowClick.bind(this,1)}">&gt; //大于向右
      </span>
      </div>
		);
	}
}