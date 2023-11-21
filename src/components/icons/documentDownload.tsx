import { IconProps } from "@/types/icon";
import { cn } from "@/utils/className";

const DocumentDownloadIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
      {...props}
    >
      <path
        d="M17.4133 8.41333L14.5867 5.58667C14.401 5.40074 14.1804 5.25322 13.9377 5.15256C13.695 5.0519 13.4348 5.00006 13.172 5H6C5.20435 5 4.44129 5.31607 3.87868 5.87868C3.31607 6.44129 3 7.20435 3 8V24C3 24.7956 3.31607 25.5587 3.87868 26.1213C4.44129 26.6839 5.20435 27 6 27H26C26.7956 27 27.5587 26.6839 28.1213 26.1213C28.6839 25.5587 29 24.7956 29 24V12C29 11.2044 28.6839 10.4413 28.1213 9.87868C27.5587 9.31607 26.7956 9 26 9H18.828C18.2977 8.99953 17.788 8.78851 17.4133 8.41333Z"
        fill="#FFF9ED"
      />
      <path
        d="M12 18L16 22L12 18ZM16 22L20 18L16 22ZM16 22V14V22Z"
        fill="#FFF9ED"
      />
      <path
        d="M12 18L16 22M16 22L20 18M16 22V14"
        stroke="#36373E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DocumentDownloadIcon;
