import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

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
    name: "",
    email: "",
    message: "",
    checkbox: false
  };

  mailTest = false;

  isClicked = false;
  isBlurred = false;
  isClickedSecondInput = false;
  isBlurredSecondInput = false;
  isClickedTextarea = false;
  isBlurredTextarea = false;

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

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    // IMPORTANT: KEIN setDefaultLang / use hier!

    // optional: nur UI sync (falls du class bindings brauchst)
    this.translate.onLangChange.subscribe(() => {});
  }

  showEmailPopup() {
    const emailPopup = document.querySelector('.e-mail-popup');
    if (emailPopup) {
      emailPopup.classList.remove('hidden');

      setTimeout(() => {
        emailPopup.classList.add('hidden');
      }, 4000);
    }
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: () => {
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

            this.showEmailPopup();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }

    if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
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

  agb(event: Event) {
    event.preventDefault();
    this.router.navigateByUrl('/agb');
  }
}