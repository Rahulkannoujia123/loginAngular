import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/modules/alert/alert.service';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-editindividual',
  templateUrl: './editindividual.component.html',
  styleUrls: ['./editindividual.component.scss']
})
export class EditindividualComponent {
  editIndividualUserForm : FormGroup = this.fb.group ({   
    name : [''],
    email : [''],
    phoneNumber : ['']
})
editId:any;
userId:any;
constructor(
  private $dialogRef: MatDialogRef< EditindividualComponent >,
  private $dialog : MatDialog,
  private $alert: AlertService,
  private $editUser : UserService,
  private fb : FormBuilder,
  private dialogRef: MatDialogRef< EditindividualComponent >, 
  @Inject(MAT_DIALOG_DATA) public data:any) {     

  }

ngOnInit(): void {
  this.editId = sessionStorage.getItem("id")
  console.log(this.data,'data..')
  
}

closeDialog(): void {
  this.$dialogRef.close(null);
}

editIndividualUser(){
 
  let data = {
    name : this.editIndividualUserForm.value.name,
    email : this.editIndividualUserForm.value.email,
    phoneNumber : this.editIndividualUserForm.value.phoneNumber
  }
  
    this.$editUser.editIndividualUser(this.editId, data).subscribe(
      (res: any) => {
        if (res) {
          this.$alert.success(res.message);
          sessionStorage.clear()
          this.dialogRef.close(true);
        }
      
    },(err)=> {
      this.$alert.danger(err.message);
    })   

}

}
