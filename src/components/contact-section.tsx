import { HeroButton } from "@/components/ui/hero-button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, Mail, MapPin, Clock, Heart } from "lucide-react"

export function ContactSection() {
  const whatsappNumber = "5511999999999" // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta e saber mais sobre as terapias holísticas."

  const handleWhatsAppClick = (action: string) => {
    const encodedMessage = encodeURIComponent(`${whatsappMessage} (${action})`)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone/WhatsApp",
      content: "+55 (11) 99999-9999",
      description: "Atendimento personalizado"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      content: "contato@terapiaholistica.com",
      description: "Resposta em até 24h"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      content: "São Paulo, SP",
      description: "Atendimento presencial e online"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário de Atendimento",
      content: "Seg a Sex: 9h às 18h",
      description: "Sábados mediante agendamento"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comece Sua Transformação Hoje
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dê o primeiro passo em direção ao seu bem-estar. Entre em contato e descubra 
            como as terapias holísticas podem transformar sua vida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="bg-card border-primary/20 hover:shadow-soft transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Professional Photo Placeholder */}
            <Card className="bg-gradient-secondary border-primary/20 overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  [Nome do Terapeuta]
                </h3>
                <p className="text-muted-foreground mb-4">
                  Terapeuta Holístico • 30+ anos de experiência
                </p>
                <div className="bg-card rounded-xl p-4">
                  <p className="text-sm text-muted-foreground italic">
                    "Espaço reservado para sua foto profissional e uma breve mensagem pessoal sobre sua missão e paixão pelas terapias holísticas."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Card className="bg-gradient-primary text-primary-foreground overflow-hidden relative">
              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-6">
                  <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-90" />
                  <h3 className="text-3xl font-bold mb-4">
                    Pronto para Começar?
                  </h3>
                  <p className="text-primary-foreground/90 text-lg leading-relaxed">
                    Agende agora sua primeira consulta e descubra o caminho para uma vida mais equilibrada e plena.
                  </p>
                </div>

                <div className="space-y-4">
                  <HeroButton
                    variant="secondary"
                    size="lg"
                    onClick={() => handleWhatsAppClick("Agende agora pelo WhatsApp")}
                    className="w-full bg-white text-primary hover:bg-white/90 border-none"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Agende agora pelo WhatsApp
                  </HeroButton>

                  <HeroButton
                    variant="outline"
                    size="lg"
                    onClick={() => handleWhatsAppClick("Fale direto comigo")}
                    className="w-full border-white/50 text-white hover:bg-white hover:text-primary"
                  >
                    Fale direto comigo
                  </HeroButton>

                  <HeroButton
                    variant="outline"
                    size="lg"
                    onClick={() => handleWhatsAppClick("Comece sua transformação hoje")}
                    className="w-full border-white/50 text-white hover:bg-white hover:text-primary"
                  >
                    Comece sua transformação hoje
                  </HeroButton>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-primary-foreground/80">
                    ✨ Primeira consulta com desconto especial
                  </p>
                </div>
              </CardContent>
              
              {/* Decorative background */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4K')] opacity-20" />
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-card rounded-xl p-6 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center bg-card rounded-xl p-6 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
            </div>

            {/* Note */}
            <Card className="bg-warm-cream/20 border-primary/30">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong>Nota:</strong> Lembre-se de atualizar o número do WhatsApp e demais informações de contato com seus dados reais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}