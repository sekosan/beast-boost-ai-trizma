
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-youtube-red to-beast-blue p-1 rounded-md">
            <span className="text-white font-bold">TRIZMA</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">
            MrBeast İçerik Stratejileri
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:underline">
            Ana Sayfa
          </Link>
          <Link to="/stratejiler" className="text-sm font-medium hover:underline">
            Stratejiler
          </Link>
          <Link to="/egitim" className="text-sm font-medium hover:underline">
            Eğitim İçeriği
          </Link>
          <Link to="/araclar" className="text-sm font-medium hover:underline">
            Araçlar
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline">Giriş Yap</Button>
          <Button className="bg-youtube-red hover:bg-youtube-red/90">Başla</Button>
        </div>
      </div>
    </header>
  );
}
