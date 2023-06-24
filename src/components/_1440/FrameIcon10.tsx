import { memo, SVGProps } from 'react';

const FrameIcon10 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16 7.5C16 7.5 10 3.5 3.5 3.5V24.5C10 24.5 16 28.5 16 28.5M16 7.5C16 7.5 22 3.5 28.5 3.5V24.5C22 24.5 16 28.5 16 28.5M16 7.5V28.5'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(FrameIcon10);
export { Memo as FrameIcon10 };
