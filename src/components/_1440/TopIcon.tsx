import { memo, SVGProps } from 'react';

const TopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6 15.85V16.33C6 16.8392 6.20229 17.3276 6.56235 17.6876C6.92242 18.0477 7.41078 18.25 7.92 18.25H16.08C16.5892 18.25 17.0776 18.0477 17.4376 17.6876C17.7977 17.3276 18 16.8392 18 16.33V15.85M12 14.41V6.25M12 6.25L15.12 9.61M12 6.25L8.88 9.61'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(TopIcon);
export { Memo as TopIcon };
