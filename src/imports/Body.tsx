import svgPaths from "./svg-v7ro1qapfz";
import imgAgricultureModerne from "figma:asset/cba4e231c1edadc2bc4519fdf9974a33c6284ea6.png";
import imgEquipeVerdoSmart from "figma:asset/7cd4938accc0662070471fbf6f67c16974e8bc60.png";

function Component() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[16px]" data-name="Component 1">
      <div className="absolute inset-[83.33%_29.17%_16.67%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
            <path d="M0.666667 0.666667H7.33333" id="Vector" stroke="var(--stroke-0, #047857)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_45.83%_16.67%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-10%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 8">
            <path d={svgPaths.p2a44ed00} id="Vector" stroke="var(--stroke-0, #047857)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[35%_50.83%_44.29%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-20.11%_-12.82%_-20.12%_-12.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
            <path d={svgPaths.p157e5800} id="Vector" stroke="var(--stroke-0, #047857)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_20.83%_58.33%_54.15%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-16.66%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p8069d00} id="Vector" stroke="var(--stroke-0, #047857)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Component />
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="box-border content-stretch flex flex-col h-[16px] items-start pl-0 pr-[8px] py-0 relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13.2px] text-emerald-700 text-nowrap">
        <p className="leading-[20px] whitespace-pre">{`L'innovation au service de l'agriculture`}</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-emerald-100 box-border content-stretch flex items-center left-0 px-[20.8px] py-[8.8px] rounded-[9999px] top-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-emerald-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <SvgMargin />
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',_sans-serif] font-bold from-[#059669] justify-center leading-[0] not-italic relative shrink-0 text-[68.9px] text-nowrap to-[#16a34a]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[72px] whitespace-pre">Intelligentes</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 right-0 top-[61.6px]" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[72px] not-italic relative shrink-0 text-[67.6px] text-gray-900 text-nowrap whitespace-pre">
        <p className="mb-0">Solutions</p>
        <p>Agricoles</p>
      </div>
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[308.7px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[32.5px] not-italic relative shrink-0 text-[18.8px] text-gray-600 text-nowrap whitespace-pre">
        <p className="mb-0">VerdoSmart combine agronomie et technologie pour optimiser vos</p>
        <p className="mb-0">rendements. Capteurs IoT, logiciels de gestion, et expertise</p>
        <p>agronomique pour une agriculture de précision.</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[20px]" data-name="Component 1">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d={svgPaths.p2f52ca80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Component9 />
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[20px] items-start pl-[8px] pr-0 py-0 relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-gradient-to-r box-border content-stretch flex from-[#10b981] items-center justify-center pb-[18px] pt-[17.2px] px-[32px] relative rounded-[12px] shrink-0 to-[#16a34a]" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Découvrir nos services</p>
      </div>
      <SvgMargin1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0" data-name="Component 3">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[33.6px] py-[17.6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16.9px] text-center text-gray-900 text-nowrap">
          <p className="leading-[28px] whitespace-pre">Demander un devis</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-0 right-0 top-[447.1px]" data-name="Container">
      <Component1 />
      <Component2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[32.3px] text-emerald-600 w-full">
        <p className="leading-[40px]">500+</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-gray-600 w-full">
        <p className="leading-[24px]">Clients satisfaits</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[189.32px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-emerald-600 w-full">
        <p className="leading-[40px]">15+</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-gray-600 w-full">
        <p className="leading-[24px]">{`Années d'expérience`}</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[189.34px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[33.3px] text-emerald-600 w-full">
        <p className="leading-[40px]">98%</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-gray-600 w-full">
        <p className="leading-[24px]">Taux de satisfaction</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[189.34px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start justify-center left-0 right-0 top-[558.3px]" data-name="Container">
      <Container6 />
      <Container9 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[622.3px] relative shrink-0 w-[616px]" data-name="Container">
      <BackgroundBorder />
      <Heading />
      <Container2 />
      <Container3 />
      <Container13 />
    </div>
  );
}

function AgricultureModerne() {
  return (
    <div className="h-[500px] max-w-[616px] relative rounded-[16px] shrink-0 w-full" data-name="Agriculture moderne">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-full left-[-17.93%] max-w-none top-0 w-[135.87%]" src={imgAgricultureModerne} />
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Background+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[32px] relative w-full">
          <AgricultureModerne />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[616px]" data-name="Container">
      <div className="absolute flex inset-[-15.73px_-14.34px_-15.74px_-14.34px] items-center justify-center">
        <div className="flex-none h-[564px] rotate-[3deg] w-[616px]">
          <div className="rounded-[24px] size-full" data-name="Gradient" />
        </div>
      </div>
      <BackgroundShadow />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[96px] pt-[128px] px-[120.4px] relative w-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[55.5px] text-center text-gray-900 w-full">
        <p className="leading-[60px]">Nos Services</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[22.5px] text-center text-gray-600 text-nowrap">
        <p className="leading-[32px] whitespace-pre">Des solutions complètes pour optimiser votre exploitation agricole</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container17 />
    </div>
  );
}

function Component10() {
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
      <Component10 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41.6px] right-[41.6px] top-[129.6px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28.2px] text-gray-900 text-nowrap">
        <p className="leading-[36px] whitespace-pre">Services Agronomiques</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41.6px] right-[41.6px] top-[181.6px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[29.25px] not-italic relative shrink-0 text-[16.5px] text-gray-600 text-nowrap whitespace-pre">
        <p className="mb-0">Conseils personnalisés pour optimiser vos cultures. Analyse de sols,</p>
        <p>plans de fertilisation, et stratégies de protection des cultures.</p>
      </div>
    </div>
  );
}

function Component11() {
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
      <Component11 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin2 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Analyse et diagnostic des sols</p>
      </div>
    </div>
  );
}

function Component12() {
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
      <Component12 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin3 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Plans de fertilisation personnalisés</p>
      </div>
    </div>
  );
}

