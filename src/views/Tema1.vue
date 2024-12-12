<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Ser Humano desde la perspectiva antropológica y axiológica
      
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.mb-5.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El ser humano siempre ha cuestionado, dudado o se inquieta de su realidad, buscando entender su existencia y el propósito de su vida. A lo largo de la historia, distintas perspectivas han intentado responder preguntas como: ¿quién es?, ¿para qué existe? y ¿cómo convivir con los demás?

    p.mb-3(data-aos="fade-left") En su desarrollo, las personas construyen su carácter, a través de la interacción con otros y los valores que adoptan. Estos valores son integrales; es decir, se aplican en todos los aspectos de la vida y no dependen del contexto. 
    p.mb-5(data-aos="fade-left") En su proceso de desarrollo, se hace dueño de su mundo de tal manera que puede definir una trayectoria de vida, desde su libertad y autodeterminación; asimismo, puede ir más allá de lo que el medio le propone, incorporando sus valores lo que le da una concepción particular del mundo. 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-5.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img_2.png', alt='')
      .col-lg-7
        .cajon.cajon.color-secundario.p-4.mb-3
          p.mb-0 El ser humano toma conciencia de su realidad y de los aspectos que lo diferencia de su entorno, utilizando su capacidad de autodeterminación para beneficiar, tanto a sí mismo como a la comunidad con la que comparte. Su desarrollo, sus valores y su identidad se configuran a partir de experiencias, aprendizajes e interacciones en los contextos sociales y culturales donde vive.
        p.mb-2 En esta temática, se adopta el enfoque de Desarrollo a Escala Humana (DEH), propuesto por Max-Neef (1993). Este enfoque se centra en las personas, no en los objetos, ni ganancias u otros aspectos económicos muy frecuentes en modelos de desarrollo capitalistas, busca la satisfacción de necesidades fundamentales que son limitadas, pero esenciales para la realización personal.
        .bloque-texto-d.color-secundario.p-4.ps-0.pb-3
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="color:#E6D09E")
            p Las nuevas perspectivas consideran al ser humano como un ser integral, compuesto por dimensiones físicas, sociales, psíquicas, morales, emocionales, racionales, espirituales y estéticas.
            i.fas.fa-quote-right(style="display:none")
          .bloque-texto-d__autor.mt-0.pt-0
            .h5.mb-0 (Acosta, 2012)
              i.fas.fa-quote-right(style="color:#E6D09E")

    p.mb-3(data-aos="fade-left") Estas dimensiones son complementarias e interdependientes y su equilibrio es esencial para el pleno desarrollo de las personas. Comprender esta integralidad en relación con su contexto es un desafío constante.

    p.mb-5(data-aos="fade-left") Además, es fundamental que el ser humano reconozca la importancia de la sostenibilidad ambiental en los procesos de desarrollo; esto no solo garantiza la preservación de la biodiversidad y el equilibrio necesario para la supervivencia, sino que también refleja respeto por la vida de todos los seres con quienes comparte el universo.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
