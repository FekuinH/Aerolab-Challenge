import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { END_POINT, HEADERS } from '../config/config';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}



  public getProducts(): Observable<Product[]>{

    return this.http.get<Product[]>(END_POINT + '/products',{headers: HEADERS});
  }

  public buyProduct(idProduct){

    //create body requestz
    let body = {
      productId : idProduct
    }

    return this.http.post(END_POINT + '/redeem',body, {headers: HEADERS});


  }
  
  
  public orderHigh(products: Product[]){
    
    return products.sort((p1,p2)=>{
      return p2.cost - p1.cost
    });
    
  }
  
    public orderLow(products: Product[]){
  
      return products.sort((p1,p2)=>{
        return p1.cost - p2.cost
      });
  
    }
}