function Component13() {
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
      <Component13 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin4 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.9px] text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Suivi et accompagnement terrain</p>
      </div>
    </div>
  );
}

function Component14() {
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
      <Component14 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin5 />
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
      <Heading2 />
      <Container19 />
      <List />
    </div>
  );
}

function Component15() {
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
      <Component15 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41.6px] right-[41.6px] top-[129.6px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28.9px] text-gray-900 text-nowrap">
        <p className="leading-[36px] whitespace-pre">Solutions Informatiques</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41.6px] right-[41.6px] top-[181.6px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[29.25px] not-italic relative shrink-0 text-[16.7px] text-gray-600 text-nowrap whitespace-pre">
        <p className="mb-0">Technologies de pointe pour une agriculture connectée. Capteurs</p>
        <p>IoT, logiciels de gestion, et analyse de données.</p>
      </div>
    </div>
  );
}

function Component16() {
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
      <Component16 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin6 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Capteurs IoT et surveillance en temps réel</p>
      </div>
    </div>
  );
}

function Component17() {
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
      <Component17 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin7 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">{`Logiciels de gestion d'exploitation`}</p>
      </div>
    </div>
  );
}

function Component18() {
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

function SvgMargin8() {
  return (
    <div className="box-border content-stretch flex flex-col h-[24px] items-start pb-0 pl-0 pr-[12px] pt-[4px] relative shrink-0 w-[32px]" data-name="SVG:margin">
      <Component18 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin8 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.9px] text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Analyse de données et reporting</p>
      </div>
    </div>
  );
}

