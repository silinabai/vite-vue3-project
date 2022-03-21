// 设置用户信息
const setUserInfo = (
    state: any,
    // eslint-disable-next-line no-undef
    userInfo: any,
) => {
    const hasAuth = (userInfo.roleList && userInfo.roleList.length) > 0;
    state.userInfo = {
        ...userInfo,
        hasAuth,
    };
};

export { setUserInfo };
