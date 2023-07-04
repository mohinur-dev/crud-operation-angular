import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  id:any;
  name:any;
  brand:any;
  price:any;
  stock:any;
  catagory:any;
  details:any;
  picture:any;
  products: any;

  constructor(private ptdService: ProductService, private router: Router, private route: ActivatedRoute) {
    this.showProduct();
  }

  ngOnInit() {
    this.showProduct();
  }

  showProduct() {
    this.ptdService.getProduct().subscribe(response => {
      this.products = response;
    })
  }

  newPage() {
    this.router.navigate(['insert']);
  }

  insertPage() {
    this.router.navigate(["insert"]);
  }

  updatePage(id: any) {
    this.router.navigate(["update", id]);
  }

  // deleteProduct(id: any) {
  //   console.log(id);
  //   this.products = new Product(id, this.name, this.brand, this.price, this.stock, this.catagory, this.details, this.picture);
  //   this.ptdService.removeProduct(this.products).subscribe(data => {
  //     console.log("success", data)
  //     this.showProduct();
  //   })
  // }

  deleteProduct(id: any) {
    if (confirm("Are you sure you want to delete this product?")) {
      console.log(id);
      this.products = new Product(id, this.name, this.brand, this.price, this.stock, this.catagory, this.details, this.picture);
      this.ptdService.removeProduct(this.products).subscribe(data => {
        console.log("success", data);
        this.showProduct();
      });
    }
  }
  

  
}
