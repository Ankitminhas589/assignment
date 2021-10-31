
export type UserData = {
    user_id: string;
    user_name: string;
    account_details: AccountDetailType;
}
export type AccountDetailType = {
    account_number: number;
    available_balance: number;
    limit_enabled: boolean;
    weekly_limit: number;
    weekly_spent: number;
    debit_card: DebitCardDetailType
};
export type DebitCardDetailType = {
    card_number: string;
    card_expiry: string;
    card_cvv: string;
}
