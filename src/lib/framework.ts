export type PearlPillar = {
  letter: 'P' | 'E' | 'A' | 'R' | 'L';
  word: string;
  tagline: string;
  description: string;
};

export const pearlAcronym = 'Process · Efficiency · Automation · Revenue · Leverage';

export const pearlSummary =
  'P.E.A.R.L. is the operating philosophy beneath HeyPearl. Five principles that turn modern businesses into systems that compound.';

export const pearlPillars: PearlPillar[] = [
  {
    letter: 'P',
    word: 'Process',
    tagline: 'Map the motion.',
    description:
      'Every business is already running a set of processes, named or not. We make them visible, intentional, and ready to scale.',
  },
  {
    letter: 'E',
    word: 'Efficiency',
    tagline: 'Remove the friction.',
    description:
      'We strip the drag out of the systems that matter most, so capacity stops being the ceiling on growth.',
  },
  {
    letter: 'A',
    word: 'Automation',
    tagline: 'Let the software work.',
    description:
      'PearlOS handles the predictable. People handle the meaningful. The result is leverage that does not burn out a team.',
  },
  {
    letter: 'R',
    word: 'Revenue',
    tagline: 'Convert with intention.',
    description:
      'Visibility without conversion is leakage. Every layer is wired into a revenue path you can measure.',
  },
  {
    letter: 'L',
    word: 'Leverage',
    tagline: 'Compound, quarter over quarter.',
    description:
      'The infrastructure is the unlock. Every month adds to a system that earns more authority and revenue than the last.',
  },
];
