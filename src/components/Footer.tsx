
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-youtube-red to-beast-blue p-1 rounded-md">
              <span className="text-white font-bold">TRIZMA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              MrBeast Stratejileri &copy; {new Date().getFullYear()}
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Fazıl İşler ve TRIZMA-AI + NotebookLM İşbirliği ile hazırlanmıştır
          </p>
        </div>
        <div className="flex gap-4 md:gap-6">
          <Link to="/stratejiler" className="text-sm font-medium hover:underline">
            Stratejiler
          </Link>
          <Link to="/egitim" className="text-sm font-medium hover:underline">
            Eğitim İçeriği
          </Link>
          <Link to="/araclar" className="text-sm font-medium hover:underline">
            Araçlar
          </Link>
          <Link to="/hakkinda" className="text-sm font-medium hover:underline">
            Hakkında
          </Link>
        </div>
      </div>
    </footer>
  );
}
