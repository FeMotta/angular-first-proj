import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ ProductService ]
})

export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Lista de produtos';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  sub!: Subscription;

  constructor(private productService: ProductService) { }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Lista de produtos: ' + message;
  }
  
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy) || product.productCode.toLocaleLowerCase().includes(filterBy) || product.releaseDate.toLocaleLowerCase().includes(filterBy));
  } 

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => this.products = this.filteredProducts = products,
      error: err => this.pageTitle = 'Erro: ' + err
    });
    this.filteredProducts = this.products;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}   