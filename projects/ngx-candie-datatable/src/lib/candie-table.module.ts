import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CandieHeaderComponent } from './candie-header/candie-header.component';
import { CandiePaginationComponent } from './candie-pagination/candie-pagination.component';
import { CandieRowComponent } from './candie-row/candie-row.component';
import { CandieTableComponent } from './candie-table.component';
import { SortDirective } from './utilities/sort.directive';

const comps = [CandieTableComponent, CandieRowComponent, CandieHeaderComponent, CandiePaginationComponent, SortDirective]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...comps],
  exports: [CandieTableComponent]
})
export class CandieTableModule { }
