# Informe posterior - Charla 5: IA en local

Este documento resume las ideas principales vistas en la charla sobre IA en local. Está pensado para quienes ya han asistido a la sesión y quieren conservar una guía práctica para entender qué significa ejecutar modelos en local, cómo leer sus características y qué límites conviene tener presentes antes de aplicarlo en un caso real.

## 1. Qué significa IA en local

Usar IA en local no significa entrenar un modelo desde cero. En la mayoría de casos significa descargar un modelo ya creado y ejecutarlo en un equipo propio, un servidor interno o una infraestructura controlada por la organización.

La diferencia principal frente a usar servicios como ChatGPT, Copilot u otras plataformas cloud está en dónde se ejecuta el modelo y quién controla el entorno.

En un servicio cloud, el usuario accede a un modelo remoto mediante una web, una API o una herramienta corporativa. La capacidad de cálculo, las actualizaciones, la disponibilidad y buena parte de la configuración dependen del proveedor.

En local, el modelo se ejecuta más cerca del usuario, los documentos o los sistemas internos. Esto puede aportar más control, más previsibilidad y más independencia, pero también implica asumir responsabilidades técnicas y operativas.

La idea central de la charla fue:

> IA en local no significa IA privada por arte de magia. Significa cambiar dónde se ejecuta el modelo y quién controla el entorno.

## 2. Qué cambia respecto a la IA como servicio

La IA local cambia varias piezas de la decisión.

Por un lado, permite controlar mejor dónde están los datos, qué versión del modelo se usa, qué herramientas acceden al sistema y cómo se integra con procesos internos. Esto puede ser importante cuando se trabaja con documentación sensible, entornos sin conexión, pruebas internas o necesidades de coste más predecible.

Por otro lado, obliga a hacerse cargo de cuestiones que en cloud suelen quedar resueltas por el proveedor: instalación, rendimiento, hardware, actualizaciones, seguridad del entorno, mantenimiento y soporte.

Por eso no debe verse como una sustitución automática de la IA cloud. Local y cloud resuelven problemas distintos y muchas veces conviven.

## 3. Cómo elegir un modelo local

La forma más práctica de elegir un modelo no es empezar por el nombre del modelo, sino por la tarea.

Antes de descargar nada conviene responder:

- Qué necesito que haga el modelo.
- Qué datos va a manejar.
- Qué nivel de calidad necesito.
- Qué velocidad de respuesta es aceptable.
- Qué hardware tengo disponible.
- Qué riesgo tendría una respuesta incorrecta.
- Quién va a revisar o validar el resultado.

Un modelo local se elige combinando tres factores:

1. La tarea que debe resolver.
2. Los datos y restricciones del caso.
3. La máquina donde se va a ejecutar.

La regla práctica es:

> Empieza con un modelo pequeño o medio, pruébalo con ejemplos reales y sube de tamaño solo si necesitas más calidad.

## 4. Cómo leer la ficha de un modelo

En local aparecen muchos nombres, siglas y versiones. No hace falta entender todos los detalles internos, pero sí saber leer las señales principales.

### Tamaño: 3B, 7B, 13B, 70B

La letra `B` suele referirse a "billions", es decir, miles de millones de parámetros.

Ejemplos habituales:

- `3B`: modelo pequeño, más fácil de ejecutar, útil para tareas simples o pruebas rápidas.
- `7B`: equilibrio frecuente entre calidad y consumo.
- `13B`: más capacidad, pero mayor necesidad de memoria y mejor hardware.
- `70B`: mucha más capacidad potencial, pero requiere infraestructura más potente.

Más grande no significa automáticamente mejor para cualquier caso. Un modelo pequeño especializado puede ser más útil que uno grande generalista si la tarea está bien acotada.

### Especialización

No todos los modelos están pensados para lo mismo. Conviene distinguir entre:

- Modelos generalistas: sirven para conversación, redacción, resumen o tareas variadas.
- Modelos de código: están optimizados para leer, explicar o generar código.
- Modelos de razonamiento: intentan resolver tareas con más pasos lógicos.
- Modelos de embeddings: convierten textos en representaciones numéricas para búsqueda semántica o RAG.
- Modelos de visión: pueden trabajar con imágenes además de texto.
- Modelos multilingües o especializados por idioma: pueden ser relevantes si el trabajo principal está en español.

Elegir bien la especialización evita forzar un modelo en una tarea para la que no fue diseñado.

### Cuantización: Q4, Q5, Q8

La cuantización reduce el peso del modelo para que pueda ejecutarse con menos memoria y, a menudo, con más velocidad.

Una lectura simple:

- `Q4`: más ligero, suele consumir menos memoria, puede perder algo de calidad.
- `Q5` o `Q6`: punto intermedio habitual entre calidad y consumo.
- `Q8`: conserva más información del modelo original, pero necesita más recursos.

La cuantización no convierte un modelo malo en bueno. Solo ajusta el equilibrio entre consumo, velocidad y calidad.

### Contexto

El contexto indica cuánta información puede tener presente el modelo en una interacción: instrucciones, texto pegado, historial, documentos o código.

Un contexto mayor ayuda cuando se trabaja con documentos largos o conversaciones extensas, pero no arregla una mala tarea. Si las instrucciones son confusas, los datos están mal preparados o la pregunta no está bien formulada, el modelo puede fallar aunque tenga mucho contexto.

### Hardware

La experiencia depende mucho de la máquina.

Hay cuatro elementos clave:

