<<<<<<< HEAD
'use client'

import { Settings as SettingsIcon } from 'lucide-react'
=======
"use client";

import { Settings as SettingsIcon } from "lucide-react";
>>>>>>> axdeep-ui-new

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
<<<<<<< HEAD
        <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">Settings</h2>
        <p className="text-muted-foreground font-medium text-lg italic">Calibrate your AI entity's parameters.</p>
      </div>

      <div className="glass p-12 rounded-[3rem] border-white/10 flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10">
          <SettingsIcon className="w-10 h-10 text-muted-foreground" />
        </div>
        <p className="text-white font-medium">Advanced settings are being calibrated by the AI...</p>
      </div>
    </div>
  )
=======
        <h2 className="text-4xl font-semibold text-white">Settings</h2>
        <p className="text-gray-400 font-medium text-lg">
          Manage your account preferences and learning settings.
        </p>
      </div>

      <div className="bg-[#111111] p-12 rounded-2xl border border-gray-800 flex flex-col items-center justify-center text-center space-y-6 shadow-lg">
        <div className="w-20 h-20 rounded-2xl bg-gray-900/40 flex items-center justify-center border border-gray-700">
          <SettingsIcon className="w-10 h-10 text-gray-400" />
        </div>
        <p className="text-white font-medium">
          Advanced settings are being calibrated by the AI...
        </p>
      </div>
    </div>
  );
>>>>>>> axdeep-ui-new
}
