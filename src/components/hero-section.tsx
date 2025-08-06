import { HeroButton } from "@/components/ui/hero-button"
import { MessageCircle, Heart, Sparkles } from "lucide-react"
import heroImage from "@/assets/hero-holistic.jpg"

export function HeroSection() {
  const whatsappNumber = "5511999999999" // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre as terapias holísticas e agendar uma consulta."

  const handleWhatsAppClick = (action: string) => {
    const encodedMessage = encodeURIComponent(`${whatsappMessage} (${action})`)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ambiente de terapia holística sereno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Floating icons */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="animate-float">
              <Heart className="w-8 h-8 text-warm-cream opacity-70" />
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <Sparkles className="w-8 h-8 text-warm-cream opacity-70" />
            </div>
            <div className="animate-float" style={{ animationDelay: '2s' }}>
              <MessageCircle className="w-8 h-8 text-warm-cream opacity-70" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            Transforme sua vida com
            <span className="block text-warm-cream mt-2">
              terapias holísticas
            </span>
            <span className="block text-calm-blue mt-2">
              personalizadas
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-warm-cream opacity-90 animate-fade-in max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Descubra o equilíbrio emocional e físico através de mais de 30 anos de experiência em terapias holísticas, iridologia e análise do estilo de vida.
          </p>

          {/* Benefits highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-2">Equilíbrio Emocional</h3>
              <p className="text-warm-cream opacity-80">Encontre a paz interior e harmonia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-2">Alívio do Estresse</h3>
              <p className="text-warm-cream opacity-80">Liberte-se das tensões do dia a dia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-2">Autoconhecimento</h3>
              <p className="text-warm-cream opacity-80">Descubra seu potencial interior</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <HeroButton
              variant="whatsapp"
              size="lg"
              onClick={() => handleWhatsAppClick("Agende agora")}
              className="gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Agende agora pelo WhatsApp
            </HeroButton>
            
            <HeroButton
              variant="outline"
              size="lg"
              onClick={() => handleWhatsAppClick("Fale direto comigo")}
              className="text-white border-white/50 hover:bg-white hover:text-primary gap-3"
            >
              <Heart className="w-6 h-6" />
              Fale direto comigo
            </HeroButton>
          </div>

          {/* Trust indicator */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <p className="text-warm-cream opacity-80 text-lg">
              ✨ Mais de <span className="font-bold text-white">30 anos</span> transformando vidas
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}