
export interface Product {
    id: number;
    productName: string;
    description: string;
    productGroup: string;
    price: number;
    discountedPrice?: number;
    discountMinCount?: number;
}

export const initialProduct: Product = {
    id: 0,
    productName: '',
    description: '',
    productGroup: '',
    price: 0,
}

export const products: Product[] = [
    {
        id: 1,
        productName: 'Batsuit',
        description: 'Batman\'s iconic costume',
        productGroup: 'Costume',
        price: 25000
    },
    {
        id: 2,
        productName: 'Stealth Batsuit',
        description: 'A specialized suit for covert operations',
        productGroup: 'Costume',
        price: 50000
    },
    {
        id: 3,
        productName: 'Arctic Batsuit',
        description: 'Insulated suit for extreme cold environments',
        productGroup: 'Costume',
        price: 45000
    },
    {
        id: 4,
        productName: 'Batarangs',
        description: 'Throwing weapons in the shape of bats',
        productGroup: 'Throwing Weapons',
        price: 25,
        discountedPrice: 20,
        discountMinCount: 1000
    },
    {
        id: 5,
        productName: 'Explosive Batarangs',
        description: 'Batarangs with explosive capabilities',
        productGroup: 'Throwing Weapons',
        price: 30
    },
    {
        id: 6,
        productName: 'EMP Batarangs',
        description: 'Electromagnetic pulse emitting Batarangs',
        productGroup: 'Throwing Weapons',
        price: 35
    },
    {
        id: 7,
        productName: 'Grappling Gun',
        description: 'A tool for quick ascents and descents',
        productGroup: 'Gadgets',
        price: 200,
        discountedPrice: 178
    },
    {
        id: 8,
        productName: 'Electromagnetic Grappling Gun',
        description: 'Grappling gun with electromagnetic features',
        productGroup: 'Gadgets',
        price: 250
    },
    {
        id: 9,
        productName: 'Sonic Grappling Gun',
        description: 'Grappling gun with sonic capabilities',
        productGroup: 'Gadgets',
        price: 220
    },
    {
        id: 10,
        productName: 'Batmobile',
        description: 'Batman\'s high-speed crime-fighting vehicle',
        productGroup: 'Vehicle',
        price: 1000000
    },
    {
        id: 11,
        productName: 'Batcycle',
        description: 'Motorcycle for urban pursuits',
        productGroup: 'Vehicle',
        price: 500000
    },
    {
        id: 12,
        productName: 'Batwing',
        description: 'Aircraft for aerial reconnaissance',
        productGroup: 'Vehicle',
        price: 1500000
    },
    {
        id: 13,
        productName: 'Utility Belt',
        description: 'A belt with various useful gadgets',
        productGroup: 'Accessories',
        price: 150
    },
    {
        id: 14,
        productName: 'Enhanced Utility Belt',
        description: 'Upgraded utility belt with more features',
        productGroup: 'Accessories',
        price: 200
    },
    {
        id: 15,
        productName: 'Ultimate Utility Belt',
        description: 'The most advanced utility belt with all the gadgets',
        productGroup: 'Accessories',
        price: 250
    },
    {
        id: 16,
        productName: 'Batsignal',
        description: 'A searchlight with the Bat symbol for summoning Batman',
        productGroup: 'Communication',
        price: 500
    },
    {
        id: 17,
        productName: 'Bat-Communicator',
        description: 'Portable communication device for Batman and allies',
        productGroup: 'Communication',
        price: 100
    },
    {
        id: 18,
        productName: 'Bat-Scanner',
        description: 'High-tech scanner for analyzing evidence',
        productGroup: 'Communication',
        price: 150
    },
    {
        id: 19,
        productName: 'Detective Equipment',
        description: 'Tools for crime scene analysis and investigation',
        productGroup: 'Investigation Tools',
        price: 100
    },
    {
        id: 20,
        productName: 'Forensic Kit',
        description: 'Kit for collecting and analyzing forensic evidence',
        productGroup: 'Investigation Tools',
        price: 75
    },
    {
        id: 21,
        productName: 'Holographic Analyzer',
        description: 'Device for creating and viewing holographic reconstructions',
        productGroup: 'Investigation Tools',
        price: 120
    },
    {
        id: 22,
        productName: 'Stim-packs',
        description: 'Medical supplies for rapid recovery',
        productGroup: 'Medical Supplies',
        price: 10
    },
    {
        id: 23,
        productName: 'Advanced Stim-packs',
        description: 'Enhanced medical supplies for faster recovery',
        productGroup: 'Medical Supplies',
        price: 15
    },
    {
        id: 24,
        productName: 'Nano-enhanced Stim-packs',
        description: 'Stim-packs with nanotechnology for near-instant recovery',
        productGroup: 'Medical Supplies',
        price: 20
    },
    {
        id: 25,
        productName: 'Bat-Sonar',
        description: 'Sonic navigation and detection system',
        productGroup: 'Gadgets',
        price: 75
    },
    {
        id: 26,
        productName: 'Sonar Goggles',
        description: 'Goggles with built-in sonar for improved vision',
        productGroup: 'Gadgets',
        price: 60
    },
    {
        id: 27,
        productName: 'Echolocation Device',
        description: 'Handheld device for echolocation in dark environments',
        productGroup: 'Gadgets',
        price: 80
    },
    {
        id: 28,
        productName: 'Stealth-Technology',
        description: 'Gadgets for silent and invisible movement',
        productGroup: 'Gadgets',
        price: 300
    },
    {
        id: 29,
        productName: 'Cloaking Device',
        description: 'Device for optical camouflage and invisibility',
        productGroup: 'Gadgets',
        price: 350
    },
    {
        id: 30,
        productName: 'Invisibility Cloak',
        description: 'Advanced cloak that renders Batman invisible',
        productGroup: 'Gadgets',
        price: 400
    }
];

export const sortByGroup = (a: Product, b: Product) => a.productGroup.localeCompare(b.productGroup);

const _productGroups = products.sort(sortByGroup).reduce((acc, p) => {
    return acc.includes(p.productGroup) ? acc : [...acc, p.productGroup]
}, ['All']);

export const productGroups = [..._productGroups, 'Hammer'];
