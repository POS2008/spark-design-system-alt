import * as React from 'react';
import DesignSystem from '@/pages/DesignSystem';
import { CollectionHomepage, HouseFrankfurt } from '@/website/WebsiteCollection';

/**
 * Three routes, no router dependency:
 *   #/            the DesignSystem page
 *   #/collection  index.html — SPARK · The Collection
 *   #/frankfurt   frankfurt.html — the house page
 */
export default function App() {
  const [hash, setHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (hash.startsWith('#/collection')) return <CollectionHomepage />;
  if (hash.startsWith('#/frankfurt')) return <HouseFrankfurt />;
  return <DesignSystem />;
}
