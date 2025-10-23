import svgPaths from "../imports/svg-rihjlsnlf2";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Sora',_sans-serif] font-bold justify-center not-italic relative shrink-0 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[55.5px] text-center text-gray-900 dark:text-white w-full">
        <p className="leading-[1.1]">Nos Services</p>
      </div>
    </div>
  );
}

function Subtitle() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[768px] relative shrink-0 w-full px-4" data-name="Container">
      <div className="flex flex-col font-['Inter',_sans-serif] font-normal justify-center not-italic relative shrink-0 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22.5px] text-center text-gray-600 dark:text-gray-300">
        <p className="leading-[1.5]">Des solutions complètes pour optimiser votre exploitation agricole</p>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Subtitle />
    </div>
  );
}

function AgronomyIcon() {
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

function ITIcon() {
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

function CheckIcon() {
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

interface ListItemProps {
  text: string;
}

function ListItem({ text }: ListItemProps) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="box-border content-stretch flex flex-col h-[24px] items-start pb-0 pl-0 pr-[12px] pt-[4px] relative shrink-0 w-[32px]">
        <CheckIcon />
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center not-italic relative shrink-0 text-[14px] sm:text-[14.6px] text-gray-700 dark:text-gray-300">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}

function AgronomyCard() {
  return (
    <a href="#services#services-agronomiques" className="relative rounded-[24px] w-full lg:w-[calc(50%-16px)] border border-emerald-100 dark:border-emerald-900 bg-white dark:bg-gray-800 h-auto transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-[1.02] hover:border-emerald-300 dark:hover:border-emerald-700 block" data-name="Component 4">
      <div className="box-border content-stretch flex flex-col p-[32px] sm:p-[36px] md:p-[41.6px] relative w-full h-full">
        <div className="content-stretch flex items-center justify-center rounded-[16px] size-[56px] sm:size-[64px] mb-[20px] sm:mb-[24px] bg-gradient-to-r from-[#10b981] to-[#16a34a]" data-name="Background">
          <AgronomyIcon />
        </div>
        
        <div className="content-stretch flex flex-col mb-[16px] sm:mb-[20px]" data-name="Heading 3">
          <div className="flex flex-col font-['Sora',_sans-serif] font-bold justify-center not-italic relative shrink-0 text-[24px] sm:text-[26px] md:text-[28.2px] text-gray-900 dark:text-white">
            <p className="leading-[1.3]">Services Agronomiques</p>
          </div>
        </div>
        
        <div className="content-stretch flex flex-col mb-[24px] sm:mb-[28px] md:mb-[32px]" data-name="Container">
          <div className="flex flex-col font-['Inter',_sans-serif] font-normal justify-center not-italic relative shrink-0 text-[15px] sm:text-[16px] md:text-[16.5px] text-gray-600 dark:text-gray-300 leading-[1.75]">
            <p className="mb-0">Conseils personnalisés pour optimiser vos cultures. Analyse de sols,</p>
            <p>plans de fertilisation, et stratégies de protection des cultures.</p>
          </div>
        </div>
        
        <div className="content-stretch flex flex-col gap-[12px] items-start w-full" data-name="List">
          <ListItem text="Analyse et diagnostic des sols" />
          <ListItem text="Plans de fertilisation personnalisés" />
          <ListItem text="Suivi et accompagnement terrain" />
          <ListItem text="Formation et conseil technique" />
        </div>
      </div>
    </a>
  );
}

function ITCard() {
  return (
    <a href="#services#solutions-informatiques" className="relative rounded-[24px] w-full lg:w-[calc(50%-16px)] border border-green-100 dark:border-green-900 bg-white dark:bg-gray-800 h-auto transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-[1.02] hover:border-green-300 dark:hover:border-green-700 block" data-name="Component 4">
      <div className="box-border content-stretch flex flex-col p-[32px] sm:p-[36px] md:p-[41.6px] relative w-full h-full">
        <div className="content-stretch flex items-center justify-center rounded-[16px] size-[56px] sm:size-[64px] mb-[20px] sm:mb-[24px] bg-gradient-to-r from-[#10b981] to-[#16a34a]" data-name="Background">
          <ITIcon />
        </div>
        
        <div className="content-stretch flex flex-col mb-[16px] sm:mb-[20px]" data-name="Heading 3">
          <div className="flex flex-col font-['Sora',_sans-serif] font-bold justify-center not-italic relative shrink-0 text-[24px] sm:text-[26px] md:text-[28.9px] text-gray-900 dark:text-white">
            <p className="leading-[1.3]">Solutions Informatiques</p>
          </div>
        </div>
        
        <div className="content-stretch flex flex-col mb-[24px] sm:mb-[28px] md:mb-[32px]" data-name="Container">
          <div className="flex flex-col font-['Inter',_sans-serif] font-normal justify-center not-italic relative shrink-0 text-[15px] sm:text-[16px] md:text-[16.7px] text-gray-600 dark:text-gray-300 leading-[1.75]">
            <p className="mb-0">Technologies de pointe pour une agriculture connectée. Capteurs</p>
            <p>IoT, logiciels de gestion, et analyse de données.</p>
          </div>
        </div>
        
        <div className="content-stretch flex flex-col gap-[12px] items-start w-full" data-name="List">
          <ListItem text="Capteurs IoT et surveillance en temps réel" />
          <ListItem text="Logiciels de gestion d'exploitation" />
          <ListItem text="Analyse de données et reporting" />
          <ListItem text="Support technique et maintenance" />
        </div>
      </div>
    </a>
  );
}

function ServiceCards() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[24px] sm:gap-[28px] md:gap-[32px] items-stretch justify-center relative shrink-0 w-full" data-name="Container">
      <AgronomyCard />
      <ITCard />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <div className="bg-white dark:bg-gray-900 relative w-full transition-colors duration-300" data-name="Section" id="services">
      <div className="w-full">
        <div className="box-border content-stretch flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-[120.4px] py-[64px] sm:py-[80px] md:py-[96px] relative w-full">
          <div className="content-stretch flex flex-col gap-[48px] sm:gap-[64px] md:gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full">
            <SectionHeader />
            <ServiceCards />
          </div>
        </div>
      </div>
    </div>
  );
}
