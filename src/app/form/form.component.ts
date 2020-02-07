import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  jsonFormOptions = {
    loadExternalAssets: false,
  };


  servicios = {
    "nombre": "consulta_curp",
    "schema": {
      "type": "object",
    "properties": {
      "nombre": {
        "type": "string"
      },
      "apellido_paterno": {
        "type": "string"
      },
      "apellido_materno": {
        "type": "string"
      },
      "fecha_de_nacimiento": {
        "type": "string"
      }
    },
    "required": [
      "nombre", "apellido_paterno"
    ]
    }
  }

  schema = this.servicios.schema;

  layout = ["*"];

  submittedFormData;

  constructor() { }

  ngOnInit() {
    console.log("hola");
  }

  onSubmit (data:any){
    this.submittedFormData = data;
  }

  showFormSchemaFn($event) {
    console.log($event);
  }

  showFormLayoutFn($event) {
    console.log($event);
  }

}
