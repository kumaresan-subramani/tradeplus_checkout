import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'trade-plus';
  public animal!: string;
  name!: string;
  
  ACTIVE_ITEM: string = 'active-box';
  public isDeliveryBox: boolean = true;
  public selectedAddress: any;
  addressData: AddressData[] = [
    {
      selected: true, 
      value: '810 Great South Road, Penrose Auckland'
    },
    {
      selected: false, 
      value: '1 Wordsworth Street, Rolleston Selwyn District 7614'
    },
    {
      selected: false, 
      value: '22/1 Glenside Crescent, 22/1 Glenside Crescent,'
    }
  ];
  cartItems: any = [
    {
      name: 'Classic Courtyard Flagstone paver',
      itemCode: 3283478,
      price: '$19.32',
    },
    {
      name: 'Classic Courtyard Flagstone paver',
      itemCode: 3283478,
      price: '$19.32',
    },
    {
      name: 'Classic Courtyard Flagstone paver',
      itemCode: 3283478,
      price: '$19.32',
    },
    {
      name: 'Classic Courtyard Flagstone paver',
      itemCode: 3283478,
      price: '$19.32',
    },
    {
      name: 'Classic Courtyard Flagstone paver',
      itemCode: 3283478,
      price: '$19.32',
    },
    {
      name: 'Classic Courtyard Flagstone paver',
      itemCode: 3283478,
      price: '$19.32',
    },
    {
      name: 'Classic Courtyard Flagstone paver',
      itemCode: 3283478,
      price: '$19.32',
    },
    {
      name: 'Classic Courtyard Flagstone paver',
      itemCode: 3283478,
      price: '$19.32',
    },
  ];

  contactDetails: any = [
    {
      name: 'aaar',
      mailid: 3283478,
      number: '$19.32',
      is_SMS: true
    },
    {
      name: 'adad',
      mailid: 3283478,
      number: '$19.32',
      is_SMS: false
    }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    // this.openDialog(); 
    this.selectedAddress = this.addressData.filter((item)=>item.selected)[0];
  }

  openDialog(tempName?: string): void {
    // let templateName: string = 'createContact_Template';
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '40%',
      data: {
        templateName: tempName,
        name: this.name,
        animal: this.animal,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  selectBox(isDelivery: boolean) {
    this.isDeliveryBox = isDelivery;
  }
  addressChange(args: any) { 
    this.selectedAddress.selected = false;
    this.selectedAddress = this.addressData.filter((item)=>item.selected)[0];
  }
  addressClick(addr: AddressData) {
    addr.selected = true;
    this.selectedAddress.selected = false;
    this.selectedAddress = this.addressData.filter((item)=>item.selected)[0];
  }
}

export interface AddressData {

  selected: boolean;
  value: string;

}
