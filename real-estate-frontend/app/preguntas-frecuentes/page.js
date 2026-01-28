'use client';

export default function PreguntasFrecuentesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-4 py-12">
      <div className="mx-auto w-full max-w-5xl space-y-10">
        <header className="rounded-3xl bg-white/10 p-10 text-white shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Baxter Property Solutions
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Preguntas Frecuentes
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/80">
            Respuestas claras para ayudarte a tomar decisiones con confianza.
          </p>
        </header>

        <section className="rounded-3xl bg-white p-10 text-gray-700 shadow-xl">
          <div className="space-y-6 text-sm text-gray-700">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                ¿Necesito mucho dinero para comprar casa?
              </h2>
              <p className="mt-2">
                No siempre. Depende del préstamo y tu situación. Te ayudo a conocer opciones reales.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                ¿Qué es preaprobación y por qué importa?
              </h2>
              <p className="mt-2">
                Es una evaluación del banco para decir cuánto puedes comprar. Te hace más competitivo al ofertar.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                ¿Cuánto tarda el proceso?
              </h2>
              <p className="mt-2">
                En promedio, de 30 a 60 días una vez bajo contrato, pero varía según tu caso.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                ¿Trabajas con compradores militares?
              </h2>
              <p className="mt-2">
                Sí. Entiendo reubicaciones y necesidades típicas de familias militares, y te acompaño con el proceso completo.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
