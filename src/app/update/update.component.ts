import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  id:any;
  name:any;
  brand:any;
  price:any;
  stock:any;
  catagory:any;
  details:any;
  picture:any;
  
  products: any;

  constructor(private pdtService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    let id = this.route.snapshot.params['id'];
    this.pdtService.getProductById(id).subscribe(data=> {
      this.products = data;
      this.id = this.products.id;
      this.name = this.products.name;
      this.brand = this.products.brand;
      this.price = this.products.price;
      this.stock = this.products.stock;
      this.catagory = this.products.catagory;
      this.details = this.products.details;
      this.picture = this.products.picture;
    });
  }

  updateProduct(){
    this.products = new Product(this.id, this.name, this.brand, this.price, this.stock, this.catagory, this.details, this.picture);
    this.pdtService.updateProduct(this.products).subscribe(data =>{
      console.log("success", data),
      this.router.navigate(['show'])
    })
  }

  showpage() {
    this.router.navigate(["show"])
  }
}
