import type { Config } from 'tailwindcss';
import sparkPreset from './src/tailwind-preset';

/** Standalone preview config. Connected Lovable projects consume the same
 * theme from `src/tailwind-preset.ts` so the token mapping travels with the
 * copied design-system source. */
const config: Config = {
  presets: [sparkPreset],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
};

export default config;
