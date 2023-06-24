import { memo, SVGProps } from 'react';

const FrameIcon15 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.5 5.5L3.5 8L6.5 10.5M13.5 5.5L16.5 8L13.5 10.5M3.5 17.5V24.5C3.5 25.5609 3.92143 26.5783 4.67157 27.3284C5.42172 28.0786 6.43913 28.5 7.5 28.5H24.5C25.5609 28.5 26.5783 28.0786 27.3284 27.3284C28.0786 26.5783 28.5 25.5609 28.5 24.5V7.5C28.5 6.43913 28.0786 5.42172 27.3284 4.67157C26.5783 3.92143 25.5609 3.5 24.5 3.5H23.5'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(FrameIcon15);
export { Memo as FrameIcon15 };
