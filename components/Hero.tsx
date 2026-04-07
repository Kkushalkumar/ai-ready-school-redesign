export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-16 md:grid-cols-2 md:pt-24">
      <div>
        <p className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
          India’s First Complete AI Ecosystem for Schools
        </p>

        <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
          Prepare Your School for the AI Era
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-300">
          One connected platform for students, teachers, AI tools, innovation labs, and school infrastructure.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-full bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-400">
            Book Free Demo
          </button>

          <button className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:bg-white/10">
            Explore Products
          </button>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
          <span>10,000+ Students</span>
          <span>50+ Schools</span>
          <span>4 Week Setup</span>
        </div>
      </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-xl font-semibold">Cypher</h3>
          <p className="mt-2 text-sm text-gray-400">AI companion for students</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-blue-500/10 p-5">
          <h3 className="text-xl font-semibold">Morpheus</h3>
          <p className="mt-2 text-sm text-gray-400">AI assistant for teachers</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-purple-500/10 p-5">
          <h3 className="text-xl font-semibold">Zion</h3>
          <p className="mt-2 text-sm text-gray-400">AI tools for classrooms</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-xl font-semibold">NEO + Matrix</h3>
          <p className="mt-2 text-sm text-gray-400">Innovation lab + infrastructure</p>
        </div>
      </div>
    </section>
  )
}