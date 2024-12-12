<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Necesidades axiológicas y existenciales

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema4/img_1.png', alt='')

    p.mb-5 Según Max-Neef, Elizalde & Hopenhayn (1986), existen diferentes tipos de satisfactores, entre los cuales están:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Sinérgicos")
            p.mb-3 Son aquellos que por la forma en que satisfacen una necesidad determinada, estimulan y contribuyen a la satisfacción simultánea de otras necesidades.
            .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
              p.pb-0.mb-0 <b>Tabla 10. </b> <em>Satisfactor sinérgico y necesidad satisfecha</em>
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr.text-center
                    th Satisfactor
                    th Necesidad
                    th Necesidad cuya satisfacción estimula
                tbody.bg-white
                  tr
                    td Lactancia materna.
                    td Subsistencia.
                    td Protección, afecto, identidad.
                  tr
                    td Iniciativas productivas autogestionables (Por ejemplo, asociación de productores)
                    td Subsistencia.
                    td Entendimiento, participación, creación, Identidad, libertad. 
                  tr
                    td Educación (pública, popular, crítica)
                    td Entendimiento.
                    td Protección, participación, creación, identidad, libertad.
          div(numero="2" titulo="Singulares")
            p Son aquellos que apuntan a la satisfacción de una sola necesidad siendo neutros, respecto a la satisfacción de otras necesidades. Son característicos de los planes y programas de desarrollo de cooperación y asistencia. 
            .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
              p.pb-0.mb-0 <b>Tabla 11. </b> <em>Satisfactor singular y necesidad satisfecha</em>
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr.text-center
                    th Satisfactor
                    th Necesidad que satisface
                tbody.bg-white
                  tr
                    td Programa de suministro de alimentos (Programa de Alimentación Escolar PAE).
                    td Subsistencia.
                  tr
                    td Medicina curativa (EPS).
                    td Subsistencia.
                  tr
                    td Voto (elección popular).
                    td Participación.
          div(numero="3" titulo="Inhibidores")
            p Son aquellos que por el modo en que satisfacen (generalmente sobresatisfacen) una necesidad determinada, dificultan seriamente la posibilidad de satisfacer otras necesidades.
            .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
              p.pb-0.mb-0 <b>Tabla 12. </b> <em>Satisfactor inhibidor y necesidad satisfecha</em>
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr.text-center
                    th Supuesto satisfactor
                    th Necesidad que se pretende satisfacer
                    th Necesidad cuya satisfacción se inhibe
                tbody.bg-white
                  tr
                    td Paternalismo.
                    td Protección.
                    td Entendimiento, participación, Libertad, Identidad.
                  tr
                    td Familia sobreprotectora.
                    td Protección.
                    td Afecto, entendimiento, participación, Identidad, Libertad.
          div(numero="4" titulo="Seudosatisfactores")
            p Son elementos que estimulan una falsa sensación de satisfacción de una necesidad determinada. Sin la agresividad de los violadores o destructores, pueden en ocasiones aniquilar en un plazo mediano, la posibilidad de satisfacer la necesidad a que originalmente apuntan.
            .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
              p.pb-0.mb-0 <b>Tabla 13. </b> <em>Satisfactor seudosatisfactor y necesidad satisfecha</em>
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr.text-center
                    th Supuesto satisfactor
                    th Necesidad que se pretende satisfacer 
                tbody.bg-white
                  tr
                    td Sobreexplotación de Recursos Naturales (cambio climático).
                    td Subsistencia.
                  tr
                    td Nacionalismo (Nazismo, Fascismo etc.).
                    td Identidad.
          div(numero="5" titulo="Violadores o destructores")
            p Son satisfactores que, al ser aplicados con la intención de satisfacer una determinada necesidad, no sólo aniquilan la posibilidad de su satisfacción en un plazo mediato, sino que imposibilitan, por sus efectos colaterales, la satisfacción adecuada de otras necesidades.
            .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
              p.pb-0.mb-0 <b>Tabla 14. </b> <em>Satisfactor violador o destructor y necesidad satisfecha</em>
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr.text-center
                    th Supuesto satisfactor
                    th Necesidad que se pretende satisfacer 
                    th Necesidad cuya satisfacción imposibilita
                tbody.bg-white
                  tr
                    td Armamentismo.
                    td Protección.
                    td Subsistencia, afecto, participación, libertad.
                  tr
                    td Autoritarismo.
                    td Protección.
                    td Afecto, entendimiento, participación, creación, identidad y libertad.

            p Los satisfactores violadores o destructores bloquean el desarrollo autónomo de la sociedad, afectando necesidades como participación, creación, identidad y libertad. Imponen modelos ajenos, limitan propuestas diversas y restringen la libre expresión y desarrollo personal.

            .row.justify-content-center.mb-5
              .col-12
                .cajon.cajon.cajon3.p-4
                  p.mb-0 Para el caso del fortalecimiento de las competencias socioemocionales, “se espera que se puedan desarrollar satisfactores sinérgicos en la medida en que cumplen un papel contrahegemónico en el sentido de que revierten racionalidades dominantes”. (Max-Neef, Elizalde & Hopenhayn, 2010, p. 28). Esta posición refuerza el fortalecimiento de las CSE entendida como acción de empoderamiento individual y colectivo a través del ejercicio del pensamiento crítico. 

</template>

<script>
export default {
  name: 'Tema4',
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
