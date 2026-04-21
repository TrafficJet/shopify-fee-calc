export interface City {
  name: string;
  slug: string;
  zip: string;
  region: 'northeast' | 'southeast' | 'midwest' | 'southwest' | 'west';
}

export interface State {
  name: string;
  abbr: string;
  slug: string;
  taxRate: number; // sales tax %
  cities: City[];
}

export const states: State[] = [
  { name: 'Alabama', abbr: 'AL', slug: 'alabama', taxRate: 4.0, cities: [
    { name: 'Birmingham', slug: 'birmingham', zip: '35203', region: 'southeast' },
    { name: 'Montgomery', slug: 'montgomery', zip: '36104', region: 'southeast' },
    { name: 'Huntsville', slug: 'huntsville', zip: '35801', region: 'southeast' },
    { name: 'Mobile', slug: 'mobile', zip: '36602', region: 'southeast' },
    { name: 'Tuscaloosa', slug: 'tuscaloosa', zip: '35401', region: 'southeast' },
  ]},
  { name: 'Alaska', abbr: 'AK', slug: 'alaska', taxRate: 0.0, cities: [
    { name: 'Anchorage', slug: 'anchorage', zip: '99501', region: 'west' },
    { name: 'Fairbanks', slug: 'fairbanks', zip: '99701', region: 'west' },
    { name: 'Juneau', slug: 'juneau', zip: '99801', region: 'west' },
    { name: 'Sitka', slug: 'sitka', zip: '99835', region: 'west' },
    { name: 'Ketchikan', slug: 'ketchikan', zip: '99901', region: 'west' },
  ]},
  { name: 'Arizona', abbr: 'AZ', slug: 'arizona', taxRate: 5.6, cities: [
    { name: 'Phoenix', slug: 'phoenix', zip: '85001', region: 'southwest' },
    { name: 'Tucson', slug: 'tucson', zip: '85701', region: 'southwest' },
    { name: 'Mesa', slug: 'mesa', zip: '85201', region: 'southwest' },
    { name: 'Chandler', slug: 'chandler', zip: '85224', region: 'southwest' },
    { name: 'Scottsdale', slug: 'scottsdale', zip: '85251', region: 'southwest' },
    { name: 'Tempe', slug: 'tempe', zip: '85281', region: 'southwest' },
  ]},
  { name: 'Arkansas', abbr: 'AR', slug: 'arkansas', taxRate: 6.5, cities: [
    { name: 'Little Rock', slug: 'little-rock', zip: '72201', region: 'southeast' },
    { name: 'Fort Smith', slug: 'fort-smith', zip: '72901', region: 'southeast' },
    { name: 'Fayetteville', slug: 'fayetteville', zip: '72701', region: 'southeast' },
    { name: 'Springdale', slug: 'springdale', zip: '72764', region: 'southeast' },
    { name: 'Jonesboro', slug: 'jonesboro', zip: '72401', region: 'southeast' },
  ]},
  { name: 'California', abbr: 'CA', slug: 'california', taxRate: 7.25, cities: [
    { name: 'Los Angeles', slug: 'los-angeles', zip: '90001', region: 'west' },
    { name: 'San Francisco', slug: 'san-francisco', zip: '94102', region: 'west' },
    { name: 'San Diego', slug: 'san-diego', zip: '92101', region: 'west' },
    { name: 'San Jose', slug: 'san-jose', zip: '95101', region: 'west' },
    { name: 'Sacramento', slug: 'sacramento', zip: '95814', region: 'west' },
    { name: 'Fresno', slug: 'fresno', zip: '93701', region: 'west' },
    { name: 'Oakland', slug: 'oakland', zip: '94601', region: 'west' },
    { name: 'Long Beach', slug: 'long-beach', zip: '90801', region: 'west' },
  ]},
  { name: 'Colorado', abbr: 'CO', slug: 'colorado', taxRate: 2.9, cities: [
    { name: 'Denver', slug: 'denver', zip: '80201', region: 'southwest' },
    { name: 'Colorado Springs', slug: 'colorado-springs', zip: '80901', region: 'southwest' },
    { name: 'Aurora', slug: 'aurora', zip: '80010', region: 'southwest' },
    { name: 'Boulder', slug: 'boulder', zip: '80301', region: 'southwest' },
    { name: 'Fort Collins', slug: 'fort-collins', zip: '80521', region: 'southwest' },
  ]},
  { name: 'Connecticut', abbr: 'CT', slug: 'connecticut', taxRate: 6.35, cities: [
    { name: 'Bridgeport', slug: 'bridgeport', zip: '06601', region: 'northeast' },
    { name: 'New Haven', slug: 'new-haven', zip: '06510', region: 'northeast' },
    { name: 'Hartford', slug: 'hartford', zip: '06101', region: 'northeast' },
    { name: 'Stamford', slug: 'stamford', zip: '06901', region: 'northeast' },
    { name: 'Waterbury', slug: 'waterbury', zip: '06701', region: 'northeast' },
  ]},
  { name: 'Delaware', abbr: 'DE', slug: 'delaware', taxRate: 0.0, cities: [
    { name: 'Wilmington', slug: 'wilmington', zip: '19801', region: 'northeast' },
    { name: 'Dover', slug: 'dover', zip: '19901', region: 'northeast' },
    { name: 'Newark', slug: 'newark', zip: '19711', region: 'northeast' },
    { name: 'Middletown', slug: 'middletown', zip: '19709', region: 'northeast' },
  ]},
  { name: 'Florida', abbr: 'FL', slug: 'florida', taxRate: 6.0, cities: [
    { name: 'Miami', slug: 'miami', zip: '33101', region: 'southeast' },
    { name: 'Orlando', slug: 'orlando', zip: '32801', region: 'southeast' },
    { name: 'Tampa', slug: 'tampa', zip: '33601', region: 'southeast' },
    { name: 'Jacksonville', slug: 'jacksonville', zip: '32099', region: 'southeast' },
    { name: 'Fort Lauderdale', slug: 'fort-lauderdale', zip: '33301', region: 'southeast' },
    { name: 'St. Petersburg', slug: 'st-petersburg', zip: '33701', region: 'southeast' },
    { name: 'Tallahassee', slug: 'tallahassee', zip: '32301', region: 'southeast' },
  ]},
  { name: 'Georgia', abbr: 'GA', slug: 'georgia', taxRate: 4.0, cities: [
    { name: 'Atlanta', slug: 'atlanta', zip: '30301', region: 'southeast' },
    { name: 'Augusta', slug: 'augusta', zip: '30901', region: 'southeast' },
    { name: 'Columbus', slug: 'columbus', zip: '31901', region: 'southeast' },
    { name: 'Savannah', slug: 'savannah', zip: '31401', region: 'southeast' },
    { name: 'Athens', slug: 'athens', zip: '30601', region: 'southeast' },
    { name: 'Macon', slug: 'macon', zip: '31201', region: 'southeast' },
  ]},
  { name: 'Hawaii', abbr: 'HI', slug: 'hawaii', taxRate: 4.0, cities: [
    { name: 'Honolulu', slug: 'honolulu', zip: '96801', region: 'west' },
    { name: 'Hilo', slug: 'hilo', zip: '96720', region: 'west' },
    { name: 'Kailua', slug: 'kailua', zip: '96734', region: 'west' },
    { name: 'Pearl City', slug: 'pearl-city', zip: '96782', region: 'west' },
  ]},
  { name: 'Idaho', abbr: 'ID', slug: 'idaho', taxRate: 6.0, cities: [
    { name: 'Boise', slug: 'boise', zip: '83701', region: 'west' },
    { name: 'Nampa', slug: 'nampa', zip: '83651', region: 'west' },
    { name: 'Meridian', slug: 'meridian', zip: '83642', region: 'west' },
    { name: 'Idaho Falls', slug: 'idaho-falls', zip: '83401', region: 'west' },
    { name: 'Pocatello', slug: 'pocatello', zip: '83201', region: 'west' },
  ]},
  { name: 'Illinois', abbr: 'IL', slug: 'illinois', taxRate: 6.25, cities: [
    { name: 'Chicago', slug: 'chicago', zip: '60601', region: 'midwest' },
    { name: 'Aurora', slug: 'aurora', zip: '60505', region: 'midwest' },
    { name: 'Rockford', slug: 'rockford', zip: '61101', region: 'midwest' },
    { name: 'Joliet', slug: 'joliet', zip: '60431', region: 'midwest' },
    { name: 'Springfield', slug: 'springfield', zip: '62701', region: 'midwest' },
    { name: 'Naperville', slug: 'naperville', zip: '60540', region: 'midwest' },
  ]},
  { name: 'Indiana', abbr: 'IN', slug: 'indiana', taxRate: 7.0, cities: [
    { name: 'Indianapolis', slug: 'indianapolis', zip: '46201', region: 'midwest' },
    { name: 'Fort Wayne', slug: 'fort-wayne', zip: '46801', region: 'midwest' },
    { name: 'Evansville', slug: 'evansville', zip: '47701', region: 'midwest' },
    { name: 'South Bend', slug: 'south-bend', zip: '46601', region: 'midwest' },
    { name: 'Carmel', slug: 'carmel', zip: '46032', region: 'midwest' },
  ]},
  { name: 'Iowa', abbr: 'IA', slug: 'iowa', taxRate: 6.0, cities: [
    { name: 'Des Moines', slug: 'des-moines', zip: '50301', region: 'midwest' },
    { name: 'Cedar Rapids', slug: 'cedar-rapids', zip: '52401', region: 'midwest' },
    { name: 'Davenport', slug: 'davenport', zip: '52801', region: 'midwest' },
    { name: 'Sioux City', slug: 'sioux-city', zip: '51101', region: 'midwest' },
    { name: 'Iowa City', slug: 'iowa-city', zip: '52240', region: 'midwest' },
  ]},
  { name: 'Kansas', abbr: 'KS', slug: 'kansas', taxRate: 6.5, cities: [
    { name: 'Wichita', slug: 'wichita', zip: '67201', region: 'midwest' },
    { name: 'Overland Park', slug: 'overland-park', zip: '66210', region: 'midwest' },
    { name: 'Kansas City', slug: 'kansas-city', zip: '66101', region: 'midwest' },
    { name: 'Topeka', slug: 'topeka', zip: '66601', region: 'midwest' },
    { name: 'Lawrence', slug: 'lawrence', zip: '66044', region: 'midwest' },
  ]},
  { name: 'Kentucky', abbr: 'KY', slug: 'kentucky', taxRate: 6.0, cities: [
    { name: 'Louisville', slug: 'louisville', zip: '40201', region: 'southeast' },
    { name: 'Lexington', slug: 'lexington', zip: '40501', region: 'southeast' },
    { name: 'Bowling Green', slug: 'bowling-green', zip: '42101', region: 'southeast' },
    { name: 'Owensboro', slug: 'owensboro', zip: '42301', region: 'southeast' },
    { name: 'Covington', slug: 'covington', zip: '41011', region: 'southeast' },
  ]},
  { name: 'Louisiana', abbr: 'LA', slug: 'louisiana', taxRate: 4.45, cities: [
    { name: 'New Orleans', slug: 'new-orleans', zip: '70112', region: 'southeast' },
    { name: 'Baton Rouge', slug: 'baton-rouge', zip: '70801', region: 'southeast' },
    { name: 'Shreveport', slug: 'shreveport', zip: '71101', region: 'southeast' },
    { name: 'Lafayette', slug: 'lafayette', zip: '70501', region: 'southeast' },
    { name: 'Lake Charles', slug: 'lake-charles', zip: '70601', region: 'southeast' },
  ]},
  { name: 'Maine', abbr: 'ME', slug: 'maine', taxRate: 5.5, cities: [
    { name: 'Portland', slug: 'portland', zip: '04101', region: 'northeast' },
    { name: 'Lewiston', slug: 'lewiston', zip: '04240', region: 'northeast' },
    { name: 'Bangor', slug: 'bangor', zip: '04401', region: 'northeast' },
    { name: 'South Portland', slug: 'south-portland', zip: '04106', region: 'northeast' },
  ]},
  { name: 'Maryland', abbr: 'MD', slug: 'maryland', taxRate: 6.0, cities: [
    { name: 'Baltimore', slug: 'baltimore', zip: '21201', region: 'northeast' },
    { name: 'Frederick', slug: 'frederick', zip: '21701', region: 'northeast' },
    { name: 'Rockville', slug: 'rockville', zip: '20850', region: 'northeast' },
    { name: 'Gaithersburg', slug: 'gaithersburg', zip: '20877', region: 'northeast' },
    { name: 'Annapolis', slug: 'annapolis', zip: '21401', region: 'northeast' },
  ]},
  { name: 'Massachusetts', abbr: 'MA', slug: 'massachusetts', taxRate: 6.25, cities: [
    { name: 'Boston', slug: 'boston', zip: '02101', region: 'northeast' },
    { name: 'Worcester', slug: 'worcester', zip: '01601', region: 'northeast' },
    { name: 'Springfield', slug: 'springfield', zip: '01101', region: 'northeast' },
    { name: 'Cambridge', slug: 'cambridge', zip: '02139', region: 'northeast' },
    { name: 'Lowell', slug: 'lowell', zip: '01851', region: 'northeast' },
    { name: 'Brockton', slug: 'brockton', zip: '02301', region: 'northeast' },
  ]},
  { name: 'Michigan', abbr: 'MI', slug: 'michigan', taxRate: 6.0, cities: [
    { name: 'Detroit', slug: 'detroit', zip: '48201', region: 'midwest' },
    { name: 'Grand Rapids', slug: 'grand-rapids', zip: '49501', region: 'midwest' },
    { name: 'Warren', slug: 'warren', zip: '48088', region: 'midwest' },
    { name: 'Sterling Heights', slug: 'sterling-heights', zip: '48310', region: 'midwest' },
    { name: 'Ann Arbor', slug: 'ann-arbor', zip: '48103', region: 'midwest' },
    { name: 'Lansing', slug: 'lansing', zip: '48901', region: 'midwest' },
  ]},
  { name: 'Minnesota', abbr: 'MN', slug: 'minnesota', taxRate: 6.875, cities: [
    { name: 'Minneapolis', slug: 'minneapolis', zip: '55401', region: 'midwest' },
    { name: 'Saint Paul', slug: 'saint-paul', zip: '55101', region: 'midwest' },
    { name: 'Rochester', slug: 'rochester', zip: '55901', region: 'midwest' },
    { name: 'Duluth', slug: 'duluth', zip: '55801', region: 'midwest' },
    { name: 'Bloomington', slug: 'bloomington', zip: '55420', region: 'midwest' },
  ]},
  { name: 'Mississippi', abbr: 'MS', slug: 'mississippi', taxRate: 7.0, cities: [
    { name: 'Jackson', slug: 'jackson', zip: '39201', region: 'southeast' },
    { name: 'Gulfport', slug: 'gulfport', zip: '39501', region: 'southeast' },
    { name: 'Southaven', slug: 'southaven', zip: '38671', region: 'southeast' },
    { name: 'Hattiesburg', slug: 'hattiesburg', zip: '39401', region: 'southeast' },
    { name: 'Biloxi', slug: 'biloxi', zip: '39530', region: 'southeast' },
  ]},
  { name: 'Missouri', abbr: 'MO', slug: 'missouri', taxRate: 4.225, cities: [
    { name: 'Kansas City', slug: 'kansas-city', zip: '64101', region: 'midwest' },
    { name: 'Saint Louis', slug: 'saint-louis', zip: '63101', region: 'midwest' },
    { name: 'Springfield', slug: 'springfield', zip: '65801', region: 'midwest' },
    { name: 'Columbia', slug: 'columbia', zip: '65201', region: 'midwest' },
    { name: 'Independence', slug: 'independence', zip: '64050', region: 'midwest' },
  ]},
  { name: 'Montana', abbr: 'MT', slug: 'montana', taxRate: 0.0, cities: [
    { name: 'Billings', slug: 'billings', zip: '59101', region: 'west' },
    { name: 'Missoula', slug: 'missoula', zip: '59801', region: 'west' },
    { name: 'Great Falls', slug: 'great-falls', zip: '59401', region: 'west' },
    { name: 'Bozeman', slug: 'bozeman', zip: '59715', region: 'west' },
    { name: 'Helena', slug: 'helena', zip: '59601', region: 'west' },
  ]},
  { name: 'Nebraska', abbr: 'NE', slug: 'nebraska', taxRate: 5.5, cities: [
    { name: 'Omaha', slug: 'omaha', zip: '68101', region: 'midwest' },
    { name: 'Lincoln', slug: 'lincoln', zip: '68501', region: 'midwest' },
    { name: 'Bellevue', slug: 'bellevue', zip: '68005', region: 'midwest' },
    { name: 'Grand Island', slug: 'grand-island', zip: '68801', region: 'midwest' },
  ]},
  { name: 'Nevada', abbr: 'NV', slug: 'nevada', taxRate: 6.85, cities: [
    { name: 'Las Vegas', slug: 'las-vegas', zip: '89101', region: 'west' },
    { name: 'Henderson', slug: 'henderson', zip: '89002', region: 'west' },
    { name: 'Reno', slug: 'reno', zip: '89501', region: 'west' },
    { name: 'North Las Vegas', slug: 'north-las-vegas', zip: '89030', region: 'west' },
    { name: 'Sparks', slug: 'sparks', zip: '89431', region: 'west' },
  ]},
  { name: 'New Hampshire', abbr: 'NH', slug: 'new-hampshire', taxRate: 0.0, cities: [
    { name: 'Manchester', slug: 'manchester', zip: '03101', region: 'northeast' },
    { name: 'Nashua', slug: 'nashua', zip: '03060', region: 'northeast' },
    { name: 'Concord', slug: 'concord', zip: '03301', region: 'northeast' },
    { name: 'Derry', slug: 'derry', zip: '03038', region: 'northeast' },
  ]},
  { name: 'New Jersey', abbr: 'NJ', slug: 'new-jersey', taxRate: 6.625, cities: [
    { name: 'Newark', slug: 'newark', zip: '07101', region: 'northeast' },
    { name: 'Jersey City', slug: 'jersey-city', zip: '07301', region: 'northeast' },
    { name: 'Paterson', slug: 'paterson', zip: '07501', region: 'northeast' },
    { name: 'Elizabeth', slug: 'elizabeth', zip: '07201', region: 'northeast' },
    { name: 'Trenton', slug: 'trenton', zip: '08601', region: 'northeast' },
    { name: 'Edison', slug: 'edison', zip: '08817', region: 'northeast' },
  ]},
  { name: 'New Mexico', abbr: 'NM', slug: 'new-mexico', taxRate: 5.0, cities: [
    { name: 'Albuquerque', slug: 'albuquerque', zip: '87101', region: 'southwest' },
    { name: 'Las Cruces', slug: 'las-cruces', zip: '88001', region: 'southwest' },
    { name: 'Rio Rancho', slug: 'rio-rancho', zip: '87124', region: 'southwest' },
    { name: 'Santa Fe', slug: 'santa-fe', zip: '87501', region: 'southwest' },
    { name: 'Roswell', slug: 'roswell', zip: '88201', region: 'southwest' },
  ]},
  { name: 'New York', abbr: 'NY', slug: 'new-york', taxRate: 4.0, cities: [
    { name: 'New York City', slug: 'new-york-city', zip: '10001', region: 'northeast' },
    { name: 'Buffalo', slug: 'buffalo', zip: '14201', region: 'northeast' },
    { name: 'Rochester', slug: 'rochester', zip: '14601', region: 'northeast' },
    { name: 'Yonkers', slug: 'yonkers', zip: '10701', region: 'northeast' },
    { name: 'Syracuse', slug: 'syracuse', zip: '13201', region: 'northeast' },
    { name: 'Albany', slug: 'albany', zip: '12201', region: 'northeast' },
    { name: 'Brooklyn', slug: 'brooklyn', zip: '11201', region: 'northeast' },
  ]},
  { name: 'North Carolina', abbr: 'NC', slug: 'north-carolina', taxRate: 4.75, cities: [
    { name: 'Charlotte', slug: 'charlotte', zip: '28201', region: 'southeast' },
    { name: 'Raleigh', slug: 'raleigh', zip: '27601', region: 'southeast' },
    { name: 'Greensboro', slug: 'greensboro', zip: '27401', region: 'southeast' },
    { name: 'Durham', slug: 'durham', zip: '27701', region: 'southeast' },
    { name: 'Winston-Salem', slug: 'winston-salem', zip: '27101', region: 'southeast' },
    { name: 'Fayetteville', slug: 'fayetteville', zip: '28301', region: 'southeast' },
  ]},
  { name: 'North Dakota', abbr: 'ND', slug: 'north-dakota', taxRate: 5.0, cities: [
    { name: 'Fargo', slug: 'fargo', zip: '58101', region: 'midwest' },
    { name: 'Bismarck', slug: 'bismarck', zip: '58501', region: 'midwest' },
    { name: 'Grand Forks', slug: 'grand-forks', zip: '58201', region: 'midwest' },
    { name: 'Minot', slug: 'minot', zip: '58701', region: 'midwest' },
  ]},
  { name: 'Ohio', abbr: 'OH', slug: 'ohio', taxRate: 5.75, cities: [
    { name: 'Columbus', slug: 'columbus', zip: '43201', region: 'midwest' },
    { name: 'Cleveland', slug: 'cleveland', zip: '44101', region: 'midwest' },
    { name: 'Cincinnati', slug: 'cincinnati', zip: '45201', region: 'midwest' },
    { name: 'Toledo', slug: 'toledo', zip: '43601', region: 'midwest' },
    { name: 'Akron', slug: 'akron', zip: '44301', region: 'midwest' },
    { name: 'Dayton', slug: 'dayton', zip: '45401', region: 'midwest' },
  ]},
  { name: 'Oklahoma', abbr: 'OK', slug: 'oklahoma', taxRate: 4.5, cities: [
    { name: 'Oklahoma City', slug: 'oklahoma-city', zip: '73101', region: 'southwest' },
    { name: 'Tulsa', slug: 'tulsa', zip: '74101', region: 'southwest' },
    { name: 'Norman', slug: 'norman', zip: '73069', region: 'southwest' },
    { name: 'Broken Arrow', slug: 'broken-arrow', zip: '74011', region: 'southwest' },
    { name: 'Edmond', slug: 'edmond', zip: '73003', region: 'southwest' },
  ]},
  { name: 'Oregon', abbr: 'OR', slug: 'oregon', taxRate: 0.0, cities: [
    { name: 'Portland', slug: 'portland', zip: '97201', region: 'west' },
    { name: 'Salem', slug: 'salem', zip: '97301', region: 'west' },
    { name: 'Eugene', slug: 'eugene', zip: '97401', region: 'west' },
    { name: 'Gresham', slug: 'gresham', zip: '97030', region: 'west' },
    { name: 'Hillsboro', slug: 'hillsboro', zip: '97123', region: 'west' },
    { name: 'Bend', slug: 'bend', zip: '97701', region: 'west' },
  ]},
  { name: 'Pennsylvania', abbr: 'PA', slug: 'pennsylvania', taxRate: 6.0, cities: [
    { name: 'Philadelphia', slug: 'philadelphia', zip: '19101', region: 'northeast' },
    { name: 'Pittsburgh', slug: 'pittsburgh', zip: '15201', region: 'northeast' },
    { name: 'Allentown', slug: 'allentown', zip: '18101', region: 'northeast' },
    { name: 'Erie', slug: 'erie', zip: '16501', region: 'northeast' },
    { name: 'Reading', slug: 'reading', zip: '19601', region: 'northeast' },
    { name: 'Scranton', slug: 'scranton', zip: '18503', region: 'northeast' },
  ]},
  { name: 'Rhode Island', abbr: 'RI', slug: 'rhode-island', taxRate: 7.0, cities: [
    { name: 'Providence', slug: 'providence', zip: '02901', region: 'northeast' },
    { name: 'Cranston', slug: 'cranston', zip: '02910', region: 'northeast' },
    { name: 'Warwick', slug: 'warwick', zip: '02886', region: 'northeast' },
    { name: 'Pawtucket', slug: 'pawtucket', zip: '02860', region: 'northeast' },
  ]},
  { name: 'South Carolina', abbr: 'SC', slug: 'south-carolina', taxRate: 6.0, cities: [
    { name: 'Columbia', slug: 'columbia', zip: '29201', region: 'southeast' },
    { name: 'Charleston', slug: 'charleston', zip: '29401', region: 'southeast' },
    { name: 'North Charleston', slug: 'north-charleston', zip: '29405', region: 'southeast' },
    { name: 'Greenville', slug: 'greenville', zip: '29601', region: 'southeast' },
    { name: 'Rock Hill', slug: 'rock-hill', zip: '29730', region: 'southeast' },
  ]},
  { name: 'South Dakota', abbr: 'SD', slug: 'south-dakota', taxRate: 4.5, cities: [
    { name: 'Sioux Falls', slug: 'sioux-falls', zip: '57101', region: 'midwest' },
    { name: 'Rapid City', slug: 'rapid-city', zip: '57701', region: 'midwest' },
    { name: 'Aberdeen', slug: 'aberdeen', zip: '57401', region: 'midwest' },
    { name: 'Brookings', slug: 'brookings', zip: '57006', region: 'midwest' },
  ]},
  { name: 'Tennessee', abbr: 'TN', slug: 'tennessee', taxRate: 7.0, cities: [
    { name: 'Nashville', slug: 'nashville', zip: '37201', region: 'southeast' },
    { name: 'Memphis', slug: 'memphis', zip: '38101', region: 'southeast' },
    { name: 'Knoxville', slug: 'knoxville', zip: '37901', region: 'southeast' },
    { name: 'Chattanooga', slug: 'chattanooga', zip: '37401', region: 'southeast' },
    { name: 'Clarksville', slug: 'clarksville', zip: '37040', region: 'southeast' },
    { name: 'Murfreesboro', slug: 'murfreesboro', zip: '37127', region: 'southeast' },
  ]},
  { name: 'Texas', abbr: 'TX', slug: 'texas', taxRate: 6.25, cities: [
    { name: 'Houston', slug: 'houston', zip: '77001', region: 'southwest' },
    { name: 'San Antonio', slug: 'san-antonio', zip: '78201', region: 'southwest' },
    { name: 'Dallas', slug: 'dallas', zip: '75201', region: 'southwest' },
    { name: 'Austin', slug: 'austin', zip: '78701', region: 'southwest' },
    { name: 'Fort Worth', slug: 'fort-worth', zip: '76101', region: 'southwest' },
    { name: 'El Paso', slug: 'el-paso', zip: '79901', region: 'southwest' },
    { name: 'Arlington', slug: 'arlington', zip: '76010', region: 'southwest' },
    { name: 'Plano', slug: 'plano', zip: '75023', region: 'southwest' },
  ]},
  { name: 'Utah', abbr: 'UT', slug: 'utah', taxRate: 4.85, cities: [
    { name: 'Salt Lake City', slug: 'salt-lake-city', zip: '84101', region: 'west' },
    { name: 'West Valley City', slug: 'west-valley-city', zip: '84119', region: 'west' },
    { name: 'Provo', slug: 'provo', zip: '84601', region: 'west' },
    { name: 'West Jordan', slug: 'west-jordan', zip: '84084', region: 'west' },
    { name: 'Orem', slug: 'orem', zip: '84057', region: 'west' },
    { name: 'Ogden', slug: 'ogden', zip: '84401', region: 'west' },
  ]},
  { name: 'Vermont', abbr: 'VT', slug: 'vermont', taxRate: 6.0, cities: [
    { name: 'Burlington', slug: 'burlington', zip: '05401', region: 'northeast' },
    { name: 'South Burlington', slug: 'south-burlington', zip: '05403', region: 'northeast' },
    { name: 'Rutland', slug: 'rutland', zip: '05701', region: 'northeast' },
    { name: 'Montpelier', slug: 'montpelier', zip: '05601', region: 'northeast' },
  ]},
  { name: 'Virginia', abbr: 'VA', slug: 'virginia', taxRate: 5.3, cities: [
    { name: 'Virginia Beach', slug: 'virginia-beach', zip: '23451', region: 'southeast' },
    { name: 'Norfolk', slug: 'norfolk', zip: '23501', region: 'southeast' },
    { name: 'Chesapeake', slug: 'chesapeake', zip: '23320', region: 'southeast' },
    { name: 'Richmond', slug: 'richmond', zip: '23219', region: 'southeast' },
    { name: 'Arlington', slug: 'arlington', zip: '22201', region: 'southeast' },
    { name: 'Alexandria', slug: 'alexandria', zip: '22301', region: 'southeast' },
    { name: 'Roanoke', slug: 'roanoke', zip: '24011', region: 'southeast' },
  ]},
  { name: 'Washington', abbr: 'WA', slug: 'washington', taxRate: 6.5, cities: [
    { name: 'Seattle', slug: 'seattle', zip: '98101', region: 'west' },
    { name: 'Spokane', slug: 'spokane', zip: '99201', region: 'west' },
    { name: 'Tacoma', slug: 'tacoma', zip: '98401', region: 'west' },
    { name: 'Vancouver', slug: 'vancouver', zip: '98660', region: 'west' },
    { name: 'Bellevue', slug: 'bellevue', zip: '98004', region: 'west' },
    { name: 'Kent', slug: 'kent', zip: '98031', region: 'west' },
  ]},
  { name: 'West Virginia', abbr: 'WV', slug: 'west-virginia', taxRate: 6.0, cities: [
    { name: 'Charleston', slug: 'charleston', zip: '25301', region: 'southeast' },
    { name: 'Huntington', slug: 'huntington', zip: '25701', region: 'southeast' },
    { name: 'Morgantown', slug: 'morgantown', zip: '26501', region: 'southeast' },
    { name: 'Parkersburg', slug: 'parkersburg', zip: '26101', region: 'southeast' },
  ]},
  { name: 'Wisconsin', abbr: 'WI', slug: 'wisconsin', taxRate: 5.0, cities: [
    { name: 'Milwaukee', slug: 'milwaukee', zip: '53201', region: 'midwest' },
    { name: 'Madison', slug: 'madison', zip: '53701', region: 'midwest' },
    { name: 'Green Bay', slug: 'green-bay', zip: '54301', region: 'midwest' },
    { name: 'Kenosha', slug: 'kenosha', zip: '53140', region: 'midwest' },
    { name: 'Racine', slug: 'racine', zip: '53401', region: 'midwest' },
  ]},
  { name: 'Wyoming', abbr: 'WY', slug: 'wyoming', taxRate: 4.0, cities: [
    { name: 'Cheyenne', slug: 'cheyenne', zip: '82001', region: 'west' },
    { name: 'Casper', slug: 'casper', zip: '82601', region: 'west' },
    { name: 'Laramie', slug: 'laramie', zip: '82070', region: 'west' },
    { name: 'Gillette', slug: 'gillette', zip: '82716', region: 'west' },
  ]},
];

// Zone matrix: origin region → destination region → zone number
export const ZONE_MATRIX: Record<string, Record<string, number>> = {
  northeast:  { northeast: 2, southeast: 4, midwest: 5, southwest: 7, west: 8 },
  southeast:  { northeast: 4, southeast: 2, midwest: 4, southwest: 5, west: 7 },
  midwest:    { northeast: 5, southeast: 4, midwest: 2, southwest: 4, west: 6 },
  southwest:  { northeast: 7, southeast: 5, midwest: 4, southwest: 2, west: 3 },
  west:       { northeast: 8, southeast: 7, midwest: 6, southwest: 3, west: 2 },
};

export function getStateBySlug(slug: string): State | undefined {
  return states.find(s => s.slug === slug);
}

export function getCityBySlug(stateSlug: string, citySlug: string): City | undefined {
  const state = getStateBySlug(stateSlug);
  return state?.cities.find(c => c.slug === citySlug);
}
