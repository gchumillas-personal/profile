import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './view.html',
  styleUrls: ['./view.scss', 'view.tablet.scss', 'view.desktop.scss']
})
export class ViewComponent implements OnInit {
  mailto = 'gonzalo.chumillas@gmail.com';
  lang = 'es';

  constructor(
    private _route: ActivatedRoute,
    private _translate: TranslateService,
    private _sanitizer: DomSanitizer) { }


  get currentLang() {
    return this._translate.currentLang;
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      const lang = params.lang;

      if (lang === 'en') {
        this.useLang(lang);
      }
    });
  }

  useLang(lang: string) {
    this._translate.use(lang);
    this.lang = lang;
  }

  sanitize(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
}
