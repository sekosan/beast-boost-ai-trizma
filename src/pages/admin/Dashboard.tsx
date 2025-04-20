
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminLayout } from "@/components/admin/AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Toplam İçerik</CardTitle>
              <CardDescription>Platformdaki toplam içerik sayısı</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">245</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Aktif Kullanıcılar</CardTitle>
              <CardDescription>Son 30 gündeki aktif kullanıcı sayısı</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1,234</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Toplam Etkileşim</CardTitle>
              <CardDescription>Toplam beğeni ve yorum sayısı</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">5,678</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
