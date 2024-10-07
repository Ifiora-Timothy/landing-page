import Navbar from "@/components/Navbar";
import React from "react";
import {
  Wallet,
  MessageSquare,
  Users,
  Grid,
  Bell,
  Settings,
  ExternalLink,
  UserCogIcon,
} from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <Navbar />

      <div className="min-h-screen bg-black">
        {/* Main Container */}
        <div className="max-w-4xl mx-auto p-4">
          {/* Profile Card */}
          <div className="rounded-xl bg-gradient-to-b from-gray-900 to-gray-950 border border-purple-900/20">
            {/* Header/Banner */}
            <div className="h-48 rounded-t-xl bg-gradient-to-r from-purple-900/40 via-purple-600/40 to-purple-900/40 relative">
              {/* Profile Picture */}
              <div className="absolute -bottom-16 left-8">
                <div className="w-32 h-32 rounded-full ring-4 ring-black bg-gradient-to-r from-purple-500 to-purple-700 p-1">
                  <Image
                    src="/potraits/josh.jpg"
                    alt="Profile"
                    fill
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Top right actions */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors">
                  <Bell size={20} className="text-purple-300" />
                </button>
                <button className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors">
                  <Settings size={20} className="text-purple-300" />
                </button>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-6 pt-20">
              {/* Profile Info */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-1">
                    CryptoWizard.3Lite
                  </h1>
                  <p className="text-purple-400 text-sm">
                    Solana Hackathon Participant
                  </p>
                </div>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm font-medium transition-colors">
                  Edit Profile <UserCogIcon className="sm:hidden" />
                </button>
              </div>

              {/* Wallet Connection */}
              <div className="mb-8 bg-gray-900 rounded-xl p-4 border border-purple-900/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Wallet className="text-purple-400" size={20} />
                    <span className="text-gray-300 font-medium">
                      Solana Wallet
                    </span>
                  </div>
                  <span className="text-green-400 text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Connected
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <code className="text-sm text-purple-300">7X6jY9...3Kp1</code>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-900 rounded-xl p-4 border border-purple-900/30">
                  <div className="flex items-center space-x-2 mb-2">
                    <MessageSquare size={16} className="text-purple-400" />
                    <span className="text-gray-400 text-sm">Messages</span>
                  </div>
                  <p className="text-2xl font-bold text-white">128</p>
                </div>
                <div className="bg-gray-900 rounded-xl p-4 border border-purple-900/30">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users size={16} className="text-purple-400" />
                    <span className="text-gray-400 text-sm">Connections</span>
                  </div>
                  <p className="text-2xl font-bold text-white">45</p>
                </div>
                <div className="bg-gray-900 rounded-xl p-4 border border-purple-900/30">
                  <div className="flex items-center space-x-2 mb-2">
                    <Grid size={16} className="text-purple-400" />
                    <span className="text-gray-400 text-sm">NFTs</span>
                  </div>
                  <p className="text-2xl font-bold text-white">12</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-900 rounded-xl p-4 border border-purple-900/30">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {[
                    { action: "Sent Message to @CryptoDev", time: "2m ago" },
                    { action: "Connected Wallet", time: "1h ago" },
                    { action: "Updated Profile", time: "2h ago" },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0"
                    >
                      <span className="text-gray-300">{activity.action}</span>
                      <span className="text-sm text-purple-400">
                        {activity.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
