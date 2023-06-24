import { memo, SVGProps } from 'react';

const HighlightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.1508 9.17885L24.3248 14.9118M24.3248 14.9118L18.1508 20.6448M24.3248 14.9118H5.8028'
      stroke='white'
      strokeWidth={1.764}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(HighlightIcon);
export { Memo as HighlightIcon };
