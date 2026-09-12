# Private font setup

The public repository intentionally excludes the commercially licensed GT Super Display and Söhne font binaries.

Before releasing the Lovable design system, add the licensed files privately to the design-system project under `public/fonts/` using these exact filenames:

- `GT-Super-Display-Bold.woff2`
- `GT-Super-Display-Bold.woff`
- `GT-Super-Display-Bold.ttf`
- `S_hne-Buch.otf`
- `S_hne-Kr_ftig.otf`

`src/styles/typography.css` already references these paths. Do not commit the font files to a public repository and do not substitute other typefaces.

