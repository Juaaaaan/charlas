# Guía de ponente

## Charla 4 - Automatización con IA

Este documento está pensado como apoyo para hablar sobre la web durante la charla. No hace falta decirlo literal. La idea es que te ayude a mantener el hilo, el ritmo y las transiciones.

## Estructura sugerida

1. Hero / apertura
2. Bloque 1 - Del equipo de agentes a la automatización
3. Bloque 2 - Elegir el nivel adecuado
4. Bloque 3 - Diseñar automatización con control
5. Bloque 4 - Límites, trazabilidad y criterio
6. Cierre y paso a demo

## Reparto aproximado de tiempo

1. Apertura: 2-3 min
2. Bloque 1: 5-6 min
3. Bloque 2: 8-9 min
4. Bloque 3: 8-9 min
5. Bloque 4 y cierre: 4-5 min

## Hero / apertura

### Qué se ve

Portada con el título de la charla y los tres ejes: integrar la IA en el proceso, elegir el nivel adecuado y diseñar con control.

### Qué decir

"Hoy no quiero enfocar la IA como una colección de herramientas sueltas ni como una demo llamativa. Lo que quiero es aterrizar una pregunta mucho más útil para empresa: dónde entra la IA en el trabajo real, qué parte hace por sí sola y qué parte sigue necesitando criterio humano."

"La charla va a ir en cuatro bloques. Primero, ver el salto entre usar agentes y tener una automatización dentro del proceso. Segundo, entender que no todo necesita automatización y que hay distintos niveles de uso. Tercero, ver cómo se diseña una automatización con control para que no se convierta en una fuente de riesgo. Y cuarto, dejar claro dónde están los límites y qué mínimos pediría para llevar esto a entorno real."

### Idea que debe quedar

La pregunta importante no es si la IA puede hacer algo, sino cómo entra en el proceso sin perder control.

### Transición

"Empiezo desde el punto en el que nos quedamos en la charla anterior."

## Bloque 1 - Del equipo de agentes a la automatización

### Qué se ve

Comparativa entre equipo de agentes y automatización con IA.

### Qué decir

"En la charla anterior ya vimos algo muy potente: varios agentes coordinados pueden resolver trabajo complejo bastante bien. Pueden repartir tareas, especializarse y producir un resultado útil."

"Pero ese flujo seguía teniendo un límite importante: la persona seguía en medio del circuito. Tenía que arrancar el trabajo, pasar contexto, decidir cuál era el siguiente paso y hacer de pegamento entre piezas."

"Ese punto es importante, porque un sistema puede ser muy capaz y aun así no estar automatizado. Puede ayudarte mucho a hacer trabajo, pero seguir dependiendo de ti para operar."

"El siguiente salto natural no es meter más agentes. El siguiente salto es integrar la IA dentro del proceso correcto. Es decir: que haya una entrada real, que el sistema interprete, decida y avance dentro de una operativa concreta."

"Y aquí aparece una idea clave: automatizar con IA no es solo poner reglas. Es diseñar un sistema que se activa, entiende qué está pasando, toma una ruta y ejecuta algo útil."

"Eso sí: en cuanto hablamos de autonomía, también tenemos que hablar de supervisión, límites y trazabilidad. Si no, no estamos hablando de madurez. Estamos hablando de fragilidad."

### Ejemplo corto que puedes usar

"Un equipo de agentes puede ayudarte a preparar una respuesta compleja a un cliente. Una automatización con IA empieza cuando ese flujo ya no depende de que alguien lo lance manualmente cada vez, sino que se integra en una entrada real del proceso y sabe hasta dónde avanzar sola."

### Idea que debe quedar

"El salto no es tener más agentes. El salto es integrar la IA en el proceso correcto."

### Transición

"Ahora bien, que la automatización sea el siguiente salto no significa que sea siempre la respuesta correcta. Antes hay que elegir el nivel adecuado."

## Bloque 2 - Elegir el nivel adecuado

### Qué se ve

La escalera de madurez con cinco niveles: chat, prompt estructurado, agente individual, equipo de agentes y automatización.

### Qué decir al abrir el bloque

