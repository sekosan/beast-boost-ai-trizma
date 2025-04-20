
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-36">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-beast-blue px-3 py-1 text-sm text-white">
                MrBeast Stratejileri
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                YouTube'da Başarının Sırrı
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Fazıl İşler'in analiz ettiği MrBeast stratejilerini uygulayarak içerik kanalınızı hızla büyütün.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-gradient-to-r from-beast-blue to-beast-green hover:from-beast-darkblue hover:to-beast-darkgreen text-white">
                <Link to="/stratejiler">Stratejileri Keşfet</Link>
              </Button>
              <Button variant="outline">
                <Link to="/dashboard">Demo Dashboard</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-beast-blue via-beast-green to-beast-yellow rounded-full opacity-30 blur-3xl"></div>
              <div className="relative h-full w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="bg-beast-blue h-2"></div>
                  <div className="flex-1 p-6">
                    <div className="h-24 w-24 bg-beast-yellow rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold">MB</span>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">Başarının 5 Anahtarı</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-6 h-6 rounded-full bg-beast-blue flex items-center justify-center text-white mr-2">1</span>
                        <span>Saplantılı Uzmanlık</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 rounded-full bg-beast-green flex items-center justify-center text-white mr-2">2</span>
                        <span>Doğru Ekiple Çalışma</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 rounded-full bg-beast-yellow flex items-center justify-center text-white mr-2">3</span>
                        <span>Viral Formüller</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 rounded-full bg-youtube-red flex items-center justify-center text-white mr-2">4</span>
                        <span>Algoritma Anlayışı</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 rounded-full bg-beast-darkblue flex items-center justify-center text-white mr-2">5</span>
                        <span>A/B Test Saplantısı</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
