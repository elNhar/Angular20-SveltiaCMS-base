import { TestBed } from '@angular/core/testing';
import { InstagramEmbed } from './instagram-embed';

describe('InstagramEmbed', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramEmbed]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(InstagramEmbed);
    fixture.componentRef.setInput('postUrl', 'https://www.instagram.com/p/example/');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the blockquote with the given permalink', () => {
    const fixture = TestBed.createComponent(InstagramEmbed);
    const url = 'https://www.instagram.com/p/example/';
    fixture.componentRef.setInput('postUrl', url);
    fixture.detectChanges();
    const blockquote = fixture.nativeElement.querySelector('blockquote.instagram-media');
    expect(blockquote?.getAttribute('data-instgrm-permalink')).toBe(url);
  });
});
