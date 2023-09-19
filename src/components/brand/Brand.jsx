import React from 'react';
import './brand.css';
import { spacex, nasa, boeing, astroscale } from './import';

function Brand() {
  return (
    <article className="container-center with_padding">
    <div className="brand section_padding">
      <div>
        <img src={spacex} alt='spacex_logo' />
      </div>
      <div>
        <img src={nasa} alt='nasa_logo' />
      </div>
      <div>
        <img src={boeing} alt='boeing_logo' />
      </div>
      <div>
        <img src={astroscale} alt='astroscale_logo' />
      </div>
    </div>
    </article>
  )
}

export default Brand
