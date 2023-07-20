// Armé un array de objetos con muchas más propiedades que las que serán usadas en esta entrega, pero que sí suelen ser filtros habituales por los que buscar una obra teatral. Páginas como alternativateatral.com filtran con estos criterios

const obras = [
    {
        id: 1,
        titulo: "EL MANCHADO", 
        dramaturgia: "Ariel Barchilón", 
        dirección: "Agustina Gutiérrez",
        elenco: "Lali Fischer, Federico Foscaldi, Juan Ortiz",
        dia: "jueves",
        horario: "20.30 hs",
        precio: 2800, 
        cantidad: 0 // Representa la cantidad de obras que va a comprar el usuario
    },

    {
        id: 2,
        titulo: "EL MANIFIESTO DE LAS ALAS ROTAS", 
        dramaturgia: "Yoska Lázaro", 
        dirección: "Yoska Lázaro",
        elenco: "Sofia Marisol Chamorro, Charo Gonzalez, Florencia Seggiaro, Noelia Vera",
        dia: "viernes",
        horario: "20.00 hs",
        precio: 2500, 
        cantidad: 0

    },

    {
        id: 3,
        titulo: "ENTROMETIDA", 
        dramaturgia: "Victoria Casellas, Carla Giurastante, Luna Schapira, Ivana Schiaffino, Gemán Touza", 
        dirección: "n/c", // No corresponde
        elenco: "Carla Abelando, Sayi Lavagna, Victoria Pepe, Emilia Rebottaro, Marcos Ribas",
        dia: "viernes",
        horario: "22.30 hs",
        precio: 2200, 
        cantidad: 0

    },

    {
        id: 4,
        titulo: "HOMENAJE A CONNIE PARKER", 
        dramaturgia: "Sylvia Plath y Sarah Kane", 
        dirección: "Ulises Romero", 
        elenco: "Martina Meirama, Bernardita Ottonello",
        dia: "sábado",
        horario: "20.00 hs",
        precio: 2500,
        cantidad: 0

    },

    {
        id: 5,
        titulo: "MALFLASH", 
        dramaturgia: "Gabriel Navarro, Juan Santiago, Emilce Olguin Ramírez", 
        dirección: "Gabriel Navarro, Juan Santiago, Emilce Olguin Ramírez",
        elenco: "Victoria Casellas, Diego Centorame, Violeta Gros, Vladimir Klink, Martina López González, Marco Spaggiari, Cintia Duarte, Constanza Duarte, Luna Jankowski, Rosa Ortiz Pereyra, Nicolas Schneider, Manuela López González",
        dia: "domingo",
        horario: "20.30 hs",
        precio: 2300, 
        cantidad: 0

    },

]
