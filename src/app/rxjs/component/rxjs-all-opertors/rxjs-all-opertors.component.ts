import { Component, OnInit } from '@angular/core';
import { filter, interval, of, range, Subject, take, takeLast, takeUntil, takeWhile } from 'rxjs';
@Component({
  selector: 'app-rxjs-all-opertors',
  templateUrl: './rxjs-all-opertors.component.html',
  styleUrls: ['./rxjs-all-opertors.component.css']
})
export class RxjsAllOperatorsComponent implements OnInit {

  constructor() { }

  obsTake = of(10, 20, 30, 40, 50).pipe(take(2));
  takeFive = interval(1000).pipe(take(5));

  // notifier= new Subject();
  // obss = interval(1000).pipe(takeUntil(this.notifier));

  obsTakeWhile = of(1, 2, 3, 1, 2, 3, 1, 2, 3)
  .pipe(
    takeWhile(val => val < 3)
  );
  obsTakeWhile2 = of(1, 2, 3, 1, 2, 3, 1, 2, 3)
  .pipe(
     takeWhile(val => val < 3, true)
  );

  obstAKELAST = range(1, 100).pipe(takeLast(3));
  ngOnInit() {
    console.log('****take operator ******')
    this.obsTake.subscribe(val => console.log(val));


    console.log('****take operator ******')
    this.takeFive.subscribe(val => console.log(val));

    //filter opertor
    console.log('****filter ******')
    of(1,2,3,4,5,6,7,8,9,10)
      .pipe(
        filter(val => {
          return val %2==0;
        }),
      )
      .subscribe(val => console.log(val));

      // console.log('****takeUntil ******')
      // this.obss.subscribe(val => console.log(val));

      console.log('****takeWhile ******')
      this.obsTakeWhile.subscribe(val => console.log(val));

      console.log('****takeWhile 2 ******')
      this.obsTakeWhile2.subscribe(val => console.log(val));

      console.log('****takeWhile eVEN NUMBER ******')
      const evenNumbers = of(2, 4, 6, 3, 8)
      .pipe(takeWhile(n => n % 2 == 0))
      .subscribe(val => console.log(val));

      console.log('****takeLast ******')
      this.obstAKELAST.subscribe(val => console.log(val));

  }
  // stopObs() {
  //   // this.notifier.next();
  //   this.notifier.complete();
  // }
  helloWorld():void{

  }

}
