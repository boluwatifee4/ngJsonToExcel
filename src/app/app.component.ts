import { Component } from '@angular/core';
import { ExcelServiceService } from './excel-service.service';


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


  ){
    this.storeDummyData();
  }



 storeDummyData(): void {
    this.excelService.getDummyData().subscribe((data) => {
      this.apiJsonResponseData = data;
      // console.log("data",this.apiJsonResponseData);
    })
  }
 
  exportEcel(): void {
    const fileToExport = this.apiJsonResponseData.map((items:any) =>{
      return {
        "User Id": items?.userId,
        "Id": items?.id,
        "Title": items?.title,
        "Body": items?.body
      }
    });
    this.excelService.exportToExcel(fileToExport, 'OurExcelFile.xlsx' + new Date().getTime());
  }


}
