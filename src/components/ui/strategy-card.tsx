
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface StrategyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  category?: string;
  to?: string;
  className?: string;
}

export function StrategyCard({
  title,
  description,
  icon,
  category,
  to = "#",
  className,
}: StrategyCardProps) {
  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <CardHeader className="bg-gradient-to-r from-beast-blue to-beast-green p-4">
        <div className="flex justify-between items-center">
          <div className="text-white p-2 rounded-full bg-white/20">{icon}</div>
          {category && (
            <Badge variant="outline" className="bg-white/20 text-white border-none">
              {category}
            </Badge>
          )}
        </div>
        <CardTitle className="text-white mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full mt-2">
          <Link to={to}>Detayları Görüntüle</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
