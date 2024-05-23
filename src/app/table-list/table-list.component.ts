import { Component } from '@angular/core';
import { TableService } from '../service/table.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css'
})
export class TableListComponent {

  tables: any[] = [];

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.tableService.getAllTables().subscribe(data => {
      this.tables = data;
    });
  }
}
