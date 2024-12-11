import { PaymentData } from "./DataTypes";

// overview cards 
export interface OverviewPage {
    data: {
        amount: string,
        text: string,
    }
}

//payment table props 
export interface PaymentTableProps {
    data: PaymentData[];
    pagination: {
        pageSize: number;
        total: number;
        showSizeChanger: boolean;
        onChange: (page: number, pageSize?: number) => void;
    } | false;
}

// category data type 
export interface CategoryData {
    name: string,
    category_image: string,
    _id: string,
}

//  search component props 
export interface SearchComponent {
    value: string,
    setValue: (arg: string) => void
}

export interface CategoryModalProps {
    closeModal: () => void
}