import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  constructor(private domSanitizer:DomSanitizer) {

   }

  ngOnInit() {
    // this.image = this.domSanitizer.bypassSecurityTrustResourceUrl()
  }

}
