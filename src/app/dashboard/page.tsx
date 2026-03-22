<<<<<<< HEAD
'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'
import { EvolvingAvatar } from '@/components/EvolvingAvatar'
import { DiscussionFeed } from '@/components/DiscussionFeed'
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function DashboardPage() {
  const { xp, streak, addXP, name } = useStore()

  const handleCompleteTask = () => {
    addXP(25)
  }
=======
"use client";

import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";
import { EvolvingAvatar } from "@/components/EvolvingAvatar";
import { DiscussionFeed } from "@/components/DiscussionFeed";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function DashboardPage() {
  const { xp, streak, addXP, name } = useStore();

  const handleCompleteTask = () => {
    addXP(25);
  };
>>>>>>> axdeep-ui-new

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <header className="flex items-end justify-between">
        <div className="space-y-1">
<<<<<<< HEAD
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-4xl font-black text-white"
          >
            Welcome back, <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">{name || 'Pioneer'}</span>
          </motion.h2>
          <p className="text-muted-foreground font-medium">Your personalized learning path and community discussions.</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Daily Progress</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                animate={{ width: `${(xp % 100)}%` }}
                className="h-full bg-primary glow"
              />
            </div>
            <span className="text-xs font-bold text-white">{(xp % 100)}/100 XP</span>
=======
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-4xl font-semibold text-white"
          >
            Welcome back,{" "}
            <span className="bg-linear-to-l from-yellow-500 to-orange-500 bg-clip-text text-transparent font-semibold">
              {name || "Dreamer"}
            </span>
          </motion.h2>
          <p className="text-gray-400 font-medium">
            Your personalized learning path and community discussions.
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
            Daily Progress
          </p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
              <motion.div
                animate={{ width: `${xp % 100}%` }}
                className="h-full bg-orange-500 shadow-lg shadow-orange-500/40"
              />
            </div>
            <span className="text-xs font-medium text-white">
              {xp % 100}/100 XP
            </span>
>>>>>>> axdeep-ui-new
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-8">
<<<<<<< HEAD
          <div className="glass p-8 rounded-[2rem] flex items-center justify-center border-white/10 glow relative overflow-hidden">
            <EvolvingAvatar />
          </div>

          <div className="glass p-6 rounded-[2rem] border-white/10 space-y-4">
            <h3 className="font-bold text-lg text-white">Quick Actions</h3>
            <button 
              onClick={handleCompleteTask}
              className="w-full group flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-semibold text-white">Complete Daily AI Quiz</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full group flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 opacity-50 cursor-not-allowed">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-semibold text-white">Start Smart Session</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
=======
          <div className="bg-[#111111] p-8 rounded-2xl flex items-center justify-center border border-gray-800 shadow-lg relative overflow-hidden">
            <EvolvingAvatar />
          </div>

          <div className="bg-[#111111] p-6 rounded-2xl border border-gray-800 space-y-4 shadow-lg">
            <h3 className="font-semibold text-lg text-white">Quick Actions</h3>
            <button
              onClick={handleCompleteTask}
              className="w-full group flex items-center justify-between p-4 rounded-xl bg-gray-800/20 hover:bg-gray-800/40 transition-all border border-gray-700 hover:border-orange-500/40"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-white">
                  Complete Daily Quiz
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full group flex items-center justify-between p-4 rounded-xl bg-gray-800/20 hover:bg-gray-800/40 transition-all border border-gray-700 opacity-50 cursor-not-allowed">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium text-white">
                  Start Smart Session
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
>>>>>>> axdeep-ui-new
            </button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <DiscussionFeed />
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> axdeep-ui-new
}
