export interface ISingleProductResponse {
  name: {
    en: string;
    ua: string;
  };
  price: number;
  productCode: string;
  images: string[];
  category: string;
  additionalInfo: {
    en: {
      name: string;
      value?: string;
    };
    ua: {
      name: string;
      value?: string;
    };
  }[];
}

///////////////////////////////////////
