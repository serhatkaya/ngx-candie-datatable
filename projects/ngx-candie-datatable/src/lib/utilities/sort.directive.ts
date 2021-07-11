import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { SortEvent } from '../enums/sort-event.enum';
import { Sort } from './sort';

@Directive({
    selector: '[candieSort]'
})
export class SortDirective {
    @Input() candieSort: Array<any>;
    @Input() internalSorting: boolean;
    @Input() property: string
    @Output() onSort: EventEmitter<SortEvent> = new EventEmitter();

    constructor(private targetElement: ElementRef<HTMLElement>) { }

    @HostListener("click")
    sortData() {
        const sort = new Sort();
        const elem = this.targetElement.nativeElement;
        const parent = this.targetElement.nativeElement.parentElement;
        let arrows = parent.getElementsByTagName('em'), index;
        for (index = arrows.length - 1; index >= 0; index--) {
            arrows[index].parentNode.removeChild(arrows[index]);
        }

        let direction = elem.getAttribute("candie-direction");

        if (!direction) {
            direction = "asc";
        }

        if (direction === "desc") {
            switch (this.internalSorting) {
                case true:
                    this.candieSort.sort(sort.startSort(this.property, direction, this.candieSort[0][this.property]));
                    break;
                case false:
                    this.onSort.emit({
                        column: this.property,
                        direction: direction
                    } as SortEvent)
                    break;
            }
            const directionArrow = document.createElement('em');
            directionArrow.classList.add('icon-down');
            elem.setAttribute("candie-direction", "asc");
            elem.appendChild(directionArrow);
        } else {
            switch (this.internalSorting) {
                case true:
                    this.candieSort.sort(sort.startSort(this.property, direction, this.candieSort[0][this.property]));
                    break;
                case false:
                    this.onSort.emit({
                        column: this.property,
                        direction: direction
                    } as SortEvent)
                    break;
            }
            const directionArrow = document.createElement('em');
            directionArrow.classList.add('icon-up');
            elem.setAttribute("candie-direction", "desc");
            elem.appendChild(directionArrow);
        }
    }
}