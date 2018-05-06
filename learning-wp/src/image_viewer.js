import big from '../assets/big.png';
import small from '../assets/small.png';
import '../styles/image_viewer.css';

const image = document.createElement('img');
// image.src = 'https://loremflickr.com/320/240';

image.src = small;

document.body.appendChild(image);

const imageBig = document.createElement('img');
imageBig.src = big;

document.body.appendChild(imageBig);
