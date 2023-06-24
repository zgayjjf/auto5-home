import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 47 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M30.1094 17.3906C30.1094 17.3906 23.1034 24.8519 21.2969 30.6094L16.8906 26.2031M41.8594 24C41.8594 28.8692 39.9251 33.539 36.482 36.982C33.039 40.4251 28.3692 42.3594 23.5 42.3594C18.6308 42.3594 13.961 40.4251 10.518 36.982C7.07491 33.539 5.14063 28.8692 5.14062 24C5.14063 19.1308 7.07491 14.461 10.518 11.018C13.961 7.57491 18.6308 5.64063 23.5 5.64062C28.3692 5.64063 33.039 7.57491 36.482 11.018C39.9251 14.461 41.8594 19.1308 41.8594 24V24Z'
      stroke='#59D499'
      strokeWidth={2.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(FrameIcon);
export { Memo as FrameIcon };
