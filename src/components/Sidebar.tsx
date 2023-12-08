import { Dumbbell, Salad, ScrollText, User } from "lucide-react";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/ReactAriaUI/LinkButton";
import { useRouter } from "next/router";

type SidebarProps = HTMLAttributes<HTMLDivElement>;

const sidebarConfig = [
  {
    section: "Dashboard",
    child: [
      {
        page: "Routines",
        icon: <Salad className="mr-2 h-4 w-4" />,
        link: "/dashboard/routines",
      },
      {
        page: "Exercises",
        icon: <Dumbbell className="mr-2 h-4 w-4" />,
        link: "/dashboard/exercises",
      },
    ],
  },
  {
    section: "Account",
    child: [
      {
        page: "Logs",
        icon: <ScrollText className="mr-2 h-4 w-4" />,
        link: "/accounts/logs",
      },
      {
        page: "Profile",
        icon: <User className="mr-2 h-4 w-4" />,
        link: "/accounts/profiles",
      },
    ],
  },
];

export default function Sidebar({ className }: SidebarProps) {
  const router = useRouter();
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4 sticky top-0">
        {sidebarConfig.map((sc) => {
          return (
            <div className="px-3 py-2" key={sc.section}>
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                {sc.section}
              </h2>
              <div className="space-y-1">
                {sc.child.map((cc) => {
                  return (
                    <LinkButton
                      key={cc.page}
                      variant={
                        router.pathname.includes(cc.page.toLowerCase())
                          ? "secondary"
                          : "ghost"
                      }
                      className="w-full justify-start"
                      href={cc.link}
                    >
                      {cc.icon}
                      {cc.page}
                    </LinkButton>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
