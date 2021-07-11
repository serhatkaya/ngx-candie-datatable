import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { SortEvent } from './enums/sort-event.enum';
import { CandiePaging } from './interfaces/CandiePaging.i';
import { CandieTable } from './interfaces/CandieTable.i';

@Component({
  selector: 'candie-table',
  templateUrl: './candie-table.component.html',
  styleUrls: ['./candie-table.component.scss', './assets/bootstrap/css/bootstrap.min.css', './assets/css/candie.css'],
  encapsulation: ViewEncapsulation.None
})
export class CandieTableComponent {
  pager: CandiePaging = new CandiePaging();
  @Input() config: CandieTable;
  @Input() data: any
  @Input() total: number;
  @Output() sizeChange: EventEmitter<CandiePaging> = new EventEmitter();
  @Output() page: EventEmitter<CandiePaging> = new EventEmitter();
  @Output() sort: EventEmitter<any> = new EventEmitter();
  data$: Observable<any>;
  constructor() { }

  onSort(event: SortEvent) {
    this.sort.emit(event);
  }

  setPage(pageNr: number) {
    this.pager.offset = pageNr;
    if (!this.config.internalPaging) {
      this.page.emit(this.pager);
    } else {
      console.log(pageNr);
    }
  }

  setSize(pageSize: number) {
    this.pager.size = pageSize;
    if (!this.config.internalPaging) {
      this.sizeChange.emit(this.pager);
    } else {
      this.pager.size = pageSize;
    }
  }

  getTotalPages = (): number => Math.ceil(this.total / this.pager.size);
}
