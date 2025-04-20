
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ByteRule {
  id: string;
  strategy: string;
  function: string;
  prompt: string;
  response: string;
}

export function ByteRulesSection() {
  const byteRules: ByteRule[] = [
    {
      id: "001",
      strategy: "Temel metrikleri düzenli olarak takip etme ve analiz etme",
      function: "Metrik Takip Panosu",
      prompt: "Son bir haftadaki performansım nasıl?",
      response: "Son bir haftada tıklanma oranınız %8.4, ortalama izlenme süreniz 4:32 dakika ve ortalama izlenme yüzdeniz %42 olarak gerçekleşti. Bu metriklerin zaman içindeki değişimini grafikte görebilirsiniz."
    },
    {
      id: "002",
      strategy: "Dikkat çekici ve duygusal ifadeler içeren thumbnail'ler kullanma",
      function: "Thumbnail İpucu Verici",
      prompt: "Thumbnail'imi nasıl daha ilgi çekici hale getirebilirim?",
      response: "Thumbnail'inizde bir insan yüzü ve şaşkın, mutlu veya meraklı gibi güçlü bir duygusal ifade kullanmayı deneyin. Arka planın dikkat çekici ve mobil cihazlarda net olduğundan emin olun."
    },
    {
      id: "003",
      strategy: "İzleyicinin merakını uyandıran başlıklar oluşturma",
      function: "Başlık Öneri Sihirbazı",
      prompt: "Bu videom için akılda kalıcı bir başlık öner.",
      response: "Videonuzun konusuyla ilgili bir sırrı veya beklenmedik bir sonucu ima eden, kısa ve merak uyandıran bir başlık düşünebilirsiniz. Örneğin, '[Konunuz] hakkında Şok Edici Gerçek!' veya MrBeast tarzında '24 Saat Boyunca Sadece [Konunuz]' gibi."
    },
    {
      id: "004",
      strategy: "Videonun ilk saniyelerinde izleyiciyi 'yakalama' (hook)",
      function: "Giriş Kancası Oluşturucu",
      prompt: "Videoma nasıl güçlü bir giriş yapabilirim?",
      response: "Videonuzun en heyecanlı veya ilginç anından kısa bir kesit göstererek, merak uyandıran bir soru sorarak veya şaşırtıcı bir ifadeyle başlayarak izleyicinin ilgisini ilk saniyelerde çekebilirsiniz."
    },
    {
      id: "005",
      strategy: "Farklı thumbnail tasarımlarını test ederek en iyi performansı göstereni bulma",
      function: "Thumbnail A/B Test Yardımcısı",
      prompt: "Farklı thumbnail'lerimin performansını nasıl karşılaştırabilirim?",
      response: "YouTube'un kendi A/B testi özelliğini kullanarak veya uygulamamızdaki gelişmiş araçlarla farklı thumbnail tasarımlarını belirli bir süre test edebilir ve hangi tasarımın daha yüksek tıklanma oranı aldığını görebilirsiniz. MrBeast ekibi bu süreci titizlikle uygular."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-beast-blue/5 to-beast-green/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-beast-green px-3 py-1 text-sm text-white">
              Hızlı İpuçları
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Byte Rule - Hızlı Uygulama Kuralları
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              MrBeast stratejilerini hızlıca uygulamak için TRIZMA'nın Byte Rule formatında hazırlanmış önerileri
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl mt-8 space-y-6">
          {byteRules.map((rule) => (
            <Card key={rule.id} className="border-l-4 border-l-beast-blue">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="rounded-full bg-beast-blue/10 px-3 py-1 text-sm text-beast-blue font-medium">
                      Byte Rule {rule.id}
                    </div>
                    <div className="rounded-full bg-beast-green/10 px-3 py-1 text-sm text-beast-green font-medium">
                      {rule.function}
                    </div>
                  </div>
                </div>
                <CardTitle className="mt-2">{rule.strategy}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-1">Örnek Prompt:</h4>
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-sm">{rule.prompt}</p>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-1">Trizma Yanıtı:</h4>
                  <div className="bg-beast-blue/5 border border-beast-blue/20 p-3 rounded-md">
                    <p className="text-sm">{rule.response}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
