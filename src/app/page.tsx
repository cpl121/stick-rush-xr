'use client';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        STICK RUSH XR
        <button
            onClick={() => {alert('Entering VR...');}}
            className="bg-[#000] text-[#fff] rounded-[8px] px-[16px] py-[8px] text-[16px] font-bold hover:bg-[#111] transition-colors duration-200 ease-in-out"
        >
            Enter VR
        </button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
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