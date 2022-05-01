import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { TranslateService } from '@ngx-translate/core';
import { locale as english } from '../shared/i18n/en';
import { locale as spanish } from '../shared/i18n/es';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  options:any = {
    strings: ['','Levels', 'Systems', 'Technical'],
    typeSpeed: 230,
    backSpeed: 230,
    loop: true,
  };

  constructor(private _translationLoaderService: TranslationLoaderService, private _translateService: TranslateService) {

    this._translationLoaderService.loadTranslations(english, spanish);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){

      }
      else{

      }
    });
  }
  ngOnInit(): void {
    var typed = new Typed('.typed', this.options);
    typed.reset(true)
  }
}
