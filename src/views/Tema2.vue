<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Enfoque de Desarrollo a Escala Humana (DEH)
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.mb-5.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este proceso adopta el Enfoque de Desarrollo a Escala Humana (DEH) de Max-Neef (1993) como eje articulador. Este enfoque destaca el papel central de las necesidades humanas, tanto como objetivo del desarrollo, como para evidenciar sus carencias. En ambos casos, se pone de manifiesto relación entre la calidad de vida y la satisfacción de las necesidades humanas, que incluyen aspectos tangibles, como el acceso a alimentos y vivienda, e intangibles, como la participación y el aprendizaje. Desde esta perspectiva, el desarrollo socioeconómico se evalúa en función de las oportunidades que las personas tienen para llevar una vida plena y saludable, mediante la satisfacción integral de estas necesidades, de ahí la importancia de estas y la necesidad de desarrollar en el componente sus características. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12.mb-lg-3.mb-4
        p.mb-4 Las necesidades humanas fundamentales son universales, siempre han sido esenciales para el ser humano. Desde los primeros homínidos, se reconocen necesidades como subsistencia, protección, afecto y participación. Con el tiempo, surgieron otras, como la identidad y la libertad, que hoy son clave para el desarrollo humano.
        p.mb-4 Desde estas reflexiones se puede decir que “las necesidades humanas fundamentales son las mismas en todas las culturas y en todos los períodos históricos, lo que cambia, a través del tiempo y de las culturas, es la manera o los medios utilizados para la satisfacción de las necesidades” Max-Neef (2010), citado en Romero-Varela (2019). Por ejemplo, la necesidad de subsistencia es universal, ya que todas las personas requieren alimento y abrigo para sobrevivir. Sin embargo, la forma de satisfacer estas necesidades varía según el contexto. 
        .cajon.cajon.color-secundario.p-4
          p.mb-0 En la región Caribe de Colombia, la alimentación es diferente comparada con las comunidades indígenas que habitan las selvas del Vichada. De igual manera, las viviendas presentan variaciones: una casa en la isla de San Andrés tiene características distintas a una en un municipio de clima frío del centro del país, adaptándose a las condiciones y necesidades propias de cada lugar.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-5.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img_2.png', alt='Imagen decorativa')
      .col-lg-7
        p.mb-2 El desarrollo no depende del dinero ni del consumo, sino de cómo se satisfacen las necesidades humanas para que cada persona pueda vivir como desea. Lo importante es que las personas tengan oportunidades para desarrollar sus capacidades. Para lograr desarrollo, no bastan leyes; 
        .bloque-texto-d.color-primario.p-4.ps-0.pb-3.mb-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="color:#E6D09E")
            p Es necesario que las personas actúen según sus sueños y usen su creatividad y pensamiento crítico para ser protagonistas del cambio.
            i.fas.fa-quote-right(style="display:none")
          .bloque-texto-d__autor.mt-0.pt-0
            .h5.mb-0 (Max-Neef, Elizalde, Hopenhayn, 2010, p. 30).
              i.fas.fa-quote-right(style="color:#E6D09E")
        p.mb-2 Se sugiere analizar el siguiente ejemplo y lo que representan las necesidades humanas:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12.mb-4.mb-lg-2
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1.</b> <i>Necesidades humanas</i>
        figure
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema2/fig-1a.svg', alt='Figura que relaciona lo que representan las necesidades humanas y explica a partir de un ejemplo su aplicación.')  
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema2/fig-1b.svg', alt='Figura que relaciona lo que representan las necesidades humanas y explica a partir de un ejemplo su aplicación.') 
      


</template>

<script>
export default {
  name: 'Tema2',
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
