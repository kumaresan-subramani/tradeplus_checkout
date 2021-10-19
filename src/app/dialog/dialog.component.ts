import { Component, Inject, ViewEncapsulation } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog"; 

@Component({
  selector: "app-dialog",
  templateUrl: "dialog.component.html",
  styleUrls: ["dialog.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent {
  contactList_Template: boolean = false;
  deliveryAddress_Template: boolean = false;
  addBranch_Template: boolean = false;
  contactListItem: any = [];
   contactListDetails: any = [];
  dialogData: { [key: string]: Object | null } = {
    address: "",
    contactList: null,
  };
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.contactListDetails = [...data.contactData];
    this.contactListDetails.filter((item: any)=>item.isActive = true);
  }
  searchList: any = [];
  ngOnInit(): void {
    this.searchList = [...this.contactListDetails];
  }

  getContactdata() {
    return this.contactListDetails.filter((contact: any) => contact.isActive);
  }
  onChange(args: any, data: any) {
    data.isActive = args.checked;
    this.contactListItem.push(data);
  }
  isDelivery(): boolean {
    return this.data.templateName == "deliveryAddress_Template" ? true : false;
  }

  isContactList(): boolean {
    return this.data.templateName == "contactList_Template" ? true : false;
  }
  searchContact(args: any) {
    var value = args.target.value;
    this.contactListDetails = this.searchList.filter((item: any) =>
      item.firstName.includes(value)
    );
  }
  isaddBranch(): boolean {
    return this.data.templateName == "addBranch_Template" ? true : false;
  }

  onNoClick(isCancel: boolean= false): void {
    this.dialogData.contactList = this.getContactdata();
    this.dialogRef.close(isCancel ? this.dialogData: undefined);
  }

  createContact(): void {
    const dialogRef = this.dialog.open(childDialogComponent, {
      width: "40%",
      data: {
        name: "s",
        animal: "s",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) { 
        this.contactListDetails.push(result);
        this.searchList.push(result);
      }
      console.log(result);
    });
  }
}

@Component({
  selector: "app-child-dialog",
  templateUrl: "child-dialog.component.html",
  styleUrls: ["dialog.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class childDialogComponent {
  contactDetails: { [key: string]: Object | null } = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    is_SMS: false,
  };
  constructor(
    public dialogRef: MatDialogRef<childDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.contactDetails);
  }
  createContact() {
    this.dialogRef.close(this.contactDetails);
  }
}
