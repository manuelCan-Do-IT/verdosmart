import BackgroundIcon from "../imports/Background-57-332";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  variant?: "default" | "white";
}

export default function Logo({ size = "md", showText = true, variant = "default" }: LogoProps) {
  const sizeClasses = {
    sm: "w-[32px] h-[32px]",
    md: "w-[44px] h-[44px]",
    lg: "w-[56px] h-[56px]"
  };

  const textSizeClasses = {
    sm: "text-[18px]",
    md: "text-[22px] md:text-[28.5px]",
    lg: "text-[32px]"
  };

  const textColorClasses = variant === "white" 
    ? "text-white"
    : "bg-clip-text bg-gradient-to-r from-[#059669] to-[#16a34a]";

  const textStyle = variant === "white" 
    ? {} 
    : { WebkitTextFillColor: "transparent" };

  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className={`bg-gradient-to-r from-[#10b981] to-[#16a34a] rounded-[8px] shrink-0 ${sizeClasses[size]}`}>
        <BackgroundIcon />
      </div>
      {showText && (
        <div className="box-border content-stretch flex flex-col items-start pl-[12px] pr-0 py-0 relative shrink-0" data-name="Margin">
          <div className={`flex flex-col font-['Lora',_serif] font-bold justify-center leading-[0] not-italic relative shrink-0 ${textSizeClasses[size]} text-nowrap ${textColorClasses}`} style={textStyle}>
            <p className="leading-[28px] md:leading-[36px] whitespace-pre">VerdoSmart</p>
          </div>
        </div>
      )}
    </div>
  );
}