function Component19() {
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

function SvgMargin9() {
  return (
    <div className="box-border content-stretch flex flex-col h-[24px] items-start pb-0 pl-0 pr-[12px] pt-[4px] relative shrink-0 w-[32px]" data-name="SVG:margin">
      <Component19 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin9 />
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

function Component20() {
  return (
    <div className="relative rounded-[24px] self-stretch shrink-0 w-[624px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border border-green-100 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Background1 />
      <Heading4 />
      <Container20 />
      <List1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Component3 />
      <Component20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container21 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[120.4px] py-[96px] relative w-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[58.2px] text-center text-gray-900 w-full">
        <p className="leading-[60px]">Nos Produits</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[22.3px] text-center text-gray-600 w-full">
        <p className="leading-[32px]">Équipements et technologies de qualité professionnelle</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container23 />
    </div>
  );
}

function Component21() {
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

function Background2() {
  return (
    <div className="absolute bg-emerald-100 content-stretch flex items-center justify-center left-[32.8px] rounded-[16px] size-[64px] top-[32.8px]" data-name="Background">
      <Component21 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32.8px] right-[32.8px] top-[120.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[21.6px] text-gray-900 text-nowrap">
        <p className="leading-[32px] whitespace-pre">Semences</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[32.8px] pb-[0.6px] pt-0 px-0 right-[32.8px] top-[164.2px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[14.5px] text-gray-600 text-nowrap whitespace-pre">
        <p className="mb-0">Semences certifiées et hybrides</p>
        <p>pour tous types de cultures.</p>
      </div>
    </div>
  );
}

function Component22() {
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
      <Component22 />
    </div>
  );
}

function SvgMargin10() {
  return (
    <div className="box-border content-stretch flex flex-col h-[16px] items-start pl-[8px] pr-0 py-0 relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg2 />
    </div>
  );
}

function Component23() {
  return (
    <div className="absolute content-stretch flex gap-[0.01px] items-center left-[32.8px] top-[232.4px]" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.8px] text-center text-emerald-600 text-nowrap">
        <p className="leading-[24px] whitespace-pre">En savoir plus</p>
      </div>
      <SvgMargin10 />
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-white relative rounded-[16px] self-stretch shrink-0 w-[296px]" data-name="Component 5">
      <div className="h-full overflow-clip relative rounded-[inherit] w-[296px]">
        <Background2 />
        <Heading6 />
        <Container25 />
        <Component23 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Component24() {
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

function Background3() {
  return (
    <div className="absolute bg-green-100 content-stretch flex items-center justify-center left-[32.8px] rounded-[16px] size-[64px] top-[32.8px]" data-name="Background">
      <Component24 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32.8px] right-[32.8px] top-[120.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[23.1px] text-gray-900 text-nowrap">
        <p className="leading-[32px] whitespace-pre">Intrants</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[32.8px] pb-[0.6px] pt-0 px-0 right-[32.8px] top-[164.2px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[14.6px] text-gray-600 text-nowrap whitespace-pre">
        <p className="mb-0">Engrais, pesticides biologiques</p>
        <p>et amendements pour sols.</p>
      </div>
    </div>
  );
}

function Component25() {
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
      <Component25 />
    </div>
  );
}

function SvgMargin11() {
  return (
    <div className="box-border content-stretch flex flex-col h-[16px] items-start pl-[8px] pr-0 py-0 relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg3 />
    </div>
  );
}

function Component26() {
  return (
    <div className="absolute content-stretch flex gap-[5.684e_-14px] items-center left-[32.8px] top-[232.4px]" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.9px] text-center text-emerald-600 text-nowrap">
        <p className="leading-[24px] whitespace-pre">En savoir plus</p>
      </div>
      <SvgMargin11 />
    </div>
  );
}

function Component27() {
  return (
    <div className="bg-white relative rounded-[16px] self-stretch shrink-0 w-[296px]" data-name="Component 5">
      <div className="h-full overflow-clip relative rounded-[inherit] w-[296px]">
        <Background3 />
        <Heading7 />
        <Container26 />
        <Component26 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Component28() {
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

function Background4() {
  return (
    <div className="absolute bg-emerald-100 content-stretch flex items-center justify-center left-[32.8px] rounded-[16px] size-[64px] top-[32.8px]" data-name="Background">
      <Component28 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32.8px] right-[32.8px] top-[120.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22.7px] text-gray-900 text-nowrap">
        <p className="leading-[32px] whitespace-pre">Capteurs IoT</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[32.8px] pb-[0.6px] pt-0 px-0 right-[32.8px] top-[164.2px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[15.1px] text-gray-600 text-nowrap whitespace-pre">
        <p className="mb-0">Surveillance en temps réel de</p>
        <p>{`l'humidité, température et pH.`}</p>
      </div>
    </div>
  );
}

function Component29() {
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

function Svg4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Component29 />
    </div>
  );
}

function SvgMargin12() {
  return (
    <div className="box-border content-stretch flex flex-col h-[16px] items-start pl-[8px] pr-0 py-0 relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg4 />
    </div>
  );
}

function Component30() {
  return (
    <div className="absolute content-stretch flex items-center left-[32.8px] top-[232.4px]" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.9px] text-center text-emerald-600 text-nowrap">
        <p className="leading-[24px] whitespace-pre">En savoir plus</p>
      </div>
      <SvgMargin12 />
    </div>
  );
}

function Component31() {
  return (
    <div className="bg-white relative rounded-[16px] self-stretch shrink-0 w-[296px]" data-name="Component 5">
      <div className="h-full overflow-clip relative rounded-[inherit] w-[296px]">
        <Background4 />
        <Heading8 />
        <Container27 />
        <Component30 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Component32() {
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

function Background5() {
  return (
    <div className="absolute bg-green-100 content-stretch flex items-center justify-center left-[32.8px] rounded-[16px] size-[64px] top-[32.8px]" data-name="Background">
      <Component32 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32.8px] right-[32.8px] top-[120.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22.1px] text-gray-900 text-nowrap">
        <p className="leading-[32px] whitespace-pre">Logiciels</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[32.8px] pb-[0.6px] pt-0 px-0 right-[32.8px] top-[164.2px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[15px] text-gray-600 text-nowrap whitespace-pre">
        <p className="mb-0">Solutions de gestion complète</p>
        <p>pour votre exploitation.</p>
      </div>
    </div>
  );
}

function Component33() {
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

function Svg5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Component33 />
    </div>
  );
}

function SvgMargin13() {
  return (
    <div className="box-border content-stretch flex flex-col h-[16px] items-start mr-[-1.137e_-13px] pl-[8px] pr-0 py-0 relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg5 />
    </div>
  );
}

function Component34() {
  return (
    <div className="absolute content-stretch flex items-center left-[32.8px] top-[232.4px]" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] mr-[-1.137e_-13px] not-italic relative shrink-0 text-[14.9px] text-center text-emerald-600 text-nowrap">
        <p className="leading-[24px] whitespace-pre">En savoir plus</p>
      </div>
      <SvgMargin13 />
    </div>
  );
}

function Component35() {
  return (
    <div className="bg-white relative rounded-[16px] self-stretch shrink-0 w-[296px]" data-name="Component 5">
      <div className="h-full overflow-clip relative rounded-[inherit] w-[296px]">
        <Background5 />
        <Heading9 />
        <Container28 />
        <Component34 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Component4 />
      <Component27 />
      <Component31 />
      <Component35 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container29 />
    </div>
  );
}

function Section2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[120.4px] py-[96px] relative w-full">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[60px] not-italic relative shrink-0 text-[58px] text-gray-900 w-full">
        <p className="mb-0">À Propos de</p>
        <p>VerdoSmart</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.65px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[32.5px] not-italic relative shrink-0 text-[18.6px] text-gray-600 w-full">
        <p className="mb-0">Depuis plus de 15 ans, VerdoSmart accompagne les agriculteurs</p>
        <p className="mb-0">dans leur transition vers une agriculture moderne et durable. Notre</p>
        <p className="mb-0">{`équipe d'agronomes et d'ingénieurs combine expertise`}</p>
        <p>traditionnelle et innovations technologiques.</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[32.5px] not-italic relative shrink-0 text-[18.6px] text-gray-600 w-full">
        <p className="mb-0">{`Nous croyons en une agriculture qui respecte l'environnement tout`}</p>
        <p className="mb-0">{`en optimisant les rendements. Nos solutions sur mesure s'adaptent à`}</p>
        <p>chaque exploitation, quelle que soit sa taille.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[32.3px] text-emerald-600 w-full">
        <p className="leading-[40px]">500+</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-gray-700 w-full">
        <p className="leading-[24px]">Exploitations suivies</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-emerald-50 box-border content-stretch flex flex-col gap-[8px] items-start left-0 p-[24.8px] right-[316px] rounded-[16px] top-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-emerald-100 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-green-600 w-full">
        <p className="leading-[40px]">15+</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.8px] text-gray-700 w-full">
        <p className="leading-[24px]">{`Ans d'expérience`}</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex flex-col gap-[8px] items-start left-[316px] p-[24.8px] right-0 rounded-[16px] top-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-green-100 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[33.3px] text-emerald-600 w-full">
        <p className="leading-[40px]">98%</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-gray-700 w-full">
        <p className="leading-[24px]">Satisfaction client</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="absolute bg-emerald-50 box-border content-stretch flex flex-col gap-[8px] items-start left-0 p-[24.8px] right-[316px] rounded-[16px] top-[145.6px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-emerald-100 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[34.3px] text-green-600 w-full">
        <p className="leading-[40px]">24/7</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15.1px] text-gray-700 w-full">
        <p className="leading-[24px]">Support disponible</p>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex flex-col gap-[8px] items-start left-[316px] p-[24.8px] right-0 rounded-[16px] top-[145.6px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-green-100 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[275.8px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
      <BackgroundBorder4 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[23.4px] items-start relative shrink-0 w-[608px]" data-name="Container">
      <Heading10 />
      <Container31 />
      <Container32 />
      <Container41 />
    </div>
  );
}

function EquipeVerdoSmart() {
  return (
    <div className="h-[400px] max-w-[608px] relative rounded-[16px] shrink-0 w-full" data-name="Équipe VerdoSmart">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-full left-[-5.22%] max-w-none top-0 w-[110.43%]" src={imgEquipeVerdoSmart} />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[17.2px] text-white w-full">
        <p className="leading-[28px]">Notre Mission</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[14.8px] text-white w-full">
        <p className="mb-0">{`Rendre l'agriculture de précision accessible à tous les agriculteurs`}</p>
        <p>pour un avenir durable et prospère.</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-gradient-to-r from-[#10b981] relative rounded-[16px] shrink-0 to-[#16a34a] w-full" data-name="Background">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.4px] items-start p-[24px] relative w-full">
          <Container43 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-white relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Background+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
          <EquipeVerdoSmart />
          <Background6 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[608px]" data-name="Container">
      <div className="absolute flex inset-[-15.48px_-15.91px] items-center justify-center">
        <div className="flex-none h-[624px] rotate-[357deg] w-[608px]">
          <div className="rounded-[24px] size-full" data-name="Gradient" />
        </div>
      </div>
      <BackgroundShadow1 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[64px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container45 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[120.4px] py-[96px] relative w-full">
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[55.5px] text-center text-white w-full">
        <p className="leading-[60px]">Contactez-Nous</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[22.3px] text-center text-emerald-50 w-full">
        <p className="leading-[32px]">Notre équipe est à votre écoute</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Container47 />
    </div>
  );
}

function Component36() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Component 1">
          <path d={svgPaths.p30d74800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center left-[calc(50%-0.005px)] rounded-[9999px] size-[64px] top-[32.8px] translate-x-[-50%]" data-name="Overlay">
      <Component36 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[32.8px] right-[32.8px] top-[112.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18.8px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Téléphone</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[32.8px] right-[32.8px] top-[152.8px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-center text-emerald-50 text-nowrap">
        <p className="leading-[28px] whitespace-pre">+237 690 123 456</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.1)] relative rounded-[16px] self-stretch shrink-0 w-[405.33px]" data-name="Component 6">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Overlay />
      <Heading12 />
      <Container49 />
    </div>
  );
}

function Component37() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Component 1">
          <path d={svgPaths.p3cc2c7f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p4344e00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center left-[calc(50%-0.01px)] rounded-[9999px] size-[64px] top-[32.8px] translate-x-[-50%]" data-name="Overlay">
      <Component37 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[32.8px] right-[32.8px] top-[112.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[19.2px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Email</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[32.8px] right-[32.8px] top-[152.8px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.6px] text-center text-emerald-50 text-nowrap">
        <p className="leading-[28px] whitespace-pre">contact@verdosmart.cm</p>
      </div>
    </div>
  );
}

function Component38() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.1)] relative rounded-[16px] self-stretch shrink-0 w-[405.34px]" data-name="Component 6">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Overlay1 />
      <Heading13 />
      <Container50 />
    </div>
  );
}

function Component39() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Component 1">
          <path d={svgPaths.p2e219d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p363c980} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center left-[calc(50%-0.005px)] rounded-[9999px] size-[64px] top-[32.8px] translate-x-[-50%]" data-name="Overlay">
      <Component39 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[32.8px] right-[32.8px] top-[112.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18.1px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Adresse</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[32.8px] right-[32.8px] top-[152.8px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.7px] text-center text-emerald-50 text-nowrap">
        <p className="leading-[28px] whitespace-pre">Yaoundé, Cameroun</p>
      </div>
    </div>
  );
}

function Component40() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.1)] relative rounded-[16px] self-stretch shrink-0 w-[405.33px]" data-name="Component 6">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Overlay2 />
      <Heading14 />
      <Container51 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Component5 />
      <Component38 />
      <Component40 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[29.1px] text-center text-gray-900 w-full">
        <p className="leading-[36px]">Demander un Devis Gratuit</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15.5px] text-gray-700 w-full">
        <p className="leading-[24px]">Nom Complet</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[296.8px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15.3px] text-gray-400 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Votre nom</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start justify-center pb-[15.2px] pt-[14.4px] px-[17.6px] relative w-full">
          <Container53 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[332px]" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15.1px] text-gray-700 w-full">
        <p className="leading-[24px]">Email</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[296.8px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15.1px] text-gray-400 text-nowrap">
        <p className="leading-[normal] whitespace-pre">votre@email.com</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start justify-center pb-[15.2px] pt-[14.4px] px-[17.6px] relative w-full">
          <Container55 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[332px]" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container56 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-gray-700 w-full">
        <p className="leading-[24px]">Téléphone</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[296.8px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.3px] text-gray-400 text-nowrap">
        <p className="leading-[normal] whitespace-pre">+237 690 000 000</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start justify-center pb-[15.2px] pt-[14.4px] px-[17.6px] relative w-full">
          <Container58 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[332px]" data-name="Container">
      <Label2 />
      <Input2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-gray-700 w-full">
        <p className="leading-[24px]">Service</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip px-0 py-[0.8px] relative shrink-0 w-[276.8px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.8px] text-black text-nowrap">
        <p className="leading-[21.6px] whitespace-pre">Services Agronomiques</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center pl-[21.6px] pr-[33.6px] py-[13.6px] relative w-full">
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[332px]" data-name="Container">
      <Label3 />
      <Options />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container61 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.5px] text-gray-700 w-full">
        <p className="leading-[24px]">Message</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[652.8px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-gray-400 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Décrivez votre projet...</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-auto size-full">
        <div className="box-border content-stretch flex items-start justify-center pb-[85.6px] pt-[13.6px] px-[17.6px] relative w-full">
          <Container63 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container64() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5.6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Textarea />
    </div>
  );
}

