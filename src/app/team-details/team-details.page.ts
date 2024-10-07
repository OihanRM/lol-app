import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
  equipo:any=null;
  constructor(private routerData:ActivatedRoute, private rotuer:Router, private service:EventosService) { }

  ngOnInit() {
    this.equipo = this.routerData.snapshot.paramMap.get('param');
    this.equipo = JSON.parse(this.equipo);
    this.equipo = this.service.getEquipo(this.equipo.id);

    console.log(this.equipo);
  }
  onPlayerClick(player:any){
    this.rotuer.navigate(['/player-details', {param: JSON.stringify(player), param2: JSON.stringify(this.equipo)}]);
  }

}
