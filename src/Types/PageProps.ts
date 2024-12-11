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