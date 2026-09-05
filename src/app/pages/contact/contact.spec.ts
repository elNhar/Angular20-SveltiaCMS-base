import { TestBed } from '@angular/core/testing';
import { Contact } from './contact';

describe('Contact', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Contact);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render a card for every contact detail', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const cards = fixture.nativeElement.querySelectorAll('.detail-card');
    expect(cards.length).toBe(app['details'].length);
  });

  it('should show a confirmation message after submitting the form', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.booking-form__confirmation')).toBeFalsy();

    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.booking-form__confirmation')).toBeTruthy();
  });
});
