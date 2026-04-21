// 2026 commercial/retail rates (approximate). Zone = USPS zone 1-8.
// Use ZONE_MATRIX from states-cities.ts to determine zone between two regions.

export interface WeightRate {
  label: string;   // "1 oz", "1 lb"
  oz: number;      // weight in ounces
  zones: Record<number, number>; // zone -> USD price
}

export interface Carrier {
  id: string;
  name: string;
  speed: string;
  tracking: boolean;
  insuranceIncluded: string;
  maxWeightLb: number;
  description: string;
  color: string;
  rates: WeightRate[];
}

export const carriers: Carrier[] = [
  {
    id: 'usps-ground-advantage',
    name: 'USPS Ground Advantage',
    speed: '2–5 business days',
    tracking: true,
    insuranceIncluded: '$100',
    maxWeightLb: 70,
    description: 'Best value for packages under 1 lb. Replaced First Class Package and Parcel Select Ground in 2023.',
    color: '#004B87',
    rates: [
      { label: '1 oz',  oz: 1,   zones: { 1: 3.79, 2: 3.79, 3: 3.95, 4: 4.16, 5: 4.50, 6: 4.80, 7: 5.10, 8: 5.45 } },
      { label: '4 oz',  oz: 4,   zones: { 1: 4.29, 2: 4.29, 3: 4.55, 4: 4.85, 5: 5.30, 6: 5.75, 7: 6.20, 8: 6.75 } },
      { label: '8 oz',  oz: 8,   zones: { 1: 4.79, 2: 4.79, 3: 5.25, 4: 5.75, 5: 6.35, 6: 7.00, 7: 7.65, 8: 8.30 } },
      { label: '12 oz', oz: 12,  zones: { 1: 5.19, 2: 5.19, 3: 5.85, 4: 6.50, 5: 7.30, 6: 8.20, 7: 9.10, 8: 9.95 } },
      { label: '1 lb',  oz: 16,  zones: { 1: 5.49, 2: 5.49, 3: 6.35, 4: 7.10, 5: 8.10, 6: 9.20, 7: 10.35, 8: 11.50 } },
      { label: '2 lb',  oz: 32,  zones: { 1: 6.35, 2: 6.35, 3: 7.45, 4: 8.50, 5: 9.90, 6: 11.50, 7: 13.00, 8: 14.60 } },
      { label: '3 lb',  oz: 48,  zones: { 1: 7.20, 2: 7.20, 3: 8.55, 4: 9.90, 5: 11.70, 6: 13.80, 7: 15.65, 8: 17.70 } },
      { label: '5 lb',  oz: 80,  zones: { 1: 9.25, 2: 9.25, 3: 11.20, 4: 13.20, 5: 15.80, 6: 18.90, 7: 21.50, 8: 24.50 } },
      { label: '10 lb', oz: 160, zones: { 1: 14.50, 2: 14.50, 3: 18.50, 4: 22.50, 5: 27.50, 6: 33.50, 7: 38.50, 8: 44.00 } },
      { label: '20 lb', oz: 320, zones: { 1: 25.50, 2: 25.50, 3: 33.00, 4: 41.00, 5: 51.00, 6: 63.00, 7: 73.00, 8: 84.00 } },
    ],
  },
  {
    id: 'usps-priority-mail',
    name: 'USPS Priority Mail',
    speed: '1–3 business days',
    tracking: true,
    insuranceIncluded: '$100',
    maxWeightLb: 70,
    description: 'Priority delivery with flat rate box options. Includes $100 insurance and free pickup.',
    color: '#004B87',
    rates: [
      { label: '1 lb',  oz: 16,  zones: { 1: 8.50, 2: 8.50, 3: 9.10, 4: 9.55, 5: 10.40, 6: 11.20, 7: 12.15, 8: 13.25 } },
      { label: '2 lb',  oz: 32,  zones: { 1: 9.35, 2: 9.35, 3: 10.15, 4: 11.05, 5: 12.45, 6: 13.85, 7: 15.70, 8: 17.70 } },
      { label: '3 lb',  oz: 48,  zones: { 1: 10.20, 2: 10.20, 3: 11.20, 4: 12.55, 5: 14.50, 6: 16.50, 7: 19.25, 8: 22.15 } },
      { label: '5 lb',  oz: 80,  zones: { 1: 12.55, 2: 12.55, 3: 14.55, 4: 16.70, 5: 19.45, 6: 22.90, 7: 26.75, 8: 30.90 } },
      { label: '10 lb', oz: 160, zones: { 1: 19.30, 2: 19.30, 3: 21.65, 4: 25.55, 5: 31.00, 6: 37.60, 7: 44.55, 8: 52.35 } },
      { label: '20 lb', oz: 320, zones: { 1: 34.50, 2: 34.50, 3: 39.50, 4: 47.50, 5: 58.00, 6: 71.00, 7: 84.00, 8: 99.00 } },
      { label: '70 lb', oz: 1120, zones: { 1: 95.00, 2: 95.00, 3: 112.00, 4: 138.00, 5: 170.00, 6: 210.00, 7: 250.00, 8: 295.00 } },
    ],
  },
  {
    id: 'usps-priority-express',
    name: 'USPS Priority Mail Express',
    speed: '1–2 business days (guaranteed)',
    tracking: true,
    insuranceIncluded: '$100',
    maxWeightLb: 70,
    description: 'Fastest USPS service with overnight delivery guarantee. Available 365 days/year.',
    color: '#004B87',
    rates: [
      { label: '0.5 lb', oz: 8,  zones: { 1: 28.75, 2: 28.75, 3: 30.25, 4: 31.50, 5: 33.00, 6: 34.75, 7: 36.50, 8: 38.25 } },
      { label: '1 lb',  oz: 16,  zones: { 1: 28.75, 2: 28.75, 3: 30.25, 4: 31.50, 5: 33.00, 6: 34.75, 7: 36.50, 8: 38.25 } },
      { label: '2 lb',  oz: 32,  zones: { 1: 33.50, 2: 33.50, 3: 35.75, 4: 38.00, 5: 41.25, 6: 44.75, 7: 48.50, 8: 52.50 } },
      { label: '5 lb',  oz: 80,  zones: { 1: 44.50, 2: 44.50, 3: 48.50, 4: 53.50, 5: 60.25, 6: 67.50, 7: 75.25, 8: 83.75 } },
      { label: '10 lb', oz: 160, zones: { 1: 66.50, 2: 66.50, 3: 73.50, 4: 83.50, 5: 96.50, 6: 110.00, 7: 124.50, 8: 139.50 } },
      { label: '25 lb', oz: 400, zones: { 1: 117.00, 2: 117.00, 3: 133.00, 4: 156.00, 5: 184.00, 6: 214.00, 7: 246.00, 8: 280.00 } },
    ],
  },
  {
    id: 'ups-ground',
    name: 'UPS Ground',
    speed: '1–5 business days',
    tracking: true,
    insuranceIncluded: '$100',
    maxWeightLb: 150,
    description: 'Reliable ground service with comprehensive tracking. Ideal for packages 1–70 lbs.',
    color: '#351C15',
    rates: [
      { label: '1 lb',  oz: 16,  zones: { 2: 9.50, 3: 10.25, 4: 10.95, 5: 12.25, 6: 13.75, 7: 15.25, 8: 17.00 } },
      { label: '2 lb',  oz: 32,  zones: { 2: 10.75, 3: 11.75, 4: 12.75, 5: 14.50, 6: 16.50, 7: 18.50, 8: 20.75 } },
      { label: '3 lb',  oz: 48,  zones: { 2: 11.50, 3: 12.75, 4: 13.95, 5: 16.00, 6: 18.50, 7: 21.00, 8: 23.75 } },
      { label: '5 lb',  oz: 80,  zones: { 2: 12.50, 3: 13.80, 4: 15.25, 5: 17.50, 6: 20.25, 7: 23.50, 8: 27.00 } },
      { label: '10 lb', oz: 160, zones: { 2: 16.50, 3: 18.50, 4: 20.50, 5: 24.50, 6: 29.00, 7: 34.50, 8: 40.50 } },
      { label: '20 lb', oz: 320, zones: { 2: 22.50, 3: 25.50, 4: 28.50, 5: 34.50, 6: 41.50, 7: 50.00, 8: 59.00 } },
      { label: '50 lb', oz: 800, zones: { 2: 47.00, 3: 54.00, 4: 61.00, 5: 75.00, 6: 91.00, 7: 109.00, 8: 129.00 } },
    ],
  },
  {
    id: 'ups-2nd-day',
    name: 'UPS 2nd Day Air',
    speed: '2 business days',
    tracking: true,
    insuranceIncluded: '$100',
    maxWeightLb: 150,
    description: 'Guaranteed 2-day delivery by end of business day. No zone restrictions.',
    color: '#351C15',
    rates: [
      { label: '1 lb',  oz: 16,  zones: { 2: 19.50, 3: 20.75, 4: 22.00, 5: 23.50, 6: 25.00, 7: 26.75, 8: 28.50 } },
      { label: '2 lb',  oz: 32,  zones: { 2: 22.50, 3: 24.25, 4: 26.00, 5: 28.00, 6: 30.25, 7: 32.75, 8: 35.25 } },
      { label: '5 lb',  oz: 80,  zones: { 2: 30.50, 3: 33.50, 4: 36.50, 5: 40.25, 6: 44.25, 7: 48.50, 8: 53.25 } },
      { label: '10 lb', oz: 160, zones: { 2: 44.50, 3: 49.50, 4: 54.75, 5: 61.50, 6: 68.50, 7: 76.00, 8: 84.50 } },
      { label: '20 lb', oz: 320, zones: { 2: 72.00, 3: 81.00, 4: 91.00, 5: 103.00, 6: 116.00, 7: 130.00, 8: 145.00 } },
    ],
  },
  {
    id: 'ups-next-day',
    name: 'UPS Next Day Air',
    speed: 'Next business day',
    tracking: true,
    insuranceIncluded: '$100',
    maxWeightLb: 150,
    description: 'Guaranteed overnight delivery by 10:30 AM, noon, or end of day depending on service level.',
    color: '#351C15',
    rates: [
      { label: '1 lb',  oz: 16,  zones: { 2: 35.50, 3: 36.75, 4: 38.25, 5: 40.25, 6: 42.25, 7: 44.50, 8: 47.00 } },
      { label: '2 lb',  oz: 32,  zones: { 2: 39.50, 3: 41.50, 4: 43.75, 5: 46.25, 6: 49.00, 7: 52.00, 8: 55.25 } },
      { label: '5 lb',  oz: 80,  zones: { 2: 52.50, 3: 56.00, 4: 60.00, 5: 64.75, 6: 69.75, 7: 75.25, 8: 81.25 } },
      { label: '10 lb', oz: 160, zones: { 2: 78.50, 3: 85.00, 4: 92.50, 5: 101.50, 6: 111.00, 7: 121.50, 8: 133.50 } },
      { label: '20 lb', oz: 320, zones: { 2: 130.00, 3: 143.00, 4: 158.00, 5: 175.00, 6: 194.00, 7: 214.00, 8: 236.00 } },
    ],
  },
  {
    id: 'fedex-ground',
    name: 'FedEx Ground',
    speed: '1–5 business days',
    tracking: true,
    insuranceIncluded: '$100',
    maxWeightLb: 150,
    description: 'Cost-effective ground shipping with door-to-door tracking. Excellent for regular shipments.',
    color: '#4D148C',
    rates: [
      { label: '1 lb',  oz: 16,  zones: { 2: 9.65, 3: 10.40, 4: 11.10, 5: 12.45, 6: 13.95, 7: 15.45, 8: 17.25 } },
      { label: '2 lb',  oz: 32,  zones: { 2: 10.90, 3: 11.90, 4: 12.95, 5: 14.70, 6: 16.70, 7: 18.75, 8: 21.00 } },
      { label: '3 lb',  oz: 48,  zones: { 2: 11.65, 3: 12.95, 4: 14.15, 5: 16.25, 6: 18.75, 7: 21.25, 8: 24.00 } },
      { label: '5 lb',  oz: 80,  zones: { 2: 12.75, 3: 14.05, 4: 15.50, 5: 17.80, 6: 20.55, 7: 23.80, 8: 27.50 } },
      { label: '10 lb', oz: 160, zones: { 2: 17.00, 3: 19.00, 4: 21.00, 5: 25.00, 6: 29.50, 7: 35.00, 8: 41.00 } },
      { label: '20 lb', oz: 320, zones: { 2: 23.00, 3: 26.00, 4: 29.00, 5: 35.00, 6: 42.00, 7: 51.00, 8: 60.00 } },
      { label: '50 lb', oz: 800, zones: { 2: 48.00, 3: 55.00, 4: 62.00, 5: 76.00, 6: 93.00, 7: 111.00, 8: 131.00 } },
    ],
  },
  {
    id: 'fedex-2day',
    name: 'FedEx 2Day',
    speed: '2 business days',
    tracking: true,
    insuranceIncluded: '$100',
    maxWeightLb: 150,
    description: 'Guaranteed 2-business-day delivery by 4:30 PM to most areas.',
    color: '#4D148C',
    rates: [
      { label: '1 lb',  oz: 16,  zones: { 2: 20.25, 3: 21.50, 4: 22.75, 5: 24.25, 6: 25.75, 7: 27.50, 8: 29.25 } },
      { label: '2 lb',  oz: 32,  zones: { 2: 23.25, 3: 24.90, 4: 26.75, 5: 28.75, 6: 31.00, 7: 33.50, 8: 36.00 } },
      { label: '5 lb',  oz: 80,  zones: { 2: 31.25, 3: 34.25, 4: 37.25, 5: 41.00, 6: 45.00, 7: 49.25, 8: 54.00 } },
      { label: '10 lb', oz: 160, zones: { 2: 45.50, 3: 50.50, 4: 55.75, 5: 62.50, 6: 69.50, 7: 77.00, 8: 85.50 } },
      { label: '20 lb', oz: 320, zones: { 2: 73.50, 3: 82.50, 4: 92.50, 5: 104.50, 6: 117.50, 7: 131.50, 8: 146.50 } },
    ],
  },
  {
    id: 'fedex-overnight',
    name: 'FedEx Priority Overnight',
    speed: 'Next business morning',
    tracking: true,
    insuranceIncluded: '$100',
    maxWeightLb: 150,
    description: 'Next-business-morning delivery by 10:30 AM to most US addresses.',
    color: '#4D148C',
    rates: [
      { label: '1 lb',  oz: 16,  zones: { 2: 36.75, 3: 38.00, 4: 39.50, 5: 41.50, 6: 43.50, 7: 45.75, 8: 48.25 } },
      { label: '2 lb',  oz: 32,  zones: { 2: 40.75, 3: 42.75, 4: 45.00, 5: 47.50, 6: 50.25, 7: 53.25, 8: 56.50 } },
      { label: '5 lb',  oz: 80,  zones: { 2: 54.00, 3: 57.50, 4: 61.50, 5: 66.25, 6: 71.25, 7: 76.75, 8: 82.75 } },
      { label: '10 lb', oz: 160, zones: { 2: 80.50, 3: 87.00, 4: 94.50, 5: 103.50, 6: 113.00, 7: 123.50, 8: 135.50 } },
      { label: '20 lb', oz: 320, zones: { 2: 132.50, 3: 145.50, 4: 160.50, 5: 177.50, 6: 196.50, 7: 216.50, 8: 238.50 } },
    ],
  },
  {
    id: 'dhl-ecommerce',
    name: 'DHL eCommerce',
    speed: '2–8 business days',
    tracking: true,
    insuranceIncluded: 'None (add-on)',
    maxWeightLb: 70,
    description: 'Cost-effective for lightweight eCommerce parcels. Last-mile via USPS. No surcharges on residential delivery.',
    color: '#FFCC00',
    rates: [
      { label: '1 oz',  oz: 1,   zones: { 1: 2.95, 2: 2.95, 3: 3.15, 4: 3.40, 5: 3.70, 6: 4.05, 7: 4.45, 8: 4.90 } },
      { label: '4 oz',  oz: 4,   zones: { 1: 3.55, 2: 3.55, 3: 3.85, 4: 4.20, 5: 4.65, 6: 5.15, 7: 5.70, 8: 6.30 } },
      { label: '8 oz',  oz: 8,   zones: { 1: 4.15, 2: 4.15, 3: 4.60, 4: 5.10, 5: 5.75, 6: 6.45, 7: 7.25, 8: 8.10 } },
      { label: '1 lb',  oz: 16,  zones: { 1: 4.80, 2: 4.80, 3: 5.45, 4: 6.10, 5: 6.95, 6: 7.90, 7: 8.95, 8: 10.10 } },
      { label: '2 lb',  oz: 32,  zones: { 1: 5.95, 2: 5.95, 3: 6.85, 4: 7.75, 5: 8.90, 6: 10.20, 7: 11.65, 8: 13.30 } },
      { label: '5 lb',  oz: 80,  zones: { 1: 8.50, 2: 8.50, 3: 9.95, 4: 11.40, 5: 13.25, 6: 15.40, 7: 17.80, 8: 20.60 } },
      { label: '10 lb', oz: 160, zones: { 1: 13.50, 2: 13.50, 3: 16.00, 4: 18.50, 5: 21.75, 6: 25.50, 7: 29.75, 8: 34.50 } },
    ],
  },
];

export function getCarrierById(id: string): Carrier | undefined {
  return carriers.find(c => c.id === id);
}

export function getRateForZone(carrier: Carrier, weightOz: number, zone: number): number | null {
  const z = Math.min(Math.max(zone, 1), 8);
  // Find best matching rate bracket (round up)
  const sorted = [...carrier.rates].sort((a, b) => a.oz - b.oz);
  const bracket = sorted.find(r => r.oz >= weightOz) || sorted[sorted.length - 1];
  return bracket.zones[z] ?? null;
}

// Returns all carriers with their rate for a given weight+zone, sorted cheapest first
export function compareRates(weightOz: number, zone: number): Array<{carrier: Carrier; rate: number | null}> {
  return carriers
    .map(c => ({ carrier: c, rate: getRateForZone(c, weightOz, zone) }))
    .sort((a, b) => (a.rate ?? 999) - (b.rate ?? 999));
}
