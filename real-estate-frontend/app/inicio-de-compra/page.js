'use client';

export default function InicioDeCompraPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-4 py-12">
      <div className="mx-auto w-full max-w-5xl section-stack">
        <header className="relative min-h-[360px] overflow-hidden rounded-3xl bg-slate-950/60 p-8 text-white shadow-2xl md:min-h-[440px]">
          <div className="absolute inset-0">
            <img
              src="/images/spanish.png"
              alt="Inicio de compra"
              className="framed-image h-full w-full object-contain"
            />
            <div className="absolute inset-0 bg-slate-950/55" />
          </div>
          <div className="relative select-none">
            <p className="text-base font-bold uppercase tracking-[0.3em] text-white/85">
              Baxter Property Solutions
            </p>
          </div>
        </header>

        <section className="rounded-3xl bg-white p-10 text-gray-700 shadow-xl">
          <h2 className="heading-lg text-gray-900">
            Tu proceso de compra — paso a paso
          </h2>
          <div className="mt-6 space-y-5 body-copy text-gray-700">
            <p>
              <span className="font-semibold">Paso 1: Consulta inicial (15–30 min)</span>{' '}
              Hablamos de tu meta, zona ideal, presupuesto y cronograma. Te explico cómo funciona todo en español.
            </p>
            <p>
              <span className="font-semibold">Paso 2: Preaprobación con un prestamista</span>{' '}
              Te conecto con prestamistas de confianza para conocer tu poder de compra. Aquí definimos tu rango real y tu pago estimado.
            </p>
            <p>
              <span className="font-semibold">Paso 3: Plan de búsqueda (lista de deseos)</span>{' '}
              Definimos lo “necesario vs. deseado” (habitaciones, escuelas, commute, etc.) y activamos alertas para nuevas casas.
            </p>
            <p>
              <span className="font-semibold">Paso 4: Tours y selección inteligente</span>{' '}
              Vemos propiedades, comparamos pros/cons y elegimos la mejor opción. Te ayudo a identificar señales de alerta.
            </p>
            <p>
              <span className="font-semibold">Paso 5: Oferta y negociación</span>{' '}
              Preparo una oferta competitiva y negociamos: precio, costos de cierre, inspección y tiempos. Mi meta es proteger tu dinero.
            </p>
            <p>
              <span className="font-semibold">Paso 6: Inspección y contingencias</span>{' '}
              Coordinamos inspección, revisamos el reporte y negociamos reparaciones o créditos si aplica.
            </p>
            <p>
              <span className="font-semibold">Paso 7: Tasación y aprobación final</span>{' '}
              Tu banco ordena la tasación. Yo monitoreo fechas y documentos para que no haya retrasos.
            </p>
            <p>
              <span className="font-semibold">Paso 8: Cierre y entrega de llaves</span>{' '}
              Revisión final, firma y ¡listo! Te acompaño hasta que recibas tus llaves.
            </p>
            <p>
              <span className="font-semibold">Paso 9: Después del cierre (soporte real)</span>{' '}
              Si necesitas contratistas, garantía del hogar, cambios de dirección o recursos locales, aquí sigo.
            </p>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="/images/spanish1.PNG"
            alt="Inicio de compra en español"
            className="framed-image h-auto w-full object-cover"
          />
        </section>

        <div className="section-separator" />

        <section className="rounded-3xl bg-white p-10 text-gray-700 shadow-xl">
          <h2 className="heading-lg text-gray-900">
            Hablemos de tu plan y construyamos el camino hacia tu casa — sin estrés y con claridad.
          </h2>
          <p className="mt-4 body-copy text-gray-600">
            Completa el formulario y me pondré en contacto contigo lo antes posible.
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Número de teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label
                htmlFor="correo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="tu.correo@ejemplo.com"
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Cuéntame sobre tus necesidades de compra..."
              />
            </div>

            <button type="submit" className="w-full btn-primary">
              Enviar solicitud
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
