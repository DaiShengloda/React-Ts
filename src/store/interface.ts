export interface Global {
    user_info: UserInfo
    shop_dict: ShopDict
}

export interface UserInfo {
    active_accountant?: number
    active_admin: number
    birthday: string
    id: number
    imgurl: string
    invite_code: string
    nickname: string
    phone: string
    phone_check: number
    realname: string
    sex: number
    uuid: string
}

export interface ShopDict {
    current_shop: number
    current_shop_name: string
    shop_logo: string
}