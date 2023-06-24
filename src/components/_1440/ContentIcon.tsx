import { memo, SVGProps } from 'react';

const ContentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.25 3.75H12.25M12.25 3.75V9.75M12.25 3.75L3.75 12.25'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ContentIcon);
export { Memo as ContentIcon };
