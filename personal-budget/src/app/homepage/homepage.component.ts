import { AfterViewInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {
  public dataSource: any = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
        ]
      }
    ],
    labels: []
  };

  constructor(private http: HttpClient) {
    // Register Chart.js components
    // Chart.register(ArcElement, Title, Tooltip, Legend);
  }

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget').subscribe((res: any) => {
      this.dataSource.datasets[0].data = res.myBudget.map((item: any) => item.budget);
      this.dataSource.labels = res.myBudget.map((item: any) => item.title);
      this.createChart();
    });
  }

  createChart() {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'pie',
          data: this.dataSource
        });
      } else {
        console.error('2D context is not available for the canvas element');
      }
    } else {
      console.error('Canvas element with id "myChart" not found');
    }
  }
}

// import { AfterViewInit, Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Chart } from 'chart.js'

// @Component({
//   selector: 'pb-homepage',
//   templateUrl: './homepage.component.html',
//   styleUrl: './homepage.component.scss'
// })
// export class HomepageComponent implements AfterViewInit{

//   public dataSource: any;

//   constructor(private http: HttpClient) {
//   }

//   ngAfterViewInit(): void {
//     this.dataSource = {
//       datasets: [
//           {
//               data: [],
//               backgroundColor: [
//                   '#ffcd56',
//                   '#ff6384',
//                   '#36a2eb',
//                   '#fd6b19',
//               ]
//           }
//       ],
//       labels: []
//   };

//     this.http.get('http://localhost:3000/budget').subscribe((res: any) => 
//     {
//       for (var i = 0; i < res.myBudget.length; i++) {
//         this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
//         this.dataSource.labels[i] = res.myBudget[i].title;
//         this.createChart();
//     }
//     })
      
//   }


//   createChart() {
//     var ctx = document.getElementById('myChart') as HTMLCanvasElement;
//         if( typeof ctx !== 'undefined' ){
//           console.log(ctx)
//             var myPieChart = new Chart(ctx, {
//                 type: 'pie',
//                 data: this.dataSource
//             });
//         }
//   }
// }
