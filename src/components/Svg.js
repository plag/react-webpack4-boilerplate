import React from 'react';

export default function Svg({ src, className = null }) {
  return (
    <svg viewBox={ src.viewBox } width={ src.width } height={ src.height } className={ className }>
      <use xlinkHref={ `#${ src.id }` }></use>
    </svg>
  );
}
