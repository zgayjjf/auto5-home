import { memo, SVGProps } from 'react';

const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 109 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_103_72)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7 18.073V20.994L0 13.994L1.46 12.534L7 18.075V18.073ZM9.921 20.994H7L14 27.994L15.46 26.534L9.921 20.994V20.994ZM26.535 15.456L27.996 13.994L13.996 -0.00600052L12.538 1.46L18.077 6.998H14.73L10.864 3.14L9.404 4.6L11.809 7.004H10.129V17.87H20.994V16.19L23.399 18.594L24.859 17.134L20.994 13.268V9.921L26.534 15.456H26.535ZM7.73 6.27L6.265 7.732L7.833 9.298L9.294 7.838L7.73 6.27ZM20.162 18.702L18.702 20.164L20.268 21.732L21.73 20.27L20.162 18.702V18.702ZM4.596 9.404L3.134 10.866L7 14.732V11.809L4.596 9.404ZM16.192 21H13.268L17.134 24.866L18.596 23.404L16.192 21Z'
        fill='#FF6363'
      />
      <path
        d='M106.152 20.978C105.209 20.978 104.472 20.722 103.945 20.208C103.419 19.695 103.156 18.982 103.156 18.078V12.478H101.464V10.383H103.165L103.467 7.583H105.459V10.383H108.057V12.483H105.459V17.776C105.453 18.065 105.56 18.344 105.758 18.555C105.859 18.6631 105.982 18.7482 106.119 18.8043C106.256 18.8604 106.403 18.8862 106.551 18.88H108.057V20.978H106.152V20.978ZM95.98 21.175C94.723 21.175 93.712 20.875 92.947 20.275C92.1868 19.6805 91.6654 18.8327 91.478 17.886H93.978C94.087 18.25 94.33 18.56 94.657 18.753C95.058 18.984 95.517 19.097 95.98 19.079C97.313 19.079 97.983 18.706 97.983 17.985C97.983 17.625 97.773 17.351 97.354 17.162C96.866 16.9542 96.3561 16.8022 95.834 16.709C95.2292 16.5931 94.6308 16.4462 94.041 16.269C93.4388 16.0914 92.9045 15.7358 92.508 15.249C92.092 14.75 91.881 14.097 91.881 13.287C91.8746 12.8606 91.9667 12.4385 92.15 12.0534C92.3333 11.6684 92.603 11.3308 92.938 11.067C93.645 10.477 94.625 10.183 95.878 10.185C97.13 10.185 98.118 10.465 98.864 11.023C99.5976 11.5787 100.102 12.3843 100.281 13.287H97.778C97.512 12.62 96.88 12.287 95.883 12.287C94.813 12.287 94.282 12.621 94.282 13.291C94.2837 13.4442 94.3263 13.5941 94.4054 13.7253C94.4845 13.8564 94.5973 13.9641 94.732 14.037C95.074 14.245 95.455 14.382 95.852 14.439C96.348 14.523 96.839 14.636 97.322 14.779C97.823 14.921 98.314 15.097 98.792 15.305C99.257 15.516 99.651 15.859 99.925 16.29C100.241 16.7981 100.399 17.3889 100.378 17.987C100.388 18.4325 100.292 18.874 100.097 19.2748C99.9025 19.6755 99.6147 20.0239 99.258 20.291C98.513 20.879 97.42 21.174 95.98 21.175V21.175ZM88.526 11.243C87.757 10.55 86.676 10.203 85.292 10.203C84.184 10.203 83.256 10.501 82.508 11.097C81.7642 11.6767 81.238 12.4907 81.015 13.407H83.378C83.498 13.06 83.728 12.762 84.032 12.557C84.4004 12.309 84.8383 12.1854 85.282 12.204C85.8386 12.1733 86.3866 12.3512 86.819 12.703C87.0094 12.8801 87.1583 13.097 87.2551 13.3384C87.352 13.5797 87.3942 13.8394 87.379 14.099V14.607H84.685C83.435 14.607 82.456 14.917 81.751 15.54C81.4113 15.83 81.1402 16.1918 80.9571 16.5992C80.774 17.0065 80.6834 17.4494 80.692 17.896C80.6776 18.3388 80.7581 18.7796 80.9282 19.1887C81.0983 19.5979 81.3539 19.9659 81.678 20.268C82.335 20.89 83.206 21.201 84.291 21.201C84.9633 21.2164 85.6286 21.0616 86.225 20.751C86.705 20.518 87.11 20.156 87.397 19.706H87.494L87.681 21.013H89.682V14.106C89.683 12.893 89.298 11.938 88.526 11.243V11.243ZM87.39 16.903C87.404 17.2173 87.3486 17.5308 87.2276 17.8212C87.1066 18.1116 86.923 18.3717 86.69 18.583C86.227 18.995 85.594 19.201 84.791 19.203C84.207 19.203 83.759 19.068 83.451 18.805C83.3011 18.6836 83.181 18.5294 83.1001 18.3543C83.0191 18.1792 82.9794 17.9879 82.984 17.795C82.984 16.861 83.594 16.399 84.791 16.399H87.39V16.903ZM74.69 21.198C73.175 21.198 71.963 20.711 71.055 19.738C70.149 18.765 69.692 17.42 69.692 15.698C69.692 13.978 70.146 12.638 71.049 11.663C71.952 10.688 73.168 10.203 74.691 10.203C75.928 10.203 76.953 10.533 77.767 11.194C78.5654 11.8303 79.1342 12.7099 79.387 13.699H77.095C76.8701 13.2605 76.5239 12.8959 76.0978 12.6484C75.6716 12.4009 75.1833 12.281 74.691 12.303C74.3178 12.2899 73.9466 12.3632 73.6063 12.517C73.266 12.6709 72.9657 12.9012 72.729 13.19C72.231 13.783 71.982 14.62 71.982 15.699C71.982 16.778 72.232 17.614 72.729 18.209C72.9654 18.4984 73.2655 18.7294 73.6058 18.8837C73.9461 19.0381 74.3175 19.1118 74.691 19.099C75.1836 19.12 75.672 18.9992 76.098 18.7511C76.5241 18.503 76.8701 18.1378 77.095 17.699H79.387C79.1345 18.6897 78.5658 19.5709 77.767 20.209C76.956 20.868 75.93 21.198 74.691 21.198H74.69ZM61.169 25.004L62.769 21.002L58.472 10.407H60.972L63.872 17.905H63.967L66.872 10.407H69.372L63.568 25.004H61.169V25.004ZM56.312 11.243C55.542 10.55 54.462 10.203 53.075 10.203C51.968 10.203 51.041 10.501 50.292 11.097C49.5508 11.6772 49.028 12.4915 48.809 13.407H51.171C51.291 13.06 51.52 12.762 51.824 12.557C52.193 12.31 52.631 12.187 53.074 12.204C53.724 12.204 54.238 12.37 54.611 12.703C54.8018 12.8798 54.951 13.0967 55.0478 13.3381C55.1447 13.5795 55.1867 13.8394 55.171 14.099V14.607H52.464C51.22 14.607 50.242 14.917 49.532 15.54C49.1919 15.8297 48.9204 16.1914 48.7371 16.5988C48.5537 17.0062 48.4632 17.4493 48.472 17.896C48.4588 18.3373 48.5398 18.7763 48.7096 19.1837C48.8795 19.5912 49.1343 19.9578 49.457 20.259C50.114 20.881 50.985 21.192 52.071 21.192C52.7423 21.2073 53.4066 21.0525 54.002 20.742C54.4827 20.509 54.8894 20.1472 55.177 19.697H55.272L55.47 21.004H57.467V14.097C57.467 12.89 57.082 11.938 56.312 11.243V11.243ZM55.172 16.903C55.186 17.2173 55.1306 17.5308 55.0096 17.8212C54.8886 18.1116 54.705 18.3717 54.472 18.583C54.008 18.995 53.375 19.201 52.571 19.203C51.988 19.203 51.539 19.068 51.231 18.805C51.0814 18.6833 50.9616 18.529 50.8807 18.354C50.7998 18.179 50.7598 17.9878 50.764 17.795C50.771 16.865 51.374 16.4 52.571 16.399H55.171V16.903H55.172ZM43.344 15.699C43.701 15.604 44.045 15.469 44.371 15.295C44.751 15.087 45.107 14.837 45.431 14.549C45.823 14.188 46.125 13.74 46.314 13.242C46.541 12.657 46.654 12.033 46.644 11.405C46.644 10.073 46.219 9.005 45.368 8.202C44.516 7.399 43.408 7 42.045 7.004H36.245V21.004H38.745V15.807H40.641L44.244 21.002H47.044L43.344 15.699V15.699ZM38.744 13.593V9.206H41.841C42.551 9.206 43.111 9.393 43.521 9.783C43.932 10.173 44.141 10.707 44.141 11.4C44.141 12.092 43.934 12.634 43.518 13.02C43.0608 13.4179 42.4673 13.6233 41.862 13.593H38.745H38.744Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_103_72'>
        <rect width={109} height={28} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(LinkIcon);
export { Memo as LinkIcon };