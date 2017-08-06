import React from 'react';

export default class SliderItem extends React.Component{ //输出一个slider类继承之React.Component
	constructor(props){ //通过class类里面的constructor 构造参数:props
      super(props); //
	}
}

render(){
	let {count,item} = this.props;
	let width = 100/count +'%';
	retrun (
		<li className="slider-item" style={{width:width}}>
		<img src={item.src} alt={item.alt}/>
		</li>
		);
}
// es6 继承
// es5 继承
//
//
//

//function React() {}

//class React {}

//const s = new React();