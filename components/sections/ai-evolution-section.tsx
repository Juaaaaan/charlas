"use client"

import { motion } from "framer-motion"

const layers = [
  {
    title: "IA Tradicional",
    subtitle: "Sistemas expertos",
    description: "Reglas programadas manualmente",
    width: "100%",
    opacity: 0.15
  },
  {
    title: "Machine Learning",
    subtitle: "Aprendizaje automático",
    description: "El sistema aprende de los datos",
    width: "80%",
    opacity: 0.25
  },
  {
    title: "Deep Learning",
    subtitle: "Redes neuronales profundas",
    description: "Capas de abstracción complejas",
    width: "60%",
    opacity: 0.4
  },
  {
    title: "IA Generativa",
    subtitle: "Modelos de lenguaje",
    description: "Crea contenido nuevo y original",
    width: "40%",
    opacity: 1
  }
]

export function AIEvolutionSection() {
  return (
    <section className="min-h-screen flex items-center py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Evolución
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance">
            Del ML a la IA generativa
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Cada capa construye sobre la anterior, aumentando capacidad y complejidad.
          </p>
        </motion.div>

        {/* Nested layers diagram */}
        <div className="relative flex flex-col items-center gap-4">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.title}
              className="relative w-full flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div 
                className="relative rounded-2xl border border-border/50 overflow-hidden transition-all duration-500 hover:border-primary/30"
                style={{ width: layer.width }}
              >
                <div 
                  className="absolute inset-0"
                  style={{ 
                    background: index === layers.length - 1 
                      ? 'linear-gradient(135deg, rgba(100, 150, 255, 0.15) 0%, rgba(100, 150, 255, 0.05) 100%)'
                      : `rgba(255, 255, 255, ${layer.opacity * 0.03})`
                  }}
                />
                
                <div className="relative p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`
                        w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold
                        ${index === layers.length - 1 ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}
                      `}>
                        {index + 1}
                      </span>
                      <h3 className={`text-xl font-semibold ${index === layers.length - 1 ? 'text-primary' : 'text-foreground'}`}>
                        {layer.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground ml-11">
                      {layer.subtitle}
                    </p>
                  </div>
                  
                  <p className={`
                    text-sm md:text-right
                    ${index === layers.length - 1 ? 'text-primary/80' : 'text-muted-foreground'}
                  `}>
                    {layer.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual indicator */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <span>Mayor complejidad</span>
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-muted to-primary" />
            <span className="text-primary">Mayor capacidad</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
