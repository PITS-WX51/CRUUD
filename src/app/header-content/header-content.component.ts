import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MechanicQuoteComponent} from "../mechanic-quote/mechanic-quote.component";

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})
export class HeaderContentComponent {

  constructor(private _dialog: MatDialog) {}
  openAddQuoteForm(){
    this._dialog.open(MechanicQuoteComponent);

  }

}
