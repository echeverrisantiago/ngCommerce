import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from './../../../services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  dataSource: any[];

  displayedColumns: string[] = ['No.','name','email','nit','phone','actions'];
  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.indexProveedores();
  }

  indexProveedores(){
    this.proveedoresService.index()
    .subscribe((products) => {
      if(products){
        console.log(products);
        this.dataSource = products;
      }
    })
  }

  deleteProvider(id: any, i: any){
    this.proveedoresService.delete(id)
    .subscribe((data) => {
      this.indexProveedores();
    });
    };

}

