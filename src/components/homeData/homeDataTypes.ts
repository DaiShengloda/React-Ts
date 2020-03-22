export interface Params {
    action: string
    data_type: number
    from_date: string
    page: number
    statistic_type: number
    to_date: string
}

export interface DataList {
    pb_fact_money: number
    pb_fact_count: number
}