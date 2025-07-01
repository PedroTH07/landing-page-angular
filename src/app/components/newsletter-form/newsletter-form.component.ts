import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'newsletter-form',
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  public newsletterForms: FormGroup;
  public loading = signal(false);

  constructor(private service: NewsletterService) {
    this.newsletterForms = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  onSubmit() {
    this.loading.set(true);

    if (this.newsletterForms.valid) {
      this.service.sendData(
        this.newsletterForms.value.name, this.newsletterForms.value.email
      ).subscribe({
        next: (data) => {
          console.log(data);
          this.newsletterForms.reset();
          this.loading.set(false);
        }
      })
    }
  }
}
