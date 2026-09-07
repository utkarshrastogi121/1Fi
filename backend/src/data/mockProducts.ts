import { Product } from '../types/index.js';

export const mockProducts: Product[] = [
  {
    id: 'prod-001',
    title: 'Apple iPhone 15',
    brand: 'Apple',
    description: 'Dynamic Island, 48MP Main camera, and USB-C.',
    thumbnail: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569',
    basePrice: 79900,
    highlights: ['A16 Bionic Chip', 'Super Retina XDR Display', 'All-day battery life'],
    variants: [
      {
        id: 'var-101',
        sku: 'IPH15-BLK-128',
        attributes: { color: 'Black', storage: '128GB' },
        price: 79900,
        originalPrice: 79900,
        stock: 12,
        images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569']
      },
      {
        id: 'var-102',
        sku: 'IPH15-BLU-256',
        attributes: { color: 'Blue', storage: '256GB' },
        price: 89900,
        originalPrice: 89900,
        stock: 5,
        images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569']
      }
    ],
    emiOptions: [
      {
        id: 'emi-03',
        tenureMonths: 3,
        interestRateAnnual: 0,
        processingFee: 199,
        monthlyEmi: 26633,
        totalAmountPayable: 80099,
        isNoCostEmi: true
      },
      {
        id: 'emi-06',
        tenureMonths: 6,
        interestRateAnnual: 0,
        processingFee: 299,
        monthlyEmi: 13317,
        totalAmountPayable: 80199,
        isNoCostEmi: true
      },
      {
        id: 'emi-12',
        tenureMonths: 12,
        interestRateAnnual: 14.5,
        processingFee: 499,
        monthlyEmi: 7192,
        totalAmountPayable: 86803,
        isNoCostEmi: false
      }
    ]
  },
  {
    id: 'prod-002',
    title: 'Samsung Galaxy S24',
    brand: 'Samsung',
    description: 'Galaxy AI is here. Epic search, live translate, and pro camera.',
    thumbnail: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf',
    basePrice: 74999,
    highlights: ['Galaxy AI', 'Armor Aluminum Frame', 'Snapdragon 8 Gen 3'],
    variants: [
      {
        id: 'var-201',
        sku: 'SGS24-GRY-128',
        attributes: { color: 'Marble Gray', storage: '128GB' },
        price: 74999,
        originalPrice: 79999,
        stock: 8,
        images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf']
      },
      {
        id: 'var-202',
        sku: 'SGS24-BLK-256',
        attributes: { color: 'Onyx Black', storage: '256GB' },
        price: 84999,
        originalPrice: 89999,
        stock: 4,
        images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf']
      }
    ],
    emiOptions: [
      {
        id: 'emi-s24-06',
        tenureMonths: 6,
        interestRateAnnual: 0,
        processingFee: 199,
        monthlyEmi: 12500,
        totalAmountPayable: 75198,
        isNoCostEmi: true
      },
      {
        id: 'emi-s24-12',
        tenureMonths: 12,
        interestRateAnnual: 13.99,
        processingFee: 399,
        monthlyEmi: 6734,
        totalAmountPayable: 81207,
        isNoCostEmi: false
      }
    ]
  },
  {
    id: 'prod-003',
    title: 'Apple MacBook Air M2',
    brand: 'Apple',
    description: 'Strikingly thin design with up to 18 hours of battery life and Liquid Retina display.',
    thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    basePrice: 99900,
    highlights: ['M2 chip 8-core CPU', '13.6-inch Liquid Retina display', 'MagSafe 3 charging port'],
    variants: [
      {
        id: 'var-301',
        sku: 'MBA-M2-SLV-256',
        attributes: { color: 'Silver', storage: '256GB SSD', ram: '8GB' },
        price: 99900,
        originalPrice: 114900,
        stock: 15,
        images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8']
      },
      {
        id: 'var-302',
        sku: 'MBA-M2-MID-512',
        attributes: { color: 'Midnight', storage: '512GB SSD', ram: '16GB' },
        price: 119900,
        originalPrice: 134900,
        stock: 7,
        images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8']
      }
    ],
    emiOptions: [
      {
        id: 'emi-mba-06',
        tenureMonths: 6,
        interestRateAnnual: 0,
        processingFee: 399,
        monthlyEmi: 16650,
        totalAmountPayable: 100299,
        isNoCostEmi: true
      },
      {
        id: 'emi-mba-12',
        tenureMonths: 12,
        interestRateAnnual: 12.0,
        processingFee: 599,
        monthlyEmi: 8885,
        totalAmountPayable: 107219,
        isNoCostEmi: false
      },
      {
        id: 'emi-mba-24',
        tenureMonths: 24,
        interestRateAnnual: 14.5,
        processingFee: 999,
        monthlyEmi: 4822,
        totalAmountPayable: 116727,
        isNoCostEmi: false
      }
    ]
  },
  {
    id: 'prod-004',
    title: 'Sony WH-1000XM5 Wireless Headphones',
    brand: 'Sony',
    description: 'Industry-leading noise cancellation optimized with two processors and eight microphones.',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    basePrice: 29990,
    highlights: ['Auto NC Optimizer', 'Up to 30-hour battery life', 'Crystal-clear hands-free calling'],
    variants: [
      {
        id: 'var-401',
        sku: 'SONY-XM5-BLK',
        attributes: { color: 'Black' },
        price: 29990,
        originalPrice: 34990,
        stock: 20,
        images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e']
      },
      {
        id: 'var-402',
        sku: 'SONY-XM5-SLV',
        attributes: { color: 'Platinum Silver' },
        price: 29990,
        originalPrice: 34990,
        stock: 9,
        images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e']
      }
    ],
    emiOptions: [
      {
        id: 'emi-xm5-03',
        tenureMonths: 3,
        interestRateAnnual: 0,
        processingFee: 99,
        monthlyEmi: 9997,
        totalAmountPayable: 30089,
        isNoCostEmi: true
      },
      {
        id: 'emi-xm5-06',
        tenureMonths: 6,
        interestRateAnnual: 0,
        processingFee: 149,
        monthlyEmi: 4998,
        totalAmountPayable: 30137,
        isNoCostEmi: true
      }
    ]
  },
  {
    id: 'prod-005',
    title: 'Apple Watch Series 9',
    brand: 'Apple',
    description: 'Powerful S9 SiP chip, Double Tap gesture, and advanced health metrics.',
    thumbnail: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1',
    basePrice: 41900,
    highlights: ['S9 SiP Chip', 'Double Tap Gesture', 'Blood Oxygen & ECG Sensor'],
    variants: [
      {
        id: 'var-501',
        sku: 'AW9-GPS-41-STN',
        attributes: { connectivity: 'GPS', size: '41mm', band: 'Starlight Sport' },
        price: 41900,
        originalPrice: 41900,
        stock: 14,
        images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1']
      },
      {
        id: 'var-502',
        sku: 'AW9-GPS-45-MID',
        attributes: { connectivity: 'GPS + Cellular', size: '45mm', band: 'Midnight Sport' },
        price: 54900,
        originalPrice: 54900,
        stock: 6,
        images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1']
      }
    ],
    emiOptions: [
      {
        id: 'emi-aw9-03',
        tenureMonths: 3,
        interestRateAnnual: 0,
        processingFee: 149,
        monthlyEmi: 13967,
        totalAmountPayable: 42049,
        isNoCostEmi: true
      },
      {
        id: 'emi-aw9-06',
        tenureMonths: 6,
        interestRateAnnual: 0,
        processingFee: 199,
        monthlyEmi: 6983,
        totalAmountPayable: 42097,
        isNoCostEmi: true
      },
      {
        id: 'emi-aw9-12',
        tenureMonths: 12,
        interestRateAnnual: 13.5,
        processingFee: 299,
        monthlyEmi: 3753,
        totalAmountPayable: 45335,
        isNoCostEmi: false
      }
    ]
  },
  {
    id: 'prod-006',
    title: 'LG C3 55-inch 4K OLED TV',
    brand: 'LG',
    description: 'Self-lit OLED pixels, α9 AI Processor Gen6, Dolby Vision, and 120Hz refresh rate.',
    thumbnail: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1',
    basePrice: 129990,
    highlights: ['OLED evo panel', '120Hz native refresh rate', 'NVIDIA G-Sync & FreeSync'],
    variants: [
      {
        id: 'var-601',
        sku: 'LG-OLED55C3',
        attributes: { displaySize: '55 inch', resolution: '4K Ultra HD' },
        price: 129990,
        originalPrice: 169990,
        stock: 3,
        images: ['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1']
      }
    ],
    emiOptions: [
      {
        id: 'emi-lg-06',
        tenureMonths: 6,
        interestRateAnnual: 0,
        processingFee: 499,
        monthlyEmi: 21665,
        totalAmountPayable: 130489,
        isNoCostEmi: true
      },
      {
        id: 'emi-lg-12',
        tenureMonths: 12,
        interestRateAnnual: 11.5,
        processingFee: 699,
        monthlyEmi: 11520,
        totalAmountPayable: 138939,
        isNoCostEmi: false
      },
      {
        id: 'emi-lg-18',
        tenureMonths: 18,
        interestRateAnnual: 14.0,
        processingFee: 999,
        monthlyEmi: 8056,
        totalAmountPayable: 146007,
        isNoCostEmi: false
      }
    ]
  }
];