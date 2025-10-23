import svgPaths from "./svg-7rd705kthf";

function Component() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Component 1">
          <path d={svgPaths.p20644980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1bea5e80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

export default function Background() {
  return (
    <div className="relative rounded-[8px] size-full" data-name="Background">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[8px] relative size-full">
          <Component />
        </div>
      </div>
    </div>
  );
}