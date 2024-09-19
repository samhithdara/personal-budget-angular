import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dataSource: any = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#4bc0c0',
          '#9966ff',
          '#ff9f40'
        ]
      }
    ],
    labels: []
  };

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  isEmpty(val:any){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }

  fetchData() {
    if (this.isEmpty(this.dataSource.datasets[0].data)|| this.isEmpty(this.dataSource.labels)){
      this.http.get('http://localhost:3000/budget').subscribe((res: any) => {
      this.dataSource.datasets[0].data = res.myBudget.map((item: any) => item.budget);
      this.dataSource.labels = res.myBudget.map((item: any) => item.title);
    
  });
}
}

}
