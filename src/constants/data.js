import { title } from "framer-motion/client"
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
        img : images.Foto13,
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
                title: "Tamaño del Grano:",
                value: "0-2 mm"
            },{
                title: "Usos:",
                value: "Morteros, Hormigon, Yeso etc"
            },{
                title: "Beneficios:",
                value: "Suave, fácil de mezclar"
            }
        ]
    },{
        id : 1,
        name : "Arena Gruesa",
        img : images.Foto17,
        desc: `Nuestra arena gruesa esta compuesta por fragmenots sueltos de
               piedras minerales con un tamaño maximo de 5mm. Utilizado en la 
               preparacion de la mezcla para asentar los ladrillos y en la
               preparacion del concreto de las construccions en humedo.`,
        info: [{
                title: "Tamaño del Grano:",
                value: "2-5 mm"
            },{
                title: "Usos:",
                value: "Concretos resistentes, Drenajes etc"
            },{
                title: "Beneficios:",
                value: "Resistente, buen drenaje"
            }
        ]
    },{
        id : 2,
        name : "Arena Comun",
        img : images.Foto23,
        desc: `Nuestra arena comun se caracteriza por tener granos mas grandes
               y asperos que la arena fina. Debido a su textura ligeramente mas
               gruesa, sus granos proporcionan una mayor resistencia y estabilidad.`,
        info: [{
                title: "Tamaño del Grano:",
                value: "Mixto"
            },{
                title: "Usos:",
                value: "Morteros, Concretos, Rellenos etc"
            },{
                title: "Beneficios:",
                value: "Versátil, económico"
            }
        ]
    },{
        id : 3,
        name : "Grancilla",
        img : images.Foto19,
        desc: `Nuestra grancilla es el arido de agregado grueso mas utilizado.
               Contamos con dos medidas: 10-30mm y 6-10mm.`,
        info: [{
                title: "Tamaño del Grano:",
                value: "6-10mm | 10-30mm"
            },{
                title: "Usos:",
                value: "Bases, Drenajes, Decoración etc"
            },{
                title: "Beneficios:",
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
            line: "Telefono: +54 351 631-8714",
        },{
            id: 1,
            line: "Mail: canteraselbajo@gmail.com",
        }
    ],[
        {
            id: 0,
            line: "Cordoba, Argentina"
        }
    ]
]

const gallery = [
    images.Foto2,
    images.Foto4,
    images.Foto9,
    images.Foto24,
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
        line1 : "canteraselbajo@gmail.com",
        line2 : "+54 351 631-8714"
    }, {
        line1: "Canteras El Bajo 2024",
        line2: "Todos los derechos reservados"
}]


export {
    pages, products, footerData, gallery, gallery2, generalData
}