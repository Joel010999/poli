// Configuración de contacto centralizada
export const CONTACT_INFO = {
  // Número de WhatsApp oficial de Poli Heredia
  whatsappNumber: "5491144082229",
  whatsappDisplay: "+54 9 11 4408-2229",
  instagram: "https://instagram.com/yogapausa",
  instagramHandle: "@yogapausa",
  email: "contacto@yogapausa.com.ar",
  location: "Córdoba & Online para todo el mundo",
};

// Generador de enlaces de WhatsApp directo
export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

// Mensajes preconfigurados por propuesta
export const WHATSAPP_MESSAGES = {
  general: "Hola Poli, estuve navegando en Yoga Pausa y me gustaría consultar sobre tus espacios y propuestas.",
  programa1: "Hola Poli, estuve viendo el Taller Medito con el infinito (Promo Aniversario $144.000 los 2 meses) y me gustaría sumarme.",
  programa2: "Hola Poli, quiero conocer más sobre el taller Mi SHAKTi es SHANTi y los centros energéticos.",
  programa3: "Hola Poli, me interesa el Taller Gestión de Emoción online.",
  tallerPresencialGestion: "Hola Poli, me interesa reservar mi lugar para el Taller Presencial Gestión de Emoción.",
  tallerSomosEnergia: "Hola Poli, me gustaría consultar por el Taller SomOs ENERGiA (modalidad presencial u online) y reservar mi lugar.",
  kundalini: "Hola Poli, me interesa la Formación de Kundalini Yoga Online (Abril 2027) y sumarme a la lista de inscriptas.",
  clasesKundalini: "Hola Poli, me gustaría anotarme al Pack de 4 Clases de Kundalini Yoga.",
  oraculo: "Hola Poli, me gustaría adquirir el Oráculo de cartas de energía.",
  mate: "Hola Poli, me gustaría pedir información y disponibilidad de los Mates de Pausa.",
};

// TALLER ESPECIAL SOMOS ENERGIA (De Poli Heredia - Presencial y Online)
export const TALLER_SOMOS_ENERGIA = {
  id: "taller-somos-energia",
  badge: "Taller Especial · Presencial & Online",
  name: "SomOs ENERGiA",
  subtitle: "Conectá con la energía de tus 7 Chakras y descubrí su poder transformador",
  invitation: "¿Listo para una experiencia transformadora?",
  description:
    "Sumate a este taller guiado y diseñado para realizar tu propio reseteo energético y elevar tus vibraciones en sincronía con tus siete chakras.",
  objective:
    "Aprendé a comprender la relación profunda entre tu cuerpo físico, tu cuerpo energético y tus emociones, logrando un equilibrio holístico en tu vida cotidiana.",
  pricing: {
    presencial: "$60.000 ARS",
    online: "$50.000 ARS",
  },
  includes: [
    "Una charla fascinante sobre los centros energéticos (Chakras) y su influencia directa en tu bienestar.",
    "Un test de evaluación personalizado para conocer el nivel de tu energía personal y descubrir oportunidades de crecimiento.",
    "Una guía exclusiva con tips y consejos de armonización para mantener el equilibrio energético en tu día a día.",
    "Una meditación guiada profunda para conectar con tus emociones y encontrar serenidad interior.",
    "Cierre compartido con un momento de calma disfrutando un delicioso té, mate o café acompañado de algo dulce.",
  ],
  preparationTips: [
    "Tené a mano algo para tomar anotaciones personales.",
    "Si podés y te gusta, encendé una velita para ambientar tu espacio.",
    "Podés tener a mano el equipo de mate o algo fresco para tomar.",
    "Un espacio y momento de conexión 100% relajado.",
  ],
  format: "Modalidad Presencial y Online",
  image: "/material/somos_energia_chakras.jpg", // Foto real con los 7 chakras y vela al atardecer
  whatsappMsg: WHATSAPP_MESSAGES.tallerSomosEnergia,
  ctaText: "Consultar próximas fechas y reservas",
};

// TALLER PRESENCIAL GESTIÓN DE EMOCIÓN
export const TALLER_PRESENCIAL_GESTION = {
  id: "taller-presencial-gestion",
  badge: "Encuentro Presencial",
  name: "Taller Presencial Gestión de Emoción",
  price: "$60.000 ARS",
  priceOnlineNote: "($50.000 ARS en modalidad online)",
  description:
    "En Gestión de Emoción hacemos un recorrido amable con preguntas diseñadas para abordar cada emoción y descubrir su raíz.",
  image: "/material/poli_meditacion_presencial.jpg", // Foto real de Poli en meditación frente al agua
  whatsappMsg: WHATSAPP_MESSAGES.tallerPresencialGestion,
};

