import { AfterViewInit, Component, inject, viewChild } from '@angular/core';
import { UsuarioInterface } from '../../interfaces/usuario.interface';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../../services/usuario.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-usuario-lista',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, RouterLink, MatPaginatorModule, MatPaginator],
  templateUrl: './usuario-lista.component.html',
  styleUrl: './usuario-lista.component.css'
})
  export class UsuarioListaComponent implements AfterViewInit  {
  router=inject(Router);
  displayedColumns: string[] = ['id', 'name', 'mail', 'action'];
  
  usuarioLista: UsuarioInterface[]=[];
  httpService=inject(UsuarioService);

  paginator! : MatPaginator;
  dataSource!: MatTableDataSource<UsuarioInterface>;

  ngOnInit(){
    // debugger;-
    this.httpService.getUsuarios().subscribe(result=>{
      this.usuarioLista=result;
      console.log(this.usuarioLista);
    });

    this.dataSource = new MatTableDataSource(this.usuarioLista);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  edit(id:number){
    console.log(id);
    this.router.navigateByUrl("/usuario/"+id);
  }

 
}
