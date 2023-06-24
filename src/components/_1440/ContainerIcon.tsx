import { memo, SVGProps } from 'react';

const ContainerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.75 4.75L13.25 8M13.25 8L9.75 11.25M13.25 8H2.75'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ContainerIcon);
export { Memo as ContainerIcon };
