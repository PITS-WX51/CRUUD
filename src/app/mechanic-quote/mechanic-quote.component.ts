import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ConsumeApiService} from "../core/services/consume-api.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-mechanic-quote',
  templateUrl: './mechanic-quote.component.html',
  styleUrls: ['./mechanic-quote.component.css']
})
export class MechanicQuoteComponent implements OnInit{
  empForm!: FormGroup;
  workshops: string[]=[
    'Option1',
    'Option2',
    'Option3',
  ]

  constructor(private _fb: FormBuilder,
              private _empService: ConsumeApiService,
              private _dialogRef: MatDialogRef<MechanicQuoteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm=this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      date:'',
      supplier:'',

    })

  }

  ngOnInit() {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data){
        this._empService.updateMechanics(this.data.id,this.empForm.value).subscribe({
          next: (val: any)=>{
            alert('Detail Updated Successfully');
            this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.error(err)
          }
        });
      } else {
        this._empService.addMechanics(this.empForm.value).subscribe({
          next: (val: any)=>{
            alert('Registered Successfully');
            this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.error(err)
          }
        });
      }
    }
  }


}
