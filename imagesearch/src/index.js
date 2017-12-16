import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';



function Imagegallery(props) {
  return(
    <div className ="imagesearch">
      <h1>Image Gallery</h1>
      <ul>
        {props.images.map((images) => <li key={images.id}><img src={images.url} /> {images.title}
         </li>
       )}
      </ul>
    </div>        
  )
}

const images = [
  {id: 1, title: 'Aortic Dissection', url: 'https://wikem.org/w/images/AoDissect_DeBakey1.png'},
  {id: 2, title: 'Another Aortic Dissection', url:'https://wikem.org/w/images/AoDissect_DeBakey2.png'}
];

ReactDOM.render(
<Imagegallery images={images} />, document.getElementById('root')
);
registerServiceWorker();