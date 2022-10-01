import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Detalhes do produto';
  product: IProduct | undefined;
  sub!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  onBack(): void {
    this.router.navigate(['/produtos']);
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.sub = this.productService.getProducts().subscribe({
      next: products => this.product = products.find(p => p.productId === id),
      error: err => this.pageTitle = 'Erro: ' + err
    });
  }
}
