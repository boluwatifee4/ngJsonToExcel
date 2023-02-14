import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class ExcelServiceService {

  constructor(private http: HttpClient) { }

    getDummyData(): Observable<any> {
   return  this.http.get('https://jsonplaceholder.typicode.com/posts')
 } 
  public exportToExcel(element: any, fileName: string): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(element);
    // generate workbook and add the worksheet
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, ws, 'Sheet1');
    // save to file
    XLSX.writeFile(workbook, `${fileName}${EXCEL_EXTENSION}`);

  }
  
}
