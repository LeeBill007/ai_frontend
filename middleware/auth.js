export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = true; // 判斷是否登入
    const hasPermission = false; // 判斷有無頁面權限

    if (!isLoggedIn) {
        return navigateTo('/login');
    }

    if (!hasPermission) {
        return abortNavigation({
            statusCode: 403,
            statusMessage: '無頁面權限'
        });
    }
});