//payment data types 
interface ContactInfo {
    name: string;
    phoneNumber: string;
    profile_image: string;
}
//track info types 
interface TrackInfo {
    trackName: string;
    address: string;
}
// payment info data types 
export interface PaymentData {
    host: ContactInfo;
    user: ContactInfo;
    track: TrackInfo;
    amount: string;
}
// category form field type 
export interface CategoryFieldType {
    name?: string;
    category_image?: string | File;
};

// user table data types 
export interface UserDataType {
    _id: string,
    name: string,
    profile_image: string,
    email: string,
    address: string,
    authId: {
        _id: string,
        isBlocked: boolean
    },
}
// booking types 
export interface BookingTypes {
    user: {
        name: string,
        phoneNumber: string,
        profile_image: string,
    },
    host: {
        name: string,
        phoneNumber: string,
        profile_image: string,
    },
    trackSlot?: {
        slotNo: string
    },
    track?: {
        trackName: string
        address: string
    },
    eventSlot?: {
        slotNo: string
    },
    event?: {
        eventName: string
        address: string
    }
    startDateTime: string
    endDateTime: string
}
// host  data types  
export interface HostDataTypes {
    user: {
        name: string,
        email: string,
        profile_image: string,
        address: string,
        authId: {
            isBlocked: boolean
        }
    },
    totalTrack: string,
    totalEvent: string,
}
