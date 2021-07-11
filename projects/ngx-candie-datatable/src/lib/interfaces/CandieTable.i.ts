export interface CandieTable {
    columns: CandieColumn[];
    internalPaging: boolean;
    internalSorting: boolean;
    enableSelect: boolean;
}

export interface CandieColumn {
    label: string;
    property: string;
    key?: string;
    sortable?: boolean;
    isDate?: boolean;
    dateFormat?: string;
}