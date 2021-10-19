import { Component, ViewEncapsulation } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "./dialog/dialog.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = "trade-plus";
  public animal!: string;
  name!: string;

  ACTIVE_ITEM: string = "active-box";
  public isDeliveryBox: boolean = true;
  public selectedAddress: any;
  public branchDetails: any = [
    {
      location_name: 'Riccarton',
      location_address: '2-20 MANDEVILLE ST, Christchurch',
      phone: '+2 9666 2800'
    }
  ]
  addressData: AddressData[] = [
    {
      selected: true,
      value: "810 Great South Road, Penrose Auckland",
    },
    {
      selected: false,
      value: "1 Wordsworth Street, Rolleston Selwyn District 7614",
    },
    {
      selected: false,
      value: "22/1 Glenside Crescent, 22/1 Glenside Crescent,",
    },
  ];
  cartItems: any = [
    {
      name: "Classic Courtyard Flagstone paver",
      itemCode: 3283478,
      price: "$19.32",
    },
    {
      name: "Classic Courtyard Flagstone paver",
      itemCode: 3283478,
      price: "$19.32",
    },
    {
      name: "Classic Courtyard Flagstone paver",
      itemCode: 3283478,
      price: "$19.32",
    },
    {
      name: "Classic Courtyard Flagstone paver",
      itemCode: 3283478,
      price: "$19.32",
    },
    {
      name: "Classic Courtyard Flagstone paver",
      itemCode: 3283478,
      price: "$19.32",
    },
    {
      name: "Classic Courtyard Flagstone paver",
      itemCode: 3283478,
      price: "$19.32",
    },
    {
      name: "Classic Courtyard Flagstone paver",
      itemCode: 3283478,
      price: "$19.32",
    },
    {
      name: "Classic Courtyard Flagstone paver",
      itemCode: 3283478,
      price: "$19.32",
    },
    {
      name: "Classic Courtyard Flagstone paver",
      itemCode: 3283478,
      price: "$19.32",
    },
    {
      name: "Classic Courtyard Flagstone paver",
      itemCode: 3283478,
      price: "$19.32",
    },
    {
      name: "Classic Courtyard Flagstone paver",
      itemCode: 3283478,
      price: "$19.32",
    },
    {
      name: "Classic Courtyard Flagstone paver",
      itemCode: 3283478,
      price: "$19.32",
    },
    {
      name: "Classic Courtyard Flagstone paver",
      itemCode: 3283478,
      price: "$19.32",
    },
  ];

  contactDetails: any = [
    {
      firstName: "aa",
      lastName: "bb",
      email: "aa@gmail.com",
      mobileNo: "1234567890",
      is_SMS: false,
      isActive: true
    },
    {
      firstName: "bb",
      lastName: "cc",
      email: "bb@gmail.com",
      mobileNo: "1234567890",
      is_SMS: false,
      isActive: true
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.selectedAddress = this.addressData.filter((item) => item.selected)[0];
  }

  openDialog(tempName?: string): void {
    let temp: any = tempName;
    if (tempName === "deliveryAddress_Template") {
      temp = this.isDeliveryBox ? tempName : "addBranch_Template";
    }
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "40%",
      data: {
        templateName: temp,
        name: this.name,
        animal: this.animal,
        contactData: [...this.contactDetails]
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
      if (result) {
        if (result.address && result.address != "") {
          this.addressData.push({ selected: false, value: result.address });
        }
        if (result.contactList) {
          this.contactDetails = [...result.contactList];
        }
      }
    });
  }

  selectBox(isDelivery: boolean) {
    this.isDeliveryBox = isDelivery;
  }
  addressChange(args: any) {
    this.selectedAddress.selected = false;
    this.selectedAddress = this.addressData.filter((item) => item.selected)[0];
  }
  addressClick(addr: AddressData) {
    addr.selected = true;
    this.selectedAddress.selected = false;
    this.selectedAddress = this.addressData.filter((item) => item.selected)[0];
  }
  removeContact(removeDetail: any) {
    var index = this.contactDetails.indexOf(removeDetail);
    this.contactDetails.splice(index, 1);
  }
}

export interface AddressData {
  selected: boolean;
  value: string;
}
