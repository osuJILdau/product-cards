'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [added, setAdded] = useState(false);

  return (
    <article className="flex h-full w-full flex-col rounded-[28px] bg-white p-4 shadow-sm">
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[20px] bg-[#f0f3f4]">
        <Image
          src={product.image}
          alt={product.title}
          width={496}
          height={504}
          className="h-full w-full object-contain"
        />
      </div>

      <h2 className="mt-5 text-[21px] font-bold leading-6 text-[#102b3c]">
        {product.title}
      </h2>
      <p className="mt-2 flex-1 text-[14px] leading-5 text-[#344753]">
        {product.description}
      </p>
      <p className="mt-3 text-[15px] font-medium text-[#142b3d]">
        {product.price.toLocaleString('ru-RU')} ₽
      </p>
      <button
        type="button"
        onClick={() => setAdded(!added)}
        className="mt-4 w-full rounded-full bg-[#005b85] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.04em] text-white transition-colors duration-200 hover:bg-[#004564] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005b85] sm:w-fit"
      >
        {added ? 'добавлено ✓' : 'в корзину'}
      </button>
    </article>
  );
}
