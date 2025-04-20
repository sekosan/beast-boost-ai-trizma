import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, BookOpen, CheckCircle, Info, MousePointer } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const strategies = {
  "metrik-takibi": {
    title: "Temel Metriklerin Takibi ve Analizi",
    description: "YouTube Analytics'teki en kritik metrikleri anlamak ve takip etmek",
    content: `
      <p class="mb-4">MrBeast, içerik stratejisini sürekli olarak optimize etmek için temel YouTube metriklerini titizlikle takip eder. Bu metriklerin zaman içindeki değişimini anlamak, içerik performansınızı iyileştirmenin temel adımıdır.</p>
      
      <h3 class="text-lg font-bold mb-2">Takip Etmeniz Gereken Temel Metrikler:</h3>
      
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Tıklanma Oranı (CTR)</strong>: İzleyicilerin içeriğinizin önizlemesini (thumbnail ve başlık) gördükten sonra videoya tıklama oranı. MrBeast'in CTR değerleri genellikle %8-15 aralığındadır.</li>
        <li><strong>Ortalama İzlenme Süresi (AVD)</strong>: İzleyicilerin videonuzu ortalama ne kadar süre izledikleri. Bu, algoritmanın içeriğinizi ne kadar değerli bulduğunu belirleyen en önemli faktörlerden biridir.</li>
        <li><strong>Ortalama İzlenme Yüzdesi (AVP)</strong>: İzleyicilerin videonuzun ne kadarını izlediğini gösteren yüzde. MrBeast, videolarının en az %40-50'sinin izlenmesini hedefler.</li>
      </ul>
      
      <div class="bg-beast-blue/10 p-4 rounded-md mb-4">
        <h4 class="font-bold mb-2">MrBeast İpucu:</h4>
        <p>"Sadece son videonun değil, son 10 videonuzun metriklerine bakın. Hangi videolar daha iyi performans gösteriyor ve neden? Bu kalıpları tespit etmek, gelecekteki içeriklerinizi optimize etmenize yardımcı olacaktır."</p>
      </div>
      
      <h3 class="text-lg font-bold mb-2">Metrik Analizi Nasıl Yapılır:</h3>
      
      <ol class="list-decimal pl-5 mb-4 space-y-2">
        <li>Haftalık olarak temel metriklerinizi kaydedin ve zaman içindeki değişimleri izleyin.</li>
        <li>En iyi performans gösteren videolarınızın ortak noktalarını belirleyin.</li>
        <li>Metriklerinizi düzenli olarak niş kategorinizdeki diğer içerik üreticileriyle kıyaslayın.</li>
        <li>Her yeni video yayınladığınızda, ilk 24-48 saat içindeki performansını yakından takip edin.</li>
      </ol>
    `
  },
  "thumbnail-analizi": {
    title: "Thumbnail Analizi",
    description: "Dikkat çekici, etkili thumbnail'ler oluşturma stratejileri",
    content: `
      <p class="mb-4">MrBeast, thumbnaillerin video performansında kritik bir rol oynadığını bilir. Ekibi, her video için onlarca hatta yüzlerce farklı thumbnail tasarımı oluşturur ve test eder.</p>
      
      <h3 class="text-lg font-bold mb-2">Etkili Thumbnail İlkeleri:</h3>
      
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>İnsan Yüzü Kullanma</strong>: Mümkün olduğunca net, duygusal ifadeleri olan insan yüzlerine yer verin. İnsanlar diğer insanların yüzlerine doğal olarak çekilir.</li>
        <li><strong>Güçlü Duygusal İfadeler</strong>: Şaşkınlık, korku, heyecan veya mutluluk gibi belirgin duygusal ifadeler kullanın.</li>
        <li><strong>Canlı, Kontrast Renkler</strong>: Dikkat çekmek için parlak, canlı renkler ve güçlü kontrastlar kullanın.</li>
        <li><strong>Mobil Uyumluluk</strong>: İzleyicilerin çoğu mobil cihazlarda YouTube izler, bu nedenle küçük ekranlarda bile görülebilir ve anlaşılabilir tasarımlar oluşturun.</li>
        <li><strong>Basitlik ve Netlik</strong>: Kalabalık değil, birkaç önemli öğeye odaklanmış tasarımlar yapın.</li>
      </ul>
      
      <div class="bg-beast-blue/10 p-4 rounded-md mb-4">
        <h4 class="font-bold mb-2">MrBeast İpucu:</h4>
        <p>"Thumbnail'inizi telefon ekranında küçültülmüş halde kontrol edin. 5 saniye içinde ne olduğunu anlayabiliyorsanız, iyi bir thumbnail'iniz var demektir."</p>
      </div>
      
      <h3 class="text-lg font-bold mb-2">A/B Testi Nasıl Yapılır:</h3>
      
      <ol class="list-decimal pl-5 mb-4 space-y-2">
        <li>Her video için en az 3-5 farklı thumbnail tasarımı oluşturun.</li>
        <li>YouTube Studio'daki A/B test özelliğini kullanarak farklı tasarımları test edin.</li>
        <li>En az 48-72 saat test süresine izin verin.</li>
        <li>Sonuçları analiz edin ve en yüksek CTR'a sahip thumbnail'i seçin.</li>
        <li>Zaman içinde hangi tasarım öğelerinin daha iyi performans gösterdiğini belirleyin.</li>
      </ol>
    `
  },
  "baslik-optimizasyonu": {
    title: "Başlık Optimizasyonu",
    description: "Yüksek tıklanma oranı sağlayan başlıklar oluşturma stratejileri",
    content: `
      <p class="mb-4">MrBeast, başlıkların thumbnail'ler kadar önemli olduğunu bilir. İyi bir başlık, izleyicinin merakını uyandırmalı ve videonun ne hakkında olduğunu açıkça iletmelidir.</p>
      
      <h3 class="text-lg font-bold mb-2">Etkili Başlık Stratejileri:</h3>
      
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Kısa ve Öz</strong>: Mobil cihazlarda tüm başlık görünecek şekilde, genellikle 60 karakterden az başlıklar kullanın.</li>
        <li><strong>Merak Uyandırma</strong>: İzleyicinin "bunu görmem gerek" demesini sağlayacak ifadeler kullanın.</li>
        <li><strong>Anahtar Kelimeleri Öne Çıkarma</strong>: En önemli anahtar kelimeleri başlığın başına yerleştirin.</li>
        <li><strong>Sayılar Kullanma</strong>: "7 Gün", "100.000 Dolar", "24 Saat" gibi spesifik sayılar dikkat çeker.</li>
        <li><strong>Duygusal Tetikleyiciler</strong>: "İnanılmaz", "Şok Edici", "Hiç Beklemezdim" gibi duygusal ifadeler kullanın.</li>
      </ul>
      
      <div class="bg-beast-blue/10 p-4 rounded-md mb-4">
        <h4 class="font-bold mb-2">MrBeast Başlık Örnekleri:</h4>
        <ul class="list-disc pl-5">
          <li>"Mağarada 7 Gün Mahsur Kaldım"</li>
          <li>"Son Bırakan 100.000 Dolar Kazanır"</li>
          <li>"Dünyanın En Tehlikeli Oyununu Oynadım"</li>
          <li>"1000 Kişiye 1000 iPhone Verdim"</li>
        </ul>
      </div>
      
      <h3 class="text-lg font-bold mb-2">Başlık Optimizasyonu İpuçları:</h3>
      
      <ol class="list-decimal pl-5 mb-4 space-y-2">
        <li>Thumbnail ile başlığın bir bütün olarak çalıştığından emin olun.</li>
        <li>Başlıkta bir vaad sunun ve videonuzda bu vaadi yerine getirin.</li>
        <li>Tıklama tuzağından kaçının - bu, uzun vadede kanalınıza zarar verir.</li>
        <li>Aynı video için 3-5 farklı başlık yazın ve içlerinden en iyisini seçin.</li>
        <li>Başlıklarınızı da thumbnail'ler gibi düzenli olarak A/B testine tabi tutun.</li>
      </ol>
    `
  },
  "izleyici-davranisi": {
    title: "İzleyici Davranışı Analizi",
    description: "İzleyici düşüş noktalarını belirleme ve izlenme süresini artırma",
    content: `
      <p class="mb-4">MrBeast, YouTube algoritmasının en çok değer verdiği metriğin izlenme süresi olduğunu anlamıştır. Bu nedenle, her videosunda izleyiciyi ekranda tutmak için çeşitli stratejiler kullanır.</p>
      
      <h3 class="text-lg font-bold mb-2">İzleyici Düşüş Noktalarını Anlama:</h3>
      
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>İlk 15 Saniye Kritiktir</strong>: İzleyicilerin çoğu ilk 15 saniye içinde video izlemeye devam edip etmeyeceklerine karar verir.</li>
        <li><strong>3 Dakika Kuralı</strong>: MrBeast, her 2-3 dakikada bir yeni bir "kanca" veya ilgi çekici unsur ekleyerek izleyicinin dikkatini yeniden yakalar.</li>
        <li><strong>İzleyici Dalgalanmaları</strong>: YouTube Analytics'teki izleyici tutma grafiğini kullanarak izleyicilerin videodan ayrıldığı anları tespit edin.</li>
      </ul>
      
      <div class="bg-beast-blue/10 p-4 rounded-md mb-4">
        <h4 class="font-bold mb-2">MrBeast İpucu:</h4>
        <p>"Her videonun başında güçlü bir giriş (hook) yapın. İzleyiciye neden sonuna kadar izlemeleri gerektiğini açıkça söyleyin ve meraklarını uyandırın."</p>
      </div>
      
      <h3 class="text-lg font-bold mb-2">İzleyici Tutma Stratejileri:</h3>
      
      <ol class="list-decimal pl-5 mb-4 space-y-2">
        <li><strong>Güçlü Giriş (Hook)</strong>: Videonun ilk 5-10 saniyesinde izleyicinin dikkatini çekin.</li>
        <li><strong>İlerleme Hissi</strong>: İzleyiciye sürekli olarak videonun ilerlemekte olduğu hissini verin.</li>
        <li><strong>Hikaye Anlatımı</strong>: Net bir başlangıç, orta ve son olan bir hikaye yapısı kullanın.</li>
        <li><strong>Ödülleri Erteleme</strong>: Video boyunca "az sonra" ve "şimdi göreceksiniz" gibi ifadelerle izleyicinin merakını canlı tutun.</li>
        <li><strong>Düşüş Noktalarını Düzeltme</strong>: İzleyici tutma grafiğinde düşüşler yaşanan anları tespit edin ve gelecekteki videolarda bu bölümleri iyileştirin.</li>
      </ol>
    `
  },
  "ab-testi": {
    title: "Gelişmiş Thumbnail A/B Testi",
    description: "Farklı thumbnail tasarımlarını test ederek optimum sonuçlar alma",
    content: `
      <p class="mb-4">MrBeast'in ekibi, her video için onlarca farklı thumbnail tasarımı oluşturur ve bu tasarımları sistemli bir şekilde test eder. Bu titiz A/B test stratejisi, kanalın sürekli büyümesindeki en önemli faktörlerden biridir.</p>
      
      <h3 class="text-lg font-bold mb-2">A/B Testi Nasıl Geliştirilir:</h3>
      
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Sistematik Yaklaşım</strong>: Sadece rastgele değişiklikler değil, belirli hipotezlere dayalı tasarım değişiklikleri yapın.</li>
        <li><strong>Tek Değişken Testi</strong>: Her testte sadece bir öğeyi (renk, ifade, kompozisyon) değiştirin, böylece hangi faktörün etkili olduğunu anlayabilirsiniz.</li>
        <li><strong>Demografik Segmentasyon</strong>: Farklı yaş grupları veya coğrafi bölgeler için farklı thumbnail'lerin performansını analiz edin.</li>
        <li><strong>Veri Toplama</strong>: Her testi en az 48-72 saat çalıştırın ve yeterli veri topladığınızdan emin olun.</li>
      </ul>
      
      <div class="bg-beast-blue/10 p-4 rounded-md mb-4">
        <h4 class="font-bold mb-2">MrBeast'in A/B Test Yaklaşımı:</h4>
        <p>"Herhangi bir thumbnail'e âşık olmayın. Bizim ekibimiz bazen yüzlerce farklı tasarım dener ve sadece veriye güvenir. Kişisel tercihlerinize değil, rakamların size söylediğine odaklanın."</p>
      </div>
      
      <h3 class="text-lg font-bold mb-2">Gelişmiş A/B Test Süreci:</h3>
      
      <ol class="list-decimal pl-5 mb-4 space-y-2">
        <li><strong>Tasarım Hipotezleri Oluşturma</strong>: "Daha parlak renkler daha yüksek CTR sağlar" gibi test edilebilir hipotezler geliştirin.</li>
        <li><strong>Test Matrisi Hazırlama</strong>: Test edilecek değişkenleri ve varyasyonları bir matris üzerinde planlayın.</li>
        <li><strong>Kademeli Testler</strong>: İlk turda kazanan tasarımla ikinci tur testleri yapın, böylece sürekli iyileştirme sağlayın.</li>
        <li><strong>Sonuçları Dokümantasyon</strong>: Her testin sonuçlarını kaydedin ve zaman içinde kanalınız için "kazanan formülleri" belirleyin.</li>
        <li><strong>Öğrenilenleri Uygulama</strong>: Bir video için öğrendiklerinizi diğer videolarınıza da uygulayın.</li>
      </ol>
    `
  }
};

