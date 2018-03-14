import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './view.html',
  styleUrls: ['./view.scss', 'view.mobile.scss']
})
export class ViewComponent {
  mailto = 'gonzalo.chumillas@gmail.com';

  constructor(private _sanitizer: DomSanitizer) { }

  sanitize(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
}
