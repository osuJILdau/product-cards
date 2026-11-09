import Link from 'next/link';
import ProductGrid from '@/components/ProductGrid';

export default function CollectionPage() {
  return (
    <main className="mx-auto max-w-[1240px] px-4 pb-20 pt-8 sm:px-6 lg:pt-12">
      <Link className="text-sm text-[#005b85] hover:underline" href="/">
        ← На главную
      </Link>
      <h1 className="my-8 text-4xl font-bold text-[#0e283b]">Вся коллекция</h1>
      <section className="rounded-sm bg-[#fbebec] p-3 sm:p-4 lg:p-5" aria-label="Коллекция товаров">
        <ProductGrid />
      </section>
    </main>
  );
}
