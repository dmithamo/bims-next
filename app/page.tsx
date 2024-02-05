import { AppLogo } from "@/ui/logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-around place-items-center p-24">
      <div>
        <AppLogo />
        <small className="text-slate-500 dark:text-gray-100">This is the landing page for bims. It will likely not last very long&trade;</small>
      </div>
    </main>
  );
}
