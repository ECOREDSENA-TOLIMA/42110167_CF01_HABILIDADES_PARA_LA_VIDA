<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Competencias socioemocionales
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-5.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema5/img_1.png', alt='')
      .col-lg-7
        .bloque-texto-d.color-secundario.p-4.ps-0.pb-3.mb-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="color:#E6D09E")
            p Para satisfacer sus necesidades fundamentales, las personas desarrollan competencias socioemocionales que les permiten comunicarse, tomar decisiones éticas, fortalecer la autoestima, ser resilientes ante los imprevistos, trabajar en equipo y regular sus emociones en las relaciones personales y sociales.
            i.fas.fa-quote-right(style="display:none")
          .bloque-texto-d__autor.mt-0.pt-0
            .h5.mb-0 (Ricouer, citado en Raciti, 2016). 
              i.fas.fa-quote-right(style="color:#E6D09E")
        p.mb-2 Estas competencias no funcionan de manera aislada, sino que requieren un equilibrio cultural que favorezca la interacción con el mundo, con los demás y consigo mismo.
        p.mb-2 La satisfacción de las necesidades humanas, impulsa a las personas a buscar tanto su bienestar, como el de su comunidad. En este sentido, los constructos socioemocionales deben reconocerse como una parte esencial de la naturaleza humana, ya que permiten expresar y gestionar deseos y aspiraciones en el ámbito de las relaciones humanas y en conexión con el medio ambiente. Al respecto, analice la siguiente jerarquía:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9.col-12.mb-4.mb-lg-2
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2.</b> <i>Jerarquía necesidades humanas</i>
        figure
          img(src='@/assets/curso/temas/tema5/fig-2a.svg', alt='Figura que relaciona una matriz que representa de manera jerárquica las necesidades humanas.')  
          figcaption Nota. Adaptado de Raciti (2016)


    p.mb-5(data-aos="fade-right") Según Raciti (2016), las competencias son habilidades, destrezas y conductas que pueden observarse, como conocimientos técnicos y comportamientos, o inferirse, como valores, resiliencia o gestión de emociones. Estas competencias se organizan en dos categorías: 

    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/icoA.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Fundantes
              p Relacionadas con el ser.

      .col-lg-5.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/icoB.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Estratégicas
              p Relacionadas con el hacer.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.mb-5.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img_2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        h4.mb-0 Competencias socioemocionales (CSE)
        br
        br
        p.mb-0 Son conocimientos, habilidades y destrezas que ayudan a las personas a interactuar con otros, resolver problemas y alcanzar objetivos de forma autónoma y eficaz. Estas incluyen en cómo se piensa, siente y se comunica para enfrentar los retos diarios.

    p.mb-5(data-aos="fade-right") A continuación, se explican dichas categorías:

    TabsC.mb-5(data-aos="fade-down")
      .p-4.p-lg-5(titulo="CSE del ser (fundantes)")
        .row.justify-content-center.px-lg-0.px-3
          .col-12.col-lg-8.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/img-1A.png', alt='')
          .col-12.col-lg-4
            p.mb-0 Son la base emocional y personal de cada individuo. Incluyen autoestima, resiliencia, regulación emocional y capacidad de comunicación. Estas competencias son esenciales para la conexión con uno mismo, los demás y el mundo.
      .p-4.p-lg-5(titulo="CSE del hacer (estratégicas)")
        .row.justify-content-center.px-lg-0.px-3
          .col-12.col-lg-8.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/img-1B.png', alt='')
          .col-12.col-lg-4
            p.mb-0 Están relacionadas con las acciones que las personas realizan para resolver problemas y alcanzar metas, conectando lo que son con lo que hacen.

    p.mb-5(data-aos="fade-right") Estas competencias se reinterpretan a partir de la matriz del Desarrollo a Escala Humana (DEH), integrándose como herramientas esenciales para satisfacer necesidades fundamentales y construir una vida plena y equilibrada.
    p.mb-5(data-aos="fade-right") De acuerdo a dichas categorías, hacen parte de las competencias fundantes: autoestima, empatía, regulación emocional, resiliencia y comunicación, las cuales se explican a continuación:

    .row.justify-content-center.p-4(data-aos="zoom-in-right")
      .titulo-sexto.color-acento-contenido
        p.pb-0.mb-0 <b>Tabla 15. </b> <em>Matriz de relación competencias fundantes y necesidades existenciales y axiológicas</em>
      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr.text-center
              th(rowspan="2") Competencias fundantes
              th(colspan="4") Necesidades existenciales
              th(rowspan="2") Necesidades axiológicas
            tr.bg-tb-2
              th Ser (Lo que se tiene que ser para cumplir esa necesidad)
              th Tener (lo que se tiene que tener para cumplir esa necesidad)
              th Hacer (lo que se tiene que hacer para cumplir esa necesidad)
              th Estar (en dónde se puede cumplir esa necesidad)
          tbody
            tr
              th Autoestima
              td Exploración de fortalezas, debilidades, sueños, metas, intereses y aspectos a mejorar, como elementos de reconocimiento en la construcción la trayectoria de vida.
              td Desarrolla herramientas para priorizar y atender las necesidades de la vida.
              td Fortalece potencialidades y construye una trayectoria de vida con la cual se alcanza la percepción de realización.
              td Comparte con personas que permiten fortalecer la autoestima en entornos familiares, sociales, laborales, educativos.
              td Afecto, entendimiento, participación, creación, identidad, libertad.
            tr
              th Empatía
              td Se conecta emocionalmente con el otro entendiendo sus necesidades y puntos de vista.
              td Desarrolla capacidades para identificar diferentes perspectivas reconociendo al otro, sus pensamientos y sentimientos.
              td Reconoce los sentimientos y la perspectiva o punto de vista u opinión de otras personas y respeta las diferencias entre lo que cada uno siente respecto a las mismas cosas. 
              td En los diferentes espacios en los que interactúa, trata de entender los puntos de vista y el sentimiento de los demás.
              td Afecto, entendimiento, identidad, participación, libertad.
            tr
              th Regulación emocional
              td Desarrollo de procesos de autoconocimiento que permiten identificar emociones y la manera de regularlas.
              td Utilización herramientas de identificación y manejo de emociones en la vida personal y en la interacción con los otros.
              td Aprende a ejercen una influencia sobre las emociones que experimento, sobre cuando suceden y sobre cómo se experimentan y se expresan.
              td En los espacios en los que participo, se promueve la expresión y manejo de las emociones individuales y colectivas, de una manera constructiva.
              td Subsistencia, protección, afecto, participación, identidad, libertad.
            tr
              th Resiliencia
              td Identificación de las características que permiten superar las situaciones difíciles. 
              td Reconoce los mecanismos que permiten superar la adversidad.
              td Poner en práctica acciones que potencien fortalezas y me ayuden a superar las adversidades. 
              td Creación de espacios con el entorno familiar y de amistad, que permitan consolidar percepciones optimistas del futuro. 
              td Subsistencia, protección, participación, identidad.
            tr
              th Comunicación 
              td Identificación de habilidades para intercambiar información con otros con el fin de comunicar pensamientos, sentimientos y opiniones. 
              td Utilización de formas de comunicación basadas en el respeto y control emocional que permiten exponer claramente ideas y puntos de vista. 
              td Aprender a expresarse verbal y no verbalmente en la interacción con el otro.
              td Creación y participación en espacios para intercambiar opiniones de una manera asertiva.
              td Afecto, entendimiento, participación, identidad.


    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.col-lg-8.order-lg-1.order-2
        p.mb-2 Las CSE articuladas bajo la categoría existencial del hacer se pueden definir como competencias integradoras, en la medida en que se expresan a través de la interacción entre varias competencias fundantes.
        .cajon.cajon.color-secundario.p-4
          p.mb-0 Las competencias CSE integradoras combinan las competencias fundantes y habilidades técnicas específicas para facilitar la acción y expresión en diferentes contextos. Estas competencias permiten a las personas satisfacer sus necesidades existenciales de creación y participación, promoviendo su interacción con el entorno y con los demás.
      .col-8.col-lg-4.order-lg-2.order-1.mb-5.mb-lg-2
        figure
          img(src='@/assets/curso/temas/tema5/img-3.png', alt='')

    p.mb-5(data-aos="fade-right") Y como segunda categoría, hacen parte de las competencias estratégicas: liderazgo, gestión del conflicto, trabajo en equipo y toma de decisiones, las cuales se explican a continuación:


    .row.justify-content-center.p-4(data-aos="zoom-in-right")
      .titulo-sexto.color-acento-contenido
        p.pb-0.mb-0 <b>Tabla 16. </b> <em>Matriz de relación competencias estratégicas y necesidades existenciales y axiológicas</em>
      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr.text-center
              th(rowspan="2") Competencias estratégicas
              th(colspan="4") Necesidades existenciales
              th(rowspan="2") Necesidades axiológicas
            tr.bg-tb-2
              th Ser
              th Tener
              th Hacer
              th Estar
          tbody
            tr
              th Liderazgo 
              td La persona se empodera de sus deseos, sueños y anhelos, planteando su trayectoria de vida como un ser transformador y visionario.
              td Desarrolla capacidades para relacionarse con otras personas y actuar como agente de cambio.
              td Genera procesos de transformación del entorno desde acciones personales y colectivas.
              td 
                p Promueve y participa en escenarios de empoderamiento individual y colectivo, siendo 
                p Corresponsable en la transformación de mi entorno.
              td Entendimiento, participación, creación, libertad.
            tr
              th Gestión del conflicto
              td Potencia la capacidad de diálogo, desde la tolerancia y la identiﬁcación de las múltiples perspectivas de interpretar el mundo, en las que priman el reconocimiento de los derechos del otro.
              td Reconoce las fuentes de conﬂicto y sus efectos en la convivencia, para aprender a partir de la experiencia en el relacionamiento con los demás.
              td Realiza acciones de promoción de la convivencia pacífica y prevención de violencia, mejorando la capacidad de respuesta ante escenarios desafiantes.
              td Construye espacios de vida libres de estrés y violencia, con estrategias alternas para manejo de desacuerdos y conﬂictos.
              td Participación, entendimiento, creación, libertad.
            tr
              th Trabajo en equipo
              td Fortalece el pensamiento creativo y capacidad de adaptación, para responder de manera flexible y responsable en actividades y funciones con diferentes personas en búsqueda de un propósito común.
              td Reconoce la importancia del aporte al cumplimiento de los objetivos planteados desde diferentes roles que puede asumir, en los distintos contextos en los que se desenvuelve. 
              td Asume rol en las tareas que son encomendadas como integrante en procesos colaborativos y de trabajo.
              td Participa en escenarios que permiten relacionarse de manera colaborativa con otros y aportar al cumplimiento de objetivos comunes.
              td Participación, entendimiento, creación, libertad. 
            tr
              th Toma de decisiones
              td Reconoce la importancia de escucharse a sí mismo y a las personas en quienes confía para elegir la opción más adecuada en su vida personal y comunitaria.
              td Realiza ejercicios de reflexión individual y colectiva que le permitan contribuir a la definición de alternativas de acción.
              td Implementa acciones que me permiten analizar situaciones y elegir la opción más adecuada.
              td Hace parte de escenarios en los que puede contribuir en decisiones que afectan de forma individual o colectiva.
              td Participación, entendimiento, creación, libertad.



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
