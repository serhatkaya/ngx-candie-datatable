# Candie data table library.

### Features

- Internal & external sorting, pagination.

# How to use

You need to import CandieTableModule to your app module.

```

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandieTableModule } from 'src/ngx-candie-datatable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CandieTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Candie datatable requires a config.

# Example CandieConfig

```
config = {
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

```

Time to use the Candie, in your component.html

```
<candie-table
  [config]="config"
  [data]="data"
  [total]="data.length"
></candie-table>

```

You can configure the Candie to use with backend to server side paging, sorting.

# Properties

- sizeChange: Event emitter output for server side paging.
- page: Event emitter output for server side paging.
- sort: Event emitter output for server side sorting.
- total: Number of data count.
- data: The data input.

### Note

- Selection feature not working yet. I'm still working on it :)

### License

This repository and the code inside it is licensed under the MIT License. Read [LICENSE](./projects/ngx-candie-datatable/src/LICENSE) for more information.
