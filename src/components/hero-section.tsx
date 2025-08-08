import { HeroButton } from "@/components/ui/hero-button"
import { MessageCircle, Heart } from "lucide-react"
import heroImage from "@/assets/hero-holistic.jpg"

export function HeroSection() {
  const whatsappNumber = "5585991196202"
  const whatsappMessage = "Olá Oséias! Gostaria de agendar uma consulta e saber mais sobre as terapias integrativas."

  const handleWhatsAppClick = (action: string) => {
    const encodedMessage = encodeURIComponent(`${whatsappMessage} (${action})`)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Ambiente de terapia holística sereno" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Transforme sua vida com
          <span className="block text-warm-cream mt-2">terapias integrativas</span>
          <span className="block text-calm-blue mt-2">personalizadas</span>
        </h1>

        <p
          className="text-xl md:text-2xl mb-8 text-warm-cream opacity-90 animate-fade-in max-w-3xl mx-auto leading-relaxed"
          style={{ animationDelay: '0.3s' }}
        >
          <span className="block mb-2 text-2xl md:text-3xl font-semibold">
            "Cuidar da sua saúde é um ato de amor-próprio."
          </span>
          Há mais de três décadas, Oséias Mendes dedica-se a transformar vidas por meio de terapias integrativas e personalizadas.
        </p>

        {/* Foto */}
        <div className="w-40 h-40 bg-gradient-primary rounded-full mx-auto mb-8 overflow-hidden">
          <img src="./oseias.png" alt="Foto de Oséias Mendes" className="w-full h-full object-cover" />
        </div>

        {/* Benefícios */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold mb-2">"Uma vida mais leve e equilibrada"</h3>
            <p className="text-warm-cream opacity-80">Começa com o autoconhecimento</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold mb-2">"Você merece viver em harmonia"</h3>
            <p className="text-warm-cream opacity-80">Corpo, mente e emoções em equilíbrio</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold mb-2">Resultados Comprovados</h3>
            <p className="text-warm-cream opacity-80">30+ anos de experiência e sucesso</p>
          </div>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <HeroButton
            variant="whatsapp"
            size="lg"
            onClick={() => handleWhatsAppClick("Fale com Oséias Mendes agora")}
            className="gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            Fale com Oséias Mendes agora
          </HeroButton>

          <HeroButton
            variant="outline"
            size="lg"
            onClick={() => handleWhatsAppClick("Agende sua sessão personalizada")}
            className="text-white border-white/50 hover:bg-white hover:text-primary gap-3"
          >
            <Heart className="w-6 h-6" />
            Agende sua sessão personalizada
          </HeroButton>
        </div>

        {/* Indicador de confiança */}
        <p className="mt-12 animate-fade-in text-warm-cream opacity-80 text-lg" style={{ animationDelay: '1.2s' }}>
          ✨ Mais de <span className="font-bold text-white">30 anos</span> transformando vidas
        </p>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
