import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { environment } from './../../../../environments/environment';
import { ProductosService } from './../../../services/productos.service';

@Component({
  selector: 'app-productos-edit',
  templateUrl: './productos-edit.component.html',
  styleUrls: ['./productos-edit.component.css']
})
export class ProductosEditComponent implements OnInit {

  form: FormGroup;
  validadoProduct: boolean = true;
  validadoProductInfo: boolean = true;
  errors: boolean|string;
  image: any;
  marke: any;
  model: any;
  year: any;
  product: any;
  mainImg: string;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private productosService: ProductosService,
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
        this.productosService.getProduct(this.id)
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
      price: product.price,
      description: product.description,
      stock: product.stock
    });
  }

  actualizarProduct(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const formData = this.form.value;
      formData.id = this.id;
      console.log(formData);
      return this.productosService.update(formData)
      .subscribe((response) => {
        if(response){
          this.router.navigate(['/admin/productos']);
          this.errors = false;
          console.log(response);
        } else{
          alert('Ha habido un error al actualizar el producto');
          this.router.navigate(['/admin/productos']);
        }
        console.log(response);
      })
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(5)]],
      price: ['',[Validators.required, Validators.minLength(4)]],
      description: ['',[Validators.required, Validators.minLength(4)]],
      stock: ['', Validators.minLength(1)],
    })
  }

}
