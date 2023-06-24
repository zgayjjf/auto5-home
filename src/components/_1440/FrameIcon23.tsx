import { memo, SVGProps } from 'react';

const FrameIcon23 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.75 5.25L13.25 8.5M13.25 8.5L9.75 11.75M13.25 8.5H2.75'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(FrameIcon23);
export { Memo as FrameIcon23 };
