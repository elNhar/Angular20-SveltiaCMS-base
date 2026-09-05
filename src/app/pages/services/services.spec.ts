import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Services } from './services';

describe('Services', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Services],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Services);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should open the first specialty by default and the rest closed', () => {
    const fixture = TestBed.createComponent(Services);
    fixture.detectChanges();
    const panels = fixture.nativeElement.querySelectorAll('.accordion-item__panel');
    expect(panels.length).toBe(1);
  });

  it('should toggle a specialty open and closed on click', () => {
    const fixture = TestBed.createComponent(Services);
    fixture.detectChanges();
    const secondTrigger = fixture.nativeElement.querySelectorAll('.accordion-item__trigger')[1] as HTMLButtonElement;
    secondTrigger.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.accordion-item__panel').length).toBe(2);
    secondTrigger.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.accordion-item__panel').length).toBe(1);
  });

  it('should open and close every specialty with the toggle-all button', () => {
    const fixture = TestBed.createComponent(Services);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const toggleAll = fixture.nativeElement.querySelector('.toggle-all') as HTMLButtonElement;

    toggleAll.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.accordion-item__panel').length).toBe(app['specialties'].length);

    toggleAll.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.accordion-item__panel').length).toBe(0);
  });
});
