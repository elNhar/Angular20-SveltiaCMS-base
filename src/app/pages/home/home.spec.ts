import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Home);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render a card for every specialty', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const cards = fixture.nativeElement.querySelectorAll('.specialty-card');
    expect(cards.length).toBe(app['specialties'].length);
  });

  it('should render the hero title', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('Nueve especialidades');
  });
});
