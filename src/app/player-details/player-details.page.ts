import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {
  player:any=null;
  constructor(private routerData:ActivatedRoute) {}

  ngOnInit() {
    this.player = this.routerData.snapshot.paramMap.get('param');
    this.player = JSON.parse(this.player);
    console.log(this.player);
  }

  modBtn(){
    console.log("Modificar");
  }
}
