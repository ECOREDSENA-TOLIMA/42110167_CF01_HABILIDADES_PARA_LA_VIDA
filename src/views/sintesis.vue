<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A modo de conclusión, se presenta un esquema diseñado para sintetizar de forma clara y gráfica el conocimiento expuesto en esta temática. Este esquema busca facilitar la comprensión de las relaciones y jerarquías presentes en la teoría desarrollada.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que contiene el mapa conceptual que resume la temática abordada durante este componente formativo, la cual trata al ser humano como eje central desde las perspectivas antropológicas y axiológicas; lo divide en un enfoque que busca el objetivo del desarrollo y evidenciar sus creencias; relaciona las necesidades que existen que son de tipo existenciales y axiológicas; incluye satisfactores existentes; y finalmente, menciona que las competencias socioemocioles presentes son las fundantes y las estratégicas.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
