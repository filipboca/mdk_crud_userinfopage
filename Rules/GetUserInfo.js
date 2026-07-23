/**
 * Fetches the authenticated user's info (claims) from SAP Mobile Services and
 * shows the raw JSON in the "UserInfoNote" control on the User_Info page.
 *
 * The request goes to the app's Mobile Services endpoint, so the MDK client
 * attaches the current OAuth/IAS session token automatically — no need to
 * handle the token ourselves.
 *
 * Endpoint: the Mobile Services "User Roles / SCIM Me" endpoint (works for both
 * IAS and XSUAA). If it ever returns a non-200, the Note shows the status + body
 * so you can diagnose the path directly on screen.
 */
export default function GetUserInfo(clientAPI) {
    const logger = clientAPI.getLogger();

    const appId = clientAPI.getMobileServiceAppId();
    // SAP Mobile Services "User Roles / SCIM Me" endpoint. It is served by
    // Mobile Services (the session token is attached automatically) and works
    // the same for IAS and XSUAA auth. Returns SCIM 2.0 JSON with id, userName,
    // name, emails, roles and a detail object (Groups, given_name, ...).
    //
    // NOTE: sendRequest expects a RELATIVE path to the mobile service, NOT a
    // full URL — the client resolves the host and attaches the token itself.
    const path = "/mobileservices/application/" + appId +
        "/roleservice/application/" + appId + "/v2/Me";

    const params = {
        method: "GET",
        header: { "Accept": "application/json" }
    };

    const showText = (text) => {
        try {
            const table = clientAPI.getPageProxy().getControl("SectionedTable0");
            const section = table.getSection("SectionFormCell0");
            const note = section.getControl("UserInfoNote");
            note.setValue(text);
            note.redraw();
        } catch (e) {
            if (logger) { logger.log("GetUserInfo display error: " + String(e), "Error"); }
        }
    };

    return clientAPI.sendRequest(path, params).then(
        (res) => {
            const status = res ? res.statusCode : "?";
            let body = (res && res.content) ? res.content.toString() : "";
            let pretty;
            try {
                pretty = JSON.stringify(JSON.parse(body), null, 2);
            } catch (e) {
                pretty = body; // not JSON — show as-is
            }
            const out =
                "AppId: " + appId + "\n" +
                "GET " + path + "\n" +
                "HTTP " + status + "\n\n" +
                pretty;
            showText(out);
            return res;
        },
        (err) => {
            const out =
                "Request FAILED\n" +
                "GET " + path + "\n\n" +
                JSON.stringify(err, Object.getOwnPropertyNames(err), 2);
            showText(out);
            if (logger) { logger.log("GetUserInfo request failed: " + String(err), "Error"); }
            return Promise.reject(err);
        }
    );
}
