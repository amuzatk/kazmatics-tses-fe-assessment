interface NavIconProps {
  className?: string;
  stroke?: string; // main color
  width?: number | string;
  height?: number | string;
}

const DEFAULT_SIZE = 20;

export const DashboardIcon = ({
  stroke = "#636363",
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  className,
}: NavIconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.01594 1.89214L2.4226 4.69214C1.8226 5.15881 1.33594 6.15214 1.33594 6.90547V11.8455C1.33594 13.3921 2.59594 14.6588 4.1426 14.6588H11.8626C13.4093 14.6588 14.6693 13.3921 14.6693 11.8521V6.99881C14.6693 6.19214 14.1293 5.15881 13.4693 4.69881L9.34927 1.81214C8.41594 1.15881 6.91594 1.19214 6.01594 1.89214Z"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 12H9C10.1 12 11 11.1 11 10V8C11 6.9 10.1 6 9 6H7C5.9 6 5 6.9 5 8V10C5 11.1 5.9 12 7 12Z"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6V12"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 9H11"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CoursesIcon = ({
  stroke = "#636363",
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  className,
}: NavIconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.501 12.5523V3.49983C16.501 2.59983 15.766 1.93233 14.8735 2.00733H14.8285C13.2535 2.14233 10.861 2.94483 9.52598 3.78483L9.39848 3.86733C9.18098 4.00233 8.82098 4.00233 8.60348 3.86733L8.41598 3.75483C7.08098 2.92233 4.69598 2.12733 3.12098 1.99983C2.22848 1.92483 1.50098 2.59983 1.50098 3.49233V12.5523C1.50098 13.2723 2.08598 13.9473 2.80598 14.0373L3.02348 14.0673C4.65098 14.2848 7.16348 15.1098 8.60348 15.8973L8.63348 15.9123C8.83598 16.0248 9.15848 16.0248 9.35348 15.9123C10.7935 15.1173 13.3135 14.2848 14.9485 14.0673L15.196 14.0373C15.916 13.9473 16.501 13.2723 16.501 12.5523Z"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.99609 4.11328V15.3633"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.81055 6.36426H4.12305"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.37305 8.61523H4.12305"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ClassesIcon = ({
  stroke = "#636363",
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  className,
}: NavIconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 8.33659C2.5 5.19389 2.5 3.62255 3.47631 2.64623C4.45262 1.66992 6.02397 1.66992 9.16667 1.66992H10.8333C13.976 1.66992 15.5474 1.66992 16.5237 2.64623C17.5 3.62255 17.5 5.19389 17.5 8.33659V13.3366H2.5V8.33659Z"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <path
      d="M1.66992 13.3301H18.3366"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M3.33008 18.3301L5.83008 13.3301"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M16.6699 18.3301L14.1699 13.3301"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M10.8366 7.5H9.16992"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66341 9.16341V5.83008L5.83008 6.66341"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1634 9.16341V5.83008L13.3301 6.66341"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 16.6634V13.3301"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AssessmentsIcon = ({
  stroke = "#636363",
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  className,
}: NavIconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.91992 15.0033V5.83659C2.91992 2.50326 3.75326 1.66992 7.08659 1.66992H12.9199C16.2533 1.66992 17.0866 2.50326 17.0866 5.83659V14.1699C17.0866 14.2866 17.0866 14.4033 17.0783 14.5199"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.29492 12.5H17.0866V15.4167C17.0866 17.025 15.7783 18.3333 14.1699 18.3333H5.83659C4.22826 18.3333 2.91992 17.025 2.91992 15.4167V14.875C2.91992 13.5667 3.98659 12.5 5.29492 12.5Z"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66992 5.83008H13.3366"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66992 8.75H10.8366"
      stroke={stroke}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CertificationIcon = ({
  stroke = "#636363",
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  className,
}: NavIconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5498 9.18286V13.3245C3.5498 14.8412 3.5498 14.8412 4.98314 15.8079L8.9248 18.0829C9.51647 18.4245 10.4831 18.4245 11.0748 18.0829L15.0165 15.8079C16.4498 14.8412 16.4498 14.8412 16.4498 13.3245V9.18286C16.4498 7.66619 16.4498 7.66619 15.0165 6.69952L11.0748 4.42452C10.4831 4.08286 9.51647 4.08286 8.9248 4.42452L4.98314 6.69952C3.5498 7.66619 3.5498 7.66619 3.5498 9.18286Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5837 6.35835V4.16669C14.5837 2.50002 13.7503 1.66669 12.0837 1.66669H7.91699C6.25033 1.66669 5.41699 2.50002 5.41699 4.16669V6.30002"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5245 9.15909L10.9995 9.90076C11.0745 10.0174 11.2412 10.1341 11.3662 10.1674L12.2162 10.3841C12.7412 10.5174 12.8828 10.9674 12.5412 11.3841L11.9828 12.0591C11.8995 12.1674 11.8328 12.3591 11.8412 12.4924L11.8912 13.3674C11.9245 13.9091 11.5412 14.1841 11.0412 13.9841L10.2245 13.6591C10.0995 13.6091 9.89116 13.6091 9.76616 13.6591L8.94949 13.9841C8.44949 14.1841 8.06616 13.9008 8.09949 13.3674L8.14949 12.4924C8.15782 12.3591 8.09116 12.1591 8.00782 12.0591L7.44949 11.3841C7.10782 10.9674 7.24949 10.5174 7.77449 10.3841L8.62449 10.1674C8.75783 10.1341 8.92449 10.0091 8.99116 9.90076L9.46616 9.15909C9.76616 8.70909 10.2328 8.70909 10.5245 9.15909Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SettingsIcon = ({
  stroke = "#636363",
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  className,
}: NavIconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.66699 10.7329V9.26621C1.66699 8.39954 2.37533 7.68287 3.25033 7.68287C4.75866 7.68287 5.37533 6.61621 4.61699 5.30787C4.18366 4.55787 4.44199 3.58287 5.20033 3.14954L6.64199 2.32454C7.30033 1.93287 8.15033 2.16621 8.54199 2.82454L8.63366 2.98287C9.38366 4.29121 10.617 4.29121 11.3753 2.98287L11.467 2.82454C11.8587 2.16621 12.7087 1.93287 13.367 2.32454L14.8087 3.14954C15.567 3.58287 15.8253 4.55787 15.392 5.30787C14.6337 6.61621 15.2503 7.68287 16.7587 7.68287C17.6253 7.68287 18.342 8.39121 18.342 9.26621V10.7329C18.342 11.5995 17.6337 12.3162 16.7587 12.3162C15.2503 12.3162 14.6337 13.3829 15.392 14.6912C15.8253 15.4495 15.567 16.4162 14.8087 16.8495L13.367 17.6745C12.7087 18.0662 11.8587 17.8329 11.467 17.1745L11.3753 17.0162C10.6253 15.7079 9.39199 15.7079 8.63366 17.0162L8.54199 17.1745C8.15033 17.8329 7.30033 18.0662 6.64199 17.6745L5.20033 16.8495C4.44199 16.4162 4.18366 15.4412 4.61699 14.6912C5.37533 13.3829 4.75866 12.3162 3.25033 12.3162C2.37533 12.3162 1.66699 11.5995 1.66699 10.7329Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
