export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    facilityName?: string;
    facilityType?: string;
    facilityCountry?: Country;
    facilityCity?: string;
    email?: string;
    phone?: string;
    status?: string;
    activity?: number;
    
}


