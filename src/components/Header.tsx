
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";

export function Header() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Mevcut kullanıcı oturumunu kontrol et
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Auth state değişikliklerini dinle
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = () => {
    navigate("/auth");
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Çıkış yapıldı",
        description: "Başarıyla çıkış yaptın, görüşürüz!",
      });
      navigate("/auth");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Hata",
        description: "Çıkış yapılırken bir sorun oluştu",
      });
    }
  };

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
          {user ? (
            <>
              <div className="text-sm">
                {user.user_metadata.username || user.email}
              </div>
              <Button variant="outline" onClick={handleLogout}>
                Çıkış Yap
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={handleLogin}>
                Giriş Yap
              </Button>
              <Button 
                onClick={handleLogin}
                className="bg-youtube-red hover:bg-youtube-red/90"
              >
                Başla
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
