import { memo, SVGProps } from 'react';

const LinkIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10 5.25L13.5 8.5M13.5 8.5L10 11.75M13.5 8.5H3'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(LinkIcon2);
export { Memo as LinkIcon2 };
