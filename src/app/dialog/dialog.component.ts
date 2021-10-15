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
      name: "aaar",
      mailid: 3283478,
      number: "$19.32",
      is_SMS: true,
    },
    {
      name: "adad",
      mailid: 3283478,
      number: "$19.32",
      is_SMS: false,
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  isDelivery(): boolean {
    return this.data.templateName == "deliveryAddress_Template" ? true : false;
  }

  isContactList(): boolean {
    return this.data.templateName == "contactList_Template" ? true : false;
  }

  isaddBranch(): boolean {
    return this.data.templateName == "addBranch_Template" ? true : false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  create() {
    debugger
    this.dialogRef.close("data from dialog to parent comp");
  }

  createChildContact(): void {
    const dialogRef = this.dialog.open(childDialogComponent, {
      width: "40%",
      data: {
        name: "s",
        animal: "s",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
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
  constructor(
    public dialogRef: MatDialogRef<childDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  createContact() {
    this.dialogRef.close("data from child dialog to parent dialog");
  }
}
