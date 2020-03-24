import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modeles/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  isLoading : boolean;
  product:Product;

  constructor(private productService : ProductService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.getOneById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(data=>{
      this.product = data;
      this.isLoading = false;
    })
  }

}
