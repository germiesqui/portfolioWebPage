import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../service/contact.service';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as spanish } from '../shared/i18n/es';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;
  constructor(private _translationLoaderService: TranslationLoaderService, private builder: FormBuilder,
    private contact: ContactService) {
    this._translationLoaderService.loadTranslations(english, spanish);
  
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      object: new FormControl(''),
      comment: new FormControl('', [Validators.required])
    });
  }

  onSubmit(FormData: FormData) {
    console.log(FormData)
    this.contact.postMessage(FormData).subscribe(
      response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      },
      error => {
        console.warn(error.responseText)
        console.log({ error })
      }
    );
  }
}
