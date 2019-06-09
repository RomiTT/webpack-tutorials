import _ from 'lodash';
import './style.css';
import icon from './logo.svg';
import data from './data.xml';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = icon
  element.appendChild(myIcon)

  console.log(data)

  return element;
}

document.body.appendChild(component());
