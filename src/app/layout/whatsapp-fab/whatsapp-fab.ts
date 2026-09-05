import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-fab',
  imports: [],
  templateUrl: './whatsapp-fab.html',
  styleUrl: './whatsapp-fab.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsappFab {
  protected readonly href =
    'https://wa.me/56987654321?text=Hola%2C%20quiero%20agendar%20una%20hora%20en%20Centro%20M%C3%A9dico%20Vitalia';
}
