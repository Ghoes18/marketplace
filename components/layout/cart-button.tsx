import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function CartButton() {
  return (
    <Link href={`/cart`} className="flex items-center justify-center gap-2">
      <ShoppingCart size="1.5em" className="font-extrabold" />
      (30,00€) (4)
    </Link>
  );
}