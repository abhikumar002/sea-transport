import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showQuoteForm = false; 
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    // Initialize the carousel
    setTimeout(() => {
      const carouselElement = document.getElementById('homeCarousel');
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 5000,
          wrap: true
        });
      }
    }, 100);
  }

  toggleQuoteForm() {
    this.showQuoteForm = !this.showQuoteForm;
  }

  submitQuote(form: NgForm) {
    if (form.valid) {
      const formData = new FormData();
      formData.append("name", form.value.name);
      formData.append("email", form.value.email);
      formData.append("phone", form.value.phone);
      formData.append("message", form.value.message);

      this.http.post('https://shuhulshipping.in/sendMail.php', formData, { responseType: 'text' })
        .subscribe({
          next: (response) => {
            if (response === 'success') {
              alert("Quote request sent successfully! We'll get back to you soon.");
              form.reset();
              this.showQuoteForm = false;
            } else {
              alert("Error sending quote request. Please try again.");
            }
          },
          error: (error) => {
            console.error('Error:', error);
            alert("Error sending quote request. Please try again later.");
          }
        });
    }
  }
}
