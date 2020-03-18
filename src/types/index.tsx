// src/types/index.tsx

export interface StoreState {
    languageName: string;
    enthusiasmLevel: number;
}

export interface FetchTypes {
    get(): void;
    post(): void;
    
}