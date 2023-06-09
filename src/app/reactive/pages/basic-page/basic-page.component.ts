import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

  //Hay dos formas de crear formularios reactivos
  public myForm2 = new FormGroup({
    product : new FormControl(''),
    price : new FormControl(0),
    inStorage : new FormControl(0)
  })

  public myForm : FormGroup = this.fb.group(
    {
      product : [''],
      price : [0],
      inStorage: [0]
    }
  )

  constructor(private fb : FormBuilder){}

  onSave(){
    console.log(this.myForm2.value);
  }

}
