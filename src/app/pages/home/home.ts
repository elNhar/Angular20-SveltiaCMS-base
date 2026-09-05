import { afterNextRender, ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { SPECIALTIES } from '../../shared/specialties.data';
import content from '../../../content/home.json';

// Jotform Instagram-feed embed. The embed URL is a one-shot <script> that finds
// the container div and populates it; it never re-runs on its own.
const INSTAGRAM_WIDGET_ID = 'JFWebsiteWidget-01a072df0e8070008608eb2de04991f19675';
const INSTAGRAM_EMBED_SRC = 'https://www.jotform.com/website-widgets/embed/01a072df0e8070008608eb2de04991f19675';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  // Edited from the Sveltia CMS admin at /admin — see src/content/home.json.
  protected readonly hero = content.hero;
  protected readonly specialtiesSection = content.specialtiesSection;
  protected readonly isapresSection = content.isapresSection;
  protected readonly instagramSection = content.instagramSection;

  protected readonly specialties = SPECIALTIES;

  constructor() {
    // On SPA navigation the widget div is destroyed and recreated empty, so the
    // one-shot embed script has to be re-triggered every time this component mounts.
    afterNextRender(() => this.loadInstagramWidget());
  }

  private loadInstagramWidget(): void {
    if (!document.getElementById(INSTAGRAM_WIDGET_ID)) {
      return;
    }
    document.getElementById('jf-instagram-embed')?.remove();
    const script = document.createElement('script');
    script.id = 'jf-instagram-embed';
    script.src = INSTAGRAM_EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);
  }
}
