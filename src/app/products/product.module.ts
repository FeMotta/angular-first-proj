import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'produtos', component: ProductListComponent },
      { path: 'produtos/:id', canActivate:[ ProductDetailGuard ], component: ProductDetailComponent},
    ]),
    SharedModule
  ]
})
export class ProductModule { }
