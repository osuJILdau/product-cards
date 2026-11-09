import Link from 'next/link';
import ProductGrid from '@/components/ProductGrid';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[1240px] px-4 pb-20 pt-8 sm:px-6 lg:pt-12">
      <h1 className="mb-11 text-[42px] font-bold leading-tight text-[#0e283b] sm:text-[46px]">
        Дизайн
      </h1>

      <section className="rounded-sm bg-[#fbebec] p-3 sm:p-4 lg:p-5" aria-label="Наши товары">
        <ProductGrid />
        <div className="mt-9 flex justify-center">
          <Link
            href="/collection"
            className="w-full rounded-full bg-[#005b85] px-10 py-3.5 text-center text-[12px] font-bold uppercase tracking-[0.04em] text-white transition-colors duration-200 hover:bg-[#004564] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005b85] sm:w-auto"
          >
            смотреть всю коллекцию
          </Link>
        </div>
      </section>
    </main>
  );
}
