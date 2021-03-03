
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductosService } from './../../../services/productos.service';

@Component({
  selector: 'app-productos-crear',
  templateUrl: './productos-crear.component.html',
  styleUrls: ['./productos-crear.component.css']
})
export class ProductosCrearComponent implements OnInit {
  form: FormGroup;
  errors: any;
  backColor: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private productosService: ProductosService
    ) {
      this.buildForm();
    }

  ngOnInit(): void {
  }

  crearProducto(event: Event){
    event.preventDefault();
    if(this.form.valid){
    const data = this.form.value;
    return this.productosService.store(data)
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
