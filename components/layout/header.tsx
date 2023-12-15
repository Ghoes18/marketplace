import CartButton from "./cart-button";
import Logo from "./logo";
import UserNav from "./user-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container flex items-center justify-between px-4 py-2 mx-auto">
        <Logo />
        <div className="flex items-center justify-center space-x-4">
          <CartButton />
          <UserNav />
        </div>
      </div>
    </header>
  )
}