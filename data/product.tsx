export interface Product {
  name: string;
  effects: EffectMode[];
}

export interface EffectMode {
  name: string;
  value: number;
}

export const products: Product[] = [
  {
    name: "Playstation 5",
    effects: [
      { name: "Spel", value: 200 },
      { name: "Streaming", value: 70 },
      { name: "Stand-by", value: 1.5 },
      { name: "Av", value: 1.3 },
    ],
  },
  {
    name: "iPhone Laddare",
    effects: [
      { name: "USB", value: 5 },
      { name: "USB", value: 10 },
      { name: "USB", value: 12 },
      { name: "USB-C", value: 18 },
      { name: "USB-C", value: 20 },
    ],
  },
  {
    name: "Kyl",
    effects: [
      { name: "Nyare modell", value: 100 },
      { name: "Genomsnitt", value: 150 },
    ],
  },
  {
    name: "Frys",
    effects: [
      { name: "Nyare modell", value: 100 },
      { name: "Genomsnitt", value: 150 },
    ],
  },
  {
    name: "Glödlampa",
    effects: [
      { name: "Glödlampa", value: 25 },
      { name: "Glödlampa", value: 40 },
      { name: "Glödlampa", value: 60 },
    ],
  },
  {
    name: "LED-lampa",
    effects: [{ name: "Genomsnitt", value: 1 }],
  },
  {
    name: "Dammsugare",
    effects: [{ name: "Genomsnitt", value: 1000 }],
  },
];
