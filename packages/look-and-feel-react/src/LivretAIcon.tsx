import React from 'react';
import Icon from './Icon';

const LivretA: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <Icon 
    viewBox="0 0 32 32"
    role="img"
    aria-hidden="true"
    {...props}
    style={{
      color: 'currentColor',
      width: '1em',
      height: '1em',
      ...props.style,
    }}
  >
    <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z"/>
    <path d="M20.5 11.5h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Zm-1 9h-7v-7h7Z"/>
  </Icon>
);

export default LivretA;
