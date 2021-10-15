import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { FormsModule } from "@angular/forms";

import {
  DialogComponent,
  childDialogComponent,
} from "./dialog/dialog.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DemoMaterialModule } from "./material.module";

@NgModule({
  declarations: [AppComponent, DialogComponent, childDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatListModule,
    DemoMaterialModule,
    FormsModule,
  ],
  exports: [
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
