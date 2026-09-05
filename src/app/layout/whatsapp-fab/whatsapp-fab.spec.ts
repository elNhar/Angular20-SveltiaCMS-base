import { TestBed } from '@angular/core/testing';
import { WhatsappFab } from './whatsapp-fab';

describe('WhatsappFab', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappFab]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WhatsappFab);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should link to a wa.me URL', () => {
    const fixture = TestBed.createComponent(WhatsappFab);
    fixture.detectChanges();
    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(link.href).toContain('wa.me');
  });
});
