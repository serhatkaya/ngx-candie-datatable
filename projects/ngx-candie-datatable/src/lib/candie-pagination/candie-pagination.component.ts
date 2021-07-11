import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CandiePagination } from '../interfaces/CandiePagination.i';
import { CandiePagerService } from '../services/candie-pager.service';

@Component({
  selector: 'candie-pagination',
  templateUrl: './candie-pagination.component.html',
  styleUrls: ['./candie-pagination.component.scss'],
  providers: [CandiePagerService]
})
export class CandiePaginationComponent implements OnInit, OnChanges {
  @Input() pageSize = 0;
  @Input() totalPages = 0;
  @Output() sizeChange: EventEmitter<number> = new EventEmitter();
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  constructor(private pagerService: CandiePagerService) { }
  pager: CandiePagination = {
    currentPage: 0,
    totalPages: 0,
    startPage: 0,
    endPage: 0,
    pages: []
  };
  ngOnInit() { }

  get currentPage(): number {
    return this.pager.currentPage;
  }
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'totalPages') {
        this.pager = this.totalPages ? this.pagerService.getPager(this.totalPages, 0) : {} as CandiePagination;
      }
    }
  }

  goToPage(index: number) {
    if (this.currentPage != index) {
      this.pager = this.pagerService.getPager(this.totalPages, index);
      this.pageChange.emit(this.currentPage);
    }
  }

  next() {
    if (this.currentPage != this.totalPages - 1) {
      this.goToPage(this.currentPage + 1);
      this.pager = this.pagerService.getPager(this.totalPages, this.currentPage);
      this.pageChange.emit(this.currentPage);
    }
  }

  previous() {
    if (this.currentPage != 0) {
      this.goToPage(this.currentPage - 1);
      this.pager = this.pagerService.getPager(this.totalPages, this.currentPage);
      this.pageChange.emit(this.currentPage);
    }
  }

  changeSize(size) {
    this.sizeChange.emit(size.value)
  }
}
