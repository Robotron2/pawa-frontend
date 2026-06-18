import React from "react";
import { Container } from "@/components/layout/Container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Zap, Shield, Route, Code2 } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-24 bg-surface">
      <Container>
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Infrastructure for modern finance.
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            PawaProtocol abstracts away the complexity of liquidity fragmentation, providing developers with a single integration point for optimal asset settlement on the Stellar network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Route className="text-primary" />}
            title="Optimal Routing"
            description="Automatically discover the most efficient paths across multiple AMMs and orderbooks."
          />
          <FeatureCard 
            icon={<Zap className="text-accent" />}
            title="Atomic Execution"
            description="Multi-hop swaps are executed atomically, eliminating partial fill risks."
          />
          <FeatureCard 
            icon={<Shield className="text-success" />}
            title="Slippage Protection"
            description="Strict path constraints ensure your trades execute within defined tolerance levels."
          />
          <FeatureCard 
            icon={<Code2 className="text-foreground/80" />}
            title="Developer Ready"
            description="Integrate with a few lines of code using our typescript SDK and pre-built React hooks."
          />
        </div>
      </Container>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="bg-white hover:border-primary/30 transition-colors">
    <CardHeader>
      <div className="w-10 h-10 rounded-lg bg-gray-50 border border-border flex items-center justify-center mb-4">
        {icon}
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-foreground/70 leading-relaxed">
        {description}
      </p>
    </CardContent>
  </Card>
);