function Component41() {
  return (
    <div className="bg-gradient-to-r from-[#10b981] relative rounded-[12px] shrink-0 to-[#16a34a] w-full" data-name="Component 3">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[32px] py-[16px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-center text-white">
            <p className="leading-[28px]">Envoyer la Demande</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Form">
      <Container57 />
      <Container62 />
      <Container64 />
      <Component41 />
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-start max-w-[768px] overflow-clip p-[40px] relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[768px]" data-name="Background+Shadow">
      <Heading15 />
      <Form />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container52 />
      <BackgroundShadow2 />
    </div>
  );
}

function Section4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[120.4px] py-[96px] relative w-full">
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function Component42() {
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

function Background7() {
  return (
    <div className="box-border content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0" data-name="Background">
      <Component42 />
    </div>
  );
}

function Margin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-[12px] pr-0 py-0 relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28.5px] text-nowrap text-white">
        <p className="leading-[36px] whitespace-pre">VerdoSmart</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Background7 />
      <Margin />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[29.25px] not-italic relative shrink-0 text-[16.9px] text-gray-400 w-full">
        <p className="mb-0">{`L'innovation au service de l'agriculture. Solutions agronomiques et`}</p>
        <p>technologiques pour une agriculture durable et performante.</p>
      </div>
    </div>
  );
}