const StrategyDetail = () => {
  const { strategyId } = useParams();
  const strategy = strategyId ? strategies[strategyId as keyof typeof strategies] : null;

  if (!strategy) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold">Strateji Bulunamadı</h1>
            <p className="text-muted-foreground">
              Aradığınız strateji mevcut değil veya kaldırılmış olabilir.
            </p>
            <Button asChild>
              <Link to="/stratejiler">Tüm Stratejilere Dön</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center mb-6">
            <Button variant="ghost" asChild className="mr-4">
              <Link to="/stratejiler"><ChevronLeft className="h-4 w-4 mr-2" /> Stratejilere Dön</Link>
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="bg-gradient-to-r from-beast-blue to-beast-green text-white">
                  <CardTitle className="text-2xl">{strategy.title}</CardTitle>
                  <CardDescription className="text-white/80">{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Tabs defaultValue="icerik">
                    <TabsList className="mb-4">
                      <TabsTrigger value="icerik">İçerik</TabsTrigger>
                      <TabsTrigger value="uygulama">Uygulama</TabsTrigger>
                      <TabsTrigger value="kaynaklar">Kaynaklar</TabsTrigger>
                    </TabsList>
                    <TabsContent value="icerik">
                      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: strategy.content }} />
                    </TabsContent>
                    <TabsContent value="uygulama">
                      <div className="text-center py-12 px-4">
                        <div className="bg-muted inline-flex p-3 rounded-full mb-4">
                          <CheckCircle className="h-8 w-8 text-beast-green" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Uygulama Adımları</h3>
                        <p className="text-muted-foreground mb-6">
                          Bu stratejiyi uygulamak için adım adım talimatlar ve araçlar yakında eklenecektir.
                        </p>
                        <Button variant="outline">Giriş Yap</Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="kaynaklar">
                      <div className="text-center py-12 px-4">
                        <div className="bg-muted inline-flex p-3 rounded-full mb-4">
                          <BookOpen className="h-8 w-8 text-beast-blue" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Kaynaklar ve Materyaller</h3>
                        <p className="text-muted-foreground mb-6">
                          Bu strateji ile ilgili ek kaynaklar, çalışma sayfaları ve araçlar yakında eklenecektir.
                        </p>
                        <Button variant="outline">Giriş Yap</Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="mr-2 h-5 w-5 text-beast-blue" />
                    Hızlı İpuçları
                  </CardTitle>
                  <CardDescription>Bu stratejiyi uygulamanıza yardımcı olacak ipuçları</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { 
                        text: "MrBeast ekibi en temel metrikleri bile ayrıntılı olarak analiz eder ve zaman içindeki değişimleri izler.",
                        color: "beast-blue"
                      },
                      { 
                        text: "Her yeni video için önceki videolarınızın performansını analiz edin ve başarılı olanların ortak noktalarını belirleyin.",
                        color: "beast-green"
                      },
                      { 
                        text: "Niş kategorinizdeki diğer kanallarla kıyaslama yaparak benchmark değerler belirleyin.",
                        color: "beast-yellow"
                      }
                    ].map((tip, index) => (
                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger className="w-full">
                            <div className="flex items-start cursor-help hover:bg-muted/50 p-2 rounded-lg transition-colors">
                              <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 bg-${tip.color}/10 text-${tip.color} flex-shrink-0`}>
                                {index + 1}
                              </div>
                              <p className="text-sm text-left">{tip.text}</p>
                              <MousePointer className="ml-2 h-4 w-4 text-muted-foreground opacity-50" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <p>Detaylı bilgi için tıklayın</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>

                  <div className="bg-muted p-4 rounded-lg mt-6">
                    <div className="flex items-center mb-2">
                      <Info className="h-5 w-5 mr-2 text-beast-blue" />
                      <h4 className="font-medium">MrBeast Tavsiyesi</h4>
                    </div>
                    <p className="text-sm">"Başarılı olmak için algoritmanın ne istediğini anlamalısınız. Bu, verilerinizi derinlemesine analiz ederek ve sürekli deneyler yaparak mümkündür."</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>İlgili Stratejiler</CardTitle>
                  <CardDescription>Bu stratejiyle birlikte uygulanabilecek diğer stratejiler</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Thumbnail Analizi", 
                        description: "Dikkat çekici ve etkili thumbnail'ler oluşturma",
                        link: "/stratejiler/thumbnail-analizi"
                      },
                      { 
                        title: "Başlık Optimizasyonu", 
                        description: "Yüksek tıklanma oranı sağlayan başlıklar oluşturma",
                        link: "/stratejiler/baslik-optimizasyonu"
                      },
                      { 
                        title: "İzleyici Davranışı Analizi", 
                        description: "İzleyici düşüş noktalarını belirleme",
                        link: "/stratejiler/izleyici-davranisi"
                      }
                    ].map((relatedStrategy, index) => (
                      <Link 
                        key={index} 
                        to={relatedStrategy.link} 
                        className="block p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium group-hover:text-beast-blue transition-colors">
                              {relatedStrategy.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {relatedStrategy.description}
                            </p>
                          </div>
                          <ChevronLeft className="h-4 w-4 text-muted-foreground rotate-180 group-hover:text-beast-blue transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StrategyDetail;
