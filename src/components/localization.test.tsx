import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';
import { MethodologyPanel } from './MethodologyPanel';

describe('TR/EN localization', () => {
  it('renders the requested Turkish footer credit', () => {
    const html = renderToStaticMarkup(<AppFooter technologyCount={59} locale="tr" />);
    expect(html).toContain('Ceky tarafından yapıldı · 2026');
    expect(html).not.toContain('2024–2026');
  });

  it('renders the English header and methodology', () => {
    const header = renderToStaticMarkup(
      <AppHeader technologyCount={59} locale="en" onLocaleChange={() => undefined} />,
    );
    const methodology = renderToStaticMarkup(<MethodologyPanel locale="en" />);

    expect(header).toContain('Language Radar');
    expect(header).toContain('Technology Analysis');
    expect(methodology).toContain('Fixed scoring rubric and source methodology');
    expect(methodology).toContain('Performance');
  });
});

