import { Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as spanish } from '../shared/i18n/es';
import { projectsEn} from '../api/projectsEn';
import { projectsEs} from '../api/projectsEs';
import {AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, ViewChild} from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  projects:any[]=projectsEs;
  venobox: any;

  @ViewChild('myYouTubePlayer') myYouTubePlayer: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService, private _changeDetectorRef: ChangeDetectorRef) {
    this._translationLoaderService.loadTranslations(english, spanish);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.projects=projectsEn;
      }
      else{
        this.projects=projectsEs;
      }
    });
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    console.log("after view init");
    this.onMouse("spiritCave-link", "spiritCave-img", "spiritCave");
    this.onMouse("tsarsSecrets-link", "TsarsSecrets-img", "tsarsSecrets");
    this.venobox = $('.venobox');
    this.venobox.venobox();

    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  detailOnClick(event:any, project: any) {
    this.projects.filter(item=>item.detailIsDisplayed && item.id!=project.id).map(elem=>elem.detailIsDisplayed=false);
    project.detailIsDisplayed=!project.detailIsDisplayed;
    event.currentTarget.blur();
  }

  onMouse(idLink: String, idImage: String, id: String) {

      $('#' + idLink).on("mouseenter", function () {
        $('#' + idImage).css("opacity", "0.3");
        $('#' + idLink).css("opacity", "1");
      }).on('mouseleave', function () {
        $('#' + idImage).css("opacity", "1");
        $('#' + idLink).css("opacity", "0");
      }
      );
  
      $('#' + idImage).on("mouseenter", function () {
        $('#' + idImage).css("opacity", "0.3");
        $('#' + idLink).css("opacity", "1");
      }).on('mouseleave', function () {
        $('#' + idImage).css("opacity", "1");
        $('#' + idLink).css("opacity", "0");
      }
      );
    
  }

  @HostListener('window:resize', ['$event']) onResize() {
    this.videoWidth = Math.min(this.myYouTubePlayer.nativeElement.clientWidth, 1200);
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
 }
  
    ngOnDestroy(): void {
      window.removeEventListener('resize', this.onResize);
    }
}