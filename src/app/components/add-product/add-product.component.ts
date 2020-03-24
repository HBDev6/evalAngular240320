import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modeles/product';
import { ProductService } from './../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm : Product;
  availableBrands : string[];
  availableTypes : string[];
  availableCategories : string[];

  constructor(private productService : ProductService, private router : Router) { }

  ngOnInit(): void {
    this.productForm = new Product();
    this.availableBrands = this.productService.availableBrands;
    this.availableTypes = this.productService.availableTypes;
    this.availableCategories = this.productService.availableCategories;
  }

  addProduct(){
    this.productService.add(this.productForm).subscribe(data=>{
      this.router.navigate(['/dashboard']);
    });

  }
}




