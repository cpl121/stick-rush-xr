'use client';
import Scene from '@/components/Scene';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="py-4 bg-slate-700 text-white flex items-center justify-center">
        <h1> STICK RUSH XR </h1>
      </header>
      <main className="flex-1 overflow-hidden">
        <Scene />
      </main>
      <footer className="w-full flex items-center justify-center border-t border-white py-4 text-gray-400">
        <a
          className="hover:underline hover:underline-offset-4"
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
