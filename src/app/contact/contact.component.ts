import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent  {

  http = inject(HttpClient);

 

  

  contactData = {
    name: "" ,
    email: "",
    message: "",
    checkbox: false
  }

  
  mailTest = false;

  inputValue: string = ''; // inputValue deklarieren
  input2Value: string = '';
  textareaValue: string = '';

  isClicked: boolean = false; // Deklaration der isClicked-Variable
  isClickedSecondInput: boolean = false;
  isClickedTextarea: boolean = false;



  
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
       // Reset form values and flags
       this.contactData = {
        name: '',
        email: '',
        message: '',
        checkbox: false
      };

      // Reset clicked states
      this.isClicked = false;
      this.isClickedSecondInput = false;
      this.isClickedTextarea = false;

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
 
 
    // Methode, um die inputValue zu aktualisieren und isClicked zu setzen
    onInputChange() {
      this.inputValue = this.contactData.name.trim();
    }
  
    setInputClicked() {
      this.isClicked = true;
    }
  
    onInputChanges() {
      this.input2Value = this.contactData.email.trim();
    }
  
    setInputClickeds() {
      this.isClickedSecondInput = true;
    }
  
    setInputClickedss() {
      this.isClickedTextarea = true;
    }
  
    onTextareaInputChange() {
      this.textareaValue = this.contactData.message;
    }
  
  }







// ngOnInit(): void {
 
//     this.addInputEventListener();
// }
// addInputEventListener() {
//   const inputField = document.getElementById('name') as HTMLInputElement;

//   if (inputField) {
//     inputField.addEventListener('input', () => {
//       this.checkInputLength();
//     });
//   }
// }


//   checkInputLength() {
//     const inputField = document.getElementById('name') as HTMLInputElement;
//     const errorImg = document.getElementById('error');
//     const successImg = document.getElementById('success');

//     if (inputField && errorImg && successImg) {
//       const inputValue = inputField.value.trim();

//       if (inputValue.length < 2) {
//         errorImg.classList.add('error');
//         inputField.classList.remove('success');
//         inputField.style.borderColor = 'red';
//       } else {
//         errorImg.classList.remove('error');
//         successImg.classList.add('error');
//         inputField.classList.remove('error');
//         inputField.style.borderColor = 'green';
//       }

//       // Manuelle Ausführung des Change Detection
//       this.cdr.detectChanges();
//     }
//   }
// }
  
//  checkInputLength() {
//   let inputField = document.getElementById('name') as HTMLInputElement;
//   let errorImg = document.getElementById('error')as HTMLInputElement;
//   let successImg = document.getElementById('success')as HTMLInputElement;


//   // Überprüfe, ob das Inputfeld existiert
//   if (inputField) {
//     let inputValue = inputField.value.trim(); // Den Wert des Inputfelds ohne Leerzeichen am Anfang und Ende erhalten

//     // Überprüfe die Länge des Eingabewerts
//     if (inputValue.length < 2) {
//       errorImg.classList.add('error');
//       inputField.classList.remove('success'); // Entferne die Klasse 'success'
      
//       inputField.style.borderColor = 'red'; // Ändere den Border auf Rot
//     } else {
//       errorImg.classList.remove('error');
//       successImg.classList.add('error');

//       inputField.classList.remove('error'); // Entferne die Klasse 'error'
    
//       inputField.style.borderColor = 'green'; // Ändere den Border auf Grün
      
//     }
//   }
// }








 



