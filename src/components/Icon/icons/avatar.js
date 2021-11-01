import React from 'react';

import Icon from '../Icon';

export default (props) => (
    <Icon viewBox='0 0 46 46' {...props}>
        <path
            fill='#ededed'
            d='M23,0A23,23,0,0,0,10.05,42.0078C10.559,34.7339,16.1555,29,23,29s12.441,5.7339,12.95,13.0078A23,23,0,0,0,23,0Zm0,27a8,8,0,1,1,8-8A8,8,0,0,1,23,27Z'
        />
        <path
            fill='#ccc'
            d='M23,29c-6.8445,0-12.441,5.7339-12.95,13.0078a22.9991,22.9991,0,0,0,25.9,0C35.441,34.7339,29.8445,29,23,29Z'
        />
        <circle fill='#ccc' cx='23' cy='19' r='8' />
    </Icon>
);
