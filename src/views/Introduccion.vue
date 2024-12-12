<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5(data-aos="fade-left") Basado en Tafur-Osorio (2020), en la búsqueda de su realización, el ser humano intenta desarrollarse en diferentes dimensiones de la vida. En esta búsqueda, puede priorizar aspectos que considera cruciales, de acuerdo con las concepciones de desarrollo y lo deseable para la vida, con la manera particular de concebir su crecimiento y con la dirección que quiere dar a su existencia. 
    
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 Según Marx (1990) “el trabajo es una parte fundamental del desarrollo humano, definido como una actividad esencial y distintiva del ser humano que le permite transformar la naturaleza para satisfacer sus necesidades, mientras también se transforma a sí mismo”. Como principal motor del desarrollo personal, el trabajo requiere de un elemento clave: las habilidades necesarias para su desempeño, entre las cuales destacan las habilidades blandas, esenciales para su óptimo desarrollo.


    .row.fondo-1.px-md-1.px-4.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-5.col-10.mb-4.mb-lg-2
        figure
          img(src='@/assets/curso/temas/img_1.png', alt='')
      .col-lg-5.col-12.mb-4.mb-lg-2
        p.mb-3 Por lo anterior, en este componente formativo se desarrolla el enfoque Desarrollo a Escala Humana (DEH), como una manera de ver el desarrollo y siendo el protagonista el ser humano y la satisfacción de sus necesidades humanas fundamentales, lo cual es basado en Max-Neef, Elizalde & Hopenhayn (1986); concibiéndolo como un ser integral que está en una continua persecución de equilibrio entre lo espiritual, lo psicológico, lo físico y su interacción permanente consigo mismo y con su entorno.
        p.mb-3 Lo anterior, lo complementa Savater (1991), al indicar que en el devenir de la vida, el humano continuamente se enfrenta a diferentes condiciones que generan emociones y comportamientos que llevan a escoger entre diversas opciones, las cuales están enmarcadas en los valores y concepciones adquiridas en la experiencia, del deber ser, de la cultura, la familia y el contexto en el que está involucrado, por lo que tendrá que discernir entre lo “bueno y lo malo”, “lo correcto e incorrecto”; así como afrontar situaciones difíciles que pondrán a prueba su resiliencia y capacidad para sobreponerse y encontrar las fortalezas personales que le permitirán salir adelante. 

    p.mb-3(data-aos="fade-left") Es por esto, que se requiere el desarrollo de competencias que permitan la mejora personal en cuanto a la convivencia consigo mismo y con el otro, donde se desarrolle empatía, resiliencia, autoestima y pensamientos positivos, se aprenda a trabajar en equipo, gestionar conflictos, tomar decisiones que permitan ver soluciones y propuestas de mejora para sí mismo y para poder crear sociedad.

    p.mb-5(data-aos="fade-left") Basado en la descripción anterior, es importante que acceda al siguiente video, para comprender la importancia del contenido y los diferentes temas:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/LDaT7DLnlzY" title="Fundamentos del enfoque Desarrollo a Escala Humana" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
