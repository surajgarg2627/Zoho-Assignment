import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  private apiUrl = 'http://localhost:8080/api/columns';

  constructor(private http: HttpClient) { }

  addColumn(column: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, column);
  }

  renameColumn(id: number, newName: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, newName);
  }
}
