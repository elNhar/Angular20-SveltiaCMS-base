import { TestBed } from '@angular/core/testing';
import { About } from './about';

describe('About', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(About);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render a timeline entry for every milestone', () => {
    const fixture = TestBed.createComponent(About);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const items = fixture.nativeElement.querySelectorAll('.timeline__item');
    expect(items.length).toBe(app['milestones'].length);
  });

  it('should render a card for every team member', () => {
    const fixture = TestBed.createComponent(About);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const cards = fixture.nativeElement.querySelectorAll('.team-card');
    expect(cards.length).toBe(app['team'].length);
  });
});
