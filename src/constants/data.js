import images from "./images"

const pages = [
    {
        id: 0,
        title: "Inicio",
        subtitle: "Pagina Principal",
        href: "/"
    },{
        id: 1,
        title: "Nosotros",
        subtitle: "Quienes Somos",
        href: "/nosotros"
    },{
        id: 2,
        title: "Productos",
        subtitle: "Que Ofrecemos",
        href: "/productos"
    },{
        id: 3,
        title: "Contacto",
        subtitle: "Hablemos",
        href: "/contacto"
}]

const products = [{
        id : 0,
        name : "Arena Fina",
        img : images.Foto14,
        desc: `La arena fina es un material granulado de textura suave y uniforme, 
               caracterizado por su grano pequeño y sus propiedades versátiles. En la 
               construcción, se utiliza ampliamente como componente en mezclas de 
               mortero y cemento, proporcionando una base uniforme y estable que mejora 
               la adherencia y resistencia de la estructura. Ideal para acabados, 
               enlucidos y trabajos de albañilería, su consistencia asegura una aplicación 
               fluida y permite obtener superficies lisas y de alta calidad. Los granos 
               pasan por un tamiz que hace que sus particulas tengan el tamaño fino 
               ideal para uso mas comun en trabajos generales de construccion.`,
        info: [{
                title: "Tamaño del Grano",
                value: "0-2 mm"
            },{
                title: "Usos",
                value: "Morteros, Hormigon, Yeso etc"
            },{
                title: "Beneficios",
                value: "Suave, fácil de mezclar"
            }
        ]
    },{
        id : 1,
        name : "Arena Gruesa",
        img : images.Foto17,
        desc: `La arena gruesa es un material granular de granos más grandes y texturizados, 
               ampliamente valorado en la construcción por su capacidad para aportar resistencia 
               y estabilidad a diversas mezclas. Es un componente esencial en la elaboración de 
               concreto y hormigón, donde su granulometría mejora la cohesión y reduce el riesgo 
               de fisuras. Además, se emplea en la nivelación de superficies, bases de pavimentos 
               y como relleno estructural en proyectos de gran envergadura. Su estructura permite 
               una mejor ventilación y drenaje, convirtiéndola en una elección ideal para trabajos
               que requieren alta durabilidad y robustez.`,
        info: [{
                title: "Tamaño del Grano",
                value: "2-5 mm"
            },{
                title: "Usos",
                value: "Concretos resistentes, Drenajes etc"
            },{
                title: "Beneficios",
                value: "Resistente, buen drenaje"
            }
        ]
    },{
        id : 2,
        name : "Arena Comun",
        img : images.Foto23,
        desc: `La arena común es un material de grano intermedio utilizado ampliamente en la 
               construcción por su versatilidad y disponibilidad. Se emplea en diversas aplicaciones, 
               como la elaboración de morteros para albañilería, rellenos, y nivelación de superficies. 
               Su textura y granulometría equilibrada ofrecen una base confiable para proyectos básicos 
               y acabados generales. Es ideal para trabajos cotidianos que requieren un material 
               funcional y eficiente para lograr estructuras sólidas y uniformes.`,
        info: [{
                title: "Tamaño del Grano",
                value: "Mixto"
            },{
                title: "Usos",
                value: "Morteros, Concretos, Rellenos etc"
            },{
                title: "Beneficios",
                value: "Versátil, económico"
            }
        ]
    },{
        id : 3,
        name : "Grancilla",
        img : images.Foto19,
        desc: `La grancilla, también conocida como grava fina, es un material pétreo compuesto por 
               fragmentos pequeños y angulares. Es esencial en la construcción, especialmente para 
               la fabricación de concreto y pavimentos, donde aporta resistencia mecánica y estabilidad 
               estructural. Su granulometría permite una excelente compactación, haciéndola ideal para 
               cimentaciones, bases de carreteras y drenajes. Gracias a su dureza y durabilidad, la 
               grancilla es indispensable en proyectos que exigen un soporte robusto y de larga vida útil.`,
        info: [{
                title: "Tamaño del Grano",
                value: "6-10mm | 10-30mm"
            },{
                title: "Usos",
                value: "Bases, Drenajes, Decoración etc"
            },{
                title: "Beneficios",
                value: "Resistente, duradero"
            }
        ]
}]

const generalData = [
    [
        {
            id : 0,
            name : "Arena Fina",
        },{
            id : 1,
            name : "Arena Gruesa",
        },{
            id : 2,
            name : "Arena Comun",
        },{
            id : 3,
            name : "Grancilla",
        }
    ],[
        {
            id: 0,
            line: "Telefono: +54 351 876-2106",
        },{
            id: 1,
            line: "Mail: gmcanteras@gmail.com",
        }
    ],[
        {
            id: 0,
            line: "Haedo 149, Alto Alberdi, Cordoba"
        }
    ]
]

const gallery = [
    images.Foto3,  
    images.Foto9,
    images.Foto12,
    images.Foto26,
    images.Foto30,
]

const gallery2 = [
    images.Foto6,
    images.Foto7,
    images.Foto8,
    images.Foto9,
    images.Foto26,
]

const footerData = [{
        line1 : "Cordoba",
        line2 : "Argentina"
    }, {
        line1 : "gmcanteras@gmail.com",
        line2 : "+54 351 876-2106"
    }, {
        line1: "Canteras El Bajo 2024",
        line2: "Todos los derechos reservados"
}]


export {
    pages, products, footerData, gallery, gallery2, generalData
}