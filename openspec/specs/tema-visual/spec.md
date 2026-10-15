# tema-visual Specification

## Purpose

Define cómo el sitio de las charlas elige, recuerda y aplica el tema visual claro u
oscuro, y qué garantiza sobre la legibilidad de cualquier ruta en ambos temas, para que
la misma página sirva como apoyo visual tanto en una sala a oscuras como con luz
ambiental alta.

## Requirements

### Requirement: Preferencia del sistema como tema inicial

El sitio SHALL adoptar, en la primera visita, el tema que indique la preferencia del
sistema operativo del visitante (`prefers-color-scheme`), sin pasos previos por su parte.

#### Scenario: Primera visita con sistema en claro
- **WHEN** un visitante sin preferencia guardada abre cualquier ruta del sitio con el
  sistema configurado en claro
- **THEN** la página se muestra en tema claro

#### Scenario: Primera visita con sistema en oscuro
- **WHEN** un visitante sin preferencia guardada abre cualquier ruta del sitio con el
  sistema configurado en oscuro
- **THEN** la página se muestra en tema oscuro

#### Scenario: Sin destello de tema incorrecto
- **WHEN** se carga cualquier ruta del sitio
- **THEN** la primera pintura ya usa el tema que corresponde, sin un destello visible del
  tema contrario

### Requirement: Cambio manual de tema

El sitio SHALL ofrecer en todas sus rutas un control para cambiar entre tema claro y
oscuro, y el cambio MUST aplicarse de inmediato sin recargar la página.

#### Scenario: Alternar desde oscuro
- **WHEN** el sitio se muestra en oscuro y el visitante activa el control de tema
- **THEN** el sitio pasa a claro de inmediato y el control refleja el estado nuevo

#### Scenario: Alternar desde claro
- **WHEN** el sitio se muestra en claro y el visitante activa el control de tema
- **THEN** el sitio pasa a oscuro de inmediato y el control refleja el estado nuevo

#### Scenario: Control disponible en toda ruta
- **WHEN** el visitante abre la home, la Biblioteca, la ficha de una nota o la página de
  cualquier charla
- **THEN** el control de tema está presente y utilizable en esa ruta

#### Scenario: Control accesible por teclado y lector de pantalla
- **WHEN** el visitante navega con teclado hasta el control de tema
- **THEN** el control recibe foco visible, se activa con teclado y expone un nombre
  accesible que describe la acción

### Requirement: La elección manual persiste y manda

Una vez el visitante elige un tema a mano, el sitio SHALL recordar esa elección entre
rutas y entre visitas, y esa elección MUST tener prioridad sobre la preferencia del
sistema.

#### Scenario: Persiste al navegar
- **WHEN** el visitante elige un tema en la home y navega a una charla o a la Biblioteca
- **THEN** la ruta nueva se muestra en el tema elegido

#### Scenario: Persiste entre visitas
- **WHEN** el visitante que eligió un tema vuelve a abrir el sitio más tarde
- **THEN** el sitio se muestra en el tema que eligió, no en el del sistema

#### Scenario: El sistema no pisa la elección
- **WHEN** el visitante tiene un tema elegido a mano y su sistema está en el tema
  contrario
- **THEN** el sitio respeta el tema elegido a mano

### Requirement: Toda ruta es legible en ambos temas

Cada ruta publicada del sitio SHALL ser legible en claro y en oscuro: ningún fondo,
gradiente decorativo, borde, icono, diagrama o texto MUST quedar fijado a un tema
mientras el resto de la página cambia.

#### Scenario: Charlas en tema claro
- **WHEN** el visitante abre cualquiera de las rutas de charla en tema claro
- **THEN** sus fondos y gradientes decorativos son claros y su texto mantiene contraste
  suficiente para leerse en proyector

#### Scenario: Home y Biblioteca en tema claro
- **WHEN** el visitante abre la home, el índice de la Biblioteca o la ficha de una nota en
  tema claro
- **THEN** fondos, tarjetas, bordes y el grafo de conexiones se muestran en la paleta clara

#### Scenario: Diagramas que se pintan solos
- **WHEN** el visitante ve una sección cuyo diagrama define sus propios colores de relleno
  y trazo
- **THEN** el diagrama se lee sobre el fondo del tema activo, con sus colores de acento
  reconocibles en ambos temas

#### Scenario: Contraste mínimo
- **WHEN** se comprueba el texto de cuerpo y los titulares de cualquier ruta en cualquiera
  de los dos temas
- **THEN** la relación de contraste frente a su fondo cumple WCAG 2.1 AA (4.5:1 para texto
  normal, 3:1 para texto grande)

### Requirement: Identidad visual estable entre temas

El tema claro SHALL conservar la identidad de la serie: el azul de acento sigue siendo el
color primario y `destructive` sigue reservado a señales de alerta.

#### Scenario: El acento no cambia de identidad
- **WHEN** el visitante compara la misma página en claro y en oscuro
- **THEN** los elementos de acento siguen leyéndose como el mismo azul de la serie,
  ajustado en luminosidad para contrastar sobre el fondo de cada tema

#### Scenario: El favicon acompaña al tema
- **WHEN** el sistema del visitante está en claro o en oscuro
- **THEN** el icono de pestaña que se sirve es el que corresponde a ese esquema
