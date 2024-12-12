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
//category modal component props 
export interface CategoryModalProps {
    closeModal: () => void
}

//table select button props 
export interface SelectButtonProps {
    handler: (arg: string) => void,
    options: {
        key: string;
        label: JSX.Element;
        value: string;
    }[],
    text: string,
    width?: string,
}

// jodit component props
export interface JoditProps {
    content: string,
    setContent: (arg: string) => void
}