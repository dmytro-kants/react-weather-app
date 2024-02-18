export interface ISingleProductResponse {
  price: number;
  productCode: string;
  images: string[];
  headboardHeight?: number;
  bedWidth?: number;
  bedHeight?: number;
  dimensions?: number[];
  category: string;
  en: {
    name: string;
    frameMaterial?: string;
    manufacturer: string;
    avaliabilityOfBoxes?: string;
    avaliabilityOfLiftingMechanism?: string;
    avaliability: string;
    warranty: string;
    additionalDescription?: string;
  };
  ua: {
    name: string;
    frameMaterial?: string;
    manufacturer: string;
    avaliabilityOfBoxes?: string;
    avaliabilityOfLiftingMechanism?: string;
    avaliability: string;
    warranty: string;
    additionalDescription?: string;
  };
}
