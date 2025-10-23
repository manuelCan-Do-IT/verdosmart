import svgPaths from "./svg-akvrgt4mv7";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[58.2px] text-center text-gray-900 w-full">
        <p className="leading-[60px]">Nos Produits</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[22.3px] text-center text-gray-600 w-full">
        <p className="leading-[32px]">Équipements et technologies de qualité professionnelle</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container />
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Component 1">
          <path d="M9.33333 26.6667H22.6667" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3c5c7080} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1a8e6a80} id="Vector_3" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pf833f00} id="Vector_4" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-emerald-100 content-stretch flex items-center justify-center left-[32.8px] rounded-[16px] size-[64px] top-[32.8px]" data-name="Background">
      <Component />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32.8px] right-[32.8px] top-[120.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[21.6px] text-gray-900 text-nowrap">
        <p className="leading-[32px] whitespace-pre">Semences</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[32.8px] pb-[0.6px] pt-0 px-0 right-[32.8px] top-[164.2px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[14.5px] text-gray-600 text-nowrap whitespace-pre">
        <p className="mb-0">Semences certifiées et hybrides</p>
        <p>pour tous types de cultures.</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[16px]" data-name="Component 1">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Component2 />
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="box-border content-stretch flex flex-col h-[16px] items-start pl-[8px] pr-0 py-0 relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute content-stretch flex gap-[0.01px] items-center left-[32.8px] top-[232.4px]" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.8px] text-center text-emerald-600 text-nowrap">
        <p className="leading-[24px] whitespace-pre">En savoir plus</p>
      </div>
      <SvgMargin />
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-white relative rounded-[16px] self-stretch shrink-0 w-[296px]" data-name="Component 5">
      <div className="h-full overflow-clip relative rounded-[inherit] w-[296px]">
        <Background />
        <Heading1 />
        <Container2 />
        <Component1 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Component 1">
          <path d={svgPaths.p1e821000} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p32206a80} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-green-100 content-stretch flex items-center justify-center left-[32.8px] rounded-[16px] size-[64px] top-[32.8px]" data-name="Background">
      <Component3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32.8px] right-[32.8px] top-[120.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[23.1px] text-gray-900 text-nowrap">
        <p className="leading-[32px] whitespace-pre">Intrants</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[32.8px] pb-[0.6px] pt-0 px-0 right-[32.8px] top-[164.2px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[14.6px] text-gray-600 text-nowrap whitespace-pre">
        <p className="mb-0">Engrais, pesticides biologiques</p>
        <p>et amendements pour sols.</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[16px]" data-name="Component 1">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Component5 />
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[16px] items-start pl-[8px] pr-0 py-0 relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg1 />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute content-stretch flex gap-[5.684e_-14px] items-center left-[32.8px] top-[232.4px]" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.9px] text-center text-emerald-600 text-nowrap">
        <p className="leading-[24px] whitespace-pre">En savoir plus</p>
      </div>
      <SvgMargin1 />
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-white relative rounded-[16px] self-stretch shrink-0 w-[296px]" data-name="Component 5">
      <div className="h-full overflow-clip relative rounded-[inherit] w-[296px]">
        <Background1 />
        <Heading2 />
        <Container3 />
        <Component6 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Component 1">
          <path d={svgPaths.pff25d00} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M20 12H12V20H20V12Z" id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M20 2.66667V5.33333" id="Vector_3" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M20 26.6667V29.3333" id="Vector_4" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M2.66667 20H5.33333" id="Vector_5" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M2.66667 12H5.33333" id="Vector_6" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M26.6667 20H29.3333" id="Vector_7" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M26.6667 12H29.3333" id="Vector_8" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 2.66667V5.33333" id="Vector_9" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 26.6667V29.3333" id="Vector_10" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-emerald-100 content-stretch flex items-center justify-center left-[32.8px] rounded-[16px] size-[64px] top-[32.8px]" data-name="Background">
      <Component8 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32.8px] right-[32.8px] top-[120.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22.7px] text-gray-900 text-nowrap">
        <p className="leading-[32px] whitespace-pre">Capteurs IoT</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[32.8px] pb-[0.6px] pt-0 px-0 right-[32.8px] top-[164.2px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[15.1px] text-gray-600 text-nowrap whitespace-pre">
        <p className="mb-0">Surveillance en temps réel de</p>
        <p>{`l'humidité, température et pH.`}</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[16px]" data-name="Component 1">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Component9 />
    </div>
  );
}

function SvgMargin2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[16px] items-start pl-[8px] pr-0 py-0 relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg2 />
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute content-stretch flex items-center left-[32.8px] top-[232.4px]" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.9px] text-center text-emerald-600 text-nowrap">
        <p className="leading-[24px] whitespace-pre">En savoir plus</p>
      </div>
      <SvgMargin2 />
    </div>
  );
}

function Component11() {
  return (
    <div className="bg-white relative rounded-[16px] self-stretch shrink-0 w-[296px]" data-name="Component 5">
      <div className="h-full overflow-clip relative rounded-[inherit] w-[296px]">
        <Background2 />
        <Heading3 />
        <Container4 />
        <Component10 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Component12() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Component 1">
          <path d={svgPaths.p27a3200} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2ee517c0} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p18f42980} id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p37b568c0} id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-green-100 content-stretch flex items-center justify-center left-[32.8px] rounded-[16px] size-[64px] top-[32.8px]" data-name="Background">
      <Component12 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32.8px] right-[32.8px] top-[120.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22.1px] text-gray-900 text-nowrap">
        <p className="leading-[32px] whitespace-pre">Logiciels</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[32.8px] pb-[0.6px] pt-0 px-0 right-[32.8px] top-[164.2px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[15px] text-gray-600 text-nowrap whitespace-pre">
        <p className="mb-0">Solutions de gestion complète</p>
        <p>pour votre exploitation.</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[16px]" data-name="Component 1">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Component13 />
    </div>
  );
}

function SvgMargin3() {
  return (
    <div className="box-border content-stretch flex flex-col h-[16px] items-start mr-[-1.137e_-13px] pl-[8px] pr-0 py-0 relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg3 />
    </div>
  );
}

function Component14() {
  return (
    <div className="absolute content-stretch flex items-center left-[32.8px] top-[232.4px]" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] mr-[-1.137e_-13px] not-italic relative shrink-0 text-[14.9px] text-center text-emerald-600 text-nowrap">
        <p className="leading-[24px] whitespace-pre">En savoir plus</p>
      </div>
      <SvgMargin3 />
    </div>
  );
}

function Component15() {
  return (
    <div className="bg-white relative rounded-[16px] self-stretch shrink-0 w-[296px]" data-name="Component 5">
      <div className="h-full overflow-clip relative rounded-[inherit] w-[296px]">
        <Background3 />
        <Heading4 />
        <Container5 />
        <Component14 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Component4 />
      <Component7 />
      <Component11 />
      <Component15 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container6 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="relative size-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[120.4px] py-[96px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}