import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class IconSanitiedService {

  constructor(
    private sanitizer: DomSanitizer) {

    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/img/user.svg');
    this.sanitizer.bypassSecurityTrustResourceUrl('../assets/img/lock.svg');

  }
}
