import svgPaths from "../imports/svg-p65wea978j";
import LogoComponent from "./Logo";

function Logo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <LogoComponent size="md" variant="white" />
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[29.25px] not-italic relative shrink-0 text-[16.9px] text-gray-400 w-full">
        <p className="mb-0">{`L'innovation au service de l'agriculture. Solutions agronomiques et`}</p>
        <p>technologiques pour une agriculture durable et performante.</p>
      </div>
    </div>
  );
}

function TikTokIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InstagramIcon() {
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

function SocialLinks() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <a 
        className="bg-gray-800 box-border content-stretch cursor-pointer flex flex-col items-start overflow-visible p-[12px] relative rounded-[8px] self-stretch shrink-0 hover:bg-gray-700 transition-colors" 
        data-name="Component 7" 
        href="https://www.tiktok.com/@verdosmart?_t=ZN-90lci1WgcWk&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
      >
        <TikTokIcon />
      </a>
      <div className="box-border content-stretch flex flex-col items-start justify-center pl-[16px] pr-0 py-0 relative self-stretch shrink-0" data-name="Link:margin">
        <a 
          className="bg-gray-800 box-border content-stretch cursor-pointer flex flex-col h-[48px] items-start overflow-visible p-[12px] relative rounded-[8px] shrink-0 hover:bg-gray-700 transition-colors" 
          data-name="Component 7" 
          href="https://www.instagram.com/verdosmart?igsh=MTg2ZzZlanBobm9ncg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}

function BrandSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-full lg:w-[616px]" data-name="Container">
      <Logo />
      <Description />
      <SocialLinks />
    </div>
  );
}

function QuickLinksSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-full sm:w-[284px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
        <div className="flex flex-col font-['Sora',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18.6px] text-white w-full">
          <p className="leading-[28px]">Liens Rapides</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
          <div className="content-stretch flex items-start relative shrink-0" data-name="Component 8">
            <a className="[white-space-collapse:collapse] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5px] text-gray-400 text-nowrap hover:text-white transition-colors" href="#accueil">
              <p className="cursor-pointer leading-[28px] whitespace-pre">Accueil</p>
            </a>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
          <div className="content-stretch flex items-start relative shrink-0" data-name="Component 8">
            <a className="[white-space-collapse:collapse] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5px] text-gray-400 text-nowrap hover:text-white transition-colors" href="#services">
              <p className="cursor-pointer leading-[28px] whitespace-pre">Services</p>
            </a>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
          <div className="content-stretch flex items-start relative shrink-0" data-name="Component 8">
            <a className="[white-space-collapse:collapse] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5px] text-gray-400 text-nowrap hover:text-white transition-colors" href="#marketplace">
              <p className="cursor-pointer leading-[28px] whitespace-pre">Marketplace</p>
            </a>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
          <div className="content-stretch flex items-start relative shrink-0" data-name="Component 8">
            <a className="[white-space-collapse:collapse] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5px] text-gray-400 text-nowrap hover:text-white transition-colors" href="#contact">
              <p className="cursor-pointer leading-[28px] whitespace-pre">Contact</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-full sm:w-[284px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
        <div className="flex flex-col font-['Sora',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18.4px] text-white w-full">
          <p className="leading-[28px]">Contact</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
          <div className="flex flex-col font-['Inter',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-gray-400 w-full">
            <p className="leading-[28px]">+221 78 687 14 79</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.6px] text-gray-400 w-full">
            <p className="leading-[28px]">contact@verdosmart.com</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.7px] text-gray-400 w-full">
            <p className="leading-[28px]">Dakar, Sénégal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[32px] sm:gap-[40px] lg:gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BrandSection />
      <div className="content-stretch flex flex-col sm:flex-row gap-[32px] sm:gap-[48px] items-start w-full lg:w-auto">
        <QuickLinksSection />
        <ContactSection />
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="box-border content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px] pb-0 pt-[32.8px] px-0 relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-800 border-solid inset-x-0 top-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
        <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-gray-400">
          <p className="leading-[28px]">© 2025 VerdoSmart. Tous droits réservés.</p>
        </div>
      </div>
      <div className="content-stretch flex flex-wrap items-start gap-[24px] relative shrink-0" data-name="Container">
        <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Component 8">
          <a className="[white-space-collapse:collapse] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-gray-400 text-nowrap hover:text-white transition-colors">
            <p className="leading-[24px] whitespace-pre">Confidentialité</p>
          </a>
        </div>
        <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0" data-name="Component 8">
          <a className="[white-space-collapse:collapse] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5px] text-gray-400 text-nowrap" href="#">
            <p className="leading-[24px] whitespace-pre">Conditions</p>
          </a>
        </div>
        <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0" data-name="Component 8">
          <a className="[white-space-collapse:collapse] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.5px] text-gray-400 text-nowrap" href="#">
            <p className="leading-[24px] whitespace-pre">Mentions Légales</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-gray-900 relative w-full" data-name="Footer">
      <div className="w-full">
        <div className="box-border content-stretch flex flex-col items-start px-4 sm:px-8 md:px-12 lg:px-24 xl:px-[120.4px] py-[48px] sm:py-[56px] md:py-[64px] relative w-full">
          <div className="content-stretch flex flex-col gap-[40px] sm:gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
            <FooterContent />
            <BottomBar />
          </div>
        </div>
      </div>
    </div>
  );
}