function Component43() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d={svgPaths.p27196000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component6() {
  return (
    <a className="bg-gray-800 box-border content-stretch cursor-pointer flex flex-col items-start overflow-visible p-[12px] relative rounded-[8px] self-stretch shrink-0" data-name="Component 7" href="#">
      <Component43 />
    </a>
  );
}

function Component44() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d={svgPaths.p2063a800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component45() {
  return (
    <a className="bg-gray-800 box-border content-stretch cursor-pointer flex flex-col h-[48px] items-start overflow-visible p-[12px] relative rounded-[8px] shrink-0" data-name="Component 7" href="#">
      <Component44 />
    </a>
  );
}

function LinkMargin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center pl-[16px] pr-0 py-0 relative self-stretch shrink-0" data-name="Link:margin">
      <Component45 />
    </div>
  );
}

function Component46() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d={svgPaths.p5b6b900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component47() {
  return (
    <a className="bg-gray-800 box-border content-stretch cursor-pointer flex flex-col h-[48px] items-start overflow-visible p-[12px] relative rounded-[8px] shrink-0" data-name="Component 7" href="#">
      <Component46 />
    </a>
  );
}

function LinkMargin1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center pl-[16px] pr-0 py-0 relative self-stretch shrink-0" data-name="Link:margin">
      <Component47 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Component6 />
      <LinkMargin />
      <LinkMargin1 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[616px]" data-name="Container">
      <Container66 />
      <Container67 />
      <Container68 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18.6px] text-white w-full">
        <p className="leading-[28px]">Liens Rapides</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Component 8">
      <a className="[white-space-collapse:collapse] cursor-pointer flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5px] text-gray-400 text-nowrap" href="#accueil">
        <p className="leading-[28px] whitespace-pre">Accueil</p>
      </a>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Component7 />
    </div>
  );
}

