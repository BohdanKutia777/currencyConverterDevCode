import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conversion-history',
  templateUrl: './conversionHistory.component.html',
})
export class ConversionHistoryComponent {
  @Input() conversionHistory: any[] = [];
}
