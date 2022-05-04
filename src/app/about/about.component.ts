import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import * as brandAwesom from '@fortawesome/free-brands-svg-icons';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as spanish } from '../shared/i18n/es';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  mapMarker: any;
  building: any;
  phone: any;
  email: any;
  birthday: any;
  badge: any;
  home: any;
  itchio: any;
  linkedinUrl: any = "https://www.linkedin.com/in/germ%C3%A1n-esquinazi-bachoer-5961541a3/";
  
  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, spanish);
  }

  ngOnInit(): void {
    this.mapMarker = awesom.faMapMarker;
    this.building = awesom.faCity;
    this.email = awesom.faMailBulk;
    this.phone = awesom.faPhone;
    this.birthday = awesom.faBirthdayCake;
    this.badge = awesom.faGraduationCap;
    this.home = awesom.faLaptopHouse;
    this.itchio = brandAwesom.faItchIo;
  }

}
