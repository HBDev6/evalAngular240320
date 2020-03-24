import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modeles/product';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products : Product[];
  isLoading : boolean;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.getAllProducts().subscribe(data=>{
      this.products = data;
      this.isLoading = false;
    });
  }

  delete(product:Product){
    this.isLoading = true;
    this.productService.delete(product).subscribe(data =>{
      this.productService.getAllProducts().subscribe(data=>{
        this.products = data;
        this.isLoading = false;
      });
    });
  }

}
