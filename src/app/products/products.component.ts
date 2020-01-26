import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { User } from '../models/user';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert';
import { PageEvent } from '@angular/material/paginator'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  public user: User;
  public currentCoins: number;
  public sortRecent: boolean;
  public sortLow: boolean;
  public sortHigh: boolean;
  public page_size: number = 16;
  public page_number: number = 1;
  public pageSizeOptions: number[] = [4, 8, 16];


  constructor(
    private productService: ProductService,
    private userService: UserService

  ) { }

  ngOnInit() {

    this.productService.getProducts().subscribe((response: Product[]) => {

      this.products = response;
    });


    this.userService.loadMe().subscribe((response: User) => {

      this.user = response;
      this.currentCoins = response.points;
    })

    this.sortRecent = true;

  }

  public buy(product) {

    console.log(product);

    return this.productService.buyProduct(product._id).subscribe(
      ((response: any) => {
        Swal('New buy', response.message, 'success');
        setTimeout(() => {
          window.location.reload();
        }, 1800);
      }),
      (error) => {
        Swal('New buy', 'Purchase error', 'error');
      });


  }

  orderRecent(e: PageEvent){
    this.sortHigh = false;
    this.sortLow = false;
    this.sortRecent = true;

    this.productService.getProducts().subscribe(response=>{
      this.products = response;
      this.page_number = e.pageIndex + 1;
    });
  }

  orderLow(e: PageEvent) {
    this.sortRecent = false;
    this.sortHigh = false
    this.sortLow = true;
    
    this.productService.getProducts().subscribe(response=>{
      this.products = this.productService.orderLow(response);
      this.page_number = e.pageIndex + 1;
    });
  }


  orderHigh(e: PageEvent) {
    this.sortRecent = false;
    this.sortLow = false;
    this.sortHigh = true;
    this.productService.getProducts().subscribe(response=>{
      this.products = this.productService.orderHigh(response);
      this.page_number = e.pageIndex +1;
    });
  }


  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }


}
