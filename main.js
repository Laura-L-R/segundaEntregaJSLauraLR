alert ("Bienvenidxs a Animal Teatro 🐯")

// Se creará un array vacío carrito, en el que se irán anexando las entradas que se compren
const carrito = []

//  Se ordenarán las obras según los días. Si bien podría hacerse por precio, de menor a mayor y visceversa (lo probé y me funciona), el criterio de los días de la semana suele el más habitual al filtrar una obra de teatro. Páginas como alternativateatral.com funcionan así.

//Ordenar obras según días
const ordenarPorDia = () => {
    const diasOrden = ['jueves', 'viernes', 'sábado', 'domingo'];
    obras.sort((a, b) => {
        const indexA = diasOrden.indexOf(a.dia)
        const indexB = diasOrden.indexOf(b.dia)
        return indexA - indexB
    })
    mostrarObrasOrdenadas()
}

const mostrarObrasOrdenadas = () => {
    const listaObrasOrdenada = obras.map(obra => {
        return `- ${obra.titulo}:  ${obra.dia}  ${obra.horario}, $${obra.precio}`
    });
    
    alert( `Obras disponibles de Animal Teatro 🐯 \n\n ${listaObrasOrdenada.join("\n")}` )
    comprarEntradas(listaObrasOrdenada)    
}

const comprarEntradas = (listaObrasOrdenada)=>{
    let obraTitulo = " "
    let comprarMasEntradas = false  
    let cantidadEntradas = 0

    do {
        obraTitulo = prompt (`¿Qué obra querés ver? \n\n ${listaObrasOrdenada.join("\n")}`).toUpperCase()
        cantidadEntradas = parseInt(prompt(`¿Cuántas entradas querés?`))


       const obraEnCartel = obras.some(obra=>obra.titulo.toUpperCase() == obraTitulo.toUpperCase()) // Para chequear que la obra escogida esté en cartel
    
       if (obraEnCartel) {
        //Sumar al carrito
        const obra = obras.find(obra=>obra.titulo.toUpperCase() == obraTitulo.toUpperCase())        
        sumarAlCarrito(obra, cantidadEntradas) // Llamado de la función declarada en línea 67

       }else {
        alert (`¡Esa obra no está en nuestro teatro!`)
       }
    
        comprarMasEntradas = confirm (`¿Querés ver algo más?`)

    } while (comprarMasEntradas)

    const subTotal = calcularSubTotales () // Llamado de la función declarada debajo
    const costoServicio = calcularCostoServicio(subTotal.subtotalPrecio) // Pasamos el subTotal como argumento
    const descuentos = calcularDescuentos (subTotal.subtotalPrecio)
    const total = calcularTotal (subTotal.subtotalPrecio, costoServicio, descuentos)

    
    alert(`Gracias por elegir Teatro Animal 🐯. Compraste ${subTotal.totalCantidad} entradas, y el total es $${total}`)

    console.log(costoServicio)
    console.log (descuentos)
    console.log (total)
    return {subTotal, costoServicio, total} 
}

const sumarAlCarrito = (obra, cantidadEntradas) => {
    const obraId = obra.id
    const obraRepetida = carrito.find(obra=>obra.id == obraId)

    if (!obraRepetida) {
        //agregamos al carrito (push)
       obra.cantidad += cantidadEntradas
       carrito.push (obra)        
    }else{ 
        //Actualizo cantidad y la sumo +=
        obraRepetida.cantidad += cantidadEntradas      
    }
    console.log(carrito)    
}

const calcularCostoServicio = (subtotalPrecio) => {
    return subtotalPrecio * 0.10
}

const calcularDescuentos = (subtotalPrecio) => {
    let tipoDescuento = ""
    let descuentos = 0

    tipoDescuento = prompt("¿Tenés algún descuento? \nEstudiante \nJubilado/a \nNinguno").toUpperCase()

    switch (tipoDescuento) {
        case "ESTUDIANTE":
            descuentos = subtotalPrecio * 0.20;
            alert("Por ser estudiante, tenés un 20% sobre el precio de las entradas. No incluye el costo de servicio")
            break;
        case "JUBILADO":
        case "JUBILADA":
            descuentos = subtotalPrecio * 0.40;
            alert("Por ser jubiladx, tenés un 40% sobre el precio de las entradas. No incluye el costo de servicio")
            break;
        case "NINGUNO":
            descuentos = 0;
            alert("Perfecto, continuamos con la compra")
            break;
        default:
            alert("¡Aún no tenemos descuento para eso!")
            descuentos = 0;
    }

    return descuentos;
}

const calcularSubTotales = () => {
    const totalCantidad = carrito.reduce ( (acc,item) => acc + item.cantidad, 0)        
    const subtotalPrecio = carrito.reduce ( (acc, item) => acc + (item.precio * item.cantidad), 0)
    console.log(totalCantidad)
    console.log (subtotalPrecio)  
    return { totalCantidad, subtotalPrecio }
}

const calcularTotal = (subtotalPrecio, costoServicio, descuentos) => {
    return subtotalPrecio + costoServicio - descuentos
}
  
ordenarPorDia ()