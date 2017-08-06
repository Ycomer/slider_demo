import React from 'react';
import { render } from 'react.dom';
import Slider from './Slider/Slider';


const IMAGE_DATA = [
{
	src: require('./images/demo1.png')
	alt: 'image-1',
},
{
	src: require('./images/demo2.png')
	alt: 'image-2',
},
{
	src: require('./images/demo3.png')
	alt: 'image-3',
},
];

render(
     <Slider
     items={IMAGE_DATA}
     speed={1.2}
     delay={2.1}
     pause={true}
     autoplay={true}
     dots={true}
     arrows={true}
     />,
     document.getElementById('root')
	);
