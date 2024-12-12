<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Dimensiones del ser humano y satisfactores en la vida cotidiana',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprender las dimensiones del ser humano según el enfoque de Desarrollo a Escala Humana (DEH), logrando entender las diferentes categorías de satisfactores en situaciones cotidianas.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'El enfoque de Desarrollo a Escala Humana (DEH) se centra únicamente en el crecimiento económico.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'El DEH se enfoca en el bienestar humano mediante la satisfacción de necesidades fundamentales, no en el crecimiento económico.',
          mensaje_incorrecto:
            '¡No se preocupes por el error! Cada respuesta es una oportunidad para aprender y mejorar. Lo importante es seguir adelante y fortalecer los conocimientos.',
        },
        {
          id: 2,
          texto:
            'Las necesidades humanas fundamentales son universales y constantes en todas las culturas y períodos históricos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Las necesidades son las mismas, pero las formas de satisfacerlas varían según la cultura y el contexto.',
          mensaje_incorrecto:
            '¡No se preocupes por el error! Cada respuesta es una oportunidad para aprender y mejorar. Lo importante es seguir adelante y fortalecer los conocimientos. ',
        },
        {
          id: 3,
          texto:
            'El trabajo es definido por Marx como una actividad esencial que transforma la naturaleza y al propio ser humano.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Según Marx, el trabajo es clave para el desarrollo humano y la transformación personal.',
          mensaje_incorrecto:
            '¡No se preocupes por el error! Cada respuesta es una oportunidad para aprender y mejorar. Lo importante es seguir adelante y fortalecer los conocimientos.',
        },
        {
          id: 4,
          texto: 'La lactancia materna es un ejemplo de satisfactor sinérgico.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Es sinérgico porque satisface necesidades como subsistencia, protección, afecto e identidad.',
          mensaje_incorrecto:
            '¡No se preocupes por el error! Cada respuesta es una oportunidad para aprender y mejorar. Lo importante es seguir adelante y fortalecer los conocimientos.',
        },
        {
          id: 5,
          texto:
            'El DEH considera que los bienes económicos siempre potencian la satisfacción de necesidades humanas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Los bienes económicos pueden potenciar o limitar la satisfacción de necesidades según su uso.',
          mensaje_incorrecto:
            '¡No se preocupes por el error! Cada respuesta es una oportunidad para aprender y mejorar. Lo importante es seguir adelante y fortalecer los conocimientos.',
        },
        {
          id: 6,
          texto:
            'Las competencias socioemocionales incluyen habilidades para tomar decisiones, comunicarse y trabajar en equipo.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Estas competencias son esenciales para interactuar y resolver problemas en diferentes contextos.',
          mensaje_incorrecto:
            '¡Continua no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 7,
          texto:
            'Los satisfactores pseudosatisfactores generan una falsa sensación de satisfacción de necesidades.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Aunque aparentan satisfacer necesidades, pueden limitar su satisfacción a mediano o largo plazo.',
          mensaje_incorrecto:
            '¡Continua no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 8,
          texto:
            'Las necesidades axiológicas se refieren a subsistencia, afecto y libertad, entre otras.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Estas necesidades están relacionadas con el valor que damos a diferentes aspectos de la vida.',
          mensaje_incorrecto:
            '¡Continua no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 9,
          texto:
            "Las competencias del 'Ser' se relacionan con habilidades técnicas específicas.",
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            "Las competencias del 'Ser' están vinculadas a aspectos emocionales y personales, como la autoestima.",
          mensaje_incorrecto:
            '¡Continua no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 10,
          texto:
            'La sostenibilidad ambiental es un elemento clave en los procesos de desarrollo humano.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Garantiza la biodiversidad y refleja respeto por la vida en todas sus formas.',
          mensaje_incorrecto:
            '¡Continua no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 11,
          texto:
            'Un satisfactor inhibidor facilita la satisfacción de todas las necesidades humanas fundamentales.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Los satisfactores inhibidores dificultan la satisfacción de otras necesidades.',
          mensaje_incorrecto:
            '¡No se preocupe por el error! Cada respuesta es una oportunidad para aprender y mejorar. Lo importante es seguir adelante y fortalecer los conocimientos.',
        },
        {
          id: 12,
          texto:
            'La necesidad de libertad incluye la capacidad de elegir y actuar según los propios deseos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'La libertad implica autonomía y responsabilidad en las decisiones.',
          mensaje_incorrecto:
            '¡No se preocupe por el error! Cada respuesta es una oportunidad para aprender y mejorar. Lo importante es seguir adelante y fortalecer los conocimientos.',
        },
        {
          id: 13,
          texto:
            'La ausencia de afecto puede llevar a conductas autodestructivas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'La falta de afecto afecta gravemente el bienestar emocional y social.',
          mensaje_incorrecto:
            '¡No se preocupe por el error! Cada respuesta es una oportunidad para aprender y mejorar. Lo importante es seguir adelante y fortalecer los conocimientos. ',
        },
        {
          id: 14,
          texto: 'La educación crítica es un ejemplo de satisfactor singular.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Es un satisfactor sinérgico, ya que satisface múltiples necesidades como entendimiento, participación y libertad.',
          mensaje_incorrecto:
            '¡No se preocupe por el error! Cada respuesta es una oportunidad para aprender y mejorar. Lo importante es seguir adelante y fortalecer los conocimientos.',
        },
        {
          id: 15,
          texto:
            "Las necesidades del 'Hacer' están relacionadas con acciones personales y colectivas.",
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Incluyen actividades necesarias para alcanzar objetivos y desarrollarse en diferentes áreas.',
          mensaje_incorrecto:
            '¡No se preocupe por el error! Cada respuesta es una oportunidad para aprender y mejorar. Lo importante es seguir adelante y fortalecer los conocimientos.',
        },
        {
          id: 16,
          texto:
            'El autoritarismo es un satisfactor destructor que afecta necesidades como la libertad y la participación.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Este tipo de satisfactor anula la posibilidad de satisfacer varias necesidades fundamentales.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 17,
          texto:
            'La resiliencia es una competencia fundante relacionada con superar adversidades.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'La resiliencia ayuda a encontrar fortalezas personales para enfrentar desafíos.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 18,
          texto:
            'El nacionalismo extremo puede ser considerado un satisfactor pseudosatisfactor.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Genera una falsa sensación de identidad que puede perjudicar otras necesidades.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 19,
          texto:
            'El DEH mide el desarrollo humano según el ingreso per cápita de una población.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'El DEH mide el desarrollo según la satisfacción de necesidades humanas fundamentales.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
        {
          id: 20,
          texto:
            'La participación es una necesidad que puede satisfacerse en espacios como asociaciones y comunidades.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Estos espacios permiten a las personas intervenir y contribuir en actividades colectivas.',
          mensaje_incorrecto:
            '¡Continue no se rinda! Equivocarse es aprender. Siga intentando, está en el camino correcto.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
