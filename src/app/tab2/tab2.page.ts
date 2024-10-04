import { Component, OnInit } from '@angular/core';
import { EventosService } from '../servicios/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  equipos : any=null;


  constructor(private service:EventosService, private router:Router) {}

  ngOnInit() {
    this.equipos = this.service.getEquipos();
  }
  goTo(equipo: any){
    const param = JSON.stringify(equipo);
    if(param!=null)
    {
      this.router.navigate(['/team-details', {param: param}]);
    }else{
      console.log("Error al enviar el equipo");
    }
  }

}
