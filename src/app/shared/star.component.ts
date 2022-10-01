import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    cropWidth: number = 75;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.ratingClicked.emit(`A avalição do produto é ${this.rating}`);
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        this.cropWidth = this.rating * 75 / 5;
    }
}