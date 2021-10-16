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

  contactDetails: any = [
    {
      firstName: "aa",
      lastName: "bb",
      email: "aa@gmail.com",
      mobileNo: "1234567890",
      is_SMS: false,
    },
    {
      firstName: "bb",
      lastName: "cc",
      email: "bb@gmail.com",
      mobileNo: "1234567890",
      is_SMS: false,
    },
  ];
  dialogData: { [key: string]: Object | null } = {
    address: "",
    contactList: null,
  };
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  searchList: any = [];
  ngOnInit(): void {
    this.searchList = [...this.contactDetails];
  }

  getContactdata() {
    return this.contactDetails.filter((contact: any) => contact.is_SMS);
  }

  isDelivery(): boolean {
    return this.data.templateName == "deliveryAddress_Template" ? true : false;
  }

  isContactList(): boolean {
    return this.data.templateName == "contactList_Template" ? true : false;
  }
  searchContact(args: any) {
    var value = args.target.value;
    this.contactDetails = this.searchList.filter((item: any) =>
      item.firstName.includes(value)
    );
  }
  isaddBranch(): boolean {
    return this.data.templateName == "addBranch_Template" ? true : false;
  }

  onNoClick(): void {
    this.dialogData.contactList = this.getContactdata();
    this.dialogRef.close(this.dialogData);
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
        var additem = {
          name: result.firstName,
          mailid: result.email,
          is_SMS: result.is_SMS,
          number: "$19.32",
        };
        this.contactDetails.push(additem);
        this.searchList.push(additem);
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
