import { memo, SVGProps } from 'react';

const FrameIcon12 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.5 11.5C20.5 11.5 15.73 16.58 14.5 20.5L11.5 17.5M28.5 16C28.5 19.3152 27.183 22.4946 24.8388 24.8388C22.4946 27.183 19.3152 28.5 16 28.5C12.6848 28.5 9.50537 27.183 7.16117 24.8388C4.81696 22.4946 3.5 19.3152 3.5 16C3.5 12.6848 4.81696 9.50537 7.16117 7.16117C9.50537 4.81696 12.6848 3.5 16 3.5C19.3152 3.5 22.4946 4.81696 24.8388 7.16117C27.183 9.50537 28.5 12.6848 28.5 16V16Z'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(FrameIcon12);
export { Memo as FrameIcon12 };
