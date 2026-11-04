
"use client";

import { useState } from "react";
import {
  Gamepad2, Users, MessageCircle, Heart,
  Menu, X, Shield, Trophy, ArrowRight
} from "lucide-react";

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <main className="min-h-screen bg-[#090911] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#090911]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-3">
            <div className="rounded-xl bg-violet-600 p-2">
              <Gamepad2 size={25}/>
            </div>
            <span className="text-2xl font-black tracking-wider">
              DE<span className="text-violet-500">-RP</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-gray-400 hover:text-white">Features</a>
            <a href="#community" className="text-gray-400 hover:text-white">Community</a>
            <a href="#about" className="text-gray-400 hover:text-white">Über uns</a>
          </div>

          <div className="hidden gap-3 md:flex">
            <a href="/login" className="rounded-xl px-5 py-3 text-gray-300 hover:bg-white/10">Login</a>
            <a href="/register" className="rounded-xl bg-violet-600 px-5 py-3 font-bold hover:bg-violet-500">Registrieren</a>
          </div>

          <button className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? <X/> : <Menu/>}
          </button>
        </div>

        {menu && (
          <div className="flex flex-col gap-4 border-t border-white/10 p-6 md:hidden">
            <a href="#features">Features</a>
            <a href="#community">Community</a>
            <a href="/login">Login</a>
            <a href="/register">Registrieren</a>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden px-6 py-32 text-center">
        <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"/>
        <div className="relative mx-auto max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            <span className="h-2 w-2 rounded-full bg-green-400"/>
            Willkommen bei DE-RP
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-8xl">
            DEINE WELT.
            <br/>
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              DEINE COMMUNITY.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Triff neue Gamer, teile deine Erlebnisse und werde Teil
            einer Community, in der Gaming verbindet.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/register" className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-8 py-4 font-bold hover:bg-violet-500">
              Jetzt beitreten <ArrowRight size={19}/>
            </a>
            <a href="#features" className="rounded-xl border border-white/10 px-8 py-4 font-bold hover:bg-white/5">
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="font-bold text-violet-400">DE-RP FEATURES</p>
          <h2 className="mt-3 text-4xl font-black">Alles an einem Ort.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {[
            [Users, "Community", "Lerne andere Gamer kennen."],
            [MessageCircle, "Live Chat", "Kommuniziere mit Mitgliedern."],
            [Heart, "Beiträge & Likes", "Teile deine Gaming-Momente."],
            [Trophy, "Gaming", "Werde Teil unserer Community."]
          ].map(([Icon, title, description]: any, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-violet-500/50 hover:bg-violet-500/5">
              <Icon size={32} className="text-violet-400"/>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="community" className="px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-950/60 to-blue-950/30 p-12">
          <Shield size={42} className="mx-auto text-violet-400"/>
          <h2 className="mt-6 text-3xl font-black">Werde Teil von DE-RP</h2>
          <p className="mt-4 text-gray-400">Dein Platz in unserer Gaming-Community wartet auf dich.</p>
          <a href="/register" className="mt-8 inline-block rounded-xl bg-violet-600 px-8 py-4 font-bold hover:bg-violet-500">
            Kostenlos registrieren
          </a>
        </div>
      </section>

      <footer id="about" className="border-t border-white/10 px-6 py-10 text-center text-sm text-gray-500">
        <p className="font-black text-white">DE-RP</p>
        <p className="mt-3">© 2026 DE-RP Community. Alle Rechte vorbehalten.</p>
      </footer>
    </main>
  );
}
