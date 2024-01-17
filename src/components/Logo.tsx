interface LogoProps {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export function Logo({ size = 40, className, onClick }: LogoProps) {
  return (
    <svg
      onClick={onClick}
      role="logo"
      width={size}
      height={size}
      viewBox="0 0 248 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} stroke-current hover:scale-110 transition-all ease-in-out`}
    >
      <path
        d="M72.3093 9C74.1427 84.3333 67.6093 234.8 26.8093 234C-24.1907 233 42.7723 44.7895 121.272 20C225.the772 -13 218.434 216 131.272 224C44.1104 232 111.5 116.5 238.5 244.5"
        strokeWidth="20"
        strokeLinecap="round"
      />
    </svg>
  );
}
