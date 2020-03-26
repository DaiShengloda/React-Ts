interface SubSystemDomain {
    login_domain: string
    center_domain: string
}

interface EnvDomain {
    REACT_APP_URL: string
    REACT_APP_SUBSYSTEM_DOMAIN: SubSystemDomain
}

// 开发环境
const ENV_DEVELOPMENT: EnvDomain = {
    REACT_APP_URL: "",
    REACT_APP_SUBSYSTEM_DOMAIN: { 
        "login_domain": "http://passporttest.senguo.me", 
        "center_domain": "http://centertest.senguo.me" 
    }
}

// 测试环境
const ENV_UAT: EnvDomain = {
    REACT_APP_URL: "http://pftest.senguo.me",
    REACT_APP_SUBSYSTEM_DOMAIN: { 
        "login_domain": "http://passporttest.senguo.me", 
        "center_domain": "http://centertest.senguo.me" 
    }
}

// 生产环境
const ENV_PRODUCTION: EnvDomain = {
    REACT_APP_URL: "https://pf.senguo.cc",
    REACT_APP_SUBSYSTEM_DOMAIN: { 
        "login_domain": "https://passport.senguo.cc", 
        "center_domain": "https://center.senguo.cc" 
    }
}

/**
 * react的env变量不支持自定义环境，不想进行eject操作。
 * 通过cross-env配置React_app_mode变量，进而通过此处获取当前环境的变量使用
 */
type EnvType = 'development' | 'production' | 'uat'
const envList: Array<EnvType> = ['development', 'production', 'uat']

const envObj: {
    [key in EnvType]: EnvDomain
} = {
    'development': ENV_DEVELOPMENT,
    'production': ENV_PRODUCTION,
    'uat': ENV_UAT
}

function calcEnv(): EnvDomain {
    const mode = process.env.REACT_APP_MODE

    if (!envList.includes(mode as any)) throw new Error('环境变量配置错误！')
    
    return envObj[(mode as EnvType)]
}

class Config {
    // 获取环境变量
    readonly env = calcEnv()
    readonly isTest = process.env.REACT_APP_MODE === 'uat'
    readonly isDevelopment = process.env.REACT_APP_MODE === 'development'
    readonly isProduction = process.env.REACT_APP_MODE === 'production'
    readonly isDebug = (this.isDevelopment || this.isTest) && true
}

export default new Config()
