import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Database, Globe, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Average Latency",
    value: "<50ms",
    description: "70% faster than industry average",
    icon: Zap,
    color: "text-performance-green",
    bgColor: "bg-gradient-performance",
  },
  {
    title: "Cache Hit Rate",
    value: "95.2%",
    description: "Redis-powered caching layer",
    icon: Database,
    color: "text-performance-cyan",
    bgColor: "bg-gradient-subtle",
  },
  {
    title: "Global Uptime",
    value: "99.9%",
    description: "Containerized deployment",
    icon: Globe,
    color: "text-primary",
    bgColor: "bg-gradient-subtle",
  },
  {
    title: "Total Requests",
    value: "2.4M+",
    description: "Handled this month",
    icon: TrendingUp,
    color: "text-performance-green",
    bgColor: "bg-gradient-subtle",
  },
];

export const PerformanceStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card 
          key={stat.title} 
          className="bg-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};