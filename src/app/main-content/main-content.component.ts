import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'date', 'supplier'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: any): void {
    // Agrega el código que se debe ejecutar al aplicar el filtro
  }
  deleteMechanics(mechanicId: number) {
    // lógica para eliminar el mecánico con el ID especificado
  }

  openEditForm(row: any) {
    // lógica de la función
  }

  protected readonly open = open;
  protected readonly opener = opener;
}
