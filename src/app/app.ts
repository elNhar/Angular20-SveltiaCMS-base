import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { WhatsappFab } from './layout/whatsapp-fab/whatsapp-fab';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, WhatsappFab],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {}
