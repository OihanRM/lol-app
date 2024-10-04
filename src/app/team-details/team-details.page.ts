import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
  equipo:any=null;
  constructor(private routerData:ActivatedRoute, private rotuer:Router) { }

  ngOnInit() {
    this.equipo = this.routerData.snapshot.paramMap.get('param');
    this.equipo = JSON.parse(this.equipo);
    console.log(this.equipo);
  }
  onPlayerClick(player:any){
    this.rotuer.navigate(['/player-details', {param: JSON.stringify(player)}]);
  }

}
