<<<<<<< HEAD
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'
import { Sparkles, Code, Brain, Globe, Database, Cpu, ArrowRight } from 'lucide-react'

const TOPICS = [
  { id: 'web-dev', label: 'Web Development', icon: Globe, color: 'bg-blue-500' },
  { id: 'ai', label: 'Artificial Intelligence', icon: Brain, color: 'bg-purple-500' },
  { id: 'dsa', label: 'Data Structures', icon: Database, color: 'bg-emerald-500' },
  { id: 'backend', label: 'Backend Systems', icon: Cpu, color: 'bg-orange-500' },
  { id: 'react', label: 'React & Next.js', icon: Code, color: 'bg-cyan-500' },
  { id: 'ux', label: 'User Experience', icon: Sparkles, color: 'bg-pink-500' },
]

export default function OnboardingPage() {
  const [name, setLocalName] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const { setTopics, setStreak, setName } = useStore()
  const router = useRouter()

  const toggleTopic = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    )
  }

  const handleStart = () => {
    if (selected.length === 0 || !name.trim()) return
    setName(name.trim())
    setTopics(selected)
    setStreak(1) // Start their streak!
    router.push('/dashboard')
  }
=======
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import { supabaseService } from "@/lib/supabaseService";
import {
  Sparkles,
  Code,
  Brain,
  Globe,
  Database,
  Cpu,
  ArrowRight,
} from "lucide-react";

const TOPICS = [
  {
    id: "web-dev",
    label: "Web Development",
    icon: Globe,
    color: "bg-orange-500",
    shadow: "shadow-orange-600/30",
  },
  {
    id: "ai",
    label: "Artificial Intelligence",
    icon: Brain,
    color: "bg-orange-500",
    shadow: "shadow-orange-500/30",
  },
  {
    id: "dsa",
    label: "Data Structures",
    icon: Database,
    color: "bg-orange-600",
    shadow: "shadow-orange-400/30",
  },
  {
    id: "backend",
    label: "Backend Systems",
    icon: Cpu,
    color: "bg-orange-500",
    shadow: "shadow-orange-500/30",
  },
  {
    id: "react",
    label: "React & Next.js",
    icon: Code,
    color: "bg-orange-500",
    shadow: "shadow-orange-300/30",
  },
  {
    id: "ux",
    label: "User Experience",
    icon: Sparkles,
    color: "bg-orange-600",
    shadow: "shadow-orange-200/30",
  },
];

