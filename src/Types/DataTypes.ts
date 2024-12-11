//payment data types 
interface ContactInfo {
    name: string;
    phoneNumber: string;
    profile_image: string;
}

interface TrackInfo {
    trackName: string;
    address: string;
}

export interface PaymentData {
    host: ContactInfo;
    user: ContactInfo;
    track: TrackInfo;
    amount: string;
}