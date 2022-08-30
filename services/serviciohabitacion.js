import{modeloHabitacion}from '../models/modeloDatosHabitacion.js'

 export class ServicioHabitacion{
   constructor(){}
   async  buscarTodas(){
    let habitaciones=await modeloHabitacion.find()
    return habitaciones
   }
   async  buscarPotId(id){
    let habitacion=await modeloHabitacion.findById(id)
    return habitacion
   }
   async  agregar(datos){
    let habitacionAGuardar=new modeloHabitacion(datos)
    return habitacionAGuardar.save()

   }
   async  actualizar(id,datos){
    return modeloHabitacion.findByIAdAndUpdate(id,datos)
   }


    
}