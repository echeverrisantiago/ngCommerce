import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProveedoresService } from './../../../services/proveedores.service';

@Component({
  selector: 'app-proveedores-create',
  templateUrl: './proveedores-create.component.html',
  styleUrls: ['./proveedores-create.component.css']
})
export class ProveedoresCreateComponent implements OnInit {

  form: FormGroup;
  errors: any;
  backColor: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private proveedoresService: ProveedoresService
    ) {
      this.buildForm();
    }

  ngOnInit(): void {
  }

  crearProducto(event: Event){
    event.preventDefault();
    if(this.form.valid){
    const data = this.form.value;
    return this.proveedoresService.store(data)
    .subscribe((response) => {
      if(response){
        this.router.navigate(['/admin/productos']);
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
      email: ['',[Validators.required, Validators.minLength(4), Validators.email]],
      nit: ['',[Validators.required, Validators.minLength(4)]],
      phone: ['',[Validators.required, Validators.minLength(7)]],
    })
  }


}

