import { memo, SVGProps } from 'react';

const FrameIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.42188 4.45312L5.5 7.54688L2.57812 4.45312'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(FrameIcon4);
export { Memo as FrameIcon4 };
