import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MechanicQuoteComponent} from "./mechanic-quote/mechanic-quote.component";
import {ConsumeApiService} from "./core/services/consume-api.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'date', 'supplier', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _empService: ConsumeApiService) {}

  ngOnInit() {
    this.getMechanicsList();
  }

  openAddQuoteForm(){
      const dialogRef = this._dialog.open(MechanicQuoteComponent);
      dialogRef.afterClosed().subscribe({
        next:(val)=>{
          if(val){
            this.getMechanicsList();
          }
        }
      })
  }

  getMechanicsList(){
    this._empService.getMechanicsList().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteMechanics(id:number){
    this._empService.deleteMechanics(id).subscribe({
      next: (res)=>{
        alert('Deleted!');
        this.getMechanicsList();
      },
      error: console.log
    })
  }

  openEditForm(data:any){
    const dialogRef = this._dialog.open(MechanicQuoteComponent, {
      data,
    })
      dialogRef.afterClosed().subscribe({
        next: (val)=>{
          if(val){
            this.getMechanicsList();
          }
        }
      })


  }



}

