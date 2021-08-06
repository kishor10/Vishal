import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'ngx-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.scss'],
})
export class StepperComponent implements OnInit {

  requiredForm: FormGroup;


  constructor(
    private fb: FormBuilder
    ) { 
    this.myForm();
  }


  ngOnInit() {
    
  }

  myForm() {
      this.requiredForm = this.fb.group({
      wh_name: ['', Validators.required ],
      wh_code: ['', Validators.required ],
      doc_no_prefix: ['', Validators.required ],
      wh_ship_to: ['', Validators.required ],
      contact_name: ['', Validators.required ],
      address_line_1: ['', Validators.required ],
      country: ['', Validators.required ],
      });
   }


  /*

  error(message) {
    const toastOptions: ToastOptions = {
      title: "Error",
      msg: message,
      showClose: true,
      timeout: 2000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: () => {
        console.log('Toast  has been removed!');
      }
    };
    // Add see all possible types in one shot
    this.toastyService.error(toastOptions);
  }
  success(message) {
    const toastOptions: ToastOptions = {
      title: 'Success',
      msg: message,
      showClose: true,
      timeout: 2000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: () => {
        console.log('Toast  has been removed!');
      }
    };
    // Add see all possible types in one shot
    this.toastyService.success(toastOptions);
  }
  */

  
}
