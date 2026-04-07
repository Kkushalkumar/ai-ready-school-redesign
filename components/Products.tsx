import { products } from '@/data/products'

export default function Products() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-300">
          Product Ecosystem
        </p>

        <h2 className="text-3xl font-bold md:text-5xl">
          Everything Schools Need to Adopt AI
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Five connected products designed for students, teachers, and school leadership.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-400/40"
          >
            <h3 className="text-2xl font-semibold">{product.name}</h3>
            <p className="mt-3 text-gray-400">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}