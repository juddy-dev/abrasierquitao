import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkMode() {
    return this.themeService.isDarkMode();
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
