import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';

import { cibInstagram, cibSpotify, cibTiktok, cibTwitter, cibYoutube } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-home',
  imports: [CommonModule, IconDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  icons = { cibSpotify, cibYoutube, cibTiktok, cibTwitter, cibInstagram };

  podcasterList = [
    {
      name: 'Giomara Aristizabal',
      description: 'Soy una mujer carismática cuya voz incomoda a quienes temen el cambio, porque desafío el status quo y exijo justicia sin pedir permiso.',
      picture: '/png/foto-giho.png',
      url: 'https://www.linkedin.com/in/gihomara-aristizabal-morales-95507b115/'
    },
    {
      name: 'Dora Saldarriaga',
      description: 'Soy una mujer de origen campesina que tiene como apuesta vital ser feliz y lo hago a través de la defensa de los derechos humanos de las mujeres y las personas excluidas.',
      picture: '/png/foto-dora.png',
      url: 'https://www.linkedin.com/in/dora-cecilia-saldarriaga-grisales-a773032a0/'
    }
  ];

  wordsSupport = [
    {
     title: 'Feminismo',
     description: 'Es la idea de que todas las personas, deben tener los mismos derechos y oportunidades.' 
    },
    {
     title: 'Hegemónico',
     description: 'Es lo más fuerte, lo más común o lo que manda en un lugar.' 
    },
    {
     title: 'Patriarcal',
     description: 'Cuando siempre son los hombres los que mandan o tienen más poder (en la familia, en el trabajo o en la sociedad).' 
    }
  ];

  products = [ 
    {
      url:"",
      picture: "/png/producto1.png",
      price: "$50.000"
    },
    {
      url:"",
      picture: "/png/producto2.png",
      price: "$30.000"
    },
    {
      url:"",
      picture: "/png/producto3.png",
      price: "$20.000"
    },
    {
      url:"",
      picture: "/png/producto4.png",
      price: "$15.000"
    }
  ];

  sponsors = [ 
    {
      picture: "/jpeg/juddy-dev.jpeg",
      name: "juddy.dev",
      link: "https://www.juddy.dev/"
    },
    {
      picture: "/png/deal.png",
      name: "Click para ser parte",
      link: ""
    }
  ];

  

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkMode() {
    return this.themeService.isDarkMode();
  }

  openTab(url: string) {
    window.open(url, "_blank", 'noopener,noreferrer');
  }

  openTabSpotify() {
    window.open("https://open.spotify.com/show/4nucTZw335cRrJEBXFdj9W", "_blank", 'noopener,noreferrer');
  }

  openTabInstagram() {
    window.open("https://www.instagram.com/a_brasierquitao/", "_blank", 'noopener,noreferrer');
  }

  openTabTiktok() {
    window.open("https://www.tiktok.com/@a_brasierquitao", "_blank", 'noopener,noreferrer');
  }

  openTabYoutube() {
    window.open("https://www.youtube.com/playlist?list=PLajb7m1I3EOveyydAWhTLamC-2RguTIQv", "_blank", 'noopener,noreferrer');
  }

  openTabX() {
    window.open("https://x.com/a_brasierquitao", "_blank", 'noopener,noreferrer');
  }

}
