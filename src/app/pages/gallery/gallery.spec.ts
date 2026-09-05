import { TestBed } from '@angular/core/testing';
import { Gallery } from './gallery';

describe('Gallery', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gallery]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Gallery);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should filter photos by category', () => {
    const fixture = TestBed.createComponent(Gallery);
    fixture.detectChanges();
    const chips = Array.from(fixture.nativeElement.querySelectorAll('.filter-chip')) as HTMLButtonElement[];
    const boxesChip = chips.find((c) => c.textContent?.trim() === 'Boxes')!;
    boxesChip.click();
    fixture.detectChanges();
    const tiles = fixture.nativeElement.querySelectorAll('.photo-tile');
    expect(tiles.length).toBeGreaterThan(0);
    tiles.forEach((tile: HTMLElement) => {
      expect(tile.querySelector('.photo-tile__caption')?.textContent).toContain('Box');
    });
  });

  it('should open and close the lightbox', () => {
    const fixture = TestBed.createComponent(Gallery);
    fixture.detectChanges();
    const firstPhoto = fixture.nativeElement.querySelector('.photo-tile') as HTMLButtonElement;
    firstPhoto.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.lightbox')).toBeTruthy();

    (fixture.nativeElement.querySelector('.lightbox') as HTMLElement).click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.lightbox')).toBeFalsy();
  });
});
