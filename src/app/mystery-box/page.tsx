<<<<<<< HEAD
'use client'

import { MysteryBox } from '@/components/MysteryBox'
import { motion } from 'framer-motion'
import { Gift, Zap, TrendingUp } from 'lucide-react'
=======
"use client";

import { MysteryBox } from "@/components/MysteryBox";
import { motion } from "framer-motion";
import { Gift, Zap, TrendingUp } from "lucide-react";
>>>>>>> axdeep-ui-new

export default function RewardsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
<<<<<<< HEAD
        <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">Rewards Hub</h2>
        <p className="text-muted-foreground font-medium text-lg italic">Claim your daily rewards and boost your AI profile.</p>
=======
        <h2 className="text-4xl font-semibold text-white">Rewards Hub</h2>
        <p className="text-gray-400 font-medium text-lg">
          Claim your daily rewards and unlock special bonuses.
        </p>
>>>>>>> axdeep-ui-new
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MysteryBox />
<<<<<<< HEAD
        
        <div className="space-y-6">
          <div className="glass p-8 rounded-[2.5rem] border-white/10 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center border border-yellow-500/20">
              <Zap className="text-yellow-500 w-8 h-8 fill-yellow-500" />
            </div>
            <div>
              <h4 className="font-black text-xl text-white">XP Multiplier</h4>
              <p className="text-muted-foreground text-sm font-medium">Activate a 2x boost for 1 hour.</p>
            </div>
            <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-bold border border-white/5 transition-all">
=======

        <div className="space-y-6">
          <div className="bg-[#111111] p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center space-y-4 shadow-lg">
            <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
              <Zap className="text-orange-500 w-8 h-8 fill-orange-500" />
            </div>
            <div>
              <h4 className="font-semibold text-xl text-white">
                XP Multiplier
              </h4>
              <p className="text-gray-400 text-sm font-medium">
                Activate a 2x boost for 1 hour.
              </p>
            </div>
            <button className="w-full py-3 bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 rounded-xl text-sm font-semibold border border-orange-500/20 transition-all">
>>>>>>> axdeep-ui-new
              Coming Soon
            </button>
          </div>

<<<<<<< HEAD
          <div className="glass p-8 rounded-[2.5rem] border-white/10 flex flex-col items-center text-center space-y-4 opacity-50">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/20">
              <Gift className="text-blue-500 w-8 h-8" />
            </div>
            <div>
              <h4 className="font-black text-xl text-white">Streak Freeze</h4>
              <p className="text-muted-foreground text-sm font-medium">Protect your streak for 24 hours.</p>
            </div>
            <button className="w-full py-3 bg-white/5 cursor-not-allowed text-white rounded-xl text-sm font-bold border border-white/5 transition-all">
=======
          <div className="bg-[#111111] p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center space-y-4 opacity-50 shadow-lg">
            <div className="w-16 h-16 rounded-xl bg-gray-800/40 flex items-center justify-center border border-gray-700">
              <Gift className="text-blue-500 w-8 h-8" />
            </div>
            <div>
              <h4 className="font-semibold text-xl text-white">
                Streak Freeze
              </h4>
              <p className="text-gray-400 text-sm font-medium">
                Protect your streak for 24 hours.
              </p>
            </div>
            <button className="w-full py-3 bg-gray-800/20 cursor-not-allowed text-gray-400 rounded-xl text-sm font-semibold border border-gray-700 transition-all">
>>>>>>> axdeep-ui-new
              Locked
            </button>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> axdeep-ui-new
}
