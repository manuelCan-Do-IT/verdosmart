import imgEquipeVerdoSmart from "figma:asset/7cd4938accc0662070471fbf6f67c16974e8bc60.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[60px] not-italic relative shrink-0 text-[58px] text-gray-900 w-full">
        <p className="mb-0">À Propos de</p>
        <p>VerdoSmart</p>
      </div>
    </div>
  );
}

function Container() {
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

function Container1() {
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

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[32.3px] text-emerald-600 w-full">
        <p className="leading-[40px]">500+</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-gray-700 w-full">
        <p className="leading-[24px]">Exploitations suivies</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-emerald-50 box-border content-stretch flex flex-col gap-[8px] items-start left-0 p-[24.8px] right-[316px] rounded-[16px] top-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-emerald-100 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-green-600 w-full">
        <p className="leading-[40px]">15+</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.8px] text-gray-700 w-full">
        <p className="leading-[24px]">{`Ans d'expérience`}</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex flex-col gap-[8px] items-start left-[316px] p-[24.8px] right-0 rounded-[16px] top-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-green-100 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[33.3px] text-emerald-600 w-full">
        <p className="leading-[40px]">98%</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-gray-700 w-full">
        <p className="leading-[24px]">Satisfaction client</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="absolute bg-emerald-50 box-border content-stretch flex flex-col gap-[8px] items-start left-0 p-[24.8px] right-[316px] rounded-[16px] top-[145.6px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-emerald-100 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[34.3px] text-green-600 w-full">
        <p className="leading-[40px]">24/7</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15.1px] text-gray-700 w-full">
        <p className="leading-[24px]">Support disponible</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex flex-col gap-[8px] items-start left-[316px] p-[24.8px] right-0 rounded-[16px] top-[145.6px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-green-100 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[275.8px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[23.4px] items-start relative shrink-0 w-[608px]" data-name="Container">
      <Heading />
      <Container />
      <Container1 />
      <Container10 />
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

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[17.2px] text-white w-full">
        <p className="leading-[28px]">Notre Mission</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[14.8px] text-white w-full">
        <p className="mb-0">{`Rendre l'agriculture de précision accessible à tous les agriculteurs`}</p>
        <p>pour un avenir durable et prospère.</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-gradient-to-r from-[#10b981] relative rounded-[16px] shrink-0 to-[#16a34a] w-full" data-name="Background">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.4px] items-start p-[24px] relative w-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Background+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
          <EquipeVerdoSmart />
          <Background />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[608px]" data-name="Container">
      <div className="absolute flex inset-[-15.48px_-15.91px] items-center justify-center">
        <div className="flex-none h-[624px] rotate-[357deg] w-[608px]">
          <div className="rounded-[24px] size-full" data-name="Gradient" />
        </div>
      </div>
      <BackgroundShadow />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[64px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container14 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-white relative size-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[120.4px] py-[96px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}