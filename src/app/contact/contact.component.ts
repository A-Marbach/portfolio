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
  }
  mailTest = false;
  isClicked: boolean = false;
  isBlurred: boolean = false;
  isClickedSecondInput: boolean = false;
  isBlurredSecondInput: boolean = false;
  isClickedTextarea: boolean = false;
  isBlurredTextarea: boolean = false;

  post = {
    endPoint: 'https://artur-marbach.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  showEmailPopup() {
    const emailPopup = document.querySelector('.e-mail-popup');
    if (emailPopup) {
      emailPopup.classList.remove('hidden');
      // Füge nach 3 Sekunden die Klasse 'hidden' hinzu
      setTimeout(() => {
        emailPopup.classList.add('hidden');
      }, 4000);
    }
  }

  onSubmit(ngForm: NgForm) {
  if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
    // HTTP POST korrekt mit JSON senden
    this.http.post(this.post.endPoint, this.contactData, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json' as const
    }).subscribe({
      next: (response) => {
        // Formular zurücksetzen
        ngForm.resetForm();
        this.contactData = {
          name: '',
          email: '',
          message: '',
          checkbox: false
        };

        // Input-Style Variablen zurücksetzen
        this.isClicked = false;
        this.isBlurred = false;
        this.isClickedSecondInput = false;
        this.isBlurredSecondInput = false;
        this.isClickedTextarea = false;
        this.isBlurredTextarea = false;

        // Popup anzeigen
        this.showEmailPopup();
      },
      error: (error) => {
        console.error(error);
        alert('Fehler beim Senden. Bitte versuche es später erneut.');
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
  currentLanguage: string = 'en'; // Standardmäßig Englisch ausgewählt

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.onLangChange.subscribe((event) => {
      this.isGerman = event.lang === 'de';
    });
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

  agb(event: Event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    this.router.navigateByUrl('/agb');
    
  }
}

