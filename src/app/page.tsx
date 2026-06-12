import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Nav */}
      <nav className="bg-navy px-6 py-4 flex items-center justify-between">
        <div className="text-white font-bold text-lg tracking-tight">
          On<span className="text-accent">Concilia</span>
        </div>
        <a
          href="#beta"
          className="bg-brand hover:bg-brand-hover text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          Quiero el acceso beta
        </a>
      </nav>

      {/* Hero */}
      <section className="bg-navy px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full text-xs font-medium text-blue-300 px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
          Beta cerrada — 20 lugares disponibles
        </div>

        <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight max-w-2xl mx-auto mb-5 text-balance">
          ¿Seguís haciendo la conciliación bancaria{" "}
          <em className="text-accent not-italic">en Excel?</em>
        </h1>

        <p className="text-slate-300 max-w-lg mx-auto text-base leading-relaxed mb-8">
          OnConcilia importa el extracto de tu banco, cruza los movimientos y
          genera el reporte listo para entregar. En minutos, no en horas.
        </p>

        <LeadForm variant="hero" />

        <p className="text-slate-dark text-xs mt-3">
          Acceso gratuito por 60 días · Sin tarjeta de crédito
        </p>
      </section>

      {/* Para quién */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-2">
            Para quién
          </p>
          <h2 className="text-navy text-2xl font-bold mb-8 tracking-tight">
            El cierre de mes no debería ser un caos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg mb-3">
                🏢
              </div>
              <h3 className="font-semibold text-navy text-sm mb-1">
                Pymes de servicios y retail
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                1 a 3 personas en administración que cierran el mes con Excel.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-lg mb-3">
                📊
              </div>
              <h3 className="font-semibold text-navy text-sm mb-1">
                Estudios contables
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Múltiples clientes, múltiples cuentas. Un solo panel para todo.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-lg mb-3">
                🏪
              </div>
              <h3 className="font-semibold text-navy text-sm mb-1">
                Franquicias y cadenas
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Varios locales, varias cuentas. El problema escala con cada uno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-white px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-2">
            Cómo funciona
          </p>
          <h2 className="text-navy text-2xl font-bold mb-8 tracking-tight">
            Tres pasos, sin instalación
          </h2>

          <div className="flex flex-col divide-y divide-slate-100">
            {[
              {
                n: "1",
                title: "Importás el extracto bancario",
                desc: "CSV o Excel de cualquier banco argentino — BNA, Santander, Galicia, BBVA, Macro y más.",
              },
              {
                n: "2",
                title: "OnConcilia lo cruza automáticamente",
                desc: "Normaliza las columnas, categoriza los movimientos y detecta las diferencias sin que toques nada.",
              },
              {
                n: "3",
                title: "Descargás el reporte listo para entregar",
                desc: "PDF o Excel con las diferencias marcadas. Solo revisás lo que no cuadra.",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 py-5 items-start">
                <div className="w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="beta" className="bg-navy px-6 py-16 text-center">
        <h2 className="text-white text-2xl font-bold tracking-tight mb-3">
          Beta cerrada — 20 lugares
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          Acceso gratuito por 60 días. A cambio, 30 minutos de feedback.
        </p>

        <div className="flex justify-center gap-6 mb-8">
          {["Sin instalar nada", "Sin tarjeta", "Sin compromiso"].map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-slate-400 text-xs">
              <span className="text-accent font-bold">✓</span>
              {item}
            </span>
          ))}
        </div>

        <LeadForm variant="cta" />
      </section>

      {/* Footer */}
      <footer className="bg-navy border-t border-white/10 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-slate-600 text-xs">
          OnConcilia · Paraná, Entre Ríos, Argentina
        </p>
        <p className="text-slate-600 text-xs">
          guillermo@onconcilia.com
        </p>
      </footer>

    </main>
  );
}
