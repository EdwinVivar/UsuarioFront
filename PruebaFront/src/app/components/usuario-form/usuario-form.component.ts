import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioInterface } from '../../interfaces/usuario.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [MatInputModule, MatIconModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent {
  formBuilder=inject(FormBuilder);
  router=inject(Router)
  route=inject(ActivatedRoute)

  usuarioForm=this.formBuilder.group({
    name:['', [Validators.required]],
    mail:['', [Validators.required, Validators.email]]
  })
  
  httpService=inject(UsuarioService);

  usuarioId!:number
  isEdit=false;
  ngOnInit(){
    
    this.usuarioId=this.route.snapshot.params['id'];

    if(this.usuarioId){
      this.isEdit=true;
    }
  }

  guardar(){
    console.log(this.usuarioForm.value);
    const usuario : UsuarioInterface={
      name:this.usuarioForm.value.name!,
      mail:this.usuarioForm.value.mail!,
    }

    if(this.isEdit){
      this.httpService.updateUsuario(this.usuarioId, usuario).subscribe(()=>{
        console.log("success");
        this.router.navigateByUrl("/usuario-lista");
    });
    }else{
      this.httpService.createUsuario(usuario).subscribe(()=>{
      console.log("success");
      this.router.navigateByUrl("/usuario-lista");
    });
    }
  }
}
