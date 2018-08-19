import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Persona } from "../../app/classes/Persona.class";
import 'rxjs/Rx'


@Injectable()
export class BackendService{


    PersonURL:string = "https://heroesapp-5debd.firebaseio.com/Persona.json"
    NodoURL:string = "https://heroesapp-5debd.firebaseio.com/Persona/"
    
    constructor(private http:Http){
    }

    
  Agregar(persona:Persona){
      let body = JSON.stringify( persona )
      let headers = new Headers({
          'Content-Type':'application/json'
      })

      return this.http.post( this.PersonURL, body, {headers} )
            .map( res=>{
                console.log(res.json())
                return res.json()
            })

    }

    Actualizar(persona:Persona, key:string){

        let body = JSON.stringify( persona )
        let headers = new Headers({
            'Content-Type':'application/json'
        });
  
        let url = `${ this.NodoURL }/${ key }.json`;

        return this.http.put( url, body, {headers} )
              .map( res=>{
                  console.log(res.json())
                  console.log("Actualizar return")
                  return res.json()
              })
  
      }

      Obtener(key:string){

        
  
        let url = `${ this.NodoURL }/${ key }.json`;

        console.log(url + " This is the url consulted")

        return this.http.get( url )
                        .map(  res=>res.json() 
                           
                        );
  
      }


      ObtenerLista(){
        let resultado:string;
        
        return this.http.get( this.PersonURL )
                        .map(  res=>{
                            resultado = res.json()
                            resultado = JSON.parse(resultado);
                            
                            console.log(resultado)
                            //console.log(resultado["-LKGFjeT7R-lMGtxK9Dp"])
                        }
                           
                        );
  
      }


}