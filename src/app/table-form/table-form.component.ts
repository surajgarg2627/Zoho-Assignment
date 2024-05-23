import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { TableService } from '../service/table.service';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrl: './table-form.component.css'
})
export class TableFormComponent {

  tableForm: FormGroup;

  constructor(private fb: FormBuilder, private tableService: TableService) {
    this.tableForm = this.fb.group({
      name: [''],
      columns: this.fb.array([this.createColumn()])
    });
  }

  createColumn(): FormGroup {
    return this.fb.group({
      name: [''],
      dataType: ['']
    });
  }

  get columns() {
    return this.tableForm.get('columns') as FormArray;
  }

  addColumn() {
    this.columns.push(this.createColumn());
  }

  onSubmit() {
    console.log('Form Submitted', this.tableForm.value);
    this.tableService.createTable(this.tableForm.value).subscribe(response => {
      console.log('Table created successfully', response);
    }, error => {
      console.error('Error creating table', error);
    });
  }
}
