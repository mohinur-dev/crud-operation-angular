import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  id:any;
  name:any;
  brand:any;
  price:any;
  stock:any;
  catagory:any;
  details:any;
  picture:any;

  products: any;

  constructor(private pdtService: ProductService, private router: Router) {

  }

  saveProduct() {
    this.products = new Product(this.id, this.name, this.brand, this.price, this.stock, this.catagory, this.details, this.picture);
    this.pdtService.insertProduct(this.products).subscribe(data => {
      console.log("success", data),
      this.router.navigate(['show'])
    });
  }
}
