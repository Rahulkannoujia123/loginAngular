import { Component, ElementRef, Inject, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FIELD_TYPE } from 'src/app/constants/input.constant';
import { AlertService } from 'src/app/modules/alert/alert.service';
import { environment } from 'src/environments/environment';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent {
  @ViewChild('ViewDialog') ViewDialog!: TemplateRef<any>;
  addItemForm : FormGroup = this.fb.group ({
      image:['',[]],
     username:[''],
     title:['',[]],
     rating:['',[]],
     description:['',[]]

  })
  fieldType: any = FIELD_TYPE;
  @ViewChild('UploadFileInput')
  uploadFileInput!: ElementRef;
  myFilename = 'Select File';
  UploadImage: any;
  isImageSelected: Boolean = false;
  ImageUrl: any;
  isImageUploading = false;
  baseUrl=environment.baseUrl;
  editUrl: any;
  selectedFile: any;

  constructor(
    private $dialogRef: MatDialogRef<AdditemComponent>,
    private $dialog : MatDialog,
    private $alert: AlertService,
    private $additem : ItemService,
    private fb : FormBuilder,
    private dialogRef: MatDialogRef<AdditemComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any) {     

    }
  
  ngOnInit(): void {
    console.log(this.data,'data..')
  }
  
  
  closeDialog(): void {
    this.$dialogRef.close(null);
  }

  uploadFile(){
    document.getElementById("fileUpload")?.click()
  }

    
myFiles:any[]=[];
images:any =[];
getFileDetails(e: any) {
  console.log(this.images, 'this.images');
  console.log('getFileDetails1', e.target.files.length);
  let filesAmount = e.target.files.length;

  for (let i = 0; i < filesAmount; i++) {
    if (this.images.length < 3) {
      this.isImageSelected = true;
      this.myFiles.push(e.target.files[i]);
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.images=event.target.result
        this.addItemForm.patchValue({
          fileSource: this.images,
        });
        
      };
      reader.readAsDataURL(e.target.files[i]);
    } 
  }
}
  
  onSubmit(){
    if(this.data.type == 'Edit'){
      this.updateItem();
    } else {
      this.addItem();
    }
  }
    
  addItem(){
      const formData:FormData = new FormData();      
      formData.append('itemName', this.addItemForm.value.itemName);
      formData.append('itemOwner', this.addItemForm.value.itemOwner);
      formData.append('ownerName', this.addItemForm.value.ownerName);
      formData.append('loanerName', this.addItemForm.value.loanerName);

      this.myFiles.forEach((e:any)=>{
        formData.append('image',e);
      })
      this.$additem.addItem(formData).subscribe((res:any) => {
        if(res){
          this.$alert.success(res.message)
          this.dialogRef.close(true);
        }
      
      },(err)=> {
        this.$alert.danger(err.message);
      })   

  }
  updateItem(){

  }
}
  
