import CommonService from '../index';
import { APIKeys } from '../api';

export const getADetail = (params) => {
    return CommonService.get(APIKeys.aDetail, params);
};

export const getBList = (params) => {
    return CommonService.get(APIKeys.bList, params);
};
