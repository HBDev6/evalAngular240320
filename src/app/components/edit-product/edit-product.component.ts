import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modeles/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  isLoading : boolean;
  productForm : Product;
  availableBrands : string[];
  availableTypes : string[];
  availableCategories : string[];

  constructor(private activatedRoute : ActivatedRoute, private productService : ProductService, private router : Router) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.availableBrands = this.productService.availableBrands;
    this.availableTypes = this.productService.availableTypes;
    this.availableCategories = this.productService.availableCategories;
    this.productService.getOneById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(data =>{
      this.productForm = data;
      this.isLoading = false;
    });
  }

  editProduct(){
    this.productService.editProduct(this.productForm).subscribe(data=>{
      this.router.navigate(['/dashboard']);
    });
  }

}
