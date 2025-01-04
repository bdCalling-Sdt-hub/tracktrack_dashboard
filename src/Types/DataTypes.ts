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
//event info types 
interface EventInfo {
    eventName: string;
    address: string;
}
// payment info data types 
export interface PaymentData {
    host: ContactInfo;
    user: ContactInfo;
    track?: TrackInfo;
    event?: EventInfo;
    amount: string;
    status:string,
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

// feedback data types
export interface FeedbackDataType {
    _id: string,
    user: {
        _id: string,
        name: string,
    },
    review: string,
    createdAt: string
}

// user profile field type 
export interface userProfileFieldType {
    name: string,
    phoneNumber: string,
    address: string,
    email: string
}

// change password
export interface userChangePassword {
    oldPassword: string,
    newPassword: string,
    confirmPassword: string,
}
// login field
export interface LoginFieldType {
    email: string,
    password: string,
}
export interface OtpFieldType {
    otp: string,
    email: string,
}
export interface ResetFieldType {
    newPassword: string,
    confirmPassword: string,
    email: string,
}