function Component48() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Component 8">
      <a className="[white-space-collapse:collapse] cursor-pointer flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5px] text-gray-400 text-nowrap" href="#services">
        <p className="leading-[28px] whitespace-pre">Services</p>
      </a>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Component48 />
    </div>
  );
}

function Component49() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Component 8">
      <a className="[white-space-collapse:collapse] cursor-pointer flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5px] text-gray-400 text-nowrap" href="#produits">
        <p className="leading-[28px] whitespace-pre">Produits</p>
      </a>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Component49 />
    </div>
  );
}

function Component50() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Component 8">
      <a className="[white-space-collapse:collapse] cursor-pointer flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5px] text-gray-400 text-nowrap" href="#apropos">
        <p className="leading-[28px] whitespace-pre">À Propos</p>
      </a>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Component50 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[284px]" data-name="Container">
      <Heading3 />
      <List2 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18.4px] text-white w-full">
        <p className="leading-[28px]">Contact</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-gray-400 w-full">
        <p className="leading-[28px]">+237 690 123 456</p>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.6px] text-gray-400 w-full">
        <p className="leading-[28px]">contact@verdosmart.cm</p>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.7px] text-gray-400 w-full">
        <p className="leading-[28px]">Yaoundé, Cameroun</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item12 />
      <Item13 />
      <Item14 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[284px]" data-name="Container">
      <Heading16 />
      <List3 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-gray-400 text-nowrap">
        <p className="leading-[28px] whitespace-pre">© 2025 VerdoSmart. Tous droits réservés.</p>
      </div>
    </div>
  );
}

