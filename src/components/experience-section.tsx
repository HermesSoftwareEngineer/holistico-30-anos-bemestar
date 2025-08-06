import { Badge } from "@/components/ui/badge"
import { Award, Users, Clock, Star } from "lucide-react"

export function ExperienceSection() {
  const stats = [
    {
      icon: <Clock className="w-8 h-8" />,
      number: "30+",
      label: "Anos de Experiência",
      description: "Três décadas dedicadas ao bem-estar e cura holística"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "1000+",
      label: "Vidas Transformadas",
      description: "Clientes que encontraram equilíbrio e paz interior"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Técnicas Especializadas",
      description: "Formações e certificações em diversas modalidades"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "98%",
      label: "Satisfação dos Clientes",
      description: "Resultados comprovados e reconhecidos"
    }
  ]

  const specializations = [
    "Iridologia Comportamental",
    "Iridologia Clínica",
    "Terapia Floral",
    "Aromaterapia",
    "Reiki",
    "Análise Bioenergética",
    "Terapia Integrativa",
    "Nutrição Holística"
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50">
            Experiência Comprovada
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mais de 30 Anos Transformando Vidas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma jornada dedicada ao desenvolvimento pessoal e bem-estar, com formação sólida 
            e experiência prática em diversas modalidades terapêuticas holísticas.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300 shadow-soft">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Especializações e Formações
            </h3>
            <p className="text-lg text-muted-foreground">
              Conhecimento profundo em múltiplas modalidades terapêuticas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specializations.map((specialization, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-primary/5 rounded-xl p-4 hover:bg-primary/10 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground font-medium">{specialization}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-gradient-primary rounded-full px-8 py-4 text-primary-foreground font-semibold">
              <Award className="w-6 h-6" />
              Formação continuada e atualização constante
            </div>
          </div>
        </div>

        {/* Professional Commitment */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto bg-gradient-secondary rounded-2xl p-8 shadow-soft">
            <h4 className="text-2xl font-bold text-foreground mb-4">
              Compromisso com a Excelência
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              "Cada cliente é único e merece um atendimento personalizado. Minha missão é 
              proporcionar um ambiente seguro e acolhedor onde a transformação genuína pode acontecer, 
              sempre respeitando o tempo e as necessidades individuais de cada pessoa."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}