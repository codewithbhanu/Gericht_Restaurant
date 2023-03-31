import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src= { images.chef } alt="chef image" />
    </div>

    <div className="app__wrapper_info">
      < SubHeading title= "Chef's Word" />
      <h1 className='headtext__cormorant'> What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_qoute">
          <img src= { images.quote } alt="Qoute" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing varius placerat ut .  </p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Phasellus varius placerat ex ut fermentum. Vestibulum et consectetur quam, id pharetra ex. Etiam imperdiet risus mauris, id lacinia purus blandit nec. </p>
      </div>

      <div className="app__chef-sign">
        <p> Kevin Luo </p>
        <p className="p__opensans">Chef & Founder</p>
        <img src= { images.sign } alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
