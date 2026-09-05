import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';

describe('Header', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Header);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the five primary nav links', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
    const links = fixture.nativeElement.querySelectorAll('.nav__links a');
    expect(links.length).toBe(5);
  });

  it('should render the brand name', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Vitalia');
  });
});