// Contenido estructurado de los programas con FOTOGRAFÍAS REALES DEL MATERIAL Y PRECIOS ESCRITOS
export const PROGRAMS = [
  {
    id: "medito-infinito",
    slug: "medito-con-el-infinito",
    badge: "2 Meses · Precio Aniversario",
    name: "Medito con el infinito",
    tagline: "Cuando MEDiTO, Me-EDiTO",
    description:
      "Una invitación a descubrir la meditación desde la sencillez, habitando el presente sin exigencias. No se trata solamente de aprender una técnica, sino de incorporar un espacio de práctica, silencio y diálogo íntimo con vos misma.",
    price: "$144.000 ARS",
    originalPrice: "$180.000 ARS",
    priceNote: "Precio especial mes aniversario de Pausa (los 2 meses). Posibilidad de abonar en 2 partes.",
    paymentOption: "Se puede abonar en 2 cuotas / partes",
    forWhom:
      "Orientado a personas que quieren comenzar a meditar, sienten inquietud mental o dispersión, y desean desarrollar un hábito propio y sostenible en el tiempo.",
    format: "Modalidad 100% Online · 2 meses de acompañamiento personalizado",
    guides: [
      "AGRADeCER",
      "ObSERVAR",
      "CoMPRENDER",
      "CoNOCERTE",
      "AMArTE",
      "ACEPTArTE",
      "SoLTAR",
      "CONFiAR",
    ],
    includes: [
      "Audios guiados de aproximadamente 10 minutos para cada día",
      "Guía que resuene con vos: Agradecer, Observar, Comprender, Conocerte, Amarte, Aceptarte, Soltar, Confiar",
      "Acompañamiento personal y cercano durante todo el recorrido",
      "Acceso flexible a los materiales para avanzar a tu propio ritmo",
      "Opción de abonar en 2 partes",
    ],
    highlightQuote: "Meditar es iniciar un diálogo íntimo con Vos.",
    image: "/material/medito_infinito_muelle.jpg", // Foto real elegida: Poli en el muelle al atardecer en mudra hacia el cielo
    objectPosition: "object-[center_35%]",
    fallbackImage: "/material/medito_infinito_muelle.jpg",
    whatsappMsg: WHATSAPP_MESSAGES.programa1,
    status: "Promo Aniversario Activa",
  },
  {
    id: "mi-shakti-shanti",
    slug: "mi-shakti-es-shanti",
    badge: "Profundización · 2 Meses",
    name: "Mi SHAKTi es SHANTi",
    tagline: "Reconocé y conectá con tu energía Kundalini y tus 7 Chakras",
    description:
      "Un recorrido profundo y estructurado por los centros energéticos para despertar tu fuerza vital y armonizar tu cuerpo físico, energético y emocional. Diseñado con videos, meditaciones guiadas y reflexiones transformadoras.",
    price: "$200.000 ARS",
    priceNote: "Taller completo de 2 meses. Posibilidad de abonar en 2 partes.",
    paymentOption: "Se puede abonar en 2 cuotas / partes",
    forWhom:
      "Ideal para practicantes de yoga o personas que buscan despertar su energía sutil, trascender bloqueos y habitar una paz profunda (Shanti) en su vida cotidiana.",
    format: "Modalidad 100% Online · 2 meses con seguimiento y material de estudio",
    includes: [
      "Estudio integrador de los 7 centros energéticos (Chakras)",
      "Interconexión de tu cuerpo físico, energético y emocional",
      "Videos y meditaciones guiadas exclusivas del taller",
      "Material teórico y práctico de autoconocimiento",
      "Acompañamiento guiado personalmente por Poli",
      "Opción de pago en 2 partes",
    ],
    highlightQuote: "Cuando despertamos nuestra energía Kundalini, florece la paz interior.",
    image: "/material/mat_09.jpg", // Poli con campana sagrada en mudra
    objectPosition: "object-center",
    fallbackImage: "/material/mat_09.jpg",
    whatsappMsg: WHATSAPP_MESSAGES.programa2,
    status: "Inscripciones abiertas",
  },
  {
    id: "gestion-emocion",
    slug: "gestion-de-emocion",
    badge: "Propuesta Avanzada · 2 Meses",
    name: "Gestión de Emoción",
    tagline: "Cuando nos permitimos habitar la emoción, descubrimos su raíz",
    description:
      "En la práctica del Yoga, fusiono herramientas de psicología con la Meditación para reconocer, dar lugar y regular emociones como la ansiedad, el enojo y la culpa. Un recorrido amable y profundo hacia la autorregulación consciente.",
    price: "$250.000 ARS",
    priceNote: "Taller online de 2 meses. Posibilidad de abonar en 2 partes.",
    paymentOption: "Se puede abonar en 2 cuotas / partes",
    forWhom:
      "Para quienes desean trascender la reacción automática, dejar de pelear con lo que sienten y desarrollar una relación compasiva y madura con su mundo emocional.",
    format: "Modalidad Online · 2 meses con acompañamiento personal reflexivo",
    includes: [
      "Abordaje de la ansiedad, el enojo, la culpa y la vulnerabilidad",
      "Herramientas de psicología aplicadas a la escucha del cuerpo",
      "Preguntas diseñadas para abordar cada emoción y descubrir su raíz",
      "Conciencia corporal y respiración como anclas de regulación",
      "Acompañamiento cercano durante todo el proceso",
      "Opción de pago en 2 partes",
    ],
    highlightQuote: "Cuando nos permitimos habitar la emoción, encontramos el camino hacia la calma.",
    image: "/material/gestion_emocion.jpg", // Foto real elegida: Poli meditando con remera verde y gorra al atardecer frente al agua
    objectPosition: "object-center",
    fallbackImage: "/material/gestion_emocion.jpg",
    whatsappMsg: WHATSAPP_MESSAGES.programa3,
    status: "Cupos limitados",
  },
];

