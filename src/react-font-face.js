import React from 'react';
import {Helmet} from 'react-helmet';
import bangersRegular from './Bangers-Regular.ttf'


const ReactFontFace = () => (
  <div>
    <Helmet>
        <style type='text/css' >{`
            @font-face {
            font-family: 'Bangers';
            font-style: normal;
            font-weight: 400;
            src: local('Bangers Regular'), local('Bangers-Regular'), url(${bangersRegular}) format('truetype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
            }
        `}
        </style>
    </Helmet>
  </div>
);

export default ReactFontFace;