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
    this.openDialog();
  }

  openDialog(): void {
    let templateName: string = 'createContact_Template';
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '40%',
      data: {
        templateName: templateName,
        name: this.name,
        animal: this.animal,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
