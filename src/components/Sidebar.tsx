import { Button } from "@/components/ui/button";
import { Dumbbell, Salad, ScrollText, User } from "lucide-react";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import Link from "next/link";

type Sidebar = HTMLAttributes<HTMLDivElement>;

const sidebarConfig = [
  {
    section: "Dashboard",
    child: [
      {
        page: "Workout",
        icon: <Salad className="mr-2 h-4 w-4" />,
        link: "/dashboard/workout",
      },
      {
        page: "Exercises",
        icon: <Dumbbell className="mr-2 h-4 w-4" />,
        link: "/dashboard/Exercises",
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

export default function Sidebar({ className }: Sidebar) {
  const router = useRouter();
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        {sidebarConfig.map((sc) => {
          return (
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                {sc.section}
              </h2>
              <div className="space-y-1">
                {sc.child.map((cc) => {
                  return (
                    <Button
                      variant={
                        router.pathname === cc.link ? "secondary" : "ghost"
                      }
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href={cc.link}>
                        {cc.icon}
                        {cc.page}
                      </Link>
                    </Button>
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
