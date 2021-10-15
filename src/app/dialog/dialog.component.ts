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
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent {
  createContact_Template: boolean = false;
  contactList_Template: boolean = false;
  deliveryAddress_Template: boolean = false;
  addBranch_Template: boolean = false;

  check = true;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.createContact_Template =
      this.data.templateName == "createContact_Template" ? true : false;
    this.contactList_Template =
      this.data.templateName == "contactList_Template" ? true : false;
    this.deliveryAddress_Template =
      this.data.templateName == "deliveryAddress_Template" ? true : false;
    this.addBranch_Template =
      this.data.templateName == "addBranch_Template" ? true : false;
  }

  ngOnInit(): void {
    debugger;
    // this.createContact_Template =
    //   this.data.templateName == "createContact_Template" ? true : false;
    // this.contactList_Template =
    //   this.data.templateName == "contactList_Template" ? true : false;
    // this.deliveryAddress_Template =
    //   this.data.templateName == "deliveryAddress_Template" ? true : false;
    // this.addBranch_Template =
    //   this.data.templateName == "addBranch_Template" ? true : false;
  }

  createContact(tempName?: string) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
