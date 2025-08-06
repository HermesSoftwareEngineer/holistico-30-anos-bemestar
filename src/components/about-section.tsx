import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { HeroButton } from "@/components/ui/hero-button"
import { Award, Heart, Users, MessageCircle, Star, Leaf } from "lucide-react"

export function AboutSection() {
  const whatsappNumber = "5511999999999" // Substitua pelo número real
  const whatsappMessage = "Olá Oséias! Gostaria de conhecer mais sobre seu trabalho e agendar uma consulta."

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "30+ Anos de Experiência",
      description: "Três décadas dedicadas ao bem-estar e transformação de vidas"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado e acolhedor para cada cliente"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Centenas de Vidas Transformadas",
      description: "Resultados comprovados e reconhecidos pelos clientes"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Terapias Naturais",
      description: "Métodos integrivos e não invasivos para cura natural"
    }
  ]

  const specializations = [
    "Iridologia Comportamental e Clínica",
    "Análise do Estilo de Vida",
    "Terapias Integrativas",
    "Aromaterapia e Essências Florais",
    "Reiki e Energização",
    "Nutrição Holística"
  ]

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50">
            Sobre o Terapeuta
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conheça Oséias Mendes
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Terapeuta Integrativo e Fundador da Clínica Allmed
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Professional Story */}
          <div className="space-y-8">
            <div className="bg-gradient-secondary rounded-3xl p-8 shadow-soft">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Uma Jornada de Dedicação e Transformação
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Há mais de três décadas</strong>, Oséias Mendes dedica-se a transformar vidas por meio de terapias integrativas e personalizadas. Como fundador da Clínica Allmed, ele combina conhecimento profundo, sensibilidade e técnicas naturais para promover equilíbrio, saúde e bem-estar duradouros.
                </p>
                
                <p>
                  Sua abordagem única integra <strong className="text-primary">saúde física, emocional e energética</strong>, oferecendo um cuidado verdadeiramente holístico que considera cada pessoa em sua totalidade.
                </p>
                
                <div className="bg-primary/10 rounded-xl p-6 border-l-4 border-primary">
                  <p className="italic text-foreground font-medium">
                    "Minha missão é ajudar cada pessoa a descobrir seu potencial de cura natural e encontrar o caminho para uma vida mais equilibrada e plena. Cada cliente é único e merece um cuidado personalizado e humanizado."
                  </p>
                  <p className="text-sm text-primary font-semibold mt-3">— Oséias Mendes</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold mb-4">
                  Pronto para Iniciar sua Jornada?
                </h4>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  Converse diretamente com Oséias Mendes e descubra como as terapias integrativas podem transformar sua vida.
                </p>
                <HeroButton
                  variant="secondary"
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-white text-primary hover:bg-white/90 gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Fale com Oséias Mendes
                </HeroButton>
              </CardContent>
            </Card>
          </div>

          {/* Highlights & Specializations */}
          <div className="space-y-8">
            {/* Professional Photo Placeholder */}
            <Card className="bg-card border-primary/20 overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-40 h-40 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-20 h-20 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Oséias Mendes
                </h3>
                <p className="text-primary font-semibold mb-2">
                  Terapeuta Integrativo
                </p>
                <p className="text-muted-foreground mb-4">
                  Fundador da Clínica Allmed
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground italic">
                    Espaço reservado para foto profissional do Oséias Mendes
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index}
                  className="bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-soft transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
                      {highlight.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      {highlight.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Specializations */}
            <Card className="bg-card border-primary/20">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-foreground mb-6 text-center">
                  Especializações e Formações
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {specializations.map((specialization, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 bg-primary/5 rounded-lg p-3 hover:bg-primary/10 transition-colors duration-300"
                    >
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">{specialization}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}