import { Component, ViewChild, ElementRef, output } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  add = output<{ title: string; text: string }>();

  // ngOnInit() {
  //   console.log('NewTicketComponent initialized');
  //   console.log('Form Element:', this.form?.nativeElement);
  // }

  // ngAfterViewInit() {
  //   console.log('NewTicketComponent view initialized');
  //   console.log('Form Element:', this.form?.nativeElement);
  // }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title, text: ticketText });
    this.form?.nativeElement.reset();
  }
}
