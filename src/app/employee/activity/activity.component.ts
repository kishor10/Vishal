import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
  }
 public edited = false;
  saveTodos(): void {
      //show box msg
    this.edited = true;
    //wait 3 Seconds and hide
    setTimeout(function() {
        this.edited = false;
        console.log(this.edited);
    }, 3000);
    }
}
