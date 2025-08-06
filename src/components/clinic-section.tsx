import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { HeroButton } from "@/components/ui/hero-button"
import { MapPin, Users, Award, Heart, MessageCircle, Sparkles, Clock, Shield } from "lucide-react"

export function ClinicSection() {
  const whatsappNumber = "5511999999999" // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de conhecer a Clínica Allmed e agendar uma visita."

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  const clinicFeatures = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Atendimento Humanizado",
      description: "Cada cliente é recebido com carinho e atenção personalizada"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Resultados Comprovados",
      description: "Centenas de clientes satisfeitos e vidas transformadas"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ambiente Seguro",
      description: "Espaço preparado para acolher e promover bem-estar"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Referência em Terapias",
      description: "Reconhecida qualidade em terapias naturais e integrativas"
    }
  ]

  const services = [
    "Consultas de Iridologia Comportamental",
    "Análise Completa do Estilo de Vida",
    "Sessões de Terapias Integrativas",
    "Acompanhamento Nutricional Holístico",
    "Terapias com Essências Florais",
    "Sessões de Reiki e Energização",
    "Orientações para Mudança de Hábitos",
    "Programa de Bem-Estar Personalizado"
  ]

  const stats = [
    { number: "30+", label: "Anos de Tradição" },
    { number: "1000+", label: "Vidas Transformadas" },
    { number: "98%", label: "Satisfação" },
    { number: "24/7", label: "Suporte WhatsApp" }
  ]

  return (
    <section id="clinica" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50">
            Nossa Clínica
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Clínica Allmed
          </h2>
          <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 shadow-soft">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground text-2xl block mb-4">
                Referência em Terapias Naturais e Acompanhamento Integrativo
              </strong>
              A Clínica Allmed é um espaço acolhedor dedicado ao bem-estar integral, onde cada pessoa encontra o cuidado personalizado que merece. Com atendimento humanizado e resultados comprovados, somos reconhecidos por centenas de clientes satisfeitos que transformaram suas vidas através de nossas terapias naturais.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-primary font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Localização privilegiada</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Atendimento personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Excelência reconhecida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center lg:text-left">
                Por que escolher a Clínica Allmed?
              </h3>
              
              <div className="grid gap-6">
                {clinicFeatures.map((feature, index) => (
                  <Card 
                    key={index}
                    className="bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-soft transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold mb-4">
                  Visite a Clínica Allmed
                </h4>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  Conheça nosso espaço acolhedor e descubra como podemos ajudar você a alcançar o bem-estar que merece.
                </p>
                <HeroButton
                  variant="secondary"
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-white text-primary hover:bg-white/90 gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Agende uma Visita
                </HeroButton>
              </CardContent>
            </Card>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center lg:text-left">
                Serviços Oferecidos
              </h3>
              
              <Card className="bg-card border-primary/20">
                <CardContent className="p-8">
                  <div className="grid gap-4">
                    {services.map((service, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-4 bg-primary/5 rounded-xl p-4 hover:bg-primary/10 transition-colors duration-300 animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-foreground font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Clinic info */}
            <Card className="bg-card border-primary/20">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-foreground mb-6">
                  Informações da Clínica
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Localização</p>
                      <p className="text-sm text-muted-foreground">São Paulo, SP - Endereço será atualizado</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Horário de Funcionamento</p>
                      <p className="text-sm text-muted-foreground">Segunda à Sexta: 9h às 18h</p>
                      <p className="text-sm text-muted-foreground">Sábados: Mediante agendamento</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Contato Direto</p>
                      <p className="text-sm text-muted-foreground">WhatsApp 24/7 para agendamentos</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}