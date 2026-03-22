<<<<<<< HEAD
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Trophy, BookOpen, Settings, Zap, Boxes } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { href: '/mystery-box', label: 'Rewards', icon: Boxes },
  { href: '/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 h-full glass border-r border-white/10 flex flex-col p-6 hidden md:flex">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center glow">
          <Zap className="text-white w-6 h-6 fill-white" />
        </div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          Go2X Learn
        </h1>
=======
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Trophy,
  BookOpen,
  Settings,
  Zap,
  Boxes,
  InfinityIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { href: "/mystery-box", label: "Rewards", icon: Boxes },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-full bg-[#111111] border-r border-gray-800 flex flex-col p-6 hidden md:flex">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
          <InfinityIcon className="text-white w-6 h-6" />
        </div>
        <h1 className="text-xl font-semibold text-white">Go2X Learn</h1>
>>>>>>> axdeep-ui-new
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
<<<<<<< HEAD
          const isActive = pathname === item.href
          const Icon = item.icon
=======
          const isActive = pathname === item.href;
          const Icon = item.icon;
>>>>>>> axdeep-ui-new
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
<<<<<<< HEAD
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-muted-foreground hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 transition-transform duration-200 group-hover:scale-110",
                isActive ? "text-primary" : "text-muted-foreground"
              )} />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/10">
          <p className="text-xs text-primary font-semibold mb-1 uppercase tracking-wider">Pro Plan</p>
          <p className="text-sm text-white font-medium mb-3">Unlock AI Tutoring</p>
          <button className="w-full py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-bold transition-colors shadow-lg shadow-primary/20">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  )
=======
                isActive
                  ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
                  : "text-gray-400 hover:bg-gray-800/40 hover:text-white",
              )}
            >
              <Icon
                className={cn(
                  "w-5 h-5 transition-transform duration-200 group-hover:scale-110",
                  isActive ? "text-orange-500" : "text-gray-400",
                )}
              />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
>>>>>>> axdeep-ui-new
}
