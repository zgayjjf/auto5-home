import { memo, SVGProps } from 'react';

const FrameIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.5 3.5L5.5 16.5H13.5V28.5L26.5 15.5H18.5V3.5Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(FrameIcon6);
export { Memo as FrameIcon6 };