- CPU: permite ejecutar modelos, aunque normalmente con menor velocidad.
- GPU: acelera mucho la generación cuando está soportada.
- RAM: memoria general del equipo; condiciona si el modelo puede cargarse.
- VRAM: memoria de la tarjeta gráfica; suele ser crítica para que el modelo funcione con fluidez en GPU.

Un modelo puede ser técnicamente ejecutable y aun así no ser útil si responde demasiado lento.

## 5. Cómo saber cuál usar

Una forma sencilla de decidir es seguir este proceso:

1. Define la tarea con ejemplos reales.
2. Decide si necesitas un modelo generalista, de código, embeddings, visión u otro tipo.
3. Empieza por un tamaño razonable para tu equipo, por ejemplo 7B o 8B si el hardware es limitado.
4. Prueba una cuantización intermedia, como Q4 o Q5, si necesitas reducir consumo.
5. Mide calidad, velocidad y estabilidad.
6. Comprueba si los errores son aceptables para el proceso.
7. Sube de tamaño o cambia de especialización solo si la prueba demuestra que hace falta.

La comparación útil no es "este modelo es bueno o malo". La comparación útil es:

> Para esta tarea, con estos datos, en esta máquina, responde lo bastante bien.

## 6. Usos donde la IA local tiene sentido

La IA local puede aportar valor cuando hay una restricción clara que justifica acercar el modelo a los datos o al entorno.

Algunos usos vistos en la charla:

- Documentación interna: preguntar, resumir o buscar sobre contenido corporativo sin enviarlo a servicios externos.
- Contratos e informes: localizar riesgos, obligaciones, fechas o puntos clave para preparar una revisión humana.
- Ayuda técnica: apoyar a equipos internos con documentación, procedimientos o incidencias repetitivas.
- Desarrollo y prototipos: generar borradores, utilidades o pruebas manteniendo control local.
- RAG local: combinar búsqueda en documentos propios con generación de respuestas.
- Transformación de texto: normalizar entradas, convertir formatos o preparar borradores repetitivos.

En todos los casos, el modelo no sustituye el control humano. Ayuda a preparar, acelerar o estructurar el trabajo, pero alguien debe validar el resultado cuando hay impacto real.

## 7. Cuándo conviene local, cloud o híbrido

La decisión no debería plantearse como local contra cloud.

Local suele tener más sentido cuando pesan:

- Privacidad o control sobre datos.
- Trabajo offline o en entornos restringidos.
- Coste más fijo o predecible.
- Control de versión del modelo.
- Integración en pruebas internas.
- Necesidad de evitar dependencia total de un proveedor.

Cloud suele tener ventaja cuando pesan:

- Máxima calidad disponible.
- Acceso a modelos punteros.
- Escalabilidad.
- Menor mantenimiento técnico.
- Integración con herramientas ya gobernadas por la empresa.
- Casos donde la latencia o la infraestructura local no compensan.

En empresa, lo más realista suele ser un enfoque híbrido: local para ciertos datos, pruebas o tareas controladas; cloud para tareas que requieren más calidad, escala o menor carga operativa.

## 8. Límites de la IA local

La IA local tiene ventajas, pero también límites importantes.

### Calidad

Los modelos locales pueden ser muy útiles, pero no siempre alcanzan la calidad de los mejores modelos cloud. Esto se nota especialmente en razonamiento complejo, instrucciones largas, tareas ambiguas o generación de respuestas muy especializadas.

### Rendimiento

El hardware marca la experiencia. Si el equipo no tiene suficiente RAM, VRAM o capacidad de cálculo, el modelo puede cargar mal, responder lento o ser incómodo para el uso diario.

### Seguridad

Ejecutar en local no garantiza seguridad por sí mismo. También hay que controlar accesos, ficheros, logs, prompts, respuestas, integraciones y permisos. Si el entorno local está mal gestionado, puede seguir habiendo riesgo.

### Mantenimiento

Los modelos cambian, las herramientas se actualizan y las configuraciones pueden romperse. Alguien debe encargarse de mantener versiones, dependencias, rendimiento y soporte.

### Errores y alucinaciones

Los modelos locales también se equivocan, inventan o responden con seguridad cuando no deberían. La revisión humana sigue siendo necesaria, especialmente en decisiones con impacto legal, financiero, técnico o reputacional.

### Encaje operativo

No basta con que el modelo funcione en una demo. Hay que decidir quién lo mantiene, quién lo valida, cómo se auditan los resultados, qué ocurre cuando falla y cuándo debe escalarse a cloud o a revisión humana.

## 9. Preguntas antes de adoptar IA local

Antes de aplicar IA local en un caso real, conviene responder:

- Qué problema concreto queremos resolver.
- Qué datos necesita el modelo.
- Dónde quedan los documentos, prompts, respuestas y registros.
- Qué calidad mínima hace aceptable el caso.
- Qué errores son tolerables y cuáles no.
- Quién revisa el resultado.
- Quién instala, actualiza y mantiene el sistema.
- Qué coste tiene el hardware y el soporte.
- Qué pasa si el modelo va lento o falla.
- Cuándo conviene pasar a cloud o combinar ambos enfoques.

## 10. Ideas finales

La IA local da control, no magia.

El modelo se elige por tarea, datos y máquina.

La ficha técnica orienta, pero la prueba real decide.

Local y cloud no compiten siempre. Muchas veces conviven.

El valor está en saber cuándo la IA debe estar cerca de tus datos, cuándo conviene usar cloud y cómo validar la decisión con ejemplos reales antes de convertir una prueba en una solución.
