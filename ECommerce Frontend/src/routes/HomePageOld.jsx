import { Search, ShoppingBag, User } from "lucide-react";
import Link from "react-router-dom";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HomePage() {
  const [quantity, setQuantity] = useState("10");

  const products = [
    {
      id: 1,
      name: "VID Perfect Pear",
      price: 149,
      pricePerUnit: "29,80 kr/st",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "VID Perfect Pear",
      price: 149,
      pricePerUnit: "29,80 kr/st",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "VID Perfect Pear",
      price: 149,
      pricePerUnit: "29,80 kr/st",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "VID Perfect Pear",
      price: 149,
      pricePerUnit: "29,80 kr/st",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              SnusDirekt
            </Link>
            <div className="flex items-center gap-4">
              <button aria-label="Search" className="p-2">
                <Search className="h-5 w-5" />
              </button>
              <button aria-label="Shopping cart" className="p-2">
                <ShoppingBag className="h-5 w-5" />
              </button>
              <button aria-label="User account" className="p-2">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <nav className="bg-[#6366f1]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-2">
              <div className="flex gap-6">
                <Link
                  href="/products"
                  className="text-white hover:text-gray-200"
                >
                  Alla Produkter
                </Link>
                <Link
                  href="/best-sellers"
                  className="text-white hover:text-gray-200"
                >
                  Bäst säljare
                </Link>
                <Link href="/news" className="text-white hover:text-gray-200">
                  Nyheter
                </Link>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span>Sverige</span>
                <img
                  src="/placeholder.svg"
                  alt="Swedish flag"
                  className="h-5 w-8"
                  width={32}
                  height={20}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-yellow-400">
          <div className="container mx-auto px-4 py-12">
            <div className="relative">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  BURSTING WITH FLAVOR
                </h1>
                <div className="flex gap-8">
                  {/* Icon placeholders */}
                  <div className="w-12 h-12 bg-white/20 rounded-full" />
                  <div className="w-12 h-12 bg-white/20 rounded-full" />
                  <div className="w-12 h-12 bg-white/20 rounded-full" />
                  <div className="w-12 h-12 bg-white/20 rounded-full" />
                </div>
              </div>
              <div className="absolute right-0 bottom-0 hidden md:block">
                <img
                  src="/placeholder.svg"
                  alt="Product display"
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="bg-white/90 py-2 text-center text-sm">
            Denna produkt innehåller nikotin som är ett mycket
            beroendeframkallande ämne.
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-[#6366f1] text-white p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Snabb leverans</h3>
              <p>1-2 dagar inom Sverige</p>
            </div>
            <div className="bg-[#6366f1] text-white p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Bäst-pris garanti</h3>
              <p>Pris matching</p>
            </div>
            <div className="bg-[#6366f1] text-white p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Säker betalning</h3>
              <p>Allt sker via Stripe</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg p-4 shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-auto mb-4"
                />
                <h3 className="font-medium mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="font-bold">{product.price} kr</div>
                    <div className="text-sm text-gray-500">
                      ({product.pricePerUnit})
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select value={quantity} onValueChange={setQuantity}>
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="Quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 st</SelectItem>
                      <SelectItem value="20">20 st</SelectItem>
                      <SelectItem value="30">30 st</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="flex-1 bg-red-500 hover:bg-red-600">
                    KÖP
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
