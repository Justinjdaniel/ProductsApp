import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  title:String = "Product Updation";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean =false;  
  single: any = {};

  constructor(private productService: ProductService,private route: ActivatedRoute, private router: Router) { }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  updateProduct(productId, productName, productCode, releaseDate, description, price, starRating, imageUrl){
    this.route.params.subscribe(params =>{
      this.productService.updateProduct(productId, productName, productCode, releaseDate, description, price, starRating, imageUrl, params.id);
      alert('Product Updated Successfully');
      this.router.navigate(['products']);
    });
  }

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      this.productService.editProduct(params[`id`]).subscribe(res =>{
      this.single =res;
      });
    });
  }

}
