

import { ServicioReserva } from '../services/servicioReservaHabitacion.js'

export class ControladorReserva {


    constructor() { }

    //buscar reserva 
    buscarReserva(request, response) {
        //llamo al servicio 

        let servicioReservaHabitacion = new ServicioReserva()
        //Intento resolver la PETICION
        try {
            response.status(200).json({
                mensaje: "exito en la consulta",
                //datos:["habi1","200USD","tv por cable"]
            })
        } catch (error) { //FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje: "fallo en la consulta " + error,
                datos: null
            })
        }
    }

    //buscar reserva por id
    buscarReservaPorId(request, response) {
        let identificador = request.params.id

        //llamo al servicio
        let reservaHabitacion = new ServicioReserva()
        try {
            response.status(200).json({
                mensaje: "exito en la consulta " + identificador,
                datos: reservaHabitacion.buscarPotId(identificador)
            })
        } catch (error) { //FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje: "fallo en la consulta " + error,
                datos: null
            })
        }
    }

    //agregar habitacion
    async agregarReserva(request, response) {
        let cuerpo = request.body

        //llamo al servicio habitacion 
        let reservaHabitacion = new ServicioReserva()

        try {
            reservaHabitacion.agregar(cuerpo)

            response.status(200).json({
                mensaje: "exito agregando la reserva",
                datos: null
            })
        } catch (error) { //FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje: "fallo en la consulta " + error,
                datos: null
            })
        }
    }

    //editar habitacion
    editarReserva(request, response) {

        //recibir id como parametro
        let id = request.params.id

        //recibir los datos con los que voy a editar (BODY)
        let datos = request.body

        //llamo al servicio de reserva 
        let reservaHabitacion = new ServicioReserv()

        try {
            reservaHabitacion.actualizar(id.datos)
            response.status(200).json({
                mensaje: "exito editando la reserva " + id,
                datos: null
            })
        } catch (error) { //FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje: "fallo en la consulta " + error,
                datos: null
            })
        }

    }

    //eliminar habitacion
    eliminarReserva(request, response) {

        let id = request.params.id
        let datos = request.body

        //llamo la servicio de eliminar reserva 
        let reservaHabitacion = new ServicioReserva()

        try {
            reservaHabitacion.eliminar(id.datos)
            response.status(200).json({
                mensaje: "exito eliminando la reserva",
                datos: null
            })
        } catch (error) { //FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje: "fallo en la consulta " + error,
                datos: null
            })
        }

    }



}