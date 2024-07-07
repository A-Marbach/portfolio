import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  http = inject(HttpClient);

  contactData = {
    name: "" ,
    email: "",
    message: "",
    checkbox: false
  }

  mailTest = false;

  isClicked: boolean = false; // Deklaration der isClicked-Variable
  isBlurred: boolean = false; // Deklaration der isBlurred-Variable
  isClickedSecondInput: boolean = false;
  isBlurredSecondInput: boolean = false;
  isClickedTextarea: boolean = false;
  isBlurredTextarea: boolean = false;

  post = {
    endPoint: 'https://portfolio.artur-marbach.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.contactData = {
              name: '',
              email: '',
              message: '',
              checkbox: false
            };
            this.isClicked = false;
            this.isBlurred = false;
            this.isClickedSecondInput = false;
            this.isBlurredSecondInput = false;
            this.isClickedTextarea = false;
            this.isBlurredTextarea = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.contactData.email = '';
      ngForm.resetForm();
    }
  }

  onInputChange() {
    this.isClicked = true;
  }

  setInputBlurred() {
    this.isBlurred = true;
  }

  onInputChanges() {
    this.isClickedSecondInput = true;
  }

  setInputBlurredSecondInput() {
    this.isBlurredSecondInput = true;
  }

  onTextareaInputChange() {
    this.isClickedTextarea = true;
  }

  setInputBlurredTextarea() {
    this.isBlurredTextarea = true;
  }

  isGerman: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.onLangChange.subscribe((event) => {
      this.isGerman = event.lang === 'de';
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}

