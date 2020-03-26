import Fetch from '../../utils/fetch'

export const getGlobalparams = () => {
    return Fetch.get('/boss/api/globalparams')
}