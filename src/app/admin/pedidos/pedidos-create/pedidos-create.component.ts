
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PedidosService } from './../../../services/pedidos.service';

@Component({
  selector: 'app-pedidos-create',
  templateUrl: './pedidos-create.component.html',
  styleUrls: ['./pedidos-create.component.css']
})
export class PedidosCreateComponent implements OnInit {

  form: FormGroup;
  errors: any;
  backColor: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private pedidosService: PedidosService
    ) {
      this.buildForm();
    }

  ngOnInit(): void {
  }

  crearProducto(event: Event){
    event.preventDefault();
    if(this.form.valid){
    const data = this.form.value;
    return this.pedidosService.store(data)
    .subscribe((response) => {
      if(response){
        this.router.navigate(['/admin/proveedores']);
        this.errors = false;
      } else{
        this.errors = 'Usuario o contraseña incorrectos';
      }
    })
  }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(5)]],
      price: ['',[Validators.required, Validators.minLength(4)]],
      description: ['',[Validators.required, Validators.minLength(4)]],
      stock: ['',[Validators.required, Validators.minLength(1)]],
    })
  }

}
