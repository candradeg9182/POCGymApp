import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackendService } from "../../app/services/backend.service";
import { Persona } from "../../app/classes/Persona.class";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

persona:Persona = {
  nombre:"que me dice mae",
  apellido:"pura vida"
}

  constructor(public navCtrl: NavController,
              private _service:BackendService) {

              }


  Agregar(){
      console.log(this.persona)
      this._service.Agregar(this.persona)
                    .subscribe(data=>{
                      console.log(data)
                    })
    }

    Actualizar(){
     let key:string = "-LKGFjeT7R-lMGtxK9Dp"

      this._service.Actualizar(this.persona, key)
                    .subscribe(data=>{
                      console.log(data)
                    })
    }


    Obtener(){
      let key:string = ""

       this._service.Obtener(key)
                     .subscribe(data=>{
                         console.log(data)
                     });
     }



    ObtenerLista(){

       this._service.ObtenerLista()
                     .subscribe(data=>{
                         console.log(data)
                     });
     }

     Eliminar(){

       let key:string = "-LKJn1wEdwceqPSq0l7f"

        this._service.delete(key)
                      .subscribe(data=>{
                        console.log(data)
                      })

                    }


}
