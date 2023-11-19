import { IconProps } from "@/types/icon";
import { cn } from "@/utils/className";

const Logo = ({ className, ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 55 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
      {...props}
    >
      <path
        d="M0 30.1326L17.6112 1.96655L18.8408 0L19.971 1.84485L37.301 30.1326H34.8667L18.7414 3.8114L2.28374 30.1326H0Z"
        fill="currentColor"
      />
      <path
        d="M36.5398 0L55 30.1326H52.5608L35.2711 2.02999L35.308 1.97085L36.5398 0Z"
        fill="currentColor"
      />
      <path
        d="M19.9193 30.1326H17.6355L36.4764 0L37.6182 1.83968L19.9193 30.1326Z"
        fill="currentColor"
      />
      <path
        d="M34.9329 28.2045L36.1431 30.1412L0.605103 30.1311L1.56014 28.1879L34.9329 28.2045Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
