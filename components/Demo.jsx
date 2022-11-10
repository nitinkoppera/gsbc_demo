import * as React from 'react';
import { useIntersection } from 'react-use';

const Demo = () => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });

  return (
    <div className='lol' ref={intersectionRef}>
      {intersection && intersection.intersectionRatio < 1
        ? 'Obscured'
        : 'Fully in view'}
        {console.log(intersectionRef)}
    </div>
  );
};
export default Demo;