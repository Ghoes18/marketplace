import { Store } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'} className="flex items-center justify-center gap-2 text-xl font-semibold text-gray-900">
      <Store className="w-8 h-8 text-violet-600" />
      <span>teste</span>
    </Link>
  )
}