import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import pic1 from './pics/pic1.jpeg'
import pic2 from './pics/pic2.jpg'
import pic3 from './pics/pic3.jpg'
import pic4 from './pics/pic4.jpg'
import pic5 from './pics/pic5.jpg'
import pic6 from './pics/pic6.jpg'
import pic7 from './pics/pic7.jpg'
import pic8 from './pics/pic8.jpg'
import pic9 from './pics/pic9.jpeg'
import pic10 from './pics/pic10.jpg'
import pic11 from './pics/pic11.jpeg'
import pic12 from './pics/pic12.jpeg'


class Pics extends Component {
	render(){
	const imageArray=[pic1 , pic2 , pic3 ,pic4 , pic5 , pic6 ,pic7,pic8 ,pic9, pic10,pic11, pic12];
	let item = Math.floor(Math.random() * imageArray.length);
	let imageMapper = imageArray.map((image)=>{
		return <img src={image} width = "35%" height = "25%"/>
 	})
  return (
    <div className="App">
    	{imageMapper[item]} 
    </div>
  );
}
}

export default Pics;
