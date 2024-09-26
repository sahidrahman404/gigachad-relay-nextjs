import { MobileNav } from "./MobileNav";
import Logo from "./common/Logo";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="ml-4 h-14 flex items-center">
        <Logo
          href="/"
          className="hidden w-10 h-10 md:flex items-center space-x-2"
        >
          <span className="font-bold">Wellup</span>
        </Logo>
        <MobileNav />
      </div>
    </header>
  );
}

export { Header };
