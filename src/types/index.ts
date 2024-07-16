

export interface User {
  id: string;
  email: string;
  role: string;
  wallets: string[];
  telegram: string;
  firstName: string;
  lastName: string;
}


export interface Project {
  pubkey: string;
  userId: string;
  brand: string;
  name: string;
  slug: string;
  shortBio: string;
  description: string;
  logoUrl: string;
  mainImageUrl: string;
  currency: string;
  totalRaise: string;
  projectFee: string;
  mint: string;
  price : number;
  earlyPoolProportion: string;
  openPoolProportion: string;
  earlyPoolFee: string;
  openPoolFee: string;
  earlyPoolStart: string;
  earlyPoolEnd: string;
  maxPurchaseForEarlyAccess: string;
  openPoolStart: string;
  openPoolEnd: string;
  maxPurchaseForKYC: string;
  maxPurchaseForNotKYC: string;
  tgeDate: string;
  tgePercentage: string;
  vestingCliff: string;
  vestingFrequency: string;
  numberOfVesting: string;
  facebook?: string;
  twitter?: string;
  discord?: string;
  instagram?: string;
  telegram?: string;
  website?: string;
  medium?: string;
  id?: string;
}