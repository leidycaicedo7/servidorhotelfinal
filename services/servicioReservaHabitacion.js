import{modeloReserva}from '../models/modeloDatosReserva.js'

 export class ServicioReserva{
   constructor(){}
   async  buscarReserva(){
    let reserva=await modeloReserva.find()
    return reserva
   }
   async  buscarReservaPorId(id){
    let reserva=await modeloReserva.findById(id)
    return reserva
   }
   async  agregar(datos){
    let reservaGuardar=new modeloReserva(datos)
    return reservaGuardar.save()

   }
   async  actualizar(id,datos){
    return modeloReserva.findByIAdAndUpdate(id,datos)
   }

   async  eliminar(id){
    return modeloReserva.findByIAdAndDelete(id)
   }


    
}