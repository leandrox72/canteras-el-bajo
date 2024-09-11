import images from "./images"

const pages = [
    {
        id: 0,
        name: "Nosotros",
        href: "/nosotros"
    },{
        id: 1,
        name: "Productos",
        href: "/productos"
    },{
        id: 2,
        name: "Contacto",
        href: "/contacto"
}]

const products = [{
        id : 0,
        name : "Arena Fina",
        img : images.Foto13,
        desc: `Nuestra arena fina tiene como propiedad fundamental
               dar resistenciam dureza y durabilidad. Los granos pasan
               por un tamiz que hace que sus particulas tengan el tamaño 
               fino ideal para uso mas comun en trabajos generales de 
               construccion.`
    },{
        id : 1,
        name : "Arena Gruesa",
        img : images.Foto17,
        desc: `Nuestra arena gruesa esta compuesta por fragmenots sueltos de
               piedras minerales con un tamaño maximo de 5mm. Utilizado en la 
               preparacion de la mezcla para asentar los ladrillos y en la
               preparacion del concreto de las construccions en humedo.`
    },{
        id : 2,
        name : "Arena Comun",
        img : images.Foto23,
        desc: `Nuestra arena comun se caracteriza por tener granos mas grandes
               y asperos que la arena fina. Debido a su textura ligeramente mas
               gruesa, sus granos proporcionan una mayor resistencia y estabilidad.`
    },{
        id : 3,
        name : "Grancilla",
        img : images.Foto19,
        desc: `Nuestra grancilla es el arido de agregado grueso mas utilizado.
               Contamos con dos medidas: 10-30mm y 6-10mm.`
}]

const gallery = [{
    id: 0,
    img: images.Foto1,
},{
    id: 1,
    img: images.Foto14,
},{
    id: 2,
    img: images.Foto20,
},{
    id: 3,
    img: images.Foto5,
},{
    id: 4,
    img: images.Foto12,
}]

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

const carouselData = [
    'Canteras El Bajo',
    'Excelencia',
    '20 años de Experiencia',
    'Lideres',
    'Arena Fina',
    'Arena Gruesa',
    'Arena Comun',
    'Grancilla'
]

export {
    pages, products, footerData, gallery, carouselData
}