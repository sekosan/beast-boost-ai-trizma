
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MetricTracker } from "@/components/metrics/MetricTracker";
import { MetricVisualizer } from "@/components/metrics/MetricVisualizer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart, PieChart, Camera, Star, Eye, TrendingUp, Users, Zap, Settings, Compass, Lock } from "lucide-react";

const Tools = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">MrBeast Stratejileri Araçları</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MrBeast stratejilerini kanalınıza uygulamanıza yardımcı olacak özel geliştirilen araçlar.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <MetricTracker />
            <MetricVisualizer />
          </div>

          <Tabs defaultValue="temel" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="temel">Temel Araçlar</TabsTrigger>
              <TabsTrigger value="optimizasyon">Optimizasyon</TabsTrigger>
              <TabsTrigger value="analiz">Analiz</TabsTrigger>
            </TabsList>
            <TabsContent value="temel" className="mt-6">
              <div className="space-y-6">
                <MetricTracker />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div className="p-2 bg-beast-blue rounded-md">
                          <LineChart className="h-6 w-6 text-white" />
                        </div>
                        <Badge>Aktif</Badge>
                      </div>
                      <CardTitle className="mt-4">Temel Metrik İzleyici</CardTitle>
                      <CardDescription>
                        Kanalınızın CTR, AVD ve AVP gibi temel metriklerini takip edin.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <ul className="space-y-2">
                          <li>• YouTube Analytics bağlantısı</li>
                          <li>• Metrik trend analizi</li>
                          <li>• Performans karşılaştırmaları</li>
                          <li>• Özelleştirilebilir panolar</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Araca Eriş</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div className="p-2 bg-beast-green rounded-md">
                          <BarChart className="h-6 w-6 text-white" />
                        </div>
                        <Badge>Aktif</Badge>
                      </div>
                      <CardTitle className="mt-4">Metrik Grafikleyici</CardTitle>
                      <CardDescription>
                        Metriklerinizi zaman içinde gösteren anlaşılır grafikler oluşturun.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <ul className="space-y-2">
                          <li>• İnteraktif zaman serisi grafikleri</li>
                          <li>• Çoklu metrik karşılaştırma</li>
                          <li>• İhraç edilebilir raporlar</li>
                          <li>• Özel zaman aralıkları</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Araca Eriş</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div className="p-2 bg-beast-yellow rounded-md">
                          <PieChart className="h-6 w-6 text-white" />
                        </div>
                        <Badge>Aktif</Badge>
                      </div>
                      <CardTitle className="mt-4">Strateji Bilgi Bankası</CardTitle>
                      <CardDescription>
                        MrBeast stratejileri ve prensipleri hakkında kapsamlı bilgiler.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <ul className="space-y-2">
                          <li>• Detaylı strateji açıklamaları</li>
                          <li>• Uygulama adımları</li>
                          <li>• Örnek vaka analizleri</li>
                          <li>• İndirilebilir kılavuzlar</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Araca Eriş</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="optimizasyon" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div className="p-2 bg-beast-blue rounded-md">
                        <Camera className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline">Yakında</Badge>
                    </div>
                    <CardTitle className="mt-4">Thumbnail Değerlendirici</CardTitle>
                    <CardDescription>
                      Thumbnail'lerinizi MrBeast prensipleriyle analiz edin.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• İnsan yüzü tespiti</li>
                        <li>• Duygusal ifade analizi</li>
                        <li>• Renk ve kontrast değerlendirmesi</li>
                        <li>• Mobil uyumluluk kontrolü</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled>
                      <Lock className="h-4 w-4 mr-2" /> Yakında
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div className="p-2 bg-beast-green rounded-md">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline">Yakında</Badge>
                    </div>
                    <CardTitle className="mt-4">Başlık Optimizasyon Motoru</CardTitle>
                    <CardDescription>
                      Dikkat çekici ve merak uyandıran başlıklar oluşturun.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Merak uyandırma faktörü analizi</li>
                        <li>• Anahtar kelime optimizasyonu</li>
                        <li>• A/B test desteği</li>
                        <li>• MrBeast tarzı başlık önerileri</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled>
                      <Lock className="h-4 w-4 mr-2" /> Yakında
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div className="p-2 bg-beast-yellow rounded-md">
                        <Eye className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline">Yakında</Badge>
                    </div>
                    <CardTitle className="mt-4">İzleyici Düşüş Tespit Edici</CardTitle>
                    <CardDescription>
                      Videolarınızdaki izleyici düşüş noktalarını belirleyin.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• İzleyici tutma grafiği analizi</li>
                        <li>• Kritik düşüş noktaları tespiti</li>
                        <li>• İyileştirme önerileri</li>
                        <li>• Video bölümü optimizasyonu</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled>
                      <Lock className="h-4 w-4 mr-2" /> Yakında
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analiz" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div className="p-2 bg-beast-blue rounded-md">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary">Geliştirme</Badge>
                    </div>
                    <CardTitle className="mt-4">Trend Keşfedici</CardTitle>
                    <CardDescription>
                      Viral olmuş YouTube videolarındaki ortak temaları analiz edin.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Viral içerik kategorileri analizi</li>
                        <li>• Trend takibi ve tahminleri</li>
                        <li>• Niş bazlı trend önerileri</li>
                        <li>• Trend adaptasyon rehberleri</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled>
                      <Lock className="h-4 w-4 mr-2" /> Geliştiriliyor
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div className="p-2 bg-beast-green rounded-md">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary">Geliştirme</Badge>
                    </div>
                    <CardTitle className="mt-4">Ekip ve İşbirliği Platformu</CardTitle>
                    <CardDescription>
                      Ekip üyelerini yönetin ve potansiyel işbirlikleri kurun.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Ekip görevlendirme araçları</li>
                        <li>• Performans takibi</li>
                        <li>• İçerik üretici eşleştirme</li>
                        <li>• İşbirliği yönetimi</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled>
                      <Lock className="h-4 w-4 mr-2" /> Geliştiriliyor
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div className="p-2 bg-beast-yellow rounded-md">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary">Geliştirme</Badge>
                    </div>
                    <CardTitle className="mt-4">AI Optimizasyon Asistanı</CardTitle>
                    <CardDescription>
                      Yapay zeka destekli thumbnail ve başlık önerileri alın.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• AI thumbnail tasarım önerileri</li>
                        <li>• Yüksek CTR başlık oluşturma</li>
                        <li>• İçerik iyileştirme önerileri</li>
                        <li>• Performans tahminleri</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled>
                      <Lock className="h-4 w-4 mr-2" /> Geliştiriliyor
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div className="p-2 bg-youtube-red rounded-md">
                        <Settings className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary">Geliştirme</Badge>
                    </div>
                    <CardTitle className="mt-4">Kişisel Strateji Danışmanı</CardTitle>
                    <CardDescription>
                      Kanalınıza özel uyarlanmış stratejik öneriler alın.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Kanal performans analizi</li>
                        <li>• Kişiselleştirilmiş büyüme planları</li>
                        <li>• İçerik stratejisi önerileri</li>
                        <li>• Hedef kitle optimizasyonu</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled>
                      <Lock className="h-4 w-4 mr-2" /> Geliştiriliyor
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div className="p-2 bg-beast-darkblue rounded-md">
                        <Compass className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary">Geliştirme</Badge>
                    </div>
                    <CardTitle className="mt-4">Rakip İzleyici</CardTitle>
                    <CardDescription>
                      Rakiplerinizin performansını ve stratejilerini analiz edin.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Rakip kanal analizi</li>
                        <li>• İçerik stratejisi karşılaştırması</li>
                        <li>• Rekabet avantajı belirleme</li>
                        <li>• Pazar konumlandırma önerileri</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled>
                      <Lock className="h-4 w-4 mr-2" /> Geliştiriliyor
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center bg-gradient-to-r from-beast-blue/10 to-beast-green/10 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Özel Araçlar İçin İletişime Geçin</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Kanalınızın özel ihtiyaçlarına yönelik geliştirilmiş araçlar ve stratejiler için bizimle iletişime geçin.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-beast-blue to-beast-green hover:from-beast-darkblue hover:to-beast-darkgreen text-white">
              İletişime Geç
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
