'use client';

import { useVardha } from '@/context/VardhaContext';
import { products } from '@/data/products';
import { useEffect } from 'react';

export const ClientInitializer = () => {
  const { setProducts } = useVardha();

  useEffect(() => {
    setProducts(products);
  }, []);

  return null;
};