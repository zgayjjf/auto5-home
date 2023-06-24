import { memo, SVGProps } from 'react';

const FrameIcon16 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.28125 14.0938V7.90625L14.0938 11L9.28125 14.0938Z'
      fill='white'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11 19.5938C15.7462 19.5938 19.5938 15.7462 19.5938 11C19.5938 6.2538 15.7462 2.40625 11 2.40625C6.2538 2.40625 2.40625 6.2538 2.40625 11C2.40625 15.7462 6.2538 19.5938 11 19.5938Z'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(FrameIcon16);
export { Memo as FrameIcon16 };