function Component51() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Component 8">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-gray-400 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Confidentialité</p>
      </div>
    </div>
  );
}

function Component52() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0" data-name="Component 8">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-gray-400 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Conditions</p>
      </div>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center pl-[24px] pr-0 py-0 relative self-stretch shrink-0" data-name="Link:margin">
      <Component52 />
    </div>
  );
}

function Component53() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0" data-name="Component 8">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-gray-400 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Mentions Légales</p>
      </div>
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center pl-[24px] pr-0 py-0 relative self-stretch shrink-0" data-name="Link:margin">
      <Component53 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Component51 />
      <LinkMargin2 />
      <LinkMargin3 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="box-border content-stretch flex items-center justify-between pb-0 pt-[32.8px] px-0 relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-800 border-solid inset-0 pointer-events-none" />
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <HorizontalBorder />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-gray-900 relative shrink-0 w-full" data-name="Footer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[120.4px] py-[64px] relative w-full">
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start min-h-[677.6px] relative shrink-0 w-full" data-name="Background">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

function Component54() {
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

function Background9() {
  return (
    <div className="box-border content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0" data-name="Background">
      <Component54 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-[12px] pr-0 py-0 relative shrink-0" data-name="Margin">
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',_sans-serif] font-bold from-[#059669] justify-center leading-[0] not-italic relative shrink-0 text-[28.5px] text-nowrap to-[#16a34a]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[36px] whitespace-pre">VerdoSmart</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Background9 />
      <Margin1 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 9">
      <a className="[white-space-collapse:collapse] cursor-pointer flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-gray-700 text-nowrap" href="#accueil">
        <p className="leading-[28px] whitespace-pre">Accueil</p>
      </a>
    </div>
  );
}

function Component55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 9">
      <a className="[white-space-collapse:collapse] cursor-pointer flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-gray-700 text-nowrap" href="#services">
        <p className="leading-[28px] whitespace-pre">Services</p>
      </a>
    </div>
  );
}

