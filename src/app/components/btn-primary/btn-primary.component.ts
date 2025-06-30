import { Component, EventEmitter, Input, Output } from '@angular/core';

type BtnVariant = "primary" | "secondary";

@Component({
  selector: 'btn-primary',
  imports: [],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input("btn-text") btnText: String = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariant = "primary";
  @Output("submit") onSubmit = new EventEmitter();


  public submit() {
    this.onSubmit.emit();
  }
}
