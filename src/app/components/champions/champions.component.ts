import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-champions',
  imports: [CommonModule],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.css',
})
export class ChampionsComponent {
  url: string =
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/';
  champion_names = [
    'Aatrox',
    'Ahri',
    'Akali',
    'Akshan',
    'Alistar',
    'Ambessa',
    'Amumu',
    'Anivia',
    'Annie',
    'Aphelios',
    'Ashe',
    'Aurelion Sol',
    'Aurora',
    'Azir',
    'Bard',
    "Bel'Veth",
    'Blitzcrank',
    'Brand',
    'Braum',
    'Briar',
    'Caitlyn',
    'Camille',
    'Cassiopeia',
    "Cho'Gath",
    'Corki',
    'Darius',
    'Diana',
    'Draven',
    'Dr. Mundo',
    'Ekko',
    'Elise',
    'Evelynn',
    'Ezreal',
    'Fiddlesticks',
    'Fiora',
    'Fizz',
    'Galio',
    'Gangplank',
    'Garen',
    'Gnar',
    'Gragas',
    'Graves',
    'Gwen',
    'Hecarim',
    'Heimerdinger',
    'Hwei',
    'Illaoi',
    'Irelia',
    'Ivern',
    'Janna',
    'Jarvan IV',
    'Jax',
    'Jayce',
    'Jhin',
    'Jinx',
    "Kai'Sa",
    'Kalista',
    'Karma',
    'Karthus',
    'Kassadin',
    'Katarina',
    'Kayle',
    'Kayn',
    'Kennen',
    "Kha'Zix",
    'Kindred',
    'Kled',
    "Kog'Maw",
    "K'Sante",
    'LeBlanc',
    'Lee Sin',
    'Leona',
    'Lillia',
    'Lissandra',
    'Lucian',
    'Lulu',
    'Lux',
    'Malphite',
    'Malzahar',
    'Maokai',
    'Master Yi',
    'Milio',
    'Miss Fortune',
    'Wukong',
    'Mordekaiser',
    'Morgana',
    'Naafiri',
    'Nami',
    'Nasus',
    'Nautilus',
    'Neeko',
    'Nidalee',
    'Nilah',
    'Nocturne',
    'Nunu & Willump',
    'Olaf',
    'Orianna',
    'Ornn',
    'Pantheon',
    'Poppy',
    'Pyke',
    'Qiyana',
    'Quinn',
    'Rakan',
    'Rammus',
    "Rek'Sai",
    'Rell',
    'Renata Glasc',
    'Renekton',
    'Rengar',
    'Riven',
    'Rumble',
    'Ryze',
    'Samira',
    'Sejuani',
    'Senna',
    'Seraphine',
    'Sett',
    'Shaco',
    'Shen',
    'Shyvana',
    'Singed',
    'Sion',
    'Sivir',
    'Skarner',
    'Smolder',
    'Sona',
    'Soraka',
    'Swain',
    'Sylas',
    'Syndra',
    'Tahm Kench',
    'Taliyah',
    'Talon',
    'Taric',
    'Teemo',
    'Thresh',
    'Tristana',
    'Trundle',
    'Tryndamere',
    'Twisted Fate',
    'Twitch',
    'Udyr',
    'Urgot',
    'Varus',
    'Vayne',
    'Veigar',
    "Vel'Koz",
    'Vex',
    'Vi',
    'Viego',
    'Viktor',
    'Vladimir',
    'Volibear',
    'Warwick',
    'Xayah',
    'Xerath',
    'Xin Zhao',
    'Yasuo',
    'Yone',
    'Yorick',
    'Yuumi',
    'Zac',
    'Zed',
    'Zeri',
    'Ziggs',
    'Zilean',
    'Zoe',
    'Zyra',
  ];

  champion_ids = [
    '266',
    '103',
    '84',
    '166',
    '12',
    '799',
    '32',
    '34',
    '1',
    '523',
    '22',
    '136',
    '893',
    '268',
    '432',
    '200',
    '53',
    '63',
    '201',
    '233',
    '51',
    '164',
    '69',
    '31',
    '42',
    '122',
    '131',
    '119',
    '36',
    '245',
    '60',
    '28',
    '81',
    '9',
    '114',
    '105',
    '3',
    '41',
    '86',
    '150',
    '79',
    '104',
    '887',
    '120',
    '74',
    '910',
    '420',
    '39',
    '427',
    '40',
    '59',
    '24',
    '126',
    '202',
    '222',
    '145',
    '429',
    '43',
    '30',
    '38',
    '55',
    '10',
    '141',
    '85',
    '121',
    '203',
    '240',
    '96',
    '897',
    '7',
    '64',
    '89',
    '876',
    '127',
    '236',
    '117',
    '99',
    '54',
    '90',
    '57',
    '11',
    '902',
    '21',
    '62',
    '82',
    '25',
    '950',
    '267',
    '75',
    '111',
    '518',
    '76',
    '895',
    '56',
    '20',
    '2',
    '61',
    '516',
    '80',
    '78',
    '555',
    '246',
    '133',
    '497',
    '33',
    '421',
    '526',
    '888',
    '58',
    '107',
    '92',
    '68',
    '13',
    '360',
    '113',
    '235',
    '147',
    '875',
    '35',
    '98',
    '102',
    '27',
    '14',
    '15',
    '72',
    '901',
    '37',
    '16',
    '50',
    '517',
    '134',
    '223',
    '163',
    '91',
    '44',
    '17',
    '412',
    '18',
    '48',
    '23',
    '4',
    '29',
    '77',
    '6',
    '110',
    '67',
    '45',
    '161',
    '711',
    '254',
    '234',
    '112',
    '8',
    '106',
    '19',
    '498',
    '101',
    '5',
    '157',
    '777',
    '83',
    '350',
    '154',
    '238',
    '221',
    '115',
    '26',
    '142',
    '143',
  ];
}
