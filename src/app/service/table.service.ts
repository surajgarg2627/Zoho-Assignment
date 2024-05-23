import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private apiUrl = 'http://localhost:8080/api/tables';

  constructor(private http: HttpClient) { }

  createTable(table: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, table);
  }

  getAllTables(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  renameTable(id: number, newName: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { newName });
  }
}
