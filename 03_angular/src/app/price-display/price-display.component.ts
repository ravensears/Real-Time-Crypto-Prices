import { Component, Input, OnInit } from '@angular/core';
import { PriceService } from '../price.service';
import { timer } from 'rxjs';


@Component({
  selector: 'price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {
  @Input() from!: string;
  @Input() to!: string;
  price!: number;

  constructor(private priceService: PriceService) {}

  ngOnInit(): void {
    const data = timer(0,10000);
    data.subscribe(() => { this.loadPriceData(); 
    });
  }

  loadPriceData() {
    this.priceService.getPrice(this.from, this.to).subscribe(price => {
      this.price = price;
    });
  }

  get loading(): boolean {
    return this.price === undefined;
  }
}
