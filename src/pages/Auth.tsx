
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Icons } from "@/components/ui/icons";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username,
            },
          },
        });
        if (error) throw error;
        toast({
          title: "Başarılı!",
          description: "Hesabın oluşturuldu hacı, hadi giriş yap!",
        });
        setIsSignUp(false);
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate("/");
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Hata!",
        description: error.message === "Email not confirmed" 
          ? "Emailini onaylaman lazım hacı!"
          : "Bi' şeyler ters gitti, tekrar dene",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin,
        },
      });
      
      if (error) {
        console.error("Google login error:", error);
        toast({
          variant: "destructive",
          title: "Hata!",
          description: `Google ile giriş yaparken bir sorun oluştu: ${error.message}`,
        });
      }
    } catch (error: any) {
      console.error("Google login catch block:", error);
      toast({
        variant: "destructive",
        title: "Hata!",
        description: "Google ile giriş yaparken bir sorun oluştu",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{isSignUp ? "Kayıt Ol" : "Giriş Yap"}</CardTitle>
          <CardDescription>
            {isSignUp 
              ? "Hadi seni de aramıza alalım!" 
              : "Hoş geldin! Devam etmek için giriş yap"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <Button 
              variant="outline" 
              onClick={handleGoogleLogin}
              className="w-full"
              disabled={loading}
            >
              <Icons.google className="mr-2 h-4 w-4" />
              Google ile {isSignUp ? "Kayıt Ol" : "Giriş Yap"}
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Ya da email ile devam et
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium">
                    Kullanıcı Adı
                  </label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required={isSignUp}
                    placeholder="mrbeaster42"
                  />
                </div>
              )}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="mrbeast@youtube.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Şifre
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="********"
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading 
                  ? "Bekle biraz..." 
                  : isSignUp 
                    ? "Kayıt Ol" 
                    : "Giriş Yap"}
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp 
                  ? "Zaten hesabın var mı? Giriş yap" 
                  : "Hesabın yok mu? Kayıt ol"}
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