"Uno de los errores más habituales ahora mismo es intentar automatizar demasiado pronto. Como la tecnología lo permite, a veces se fuerza el nivel cinco cuando todavía el problema estaba en nivel uno, dos o tres."

"Por eso aquí no conviene pensar en una única forma de usar IA. Conviene pensar en niveles de estructura, control y escalabilidad."

### Qué decir en cada nivel

#### Nivel 1 - Chat

"El chat sirve para pensar mejor. Para explorar una idea, desbloquear una duda, resumir, comparar opciones o hacer una tarea puntual. Tiene mucho valor, pero no deja proceso ni consistencia por sí mismo."

#### Nivel 2 - Prompt estructurado

"El prompt estructurado ya no es solo preguntar. Es definir un pequeño procedimiento: rol, criterios, formato, límites. Aquí empezamos a reducir improvisación y a hacer que la salida sea más repetible."

#### Nivel 3 - Agente individual

"El agente individual aparece cuando una pieza de trabajo se repite lo suficiente como para encapsularla. Ya no le pido algo suelto al modelo: creo una función especializada que resuelve siempre el mismo tipo de tarea."

#### Nivel 4 - Equipo de agentes

"El equipo de agentes entra cuando el trabajo tiene fases distintas o necesita especialización por roles. Aquí ya hay coordinación, reparto y más capacidad, pero normalmente todavía con supervisión humana bastante clara."

#### Nivel 5 - Automatización

"La automatización es otro nivel. Aquí el sistema no solo responde cuando alguien se lo pide. Aquí se activa por un trigger, interpreta una entrada, decide un camino y ejecuta algo dentro del proceso."

### Qué remarcar después de los cinco niveles

"Lo importante no es subir siempre hasta el nivel cinco. Lo importante es elegir el nivel adecuado según el tipo de trabajo, el riesgo, la frecuencia y el coste del error."

"Automatizar demasiado pronto suele salir mal por dos motivos. O automatizas una tarea que todavía cambia demasiado, o automatizas algo sin tener criterios claros de calidad."

"La automatización no es el punto de partida. Es un nivel de madurez. Primero entiendes el trabajo, luego lo estabilizas y después decides cuánto sentido tiene escalarlo."

### Preguntas de criterio que puedes lanzar

"¿Esto pasa mucho o poco?"

"¿Siempre se parece o cambia cada vez?"

"¿Sabemos decir qué es una buena salida y qué es una mala salida?"

"¿El riesgo permite automatizar o pide revisión humana?"

### Idea que debe quedar

"La clave no es automatizar todo. Es elegir el nivel adecuado."

### Transición

"Y una vez decides que sí, que aquí ya tiene sentido automatizar, entonces llega la pregunta buena: cómo se diseña esa automatización sin perder control."

## Bloque 3 - Diseñar automatización con control

### Qué se ve

Arquitectura mínima de la automatización, patrones de control y disciplina de diseño.

### Qué decir al abrir el bloque

"Cuando hablamos de automatización útil, no hablamos de conectar un modelo y esperar que mágicamente resuelva el proceso. Hablamos de diseñar un sistema con piezas muy claras."

### Arquitectura mínima

"La primera pieza es el trigger. Algo tiene que activar el flujo: un correo, un formulario, un evento, un documento o una señal de negocio."

"La segunda pieza es la interpretación. El sistema tiene que entender qué ha entrado y qué tipo de caso tiene delante."

"La tercera es la decisión. No todos los casos siguen la misma ruta, así que hay que decidir qué camino corresponde."

"La cuarta es la acción. En algún momento hay que hacer algo útil: actualizar un dato, generar una respuesta, clasificar, derivar, registrar o lanzar otra tarea."

"Y la quinta es la supervisión. Hay que decidir dónde hace falta aviso, aprobación, excepción o parada segura."

"Si falta una de estas piezas, muchas veces no tienes una automatización madura. Tienes una llamada al modelo metida dentro de un proceso todavía mal definido."

### Patrones de control

"No todo tiene que ser completamente automático. De hecho, en muchos casos no debería serlo."

"Hay flujos automáticos con aviso, cuando el riesgo es bajo y lo importante es velocidad con seguimiento."