function LinkMargin4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-[40px] pr-0 py-0 relative shrink-0" data-name="Link:margin">
      <Component55 />
    </div>
  );
}

function Component56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 9">
      <a className="[white-space-collapse:collapse] cursor-pointer flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-gray-700 text-nowrap" href="#produits">
        <p className="leading-[28px] whitespace-pre">Produits</p>
      </a>
    </div>
  );
}

function LinkMargin5() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-[40px] pr-0 py-0 relative shrink-0" data-name="Link:margin">
      <Component56 />
    </div>
  );
}

function Component57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 9">
      <a className="[white-space-collapse:collapse] cursor-pointer flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-gray-700 text-nowrap" href="#apropos">
        <p className="leading-[28px] whitespace-pre">À Propos</p>
      </a>
    </div>
  );
}

function LinkMargin6() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-[40px] pr-0 py-0 relative shrink-0" data-name="Link:margin">
      <Component57 />
    </div>
  );
}

function Component58() {
  return (
    <div className="bg-gradient-to-r box-border content-stretch flex flex-col from-[#10b981] items-center justify-center px-[28px] py-[12px] relative rounded-[12px] shrink-0 to-[#16a34a]" data-name="Component 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-center text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Contactez-nous</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-[40px] pr-0 py-0 relative shrink-0" data-name="Button:margin">
      <Component58 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Component8 />
      <LinkMargin4 />
      <LinkMargin5 />
      <LinkMargin6 />
      <ButtonMargin />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Container77 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.95)] box-border content-stretch flex flex-col items-start left-0 px-[152.4px] py-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[1520.8px]" data-name="Nav">
      <Container78 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <Nav />
      <Background8 />
    </div>
  );
}