// Formación Kundalini (Sección destacada 2027) con VIDEO, FECHAS EXACTAS Y PRECIOS
export const KUNDALINI_FORMATION = {
  title: "Formación de Kundalini Yoga Online",
  subtitle: "Despertar nuestra energía Kundalini nos ayuda a evolucionar",
  yearsExperience: "Más de 15 años de trayectoria",
  dates: {
    inscriptionStatus: "Inscripciones abiertas para 2027",
    startMonth: "Abril 2027",
    startDate: "Lunes 12 de Abril 2027",
    endDate: "Lunes 25 de Octubre 2027",
    duration: "7 meses · 7 módulos · 7 Chakras",
  },
  pricing: {
    inscription: {
      ars: "$90.000 ARS",
      usd: "USD 60",
      concept: "Inscripción y reserva del material",
    },
    monthly: {
      ars: "$111.000 ARS",
      usd: "USD 80",
      concept: "Cuota mensual (actualizable cada 2 meses según IPC)",
    },
  },
  videoPath: "/material/formacion_kundalini_video.mp4",
  videoTitle: "Acá está la información de la Formación - Inicia en Abril 2027",
  intro:
    "Un espacio de formación desde la presencia, vivencial y profundamente amoroso.\n\nCon más de 15 años dictando clases como profesora y guiando a través de la Meditación.",
  description:
    "La Formación de Kundalini Yoga es un camino de autoconocimiento y autocuidado amoroso, destinado a todos aquellos que sienten la necesidad de hacer un cambio real en su vida.",
  features: [
    {
      title: "Construcción de tu Manual propio",
      desc: "Semana a semana, recibirás nuevos contenidos para ir construyendo paso a paso tu manual de Kundalini.",
    },
    {
      title: "3 Encuentros online mensuales en vivo",
      desc: "Encuentros en directo a lo largo de la formación con kriyas tradicionales de Kundalini y contenido teórico profundo.",
    },
    {
      title: "Clases online especiales semanales",
      desc: "Prácticas continuas todas las semanas para sostener el hábito y la vibración energética.",
    },
    {
      title: "Acceso al Taller 'Mi SHAKTi es SHANTi'",
      desc: "Taller de meditación guiada totalmente diseñado para reconocer y conectar con tu energía Kundalini, con videos y reflexiones.",
    },
    {
      title: "2 Retiros presenciales con transmisión online",
      desc: "Espacios vivenciales en el transcurso de la formación donde recibirás tu Nombre Espiritual.",
    },
  ],
  certificateImage: "/material/mat_12.jpg", // Certificado original real Escuela Yoga Pausa
  graduatesImage: "/material/mat_11.jpg", // Poli con alumna egresada sosteniendo certificado
  pausaBrandImage: "/material/pausa_diente_color.jpg", // Foto con el diente de león de Pausa
  certificationOutcome:
    "Al finalizar, recibís tu certificación oficial emitida por Escuela Yoga Pausa, firmada por Poli Heredia (Prof. Amritananda), acreditando tu capacidad para guiar y sostener clases de Kundalini Yoga.",
  whatsappMsg: WHATSAPP_MESSAGES.kundalini,
};

