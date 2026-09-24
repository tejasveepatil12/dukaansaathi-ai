"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [showVoiceFlow, setShowVoiceFlow] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 font-sans pb-10 relative">
      {/* Header with Voice Assistant */}
      <div className="bg-[#012B72] p-4 flex items-center justify-between shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner">
            <span className="text-xl font-extrabold text-[#012B72]">DS</span>
          </div>
          <div>
            <h2 className="text-white text-lg font-bold tracking-wide">DukaanSaathi</h2>
            <p className="text-[#00BAF2] text-xs font-semibold">Kirana Smart Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowVoiceFlow(true)}
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2 px-4"
          >
            <span className="text-xl">🎤</span>
            <span className="text-sm font-bold hidden sm:inline">Voice Command</span>
          </button>
          <Link href="/" className="text-white text-sm font-medium hover:text-[#00BAF2] transition-colors">
            Home
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6 mt-4">
        {/* Top Row: Sales & Customers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-[#00BAF2]">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Today's Sales</p>
                <p className="text-4xl font-bold text-[#012B72]">₹14,250</p>
              </div>
              <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">+18%</div>
            </div>
            <p className="text-sm text-gray-500 mt-4 font-medium">84 transactions completed today</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-[#012B72]">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Customer Footfall</p>
                <p className="text-4xl font-bold text-[#012B72]">112</p>
              </div>
              <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">Peak Hour Active</div>
            </div>
            <div className="flex gap-4 mt-4 text-sm font-medium">
              <span className="text-gray-600"><strong>78</strong> Regulars</span>
              <span className="text-green-600"><strong>34</strong> New Customers</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
            <h3 className="text-lg font-bold text-[#012B72] mb-4 flex items-center gap-2">
              <span className="text-2xl">🧠</span> DukaanSaathi AI Insights
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 text-blue-900 rounded-lg border border-blue-100 text-sm">
                <strong>Trend Alert:</strong> High demand for cold beverages due to weather. Consider moving stock to front coolers.
              </div>
              <div className="p-3 bg-orange-50 text-orange-900 rounded-lg border border-orange-100 text-sm">
                <strong>Inventory Warning:</strong> Aashirvaad Atta (5kg) and loose sugar will run out by tomorrow evening based on current sales velocity.
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-[#012B72] mb-4 flex items-center gap-2">
              <span className="text-2xl">📱</span> Quick Campaigns
            </h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-[#00BAF2] hover:bg-blue-50 transition-all text-sm group">
                <div className="font-bold text-gray-800 group-hover:text-[#012B72]">Festive SMS Blast</div>
                <div className="text-gray-500 mt-1">Send 10% off coupon to 150 inactive users</div>
              </button>
              <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-[#00BAF2] hover:bg-blue-50 transition-all text-sm group">
                <div className="font-bold text-gray-800 group-hover:text-[#012B72]">Restock Reminder</div>
                <div className="text-gray-500 mt-1">WhatsApp your top 20 monthly regulars</div>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#012B72] to-[#00BAF2] p-6 rounded-2xl shadow-md text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="text-2xl">🚀</span> Growth Opportunities
            </h3>
            <Link href="/chat" className="bg-white text-[#012B72] px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors shadow-sm">
              Discuss with AI
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
              <h4 className="font-bold mb-1 text-yellow-300">Bundle Suggestion</h4>
              <p className="text-sm text-blue-50">Merchandising bread & eggs together in the morning can increase average order value by ₹35.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
              <h4 className="font-bold mb-1 text-yellow-300">New Product Fit</h4>
              <p className="text-sm text-blue-50">Local competitors are seeing high margin returns on premium tea brands. Consider stocking a small test batch.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Assistant Overlay Modal */}
      {showVoiceFlow && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
            <div className="bg-[#012B72] p-4 flex justify-between items-center">
              <h3 className="text-white font-bold flex items-center gap-2">
                <span className="text-red-400 animate-pulse">●</span> DukaanSaathi Voice Processing
              </h3>
              <button onClick={() => setShowVoiceFlow(false)} className="text-white/70 hover:text-white font-bold">
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-5 bg-gray-50">
              <div className="bg-white p-3 rounded-lg border-l-4 border-gray-300 shadow-sm flex items-start gap-3">
                <span className="text-xl">📊</span>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Data</p>
                  <p className="text-sm font-semibold text-gray-800">Repeat customers down 15% this week.</p>
                </div>
              </div>

              <div className="flex justify-center text-gray-400">↓</div>

              <div className="bg-white p-3 rounded-lg border-l-4 border-yellow-400 shadow-sm flex items-start gap-3">
                <span className="text-xl">💡</span>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Insight & Decision</p>
                  <p className="text-sm font-semibold text-gray-800">Targeting customers inactive for 30+ days.</p>
                </div>
              </div>

              <div className="flex justify-center text-gray-400">↓</div>

              <div className="bg-white p-3 rounded-lg border-l-4 border-[#00BAF2] shadow-sm flex items-start gap-3">
                <span className="text-xl">⚙️</span>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Action & Execution</p>
                  <p className="text-sm font-semibold text-gray-800">Generated 10% comeback offer. Campaign sent via SMS.</p>
                </div>
              </div>

              <div className="flex justify-center text-gray-400">↓</div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200 shadow-sm flex items-start gap-3">
                <span className="text-xl">✅</span>
                <div>
                  <p className="text-xs text-green-700 font-bold uppercase">Result</p>
                  <p className="text-lg font-bold text-green-800">12 customers returned</p>
                  <p className="text-sm font-medium text-green-700">₹4,280 additional sales generated.</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white border-t border-gray-100 flex justify-end">
              <button 
                onClick={() => setShowVoiceFlow(false)}
                className="px-6 py-2 bg-[#012B72] text-white rounded-full text-sm font-bold hover:bg-blue-900 transition-colors"
              >
                Close Workflow
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}