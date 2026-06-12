"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Estado = "idle" | "loading" | "success" | "error";

export default function LeadForm({ variant = "hero" }: { variant?: "hero" | "cta" }) {
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState<Estado>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setEstado("loading");
    setErrorMsg("");

    const supabase = createClient();
    const { error } = await supabase.from("leads").insert({
      email: email.toLowerCase().trim(),
      fuente: variant === "hero" ? "landing_hero" : "landing_cta",
    });

    if (error) {
      if (error.code === "23505") {
        // Email duplicado — lo tratamos como éxito
        setEstado("success");
      } else {
        setErrorMsg("Algo salió mal. Intentá de nuevo.");
        setEstado("error");
      }
    } else {
      setEstado("success");
      setEmail("");
    }
  }

  if (estado === "success") {
    return (
      <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-4 max-w-md mx-auto">
        <span className="text-accent text-xl">✓</span>
        <p className="text-white text-sm font-medium">
          ¡Listo! Te avisamos cuando abramos el acceso.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@empresa.com"
          disabled={estado === "loading"}
          className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand focus:bg-white/15 transition disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={estado === "loading"}
          className="bg-brand hover:bg-brand-hover text-white font-semibold text-sm px-5 py-3 rounded-xl transition disabled:opacity-50 whitespace-nowrap"
        >
          {estado === "loading" ? "Enviando..." : "Anotarme"}
        </button>
      </div>
      {estado === "error" && (
        <p className="text-red-400 text-xs mt-2 text-center">{errorMsg}</p>
      )}
    </form>
  );
}
