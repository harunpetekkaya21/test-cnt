export interface RoomType {
    id?: number;
    name?: string;
    odaSayisi?: number;
    odaKapasitesi?: number;
    yetiskinKapasitesi?: number;
    cocukKapasitesi?: number;
    gecelikBaseFiyat?: number;
  
  }
  export interface CreateRoomTypeModel {
    name: string;
    odaSayisi: number;
    odaKapasitesi: number;
    yetiskinKapasitesi: number;
    cocukKapasitesi: number;
    gecelikBaseFiyat: number;
    refundable: boolean; // İade edilebilir mi?
    adults: (AdultPricingRefundable | AdultPricingUnRefundable)[];
  }
  
  
  // Temel fiyatlandırma modeli
  export interface AdultPricing {
    id: number;
    adjustmentType: string; // "+" | "-" | "%"
    adjustmentValue: number;
    currency: string;
    nightlyPrice: number;
  }
  
  // İade edilebilir fiyatlandırma modeli
  export interface AdultPricingRefundable extends AdultPricing {
    refundableAdjustmentType: string; // "+" | "-" | "%"
    refundableAdjustmentValue: number;
    refundablePrice: number; // Hesaplanan iade edilebilir fiyat
  }
  
  // İade edilemez fiyatlandırma modeli
  export interface AdultPricingUnRefundable extends AdultPricing {}


  