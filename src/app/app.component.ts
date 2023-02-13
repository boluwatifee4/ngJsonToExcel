import { Component } from '@angular/core';
import { ExcelServiceService } from './excel-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngJson2Excel';
  apiJsonResponseData: any;

  constructor(
    private excelService: ExcelServiceService,
    private http: HttpClient
  ){
   
  }

  getDummyData(): Observable<any> {
   return  this.http.get('https://jsonplaceholder.typicode.com/posts')
 } 
 
  exportEcel(): void {

  }


}
