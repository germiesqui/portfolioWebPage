import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as spanish } from '../shared/i18n/es';
import { experiencesEs} from '../api/experiencesEs';
import { experiencesEn} from '../api/experiencesEn';
import { publicationsEs} from '../api/publicationsEs';
import { publicationsEn} from '../api/publicationsEn';
import { vgExperiencesEs} from '../api/vgExperiencesEs';
import { vgExperiencesEn} from '../api/vgExperiencesEn';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']

})
export class CurriculumVitaeComponent implements OnInit {
  experiences:any=experiencesEs;
  publications:any=publicationsEs;
  vgExperiences:any=vgExperiencesEs;
  planeIcon: any ;
  gameIcon:any;
  volleyBallIcon:any;
  cvLink:any="https://germiesqui.github.io/portfolioWebPage/assets/CV_Game_Industry_2022_Es.pdf";

  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, spanish);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.experiences=experiencesEn;
        this.publications=publicationsEn;
        this.vgExperiences=vgExperiencesEn;
        this.cvLink="https://germiesqui.github.io/portfolioWebPage/assets/CV_GameDesign_2022_En.pdf";
      }
      else{
        this.experiences=experiencesEs;
        this.publications=publicationsEs;
        this.vgExperiences=vgExperiencesEs;
        this.cvLink="https://germiesqui.github.io/portfolioWebPage/assets/CV_GameDesign_2022_Es.pdf";
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
