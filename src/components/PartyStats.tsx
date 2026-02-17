"use client";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "4.5",
    label: "Rating",
    description: "Most loved app rating",
  },
  {
    number: "1 Million",
    label: "Served",
    description: "Biryanis served monthly",
  },
  {
    number: "76 Cities",
    label: "Presence",
    description: "Nationwide presence",
  },
];

export default function PartyStats() {
  return (
    <section className="py-16 md:py-20 bg-dark-glow">
      <div className="container mx-auto px-4">
        <h2 className="heading-xl text-center mb-12 md:mb-16">
          Loved by Millions
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-warm-brown/50 border-royal-gold/30 hover:border-royal-gold/60 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="pt-8 pb-8 text-center">
                <div className="heading-2xl mb-2">{stat.number}</div>
                <div className="text-royal-gold font-semibold text-lg mb-2">
                  {stat.label}
                </div>
                <div className="text-light-tan text-sm">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
