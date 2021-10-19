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
  branchList: any = [
    {
      location_name: "Silverwater",
      location_address: "Silverwater 34 Buffalo Road, Hamilton QLD 4007",
      distance: "2.3 km",
      email: " arunprasad1496@gmaill.com",
      phone: "+61 9789117240",
    },
    {
      location_name: "Goldwater",
      location_address: "Goldwater 34 Buffalo Road, Hamilton QLD 4007",
      distance: "2.3 km",
      email: " arunprasad1496@gmaill.com",
      phone: "+61 9789117240",
    },
    {
      location_name: "Whitefield",
      location_address: "Whitefield 34 Buffalo Road, Hamilton QLD 4007",
      distance: "2.3 km",
      email: " arunprasad1496@gmaill.com",
      phone: "+61 9789117240",
    },
  ];
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  searchList: any = [];
  branchSearchList: any = [];

  ngOnInit(): void {
    this.searchList = [...this.contactDetails];
    this.branchSearchList = this.branchList;
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

  onNoClick(isCancel: boolean = false): void {
    this.dialogData.contactList = this.getContactdata();
    this.dialogRef.close(isCancel ? this.dialogData : undefined);
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
        this.contactDetails.push(result);
        this.searchList.push(result);
      }
      console.log(result);
    });
  }

  selectBranch(branch: any) {
    let data: any = {
      template: "addBranch_Template",
      branch: branch,
    };
    this.dialogRef.close(data);
  }

  searchBranch(args: any) {
    var value = args.target.value;
    this.branchList = this.branchSearchList.filter((item: any) =>{
      return item.location_name.includes(value)
    }
    );
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
    debugger;
    this.dialogRef.close(this.contactDetails);
  }
  createContact() {
    debugger;
    this.dialogRef.close(this.contactDetails);
  }
}
