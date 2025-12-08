'use client';

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
  Dispatch,
  useState,
  useMemo,
} from 'react';

/* -------------------------------------
   PRODUCT TYPES
-------------------------------------- */
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
  rating: number;
  productDetails: {
    material: string;
    fit: string;
    care: string[];
    durability: string;
  };
  size: string[];
  isNew?: boolean;
}

/* -------------------------------------
   CART TYPES
-------------------------------------- */
export interface VardhaItem extends Product {
  quantity: number;
}

interface VardhaState {
  items: VardhaItem[];
  total: number;
}

type VardhaAction =
  | { type: 'ADD_TO_CART'; product: Product }
  | { type: 'REMOVE_FROM_CART'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' };

/* -------------------------------------
   CONTEXT SHAPE
-------------------------------------- */
interface VardhaContextType {
  state: VardhaState;
  dispatch: Dispatch<VardhaAction>;

  // NEW: Global product list
  products: Product[];
  setProducts: (p: Product[]) => void;

  // NEW: Search
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  filteredProducts: Product[];
}

/* -------------------------------------
   CONTEXT
-------------------------------------- */
const VardhaContext = createContext<VardhaContextType | null>(null);

/* -------------------------------------
   CART REDUCER (no changes)
-------------------------------------- */
function cartReducer(state: VardhaState, action: VardhaAction): VardhaState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(
        (item) => item.id === action.product.id
      );

      const updatedItems = existingItem
        ? state.items.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.items, { ...action.product, quantity: 1 }];

      return {
        items: updatedItems,
        total: updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    }

    case 'REMOVE_FROM_CART': {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.productId
      );
      return {
        items: updatedItems,
        total: updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    }

    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items
        .map((item) =>
          item.id === action.productId
            ? { ...item, quantity: Math.max(0, action.quantity) }
            : item
        )
        .filter((item) => item.quantity > 0);

      return {
        items: updatedItems,
        total: updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    default:
      return state;
  }
}

/* -------------------------------------
   PROVIDER
-------------------------------------- */
export function VardhaProvider({ children }: { children: ReactNode }) {
  // Load cart from localStorage
  const initialState: VardhaState =
    typeof window !== 'undefined'
      ? JSON.parse(
          localStorage.getItem('vardhaState') || '{"items":[],"total":0}'
        )
      : { items: [], total: 0 };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // NEW: All Products
  const [products, setProducts] = useState<Product[]>([]);

  // NEW: Search bar text
  const [searchQuery, setSearchQuery] = useState('');

  // NEW: Derived filtered products
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    return products.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  // Persist cart
  useEffect(() => {
    localStorage.setItem('vardhaState', JSON.stringify(state));
  }, [state]);

  return (
    <VardhaContext.Provider
      value={{
        state,
        dispatch,
        products,
        setProducts,
        searchQuery,
        setSearchQuery,
        filteredProducts,
      }}
    >
      {children}
    </VardhaContext.Provider>
  );
}

/* -------------------------------------
   HOOK
-------------------------------------- */
export function useVardha() {
  const context = useContext(VardhaContext);
  if (!context) {
    throw new Error('useVardha must be used within VardhaProvider');
  }
  return context;
}