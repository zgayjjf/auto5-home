import { memo, SVGProps } from 'react';

const FrameIcon20 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.5 2.40625V5.5M5.5 8.59375V5.5M5.5 5.5H2.40625M5.5 5.5H8.59375M16.5 16.5L19.25 13.75M16.5 16.5L13.75 19.25M16.5 16.5L19.25 19.25M16.5 16.5L13.75 13.75M13.4062 5.5H19.5938M2.40625 16.5H8.59375'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
    <path
      d='M5.5 14.4375C6.06954 14.4375 6.53125 13.9758 6.53125 13.4062C6.53125 12.8367 6.06954 12.375 5.5 12.375C4.93046 12.375 4.46875 12.8367 4.46875 13.4062C4.46875 13.9758 4.93046 14.4375 5.5 14.4375Z'
      fill='white'
    />
    <path
      d='M5.5 20.625C6.06954 20.625 6.53125 20.1633 6.53125 19.5938C6.53125 19.0242 6.06954 18.5625 5.5 18.5625C4.93046 18.5625 4.46875 19.0242 4.46875 19.5938C4.46875 20.1633 4.93046 20.625 5.5 20.625Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(FrameIcon20);
export { Memo as FrameIcon20 };
