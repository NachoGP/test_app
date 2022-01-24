import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sanitas-login';

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {

    this.iconRegistry.addSvgIcon(
      'user',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/user.svg')
    );

    this.iconRegistry.addSvgIcon(
      'lock',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/lock.svg')
    );

  }
}
