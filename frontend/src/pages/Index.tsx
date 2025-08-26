import { Header } from "@/components/Header";
import { URLShortener } from "@/components/URLShortener";
import { PerformanceStats } from "@/components/PerformanceStats";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "ShortLink - Fast URL Shortener";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Lightning-Fast
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
              URL Shortener
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Powered by Redis caching and PostgreSQL. Experience <strong>70% faster redirects</strong> with 
            our high-performance, containerized architecture.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-performance-green rounded-full animate-pulse" />
              <span>&lt;50ms latency</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-performance-cyan rounded-full animate-pulse" />
              <span>95% cache hit rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>99.9% uptime</span>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mb-12">
          <PerformanceStats />
        </div>

        {/* URL Shortener */}
        <URLShortener />
      </main>
    </div>
  );
};

export default Index;
