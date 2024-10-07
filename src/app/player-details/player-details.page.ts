import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {
  player:any=null;
  equipo:any=null;
  constructor(private routerData:ActivatedRoute, private service:EventosService, private router:Router) {}

  ngOnInit() {
    this.player = this.routerData.snapshot.paramMap.get('param');
    this.equipo = this.routerData.snapshot.paramMap.get('param2');
    this.player = JSON.parse(this.player);
    console.log(this.player);
  }

  modBtn(){
    this.service.setPlayer(this.player, this.equipo);
  }
}
