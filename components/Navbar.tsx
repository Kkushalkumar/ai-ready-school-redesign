export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">AI Ready School</div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#products" className="text-sm text-gray-300 hover:text-white">Products</a>
          <a href="#why" className="text-sm text-gray-300 hover:text-white">Why Us</a>
          <a href="#testimonials" className="text-sm text-gray-300 hover:text-white">Schools</a>
          <button className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold hover:bg-blue-400">
            Book Demo
          </button>
        </div>

        <button className="md:hidden">☰</button>
      </nav>
    </header>
  )
}