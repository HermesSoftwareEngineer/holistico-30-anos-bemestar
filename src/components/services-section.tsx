import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Heart, Leaf, User } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Análise do Estilo de Vida",
      description: "Avaliação completa dos seus hábitos e rotinas para identificar pontos de melhoria e criar um plano personalizado de bem-estar.",
      benefits: ["Identificação de padrões", "Plano personalizado", "Mudanças sustentáveis"]
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Terapias Holísticas",
      description: "Abordagem integrativa que considera corpo, mente e espírito para promover cura natural e equilíbrio energético.",
      benefits: ["Cura natural", "Equilíbrio energético", "Bem-estar integral"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Iridologia Comportamental",
      description: "Análise da íris para compreender padrões comportamentais, tendências emocionais e características da personalidade.",
      benefits: ["Autoconhecimento profundo", "Padrões comportamentais", "Orientação personalizada"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Iridologia Clínica",
      description: "Avaliação da saúde através da íris, identificando predisposições e desequilíbrios para prevenção e tratamento natural.",
      benefits: ["Prevenção natural", "Detecção precoce", "Saúde preventiva"]
    }
  ]

  return (
    <section id="terapias" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terapias e Benefícios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Com mais de 30 anos de experiência, Oséias Mendes oferece um conjunto abrangente de terapias integrativas 
            para promover seu bem-estar físico, emocional e energético através de métodos naturais e personalizados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="h-full bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-soft transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div 
                      key={benefitIndex}
                      className="flex items-center justify-center gap-2 text-sm text-primary font-medium"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 text-primary font-medium">
            <Sparkles className="w-5 h-5" />
            Atendimento 100% personalizado para suas necessidades
          </div>
        </div>
      </div>
    </section>
  )
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z" />
    </svg>
  )
}