import svgPaths from "./svg-rihjlsnlf2";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[55.5px] text-center text-gray-900 w-full">
        <p className="leading-[60px]">Nos Services</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[22.5px] text-center text-gray-600 text-nowrap">
        <p className="leading-[32px] whitespace-pre">Des solutions complètes pour optimiser votre exploitation agricole</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
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
          <path d="M9.33333 26.6667H22.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p37a4f60} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p13e38e00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p68ee400} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[41.6px] rounded-[16px] size-[64px] top-[41.6px]" data-name="Background">
      <Component />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41.6px] right-[41.6px] top-[129.6px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28.2px] text-gray-900 text-nowrap">
        <p className="leading-[36px] whitespace-pre">Services Agronomiques</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41.6px] right-[41.6px] top-[181.6px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[29.25px] not-italic relative shrink-0 text-[16.5px] text-gray-600 text-nowrap whitespace-pre">
        <p className="mb-0">Conseils personnalisés pour optimiser vos cultures. Analyse de sols,</p>
        <p>plans de fertilisation, et stratégies de protection des cultures.</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p2bd33880} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="box-border content-stretch flex flex-col h-[24px] items-start pb-0 pl-0 pr-[12px] pt-[4px] relative shrink-0 w-[32px]" data-name="SVG:margin">
      <Component1 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Analyse et diagnostic des sols</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p2bd33880} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[24px] items-start pb-0 pl-0 pr-[12px] pt-[4px] relative shrink-0 w-[32px]" data-name="SVG:margin">
      <Component2 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin1 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Plans de fertilisation personnalisés</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p2bd33880} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[24px] items-start pb-0 pl-0 pr-[12px] pt-[4px] relative shrink-0 w-[32px]" data-name="SVG:margin">
      <Component4 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin2 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.9px] text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Suivi et accompagnement terrain</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p2bd33880} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin3() {
  return (
    <div className="box-border content-stretch flex flex-col h-[24px] items-start pb-0 pl-0 pr-[12px] pt-[4px] relative shrink-0 w-[32px]" data-name="SVG:margin">
      <Component5 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin3 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Formation et conseil technique</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[41.6px] right-[41.6px] top-[264.1px]" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative rounded-[24px] self-stretch shrink-0 w-[624px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border border-emerald-100 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Background />
      <Heading1 />
      <Container2 />
      <List />
    </div>
  );
}

function Component6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Component 1">
          <path d={svgPaths.pf61b480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M20 12H12V20H20V12Z" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M20 2.66668V5.33335" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M20 26.6667V29.3334" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M2.66667 20H5.33333" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M2.66667 12H5.33333" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M26.6667 20H29.3333" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M26.6667 12H29.3333" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 2.66668V5.33335" id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 26.6667V29.3334" id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[41.6px] rounded-[16px] size-[64px] top-[41.6px]" data-name="Background">
      <Component6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41.6px] right-[41.6px] top-[129.6px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28.9px] text-gray-900 text-nowrap">
        <p className="leading-[36px] whitespace-pre">Solutions Informatiques</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41.6px] right-[41.6px] top-[181.6px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[29.25px] not-italic relative shrink-0 text-[16.7px] text-gray-600 text-nowrap whitespace-pre">
        <p className="mb-0">Technologies de pointe pour une agriculture connectée. Capteurs</p>
        <p>IoT, logiciels de gestion, et analyse de données.</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p2bd33880} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin4() {
  return (
    <div className="box-border content-stretch flex flex-col h-[24px] items-start pb-0 pl-0 pr-[12px] pt-[4px] relative shrink-0 w-[32px]" data-name="SVG:margin">
      <Component7 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin4 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Capteurs IoT et surveillance en temps réel</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p2bd33880} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin5() {
  return (
    <div className="box-border content-stretch flex flex-col h-[24px] items-start pb-0 pl-0 pr-[12px] pt-[4px] relative shrink-0 w-[32px]" data-name="SVG:margin">
      <Component8 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin5 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">{`Logiciels de gestion d'exploitation`}</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p2bd33880} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin6() {
  return (
    <div className="box-border content-stretch flex flex-col h-[24px] items-start pb-0 pl-0 pr-[12px] pt-[4px] relative shrink-0 w-[32px]" data-name="SVG:margin">
      <Component9 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin6 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.9px] text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Analyse de données et reporting</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p2bd33880} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin7() {
  return (
    <div className="box-border content-stretch flex flex-col h-[24px] items-start pb-0 pl-0 pr-[12px] pt-[4px] relative shrink-0 w-[32px]" data-name="SVG:margin">
      <Component10 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin7 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.9px] text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Support technique et maintenance</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[41.6px] right-[41.6px] top-[264.1px]" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function Component11() {
  return (
    <div className="relative rounded-[24px] self-stretch shrink-0 w-[624px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border border-green-100 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Background1 />
      <Heading2 />
      <Container3 />
      <List1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Component3 />
      <Component11 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container4 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-white relative size-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[120.4px] py-[96px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}