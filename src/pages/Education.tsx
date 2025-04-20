
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ByteRulesSection } from "@/components/ByteRulesSection";
import { BookOpen, VideoIcon, FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Eğitim İçeriği</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MrBeast stratejileri hakkında eğitim materyalleri, özetler ve Fazıl İşler'in analiz ettiği temel prensipler.
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle>MrBeast'in Temel Prensipleri</CardTitle>
              <CardDescription>
                Fazıl İşler'in analizlerine göre MrBeast'in başarısının arkasındaki temel prensipler
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="prensip1">
                <TabsList className="grid grid-cols-5 mb-8">
                  <TabsTrigger value="prensip1">Saplantılı Uzmanlık</TabsTrigger>
                  <TabsTrigger value="prensip2">Doğru Ekip</TabsTrigger>
                  <TabsTrigger value="prensip3">Viral Formüller</TabsTrigger>
                  <TabsTrigger value="prensip4">Algoritma Anlayışı</TabsTrigger>
                  <TabsTrigger value="prensip5">A/B Test</TabsTrigger>
                </TabsList>
                <TabsContent value="prensip1">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Saplantılı Uzmanlık</h3>
                      <p className="mb-4">MrBeast (Jimmy), erken yaşlardan itibaren YouTube algoritmasını ve içerik üretim sürecini derinlemesine anlamak için kendini geliştirmeye odaklandı. Bu, onun platform dinamiklerini rakiplerinden daha iyi anlamasını sağladı.</p>
                      
                      <h4 className="font-bold mt-6 mb-2">Önemli Noktalar:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>YouTube'u bir bilim olarak ele alması ve her detayı incelemesi</li>
                        <li>Gün içinde saatlerce YouTube videoları izleyerek içerik analizi yapması</li>
                        <li>Başarılı içerik üreticilerinin stratejilerini sistematik olarak çözümlemesi</li>
                        <li>Yeni içerik formatlarını sürekli test etmesi</li>
                      </ul>
                    </div>
                    <div className="bg-muted rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <VideoIcon className="h-6 w-6 mr-2 text-beast-blue" />
                        <h4 className="font-bold">Fazıl İşler'in Analizi</h4>
                      </div>
                      <p className="mb-4">
                        "MrBeast, kendi ifadesiyle günde 12 saat başkalarının YouTube videolarını izleyerek algoritmanın nasıl çalıştığını çözümledi. Bu saplantılı uzmanlık arayışı, onun platformu rakiplerinden çok daha iyi anlamasını sağladı."
                      </p>
                      <Separator className="my-4" />
                      <div className="flex items-center mb-4">
                        <BookOpen className="h-6 w-6 mr-2 text-beast-green" />
                        <h4 className="font-bold">Uygulama İpuçları</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Haftada en az 5 saat başarılı YouTube içeriklerini analitik bir gözle izleyin</li>
                        <li>Performans verileri ile içerik arasındaki bağlantıları not edin</li>
                        <li>Niş kategorinizdeki en başarılı içerikleri derinlemesine inceleyin</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="prensip2">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Doğru Ekiple Çalışma</h3>
                      <p className="mb-4">MrBeast'in stratejilerinden biri, kendisi gibi tutkulu ve yetenekli insanlardan oluşan bir ekip kurmasıdır. "Sadece A takım oyuncuları istiyorum" prensibiyle hareket ederek, her pozisyon için en yetenekli kişileri seçmeye odaklanır.</p>
                      
                      <h4 className="font-bold mt-6 mb-2">Önemli Noktalar:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Uzmanlık alanlarına göre özel ekipler oluşturması (senaryo, thumbnail, montaj, vb.)</li>
                        <li>Ekip üyelerini sürekli eğitmesi ve geliştirmesi</li>
                        <li>Ekip içi rekabeti ve inovasyonu teşvik etmesi</li>
                        <li>Her ekip üyesinin kendi alanında en iyisi olmasını beklemesi</li>
                      </ul>
                    </div>
                    <div className="bg-muted rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <VideoIcon className="h-6 w-6 mr-2 text-beast-blue" />
                        <h4 className="font-bold">Fazıl İşler'in Analizi</h4>
                      </div>
                      <p className="mb-4">
                        "MrBeast, ekibini oluştururken 'sadece A takım oyuncuları' prensibini benimsiyor. Her bir ekip üyesi kendi alanında uzmanlaşmış ve MrBeast'in vizyonunu hayata geçirmek için tam kapasite çalışıyor."
                      </p>
                      <Separator className="my-4" />
                      <div className="flex items-center mb-4">
                        <BookOpen className="h-6 w-6 mr-2 text-beast-green" />
                        <h4 className="font-bold">Uygulama İpuçları</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Küçük başlayın: Tek bir alanda uzman olan bir kişiyle çalışmaya başlayın</li>
                        <li>Ekip üyelerinizi kendi alanlarında uzmanlaşmaları için teşvik edin</li>
                        <li>Ortak bir vizyon ve değerler etrafında ekibinizi birleştirin</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="prensip3">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Viral Formüller</h3>
                      <p className="mb-4">MrBeast, hangi içerik türlerinin viral olma potansiyelinin daha yüksek olduğunu sistematik olarak analiz etmiş ve bu formülleri kendi içeriklerinde ustaca uygulamıştır.</p>
                      
                      <h4 className="font-bold mt-6 mb-2">Viral İçerik Kategorileri:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Para:</strong> İnsanlara para verme, ödül dağıtma</li>
                        <li><strong>Tepki:</strong> İnsanların aşırı durumlar karşısındaki tepkileri</li>
                        <li><strong>Meydan Okuma:</strong> Zor veya ilginç görevlerin tamamlanması</li>
                        <li><strong>Şaka:</strong> Komedi ve eğlence içeren içerikler</li>
                        <li><strong>Drama:</strong> Duygusal hikayeler ve gerilim</li>
                        <li><strong>İşbirlikleri:</strong> Diğer popüler içerik üreticileriyle çalışmalar</li>
                      </ul>
                    </div>
                    <div className="bg-muted rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <VideoIcon className="h-6 w-6 mr-2 text-beast-blue" />
                        <h4 className="font-bold">Fazıl İşler'in Analizi</h4>
                      </div>
                      <p className="mb-4">
                        "MrBeast, birden fazla viral içerik kategorisini tek bir videoda birleştirerek etkiyi katlamayı başarıyor. Örneğin, hem bir meydan okuma hem para ödülü hem de işbirliği içeren videolar oluşturarak ilgi çekiciliği maksimuma çıkarıyor."
                      </p>
                      <Separator className="my-4" />
                      <div className="flex items-center mb-4">
                        <BookOpen className="h-6 w-6 mr-2 text-beast-green" />
                        <h4 className="font-bold">Uygulama İpuçları</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Kendi niş alanınızda viral olmuş içerikleri analiz edin</li>
                        <li>Birden fazla viral kategoriyi tek bir videoda birleştirmeyi deneyin</li>
                        <li>İçeriğinizi özgün kılacak kendi tarzınızı ekleyin</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="prensip4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Algoritma Anlayışı</h3>
                      <p className="mb-4">MrBeast, YouTube algoritmasının nasıl çalıştığını derinlemesine anlamak ve bu anlayışı içerik stratejisine entegre etmek konusunda ustadır. Algoritmanın en çok değer verdiği metriklere odaklanır ve içeriklerini buna göre optimize eder.</p>
                      
                      <h4 className="font-bold mt-6 mb-2">Algoritma Anlayışı İlkeleri:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>İzleyici tutma süresinin (watch time) önemi</li>
                        <li>İzleyici etkileşiminin (beğeni, yorum, paylaşım) değeri</li>
                        <li>Tıklanma oranının (CTR) kanalın geneline etkisi</li>
                        <li>Yeni içeriklerin ilk 24-48 saatinin kritik önemi</li>
                        <li>İzleyici demografisinin ve platforma bağlılığın etkisi</li>
                      </ul>
                    </div>
                    <div className="bg-muted rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <VideoIcon className="h-6 w-6 mr-2 text-beast-blue" />
                        <h4 className="font-bold">Fazıl İşler'in Analizi</h4>
                      </div>
                      <p className="mb-4">
                        "MrBeast, 'Çalışma arkadaşlarım arasında YouTube algoritmasını en iyi anlayan kişiyim' diyecek kadar algoritmaya hakim. Bu anlayış, her içeriğini YouTube'un en çok değer verdiği metrikleri maksimize edecek şekilde tasarlamasını sağlıyor."
                      </p>
                      <Separator className="my-4" />
                      <div className="flex items-center mb-4">
                        <BookOpen className="h-6 w-6 mr-2 text-beast-green" />
                        <h4 className="font-bold">Uygulama İpuçları</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>YouTube Analytics verilerinizi düzenli olarak analiz edin</li>
                        <li>Her videonuzda izleyici tutma grafiğini inceleyerek düşüş noktalarını tespit edin</li>
                        <li>YouTube'un resmi blog yazılarını ve içerik üreticileri için hazırlanan kaynakları takip edin</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="prensip5">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4">A/B Test Saplantısı</h3>
                      <p className="mb-4">MrBeast ekibi, sürekli A/B testleri yaparak içeriklerini optimize eder. Özellikle thumbnail ve başlıklarda onlarca hatta yüzlerce farklı varyasyon test ederek en yüksek tıklanma oranını sağlayan kombinasyonu bulurlar.</p>
                      
                      <h4 className="font-bold mt-6 mb-2">A/B Test Yaklaşımı:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Her video için 20+ farklı thumbnail tasarımı oluşturma</li>
                        <li>En az 5-10 farklı başlık alternatifi hazırlama</li>
                        <li>Giriş sahnelerini farklı varyasyonlarla test etme</li>
                        <li>Veri odaklı karar verme, kişisel tercihleri minimuma indirme</li>
                        <li>Başarılı olan öğeleri kataloglayarak gelecekteki içeriklerde kullanma</li>
                      </ul>
                    </div>
                    <div className="bg-muted rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <VideoIcon className="h-6 w-6 mr-2 text-beast-blue" />
                        <h4 className="font-bold">Fazıl İşler'in Analizi</h4>
                      </div>
                      <p className="mb-4">
                        "MrBeast'in ekibi bazen bir video için yüzlerce farklı thumbnail tasarımı oluşturuyor ve bunları sistematik olarak test ediyor. Bu detaycı yaklaşım, kanalın tıklanma oranını sürekli olarak yüksek tutmasını sağlıyor."
                      </p>
                      <Separator className="my-4" />
                      <div className="flex items-center mb-4">
                        <BookOpen className="h-6 w-6 mr-2 text-beast-green" />
                        <h4 className="font-bold">Uygulama İpuçları</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Her videonuz için en az 3-5 farklı thumbnail tasarımı oluşturun</li>
                        <li>YouTube Studio'daki A/B test özelliğini aktif olarak kullanın</li>
                        <li>Test sonuçlarınızı kaydedin ve zaman içinde hangi öğelerin daha iyi performans gösterdiğini analiz edin</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>MrBeast'in 36 Sayfalık Dokümanı</CardTitle>
                <CardDescription>
                  MrBeast'in içerik stratejisi hakkında özel dosyasından önemli bilgiler
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">MrBeast'in YouTube başarısının arkasındaki stratejileri içeren 36 sayfalık özel dokümanından önemli noktalar:</p>
                
                <div className="space-y-6">
                  <div className="bg-beast-blue/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">İçerik Formülü</h4>
                    <p className="text-sm">
                      "İçerik fikriniz şu üç kriterden en az ikisini karşılamalıdır: görsel olarak çarpıcı, daha önce hiç görmediğiniz bir şey, veya güçlü bir duygusal tepki uyandıran."
                    </p>
                  </div>
                  
                  <div className="bg-beast-green/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Hook (Kanca) Kuralı</h4>
                    <p className="text-sm">
                      "Videonuzun ilk 15 saniyesi izleyiciyi yakalamak için kritiktir. Bu sürede, videonun geri kalanını izlemeleri için ikna edici bir neden sunmalısınız."
                    </p>
                  </div>
                  
                  <div className="bg-beast-yellow/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">3 Dakika Prensibi</h4>
                    <p className="text-sm">
                      "Her 2-3 dakikada bir izleyicinin ilgisini yeniden yakalamanız gerekir. Bu, yeni bir twist, şaşırtıcı bir gelişme veya merak uyandıran bir açıklama olabilir."
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" /> Özet PDF İndir
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Fazıl İşler Analizleri</CardTitle>
                <CardDescription>
                  Fazıl İşler'in MrBeast üzerine derinlemesine analizlerinden özetler
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <VideoIcon className="h-5 w-5 mt-1 mr-3 text-beast-blue flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">YouTube Ekosistemi Analizi</h4>
                      <p className="text-sm text-muted-foreground">MrBeast'in YouTube ekosistemini nasıl kullandığı ve platforma yaklaşımı.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <VideoIcon className="h-5 w-5 mt-1 mr-3 text-beast-blue flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">İçerik Stratejisi Değerlendirmesi</h4>
                      <p className="text-sm text-muted-foreground">MrBeast'in içerik üretim süreci ve her aşamadaki optimizasyonları.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <VideoIcon className="h-5 w-5 mt-1 mr-3 text-beast-blue flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Büyüme Taktikleri</h4>
                      <p className="text-sm text-muted-foreground">MrBeast'in kanalını sürekli büyütmek için kullandığı taktikler ve yaklaşımlar.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm mb-4">
                    "MrBeast, YouTube'u yalnızca bir platform değil, bir bilim olarak ele alıyor. Her detayı, her metriği ve her izleyici davranışını analiz ederek içeriklerini sürekli olarak optimize ediyor."
                  </p>
                  <p className="text-sm font-medium text-right">- Fazıl İşler</p>
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" /> Tam Analizlere Eriş
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mb-8">Byte Rules - Hızlı Uygulama Kuralları</h2>
          <ByteRulesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