// Productos de la Tienda CON FOTOGRAFÍAS REALES DEL MATERIAL
export const PRODUCTS = [
  {
    id: "pack-kundalini",
    name: "Pack 4 Clases de Kundalini Yoga",
    badge: "Práctica Semanal",
    subtitle: "KUNDALiNi es el YoGA de la Conciencia",
    price: "$120.000 ARS",
    description:
      "Un paquete de 4 prácticas profundas para experimentar la vitalidad, los pranayamas y la elevación energética de Kundalini Yoga guiadas por Poli.",
    features: [
      "4 clases completas con kriyas, pranayamas y meditación",
      "Acompañamiento y correcciones personalizadas",
      "Ideal para sostener una práctica regular mes a mes",
      "Acceso online flexible",
    ],
    image: "/material/pausa_diente_color.jpg",
    objectPosition: "object-center",
    whatsappMsg: WHATSAPP_MESSAGES.clasesKundalini,
    buttonText: "Consultar por las Clases",
  },
  {
    id: "oraculo",
    name: "Oráculo de Cartas de Energía",
    badge: "Creación Original",
    subtitle: "Mazo de conexión intuitiva y guía diaria",
    description:
      "El oráculo oficial de Yoga Pausa, concebido y utilizado por Poli en sus talleres presenciales y sesiones de acompañamiento. Una herramienta tangible para abrir tus meditaciones, encontrar claridad y sintonizar con la sabiduría del presente.",
    features: [
      "Mazo original con cartas ilustradas con el diente de león de Yoga Pausa",
      "Mensajes reflexivos para introspección y guía cotidiana",
      "Utilizado como anclaje sagrado en retiros y consultas individuales",
      "Acompaña tus momentos de pausa, velas y cristales",
    ],
    image: "/material/mat_23.jpg", // Foto real de las cartas del oráculo en mesa con té y manos
    objectPosition: "object-center",
    whatsappMsg: WHATSAPP_MESSAGES.oraculo,
    buttonText: "Consultar por el Oráculo",
  },
  {
    id: "mates",
    name: "Mates de Pausa",
    badge: "Ritual & Tradición",
    subtitle: "El ritual del mate elevado a momento consciente",
    description:
      "El compañero inseparable de Poli en cada viaje, retiro y práctica al aire libre. Mates personalizados pensados para convertir el acto de cebar en un ritual de contemplación, enraizamiento y presencia.",
    features: [
      "Personalizado con el espíritu de Yoga Pausa",
      "Terminación de calidad y diseño pensado para la pausa diaria",
      "Ideal para acompañar tus mañanas de meditación y estudio",
      "Un ritual sagrado de conexión con la naturaleza",
    ],
    image: "/material/mat_14.jpg", // Foto real de Poli tomando mate en las sierras
    objectPosition: "object-[center_20%]",
    whatsappMsg: WHATSAPP_MESSAGES.mate,
    buttonText: "Consultar por los Mates",
  },
];

// Sobre Poli Heredia - Narrativa auténtica de Poli (Incluye testimonio de su alumna)
export const ABOUT_POLI = {
  name: "Poli Heredia",
  role: "Fundadora de Yoga Pausa · Instructora de Kundalini Yoga (Amritananda)",
  slogan: "Guío, acompaño y sostengo.",
  headline: "Hola, soy Poli.",
  bioShort:
    "Acompaño a personas que buscan pausar, respirar y conectar con su esencia gestionando sus emociones a través del Yoga, la Meditación y la armonía entre su cuerpo físico, su cuerpo energético y su cuerpo emocional.",
  storyParagraphs: [
    "Poli Heredia es una apasionada defensora del bienestar integral.",
    "A los 28 años, un diagnóstico de un familiar directo la llevó a estudiar psicología social, iniciando así un camino de búsqueda personal y profesional.",
    "A los 34 años, un diagnóstico propio la impulsó a tomar el control de su vida y a profundizar en su autoconocimiento a través del yoga y la meditación, encontrando en Kundalini una guía invaluable.",
    "Desde 2011, Poli ha acompañado y sostenido a numerosas personas en su proceso de liberación de creencias limitantes, ayudándolas a encontrar el equilibrio entre su cuerpo físico, energético y emocional.",
    "Con su enfoque centrado y compasivo, Poli guía a sus alumnos hacia un camino de crecimiento y transformación personal, siempre recomendando empezar por uno mismo.",
  ],
  studentCredit: "Texto escrito con cariño por una alumna de Poli",
  closingMission:
    "Guiarte con presencia y profundidad para que descubras tus propias herramientas de transformación.",
  quote:
    "Creo en el poder de la pausa, la práctica y la conexión interna como caminos reales hacia una vida más plena y consciente.",
  pillars: [
    {
      title: "Kundalini Yoga",
      desc: "Energía vital, presencia corporal y despertar de la conciencia.",
      icon: "lotus",
    },
    {
      title: "Meditación",
      desc: "Calma mental, silencio interior y serenidad en la mirada.",
      icon: "mind",
    },
    {
      title: "Gestión de Emoción",
      desc: "Herramientas de psicología y conciencia corporal para el bienestar.",
      icon: "heart",
    },
    {
      title: "Talleres y Encuentros",
      desc: "Espacios vivenciales presenciales y online de conexión consciente.",
      icon: "users",
    },
  ],
};
