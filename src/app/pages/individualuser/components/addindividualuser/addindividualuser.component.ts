import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FIELD_TYPE } from 'src/app/constants/input.constant';
import { AlertService } from 'src/app/modules/alert/alert.service';
import { environment } from 'src/environments/environment';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-addindividualuser',
  templateUrl: './addindividualuser.component.html',
  styleUrls: ['./addindividualuser.component.scss']
})
export class AddindividualuserComponent {
  addIndividualUserForm : FormGroup = this.fb.group ({   
    name : [''],
    email : [''],
    phoneNumber : ['']
})

constructor(
  private $dialogRef: MatDialogRef< AddindividualuserComponent >,
  private $dialog : MatDialog,
  private $alert: AlertService,
  private $addUser : UserService,
  private fb : FormBuilder,
  private dialogRef: MatDialogRef< AddindividualuserComponent >, 
  @Inject(MAT_DIALOG_DATA) public data:any) {     

  }

ngOnInit(): void {
  console.log(this.data,'data..')
}


closeDialog(): void {
  this.$dialogRef.close(null);
}

onSubmit(){
}
addIndividualUser(){
  let data = {
    name : this.addIndividualUserForm.value.name,
    email : this.addIndividualUserForm.value.email,
    phoneNumber : this.addIndividualUserForm.value.phoneNumber
  }
    this.$addUser.addIndividualUser(data).subscribe((res:any) => {
      if(res){
        this.$alert.success(res.message)
        this.dialogRef.close(true);
      }
    
    },(err)=> {
      this.$alert.danger(err.message);
    })   

}

}
    


