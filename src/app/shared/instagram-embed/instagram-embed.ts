import { ChangeDetectionStrategy, Component, afterNextRender, input } from '@angular/core';

declare global {
  interface Window {
    instgrm?: { Embeds: { process(): void } };
  }
}

let scriptPromise: Promise<void> | null = null;

/** Loads Instagram's official embed.js once and reuses it for every embed on the page. */
function loadInstagramEmbedScript(): Promise<void> {
  if (window.instgrm) {
    return Promise.resolve();
  }

  scriptPromise ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load the Instagram embed script.'));
    document.body.appendChild(script);
  });

  return scriptPromise;
}

@Component({
  selector: 'app-instagram-embed',
  imports: [],
  templateUrl: './instagram-embed.html',
  styleUrl: './instagram-embed.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstagramEmbed {
  readonly postUrl = input.required<string>();

  constructor() {
    // Runs client-side only: @defer never instantiates this component during SSR.
    afterNextRender(() => {
      loadInstagramEmbedScript()
        .then(() => window.instgrm?.Embeds.process())
        .catch(() => {
          // embed.js failed to load (offline, blocked, etc). The blockquote's own
          // fallback link keeps working, so there's nothing else to do here.
        });
    });
  }
}
