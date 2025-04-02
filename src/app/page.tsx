'use client';
import Scene from '@/components/Scene';

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        STICK RUSH XR
        <Scene />
      </main>
      <footer className=" w-full row-start-3 flex items-center justify-center border-t border-[#eaeaea] pt-4 text-[#666]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/cpl121"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hidden sm:inline">cpl121.eth</span>
        </a>
      </footer>
    </div>
  );
}