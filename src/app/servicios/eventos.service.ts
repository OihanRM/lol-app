import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface Player {
  id: number;
  name: string;
  surname: string;
  rol: string;
}

export interface Equipo {
  id: number;
  name: string;
  region: string;
  players: Player[];
  wins: number;
  loses: number;
}

@Injectable({
  providedIn: 'root'
})

export class EventosService {

  private players: Player[] = [];
  private equipos: Equipo[] = [];

  constructor(private router: Router) { 

    this.players = [
      { id: 1, name: 'Faker', surname: 'Lee', rol: 'Mid' },
      { id: 2, name: 'Doinb', surname: 'Kim', rol: 'Mid' },
      { id: 3, name: 'Perkz', surname: 'Perkovic', rol: 'Mid' },
      { id: 4, name: 'Caps', surname: 'Mikael', rol: 'Mid' },
      { id: 5, name: 'Nuguri', surname: 'Jang', rol: 'Top' },
      { id: 6, name: 'Chovy', surname: 'Jeong', rol: 'Mid' },
      { id: 7, name: 'Doublelift', surname: 'Yihong', rol: 'ADC' },
      { id: 8, name: 'Uzi', surname: 'Jian Zihao', rol: 'ADC' },
      { id: 9, name: 'Ruler', surname: 'Kwon', rol: 'ADC' },
      { id: 10, name: 'Rekkles', surname: 'Carlsson', rol: 'ADC' },
      { id: 11, name: 'ShowMaker', surname: 'Heo', rol: 'Mid' },
      { id: 12, name: 'Viper', surname: 'Park', rol: 'ADC' },
      { id: 13, name: 'JackeyLove', surname: 'Kong', rol: 'ADC' },
      { id: 14, name: 'Bwipo', surname: 'Henk', rol: 'Top' },
      { id: 15, name: 'Jankos', surname: 'Marcin', rol: 'Jungle' },
      { id: 16, name: 'Xmithie', surname: 'Xmithie', rol: 'Jungle' },
      { id: 17, name: 'Tian', surname: 'Tian', rol: 'Jungle' },
      { id: 18, name: 'Clid', surname: 'Clid', rol: 'Jungle' },
      { id: 19, name: 'Impact', surname: 'Yang', rol: 'Top' },
      { id: 20, name: 'Canyon', surname: 'Kim', rol: 'Jungle' },
      { id: 21, name: 'TheShy', surname: 'Kong', rol: 'Top' },
      { id: 22, name: 'Flandre', surname: 'Zeng', rol: 'Top' },
      { id: 23, name: 'Kanavi', surname: 'Yang', rol: 'Jungle' },
      { id: 24, name: 'Ming', surname: 'Tian', rol: 'Support' },
      { id: 25, name: 'SwordArt', surname: 'Yuan', rol: 'Support' },
      { id: 26, name: 'Hylissang', surname: 'Mihai', rol: 'Support' },
      { id: 27, name: 'CoreJJ', surname: 'Jo', rol: 'Support' },
      { id: 28, name: 'Alphari', surname: 'Andrei', rol: 'Top' },
      { id: 29, name: 'Karma', surname: 'Lee', rol: 'Support' },
      { id: 30, name: 'Clid', surname: 'Clid', rol: 'Jungle' },
      { id: 31, name: 'Ghost', surname: 'Jo', rol: 'ADC' },
      { id: 32, name: 'BeryL', surname: 'Jang', rol: 'Support' },
      { id: 33, name: 'Nisqy', surname: 'Nisqy', rol: 'Mid' },
      { id: 34, name: 'Froggen', surname: 'Froggen', rol: 'Mid' },
      { id: 35, name: 'Soaz', surname: 'Paul', rol: 'Top' },
      { id: 36, name: 'Sencux', surname: 'Sencux', rol: 'Mid' },
      { id: 37, name: 'Kasing', surname: 'Kasing', rol: 'Support' },
      { id: 38, name: 'Meteos', surname: 'Meteos', rol: 'Jungle' },
      { id: 39, name: 'Ninja', surname: 'Ninja', rol: 'Mid' },
      { id: 40, name: 'IWillDominate', surname: 'Dominate', rol: 'Jungle' },
    ];

    this.equipos = [
      { 
        id: 1, 
        name: 'T1', 
        region: 'LPL', 
        players: [
          this.players[0], this.players[5], this.players[15], this.players[19], this.players[24]
        ],
        wins: 0,
        loses: 0
      },
      { 
        id: 2, 
        name: 'FPX', 
        region: 'LPL', 
        players: [
          this.players[1], this.players[6], this.players[20], this.players[23], this.players[28]
        ],
        wins: 0,
        loses: 0
      },
      { 
        id: 3, 
        name: 'DRX', 
        region: 'LCK', 
        players: [
          this.players[2], this.players[7], this.players[21], this.players[22], this.players[27]
        ],
        wins: 0,
        loses: 0
      },
      { 
        id: 4, 
        name: 'Gen.G', 
        region: 'LCK', 
        players: [
          this.players[3], this.players[8], this.players[25], this.players[26], this.players[29]
        ],
        wins: 0,
        loses: 0
      },
      { 
        id: 5, 
        name: 'G2 Esports', 
        region: 'LEC', 
        players: [
          this.players[4], this.players[9], this.players[30], this.players[33], this.players[36]
        ],
        wins: 0,
        loses: 0
      },
      { 
        id: 6, 
        name: 'Fnatic', 
        region: 'LEC', 
        players: [
          this.players[4], this.players[10], this.players[31], this.players[34], this.players[37]
        ],
        wins: 0,
        loses: 0
      },
      { 
        id: 7, 
        name: 'TSM', 
        region: 'LCS', 
        players: [
          this.players[6], this.players[11], this.players[32], this.players[35], this.players[38]
        ],
        wins: 0,
        loses: 0
      },
      { 
        id: 8, 
        name: 'Cloud9', 
        region: 'LCS', 
        players: [
          this.players[12], this.players[13], this.players[14], this.players[39], this.players[40]
        ],
        wins: 0,
        loses: 0
      },
    ];
    
  }

  getPlayers(): Player[] {
    return this.players;
  }
  getEquipos(): Equipo[] {
    return this.equipos;
  }
  getEquipo(id: number) {
    return this.equipos.find(equipo => equipo.id === id);
  }
  setPlayer(player: Player, equipo: Equipo) {
    let index = equipo.players.findIndex(p => p.id === player.id);
    if(index !== -1) {
      equipo.players[index] = player
    }

  }
}
