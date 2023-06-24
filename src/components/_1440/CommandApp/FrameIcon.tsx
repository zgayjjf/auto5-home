import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.25 8.75L8 11.25M8 11.25L5.75 8.75M8 11.25V4.75M8 14.25C6.3424 14.25 4.75268 13.5915 3.58058 12.4194C2.40848 11.2473 1.75 9.6576 1.75 8C1.75 6.3424 2.40848 4.75268 3.58058 3.58058C4.75268 2.40848 6.3424 1.75 8 1.75C9.6576 1.75 11.2473 2.40848 12.4194 3.58058C13.5915 4.75268 14.25 6.3424 14.25 8C14.25 9.6576 13.5915 11.2473 12.4194 12.4194C11.2473 13.5915 9.6576 14.25 8 14.25V14.25Z'
      stroke='white'
      strokeOpacity={0.6}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(FrameIcon);
export { Memo as FrameIcon };
