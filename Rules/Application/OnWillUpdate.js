/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/crud_demo_3/Actions/Application/OnWillUpdate.action').then(
        (result) => {
            if (result.data) {
                return Promise.resolve();
            } else {
                return Promise.reject('User Deferred');
            }
        },
        (failure) => Promise.reject('OnWillUpdate Failed ' + String(failure)));
}