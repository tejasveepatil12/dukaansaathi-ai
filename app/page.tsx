import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-[#012B72] to-[#00BAF2] font-sans">
      <div className="max-w-2xl w-full bg-white text-gray-800 rounded-3xl shadow-2xl p-10 text-center flex flex-col items-center">
        
        <div className="w-20 h-20 bg-[#012B72] rounded-full flex items-center justify-center shadow-inner mb-6">
          <span className="text-4xl font-extrabold text-white">DS</span>
        </div>
        
        <h1 className="text-4xl font-extrabold text-[#012B72] mb-4 tracking-tight">DukaanSaathi AI</h1>
        <p className="text-lg text-gray-500 mb-10 max-w-lg font-medium">
          Your intelligent merchant assistant. Manage inventory, analyze sales, and grow your business with seamless insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link href="/chat" className="px-8 py-4 bg-[#00BAF2] hover:bg-[#0096C7] text-white font-bold rounded-xl transition-all shadow-md text-lg w-full sm:w-auto">
            Open AI Chat
          </Link>
          <Link href="/dashboard" className="px-8 py-4 bg-white border-2 border-[#012B72] text-[#012B72] hover:bg-gray-50 font-bold rounded-xl transition-all shadow-md text-lg w-full sm:w-auto">
            View Analytics
          </Link>
        </div>
        
      </div>
    </main>
  );
}