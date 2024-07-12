// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-600 text-white min-h-screen flex flex-col items-center justify-between p-24">
      <Head>
        <title>Novads.ai</title>
        <meta name="description" content="Discover the first AI-powered ad creation tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full bg-purple-400 rounded-full flex justify-between items-center py-4 px-8">
        <div className="text-2xl font-bold">NOVADS.AI</div>
        <nav className="flex space-x-8">
          <a href="#" className="hover:underline">Lorem</a>
          <a href="#" className="hover:underline">Lorem</a>
          <a href="#" className="hover:underline">Lorem</a>
        </nav>
        <button className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-800">
          Get Started
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-6">
          Discover the first <span className="text-purple-500">AI-powered</span> ad creation tool
        </h1>
        <p className="text-lg mb-8">
          Turn your words into the most beautiful ads. With Novads.ai, generate your next creatives from your thoughts.
        </p>
        <button className="bg-purple-700 text-white py-3 px-6 rounded-full text-lg hover:bg-purple-800 mb-8">
          Get Started
        </button>
       
      </main>

      <footer className="w-full py-4 text-center">
        <p>© 2024 Novads.ai. All rights reserved.</p>
      </footer>
    </div>
  );
}
