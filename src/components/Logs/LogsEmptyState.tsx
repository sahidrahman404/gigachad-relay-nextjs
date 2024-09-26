import { Notebook } from "lucide-react";
import { LinkButton } from "../ReactAriaUI/LinkButton";
import Head from "next/head";

function LogsEmptyState() {
  return (
    <div>
      <Head>
        <title>Logs - Wellup</title>
        <meta property="og:title" content="Logs - Wellup" key="title" />
      </Head>
      <div className="flex flex-col items-center gap-y-4 mt-10">
        <Notebook size={48} strokeWidth={1} />
        <div className="text-center">
          <h2 className="font-semibold">Logs not found</h2>
          <p className="text-muted-foreground">
            Get started by starting a new routine
          </p>
        </div>
        <LinkButton href="/dashboard/routines">Start Routine</LinkButton>
      </div>
    </div>
  );
}

export { LogsEmptyState };