export default function OnboardingPage() {
  const [name, setLocalName] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setTopics, setStreak, setName, setXP } = useStore();
  const router = useRouter();

  const toggleTopic = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
    );
  };

  const handleStart = async () => {
    if (selected.length === 0 || !name.trim()) return;

    setLoading(true);
    setError("");

    try {
      const trimmedName = name.trim();
      const existingUser = await supabaseService.getUserByName(trimmedName);

      if (existingUser) {
        // Load saved data (account recovery)
        setName(existingUser.name);
        setXP(existingUser.xp);
        setStreak(existingUser.streak);
        setTopics(existingUser.topics);
      } else {
        // Create new user
        await supabaseService.createUser(trimmedName, selected);
        setName(trimmedName);
        setTopics(selected);
        setStreak(1);
        setXP(0);
      }

      router.push("/dashboard");
    } catch (err: any) {
      console.error("Onboarding error:", err);
      console.error("Error details:", JSON.stringify(err, null, 2));
      if (err.code === "23505") {
        setError("This name is already taken. Please try another name.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
>>>>>>> axdeep-ui-new

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
<<<<<<< HEAD
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em]"
=======
            className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-semibold uppercase tracking-[0.2em]"
>>>>>>> axdeep-ui-new
          >
            Personalize Your Path
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
<<<<<<< HEAD
            className="text-5xl md:text-7xl font-black text-white leading-tight"
          >
            What fuels your <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">curiosity?</span>
=======
            className="text-5xl md:text-7xl font-semibold text-white leading-tight"
          >
            What fuels your <br />
            <span className="text-orange-500">curiosity?</span>
>>>>>>> axdeep-ui-new
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
<<<<<<< HEAD
            className="text-muted-foreground text-lg font-medium"
=======
            className="text-gray-400 text-lg font-medium"
>>>>>>> axdeep-ui-new
          >
            First, tell us your name, then pick what fuels your curiosity.
          </motion.p>
        </div>

<<<<<<< HEAD
        <motion.div 
=======
        <motion.div
>>>>>>> axdeep-ui-new
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setLocalName(e.target.value)}
<<<<<<< HEAD
            className="w-full px-8 py-6 rounded-[2rem] bg-white/5 border-2 border-white/10 text-white text-xl font-bold focus:border-primary focus:outline-none focus:bg-white/10 transition-all text-center"
=======
            className="w-full px-8 py-6 rounded-xl bg-gray-900/40 border-2 border-gray-700 text-white text-xl font-semibold focus:border-orange-500 focus:outline-none focus:bg-gray-900/60 transition-all text-center"
>>>>>>> axdeep-ui-new
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {TOPICS.map((topic, i) => {
<<<<<<< HEAD
            const isSelected = selected.includes(topic.id)
            const Icon = topic.icon
=======
            const isSelected = selected.includes(topic.id);
            const Icon = topic.icon;
>>>>>>> axdeep-ui-new
            return (
              <motion.button
                key={topic.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
<<<<<<< HEAD
                transition={{ delay: 0.4 + (i * 0.05) }}
                onClick={() => toggleTopic(topic.id)}
                className={`group relative p-8 rounded-[2.5rem] border-2 transition-all duration-300 text-left overflow-hidden ${
                  isSelected 
                    ? 'border-primary bg-primary/10 shadow-2xl shadow-primary/20 translate-y-[-4px]' 
                    : 'border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 hover:translate-y-[-2px]'
                }`}
              >
                {isSelected && (
                  <motion.div 
                    layoutId="topic-bg"
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" 
                  />
                )}
                <div className={`w-14 h-14 rounded-2xl ${topic.color} flex items-center justify-center mb-6 shadow-lg shadow-${topic.color.split('-')[1]}-500/20 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-lg font-extrabold text-white leading-tight">{topic.label}</h3 >
                <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Select to follow</p>
              </motion.button>
            )
=======
                transition={{ delay: 0.4 + i * 0.05 }}
                onClick={() => toggleTopic(topic.id)}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 text-left overflow-hidden ${
                  isSelected
                    ? "border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/20 translate-y-[-4px]"
                    : "border-gray-700 bg-gray-900/20 hover:bg-gray-900/40 hover:border-gray-600"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="topic-bg"
                    className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent pointer-events-none"
                  />
                )}
                <div
                  className={`w-14 h-14 rounded-xl ${topic.color} flex items-center justify-center mb-6 ${topic.shadow} group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  {topic.label}
                </h3>
                <p className="text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Select to follow
                </p>
              </motion.button>
            );
>>>>>>> axdeep-ui-new
          })}
        </div>

        <div className="flex justify-center pt-8">
<<<<<<< HEAD
=======
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-semibold"
            >
              {error}
            </motion.div>
          )}
>>>>>>> axdeep-ui-new
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
<<<<<<< HEAD
            disabled={selected.length === 0 || !name.trim()}
            className={`px-12 py-5 rounded-full font-black text-xl transition-all flex items-center gap-3 ${
              selected.length > 0 && name.trim()
                ? 'bg-primary text-white glow shadow-2xl shadow-primary/40' 
                : 'bg-white/5 text-muted-foreground cursor-not-allowed border border-white/5'
            }`}
          >
            Launch My Path
=======
            disabled={selected.length === 0 || !name.trim() || loading}
            className={`px-12 py-5 rounded-xl font-semibold text-xl transition-all flex items-center gap-3 shadow-lg ${
              selected.length > 0 && name.trim() && !loading
                ? "bg-orange-500 text-white hover:bg-orange-600 shadow-orange-500/30"
                : "bg-gray-800/40 text-gray-400 cursor-not-allowed border border-gray-700"
            }`}
          >
            {loading ? "Launching..." : "Launch My Path"}
>>>>>>> axdeep-ui-new
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> axdeep-ui-new
}
