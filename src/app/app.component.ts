import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  /*el RouterModule importa muchas cosas y entre una de ellas esta el RouterLink */
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'segundo-proyecto';

  constructor(private http  : HttpClient){
    
  }

  probarGet(){
    this.http.get("http://localhost:3000/contactos").subscribe({
      next : (data) => {
        alert(JSON.stringify(data));
      }
    })
  }
}
