import { useRouter } from "next/router";
import { Button } from "./ReactAriaUI/Button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";
import { sidebarConfig } from "./Sidebar";
import { LinkButton, LinkButtonProps } from "./ReactAriaUI/LinkButton";
import { ReactNode, useState } from "react";
import Logo from "./common/Logo";

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 space-y-4">
        <Logo href="/" className="w-10 h-10 flex items-center space-x-2">
          <span className="font-bold">Wellup</span>
        </Logo>
        <div className="flex flex-col space-y-3">
          {sidebarConfig.map((sc) => {
            return (
              <div className="px-3 py-2" key={sc.section}>
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  {sc.section}
                </h2>
                <div className="space-y-1">
                  {sc.child.map((cc) => {
                    return (
                      <MobileLink
                        key={cc.page}
                        childSection={cc}
                        onOpenChange={setOpen}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkButtonProps {
  onOpenChange?: (open: boolean) => void;
  className?: string;
  childSection: {
    page: string;
    icon: ReactNode;
    link: string;
  };
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  childSection,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <LinkButton
      href={href}
      variant={
        router.pathname.includes(childSection.page.toLowerCase())
          ? "secondary"
          : "ghost"
      }
      onPress={() => {
        router.push(childSection.link);
        onOpenChange?.(false);
      }}
      className={cn("w-full justify-start", className)}
      {...props}
    >
      {childSection.icon}
      {childSection.page}
    </LinkButton>
  );
}

export { MobileNav };
