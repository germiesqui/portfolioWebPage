import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as spanish } from '../shared/i18n/es';
import { experiencesEs} from '../api/experiencesEs';
import { experiencesEn} from '../api/experiencesEn';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']

})
export class CurriculumVitaeComponent implements OnInit {
  experiences:any=experiencesEs;
  planeIcon: any ;
  gameIcon:any;
  volleyBallIcon:any;
  cvLink:any="portfolioWebPage/assets/CV_Game_Industry_2021.pdf";

  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, spanish);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.experiences=experiencesEn;
        this.cvLink="portfolioWebPage/assets/CV_GameDesign_2021__Ingles.pdf";
      }
      else{
        this.experiences=experiencesEs;
        this.cvLink="portfolioWebPage/assets/CV_GameDesign_2021.pdf";
      }
    });
  }

  ngOnInit(): void {
    this.planeIcon=awesom.faPlane;
    this.gameIcon=awesom.faGamepad;
    this.volleyBallIcon=awesom.faVolleyballBall;
  }
  
  detailOnClick(event:any, experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
    event.currentTarget.blur();
  }

}
