import { memo, SVGProps } from 'react';

const FrameIcon11 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.25 4.75L13.75 8M13.75 8L10.25 11.25M13.75 8H3.25'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(FrameIcon11);
export { Memo as FrameIcon11 };
