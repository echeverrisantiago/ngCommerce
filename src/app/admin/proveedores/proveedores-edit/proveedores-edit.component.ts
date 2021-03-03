import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { environment } from './../../../../environments/environment';
import { ProveedoresService } from './../../../services/proveedores.service';

@Component({
  selector: 'app-proveedores-edit',
  templateUrl: './proveedores-edit.component.html',
  styleUrls: ['./proveedores-edit.component.css']
})
export class ProveedoresEditComponent implements OnInit {

  form: FormGroup;
  validadoProduct: boolean = true;
  validadoProductInfo: boolean = true;
  errors: boolean|string;
  product: any;
  mainImg: string;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private proveedoresService: ProveedoresService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
    ) {
      this.productGet();
    }

  ngOnInit(): void {
    this.buildForm();
  }

  productGet(){
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
        this.proveedoresService.getProduct(this.id)
        .subscribe((product) => {
          this.product = product;
          console.log(this.product);
          this.assignValues(this.product);
        })
    });
  }

  assignValues(product: any){
    this.form.patchValue({
      name: product.name,
      email: product.email,
      nit: product.nit,
      phone: product.phone
    });
  }

  actualizarProveedor(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const formData = this.form.value;
      formData.id = this.id;
      console.log(formData);
      return this.proveedoresService.update(formData)
      .subscribe((response) => {
        if(response){
          this.router.navigate(['/admin/proveedores']);
          this.errors = false;
          console.log(response);
        } else{
          alert('Ha habido un error al actualizar el proveedor');
          this.router.navigate(['/admin/proveedores']);
        }
        console.log(response);
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





