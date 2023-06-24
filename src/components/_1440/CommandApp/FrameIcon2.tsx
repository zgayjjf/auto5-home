import { memo, SVGProps } from 'react';

const FrameIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.75 3.75H4.75C4.48478 3.75 4.23043 3.85536 4.04289 4.04289C3.85536 4.23043 3.75 4.48478 3.75 4.75V5.75M5.75 3.75V1.75M5.75 3.75H10.25M10.25 3.75H11.25C11.5152 3.75 11.7696 3.85536 11.9571 4.04289C12.1446 4.23043 12.25 4.48478 12.25 4.75V5.75M10.25 3.75V1.75M5.75 14.25V12.25M10.25 14.25V12.25M12.25 5.75H14.25M12.25 5.75V10.25M12.25 10.25V11.25C12.25 11.5152 12.1446 11.7696 11.9571 11.9571C11.7696 12.1446 11.5152 12.25 11.25 12.25H4.75C4.48478 12.25 4.23043 12.1446 4.04289 11.9571C3.85536 11.7696 3.75 11.5152 3.75 11.25V10.25M12.25 10.25H14.25M3.75 10.25H1.75M3.75 10.25V5.75M3.75 5.75H1.75'
      stroke='white'
      strokeOpacity={0.6}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(FrameIcon2);
export { Memo as FrameIcon2 };
