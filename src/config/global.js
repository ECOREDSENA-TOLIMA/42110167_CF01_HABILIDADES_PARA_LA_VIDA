export default {
  global: {
    componenteFormativo:
      'Fundamentos del enfoque Desarrollo a Escala Humana (DEH)',
    descripcionCurso:
      'Este componente tiene como objetivo que los aprendices identifiquen los fundamentos del enfoque de Desarrollo a Escala Humana (DEH), como base de las competencias socioemocionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ser Humano desde la perspectiva antropológica y axiológica',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Enfoque de Desarrollo a Escala Humana (DEH)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Necesidades axiológicas y existenciales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Satisfactores: tipos y características',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Competencias socioemocionales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      // {
      //   icono: 'fas fa-file-pdf',
      //   titulo: 'Descargar PDF',
      //   download: 'downloads/prueba.pdf',
      // },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Enfoque de Desarrollo a Escala Humana (DEH)',
      referencia:
        'Max-Neef, M., Elizalde, A. & Hopenhayn, M. (2010). Desarrollo a escala humana: una opción para el futuro.',
      tipo: 'Libro',
      link: 'http://habitat.aq.upm.es/deh/',
    },
    {
      tema: 'Enfoque de Desarrollo a Escala Humana (DEH)',
      referencia:
        'Elizalde, A. (2000). <em>Desarrollo a escala humana: conceptos y experiencias.</em> Revista Internacional de Desarrollo Local, 1(1), 51-62. Santiago de Chile: Universidad Bolivariana.',
      tipo: 'Articulo',
      link:
        'https://www.ehu.eus/documents/6902252/12061410/A.+Elizalde-Desarrollo+a+escala+humana-conceptos+y+experiencias.pdf/301a394c-81f4-c386-b644-62532d25e0b5',
    },
    {
      tema: 'Enfoque de Desarrollo a Escala Humana (DEH)',
      referencia:
        'Vassalas. (2015). Conferencia Desarrollo a escala humana, Manfred Max Neef, Medellín, Colombia.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=M_Qe1gskn5U',
    },
    {
      tema: 'Enfoque de Desarrollo a Escala Humana (DEH)',
      referencia: 'Ortiz, Z. (2019). Max Neef- Desarrollo a Escala Humana.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CT6pwusTXow',
    },
  ],
  glosario: [
    {
      termino: 'Competencias Socioemocionales (CSE)',
      significado:
        'conjunto de conocimientos, habilidades y destrezas emocionales, cognitivas y comunicativas que permiten interactuar, logar metas y resolver problemas.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'habilidad para expresar ideas, emociones y necesidades de manera clara, directa y respetuosa.',
    },
    {
      termino: 'Desarrollo a Escala Humana (DEH)',
      significado:
        'enfoque que prioriza el bienestar humano mediante la satisfacción de necesidades fundamentales, integrando dimensiones como ser, tener, hacer y estar. ',
    },
    {
      termino: 'Dimensiones Existenciales',
      significado:
        'categorías asociadas con aspectos esenciales de la vida humana, divididas en ser, tener, hacer y estar, para satisfacer necesidades fundamentales.',
    },
    {
      termino: 'Empatía',
      significado:
        'capacidad de comprender y conectar con los sentimientos y perspectivas de otras personas.',
    },
    {
      termino: 'Habilidades para la vida',
      significado:
        'capacidades esenciales que ayudan a las personas a manejar los retos diarios de manera efectiva, mejorando su bienestar personal, social y emocional.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'habilidad para influir, motivar y guiar a un grupo hacia el logro de objetivos compartidos.',
    },
    {
      termino: 'Manejo de conflictos',
      significado:
        'capacidad de identificar, analizar y resolver desacuerdos de manera constructiva, buscando soluciones que beneficien a todas las partes.',
    },
    {
      termino: 'Modulación de la respuesta',
      significado:
        'estrategia de regulación emocional que consiste en controlar la forma en que se expresan las emociones después de que estas surgen.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'capacidad de adaptarse y recuperarse frente a situaciones adversas, utilizando recursos internos y externos para superar las dificultades.',
    },
    {
      termino: 'Satisfactores sinérgicos',
      significado:
        'elementos que satisfacen una necesidad específica mientras contribuyen simultáneamente a la satisfacción de otras necesidades fundamentales.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'proceso de elegir la mejor alternativa para resolver un problema o alcanzar un objetivo.',
    },
    {
      termino: 'Trabajo en equipo',
      significado:
        'capacidad para colaborar con otras personas, aprovechando habilidades y fortalezas individuales para alcanzar metas comunes.',
    },
    {
      termino: 'Valores axiológicos',
      significado:
        'principios y creencias que guían las acciones humanas, como el afecto, la participación, la identidad, la libertad y la creación, considerados esenciales para el bienestar personal y colectivo.',
    },
    {
      termino: 'Valores existenciales',
      significado:
        'valores relacionados con la forma en que las personas viven y se desarrollan, abarcando el ser, el tener, el hacer y el estar como pilares fundamentales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acosta Gil, C. (2012). Configuración y expresión de los estados psicológicos de ansiedad y depresión en las pacientes tratadas por enfermedad oncológica tributarias a tratamiento de quimioterapia. Tesis de grado, Universidad Central de las Villas, Cuba. ',
    },
    {
      referencia:
        'De la Torre, C. (2001). Las identidades, una mirada desde la psicología. Centro de Investigación y Desarrollo de la Cultura Cubana Juan Marinello. ',
    },
    {
      referencia:
        'Gross, J. J. (2002). Emotion regulation: Affective, cognitive, and social consequences. Psychophysiology, 39(3), 281-291. ',
      link: 'https://doi.org/10.1017/S0048577201393198',
    },
    {
      referencia:
        'Marx, K. (1990). El capital: Crítica de la economía política (Vol. 1). Fondo de Cultura Económica. ',
    },
    {
      referencia:
        'Max-Neef, M. A., Elizalde, A. & Hopenhayn, M. (1986). Desarrollo a Escala Humana: Una opción para el futuro. Santiago de Chile: CEPAUR, Fundación Dag Hammarskjöld. ',
    },
    {
      referencia:
        'Max-Neef, M., Elizalde, A. & Hopenhayn, M. (2010). Desarrollo a Escala Humana: Opciones para el futuro. Recuperado el 13 de mayo de 2019, de ',
      link: 'http://habitat.aq.upm.es/deh/ ',
    },
    {
      referencia:
        'Raciti, P. (2016). Competencias socioemocionales: ¿Cómo definirlas y medirlas en una perspectiva sistémica? Ruta Maestra. ',
    },
    {
      referencia:
        'Raciti, P., & Vivaldi, P. (2020). Propuesta de orientaciones conceptuales, metodológicas y operativas para el fortalecimiento de las competencias transversales (Habilidades para la vida) de los participantes (Jóvenes en Acción, jóvenes en educación secundaria vinculados a Familias en Acción y madres titulares del Programa Familias en Acción) de los Programas de la Dirección de Transferencias Monetarias, dentro de las modalidades de implementación virtual y presencial, adoptado e implementado por Prosperidad Social. Eurosocial. ',
    },
    {
      referencia:
        'Romero-Varela, D. Y. & Martínez-González, M. B. (2019). Satisfactores del desarrollo infantil en contextos de interfase rural-urbana. Perfiles Latinoamericanos, 27(54), 00014. ',
      link: 'https://doi.org/10.18504/pl2754-014-2019',
    },
    {
      referencia:
        'Rojas-Barahona, C. A., Zegers, B. P., & Förster, C. E. (2009). La escala de autoestima de Rosenberg: Validación para Chile en una muestra de jóvenes adultos, adultos y adultos mayores. Revista Médica de Chile, 137(6), 791-800. ',
      link: 'https://dx.doi.org/10.4067/S0034-98872009000600009',
    },
    {
      referencia: 'Savater, F. (1991). Ética para Amador. Editorial Ariel. ',
    },
    {
      referencia:
        'Tafur-Osorio, M. V. (2018-2020). Evaluación de la sostenibilidad de una agrocadena de suministro de producto fresco orientada al mercado internacional. Caso aplicado a la cadena del aguacate Hass del Tolima. Maestría en Gestión Industrial, Universidad de Ibagué. ',
    },
    {
      referencia:
        'Tobón, S. (2006). Formación basada en competencias: Pensamiento complejo, diseño curricular y didáctica. ECOE Ediciones. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Nombre_rol',
          centro: 'Nombre_centro_formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
