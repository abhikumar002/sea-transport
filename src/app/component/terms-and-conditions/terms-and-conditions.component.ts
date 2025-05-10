import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent {
  email = 'sales@shuhulshipping.in';
  phone = '+91 73474-77828';
  emailUrl: SafeUrl;
  phoneUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.emailUrl = this.sanitizer.bypassSecurityTrustUrl(`mailto:${this.email}`);
    this.phoneUrl = this.sanitizer.bypassSecurityTrustUrl(`tel:${this.phone.replace(/\s/g, '')}`);
  }
}
