import React from 'react';
import Gallery from 'react-photo-gallery';
 
export default class Sample extends React.Component {
    openLightbox(){
      console.log("openLightbox");
    }

    render() {
    return (
        <Gallery photos={PHOTO_SET} onClickPhoto={this.openLightbox} cols = {4}/>
    );
    }
}
const PHOTO_SET = [
  {
    src: 'http://www.wwe.com/f/styles/wwe_large/public/all/2017/03/Big_Show_bio--5c987005c8e0594e2f46c55d5fc8f6de.jpg',
    alt: 'image 1',
    width: 600,
    height: 600
  },
  {
    src: 'https://i5.walmartimages.ca/images/Enlarge/580/6_r/875806_R.jpg',
    alt: 'image 2',
    width: 600,
    height: 600
  },
  {
    src: 'http://images.performgroup.com/di/library/omnisport/e/64/cristiano-ronaldo-cropped_gdgqp2v8kc2g1ri0gq29t1zsn.jpg?t=1771024164&w=620&h=430',
    alt: 'image 3',
    width: 600,
    height: 600
  },
  {
    src: 'http://images.performgroup.com/di/library/GOAL_INTERNATIONAL/c2/97/hd-lionel-messi-barcelona_5toanmhsh09f11z1b8ucasj4p.jpg?t=1838656488&w=620&h=430',
    alt: 'image 4',
    width: 600,
    height: 600
  },
  {
    src: 'https://i.ytimg.com/vi/Y7jWdzh68DM/maxresdefault.jpg',
    alt: 'image 5',
    width: 600,
    height: 600
  }  
];
