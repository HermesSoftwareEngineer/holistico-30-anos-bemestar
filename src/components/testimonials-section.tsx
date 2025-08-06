import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  // Placeholder para depoimentos - será preenchido depois
  const placeholderTestimonials = [
    {
      name: "Ana Silva",
      role: "Executiva",
      rating: 5,
      content: "A terapia holística mudou completamente minha perspectiva de vida. Encontrei o equilíbrio que tanto procurava.",
      treatment: "Iridologia Comportamental"
    },
    {
      name: "Carlos Santos",
      role: "Empresário",
      rating: 5,
      content: "Profissional excepcional! O atendimento humanizado e a experiência fizeram toda a diferença na minha jornada.",
      treatment: "Análise do Estilo de Vida"
    },
    {
      name: "Maria Oliveira", 
      role: "Professora",
      rating: 5,
      content: "Após anos de estresse, finalmente encontrei a paz interior. Recomendo para todos que buscam bem-estar genuíno.",
      treatment: "Terapias Holísticas"
    }
  ]

  return (
    <section id="depoimentos" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50">
            Depoimentos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Histórias de Transformação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça algumas das experiências reais de pessoas que encontraram equilíbrio 
            e bem-estar através das terapias integrativas com Oséias Mendes na Clínica Allmed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {placeholderTestimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="h-full bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-soft transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <Badge variant="secondary" className="mt-2 text-xs">
                    {testimonial.treatment}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action for more testimonials */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-card rounded-2xl p-8 shadow-soft max-w-md mx-auto">
            <div className="text-2xl font-bold text-foreground">
              Seja o Próximo a se Transformar
            </div>
            <p className="text-muted-foreground text-center">
              Junte-se a centenas de pessoas que já encontraram o equilíbrio e bem-estar através das terapias holísticas.
            </p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              Avaliação média: 4.9/5 ⭐
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}