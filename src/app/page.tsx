import { Hero } from '@/components/sections/Hero';
import { MarketShift } from '@/components/sections/MarketShift';
import { PearlFramework } from '@/components/sections/PearlFramework';
import { Services } from '@/components/sections/Services';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { WhyHeyPearl } from '@/components/sections/WhyHeyPearl';
import { Showcase } from '@/components/sections/Showcase';
import { Founder } from '@/components/sections/Founder';
import { PricingPreview } from '@/components/sections/PricingPreview';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  organizationSchema,
  webSiteSchema,
  localBusinessSchema,
} from '@/lib/seo/schema';

export default function HomePage() {
  return (
    <>
      <JsonLd schema={[organizationSchema(), webSiteSchema(), localBusinessSchema()]} />
      <Hero />
      <MarketShift />
      <PearlFramework />
      <Services />
      <HowItWorks />
      <WhyHeyPearl />
      <Showcase />
      <Founder />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
