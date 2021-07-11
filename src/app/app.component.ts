import { Component, OnInit } from '@angular/core';
import { CandieTable } from 'projects/ngx-candie-datatable/src/lib/interfaces/CandieTable.i';
import { dummyPersons } from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: Person[];
  config: CandieTable = {
    internalPaging: true,
    internalSorting: true,
    enableSelect: false,
    columns: [
      {
        label: 'Name',
        property: 'name',
        sortable: true
      },
      {
        label: 'Surname',
        property: 'surname',
        sortable: true
      },
      {
        label: 'Mail address',
        property: 'mail',
        sortable: true
      },
      {
        label: 'Phone nr.',
        property: 'phone',
        sortable: true
      },
      {
        label: 'Address',
        property: 'address',
        sortable: false
      },
      {
        label: 'Registered',
        property: 'registered',
        sortable: true,
        isDate: true,
        dateFormat: 'dd-MM-yyyy HH:mm'
      }
    ]
  }

  onSort(data) {
    console.log(data);
  }

  setPage(data) {
    console.log(data);
  }

  ngOnInit() {
    this.data = JSON.parse(dummyPersons)
  }

  onSizeChange(data) {
    console.log(data);
  }
}

export interface Person {
  name: string;
  mail: string;
  phone: string;
  surname: string
  address: string;
  _id: string;
  registered: string;
}