"Hay flujos automáticos con aprobación, cuando la IA prepara o propone pero una persona valida antes del paso sensible."

"Hay flujos automáticos con excepciones, cuando el sistema avanza solo salvo que detecte algo fuera de patrón."

"Y hay flujos con trazabilidad reforzada, cuando lo importante es poder revisar después qué decidió el sistema y por qué."

### Disciplina de diseño

"Aquí suele fallarse por diseño, no por modelo. Se falla cuando se mezclan interpretación, decisión y acción sin saber quién responde en cada fase."

"Se falla cuando se automatiza una salida sin haber definido antes cómo se evalúa si está bien o mal."

"Se falla cuando se habla de autonomía sin hablar de registro, supervisión y excepciones."

"Y se falla cuando se empieza pensando en la herramienta en lugar de empezar pensando en el proceso."

### Idea que debe quedar

"La automatización sin control no es madurez. Es fragilidad."

### Transición

"Antes de cerrar, quiero dejar claro también cuándo no conviene automatizar y qué mínimos pediría yo para llevar esto a entorno real."

## Bloque 4 - Límites, trazabilidad y criterio

### Qué se ve

Lista de casos en los que no conviene automatizar y lista de controles mínimos exigibles.

### Qué decir

"No todo proceso que suena interesante debería automatizarse. A veces el problema no es de tecnología, sino de falta de claridad operativa."

"Yo no automatizaría algo si no sé explicar bien cómo funciona el proceso actual."

"Tampoco si el caso cambia tanto que no puedo definir un patrón razonable."

"Tampoco si el error es crítico y todavía no he diseñado control humano."

"Tampoco si ocurre tan poco que el esfuerzo de automatizar no compensa."

"Y desde luego no lo haría si luego no puedo auditar qué hizo el sistema y por qué."

"Para plantearlo en serio, como mínimo pediría registro de eventos, decisiones y acciones; avisos o escalado cuando haya excepciones; revisión humana en pasos sensibles; medidas de calidad; y una salida segura cuando el sistema no tenga suficiente confianza."

"Ese punto es importante porque cambia la conversación. Ya no hablamos de una demo bonita. Hablamos de una capacidad operativa que tiene que convivir con riesgo, calidad y responsabilidad."

### Aterrizaje hacia la demo

"Cuando esto se lleva a una herramienta real, lo que buscamos es una capa que conecte eventos, IA y acciones dentro del entorno corporativo. Ahí es donde encaja una plataforma de automatización con IA: no como chat aislado, sino como pieza del proceso."

## Cierre

### Qué decir

"Si tuviera que cerrar la charla con cuatro ideas, una por bloque, serían estas."

"Primera: el salto no es tener más agentes. El salto es integrar la IA en el proceso correcto."

"Segunda: la clave no es automatizar todo. Es elegir el nivel adecuado."

"Tercera: la automatización sin control no es madurez. Es fragilidad."

"Cuarta: no basta con que algo se pueda automatizar. Tiene que poder hacerse con criterio, trazabilidad y responsabilidad."

"Y si quiero condensarlo todavía más, diría esto: el chat ayuda a pensar, los agentes ayudan a hacer tareas y la automatización ayuda a escalar trabajo. Pero el valor real aparece cuando decides bien cuándo cada nivel tiene sentido."

"Con esa base conceptual clara, ahora sí tiene sentido pasar a una demo, porque ya no vamos a mirar solo la herramienta. Vamos a mirar el proceso, el nivel elegido y el control."

## Frases de apoyo por si quieres rematar

"No todo lo que puede automatizarse conviene automatizarlo."

"Una automatización buena no empieza en el modelo. Empieza en el proceso."

"Más autonomía no siempre significa más madurez."

"El valor real aparece cuando la IA encaja en una operativa con criterio."

## Versión corta del cierre en 4 ideas

1. Bloque 1: "El salto no es tener más agentes. Es integrar la IA en el proceso correcto."
2. Bloque 2: "La clave no es automatizar todo. Es elegir el nivel adecuado."
3. Bloque 3: "La automatización sin control no es madurez. Es fragilidad."
4. Bloque 4: "Automatizar con sentido exige límites, trazabilidad y responsabilidad."
