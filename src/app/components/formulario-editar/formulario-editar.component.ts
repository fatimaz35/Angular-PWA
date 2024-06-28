import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-formulario-editar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './formulario-editar.component.html',
  styleUrl: './formulario-editar.component.css'
})
export class FormularioEditarComponent {

  id:number = 0;
  
  // Inyectamos el servicio Router (@Autowired en Java)
  // El modificador private en el parametro crea automaticamente el atributo en la clase
  // Azucar Sintatica de typescript
  constructor(private router:Router, private rutaActual: ActivatedRoute) { 
    //this.id = this.rutaActual.snapshot.params['id'];
    this.rutaActual.params.subscribe(params => {
      this.id = params["id"];
    });
  }

  volver(){
    // Navegamos a la ruta raiz programaticamente
    this.router.navigate(['']);
  }
}
