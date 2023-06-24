import { memo, SVGProps } from 'react';

const RowIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_103_144)'>
      <rect width={16} height={16} fill='#1A1822' />
      <path
        d='M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z'
        fill='#A485FF'
      />
      <path
        d='M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z'
        stroke='#A485FF'
      />
    </g>
    <defs>
      <clipPath id='clip0_103_144'>
        <rect width={16} height={16} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(RowIcon2);
export { Memo as RowIcon2 };
