import imgEquipeVerdoSmart from "figma:asset/7cd4938accc0662070471fbf6f67c16974e8bc60.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Sora',_sans-serif] font-bold justify-center not-italic relative shrink-0 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[58px] text-gray-900 dark:text-white w-full">
        <p className="mb-0 leading-[1.1]">À Propos de</p>
        <p className="leading-[1.1]">VerdoSmart</p>
      </div>
    </div>
  );
}

function Description1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter',_sans-serif] font-normal justify-center not-italic relative shrink-0 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18.6px] text-gray-600 dark:text-gray-300 leading-[1.75]">
        <p className="mb-0">Depuis plus de 15 ans, VerdoSmart accompagne les agriculteurs</p>
        <p className="mb-0">dans leur transition vers une agriculture moderne et durable. Notre</p>
        <p className="mb-0">{`équipe d'agronomes et d'ingénieurs combine expertise`}</p>
        <p>traditionnelle et innovations technologiques.</p>
      </div>
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center not-italic relative shrink-0 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18.6px] text-gray-600 dark:text-gray-300 leading-[1.75]">
        <p className="mb-0">{`Nous croyons en une agriculture qui respecte l'environnement tout`}</p>
        <p className="mb-0">{`en optimisant les rendements. Nos solutions sur mesure s'adaptent à`}</p>
        <p>chaque exploitation, quelle que soit sa taille.</p>
      </div>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  bgColor: string;
  borderColor: string;
  valueColor: string;
}

function StatCard({ value, label, bgColor, borderColor, valueColor }: StatCardProps) {
  return (
    <div className={`relative ${bgColor} dark:bg-gray-800 box-border content-stretch flex flex-col gap-[8px] items-start p-[20px] sm:p-[24.8px] rounded-[16px] border ${borderColor} dark:border-gray-700 w-full transition-colors duration-300`} data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
        <div className={`flex flex-col font-['Sora',_sans-serif] font-bold justify-center not-italic relative shrink-0 text-[28px] sm:text-[32px] md:text-[34px] ${valueColor} dark:text-emerald-400 w-full`}>
          <p className="leading-[40px]">{value}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-col font-['Inter',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[13px] sm:text-[14.6px] text-gray-700 dark:text-gray-300 w-full">
          <p className="leading-[24px]">{label}</p>
        </div>
      </div>
    </div>
  );
}

function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-[16px] sm:gap-[20px] md:gap-[24px] relative shrink-0 w-full" data-name="Container">
      <StatCard
        value="500+"
        label="Exploitations suivies"
        bgColor="bg-emerald-50"
        borderColor="border-emerald-100"
        valueColor="text-emerald-600"
      />
      <StatCard
        value="15+"
        label="Ans d'expérience"
        bgColor="bg-green-50"
        borderColor="border-green-100"
        valueColor="text-green-600"
      />
      <StatCard
        value="98%"
        label="Satisfaction client"
        bgColor="bg-emerald-50"
        borderColor="border-emerald-100"
        valueColor="text-emerald-600"
      />
      <StatCard
        value="24/7"
        label="Support disponible"
        bgColor="bg-green-50"
        borderColor="border-green-100"
        valueColor="text-green-600"
      />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] sm:gap-[23.4px] items-start relative shrink-0 w-full lg:w-[608px]" data-name="Container">
      <Heading />
      <Description1 />
      <Description2 />
      <StatsGrid />
    </div>
  );
}

function TeamImage() {
  return (
    <div className="h-[300px] sm:h-[350px] md:h-[400px] max-w-full relative rounded-[16px] shrink-0 w-full" data-name="Équipe VerdoSmart">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="Équipe VerdoSmart travaillant dans les champs" className="absolute h-full left-1/2 -translate-x-1/2 max-w-none w-auto min-w-full object-cover" src={imgEquipeVerdoSmart} />
      </div>
    </div>
  );
}

function MissionCard() {
  return (
    <div className="bg-gradient-to-r from-[#10b981] relative rounded-[16px] shrink-0 to-[#16a34a] w-full" data-name="Background">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.4px] items-start p-[20px] sm:p-[24px] relative w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[16px] sm:text-[17.2px] text-white w-full">
              <p className="leading-[28px]">Notre Mission</p>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center not-italic relative shrink-0 text-[14px] sm:text-[14.8px] text-white leading-[1.75]">
              <p className="mb-0">{`Rendre l'agriculture de précision accessible à tous les agriculteurs`}</p>
              <p>pour un avenir durable et prospère.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full lg:w-[608px]" data-name="Container">
      <div className="bg-white dark:bg-gray-800 relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] shrink-0 w-full transition-colors duration-300" data-name="Background+Shadow">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex flex-col gap-[20px] sm:gap-[24px] items-start p-[24px] sm:p-[28px] md:p-[32px] relative w-full">
            <TeamImage />
            <MissionCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <div className="bg-white dark:bg-gray-900 relative w-full transition-colors duration-300" data-name="Section" id="apropos">
      <div className="w-full">
        <div className="box-border content-stretch flex flex-col items-start px-4 sm:px-8 md:px-12 lg:px-24 xl:px-[120.4px] py-[64px] sm:py-[80px] md:py-[96px] relative w-full">
          <div className="content-stretch flex flex-col lg:flex-row gap-[48px] sm:gap-[56px] md:gap-[64px] items-center lg:items-start justify-center relative shrink-0 w-full" data-name="Container">
            <LeftContent />
            <RightContent />
          </div>
        </div>
      </div>
    </div>
  );
}
