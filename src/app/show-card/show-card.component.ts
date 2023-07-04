import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent {
  product:Product = new Product();
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

  updatePage(id: any) {
    this.router.navigate(["update", id]);
  }

  // deleteProduct(id: any) {
  //   console.log(id);
  //   this.products = new Product(id, this.product.name, this.product.brand, this.product.price, this.product.stock, this.product.catagory, this.product.details, this.product.picture);
  //   this.ptdService.removeProduct(this.products).subscribe(data => {
  //     console.log("success", data)
  //     this.showProduct();
  //   })
  // }

  deleteProduct(id: any) {
    if (confirm("Are you sure you want to delete this product?")) {
      console.log(id);
      this.products = new Product(id, this.product.name, this.product.brand, this.product.price, this.product.stock, this.product.catagory, this.product.details, this.product.picture);
      this.ptdService.removeProduct(this.products).subscribe(data => {
        console.log("success", data);
        this.showProduct();
      });
    }
  }
  

  getData(value:any) {
    this.product.id = this.products[value].id;
    this.product.name = this.products[value].name;
    this.product.brand = this.products[value].brand;
    this.product.price = this.products[value].price;
    this.product.stock = this.products[value].stock;
    this.product.catagory = this.products[value].catagory;
    this.product.details = this.products[value].details;
    this.product.picture = this.products[value].picture;
  }
}
