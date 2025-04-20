
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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
    <Link to={to}>
      <Card className={cn("overflow-hidden transition-all hover:shadow-md cursor-pointer group", className)}>
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
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
