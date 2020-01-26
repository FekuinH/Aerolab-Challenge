import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule} from '@angular/material/dialog';
import { PointsComponent } from './header/points/points.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorPipe } from './pipes/paginator.pipe';
import { MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    PointsComponent,
    PaginatorPipe
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatPaginatorModule
    
  ],
  entryComponents:[PointsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
