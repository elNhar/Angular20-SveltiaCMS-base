import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Footer } from './footer';

describe('Footer', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Footer);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the address and site links', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Av. Providencia 1234');
    expect(fixture.nativeElement.querySelectorAll('.footer__col a').length).toBe(5);
  });
});
