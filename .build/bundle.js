/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/crud_demo_3/i18n/i18n.properties"
/*!************************************************************!*\
  !*** ./build.definitions/crud_demo_3/i18n/i18n.properties ***!
  \************************************************************/
(module) {

module.exports = "Action_OK=OK\nAction_Cancel=Cancel\nAction_Yes=Yes\nAction_No=No\nAction_Now=Now\nAction_Later=Later\nAction_Generic_Message=Message\nAction_Confirmation_Title=Confirmation\nAction_Delete_Confirm_Message=Delete current entity?\nAction_Entity_Created=Entity created\nAction_Entity_Updated=Entity updated\nAction_Entity_Deleted=Entity deleted\nAction_Stream_Uploaded=Stream uploaded\nAction_Create_Failure=Create entity failure\nAction_Update_Failure=Update entity failure\nAction_Delete_Failure=Delete entity failure\nAction_UploadStream_Failure=Upload stream failure\nAction_RequiredFields_Failure=Please fill in all required fields\nAction_Draft_Edit=Draft Edit\nAction_Draft_Saved=Draft Saved\nAction_Draft_Discarded=Draft Discarded\nAction_Init_Activity=Downloading...\nAction_Init_Success=Application services initialized\nAction_Init_Failure=Failed to initialize application data service\nAction_Sync_Started=Upload in progress...\nAction_Sync_Completed=Sync completed\nAction_Sync_Failure=Sync offline data service failure\nAction_Download_Started=Download in progress...\nAction_Download_Successful=Download Successful\nAction_Close_Success=Data service closed successfully\nAction_Close_Failure=Failure closing data service\nAction_ErrorArchive_Upload_Failed=Upload failed!\nAction_ErrorArchive_View_Errors=View Errors\nAction_Log_Upload_Activity=Uploading...\nAction_Log_Upload_Started=Uploading Log Files...\nAction_Log_Upload_Completed=Logs Uploaded\nAction_Log_Uploaded=Log File Uploaded\nAction_Log_Upload_Failed_Title=Log Upload Failed\nAction_Log_Upload_Failed_Message=Uploading log file failed with error\nAction_App_Update_Checking=Checking for Updates...\nAction_App_Update_Complete=Update application complete\nAction_App_Update_Failed=Failed to update application\nAction_App_Update_Available_Title=New Version Available!\nAction_App_Update_Available_Message=A new version of the application is now ready to apply. Do you want to update to this version?\nAction_Reset_Title=Reset\nAction_Reset_Message=This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?\nAction_Menu_Sync_Changes=Sync Changes\nAction_Menu_Support=Support\nAction_Menu_Check_Updates=Check for Updates\nAction_Menu_About=About\nAction_Menu_Reset=Reset\nAction_Menu_Logout=Logout\nCustomers=Customers\nCustomer_Detail=Customer Detail\nCreate_Customer_Detail=Create Customer Detail\nUpdate_Customer_Detail=Update Customer Detail\nCreate_SalesOrderHeader=Create SalesOrderHeader\nProductCategories=ProductCategories\nProductCategory_Detail=ProductCategory Detail\nCreate_ProductCategory_Detail=Create ProductCategory Detail\nUpdate_ProductCategory_Detail=Update ProductCategory Detail\nProducts=Products\nProduct_Detail=Product Detail\nCreate_Product_Detail=Create Product Detail\nUpdate_Product_Detail=Update Product Detail\nCreate_PurchaseOrderItem=Create PurchaseOrderItem\nCreate_SalesOrderItem=Create SalesOrderItem\nProductTexts=ProductTexts\nProductText_Detail=ProductText Detail\nCreate_ProductText_Detail=Create ProductText Detail\nUpdate_ProductText_Detail=Update ProductText Detail\nPurchaseOrderHeaders=PurchaseOrderHeaders\nPurchaseOrderHeader_Detail=PurchaseOrderHeader Detail\nCreate_PurchaseOrderHeader_Detail=Create PurchaseOrderHeader Detail\nUpdate_PurchaseOrderHeader_Detail=Update PurchaseOrderHeader Detail\nPurchaseOrderItems=PurchaseOrderItems\nPurchaseOrderItem_Detail=PurchaseOrderItem Detail\nCreate_PurchaseOrderItem_Detail=Create PurchaseOrderItem Detail\nUpdate_PurchaseOrderItem_Detail=Update PurchaseOrderItem Detail\nSalesOrderHeaders=SalesOrderHeaders\nSalesOrderHeader_Detail=SalesOrderHeader Detail\nCreate_SalesOrderHeader_Detail=Create SalesOrderHeader Detail\nUpdate_SalesOrderHeader_Detail=Update SalesOrderHeader Detail\nSalesOrderItems=SalesOrderItems\nSalesOrderItem_Detail=SalesOrderItem Detail\nCreate_SalesOrderItem_Detail=Create SalesOrderItem Detail\nUpdate_SalesOrderItem_Detail=Update SalesOrderItem Detail\nStock=Stock\nStock_Detail=Stock Detail\nCreate_Stock_Detail=Create Stock Detail\nUpdate_Stock_Detail=Update Stock Detail\nSuppliers=Suppliers\nSupplier_Detail=Supplier Detail\nCreate_Supplier_Detail=Create Supplier Detail\nUpdate_Supplier_Detail=Update Supplier Detail\nCreate_Product=Create Product\nCreate_PurchaseOrderHeader=Create PurchaseOrderHeader"

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/Application/AppUpdateFailure.js"
/*!*****************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/Application/AppUpdateFailure.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/crud_demo_3/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/Application/AppUpdateSuccess.js"
/*!*****************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/Application/AppUpdateSuccess.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/crud_demo_3/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/crud_demo_3/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/Application/ClientIsMultiUserMode.js"
/*!**********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/Application/ClientIsMultiUserMode.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/Application/GetClientSupportVersions.js"
/*!*************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/Application/GetClientSupportVersions.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/Application/GetClientVersion.js"
/*!*****************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/Application/GetClientVersion.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/Application/OnWillUpdate.js"
/*!*************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/Application/OnWillUpdate.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/crud_demo_3/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      return Promise.resolve();
    } else {
      return Promise.reject('User Deferred');
    }
  }, failure => Promise.reject('OnWillUpdate Failed ' + String(failure)));
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/Application/ResetAppSettingsAndLogout.js"
/*!**************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/crud_demo_3/Actions/Application/Reset.action');
  }
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/GetUserInfo.js"
/*!************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/GetUserInfo.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetUserInfo)
/* harmony export */ });
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
function GetUserInfo(clientAPI) {
  const logger = clientAPI.getLogger();
  const appId = clientAPI.getMobileServiceAppId();
  // SAP Mobile Services "User Roles / SCIM Me" endpoint. It is served by
  // Mobile Services (the session token is attached automatically) and works
  // the same for IAS and XSUAA auth. Returns SCIM 2.0 JSON with id, userName,
  // name, emails, roles and a detail object (Groups, given_name, ...).
  //
  // NOTE: sendRequest expects a RELATIVE path to the mobile service, NOT a
  // full URL — the client resolves the host and attaches the token itself.
  const path = "/mobileservices/application/" + appId + "/roleservice/application/" + appId + "/v2/Me";
  const params = {
    method: "GET",
    header: {
      "Accept": "application/json"
    }
  };
  const showText = text => {
    try {
      const table = clientAPI.getPageProxy().getControl("SectionedTable0");
      const section = table.getSection("SectionFormCell0");
      const note = section.getControl("UserInfoNote");
      note.setValue(text);
      note.redraw();
    } catch (e) {
      if (logger) {
        logger.log("GetUserInfo display error: " + String(e), "Error");
      }
    }
  };
  return clientAPI.sendRequest(path, params).then(res => {
    const status = res ? res.statusCode : "?";
    let body = res && res.content ? res.content.toString() : "";
    let pretty;
    try {
      pretty = JSON.stringify(JSON.parse(body), null, 2);
    } catch (e) {
      pretty = body; // not JSON — show as-is
    }
    const out = "AppId: " + appId + "\n" + "GET " + path + "\n" + "HTTP " + status + "\n\n" + pretty;
    showText(out);
    return res;
  }, err => {
    const out = "Request FAILED\n" + "GET " + path + "\n\n" + JSON.stringify(err, Object.getOwnPropertyNames(err), 2);
    showText(out);
    if (logger) {
      logger.log("GetUserInfo request failed: " + String(err), "Error");
    }
    return Promise.reject(err);
  });
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/Logging/LogLevels.js"
/*!******************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/Logging/LogLevels.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/Logging/SetTraceCategories.js"
/*!***************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/Logging/SetTraceCategories.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/Logging/SetUserLogLevel.js"
/*!************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/Logging/SetUserLogLevel.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  var logger;
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    if (logger) {
      logger.log(String(exception), 'Error');
    } else {
      // eslint-disable-next-line no-console
      console.log('Error: ' + String(exception));
    }
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/Logging/ToggleLogging.js"
/*!**********************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/Logging/ToggleLogging.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  var logger;
  try {
    logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    if (logger) {
      logger.log(String(exception), 'Error');
    } else {
      // eslint-disable-next-line no-console
      console.log('Error: ' + String(exception));
    }
    return undefined;
  }
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/Logging/TraceCategories.js"
/*!************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/Logging/TraceCategories.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/Logging/UserLogSetting.js"
/*!***********************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/Logging/UserLogSetting.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/SampleService/Customers/Customers_DeleteConfirmation.js"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/SampleService/Customers/Customers_DeleteConfirmation.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/crud_demo_3/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/crud_demo_3/Actions/SampleService/Customers/Customers_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/SampleService/ProductCategories/ProductCategories_DeleteConfirmation.js"
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/SampleService/ProductCategories/ProductCategories_DeleteConfirmation.js ***!
  \*********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/crud_demo_3/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/SampleService/ProductTexts/ProductTexts_DeleteConfirmation.js"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/SampleService/ProductTexts/ProductTexts_DeleteConfirmation.js ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/crud_demo_3/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/SampleService/Products/Products_CreateEntity.js"
/*!*********************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/SampleService/Products/Products_CreateEntity.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
  return clientAPI.executeAction({
    'Name': '/crud_demo_3/Actions/SampleService/Products/Products_CreateEntity.action',
    'Properties': {
      'OnSuccess': ''
    }
  }).then(result => {
    let newEntity = JSON.parse(result.data);
    return clientAPI.executeAction({
      'Name': '/crud_demo_3/Actions/SampleService/Products/Products_UploadStream.action',
      'Properties': {
        'Target': {
          'ReadLink': newEntity['@odata.readLink']
        }
      }
    });
  });
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/SampleService/Products/Products_DeleteConfirmation.js"
/*!***************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/SampleService/Products/Products_DeleteConfirmation.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/crud_demo_3/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/crud_demo_3/Actions/SampleService/Products/Products_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DeleteConfirmation.js"
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DeleteConfirmation.js ***!
  \***************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/crud_demo_3/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/SampleService/PurchaseOrderItems/PurchaseOrderItems_DeleteConfirmation.js"
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/SampleService/PurchaseOrderItems/PurchaseOrderItems_DeleteConfirmation.js ***!
  \***********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/crud_demo_3/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/SampleService/SalesOrderHeaders/SalesOrderHeaders_DeleteConfirmation.js"
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/SampleService/SalesOrderHeaders/SalesOrderHeaders_DeleteConfirmation.js ***!
  \*********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/crud_demo_3/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/SampleService/SalesOrderItems/SalesOrderItems_DeleteConfirmation.js"
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/SampleService/SalesOrderItems/SalesOrderItems_DeleteConfirmation.js ***!
  \*****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/crud_demo_3/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/SampleService/Stock/Stock_DeleteConfirmation.js"
/*!*********************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/SampleService/Stock/Stock_DeleteConfirmation.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/crud_demo_3/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/crud_demo_3/Actions/SampleService/Stock/Stock_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/SampleService/Suppliers/Suppliers_DeleteConfirmation.js"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/SampleService/Suppliers/Suppliers_DeleteConfirmation.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/crud_demo_3/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Rules/Service/Initialize.js"
/*!*******************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Rules/Service/Initialize.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {
  // Perform pre data initialization task

  // Initialize all your Data sources
  let _SampleService = context.executeAction('/crud_demo_3/Actions/SampleService/Service/InitializeOnline.action');

  //You can add more service initialize actions here

  // The Initialize<Online|Offline>.action wires its own OnSuccess (success
  // toast) and OnFailure (failure banner) handlers. We propagate the
  // rejection so the caller of Initialize() — typically the Application's
  // OnLaunch chain — can react to a failed initialization rather than
  // proceeding as if everything were fine. Older revisions of this
  // template returned `false` from the catch, which silently swallowed
  // initialization errors (MDK-18173 review section 1.2).
  return Promise.all([_SampleService]);
}

/***/ },

/***/ "./build.definitions/crud_demo_3/Styles/Styles.css"
/*!*********************************************************!*\
  !*** ./build.definitions/crud_demo_3/Styles/Styles.css ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/api.js */ "../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/crud_demo_3/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ "./build.definitions/crud_demo_3/Styles/Styles.less"
/*!**********************************************************!*\
  !*** ./build.definitions/crud_demo_3/Styles/Styles.less ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/api.js */ "../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/crud_demo_3/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ "./build.definitions/crud_demo_3/Styles/Styles.light.css"
/*!***************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Styles/Styles.light.css ***!
  \***************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/api.js */ "../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ "./build.definitions/crud_demo_3/Styles/Styles.light.nss"
/*!***************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Styles/Styles.light.nss ***!
  \***************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/api.js */ "../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ "../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/api.js"
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/api.js ***!
  \*************************************************************************************************************************************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!********************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Users/filip/Library/Application Support/Code/User/globalStorage/sapse.vsc-extension-mdk/tools/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \********************************************************************************************************************************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/Application/About.page"
/*!********************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/Application/About.page ***!
  \********************************************************************/
(module) {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/crud_demo_3/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/crud_demo_3/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/crud_demo_3/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)","_Type":"KeyValue.Type.Item"},{"Value":"/crud_demo_3/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/crud_demo_3/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"About","PreferredCaptionSize":"Large","_Type":"Control.Type.ActionBar"}}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/Application/Support.page"
/*!**********************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/Application/Support.page ***!
  \**********************************************************************/
(module) {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/crud_demo_3/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/crud_demo_3/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/crud_demo_3/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/crud_demo_3/Actions/Application/NavToActivityLog.action","_Type":"SimplePropertyCollection.Type.Cell"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/crud_demo_3/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Settings","PreferredCaptionSize":"Small","_Type":"Control.Type.ActionBar"}}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/Application/UserActivityLog.page"
/*!******************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/Application/UserActivityLog.page ***!
  \******************************************************************************/
(module) {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/crud_demo_3/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/crud_demo_3/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/crud_demo_3/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/crud_demo_3/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/crud_demo_3/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/crud_demo_3/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/crud_demo_3/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","ActionBar":{"Caption":"Activity Log","PreferredCaptionSize":"Small","_Type":"Control.Type.ActionBar"},"OnLoaded":"/crud_demo_3/Rules/Logging/UserLogSetting.js"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/Main.page"
/*!*******************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/Main.page ***!
  \*******************************************************/
(module) {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable_SampleService","Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader_SampleService","AccessoryType":"None","UseTopPadding":true,"Caption":"Demo App"},"Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton10","Title":"User Info Page","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/crud_demo_3/Actions/Application/NavToUserInfo.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton0","Title":"Customers","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton1","Title":"Product Categories","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton2","Title":"Products","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/crud_demo_3/Actions/SampleService/Products/NavToProducts_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton3","Title":"Product Texts","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton4","Title":"Purchase Order Headers","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton5","Title":"Purchase Order Items","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton6","Title":"Sales Order Headers","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton7","Title":"Sales Order Items","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton8","Title":"Stock","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/crud_demo_3/Actions/SampleService/Stock/NavToStock_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton9","Title":"Suppliers","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_List.action"}]}]}],"_Type":"Page","_Name":"App","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"User Menu","Width":18,"Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/crud_demo_3/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"Main","PreferredCaptionSize":"Large"}}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_Create.page"
/*!*******************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_Create.page ***!
  \*******************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_Create.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_Customer_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"City","_Name":"City","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Country","_Name":"Country","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Customer ID","KeyboardType":"Number","_Name":"CustomerID","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Mode":"Date","_Name":"DateOfBirth","Caption":"Date Of Birth","_Type":"Control.Type.FormCell.DatePicker","RequiredIndicator":true},{"Caption":"Email Address","_Name":"EmailAddress","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Gender","_Name":"Gender","Segments":["Male","Female","Other","None","Unknown"],"_Type":"Control.Type.FormCell.SegmentedControl"},{"Caption":"First Name","_Name":"FirstName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"House Number","_Name":"HouseNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Last Name","_Name":"LastName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Phone Number","_Name":"PhoneNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Postal Code","_Name":"PostalCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Street","_Name":"Street","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Customers_Create"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_CreateSalesOrderHeader.page"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_CreateSalesOrderHeader.page ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_CreateSalesOrderHeader.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_SalesOrderHeader)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Mode":"Datetime","_Name":"CreatedAt","Caption":"Created At","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Currency Code","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Customer ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{CustomerID}","ReturnValue":"{CustomerID}","Target":{"EntitySet":"Customers","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"CustomerID","_Type":"Control.Type.FormCell.ListPicker","Value":"{CustomerID}"},{"Caption":"Gross Amount","KeyboardType":"Number","_Name":"GrossAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Life Cycle Status","_Name":"LifeCycleStatus","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Life Cycle Status Name","_Name":"LifeCycleStatusName","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Net Amount","KeyboardType":"Number","_Name":"NetAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Sales Order ID","KeyboardType":"Number","_Name":"SalesOrderID","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Tax Amount","KeyboardType":"Number","_Name":"TaxAmount","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Customers_CreateSalesOrderHeader"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_Detail.page"
/*!*******************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_Detail.page ***!
  \*******************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"Customers","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Edit.action","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/Customers/Customers_DetailPopover.action","Position":"Right","Caption":"More","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Customer_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{FirstName}","Subhead":"{City}","BodyText":"","Footnote":"{CustomerID}","Description":"{Country}","StatusText":"{DateOfBirth}","StatusImage":"","SubstatusImage":"","SubstatusText":"{EmailAddress}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"City","Value":"{City}","_Type":"KeyValue.Type.Item"},{"KeyName":"Country","Value":"{Country}","_Type":"KeyValue.Type.Item"},{"KeyName":"Customer ID","Value":"{CustomerID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Date Of Birth","Value":"{DateOfBirth}","_Type":"KeyValue.Type.Item"},{"KeyName":"Email Address","Value":"{EmailAddress}","_Type":"KeyValue.Type.Item"},{"KeyName":"First Name","Value":"{FirstName}","_Type":"KeyValue.Type.Item"},{"KeyName":"House Number","Value":"{HouseNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"Last Name","Value":"{LastName}","_Type":"KeyValue.Type.Item"},{"KeyName":"Phone Number","Value":"{PhoneNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"Postal Code","Value":"{PostalCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"Street","Value":"{Street}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"Address","_Type":"SectionCommon.Type.Header"},"KeyAndValues":[{"KeyName":"HouseNumber","Value":"{Address/HouseNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"Street","Value":"{Address/Street}","_Type":"KeyValue.Type.Item"},{"KeyName":"City","Value":"{Address/City}","_Type":"KeyValue.Type.Item"},{"KeyName":"Country","Value":"{Address/Country}","_Type":"KeyValue.Type.Item"},{"KeyName":"PostalCode","Value":"{Address/PostalCode}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValueAddress","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"SalesOrders","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{CurrencyCode}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{LifeCycleStatusName}","Footnote":"{CustomerID}","PreserveIconStackSpacing":false,"StatusText":"{GrossAmount}","Subhead":"{CreatedAt}","SubstatusText":"{LifeCycleStatus}","OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/SalesOrders","Service":"/crud_demo_3/Services/SampleService.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["SalesOrderHeaders"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Customers_Detail"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_Edit.page"
/*!*****************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_Edit.page ***!
  \*****************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"Customers","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_Edit.action","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_Customer_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"City","_Name":"City","Value":"{City}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Country","_Name":"Country","Value":"{Country}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Customer ID","_Name":"CustomerID","Value":"{CustomerID}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Mode":"Date","_Name":"DateOfBirth","Value":"{DateOfBirth}","Caption":"Date Of Birth","_Type":"Control.Type.FormCell.DatePicker","RequiredIndicator":true},{"Caption":"Email Address","_Name":"EmailAddress","Value":"{EmailAddress}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Gender","_Name":"Gender","Value":"{Gender}","Segments":["Male","Female","Other","None","Unknown"],"_Type":"Control.Type.FormCell.SegmentedControl"},{"Caption":"First Name","_Name":"FirstName","Value":"{FirstName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"House Number","_Name":"HouseNumber","Value":"{HouseNumber}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Last Name","_Name":"LastName","Value":"{LastName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Phone Number","_Name":"PhoneNumber","Value":"{PhoneNumber}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Postal Code","_Name":"PostalCode","Value":"{PostalCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Street","_Name":"Street","Value":"{Street}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Customers_Edit"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_List.page"
/*!*****************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_List.page ***!
  \*****************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Customers)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{Country}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Detail.action","StatusImage":"","Title":"{FirstName}","Footnote":"{CustomerID}","PreserveIconStackSpacing":false,"StatusText":"{DateOfBirth}","Subhead":"{City}","SubstatusText":"{EmailAddress}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Customers","Service":"/crud_demo_3/Services/SampleService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Customers_List"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Create.page"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Create.page ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_CheckRequiredFields_Create.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_ProductCategory_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Category","_Name":"Category","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Category Name","_Name":"CategoryName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Main Category","_Name":"MainCategory","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Main Category Name","_Name":"MainCategoryName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Number Of Products","KeyboardType":"Number","_Name":"NumberOfProducts","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"ProductCategories_Create"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Detail.page"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Detail.page ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"ProductCategories","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Edit.action","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Rules/SampleService/ProductCategories/ProductCategories_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,ProductCategory_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{CategoryName}","Subhead":"{Category}","BodyText":"","Footnote":"{MainCategoryName}","Description":"{MainCategory}","StatusText":"{NumberOfProducts}","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Category","Value":"{Category}","_Type":"KeyValue.Type.Item"},{"KeyName":"Category Name","Value":"{CategoryName}","_Type":"KeyValue.Type.Item"},{"KeyName":"Main Category","Value":"{MainCategory}","_Type":"KeyValue.Type.Item"},{"KeyName":"Main Category Name","Value":"{MainCategoryName}","_Type":"KeyValue.Type.Item"},{"KeyName":"Number Of Products","Value":"{NumberOfProducts}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ProductCategories_Detail"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Edit.page"
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Edit.page ***!
  \*********************************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"ProductCategories","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_UpdateEntity.action","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_ProductCategory_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Category","_Name":"Category","Value":"{Category}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"Category Name","_Name":"CategoryName","Value":"{CategoryName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Main Category","_Name":"MainCategory","Value":"{MainCategory}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Main Category Name","_Name":"MainCategoryName","Value":"{MainCategoryName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Number Of Products","_Name":"NumberOfProducts","Value":"{NumberOfProducts}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"ProductCategories_Edit"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_List.page"
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_List.page ***!
  \*********************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,ProductCategories)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{MainCategory}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Detail.action","StatusImage":"","Title":"{CategoryName}","Footnote":"{MainCategoryName}","PreserveIconStackSpacing":false,"StatusText":"{NumberOfProducts}","Subhead":"{Category}","SubstatusText":"","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"ProductCategories","Service":"/crud_demo_3/Services/SampleService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ProductCategories_List"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Create.page"
/*!*************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Create.page ***!
  \*************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_CheckRequiredFields_Create.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_ProductText_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"ID","KeyboardType":"Number","_Name":"ID","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Language","_Name":"Language","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Long Description","_Name":"LongDescription","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Name","_Name":"Name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","KeyboardType":"Number","_Name":"ProductID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Short Description","_Name":"ShortDescription","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"ProductTexts_Create"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Detail.page"
/*!*************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Detail.page ***!
  \*************************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"ProductTexts","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Edit.action","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Rules/SampleService/ProductTexts/ProductTexts_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,ProductText_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{Name}","Subhead":"{ID}","BodyText":"","Footnote":"{LongDescription}","Description":"{Language}","StatusText":"{ProductID}","StatusImage":"","SubstatusImage":"","SubstatusText":"{ShortDescription}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"ID","Value":"{ID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Language","Value":"{Language}","_Type":"KeyValue.Type.Item"},{"KeyName":"Long Description","Value":"{LongDescription}","_Type":"KeyValue.Type.Item"},{"KeyName":"Name","Value":"{Name}","_Type":"KeyValue.Type.Item"},{"KeyName":"Product ID","Value":"{ProductID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Short Description","Value":"{ShortDescription}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ProductTexts_Detail"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Edit.page"
/*!***********************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Edit.page ***!
  \***********************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"ProductTexts","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_UpdateEntity.action","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_ProductText_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"ID","_Name":"ID","Value":"{ID}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"Language","_Name":"Language","Value":"{Language}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Long Description","_Name":"LongDescription","Value":"{LongDescription}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Name","_Name":"Name","Value":"{Name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","_Name":"ProductID","Value":"{ProductID}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Short Description","_Name":"ShortDescription","Value":"{ShortDescription}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"ProductTexts_Edit"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_List.page"
/*!***********************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_List.page ***!
  \***********************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,ProductTexts)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{Language}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Detail.action","StatusImage":"","Title":"{Name}","Footnote":"{LongDescription}","PreserveIconStackSpacing":false,"StatusText":"{ProductID}","Subhead":"{ID}","SubstatusText":"{ShortDescription}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"ProductTexts","Service":"/crud_demo_3/Services/SampleService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ProductTexts_List"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_Create.page"
/*!*****************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_Create.page ***!
  \*****************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_Create.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_Product_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Category","_Name":"Category","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Category Name","_Name":"CategoryName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Currency Code","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Dimension Depth","KeyboardType":"Number","_Name":"DimensionDepth","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Dimension Height","KeyboardType":"Number","_Name":"DimensionHeight","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Dimension Unit","_Name":"DimensionUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Dimension Width","KeyboardType":"Number","_Name":"DimensionWidth","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Long Description","_Name":"LongDescription","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Name","_Name":"Name","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Picture Url","_Name":"PictureUrl","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Price","KeyboardType":"Number","_Name":"Price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","KeyboardType":"Number","_Name":"ProductID","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Quantity Unit","_Name":"QuantityUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Short Description","_Name":"ShortDescription","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Supplier ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{SupplierName}","ReturnValue":"{SupplierID}","Target":{"EntitySet":"Suppliers","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"SupplierID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Weight","KeyboardType":"Number","_Name":"Weight","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Weight Unit","_Name":"WeightUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"AttachmentTitle":"Picture","AttachmentAddTitle":"Browse","AttachmentActionType":["AddPhoto","TakePhoto","SelectFile"],"AllowedFileTypes":["jpg","png","gif"],"_Name":"Picture","_Type":"Control.Type.FormCell.Attachment"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Products_Create"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_CreatePurchaseOrderItem.page"
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_CreatePurchaseOrderItem.page ***!
  \**********************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_CreatePurchaseOrderItem.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_PurchaseOrderItem)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Currency Code","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Gross Amount","KeyboardType":"Number","_Name":"GrossAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item Number","KeyboardType":"Number","_Name":"ItemNumber","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Net Amount","KeyboardType":"Number","_Name":"NetAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Name}","ReturnValue":"{ProductID}","Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"ProductID","_Type":"Control.Type.FormCell.ListPicker","Value":"{ProductID}","RequiredIndicator":true},{"Caption":"Purchase Order ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PurchaseOrderID}","ReturnValue":"{PurchaseOrderID}","Target":{"EntitySet":"PurchaseOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"PurchaseOrderID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Quantity","KeyboardType":"Number","_Name":"Quantity","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Quantity Unit","_Name":"QuantityUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Tax Amount","KeyboardType":"Number","_Name":"TaxAmount","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Products_CreatePurchaseOrderItem"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_CreateSalesOrderItem.page"
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_CreateSalesOrderItem.page ***!
  \*******************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_CreateSalesOrderItem.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_SalesOrderItem)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Currency Code","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"DeliveryDate","Caption":"Delivery Date","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Gross Amount","KeyboardType":"Number","_Name":"GrossAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item Number","KeyboardType":"Number","_Name":"ItemNumber","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Net Amount","KeyboardType":"Number","_Name":"NetAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Name}","ReturnValue":"{ProductID}","Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"ProductID","_Type":"Control.Type.FormCell.ListPicker","Value":"{ProductID}","RequiredIndicator":true},{"Caption":"Quantity","KeyboardType":"Number","_Name":"Quantity","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Quantity Unit","_Name":"QuantityUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Sales Order ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{SalesOrderID}","ReturnValue":"{SalesOrderID}","Target":{"EntitySet":"SalesOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"SalesOrderID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Tax Amount","KeyboardType":"Number","_Name":"TaxAmount","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Products_CreateSalesOrderItem"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_Detail.page"
/*!*****************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_Detail.page ***!
  \*****************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"Products","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/Products/NavToProducts_Edit.action","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/Products/Products_DetailPopover.action","Position":"Right","Caption":"More","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Product_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"/crud_demo_3/Services/SampleService.service/{@odata.readLink}/Picture","HeadlineText":"{Name}","Subhead":"{Category}","BodyText":"","Footnote":"{CurrencyCode}","Description":"{CategoryName}","StatusText":"{DimensionDepth}","StatusImage":"","SubstatusImage":"","SubstatusText":"{DimensionHeight}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Category","Value":"{Category}","_Type":"KeyValue.Type.Item"},{"KeyName":"Category Name","Value":"{CategoryName}","_Type":"KeyValue.Type.Item"},{"KeyName":"Currency Code","Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"Dimension Depth","Value":"{DimensionDepth}","_Type":"KeyValue.Type.Item"},{"KeyName":"Dimension Height","Value":"{DimensionHeight}","_Type":"KeyValue.Type.Item"},{"KeyName":"Dimension Unit","Value":"{DimensionUnit}","_Type":"KeyValue.Type.Item"},{"KeyName":"Dimension Width","Value":"{DimensionWidth}","_Type":"KeyValue.Type.Item"},{"KeyName":"Long Description","Value":"{LongDescription}","_Type":"KeyValue.Type.Item"},{"KeyName":"Name","Value":"{Name}","_Type":"KeyValue.Type.Item"},{"KeyName":"Picture Url","Value":"{PictureUrl}","_Type":"KeyValue.Type.Item"},{"KeyName":"Price","Value":"{Price}","_Type":"KeyValue.Type.Item"},{"KeyName":"Product ID","Value":"{ProductID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Quantity Unit","Value":"{QuantityUnit}","_Type":"KeyValue.Type.Item"},{"KeyName":"Short Description","Value":"{ShortDescription}","_Type":"KeyValue.Type.Item"},{"KeyName":"Supplier ID","Value":"{SupplierID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Weight","Value":"{Weight}","_Type":"KeyValue.Type.Item"},{"KeyName":"Weight Unit","Value":"{WeightUnit}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"PurchaseOrderItems","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{GrossAmount}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{ProductID}","Footnote":"{ItemNumber}","PreserveIconStackSpacing":false,"StatusText":"{NetAmount}","Subhead":"{CurrencyCode}","SubstatusText":"{PurchaseOrderID}","OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/PurchaseOrderItems","Service":"/crud_demo_3/Services/SampleService.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"SalesOrderItems","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{DeliveryDate}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{ProductID}","Footnote":"{GrossAmount}","PreserveIconStackSpacing":false,"StatusText":"{ItemNumber}","Subhead":"{CurrencyCode}","SubstatusText":"{NetAmount}","OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/SalesOrderItems","Service":"/crud_demo_3/Services/SampleService.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["PurchaseOrderItems","SalesOrderItems"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Products_Detail"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_Edit.page"
/*!***************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_Edit.page ***!
  \***************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"Products","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_Edit.action","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_Product_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Category","_Name":"Category","Value":"{Category}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Category Name","_Name":"CategoryName","Value":"{CategoryName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Currency Code","_Name":"CurrencyCode","Value":"{CurrencyCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Dimension Depth","_Name":"DimensionDepth","Value":"{DimensionDepth}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Dimension Height","_Name":"DimensionHeight","Value":"{DimensionHeight}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Dimension Unit","_Name":"DimensionUnit","Value":"{DimensionUnit}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Dimension Width","_Name":"DimensionWidth","Value":"{DimensionWidth}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Long Description","_Name":"LongDescription","Value":"{LongDescription}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Name","_Name":"Name","Value":"{Name}","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Picture Url","_Name":"PictureUrl","Value":"{PictureUrl}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Price","_Name":"Price","Value":"{Price}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","_Name":"ProductID","Value":"{ProductID}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"Quantity Unit","_Name":"QuantityUnit","Value":"{QuantityUnit}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Short Description","_Name":"ShortDescription","Value":"{ShortDescription}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Supplier ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{SupplierName}","ReturnValue":"{SupplierID}","Target":{"EntitySet":"Suppliers","Service":"/crud_demo_3/Services/SampleService.service"}},"Value":"{SupplierID}","_Name":"SupplierID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Weight","_Name":"Weight","Value":"{Weight}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Weight Unit","_Name":"WeightUnit","Value":"{WeightUnit}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Products_Edit"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_List.page"
/*!***************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_List.page ***!
  \***************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/Products/NavToProducts_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Products)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{CategoryName}","AvatarStack":{"Avatars":[{"Image":"/crud_demo_3/Services/SampleService.service/{@odata.readLink}/Picture"}],"ImageIsCircular":false},"Icons":[],"OnPress":"/crud_demo_3/Actions/SampleService/Products/NavToProducts_Detail.action","StatusImage":"","Title":"{Name}","Footnote":"{CurrencyCode}","PreserveIconStackSpacing":false,"StatusText":"{DimensionDepth}","Subhead":"{Category}","SubstatusText":"{DimensionHeight}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Products_List"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Create.page"
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Create.page ***!
  \*****************************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_Create.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_PurchaseOrderHeader_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Currency Code","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Gross Amount","KeyboardType":"Number","_Name":"GrossAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Net Amount","KeyboardType":"Number","_Name":"NetAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Purchase Order ID","KeyboardType":"Number","_Name":"PurchaseOrderID","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Supplier ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{SupplierName}","ReturnValue":"{SupplierID}","Target":{"EntitySet":"Suppliers","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"SupplierID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Tax Amount","KeyboardType":"Number","_Name":"TaxAmount","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrderHeaders_Create"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_CreatePurchaseOrderItem.page"
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_CreatePurchaseOrderItem.page ***!
  \**********************************************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_CreatePurchaseOrderItem.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_PurchaseOrderItem)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Currency Code","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Gross Amount","KeyboardType":"Number","_Name":"GrossAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item Number","KeyboardType":"Number","_Name":"ItemNumber","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Net Amount","KeyboardType":"Number","_Name":"NetAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Name}","ReturnValue":"{ProductID}","Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"ProductID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Purchase Order ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PurchaseOrderID}","ReturnValue":"{PurchaseOrderID}","Target":{"EntitySet":"PurchaseOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"PurchaseOrderID","_Type":"Control.Type.FormCell.ListPicker","Value":"{PurchaseOrderID}","RequiredIndicator":true},{"Caption":"Quantity","KeyboardType":"Number","_Name":"Quantity","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Quantity Unit","_Name":"QuantityUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Tax Amount","KeyboardType":"Number","_Name":"TaxAmount","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrderHeaders_CreatePurchaseOrderItem"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Detail.page"
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Detail.page ***!
  \*****************************************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"PurchaseOrderHeaders","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Edit.action","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DetailPopover.action","Position":"Right","Caption":"More","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,PurchaseOrderHeader_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{PurchaseOrderID}","Subhead":"{CurrencyCode}","BodyText":"","Footnote":"{NetAmount}","Description":"{GrossAmount}","StatusText":"{SupplierID}","StatusImage":"","SubstatusImage":"","SubstatusText":"{TaxAmount}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Currency Code","Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"Gross Amount","Value":"{GrossAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"Net Amount","Value":"{NetAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"Purchase Order ID","Value":"{PurchaseOrderID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Supplier ID","Value":"{SupplierID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Tax Amount","Value":"{TaxAmount}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"Items","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{GrossAmount}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{ProductID}","Footnote":"{ItemNumber}","PreserveIconStackSpacing":false,"StatusText":"{NetAmount}","Subhead":"{CurrencyCode}","SubstatusText":"{PurchaseOrderID}","OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/Items","Service":"/crud_demo_3/Services/SampleService.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["PurchaseOrderItems"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrderHeaders_Detail"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Edit.page"
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Edit.page ***!
  \***************************************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"PurchaseOrderHeaders","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_Edit.action","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_PurchaseOrderHeader_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Currency Code","_Name":"CurrencyCode","Value":"{CurrencyCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Gross Amount","_Name":"GrossAmount","Value":"{GrossAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Net Amount","_Name":"NetAmount","Value":"{NetAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Purchase Order ID","_Name":"PurchaseOrderID","Value":"{PurchaseOrderID}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"Supplier ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{SupplierName}","ReturnValue":"{SupplierID}","Target":{"EntitySet":"Suppliers","Service":"/crud_demo_3/Services/SampleService.service"}},"Value":"{SupplierID}","_Name":"SupplierID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Tax Amount","_Name":"TaxAmount","Value":"{TaxAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrderHeaders_Edit"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_List.page"
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_List.page ***!
  \***************************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,PurchaseOrderHeaders)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{GrossAmount}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Detail.action","StatusImage":"","Title":"{PurchaseOrderID}","Footnote":"{NetAmount}","PreserveIconStackSpacing":false,"StatusText":"{SupplierID}","Subhead":"{CurrencyCode}","SubstatusText":"{TaxAmount}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PurchaseOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrderHeaders_List"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Create.page"
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Create.page ***!
  \*************************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CheckRequiredFields_Create.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_PurchaseOrderItem_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Currency Code","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Gross Amount","KeyboardType":"Number","_Name":"GrossAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item Number","KeyboardType":"Number","_Name":"ItemNumber","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Net Amount","KeyboardType":"Number","_Name":"NetAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Name}","ReturnValue":"{ProductID}","Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"ProductID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Purchase Order ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PurchaseOrderID}","ReturnValue":"{PurchaseOrderID}","Target":{"EntitySet":"PurchaseOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"PurchaseOrderID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Quantity","KeyboardType":"Number","_Name":"Quantity","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Quantity Unit","_Name":"QuantityUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Tax Amount","KeyboardType":"Number","_Name":"TaxAmount","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrderItems_Create"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Detail.page"
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Detail.page ***!
  \*************************************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"PurchaseOrderItems","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Edit.action","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Rules/SampleService/PurchaseOrderItems/PurchaseOrderItems_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,PurchaseOrderItem_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ProductID}","Subhead":"{CurrencyCode}","BodyText":"","Footnote":"{ItemNumber}","Description":"{GrossAmount}","StatusText":"{NetAmount}","StatusImage":"","SubstatusImage":"","SubstatusText":"{PurchaseOrderID}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Currency Code","Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"Gross Amount","Value":"{GrossAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"Item Number","Value":"{ItemNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"Net Amount","Value":"{NetAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"Product ID","Value":"{ProductID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Purchase Order ID","Value":"{PurchaseOrderID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Quantity","Value":"{Quantity}","_Type":"KeyValue.Type.Item"},{"KeyName":"Quantity Unit","Value":"{QuantityUnit}","_Type":"KeyValue.Type.Item"},{"KeyName":"Tax Amount","Value":"{TaxAmount}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrderItems_Detail"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Edit.page"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Edit.page ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"PurchaseOrderItems","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CheckRequiredFields_Edit.action","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_PurchaseOrderItem_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Currency Code","_Name":"CurrencyCode","Value":"{CurrencyCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Gross Amount","_Name":"GrossAmount","Value":"{GrossAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item Number","_Name":"ItemNumber","Value":"{ItemNumber}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"Net Amount","_Name":"NetAmount","Value":"{NetAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Name}","ReturnValue":"{ProductID}","Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service"}},"Value":"{ProductID}","_Name":"ProductID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Purchase Order ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{PurchaseOrderID}","ReturnValue":"{PurchaseOrderID}","Target":{"EntitySet":"PurchaseOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service"}},"Value":"{PurchaseOrderID}","_Name":"PurchaseOrderID","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"Quantity","_Name":"Quantity","Value":"{Quantity}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Quantity Unit","_Name":"QuantityUnit","Value":"{QuantityUnit}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Tax Amount","_Name":"TaxAmount","Value":"{TaxAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrderItems_Edit"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_List.page"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_List.page ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,PurchaseOrderItems)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{GrossAmount}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action","StatusImage":"","Title":"{ProductID}","Footnote":"{ItemNumber}","PreserveIconStackSpacing":false,"StatusText":"{NetAmount}","Subhead":"{CurrencyCode}","SubstatusText":"{PurchaseOrderID}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PurchaseOrderItems","Service":"/crud_demo_3/Services/SampleService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrderItems_List"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Create.page"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Create.page ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_Create.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_SalesOrderHeader_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Mode":"Datetime","_Name":"CreatedAt","Caption":"Created At","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Currency Code","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Customer ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{CustomerID}","ReturnValue":"{CustomerID}","Target":{"EntitySet":"Customers","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"CustomerID","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"Gross Amount","KeyboardType":"Number","_Name":"GrossAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Life Cycle Status","_Name":"LifeCycleStatus","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Life Cycle Status Name","_Name":"LifeCycleStatusName","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Net Amount","KeyboardType":"Number","_Name":"NetAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Sales Order ID","KeyboardType":"Number","_Name":"SalesOrderID","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Tax Amount","KeyboardType":"Number","_Name":"TaxAmount","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"SalesOrderHeaders_Create"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_CreateSalesOrderItem.page"
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_CreateSalesOrderItem.page ***!
  \*************************************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_CreateSalesOrderItem.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_SalesOrderItem)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Currency Code","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"DeliveryDate","Caption":"Delivery Date","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Gross Amount","KeyboardType":"Number","_Name":"GrossAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item Number","KeyboardType":"Number","_Name":"ItemNumber","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Net Amount","KeyboardType":"Number","_Name":"NetAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Name}","ReturnValue":"{ProductID}","Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"ProductID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Quantity","KeyboardType":"Number","_Name":"Quantity","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Quantity Unit","_Name":"QuantityUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Sales Order ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{SalesOrderID}","ReturnValue":"{SalesOrderID}","Target":{"EntitySet":"SalesOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"SalesOrderID","_Type":"Control.Type.FormCell.ListPicker","Value":"{SalesOrderID}","RequiredIndicator":true},{"Caption":"Tax Amount","KeyboardType":"Number","_Name":"TaxAmount","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"SalesOrderHeaders_CreateSalesOrderItem"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Detail.page"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Detail.page ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"SalesOrderHeaders","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Edit.action","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_DetailPopover.action","Position":"Right","Caption":"More","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,SalesOrderHeader_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{LifeCycleStatusName}","Subhead":"{CreatedAt}","BodyText":"","Footnote":"{CustomerID}","Description":"{CurrencyCode}","StatusText":"{GrossAmount}","StatusImage":"","SubstatusImage":"","SubstatusText":"{LifeCycleStatus}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Created At","Value":"{CreatedAt}","_Type":"KeyValue.Type.Item"},{"KeyName":"Currency Code","Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"Customer ID","Value":"{CustomerID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Gross Amount","Value":"{GrossAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"Life Cycle Status","Value":"{LifeCycleStatus}","_Type":"KeyValue.Type.Item"},{"KeyName":"Life Cycle Status Name","Value":"{LifeCycleStatusName}","_Type":"KeyValue.Type.Item"},{"KeyName":"Net Amount","Value":"{NetAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"Sales Order ID","Value":"{SalesOrderID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Tax Amount","Value":"{TaxAmount}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"Items","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{DeliveryDate}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{ProductID}","Footnote":"{GrossAmount}","PreserveIconStackSpacing":false,"StatusText":"{ItemNumber}","Subhead":"{CurrencyCode}","SubstatusText":"{NetAmount}","OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/Items","Service":"/crud_demo_3/Services/SampleService.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["SalesOrderItems"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrderHeaders_Detail"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Edit.page"
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Edit.page ***!
  \*********************************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"SalesOrderHeaders","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_Edit.action","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_SalesOrderHeader_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Mode":"Datetime","_Name":"CreatedAt","Value":"{CreatedAt}","Caption":"Created At","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Currency Code","_Name":"CurrencyCode","Value":"{CurrencyCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Customer ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{CustomerID}","ReturnValue":"{CustomerID}","Target":{"EntitySet":"Customers","Service":"/crud_demo_3/Services/SampleService.service"}},"Value":"{CustomerID}","_Name":"CustomerID","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"Gross Amount","_Name":"GrossAmount","Value":"{GrossAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Life Cycle Status","_Name":"LifeCycleStatus","Value":"{LifeCycleStatus}","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Life Cycle Status Name","_Name":"LifeCycleStatusName","Value":"{LifeCycleStatusName}","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Net Amount","_Name":"NetAmount","Value":"{NetAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Sales Order ID","_Name":"SalesOrderID","Value":"{SalesOrderID}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"Tax Amount","_Name":"TaxAmount","Value":"{TaxAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"SalesOrderHeaders_Edit"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_List.page"
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_List.page ***!
  \*********************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,SalesOrderHeaders)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{CurrencyCode}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action","StatusImage":"","Title":"{LifeCycleStatusName}","Footnote":"{CustomerID}","PreserveIconStackSpacing":false,"StatusText":"{GrossAmount}","Subhead":"{CreatedAt}","SubstatusText":"{LifeCycleStatus}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"SalesOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrderHeaders_List"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Create.page"
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Create.page ***!
  \*******************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CheckRequiredFields_Create.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_SalesOrderItem_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Currency Code","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"DeliveryDate","Caption":"Delivery Date","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Gross Amount","KeyboardType":"Number","_Name":"GrossAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item Number","KeyboardType":"Number","_Name":"ItemNumber","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Net Amount","KeyboardType":"Number","_Name":"NetAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Name}","ReturnValue":"{ProductID}","Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"ProductID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Quantity","KeyboardType":"Number","_Name":"Quantity","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Quantity Unit","_Name":"QuantityUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Sales Order ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{SalesOrderID}","ReturnValue":"{SalesOrderID}","Target":{"EntitySet":"SalesOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"SalesOrderID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Tax Amount","KeyboardType":"Number","_Name":"TaxAmount","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"SalesOrderItems_Create"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Detail.page"
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Detail.page ***!
  \*******************************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"SalesOrderItems","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Edit.action","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Rules/SampleService/SalesOrderItems/SalesOrderItems_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,SalesOrderItem_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ProductID}","Subhead":"{CurrencyCode}","BodyText":"","Footnote":"{GrossAmount}","Description":"{DeliveryDate}","StatusText":"{ItemNumber}","StatusImage":"","SubstatusImage":"","SubstatusText":"{NetAmount}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Currency Code","Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"Delivery Date","Value":"{DeliveryDate}","_Type":"KeyValue.Type.Item"},{"KeyName":"Gross Amount","Value":"{GrossAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"Item Number","Value":"{ItemNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"Net Amount","Value":"{NetAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"Product ID","Value":"{ProductID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Quantity","Value":"{Quantity}","_Type":"KeyValue.Type.Item"},{"KeyName":"Quantity Unit","Value":"{QuantityUnit}","_Type":"KeyValue.Type.Item"},{"KeyName":"Sales Order ID","Value":"{SalesOrderID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Tax Amount","Value":"{TaxAmount}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrderItems_Detail"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Edit.page"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Edit.page ***!
  \*****************************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"SalesOrderItems","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CheckRequiredFields_Edit.action","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_SalesOrderItem_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Currency Code","_Name":"CurrencyCode","Value":"{CurrencyCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"DeliveryDate","Value":"{DeliveryDate}","Caption":"Delivery Date","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"Gross Amount","_Name":"GrossAmount","Value":"{GrossAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Item Number","_Name":"ItemNumber","Value":"{ItemNumber}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"Net Amount","_Name":"NetAmount","Value":"{NetAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Name}","ReturnValue":"{ProductID}","Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service"}},"Value":"{ProductID}","_Name":"ProductID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Quantity","_Name":"Quantity","Value":"{Quantity}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Quantity Unit","_Name":"QuantityUnit","Value":"{QuantityUnit}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Sales Order ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{SalesOrderID}","ReturnValue":"{SalesOrderID}","Target":{"EntitySet":"SalesOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service"}},"Value":"{SalesOrderID}","_Name":"SalesOrderID","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"Tax Amount","_Name":"TaxAmount","Value":"{TaxAmount}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"SalesOrderItems_Edit"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_List.page"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_List.page ***!
  \*****************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,SalesOrderItems)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{DeliveryDate}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Detail.action","StatusImage":"","Title":"{ProductID}","Footnote":"{GrossAmount}","PreserveIconStackSpacing":false,"StatusText":"{ItemNumber}","Subhead":"{CurrencyCode}","SubstatusText":"{NetAmount}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"SalesOrderItems","Service":"/crud_demo_3/Services/SampleService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrderItems_List"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Stock/Stock_Create.page"
/*!***********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Stock/Stock_Create.page ***!
  \***********************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/Stock/Stock_CheckRequiredFields_Create.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_Stock_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Lot Size","KeyboardType":"Number","_Name":"LotSize","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Min Stock","KeyboardType":"Number","_Name":"MinStock","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Name}","ReturnValue":"{ProductID}","Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"ProductID","_Type":"Control.Type.FormCell.ListPicker","RequiredIndicator":true},{"Caption":"Quantity","KeyboardType":"Number","_Name":"Quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"_Name":"QuantityLessMin","Caption":"Quantity Less Min","Value":false,"_Type":"Control.Type.FormCell.Switch","RequiredIndicator":true}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Stock_Create"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Stock/Stock_Detail.page"
/*!***********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Stock/Stock_Detail.page ***!
  \***********************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"Stock","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/Stock/NavToStock_Edit.action","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Rules/SampleService/Stock/Stock_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Stock_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ProductID}","Subhead":"{LotSize}","BodyText":"","Footnote":"{Quantity}","Description":"{MinStock}","StatusText":"{QuantityLessMin}","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Lot Size","Value":"{LotSize}","_Type":"KeyValue.Type.Item"},{"KeyName":"Min Stock","Value":"{MinStock}","_Type":"KeyValue.Type.Item"},{"KeyName":"Product ID","Value":"{ProductID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Quantity","Value":"{Quantity}","_Type":"KeyValue.Type.Item"},{"KeyName":"Quantity Less Min","Value":"{QuantityLessMin}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Stock_Detail"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Stock/Stock_Edit.page"
/*!*********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Stock/Stock_Edit.page ***!
  \*********************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"Stock","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/crud_demo_3/Actions/SampleService/Stock/Stock_CheckRequiredFields_Edit.action","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_Stock_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Lot Size","_Name":"LotSize","Value":"{LotSize}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Min Stock","_Name":"MinStock","Value":"{MinStock}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Name}","ReturnValue":"{ProductID}","Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service"}},"Value":"{ProductID}","_Name":"ProductID","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"Quantity","_Name":"Quantity","Value":"{Quantity}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"_Name":"QuantityLessMin","Caption":"Quantity Less Min","Value":"{QuantityLessMin}","_Type":"Control.Type.FormCell.Switch","RequiredIndicator":true}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Stock_Edit"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Stock/Stock_List.page"
/*!*********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Stock/Stock_List.page ***!
  \*********************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/Stock/NavToStock_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Stock)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{MinStock}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/crud_demo_3/Actions/SampleService/Stock/NavToStock_Detail.action","StatusImage":"","Title":"{ProductID}","Footnote":"{Quantity}","PreserveIconStackSpacing":false,"StatusText":"{QuantityLessMin}","Subhead":"{LotSize}","SubstatusText":"","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Stock","Service":"/crud_demo_3/Services/SampleService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Stock_List"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Create.page"
/*!*******************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Create.page ***!
  \*******************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_Create.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_Supplier_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"City","_Name":"City","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Country","_Name":"Country","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Email Address","_Name":"EmailAddress","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"House Number","_Name":"HouseNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Phone Number","_Name":"PhoneNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Postal Code","_Name":"PostalCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Street","_Name":"Street","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Supplier ID","KeyboardType":"Number","_Name":"SupplierID","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Supplier Name","_Name":"SupplierName","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Suppliers_Create"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_CreateProduct.page"
/*!**************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_CreateProduct.page ***!
  \**************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_CreateProduct.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_Product)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Category","_Name":"Category","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Category Name","_Name":"CategoryName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Currency Code","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Dimension Depth","KeyboardType":"Number","_Name":"DimensionDepth","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Dimension Height","KeyboardType":"Number","_Name":"DimensionHeight","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Dimension Unit","_Name":"DimensionUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Dimension Width","KeyboardType":"Number","_Name":"DimensionWidth","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Long Description","_Name":"LongDescription","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Name","_Name":"Name","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Picture Url","_Name":"PictureUrl","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Price","KeyboardType":"Number","_Name":"Price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Product ID","KeyboardType":"Number","_Name":"ProductID","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Quantity Unit","_Name":"QuantityUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Short Description","_Name":"ShortDescription","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Supplier ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{SupplierName}","ReturnValue":"{SupplierID}","Target":{"EntitySet":"Suppliers","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"SupplierID","_Type":"Control.Type.FormCell.ListPicker","Value":"{SupplierID}","RequiredIndicator":true},{"Caption":"Weight","KeyboardType":"Number","_Name":"Weight","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Weight Unit","_Name":"WeightUnit","_Type":"Control.Type.FormCell.SimpleProperty"},{"AttachmentTitle":"Picture","AttachmentAddTitle":"Browse","AttachmentActionType":["AddPhoto","TakePhoto","SelectFile"],"AllowedFileTypes":["jpg","png","gif"],"_Name":"Picture","_Type":"Control.Type.FormCell.Attachment"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Suppliers_CreateProduct"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_CreatePurchaseOrderHeader.page"
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_CreatePurchaseOrderHeader.page ***!
  \**************************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_CreatePurchaseOrderHeader.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_PurchaseOrderHeader)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Currency Code","_Name":"CurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Gross Amount","KeyboardType":"Number","_Name":"GrossAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Net Amount","KeyboardType":"Number","_Name":"NetAmount","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Purchase Order ID","KeyboardType":"Number","_Name":"PurchaseOrderID","_Type":"Control.Type.FormCell.SimpleProperty","RequiredIndicator":true},{"Caption":"Supplier ID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{SupplierName}","ReturnValue":"{SupplierID}","Target":{"EntitySet":"Suppliers","Service":"/crud_demo_3/Services/SampleService.service"}},"_Name":"SupplierID","_Type":"Control.Type.FormCell.ListPicker","Value":"{SupplierID}","RequiredIndicator":true},{"Caption":"Tax Amount","KeyboardType":"Number","_Name":"TaxAmount","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Suppliers_CreatePurchaseOrderHeader"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Detail.page"
/*!*******************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Detail.page ***!
  \*******************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"Suppliers","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Edit.action","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_DetailPopover.action","Position":"Right","Caption":"More","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Supplier_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{SupplierName}","Subhead":"{City}","BodyText":"","Footnote":"{EmailAddress}","Description":"{Country}","StatusText":"{HouseNumber}","StatusImage":"","SubstatusImage":"","SubstatusText":"{PhoneNumber}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"City","Value":"{City}","_Type":"KeyValue.Type.Item"},{"KeyName":"Country","Value":"{Country}","_Type":"KeyValue.Type.Item"},{"KeyName":"Email Address","Value":"{EmailAddress}","_Type":"KeyValue.Type.Item"},{"KeyName":"House Number","Value":"{HouseNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"Phone Number","Value":"{PhoneNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"Postal Code","Value":"{PostalCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"Street","Value":"{Street}","_Type":"KeyValue.Type.Item"},{"KeyName":"Supplier ID","Value":"{SupplierID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Supplier Name","Value":"{SupplierName}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"Address","_Type":"SectionCommon.Type.Header"},"KeyAndValues":[{"KeyName":"HouseNumber","Value":"{Address/HouseNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"Street","Value":"{Address/Street}","_Type":"KeyValue.Type.Item"},{"KeyName":"City","Value":"{Address/City}","_Type":"KeyValue.Type.Item"},{"KeyName":"Country","Value":"{Address/Country}","_Type":"KeyValue.Type.Item"},{"KeyName":"PostalCode","Value":"{Address/PostalCode}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValueAddress","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"Products","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{CategoryName}","AvatarStack":{"Avatars":[{"Image":"/crud_demo_3/Services/SampleService.service/{@odata.readLink}/Picture"}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{Name}","Footnote":"{CurrencyCode}","PreserveIconStackSpacing":false,"StatusText":"{DimensionDepth}","Subhead":"{Category}","SubstatusText":"{DimensionHeight}","OnPress":"/crud_demo_3/Actions/SampleService/Products/NavToProducts_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/Products","Service":"/crud_demo_3/Services/SampleService.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"PurchaseOrders","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{GrossAmount}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{PurchaseOrderID}","Footnote":"{NetAmount}","PreserveIconStackSpacing":false,"StatusText":"{SupplierID}","Subhead":"{CurrencyCode}","SubstatusText":"{TaxAmount}","OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/PurchaseOrders","Service":"/crud_demo_3/Services/SampleService.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["Products","PurchaseOrderHeaders"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Suppliers_Detail"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Edit.page"
/*!*****************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Edit.page ***!
  \*****************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"Suppliers","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/crud_demo_3/Actions/CloseModalPage_Cancel.action","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_UpdateEntity.action","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_Supplier_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"City","_Name":"City","Value":"{City}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Country","_Name":"Country","Value":"{Country}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Email Address","_Name":"EmailAddress","Value":"{EmailAddress}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"House Number","_Name":"HouseNumber","Value":"{HouseNumber}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Phone Number","_Name":"PhoneNumber","Value":"{PhoneNumber}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Postal Code","_Name":"PostalCode","Value":"{PostalCode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Street","_Name":"Street","Value":"{Street}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Supplier ID","_Name":"SupplierID","Value":"{SupplierID}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"Supplier Name","_Name":"SupplierName","Value":"{SupplierName}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Suppliers_Edit"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_List.page"
/*!*****************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_List.page ***!
  \*****************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Suppliers)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{Country}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Detail.action","StatusImage":"","Title":"{SupplierName}","Footnote":"{EmailAddress}","PreserveIconStackSpacing":false,"StatusText":"{HouseNumber}","Subhead":"{City}","SubstatusText":"{PhoneNumber}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Suppliers","Service":"/crud_demo_3/Services/SampleService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Suppliers_List"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Pages/User_Info.page"
/*!************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Pages/User_Info.page ***!
  \************************************************************/
(module) {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Header":{"_Type":"SectionCommon.Type.Header","_Name":"UserInfoHeader","Caption":"Authenticated user (raw JSON)","AccessoryType":"None","UseTopPadding":true},"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"RefreshButton","Title":"Refresh user info","OnPress":"/crud_demo_3/Rules/GetUserInfo.js"},{"_Type":"Control.Type.FormCell.Note","_Name":"UserInfoNote","Caption":"User Info","Value":"Loading user info…","PlaceHolder":"User info will appear here","IsEditable":false}]}]}],"_Type":"Page","_Name":"User_Info","OnLoaded":"/crud_demo_3/Rules/GetUserInfo.js","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"Back","Width":18,"Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/crud_demo_3/Actions/ClosePage.action"}],"_Name":"ActionBar0","_Type":"Control.Type.ActionBar","Caption":"User Info"}}

/***/ },

/***/ "./build.definitions/Application.app"
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
(module) {

module.exports = {"_Name":"crud_demo_3","Version":"/crud_demo_3/Globals/Application/AppDefinition_Version.global","MainPage":"/crud_demo_3/Pages/Main.page","OnLaunch":"/crud_demo_3/Rules/Service/Initialize.js","OnWillUpdate":"/crud_demo_3/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/crud_demo_3/Rules/Service/Initialize.js","Styles":"/crud_demo_3/Styles/Styles.css","Localization":"/crud_demo_3/i18n/i18n.properties","_SchemaVersion":"26.6","StyleSheets":{"Styles":{"css":"/crud_demo_3/Styles/Styles.light.css","ios":"/crud_demo_3/Styles/Styles.light.nss","android":"/crud_demo_3/Styles/Styles.light.json"}},"SDKStyles":{"ios":"/crud_demo_3/Styles/Styles.light.nss","android":"/crud_demo_3/Styles/Styles.light.json"}}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Application/AppUpdate.action"
/*!****************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Application/AppUpdate.action ***!
  \****************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/crud_demo_3/Rules/Application/AppUpdateFailure.js","OnSuccess":"/crud_demo_3/Rules/Application/AppUpdateSuccess.js"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Application/AppUpdateFailureMessage.action"
/*!******************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Application/AppUpdateFailureMessage.action ***!
  \******************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_App_Update_Failed) - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Application/AppUpdateProgressBanner.action"
/*!******************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Application/AppUpdateProgressBanner.action ***!
  \******************************************************************************************/
(module) {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"$(L,Action_App_Update_Checking)","OnSuccess":"/crud_demo_3/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Application/AppUpdateSuccessMessage.action"
/*!******************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Application/AppUpdateSuccessMessage.action ***!
  \******************************************************************************************/
(module) {

module.exports = {"Animated":true,"Duration":2,"Message":"$(L,Action_App_Update_Complete)","_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Application/Logout.action"
/*!*************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Application/Logout.action ***!
  \*************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Application/NavToAbout.action"
/*!*****************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Application/NavToAbout.action ***!
  \*****************************************************************************/
(module) {

module.exports = {"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Application/NavToActivityLog.action"
/*!***********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Application/NavToActivityLog.action ***!
  \***********************************************************************************/
(module) {

module.exports = {"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Application/NavToSupport.action"
/*!*******************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Application/NavToSupport.action ***!
  \*******************************************************************************/
(module) {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/crud_demo_3/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Application/NavToUserInfo.action"
/*!********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Application/NavToUserInfo.action ***!
  \********************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/User_Info.page","ModalPage":true}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Application/OnWillUpdate.action"
/*!*******************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Application/OnWillUpdate.action ***!
  \*******************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Message","Message":"$(L,Action_App_Update_Available_Message)","Title":"$(L,Action_App_Update_Available_Title)","OKCaption":"$(L,Action_Now)","CancelCaption":"$(L,Action_Later)","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Application/Reset.action"
/*!************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Application/Reset.action ***!
  \************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Application/ResetMessage.action"
/*!*******************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Application/ResetMessage.action ***!
  \*******************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Message","Message":"$(L,Action_Reset_Message)","Title":"$(L,Action_Reset_Title)","OKCaption":"$(L,Action_Yes)","OnOK":"/crud_demo_3/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"$(L,Action_No)"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Application/UserMenuPopover.action"
/*!**********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Application/UserMenuPopover.action ***!
  \**********************************************************************************/
(module) {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/crud_demo_3/Actions/Application/NavToSupport.action","Title":"$(L,Action_Menu_Support)","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/crud_demo_3/Actions/Application/AppUpdateProgressBanner.action","Title":"$(L,Action_Menu_Check_Updates)","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/crud_demo_3/Actions/Application/NavToAbout.action","Title":"$(L,Action_Menu_About)","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/crud_demo_3/Actions/Application/ResetMessage.action","Title":"$(L,Action_Menu_Reset)","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/crud_demo_3/Actions/Application/Logout.action","Title":"$(L,Action_Menu_Logout)","Visible":"/crud_demo_3/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/CloseModalPage_Cancel.action"
/*!****************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/CloseModalPage_Cancel.action ***!
  \****************************************************************************/
(module) {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/CloseModalPage_Complete.action"
/*!******************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/CloseModalPage_Complete.action ***!
  \******************************************************************************/
(module) {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/ClosePage.action"
/*!****************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/ClosePage.action ***!
  \****************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/CreateEntityFailureMessage.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/CreateEntityFailureMessage.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Create_Failure) - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/CreateEntitySuccessMessage.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/CreateEntitySuccessMessage.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"Animated":true,"Duration":2,"Message":"$(L,Action_Entity_Created)","IsIconHidden":true,"OnSuccess":"/crud_demo_3/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/DeleteConfirmation.action"
/*!*************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/DeleteConfirmation.action ***!
  \*************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Message","Message":"$(L,Action_Delete_Confirm_Message)","Title":"$(L,Action_Confirmation_Title)","OKCaption":"$(L,Action_OK)","CancelCaption":"$(L,Action_Cancel)","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/DeleteEntityFailureMessage.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/DeleteEntityFailureMessage.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Delete_Failure) - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/DeleteEntitySuccessMessage.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/DeleteEntitySuccessMessage.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"Animated":true,"Duration":2,"Message":"$(L,Action_Entity_Deleted)","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/crud_demo_3/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/GenericBannerMessage.action"
/*!***************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/GenericBannerMessage.action ***!
  \***************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"$(L,Action_Generic_Message)"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/GenericMessageBox.action"
/*!************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/GenericMessageBox.action ***!
  \************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"$(L,Action_Generic_Message)","OKCaption":"$(L,Action_OK)"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/GenericNavigation.action"
/*!************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/GenericNavigation.action ***!
  \************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/crud_demo_3/Pages/Main.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/GenericToastMessage.action"
/*!**************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/GenericToastMessage.action ***!
  \**************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"$(L,Action_Generic_Message)"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Logging/LogUploadFailure.action"
/*!*******************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Logging/LogUploadFailure.action ***!
  \*******************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Log_Upload_Failed_Message): {#ActionResults:UploadLog/error}","OKCaption":"$(L,Action_OK)","Title":"$(L,Action_Log_Upload_Failed_Title)","_Type":"Action.Type.Message"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Logging/LogUploadSuccessful.action"
/*!**********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Logging/LogUploadSuccessful.action ***!
  \**********************************************************************************/
(module) {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"$(L,Action_Log_Uploaded)","_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Logging/UploadLog.action"
/*!************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Logging/UploadLog.action ***!
  \************************************************************************/
(module) {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"$(L,Action_Log_Upload_Activity)","OnFailure":"/crud_demo_3/Actions/Logging/LogUploadFailure.action","OnSuccess":"/crud_demo_3/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/Logging/UploadLogProgress.action"
/*!********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/Logging/UploadLogProgress.action ***!
  \********************************************************************************/
(module) {

module.exports = {"Animated":true,"CompletionMessage":"$(L,Action_Log_Upload_Completed)","CompletionTimeout":2,"Message":"$(L,Action_Log_Upload_Started)","OnSuccess":"/crud_demo_3/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/RequiredFieldsFailureMessage.action"
/*!***********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/RequiredFieldsFailureMessage.action ***!
  \***********************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_RequiredFields_Failure)","Duration":4,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_Create.action"
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_Create.action ***!
  \*******************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/Customers/Customers_CreateEntity.action","RequiredFields":["CustomerID","DateOfBirth"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_CreateSalesOrderHeader.action"
/*!***********************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_CreateSalesOrderHeader.action ***!
  \***********************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/Customers/Customers_CreateSalesOrderHeader.action","RequiredFields":["LifeCycleStatus","LifeCycleStatusName","SalesOrderID"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_Edit.action"
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_Edit.action ***!
  \*****************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/Customers/Customers_UpdateEntity.action","RequiredFields":["DateOfBirth"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CreateEntity.action"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CreateEntity.action ***!
  \*****************************************************************************************************/
(module) {

module.exports = {"CreateLinks":[],"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"City":"#Page:Customers_Create/#Control:City/#Value","Country":"#Page:Customers_Create/#Control:Country/#Value","CustomerID":"#Page:Customers_Create/#Control:CustomerID/#Value","DateOfBirth":"#Page:Customers_Create/#Control:DateOfBirth/#Value","EmailAddress":"#Page:Customers_Create/#Control:EmailAddress/#Value","FirstName":"#Page:Customers_Create/#Control:FirstName/#Value","HouseNumber":"#Page:Customers_Create/#Control:HouseNumber/#Value","LastName":"#Page:Customers_Create/#Control:LastName/#Value","PhoneNumber":"#Page:Customers_Create/#Control:PhoneNumber/#Value","PostalCode":"#Page:Customers_Create/#Control:PostalCode/#Value","Street":"#Page:Customers_Create/#Control:Street/#Value"},"Target":{"EntitySet":"Customers","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CreateSalesOrderHeader.action"
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CreateSalesOrderHeader.action ***!
  \***************************************************************************************************************/
(module) {

module.exports = {"ParentLink":{"Property":"SalesOrders","Target":{"EntitySet":"Customers","ReadLink":"{@odata.readLink}"}},"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"CreatedAt":"#Page:Customers_CreateSalesOrderHeader/#Control:CreatedAt/#Value","CurrencyCode":"#Page:Customers_CreateSalesOrderHeader/#Control:CurrencyCode/#Value","CustomerID":"#Page:Customers_CreateSalesOrderHeader/#Control:CustomerID/#SelectedValue","GrossAmount":"#Page:Customers_CreateSalesOrderHeader/#Control:GrossAmount/#Value","LifeCycleStatus":"#Page:Customers_CreateSalesOrderHeader/#Control:LifeCycleStatus/#Value","LifeCycleStatusName":"#Page:Customers_CreateSalesOrderHeader/#Control:LifeCycleStatusName/#Value","NetAmount":"#Page:Customers_CreateSalesOrderHeader/#Control:NetAmount/#Value","SalesOrderID":"#Page:Customers_CreateSalesOrderHeader/#Control:SalesOrderID/#Value","TaxAmount":"#Page:Customers_CreateSalesOrderHeader/#Control:TaxAmount/#Value"},"Target":{"EntitySet":"SalesOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_DeleteEntity.action"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_DeleteEntity.action ***!
  \*****************************************************************************************************/
(module) {

module.exports = {"Target":{"EntitySet":"Customers","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/crud_demo_3/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_DetailPopover.action"
/*!******************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_DetailPopover.action ***!
  \******************************************************************************************************/
(module) {

module.exports = {"PopoverItems":[{"Title":"Add SalesOrderHeader","OnPress":"/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_CreateSalesOrderHeader.action"},{"Title":"Delete","OnPress":"/crud_demo_3/Rules/SampleService/Customers/Customers_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_UpdateEntity.action"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_UpdateEntity.action ***!
  \*****************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Customers","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"Properties":{"City":"#Page:Customers_Edit/#Control:City/#Value","Country":"#Page:Customers_Edit/#Control:Country/#Value","CustomerID":"#Page:Customers_Edit/#Control:CustomerID/#Value","DateOfBirth":"#Page:Customers_Edit/#Control:DateOfBirth/#Value","EmailAddress":"#Page:Customers_Edit/#Control:EmailAddress/#Value","FirstName":"#Page:Customers_Edit/#Control:FirstName/#Value","HouseNumber":"#Page:Customers_Edit/#Control:HouseNumber/#Value","LastName":"#Page:Customers_Edit/#Control:LastName/#Value","PhoneNumber":"#Page:Customers_Edit/#Control:PhoneNumber/#Value","PostalCode":"#Page:Customers_Edit/#Control:PostalCode/#Value","Street":"#Page:Customers_Edit/#Control:Street/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/crud_demo_3/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Create.action"
/*!****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Create.action ***!
  \****************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_Customers/Customers_Create.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_CreateSalesOrderHeader.action"
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_CreateSalesOrderHeader.action ***!
  \********************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_Customers/Customers_CreateSalesOrderHeader.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Detail.action"
/*!****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Detail.action ***!
  \****************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_Customers/Customers_Detail.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Edit.action"
/*!**************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Edit.action ***!
  \**************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_Customers/Customers_Edit.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_List.action"
/*!**************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_List.action ***!
  \**************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_Customers/Customers_List.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Create.action"
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Create.action ***!
  \********************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Create.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Detail.action"
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Detail.action ***!
  \********************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Detail.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Edit.action"
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Edit.action ***!
  \******************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Edit.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_List.action"
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_List.action ***!
  \******************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_List.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_CheckRequiredFields_Create.action"
/*!***********************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_CheckRequiredFields_Create.action ***!
  \***********************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_CreateEntity.action","RequiredFields":["Category"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_CreateEntity.action"
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_CreateEntity.action ***!
  \*********************************************************************************************************************/
(module) {

module.exports = {"CreateLinks":[],"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"Category":"#Page:ProductCategories_Create/#Control:Category/#Value","CategoryName":"#Page:ProductCategories_Create/#Control:CategoryName/#Value","MainCategory":"#Page:ProductCategories_Create/#Control:MainCategory/#Value","MainCategoryName":"#Page:ProductCategories_Create/#Control:MainCategoryName/#Value","NumberOfProducts":"#Page:ProductCategories_Create/#Control:NumberOfProducts/#Value"},"Target":{"EntitySet":"ProductCategories","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_DeleteEntity.action"
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_DeleteEntity.action ***!
  \*********************************************************************************************************************/
(module) {

module.exports = {"Target":{"EntitySet":"ProductCategories","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/crud_demo_3/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_UpdateEntity.action"
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_UpdateEntity.action ***!
  \*********************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"ProductCategories","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"Properties":{"Category":"#Page:ProductCategories_Edit/#Control:Category/#Value","CategoryName":"#Page:ProductCategories_Edit/#Control:CategoryName/#Value","MainCategory":"#Page:ProductCategories_Edit/#Control:MainCategory/#Value","MainCategoryName":"#Page:ProductCategories_Edit/#Control:MainCategoryName/#Value","NumberOfProducts":"#Page:ProductCategories_Edit/#Control:NumberOfProducts/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/crud_demo_3/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Create.action"
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Create.action ***!
  \**********************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Create.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Detail.action"
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Detail.action ***!
  \**********************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Detail.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Edit.action"
/*!********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Edit.action ***!
  \********************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Edit.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_List.action"
/*!********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_List.action ***!
  \********************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_List.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_CheckRequiredFields_Create.action"
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_CheckRequiredFields_Create.action ***!
  \*************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_CreateEntity.action","RequiredFields":["ID"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_CreateEntity.action"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_CreateEntity.action ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"CreateLinks":[],"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"ID":"#Page:ProductTexts_Create/#Control:ID/#Value","Language":"#Page:ProductTexts_Create/#Control:Language/#Value","LongDescription":"#Page:ProductTexts_Create/#Control:LongDescription/#Value","Name":"#Page:ProductTexts_Create/#Control:Name/#Value","ProductID":"#Page:ProductTexts_Create/#Control:ProductID/#Value","ShortDescription":"#Page:ProductTexts_Create/#Control:ShortDescription/#Value"},"Target":{"EntitySet":"ProductTexts","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_DeleteEntity.action"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_DeleteEntity.action ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"Target":{"EntitySet":"ProductTexts","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/crud_demo_3/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_UpdateEntity.action"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_UpdateEntity.action ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"ProductTexts","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"Properties":{"ID":"#Page:ProductTexts_Edit/#Control:ID/#Value","Language":"#Page:ProductTexts_Edit/#Control:Language/#Value","LongDescription":"#Page:ProductTexts_Edit/#Control:LongDescription/#Value","Name":"#Page:ProductTexts_Edit/#Control:Name/#Value","ProductID":"#Page:ProductTexts_Edit/#Control:ProductID/#Value","ShortDescription":"#Page:ProductTexts_Edit/#Control:ShortDescription/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/crud_demo_3/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_Create.action"
/*!**************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_Create.action ***!
  \**************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_Products/Products_Create.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_CreatePurchaseOrderItem.action"
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_CreatePurchaseOrderItem.action ***!
  \*******************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_Products/Products_CreatePurchaseOrderItem.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_CreateSalesOrderItem.action"
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_CreateSalesOrderItem.action ***!
  \****************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_Products/Products_CreateSalesOrderItem.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_Detail.action"
/*!**************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_Detail.action ***!
  \**************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_Products/Products_Detail.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_Edit.action"
/*!************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_Edit.action ***!
  \************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_Products/Products_Edit.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_List.action"
/*!************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_List.action ***!
  \************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_Products/Products_List.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_Create.action"
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_Create.action ***!
  \*****************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Rules/SampleService/Products/Products_CreateEntity.js","RequiredFields":["Name","ProductID","SupplierID"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_CreatePurchaseOrderItem.action"
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_CreatePurchaseOrderItem.action ***!
  \**********************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/Products/Products_CreatePurchaseOrderItem.action","RequiredFields":["ItemNumber","ProductID","PurchaseOrderID","Quantity"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_CreateSalesOrderItem.action"
/*!*******************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_CreateSalesOrderItem.action ***!
  \*******************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/Products/Products_CreateSalesOrderItem.action","RequiredFields":["ItemNumber","ProductID","Quantity","SalesOrderID"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_Edit.action"
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_Edit.action ***!
  \***************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/Products/Products_UpdateEntity.action","RequiredFields":["Name","SupplierID"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CreateEntity.action"
/*!***************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CreateEntity.action ***!
  \***************************************************************************************************/
(module) {

module.exports = {"CreateLinks":[],"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"Category":"#Page:Products_Create/#Control:Category/#Value","CategoryName":"#Page:Products_Create/#Control:CategoryName/#Value","CurrencyCode":"#Page:Products_Create/#Control:CurrencyCode/#Value","DimensionDepth":"#Page:Products_Create/#Control:DimensionDepth/#Value","DimensionHeight":"#Page:Products_Create/#Control:DimensionHeight/#Value","DimensionUnit":"#Page:Products_Create/#Control:DimensionUnit/#Value","DimensionWidth":"#Page:Products_Create/#Control:DimensionWidth/#Value","LongDescription":"#Page:Products_Create/#Control:LongDescription/#Value","Name":"#Page:Products_Create/#Control:Name/#Value","PictureUrl":"#Page:Products_Create/#Control:PictureUrl/#Value","Price":"#Page:Products_Create/#Control:Price/#Value","ProductID":"#Page:Products_Create/#Control:ProductID/#Value","QuantityUnit":"#Page:Products_Create/#Control:QuantityUnit/#Value","ShortDescription":"#Page:Products_Create/#Control:ShortDescription/#Value","SupplierID":"#Page:Products_Create/#Control:SupplierID/#SelectedValue","Weight":"#Page:Products_Create/#Control:Weight/#Value","WeightUnit":"#Page:Products_Create/#Control:WeightUnit/#Value"},"Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CreatePurchaseOrderItem.action"
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CreatePurchaseOrderItem.action ***!
  \**************************************************************************************************************/
(module) {

module.exports = {"ParentLink":{"Property":"PurchaseOrderItems","Target":{"EntitySet":"Products","ReadLink":"{@odata.readLink}"}},"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"CurrencyCode":"#Page:Products_CreatePurchaseOrderItem/#Control:CurrencyCode/#Value","GrossAmount":"#Page:Products_CreatePurchaseOrderItem/#Control:GrossAmount/#Value","ItemNumber":"#Page:Products_CreatePurchaseOrderItem/#Control:ItemNumber/#Value","NetAmount":"#Page:Products_CreatePurchaseOrderItem/#Control:NetAmount/#Value","ProductID":"#Page:Products_CreatePurchaseOrderItem/#Control:ProductID/#SelectedValue","PurchaseOrderID":"#Page:Products_CreatePurchaseOrderItem/#Control:PurchaseOrderID/#SelectedValue","Quantity":"#Page:Products_CreatePurchaseOrderItem/#Control:Quantity/#Value","QuantityUnit":"#Page:Products_CreatePurchaseOrderItem/#Control:QuantityUnit/#Value","TaxAmount":"#Page:Products_CreatePurchaseOrderItem/#Control:TaxAmount/#Value"},"Target":{"EntitySet":"PurchaseOrderItems","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CreateSalesOrderItem.action"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CreateSalesOrderItem.action ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"ParentLink":{"Property":"SalesOrderItems","Target":{"EntitySet":"Products","ReadLink":"{@odata.readLink}"}},"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"CurrencyCode":"#Page:Products_CreateSalesOrderItem/#Control:CurrencyCode/#Value","DeliveryDate":"#Page:Products_CreateSalesOrderItem/#Control:DeliveryDate/#Value","GrossAmount":"#Page:Products_CreateSalesOrderItem/#Control:GrossAmount/#Value","ItemNumber":"#Page:Products_CreateSalesOrderItem/#Control:ItemNumber/#Value","NetAmount":"#Page:Products_CreateSalesOrderItem/#Control:NetAmount/#Value","ProductID":"#Page:Products_CreateSalesOrderItem/#Control:ProductID/#SelectedValue","Quantity":"#Page:Products_CreateSalesOrderItem/#Control:Quantity/#Value","QuantityUnit":"#Page:Products_CreateSalesOrderItem/#Control:QuantityUnit/#Value","SalesOrderID":"#Page:Products_CreateSalesOrderItem/#Control:SalesOrderID/#SelectedValue","TaxAmount":"#Page:Products_CreateSalesOrderItem/#Control:TaxAmount/#Value"},"Target":{"EntitySet":"SalesOrderItems","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_DeleteEntity.action"
/*!***************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_DeleteEntity.action ***!
  \***************************************************************************************************/
(module) {

module.exports = {"Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/crud_demo_3/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_DetailPopover.action"
/*!****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_DetailPopover.action ***!
  \****************************************************************************************************/
(module) {

module.exports = {"PopoverItems":[{"Title":"Open Document","OnPress":"/crud_demo_3/Actions/SampleService/Products/Products_OpenDocument.action"},{"Title":"Add PurchaseOrderItem","OnPress":"/crud_demo_3/Actions/SampleService/Products/NavToProducts_CreatePurchaseOrderItem.action"},{"Title":"Add SalesOrderItem","OnPress":"/crud_demo_3/Actions/SampleService/Products/NavToProducts_CreateSalesOrderItem.action"},{"Title":"Delete","OnPress":"/crud_demo_3/Rules/SampleService/Products/Products_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_OpenDocument.action"
/*!***************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_OpenDocument.action ***!
  \***************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.OpenDocument","Path":"/crud_demo_3/Services/SampleService.service/{@odata.readLink}/Picture","MimeType":"image/jpeg"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_UpdateEntity.action"
/*!***************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_UpdateEntity.action ***!
  \***************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"Properties":{"Category":"#Page:Products_Edit/#Control:Category/#Value","CategoryName":"#Page:Products_Edit/#Control:CategoryName/#Value","CurrencyCode":"#Page:Products_Edit/#Control:CurrencyCode/#Value","DimensionDepth":"#Page:Products_Edit/#Control:DimensionDepth/#Value","DimensionHeight":"#Page:Products_Edit/#Control:DimensionHeight/#Value","DimensionUnit":"#Page:Products_Edit/#Control:DimensionUnit/#Value","DimensionWidth":"#Page:Products_Edit/#Control:DimensionWidth/#Value","LongDescription":"#Page:Products_Edit/#Control:LongDescription/#Value","Name":"#Page:Products_Edit/#Control:Name/#Value","PictureUrl":"#Page:Products_Edit/#Control:PictureUrl/#Value","Price":"#Page:Products_Edit/#Control:Price/#Value","ProductID":"#Page:Products_Edit/#Control:ProductID/#Value","QuantityUnit":"#Page:Products_Edit/#Control:QuantityUnit/#Value","ShortDescription":"#Page:Products_Edit/#Control:ShortDescription/#Value","SupplierID":"#Page:Products_Edit/#Control:SupplierID/#SelectedValue","Weight":"#Page:Products_Edit/#Control:Weight/#Value","WeightUnit":"#Page:Products_Edit/#Control:WeightUnit/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/crud_demo_3/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_UploadStream.action"
/*!***************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_UploadStream.action ***!
  \***************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.UploadStream","Target":{"Service":"/crud_demo_3/Services/SampleService.service","EntitySet":"Products","ReadLink":"{@odata.readLink}"},"Properties":{"Picture":"#Control:Picture/#Value"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"uploadstream"},"OnSuccess":"/crud_demo_3/Actions/UploadStreamSuccessMessage.action","OnFailure":"/crud_demo_3/Actions/UploadStreamFailureMessage.action"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Create.action"
/*!**************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Create.action ***!
  \**************************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Create.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_CreatePurchaseOrderItem.action"
/*!*******************************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_CreatePurchaseOrderItem.action ***!
  \*******************************************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_CreatePurchaseOrderItem.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Detail.action"
/*!**************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Detail.action ***!
  \**************************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Detail.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Edit.action"
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Edit.action ***!
  \************************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Edit.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_List.action"
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_List.action ***!
  \************************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_List.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_Create.action"
/*!*****************************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_Create.action ***!
  \*****************************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CreateEntity.action","RequiredFields":["PurchaseOrderID","SupplierID"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_CreatePurchaseOrderItem.action"
/*!**********************************************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_CreatePurchaseOrderItem.action ***!
  \**********************************************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CreatePurchaseOrderItem.action","RequiredFields":["ItemNumber","ProductID","PurchaseOrderID","Quantity"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_Edit.action"
/*!***************************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_Edit.action ***!
  \***************************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_UpdateEntity.action","RequiredFields":["SupplierID"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CreateEntity.action"
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CreateEntity.action ***!
  \***************************************************************************************************************************/
(module) {

module.exports = {"CreateLinks":[],"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"CurrencyCode":"#Page:PurchaseOrderHeaders_Create/#Control:CurrencyCode/#Value","GrossAmount":"#Page:PurchaseOrderHeaders_Create/#Control:GrossAmount/#Value","NetAmount":"#Page:PurchaseOrderHeaders_Create/#Control:NetAmount/#Value","PurchaseOrderID":"#Page:PurchaseOrderHeaders_Create/#Control:PurchaseOrderID/#Value","SupplierID":"#Page:PurchaseOrderHeaders_Create/#Control:SupplierID/#SelectedValue","TaxAmount":"#Page:PurchaseOrderHeaders_Create/#Control:TaxAmount/#Value"},"Target":{"EntitySet":"PurchaseOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CreatePurchaseOrderItem.action"
/*!**************************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CreatePurchaseOrderItem.action ***!
  \**************************************************************************************************************************************/
(module) {

module.exports = {"ParentLink":{"Property":"Items","Target":{"EntitySet":"PurchaseOrderHeaders","ReadLink":"{@odata.readLink}"}},"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"CurrencyCode":"#Page:PurchaseOrderHeaders_CreatePurchaseOrderItem/#Control:CurrencyCode/#Value","GrossAmount":"#Page:PurchaseOrderHeaders_CreatePurchaseOrderItem/#Control:GrossAmount/#Value","ItemNumber":"#Page:PurchaseOrderHeaders_CreatePurchaseOrderItem/#Control:ItemNumber/#Value","NetAmount":"#Page:PurchaseOrderHeaders_CreatePurchaseOrderItem/#Control:NetAmount/#Value","ProductID":"#Page:PurchaseOrderHeaders_CreatePurchaseOrderItem/#Control:ProductID/#SelectedValue","PurchaseOrderID":"#Page:PurchaseOrderHeaders_CreatePurchaseOrderItem/#Control:PurchaseOrderID/#SelectedValue","Quantity":"#Page:PurchaseOrderHeaders_CreatePurchaseOrderItem/#Control:Quantity/#Value","QuantityUnit":"#Page:PurchaseOrderHeaders_CreatePurchaseOrderItem/#Control:QuantityUnit/#Value","TaxAmount":"#Page:PurchaseOrderHeaders_CreatePurchaseOrderItem/#Control:TaxAmount/#Value"},"Target":{"EntitySet":"PurchaseOrderItems","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DeleteEntity.action"
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DeleteEntity.action ***!
  \***************************************************************************************************************************/
(module) {

module.exports = {"Target":{"EntitySet":"PurchaseOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/crud_demo_3/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DetailPopover.action"
/*!****************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DetailPopover.action ***!
  \****************************************************************************************************************************/
(module) {

module.exports = {"PopoverItems":[{"Title":"Add PurchaseOrderItem","OnPress":"/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_CreatePurchaseOrderItem.action"},{"Title":"Delete","OnPress":"/crud_demo_3/Rules/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_UpdateEntity.action"
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_UpdateEntity.action ***!
  \***************************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PurchaseOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"Properties":{"CurrencyCode":"#Page:PurchaseOrderHeaders_Edit/#Control:CurrencyCode/#Value","GrossAmount":"#Page:PurchaseOrderHeaders_Edit/#Control:GrossAmount/#Value","NetAmount":"#Page:PurchaseOrderHeaders_Edit/#Control:NetAmount/#Value","PurchaseOrderID":"#Page:PurchaseOrderHeaders_Edit/#Control:PurchaseOrderID/#Value","SupplierID":"#Page:PurchaseOrderHeaders_Edit/#Control:SupplierID/#SelectedValue","TaxAmount":"#Page:PurchaseOrderHeaders_Edit/#Control:TaxAmount/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/crud_demo_3/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Create.action"
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Create.action ***!
  \**********************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Create.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action"
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action ***!
  \**********************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Detail.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Edit.action"
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Edit.action ***!
  \********************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Edit.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_List.action"
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_List.action ***!
  \********************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_List.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CheckRequiredFields_Create.action"
/*!*************************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CheckRequiredFields_Create.action ***!
  \*************************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CreateEntity.action","RequiredFields":["ItemNumber","ProductID","PurchaseOrderID","Quantity"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CheckRequiredFields_Edit.action"
/*!***********************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CheckRequiredFields_Edit.action ***!
  \***********************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_UpdateEntity.action","RequiredFields":["ProductID","Quantity"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CreateEntity.action"
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CreateEntity.action ***!
  \***********************************************************************************************************************/
(module) {

module.exports = {"CreateLinks":[],"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"CurrencyCode":"#Page:PurchaseOrderItems_Create/#Control:CurrencyCode/#Value","GrossAmount":"#Page:PurchaseOrderItems_Create/#Control:GrossAmount/#Value","ItemNumber":"#Page:PurchaseOrderItems_Create/#Control:ItemNumber/#Value","NetAmount":"#Page:PurchaseOrderItems_Create/#Control:NetAmount/#Value","ProductID":"#Page:PurchaseOrderItems_Create/#Control:ProductID/#SelectedValue","PurchaseOrderID":"#Page:PurchaseOrderItems_Create/#Control:PurchaseOrderID/#SelectedValue","Quantity":"#Page:PurchaseOrderItems_Create/#Control:Quantity/#Value","QuantityUnit":"#Page:PurchaseOrderItems_Create/#Control:QuantityUnit/#Value","TaxAmount":"#Page:PurchaseOrderItems_Create/#Control:TaxAmount/#Value"},"Target":{"EntitySet":"PurchaseOrderItems","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_DeleteEntity.action"
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_DeleteEntity.action ***!
  \***********************************************************************************************************************/
(module) {

module.exports = {"Target":{"EntitySet":"PurchaseOrderItems","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/crud_demo_3/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_UpdateEntity.action"
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_UpdateEntity.action ***!
  \***********************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"PurchaseOrderItems","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"Properties":{"CurrencyCode":"#Page:PurchaseOrderItems_Edit/#Control:CurrencyCode/#Value","GrossAmount":"#Page:PurchaseOrderItems_Edit/#Control:GrossAmount/#Value","ItemNumber":"#Page:PurchaseOrderItems_Edit/#Control:ItemNumber/#Value","NetAmount":"#Page:PurchaseOrderItems_Edit/#Control:NetAmount/#Value","ProductID":"#Page:PurchaseOrderItems_Edit/#Control:ProductID/#SelectedValue","PurchaseOrderID":"#Page:PurchaseOrderItems_Edit/#Control:PurchaseOrderID/#SelectedValue","Quantity":"#Page:PurchaseOrderItems_Edit/#Control:Quantity/#Value","QuantityUnit":"#Page:PurchaseOrderItems_Edit/#Control:QuantityUnit/#Value","TaxAmount":"#Page:PurchaseOrderItems_Edit/#Control:TaxAmount/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/crud_demo_3/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Create.action"
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Create.action ***!
  \********************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Create.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_CreateSalesOrderItem.action"
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_CreateSalesOrderItem.action ***!
  \**********************************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_CreateSalesOrderItem.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action"
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action ***!
  \********************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Detail.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Edit.action"
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Edit.action ***!
  \******************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Edit.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_List.action"
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_List.action ***!
  \******************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_List.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_Create.action"
/*!***********************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_Create.action ***!
  \***********************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CreateEntity.action","RequiredFields":["LifeCycleStatus","LifeCycleStatusName","SalesOrderID"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_CreateSalesOrderItem.action"
/*!*************************************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_CreateSalesOrderItem.action ***!
  \*************************************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CreateSalesOrderItem.action","RequiredFields":["ItemNumber","ProductID","Quantity","SalesOrderID"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_Edit.action"
/*!*********************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_Edit.action ***!
  \*********************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_UpdateEntity.action","RequiredFields":["LifeCycleStatus","LifeCycleStatusName"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CreateEntity.action"
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CreateEntity.action ***!
  \*********************************************************************************************************************/
(module) {

module.exports = {"CreateLinks":[],"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"CreatedAt":"#Page:SalesOrderHeaders_Create/#Control:CreatedAt/#Value","CurrencyCode":"#Page:SalesOrderHeaders_Create/#Control:CurrencyCode/#Value","CustomerID":"#Page:SalesOrderHeaders_Create/#Control:CustomerID/#SelectedValue","GrossAmount":"#Page:SalesOrderHeaders_Create/#Control:GrossAmount/#Value","LifeCycleStatus":"#Page:SalesOrderHeaders_Create/#Control:LifeCycleStatus/#Value","LifeCycleStatusName":"#Page:SalesOrderHeaders_Create/#Control:LifeCycleStatusName/#Value","NetAmount":"#Page:SalesOrderHeaders_Create/#Control:NetAmount/#Value","SalesOrderID":"#Page:SalesOrderHeaders_Create/#Control:SalesOrderID/#Value","TaxAmount":"#Page:SalesOrderHeaders_Create/#Control:TaxAmount/#Value"},"Target":{"EntitySet":"SalesOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CreateSalesOrderItem.action"
/*!*****************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CreateSalesOrderItem.action ***!
  \*****************************************************************************************************************************/
(module) {

module.exports = {"ParentLink":{"Property":"Items","Target":{"EntitySet":"SalesOrderHeaders","ReadLink":"{@odata.readLink}"}},"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"CurrencyCode":"#Page:SalesOrderHeaders_CreateSalesOrderItem/#Control:CurrencyCode/#Value","DeliveryDate":"#Page:SalesOrderHeaders_CreateSalesOrderItem/#Control:DeliveryDate/#Value","GrossAmount":"#Page:SalesOrderHeaders_CreateSalesOrderItem/#Control:GrossAmount/#Value","ItemNumber":"#Page:SalesOrderHeaders_CreateSalesOrderItem/#Control:ItemNumber/#Value","NetAmount":"#Page:SalesOrderHeaders_CreateSalesOrderItem/#Control:NetAmount/#Value","ProductID":"#Page:SalesOrderHeaders_CreateSalesOrderItem/#Control:ProductID/#SelectedValue","Quantity":"#Page:SalesOrderHeaders_CreateSalesOrderItem/#Control:Quantity/#Value","QuantityUnit":"#Page:SalesOrderHeaders_CreateSalesOrderItem/#Control:QuantityUnit/#Value","SalesOrderID":"#Page:SalesOrderHeaders_CreateSalesOrderItem/#Control:SalesOrderID/#SelectedValue","TaxAmount":"#Page:SalesOrderHeaders_CreateSalesOrderItem/#Control:TaxAmount/#Value"},"Target":{"EntitySet":"SalesOrderItems","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_DeleteEntity.action"
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_DeleteEntity.action ***!
  \*********************************************************************************************************************/
(module) {

module.exports = {"Target":{"EntitySet":"SalesOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/crud_demo_3/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_DetailPopover.action"
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_DetailPopover.action ***!
  \**********************************************************************************************************************/
(module) {

module.exports = {"PopoverItems":[{"Title":"Add SalesOrderItem","OnPress":"/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_CreateSalesOrderItem.action"},{"Title":"Delete","OnPress":"/crud_demo_3/Rules/SampleService/SalesOrderHeaders/SalesOrderHeaders_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_UpdateEntity.action"
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_UpdateEntity.action ***!
  \*********************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"SalesOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"Properties":{"CreatedAt":"#Page:SalesOrderHeaders_Edit/#Control:CreatedAt/#Value","CurrencyCode":"#Page:SalesOrderHeaders_Edit/#Control:CurrencyCode/#Value","CustomerID":"#Page:SalesOrderHeaders_Edit/#Control:CustomerID/#SelectedValue","GrossAmount":"#Page:SalesOrderHeaders_Edit/#Control:GrossAmount/#Value","LifeCycleStatus":"#Page:SalesOrderHeaders_Edit/#Control:LifeCycleStatus/#Value","LifeCycleStatusName":"#Page:SalesOrderHeaders_Edit/#Control:LifeCycleStatusName/#Value","NetAmount":"#Page:SalesOrderHeaders_Edit/#Control:NetAmount/#Value","SalesOrderID":"#Page:SalesOrderHeaders_Edit/#Control:SalesOrderID/#Value","TaxAmount":"#Page:SalesOrderHeaders_Edit/#Control:TaxAmount/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/crud_demo_3/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Create.action"
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Create.action ***!
  \****************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Create.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Detail.action"
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Detail.action ***!
  \****************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Detail.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Edit.action"
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Edit.action ***!
  \**************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Edit.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_List.action"
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_List.action ***!
  \**************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_List.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CheckRequiredFields_Create.action"
/*!*******************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CheckRequiredFields_Create.action ***!
  \*******************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CreateEntity.action","RequiredFields":["ItemNumber","ProductID","Quantity","SalesOrderID"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CheckRequiredFields_Edit.action"
/*!*****************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CheckRequiredFields_Edit.action ***!
  \*****************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_UpdateEntity.action","RequiredFields":["ProductID","Quantity"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CreateEntity.action"
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CreateEntity.action ***!
  \*****************************************************************************************************************/
(module) {

module.exports = {"CreateLinks":[],"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"CurrencyCode":"#Page:SalesOrderItems_Create/#Control:CurrencyCode/#Value","DeliveryDate":"#Page:SalesOrderItems_Create/#Control:DeliveryDate/#Value","GrossAmount":"#Page:SalesOrderItems_Create/#Control:GrossAmount/#Value","ItemNumber":"#Page:SalesOrderItems_Create/#Control:ItemNumber/#Value","NetAmount":"#Page:SalesOrderItems_Create/#Control:NetAmount/#Value","ProductID":"#Page:SalesOrderItems_Create/#Control:ProductID/#SelectedValue","Quantity":"#Page:SalesOrderItems_Create/#Control:Quantity/#Value","QuantityUnit":"#Page:SalesOrderItems_Create/#Control:QuantityUnit/#Value","SalesOrderID":"#Page:SalesOrderItems_Create/#Control:SalesOrderID/#SelectedValue","TaxAmount":"#Page:SalesOrderItems_Create/#Control:TaxAmount/#Value"},"Target":{"EntitySet":"SalesOrderItems","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_DeleteEntity.action"
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_DeleteEntity.action ***!
  \*****************************************************************************************************************/
(module) {

module.exports = {"Target":{"EntitySet":"SalesOrderItems","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/crud_demo_3/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_UpdateEntity.action"
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_UpdateEntity.action ***!
  \*****************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"SalesOrderItems","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"Properties":{"CurrencyCode":"#Page:SalesOrderItems_Edit/#Control:CurrencyCode/#Value","DeliveryDate":"#Page:SalesOrderItems_Edit/#Control:DeliveryDate/#Value","GrossAmount":"#Page:SalesOrderItems_Edit/#Control:GrossAmount/#Value","ItemNumber":"#Page:SalesOrderItems_Edit/#Control:ItemNumber/#Value","NetAmount":"#Page:SalesOrderItems_Edit/#Control:NetAmount/#Value","ProductID":"#Page:SalesOrderItems_Edit/#Control:ProductID/#SelectedValue","Quantity":"#Page:SalesOrderItems_Edit/#Control:Quantity/#Value","QuantityUnit":"#Page:SalesOrderItems_Edit/#Control:QuantityUnit/#Value","SalesOrderID":"#Page:SalesOrderItems_Edit/#Control:SalesOrderID/#SelectedValue","TaxAmount":"#Page:SalesOrderItems_Edit/#Control:TaxAmount/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/crud_demo_3/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Service/InitializeOnline.action"
/*!*********************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Service/InitializeOnline.action ***!
  \*********************************************************************************************/
(module) {

module.exports = {"Service":"/crud_demo_3/Services/SampleService.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnFailure":"/crud_demo_3/Actions/SampleService/Service/InitializeOnlineFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/Service/InitializeOnlineSuccessMessage.action","ActionResult":{"_Name":"init"}}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Service/InitializeOnlineFailureMessage.action"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Service/InitializeOnlineFailureMessage.action ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Init_Failure) - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Service/InitializeOnlineSuccessMessage.action"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Service/InitializeOnlineSuccessMessage.action ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ToastMessage","Message":"$(L,Action_Init_Success)","Animated":true,"Duration":3,"IsIconHidden":true,"NumberOfLines":1}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/NavToStock_Create.action"
/*!********************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Stock/NavToStock_Create.action ***!
  \********************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_Stock/Stock_Create.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/NavToStock_Detail.action"
/*!********************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Stock/NavToStock_Detail.action ***!
  \********************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_Stock/Stock_Detail.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/NavToStock_Edit.action"
/*!******************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Stock/NavToStock_Edit.action ***!
  \******************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_Stock/Stock_Edit.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/NavToStock_List.action"
/*!******************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Stock/NavToStock_List.action ***!
  \******************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_Stock/Stock_List.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_CheckRequiredFields_Create.action"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_CheckRequiredFields_Create.action ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/Stock/Stock_CreateEntity.action","RequiredFields":["ProductID","QuantityLessMin"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_CheckRequiredFields_Edit.action"
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_CheckRequiredFields_Edit.action ***!
  \*********************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/Stock/Stock_UpdateEntity.action","RequiredFields":["QuantityLessMin"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_CreateEntity.action"
/*!*********************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_CreateEntity.action ***!
  \*********************************************************************************************/
(module) {

module.exports = {"CreateLinks":[],"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"LotSize":"#Page:Stock_Create/#Control:LotSize/#Value","MinStock":"#Page:Stock_Create/#Control:MinStock/#Value","ProductID":"#Page:Stock_Create/#Control:ProductID/#SelectedValue","Quantity":"#Page:Stock_Create/#Control:Quantity/#Value","QuantityLessMin":"#Page:Stock_Create/#Control:QuantityLessMin/#Value"},"Target":{"EntitySet":"Stock","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_DeleteEntity.action"
/*!*********************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_DeleteEntity.action ***!
  \*********************************************************************************************/
(module) {

module.exports = {"Target":{"EntitySet":"Stock","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/crud_demo_3/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_UpdateEntity.action"
/*!*********************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_UpdateEntity.action ***!
  \*********************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Stock","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"Properties":{"LotSize":"#Page:Stock_Edit/#Control:LotSize/#Value","MinStock":"#Page:Stock_Edit/#Control:MinStock/#Value","ProductID":"#Page:Stock_Edit/#Control:ProductID/#SelectedValue","Quantity":"#Page:Stock_Edit/#Control:Quantity/#Value","QuantityLessMin":"#Page:Stock_Edit/#Control:QuantityLessMin/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/crud_demo_3/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Create.action"
/*!****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Create.action ***!
  \****************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Create.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_CreateProduct.action"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_CreateProduct.action ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_CreateProduct.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_CreatePurchaseOrderHeader.action"
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_CreatePurchaseOrderHeader.action ***!
  \***********************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_CreatePurchaseOrderHeader.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Detail.action"
/*!****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Detail.action ***!
  \****************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Detail.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Edit.action"
/*!**************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Edit.action ***!
  \**************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Edit.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_List.action"
/*!**************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_List.action ***!
  \**************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_List.page"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_Create.action"
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_Create.action ***!
  \*******************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreateEntity.action","RequiredFields":["SupplierID"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_CreateProduct.action"
/*!**************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_CreateProduct.action ***!
  \**************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreateProduct.action","RequiredFields":["Name","ProductID","SupplierID"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_CreatePurchaseOrderHeader.action"
/*!**************************************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_CreatePurchaseOrderHeader.action ***!
  \**************************************************************************************************************************************/
(module) {

module.exports = {"OnFailure":"/crud_demo_3/Actions/RequiredFieldsFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreatePurchaseOrderHeader.action","RequiredFields":["PurchaseOrderID","SupplierID"],"_Type":"Action.Type.CheckRequiredFields"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreateEntity.action"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreateEntity.action ***!
  \*****************************************************************************************************/
(module) {

module.exports = {"CreateLinks":[],"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"City":"#Page:Suppliers_Create/#Control:City/#Value","Country":"#Page:Suppliers_Create/#Control:Country/#Value","EmailAddress":"#Page:Suppliers_Create/#Control:EmailAddress/#Value","HouseNumber":"#Page:Suppliers_Create/#Control:HouseNumber/#Value","PhoneNumber":"#Page:Suppliers_Create/#Control:PhoneNumber/#Value","PostalCode":"#Page:Suppliers_Create/#Control:PostalCode/#Value","Street":"#Page:Suppliers_Create/#Control:Street/#Value","SupplierID":"#Page:Suppliers_Create/#Control:SupplierID/#Value","SupplierName":"#Page:Suppliers_Create/#Control:SupplierName/#Value"},"Target":{"EntitySet":"Suppliers","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreateProduct.action"
/*!******************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreateProduct.action ***!
  \******************************************************************************************************/
(module) {

module.exports = {"ParentLink":{"Property":"Products","Target":{"EntitySet":"Suppliers","ReadLink":"{@odata.readLink}"}},"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"Category":"#Page:Suppliers_CreateProduct/#Control:Category/#Value","CategoryName":"#Page:Suppliers_CreateProduct/#Control:CategoryName/#Value","CurrencyCode":"#Page:Suppliers_CreateProduct/#Control:CurrencyCode/#Value","DimensionDepth":"#Page:Suppliers_CreateProduct/#Control:DimensionDepth/#Value","DimensionHeight":"#Page:Suppliers_CreateProduct/#Control:DimensionHeight/#Value","DimensionUnit":"#Page:Suppliers_CreateProduct/#Control:DimensionUnit/#Value","DimensionWidth":"#Page:Suppliers_CreateProduct/#Control:DimensionWidth/#Value","LongDescription":"#Page:Suppliers_CreateProduct/#Control:LongDescription/#Value","Name":"#Page:Suppliers_CreateProduct/#Control:Name/#Value","PictureUrl":"#Page:Suppliers_CreateProduct/#Control:PictureUrl/#Value","Price":"#Page:Suppliers_CreateProduct/#Control:Price/#Value","ProductID":"#Page:Suppliers_CreateProduct/#Control:ProductID/#Value","QuantityUnit":"#Page:Suppliers_CreateProduct/#Control:QuantityUnit/#Value","ShortDescription":"#Page:Suppliers_CreateProduct/#Control:ShortDescription/#Value","SupplierID":"#Page:Suppliers_CreateProduct/#Control:SupplierID/#SelectedValue","Weight":"#Page:Suppliers_CreateProduct/#Control:Weight/#Value","WeightUnit":"#Page:Suppliers_CreateProduct/#Control:WeightUnit/#Value"},"Target":{"EntitySet":"Products","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreatePurchaseOrderHeader.action"
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreatePurchaseOrderHeader.action ***!
  \******************************************************************************************************************/
(module) {

module.exports = {"ParentLink":{"Property":"PurchaseOrders","Target":{"EntitySet":"Suppliers","ReadLink":"{@odata.readLink}"}},"OnFailure":"/crud_demo_3/Actions/CreateEntityFailureMessage.action","OnSuccess":"/crud_demo_3/Actions/CreateEntitySuccessMessage.action","Properties":{"CurrencyCode":"#Page:Suppliers_CreatePurchaseOrderHeader/#Control:CurrencyCode/#Value","GrossAmount":"#Page:Suppliers_CreatePurchaseOrderHeader/#Control:GrossAmount/#Value","NetAmount":"#Page:Suppliers_CreatePurchaseOrderHeader/#Control:NetAmount/#Value","PurchaseOrderID":"#Page:Suppliers_CreatePurchaseOrderHeader/#Control:PurchaseOrderID/#Value","SupplierID":"#Page:Suppliers_CreatePurchaseOrderHeader/#Control:SupplierID/#SelectedValue","TaxAmount":"#Page:Suppliers_CreatePurchaseOrderHeader/#Control:TaxAmount/#Value"},"Target":{"EntitySet":"PurchaseOrderHeaders","Service":"/crud_demo_3/Services/SampleService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_DeleteEntity.action"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_DeleteEntity.action ***!
  \*****************************************************************************************************/
(module) {

module.exports = {"Target":{"EntitySet":"Suppliers","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/crud_demo_3/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_DetailPopover.action"
/*!******************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_DetailPopover.action ***!
  \******************************************************************************************************/
(module) {

module.exports = {"PopoverItems":[{"Title":"Add Product","OnPress":"/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_CreateProduct.action"},{"Title":"Add PurchaseOrderHeader","OnPress":"/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_CreatePurchaseOrderHeader.action"},{"Title":"Delete","OnPress":"/crud_demo_3/Rules/SampleService/Suppliers/Suppliers_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_UpdateEntity.action"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_UpdateEntity.action ***!
  \*****************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Suppliers","Service":"/crud_demo_3/Services/SampleService.service","ReadLink":"{@odata.readLink}"},"Properties":{"City":"#Page:Suppliers_Edit/#Control:City/#Value","Country":"#Page:Suppliers_Edit/#Control:Country/#Value","EmailAddress":"#Page:Suppliers_Edit/#Control:EmailAddress/#Value","HouseNumber":"#Page:Suppliers_Edit/#Control:HouseNumber/#Value","PhoneNumber":"#Page:Suppliers_Edit/#Control:PhoneNumber/#Value","PostalCode":"#Page:Suppliers_Edit/#Control:PostalCode/#Value","Street":"#Page:Suppliers_Edit/#Control:Street/#Value","SupplierID":"#Page:Suppliers_Edit/#Control:SupplierID/#Value","SupplierName":"#Page:Suppliers_Edit/#Control:SupplierName/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/crud_demo_3/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/crud_demo_3/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/UpdateEntityFailureMessage.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/UpdateEntityFailureMessage.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Update_Failure) - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/UpdateEntitySuccessMessage.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/UpdateEntitySuccessMessage.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"Animated":true,"Duration":2,"Message":"$(L,Action_Entity_Updated)","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/crud_demo_3/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/UploadStreamFailureMessage.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/UploadStreamFailureMessage.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_UploadStream_Failure) - {#ActionResults:uploadstream/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Actions/UploadStreamSuccessMessage.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Actions/UploadStreamSuccessMessage.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"Animated":true,"Duration":2,"Message":"$(L,Action_Stream_Uploaded)","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/crud_demo_3/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Globals/Application/AppDefinition_Version.global"
/*!****************************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Globals/Application/AppDefinition_Version.global ***!
  \****************************************************************************************/
(module) {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Globals/Application/ApplicationName.global"
/*!**********************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Globals/Application/ApplicationName.global ***!
  \**********************************************************************************/
(module) {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Globals/Application/SupportEmail.global"
/*!*******************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Globals/Application/SupportEmail.global ***!
  \*******************************************************************************/
(module) {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Globals/Application/SupportPhone.global"
/*!*******************************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Globals/Application/SupportPhone.global ***!
  \*******************************************************************************/
(module) {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ },

/***/ "./build.definitions/crud_demo_3/Services/SampleService.service"
/*!**********************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Services/SampleService.service ***!
  \**********************************************************************/
(module) {

module.exports = {"DestinationName":"SampleService","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ },

/***/ "./build.definitions/application-index.js"
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let crud_demo_3_actions_application_appupdate_action = __webpack_require__(/*! ./crud_demo_3/Actions/Application/AppUpdate.action */ "./build.definitions/crud_demo_3/Actions/Application/AppUpdate.action")
let crud_demo_3_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/crud_demo_3/Actions/Application/AppUpdateFailureMessage.action")
let crud_demo_3_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./crud_demo_3/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/crud_demo_3/Actions/Application/AppUpdateProgressBanner.action")
let crud_demo_3_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/crud_demo_3/Actions/Application/AppUpdateSuccessMessage.action")
let crud_demo_3_actions_application_logout_action = __webpack_require__(/*! ./crud_demo_3/Actions/Application/Logout.action */ "./build.definitions/crud_demo_3/Actions/Application/Logout.action")
let crud_demo_3_actions_application_navtoabout_action = __webpack_require__(/*! ./crud_demo_3/Actions/Application/NavToAbout.action */ "./build.definitions/crud_demo_3/Actions/Application/NavToAbout.action")
let crud_demo_3_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./crud_demo_3/Actions/Application/NavToActivityLog.action */ "./build.definitions/crud_demo_3/Actions/Application/NavToActivityLog.action")
let crud_demo_3_actions_application_navtosupport_action = __webpack_require__(/*! ./crud_demo_3/Actions/Application/NavToSupport.action */ "./build.definitions/crud_demo_3/Actions/Application/NavToSupport.action")
let crud_demo_3_actions_application_navtouserinfo_action = __webpack_require__(/*! ./crud_demo_3/Actions/Application/NavToUserInfo.action */ "./build.definitions/crud_demo_3/Actions/Application/NavToUserInfo.action")
let crud_demo_3_actions_application_onwillupdate_action = __webpack_require__(/*! ./crud_demo_3/Actions/Application/OnWillUpdate.action */ "./build.definitions/crud_demo_3/Actions/Application/OnWillUpdate.action")
let crud_demo_3_actions_application_reset_action = __webpack_require__(/*! ./crud_demo_3/Actions/Application/Reset.action */ "./build.definitions/crud_demo_3/Actions/Application/Reset.action")
let crud_demo_3_actions_application_resetmessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/Application/ResetMessage.action */ "./build.definitions/crud_demo_3/Actions/Application/ResetMessage.action")
let crud_demo_3_actions_application_usermenupopover_action = __webpack_require__(/*! ./crud_demo_3/Actions/Application/UserMenuPopover.action */ "./build.definitions/crud_demo_3/Actions/Application/UserMenuPopover.action")
let crud_demo_3_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./crud_demo_3/Actions/CloseModalPage_Cancel.action */ "./build.definitions/crud_demo_3/Actions/CloseModalPage_Cancel.action")
let crud_demo_3_actions_closemodalpage_complete_action = __webpack_require__(/*! ./crud_demo_3/Actions/CloseModalPage_Complete.action */ "./build.definitions/crud_demo_3/Actions/CloseModalPage_Complete.action")
let crud_demo_3_actions_closepage_action = __webpack_require__(/*! ./crud_demo_3/Actions/ClosePage.action */ "./build.definitions/crud_demo_3/Actions/ClosePage.action")
let crud_demo_3_actions_createentityfailuremessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/CreateEntityFailureMessage.action */ "./build.definitions/crud_demo_3/Actions/CreateEntityFailureMessage.action")
let crud_demo_3_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/crud_demo_3/Actions/CreateEntitySuccessMessage.action")
let crud_demo_3_actions_deleteconfirmation_action = __webpack_require__(/*! ./crud_demo_3/Actions/DeleteConfirmation.action */ "./build.definitions/crud_demo_3/Actions/DeleteConfirmation.action")
let crud_demo_3_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/crud_demo_3/Actions/DeleteEntityFailureMessage.action")
let crud_demo_3_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/crud_demo_3/Actions/DeleteEntitySuccessMessage.action")
let crud_demo_3_actions_genericbannermessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/GenericBannerMessage.action */ "./build.definitions/crud_demo_3/Actions/GenericBannerMessage.action")
let crud_demo_3_actions_genericmessagebox_action = __webpack_require__(/*! ./crud_demo_3/Actions/GenericMessageBox.action */ "./build.definitions/crud_demo_3/Actions/GenericMessageBox.action")
let crud_demo_3_actions_genericnavigation_action = __webpack_require__(/*! ./crud_demo_3/Actions/GenericNavigation.action */ "./build.definitions/crud_demo_3/Actions/GenericNavigation.action")
let crud_demo_3_actions_generictoastmessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/GenericToastMessage.action */ "./build.definitions/crud_demo_3/Actions/GenericToastMessage.action")
let crud_demo_3_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./crud_demo_3/Actions/Logging/LogUploadFailure.action */ "./build.definitions/crud_demo_3/Actions/Logging/LogUploadFailure.action")
let crud_demo_3_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./crud_demo_3/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/crud_demo_3/Actions/Logging/LogUploadSuccessful.action")
let crud_demo_3_actions_logging_uploadlog_action = __webpack_require__(/*! ./crud_demo_3/Actions/Logging/UploadLog.action */ "./build.definitions/crud_demo_3/Actions/Logging/UploadLog.action")
let crud_demo_3_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./crud_demo_3/Actions/Logging/UploadLogProgress.action */ "./build.definitions/crud_demo_3/Actions/Logging/UploadLogProgress.action")
let crud_demo_3_actions_requiredfieldsfailuremessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/RequiredFieldsFailureMessage.action */ "./build.definitions/crud_demo_3/Actions/RequiredFieldsFailureMessage.action")
let crud_demo_3_actions_sampleservice_customers_customers_checkrequiredfields_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_Create.action")
let crud_demo_3_actions_sampleservice_customers_customers_checkrequiredfields_createsalesorderheader_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_CreateSalesOrderHeader.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_CreateSalesOrderHeader.action")
let crud_demo_3_actions_sampleservice_customers_customers_checkrequiredfields_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CheckRequiredFields_Edit.action")
let crud_demo_3_actions_sampleservice_customers_customers_createentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Customers/Customers_CreateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CreateEntity.action")
let crud_demo_3_actions_sampleservice_customers_customers_createsalesorderheader_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Customers/Customers_CreateSalesOrderHeader.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_CreateSalesOrderHeader.action")
let crud_demo_3_actions_sampleservice_customers_customers_deleteentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Customers/Customers_DeleteEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_DeleteEntity.action")
let crud_demo_3_actions_sampleservice_customers_customers_detailpopover_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Customers/Customers_DetailPopover.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_DetailPopover.action")
let crud_demo_3_actions_sampleservice_customers_customers_updateentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Customers/Customers_UpdateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/Customers_UpdateEntity.action")
let crud_demo_3_actions_sampleservice_customers_navtocustomers_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Create.action")
let crud_demo_3_actions_sampleservice_customers_navtocustomers_createsalesorderheader_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Customers/NavToCustomers_CreateSalesOrderHeader.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_CreateSalesOrderHeader.action")
let crud_demo_3_actions_sampleservice_customers_navtocustomers_detail_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Detail.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Detail.action")
let crud_demo_3_actions_sampleservice_customers_navtocustomers_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_Edit.action")
let crud_demo_3_actions_sampleservice_customers_navtocustomers_list_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Customers/NavToCustomers_List.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_List.action")
let crud_demo_3_actions_sampleservice_productcategories_navtoproductcategories_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Create.action")
let crud_demo_3_actions_sampleservice_productcategories_navtoproductcategories_detail_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Detail.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Detail.action")
let crud_demo_3_actions_sampleservice_productcategories_navtoproductcategories_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_Edit.action")
let crud_demo_3_actions_sampleservice_productcategories_navtoproductcategories_list_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_List.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/NavToProductCategories_List.action")
let crud_demo_3_actions_sampleservice_productcategories_productcategories_checkrequiredfields_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_CheckRequiredFields_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_CheckRequiredFields_Create.action")
let crud_demo_3_actions_sampleservice_productcategories_productcategories_createentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_CreateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_CreateEntity.action")
let crud_demo_3_actions_sampleservice_productcategories_productcategories_deleteentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_DeleteEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_DeleteEntity.action")
let crud_demo_3_actions_sampleservice_productcategories_productcategories_updateentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_UpdateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductCategories/ProductCategories_UpdateEntity.action")
let crud_demo_3_actions_sampleservice_products_navtoproducts_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/NavToProducts_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_Create.action")
let crud_demo_3_actions_sampleservice_products_navtoproducts_createpurchaseorderitem_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/NavToProducts_CreatePurchaseOrderItem.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_CreatePurchaseOrderItem.action")
let crud_demo_3_actions_sampleservice_products_navtoproducts_createsalesorderitem_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/NavToProducts_CreateSalesOrderItem.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_CreateSalesOrderItem.action")
let crud_demo_3_actions_sampleservice_products_navtoproducts_detail_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/NavToProducts_Detail.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_Detail.action")
let crud_demo_3_actions_sampleservice_products_navtoproducts_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/NavToProducts_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_Edit.action")
let crud_demo_3_actions_sampleservice_products_navtoproducts_list_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/NavToProducts_List.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/NavToProducts_List.action")
let crud_demo_3_actions_sampleservice_products_products_checkrequiredfields_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_Create.action")
let crud_demo_3_actions_sampleservice_products_products_checkrequiredfields_createpurchaseorderitem_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_CreatePurchaseOrderItem.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_CreatePurchaseOrderItem.action")
let crud_demo_3_actions_sampleservice_products_products_checkrequiredfields_createsalesorderitem_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_CreateSalesOrderItem.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_CreateSalesOrderItem.action")
let crud_demo_3_actions_sampleservice_products_products_checkrequiredfields_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CheckRequiredFields_Edit.action")
let crud_demo_3_actions_sampleservice_products_products_createentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/Products_CreateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CreateEntity.action")
let crud_demo_3_actions_sampleservice_products_products_createpurchaseorderitem_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/Products_CreatePurchaseOrderItem.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CreatePurchaseOrderItem.action")
let crud_demo_3_actions_sampleservice_products_products_createsalesorderitem_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/Products_CreateSalesOrderItem.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_CreateSalesOrderItem.action")
let crud_demo_3_actions_sampleservice_products_products_deleteentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/Products_DeleteEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_DeleteEntity.action")
let crud_demo_3_actions_sampleservice_products_products_detailpopover_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/Products_DetailPopover.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_DetailPopover.action")
let crud_demo_3_actions_sampleservice_products_products_opendocument_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/Products_OpenDocument.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_OpenDocument.action")
let crud_demo_3_actions_sampleservice_products_products_updateentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/Products_UpdateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_UpdateEntity.action")
let crud_demo_3_actions_sampleservice_products_products_uploadstream_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Products/Products_UploadStream.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Products/Products_UploadStream.action")
let crud_demo_3_actions_sampleservice_producttexts_navtoproducttexts_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Create.action")
let crud_demo_3_actions_sampleservice_producttexts_navtoproducttexts_detail_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Detail.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Detail.action")
let crud_demo_3_actions_sampleservice_producttexts_navtoproducttexts_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_Edit.action")
let crud_demo_3_actions_sampleservice_producttexts_navtoproducttexts_list_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_List.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/NavToProductTexts_List.action")
let crud_demo_3_actions_sampleservice_producttexts_producttexts_checkrequiredfields_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_CheckRequiredFields_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_CheckRequiredFields_Create.action")
let crud_demo_3_actions_sampleservice_producttexts_producttexts_createentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_CreateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_CreateEntity.action")
let crud_demo_3_actions_sampleservice_producttexts_producttexts_deleteentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_DeleteEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_DeleteEntity.action")
let crud_demo_3_actions_sampleservice_producttexts_producttexts_updateentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_UpdateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/ProductTexts/ProductTexts_UpdateEntity.action")
let crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Create.action")
let crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_createpurchaseorderitem_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_CreatePurchaseOrderItem.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_CreatePurchaseOrderItem.action")
let crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_detail_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Detail.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Detail.action")
let crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Edit.action")
let crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_list_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_List.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_List.action")
let crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_checkrequiredfields_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_Create.action")
let crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_checkrequiredfields_createpurchaseorderitem_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_CreatePurchaseOrderItem.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_CreatePurchaseOrderItem.action")
let crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_checkrequiredfields_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CheckRequiredFields_Edit.action")
let crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_createentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CreateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CreateEntity.action")
let crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_createpurchaseorderitem_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CreatePurchaseOrderItem.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_CreatePurchaseOrderItem.action")
let crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_deleteentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DeleteEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DeleteEntity.action")
let crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_detailpopover_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DetailPopover.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DetailPopover.action")
let crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_updateentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_UpdateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_UpdateEntity.action")
let crud_demo_3_actions_sampleservice_purchaseorderitems_navtopurchaseorderitems_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Create.action")
let crud_demo_3_actions_sampleservice_purchaseorderitems_navtopurchaseorderitems_detail_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action")
let crud_demo_3_actions_sampleservice_purchaseorderitems_navtopurchaseorderitems_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_Edit.action")
let crud_demo_3_actions_sampleservice_purchaseorderitems_navtopurchaseorderitems_list_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_List.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/NavToPurchaseOrderItems_List.action")
let crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_checkrequiredfields_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CheckRequiredFields_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CheckRequiredFields_Create.action")
let crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_checkrequiredfields_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CheckRequiredFields_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CheckRequiredFields_Edit.action")
let crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_createentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CreateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_CreateEntity.action")
let crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_deleteentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_DeleteEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_DeleteEntity.action")
let crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_updateentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_UpdateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/PurchaseOrderItems/PurchaseOrderItems_UpdateEntity.action")
let crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Create.action")
let crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_createsalesorderitem_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_CreateSalesOrderItem.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_CreateSalesOrderItem.action")
let crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_detail_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action")
let crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_Edit.action")
let crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_list_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_List.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/NavToSalesOrderHeaders_List.action")
let crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_checkrequiredfields_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_Create.action")
let crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_checkrequiredfields_createsalesorderitem_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_CreateSalesOrderItem.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_CreateSalesOrderItem.action")
let crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_checkrequiredfields_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CheckRequiredFields_Edit.action")
let crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_createentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CreateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CreateEntity.action")
let crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_createsalesorderitem_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CreateSalesOrderItem.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_CreateSalesOrderItem.action")
let crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_deleteentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_DeleteEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_DeleteEntity.action")
let crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_detailpopover_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_DetailPopover.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_DetailPopover.action")
let crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_updateentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_UpdateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderHeaders/SalesOrderHeaders_UpdateEntity.action")
let crud_demo_3_actions_sampleservice_salesorderitems_navtosalesorderitems_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Create.action")
let crud_demo_3_actions_sampleservice_salesorderitems_navtosalesorderitems_detail_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Detail.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Detail.action")
let crud_demo_3_actions_sampleservice_salesorderitems_navtosalesorderitems_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_Edit.action")
let crud_demo_3_actions_sampleservice_salesorderitems_navtosalesorderitems_list_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_List.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/NavToSalesOrderItems_List.action")
let crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_checkrequiredfields_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CheckRequiredFields_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CheckRequiredFields_Create.action")
let crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_checkrequiredfields_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CheckRequiredFields_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CheckRequiredFields_Edit.action")
let crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_createentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CreateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_CreateEntity.action")
let crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_deleteentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_DeleteEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_DeleteEntity.action")
let crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_updateentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_UpdateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/SalesOrderItems/SalesOrderItems_UpdateEntity.action")
let crud_demo_3_actions_sampleservice_service_initializeonline_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Service/InitializeOnline.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Service/InitializeOnline.action")
let crud_demo_3_actions_sampleservice_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Service/InitializeOnlineFailureMessage.action")
let crud_demo_3_actions_sampleservice_service_initializeonlinesuccessmessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Service/InitializeOnlineSuccessMessage.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Service/InitializeOnlineSuccessMessage.action")
let crud_demo_3_actions_sampleservice_stock_navtostock_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Stock/NavToStock_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/NavToStock_Create.action")
let crud_demo_3_actions_sampleservice_stock_navtostock_detail_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Stock/NavToStock_Detail.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/NavToStock_Detail.action")
let crud_demo_3_actions_sampleservice_stock_navtostock_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Stock/NavToStock_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/NavToStock_Edit.action")
let crud_demo_3_actions_sampleservice_stock_navtostock_list_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Stock/NavToStock_List.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/NavToStock_List.action")
let crud_demo_3_actions_sampleservice_stock_stock_checkrequiredfields_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Stock/Stock_CheckRequiredFields_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_CheckRequiredFields_Create.action")
let crud_demo_3_actions_sampleservice_stock_stock_checkrequiredfields_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Stock/Stock_CheckRequiredFields_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_CheckRequiredFields_Edit.action")
let crud_demo_3_actions_sampleservice_stock_stock_createentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Stock/Stock_CreateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_CreateEntity.action")
let crud_demo_3_actions_sampleservice_stock_stock_deleteentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Stock/Stock_DeleteEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_DeleteEntity.action")
let crud_demo_3_actions_sampleservice_stock_stock_updateentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Stock/Stock_UpdateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Stock/Stock_UpdateEntity.action")
let crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Create.action")
let crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_createproduct_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_CreateProduct.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_CreateProduct.action")
let crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_createpurchaseorderheader_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_CreatePurchaseOrderHeader.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_CreatePurchaseOrderHeader.action")
let crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_detail_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Detail.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Detail.action")
let crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_edit_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Edit.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_Edit.action")
let crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_list_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_List.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/NavToSuppliers_List.action")
let crud_demo_3_actions_sampleservice_suppliers_suppliers_checkrequiredfields_create_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_Create.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_Create.action")
let crud_demo_3_actions_sampleservice_suppliers_suppliers_checkrequiredfields_createproduct_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_CreateProduct.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_CreateProduct.action")
let crud_demo_3_actions_sampleservice_suppliers_suppliers_checkrequiredfields_createpurchaseorderheader_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_CreatePurchaseOrderHeader.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CheckRequiredFields_CreatePurchaseOrderHeader.action")
let crud_demo_3_actions_sampleservice_suppliers_suppliers_createentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreateEntity.action")
let crud_demo_3_actions_sampleservice_suppliers_suppliers_createproduct_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreateProduct.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreateProduct.action")
let crud_demo_3_actions_sampleservice_suppliers_suppliers_createpurchaseorderheader_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreatePurchaseOrderHeader.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_CreatePurchaseOrderHeader.action")
let crud_demo_3_actions_sampleservice_suppliers_suppliers_deleteentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/Suppliers_DeleteEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_DeleteEntity.action")
let crud_demo_3_actions_sampleservice_suppliers_suppliers_detailpopover_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/Suppliers_DetailPopover.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_DetailPopover.action")
let crud_demo_3_actions_sampleservice_suppliers_suppliers_updateentity_action = __webpack_require__(/*! ./crud_demo_3/Actions/SampleService/Suppliers/Suppliers_UpdateEntity.action */ "./build.definitions/crud_demo_3/Actions/SampleService/Suppliers/Suppliers_UpdateEntity.action")
let crud_demo_3_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/crud_demo_3/Actions/UpdateEntityFailureMessage.action")
let crud_demo_3_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/crud_demo_3/Actions/UpdateEntitySuccessMessage.action")
let crud_demo_3_actions_uploadstreamfailuremessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/UploadStreamFailureMessage.action */ "./build.definitions/crud_demo_3/Actions/UploadStreamFailureMessage.action")
let crud_demo_3_actions_uploadstreamsuccessmessage_action = __webpack_require__(/*! ./crud_demo_3/Actions/UploadStreamSuccessMessage.action */ "./build.definitions/crud_demo_3/Actions/UploadStreamSuccessMessage.action")
let crud_demo_3_globals_application_appdefinition_version_global = __webpack_require__(/*! ./crud_demo_3/Globals/Application/AppDefinition_Version.global */ "./build.definitions/crud_demo_3/Globals/Application/AppDefinition_Version.global")
let crud_demo_3_globals_application_applicationname_global = __webpack_require__(/*! ./crud_demo_3/Globals/Application/ApplicationName.global */ "./build.definitions/crud_demo_3/Globals/Application/ApplicationName.global")
let crud_demo_3_globals_application_supportemail_global = __webpack_require__(/*! ./crud_demo_3/Globals/Application/SupportEmail.global */ "./build.definitions/crud_demo_3/Globals/Application/SupportEmail.global")
let crud_demo_3_globals_application_supportphone_global = __webpack_require__(/*! ./crud_demo_3/Globals/Application/SupportPhone.global */ "./build.definitions/crud_demo_3/Globals/Application/SupportPhone.global")
let crud_demo_3_i18n_i18n_properties = __webpack_require__(/*! ./crud_demo_3/i18n/i18n.properties */ "./build.definitions/crud_demo_3/i18n/i18n.properties")
let crud_demo_3_jsconfig_json = __webpack_require__(/*! ./crud_demo_3/jsconfig.json */ "./build.definitions/crud_demo_3/jsconfig.json")
let crud_demo_3_pages_application_about_page = __webpack_require__(/*! ./crud_demo_3/Pages/Application/About.page */ "./build.definitions/crud_demo_3/Pages/Application/About.page")
let crud_demo_3_pages_application_support_page = __webpack_require__(/*! ./crud_demo_3/Pages/Application/Support.page */ "./build.definitions/crud_demo_3/Pages/Application/Support.page")
let crud_demo_3_pages_application_useractivitylog_page = __webpack_require__(/*! ./crud_demo_3/Pages/Application/UserActivityLog.page */ "./build.definitions/crud_demo_3/Pages/Application/UserActivityLog.page")
let crud_demo_3_pages_main_page = __webpack_require__(/*! ./crud_demo_3/Pages/Main.page */ "./build.definitions/crud_demo_3/Pages/Main.page")
let crud_demo_3_pages_sampleservice_customers_customers_create_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Customers/Customers_Create.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_Create.page")
let crud_demo_3_pages_sampleservice_customers_customers_createsalesorderheader_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Customers/Customers_CreateSalesOrderHeader.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_CreateSalesOrderHeader.page")
let crud_demo_3_pages_sampleservice_customers_customers_detail_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Customers/Customers_Detail.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_Detail.page")
let crud_demo_3_pages_sampleservice_customers_customers_edit_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Customers/Customers_Edit.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_Edit.page")
let crud_demo_3_pages_sampleservice_customers_customers_list_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Customers/Customers_List.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Customers/Customers_List.page")
let crud_demo_3_pages_sampleservice_productcategories_productcategories_create_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Create.page */ "./build.definitions/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Create.page")
let crud_demo_3_pages_sampleservice_productcategories_productcategories_detail_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Detail.page */ "./build.definitions/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Detail.page")
let crud_demo_3_pages_sampleservice_productcategories_productcategories_edit_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Edit.page */ "./build.definitions/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_Edit.page")
let crud_demo_3_pages_sampleservice_productcategories_productcategories_list_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_List.page */ "./build.definitions/crud_demo_3/Pages/SampleService_ProductCategories/ProductCategories_List.page")
let crud_demo_3_pages_sampleservice_products_products_create_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Products/Products_Create.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_Create.page")
let crud_demo_3_pages_sampleservice_products_products_createpurchaseorderitem_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Products/Products_CreatePurchaseOrderItem.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_CreatePurchaseOrderItem.page")
let crud_demo_3_pages_sampleservice_products_products_createsalesorderitem_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Products/Products_CreateSalesOrderItem.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_CreateSalesOrderItem.page")
let crud_demo_3_pages_sampleservice_products_products_detail_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Products/Products_Detail.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_Detail.page")
let crud_demo_3_pages_sampleservice_products_products_edit_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Products/Products_Edit.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_Edit.page")
let crud_demo_3_pages_sampleservice_products_products_list_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Products/Products_List.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Products/Products_List.page")
let crud_demo_3_pages_sampleservice_producttexts_producttexts_create_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Create.page */ "./build.definitions/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Create.page")
let crud_demo_3_pages_sampleservice_producttexts_producttexts_detail_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Detail.page */ "./build.definitions/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Detail.page")
let crud_demo_3_pages_sampleservice_producttexts_producttexts_edit_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Edit.page */ "./build.definitions/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_Edit.page")
let crud_demo_3_pages_sampleservice_producttexts_producttexts_list_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_List.page */ "./build.definitions/crud_demo_3/Pages/SampleService_ProductTexts/ProductTexts_List.page")
let crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_create_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Create.page */ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Create.page")
let crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_createpurchaseorderitem_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_CreatePurchaseOrderItem.page */ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_CreatePurchaseOrderItem.page")
let crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_detail_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Detail.page */ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Detail.page")
let crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_edit_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Edit.page */ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_Edit.page")
let crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_list_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_List.page */ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderHeaders/PurchaseOrderHeaders_List.page")
let crud_demo_3_pages_sampleservice_purchaseorderitems_purchaseorderitems_create_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Create.page */ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Create.page")
let crud_demo_3_pages_sampleservice_purchaseorderitems_purchaseorderitems_detail_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Detail.page */ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Detail.page")
let crud_demo_3_pages_sampleservice_purchaseorderitems_purchaseorderitems_edit_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Edit.page */ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_Edit.page")
let crud_demo_3_pages_sampleservice_purchaseorderitems_purchaseorderitems_list_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_List.page */ "./build.definitions/crud_demo_3/Pages/SampleService_PurchaseOrderItems/PurchaseOrderItems_List.page")
let crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_create_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Create.page */ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Create.page")
let crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_createsalesorderitem_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_CreateSalesOrderItem.page */ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_CreateSalesOrderItem.page")
let crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_detail_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Detail.page */ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Detail.page")
let crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_edit_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Edit.page */ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_Edit.page")
let crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_list_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_List.page */ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderHeaders/SalesOrderHeaders_List.page")
let crud_demo_3_pages_sampleservice_salesorderitems_salesorderitems_create_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Create.page */ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Create.page")
let crud_demo_3_pages_sampleservice_salesorderitems_salesorderitems_detail_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Detail.page */ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Detail.page")
let crud_demo_3_pages_sampleservice_salesorderitems_salesorderitems_edit_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Edit.page */ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_Edit.page")
let crud_demo_3_pages_sampleservice_salesorderitems_salesorderitems_list_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_List.page */ "./build.definitions/crud_demo_3/Pages/SampleService_SalesOrderItems/SalesOrderItems_List.page")
let crud_demo_3_pages_sampleservice_stock_stock_create_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Stock/Stock_Create.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Stock/Stock_Create.page")
let crud_demo_3_pages_sampleservice_stock_stock_detail_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Stock/Stock_Detail.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Stock/Stock_Detail.page")
let crud_demo_3_pages_sampleservice_stock_stock_edit_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Stock/Stock_Edit.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Stock/Stock_Edit.page")
let crud_demo_3_pages_sampleservice_stock_stock_list_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Stock/Stock_List.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Stock/Stock_List.page")
let crud_demo_3_pages_sampleservice_suppliers_suppliers_create_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Create.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Create.page")
let crud_demo_3_pages_sampleservice_suppliers_suppliers_createproduct_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Suppliers/Suppliers_CreateProduct.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_CreateProduct.page")
let crud_demo_3_pages_sampleservice_suppliers_suppliers_createpurchaseorderheader_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Suppliers/Suppliers_CreatePurchaseOrderHeader.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_CreatePurchaseOrderHeader.page")
let crud_demo_3_pages_sampleservice_suppliers_suppliers_detail_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Detail.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Detail.page")
let crud_demo_3_pages_sampleservice_suppliers_suppliers_edit_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Edit.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_Edit.page")
let crud_demo_3_pages_sampleservice_suppliers_suppliers_list_page = __webpack_require__(/*! ./crud_demo_3/Pages/SampleService_Suppliers/Suppliers_List.page */ "./build.definitions/crud_demo_3/Pages/SampleService_Suppliers/Suppliers_List.page")
let crud_demo_3_pages_user_info_page = __webpack_require__(/*! ./crud_demo_3/Pages/User_Info.page */ "./build.definitions/crud_demo_3/Pages/User_Info.page")
let crud_demo_3_rules_application_appupdatefailure_js = __webpack_require__(/*! ./crud_demo_3/Rules/Application/AppUpdateFailure.js */ "./build.definitions/crud_demo_3/Rules/Application/AppUpdateFailure.js")
let crud_demo_3_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./crud_demo_3/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/crud_demo_3/Rules/Application/AppUpdateSuccess.js")
let crud_demo_3_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./crud_demo_3/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/crud_demo_3/Rules/Application/ClientIsMultiUserMode.js")
let crud_demo_3_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./crud_demo_3/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/crud_demo_3/Rules/Application/GetClientSupportVersions.js")
let crud_demo_3_rules_application_getclientversion_js = __webpack_require__(/*! ./crud_demo_3/Rules/Application/GetClientVersion.js */ "./build.definitions/crud_demo_3/Rules/Application/GetClientVersion.js")
let crud_demo_3_rules_application_onwillupdate_js = __webpack_require__(/*! ./crud_demo_3/Rules/Application/OnWillUpdate.js */ "./build.definitions/crud_demo_3/Rules/Application/OnWillUpdate.js")
let crud_demo_3_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./crud_demo_3/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/crud_demo_3/Rules/Application/ResetAppSettingsAndLogout.js")
let crud_demo_3_rules_getuserinfo_js = __webpack_require__(/*! ./crud_demo_3/Rules/GetUserInfo.js */ "./build.definitions/crud_demo_3/Rules/GetUserInfo.js")
let crud_demo_3_rules_logging_loglevels_js = __webpack_require__(/*! ./crud_demo_3/Rules/Logging/LogLevels.js */ "./build.definitions/crud_demo_3/Rules/Logging/LogLevels.js")
let crud_demo_3_rules_logging_settracecategories_js = __webpack_require__(/*! ./crud_demo_3/Rules/Logging/SetTraceCategories.js */ "./build.definitions/crud_demo_3/Rules/Logging/SetTraceCategories.js")
let crud_demo_3_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./crud_demo_3/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/crud_demo_3/Rules/Logging/SetUserLogLevel.js")
let crud_demo_3_rules_logging_togglelogging_js = __webpack_require__(/*! ./crud_demo_3/Rules/Logging/ToggleLogging.js */ "./build.definitions/crud_demo_3/Rules/Logging/ToggleLogging.js")
let crud_demo_3_rules_logging_tracecategories_js = __webpack_require__(/*! ./crud_demo_3/Rules/Logging/TraceCategories.js */ "./build.definitions/crud_demo_3/Rules/Logging/TraceCategories.js")
let crud_demo_3_rules_logging_userlogsetting_js = __webpack_require__(/*! ./crud_demo_3/Rules/Logging/UserLogSetting.js */ "./build.definitions/crud_demo_3/Rules/Logging/UserLogSetting.js")
let crud_demo_3_rules_sampleservice_customers_customers_deleteconfirmation_js = __webpack_require__(/*! ./crud_demo_3/Rules/SampleService/Customers/Customers_DeleteConfirmation.js */ "./build.definitions/crud_demo_3/Rules/SampleService/Customers/Customers_DeleteConfirmation.js")
let crud_demo_3_rules_sampleservice_productcategories_productcategories_deleteconfirmation_js = __webpack_require__(/*! ./crud_demo_3/Rules/SampleService/ProductCategories/ProductCategories_DeleteConfirmation.js */ "./build.definitions/crud_demo_3/Rules/SampleService/ProductCategories/ProductCategories_DeleteConfirmation.js")
let crud_demo_3_rules_sampleservice_products_products_createentity_js = __webpack_require__(/*! ./crud_demo_3/Rules/SampleService/Products/Products_CreateEntity.js */ "./build.definitions/crud_demo_3/Rules/SampleService/Products/Products_CreateEntity.js")
let crud_demo_3_rules_sampleservice_products_products_deleteconfirmation_js = __webpack_require__(/*! ./crud_demo_3/Rules/SampleService/Products/Products_DeleteConfirmation.js */ "./build.definitions/crud_demo_3/Rules/SampleService/Products/Products_DeleteConfirmation.js")
let crud_demo_3_rules_sampleservice_producttexts_producttexts_deleteconfirmation_js = __webpack_require__(/*! ./crud_demo_3/Rules/SampleService/ProductTexts/ProductTexts_DeleteConfirmation.js */ "./build.definitions/crud_demo_3/Rules/SampleService/ProductTexts/ProductTexts_DeleteConfirmation.js")
let crud_demo_3_rules_sampleservice_purchaseorderheaders_purchaseorderheaders_deleteconfirmation_js = __webpack_require__(/*! ./crud_demo_3/Rules/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DeleteConfirmation.js */ "./build.definitions/crud_demo_3/Rules/SampleService/PurchaseOrderHeaders/PurchaseOrderHeaders_DeleteConfirmation.js")
let crud_demo_3_rules_sampleservice_purchaseorderitems_purchaseorderitems_deleteconfirmation_js = __webpack_require__(/*! ./crud_demo_3/Rules/SampleService/PurchaseOrderItems/PurchaseOrderItems_DeleteConfirmation.js */ "./build.definitions/crud_demo_3/Rules/SampleService/PurchaseOrderItems/PurchaseOrderItems_DeleteConfirmation.js")
let crud_demo_3_rules_sampleservice_salesorderheaders_salesorderheaders_deleteconfirmation_js = __webpack_require__(/*! ./crud_demo_3/Rules/SampleService/SalesOrderHeaders/SalesOrderHeaders_DeleteConfirmation.js */ "./build.definitions/crud_demo_3/Rules/SampleService/SalesOrderHeaders/SalesOrderHeaders_DeleteConfirmation.js")
let crud_demo_3_rules_sampleservice_salesorderitems_salesorderitems_deleteconfirmation_js = __webpack_require__(/*! ./crud_demo_3/Rules/SampleService/SalesOrderItems/SalesOrderItems_DeleteConfirmation.js */ "./build.definitions/crud_demo_3/Rules/SampleService/SalesOrderItems/SalesOrderItems_DeleteConfirmation.js")
let crud_demo_3_rules_sampleservice_stock_stock_deleteconfirmation_js = __webpack_require__(/*! ./crud_demo_3/Rules/SampleService/Stock/Stock_DeleteConfirmation.js */ "./build.definitions/crud_demo_3/Rules/SampleService/Stock/Stock_DeleteConfirmation.js")
let crud_demo_3_rules_sampleservice_suppliers_suppliers_deleteconfirmation_js = __webpack_require__(/*! ./crud_demo_3/Rules/SampleService/Suppliers/Suppliers_DeleteConfirmation.js */ "./build.definitions/crud_demo_3/Rules/SampleService/Suppliers/Suppliers_DeleteConfirmation.js")
let crud_demo_3_rules_service_initialize_js = __webpack_require__(/*! ./crud_demo_3/Rules/Service/Initialize.js */ "./build.definitions/crud_demo_3/Rules/Service/Initialize.js")
let crud_demo_3_services_sampleservice_service = __webpack_require__(/*! ./crud_demo_3/Services/SampleService.service */ "./build.definitions/crud_demo_3/Services/SampleService.service")
let crud_demo_3_styles_styles_css = __webpack_require__(/*! ./crud_demo_3/Styles/Styles.css */ "./build.definitions/crud_demo_3/Styles/Styles.css")
let crud_demo_3_styles_styles_less = __webpack_require__(/*! ./crud_demo_3/Styles/Styles.less */ "./build.definitions/crud_demo_3/Styles/Styles.less")
let crud_demo_3_styles_styles_light_css = __webpack_require__(/*! ./crud_demo_3/Styles/Styles.light.css */ "./build.definitions/crud_demo_3/Styles/Styles.light.css")
let crud_demo_3_styles_styles_light_json = __webpack_require__(/*! ./crud_demo_3/Styles/Styles.light.json */ "./build.definitions/crud_demo_3/Styles/Styles.light.json")
let crud_demo_3_styles_styles_light_nss = __webpack_require__(/*! ./crud_demo_3/Styles/Styles.light.nss */ "./build.definitions/crud_demo_3/Styles/Styles.light.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	crud_demo_3_actions_application_appupdate_action : crud_demo_3_actions_application_appupdate_action,
	crud_demo_3_actions_application_appupdatefailuremessage_action : crud_demo_3_actions_application_appupdatefailuremessage_action,
	crud_demo_3_actions_application_appupdateprogressbanner_action : crud_demo_3_actions_application_appupdateprogressbanner_action,
	crud_demo_3_actions_application_appupdatesuccessmessage_action : crud_demo_3_actions_application_appupdatesuccessmessage_action,
	crud_demo_3_actions_application_logout_action : crud_demo_3_actions_application_logout_action,
	crud_demo_3_actions_application_navtoabout_action : crud_demo_3_actions_application_navtoabout_action,
	crud_demo_3_actions_application_navtoactivitylog_action : crud_demo_3_actions_application_navtoactivitylog_action,
	crud_demo_3_actions_application_navtosupport_action : crud_demo_3_actions_application_navtosupport_action,
	crud_demo_3_actions_application_navtouserinfo_action : crud_demo_3_actions_application_navtouserinfo_action,
	crud_demo_3_actions_application_onwillupdate_action : crud_demo_3_actions_application_onwillupdate_action,
	crud_demo_3_actions_application_reset_action : crud_demo_3_actions_application_reset_action,
	crud_demo_3_actions_application_resetmessage_action : crud_demo_3_actions_application_resetmessage_action,
	crud_demo_3_actions_application_usermenupopover_action : crud_demo_3_actions_application_usermenupopover_action,
	crud_demo_3_actions_closemodalpage_cancel_action : crud_demo_3_actions_closemodalpage_cancel_action,
	crud_demo_3_actions_closemodalpage_complete_action : crud_demo_3_actions_closemodalpage_complete_action,
	crud_demo_3_actions_closepage_action : crud_demo_3_actions_closepage_action,
	crud_demo_3_actions_createentityfailuremessage_action : crud_demo_3_actions_createentityfailuremessage_action,
	crud_demo_3_actions_createentitysuccessmessage_action : crud_demo_3_actions_createentitysuccessmessage_action,
	crud_demo_3_actions_deleteconfirmation_action : crud_demo_3_actions_deleteconfirmation_action,
	crud_demo_3_actions_deleteentityfailuremessage_action : crud_demo_3_actions_deleteentityfailuremessage_action,
	crud_demo_3_actions_deleteentitysuccessmessage_action : crud_demo_3_actions_deleteentitysuccessmessage_action,
	crud_demo_3_actions_genericbannermessage_action : crud_demo_3_actions_genericbannermessage_action,
	crud_demo_3_actions_genericmessagebox_action : crud_demo_3_actions_genericmessagebox_action,
	crud_demo_3_actions_genericnavigation_action : crud_demo_3_actions_genericnavigation_action,
	crud_demo_3_actions_generictoastmessage_action : crud_demo_3_actions_generictoastmessage_action,
	crud_demo_3_actions_logging_loguploadfailure_action : crud_demo_3_actions_logging_loguploadfailure_action,
	crud_demo_3_actions_logging_loguploadsuccessful_action : crud_demo_3_actions_logging_loguploadsuccessful_action,
	crud_demo_3_actions_logging_uploadlog_action : crud_demo_3_actions_logging_uploadlog_action,
	crud_demo_3_actions_logging_uploadlogprogress_action : crud_demo_3_actions_logging_uploadlogprogress_action,
	crud_demo_3_actions_requiredfieldsfailuremessage_action : crud_demo_3_actions_requiredfieldsfailuremessage_action,
	crud_demo_3_actions_sampleservice_customers_customers_checkrequiredfields_create_action : crud_demo_3_actions_sampleservice_customers_customers_checkrequiredfields_create_action,
	crud_demo_3_actions_sampleservice_customers_customers_checkrequiredfields_createsalesorderheader_action : crud_demo_3_actions_sampleservice_customers_customers_checkrequiredfields_createsalesorderheader_action,
	crud_demo_3_actions_sampleservice_customers_customers_checkrequiredfields_edit_action : crud_demo_3_actions_sampleservice_customers_customers_checkrequiredfields_edit_action,
	crud_demo_3_actions_sampleservice_customers_customers_createentity_action : crud_demo_3_actions_sampleservice_customers_customers_createentity_action,
	crud_demo_3_actions_sampleservice_customers_customers_createsalesorderheader_action : crud_demo_3_actions_sampleservice_customers_customers_createsalesorderheader_action,
	crud_demo_3_actions_sampleservice_customers_customers_deleteentity_action : crud_demo_3_actions_sampleservice_customers_customers_deleteentity_action,
	crud_demo_3_actions_sampleservice_customers_customers_detailpopover_action : crud_demo_3_actions_sampleservice_customers_customers_detailpopover_action,
	crud_demo_3_actions_sampleservice_customers_customers_updateentity_action : crud_demo_3_actions_sampleservice_customers_customers_updateentity_action,
	crud_demo_3_actions_sampleservice_customers_navtocustomers_create_action : crud_demo_3_actions_sampleservice_customers_navtocustomers_create_action,
	crud_demo_3_actions_sampleservice_customers_navtocustomers_createsalesorderheader_action : crud_demo_3_actions_sampleservice_customers_navtocustomers_createsalesorderheader_action,
	crud_demo_3_actions_sampleservice_customers_navtocustomers_detail_action : crud_demo_3_actions_sampleservice_customers_navtocustomers_detail_action,
	crud_demo_3_actions_sampleservice_customers_navtocustomers_edit_action : crud_demo_3_actions_sampleservice_customers_navtocustomers_edit_action,
	crud_demo_3_actions_sampleservice_customers_navtocustomers_list_action : crud_demo_3_actions_sampleservice_customers_navtocustomers_list_action,
	crud_demo_3_actions_sampleservice_productcategories_navtoproductcategories_create_action : crud_demo_3_actions_sampleservice_productcategories_navtoproductcategories_create_action,
	crud_demo_3_actions_sampleservice_productcategories_navtoproductcategories_detail_action : crud_demo_3_actions_sampleservice_productcategories_navtoproductcategories_detail_action,
	crud_demo_3_actions_sampleservice_productcategories_navtoproductcategories_edit_action : crud_demo_3_actions_sampleservice_productcategories_navtoproductcategories_edit_action,
	crud_demo_3_actions_sampleservice_productcategories_navtoproductcategories_list_action : crud_demo_3_actions_sampleservice_productcategories_navtoproductcategories_list_action,
	crud_demo_3_actions_sampleservice_productcategories_productcategories_checkrequiredfields_create_action : crud_demo_3_actions_sampleservice_productcategories_productcategories_checkrequiredfields_create_action,
	crud_demo_3_actions_sampleservice_productcategories_productcategories_createentity_action : crud_demo_3_actions_sampleservice_productcategories_productcategories_createentity_action,
	crud_demo_3_actions_sampleservice_productcategories_productcategories_deleteentity_action : crud_demo_3_actions_sampleservice_productcategories_productcategories_deleteentity_action,
	crud_demo_3_actions_sampleservice_productcategories_productcategories_updateentity_action : crud_demo_3_actions_sampleservice_productcategories_productcategories_updateentity_action,
	crud_demo_3_actions_sampleservice_products_navtoproducts_create_action : crud_demo_3_actions_sampleservice_products_navtoproducts_create_action,
	crud_demo_3_actions_sampleservice_products_navtoproducts_createpurchaseorderitem_action : crud_demo_3_actions_sampleservice_products_navtoproducts_createpurchaseorderitem_action,
	crud_demo_3_actions_sampleservice_products_navtoproducts_createsalesorderitem_action : crud_demo_3_actions_sampleservice_products_navtoproducts_createsalesorderitem_action,
	crud_demo_3_actions_sampleservice_products_navtoproducts_detail_action : crud_demo_3_actions_sampleservice_products_navtoproducts_detail_action,
	crud_demo_3_actions_sampleservice_products_navtoproducts_edit_action : crud_demo_3_actions_sampleservice_products_navtoproducts_edit_action,
	crud_demo_3_actions_sampleservice_products_navtoproducts_list_action : crud_demo_3_actions_sampleservice_products_navtoproducts_list_action,
	crud_demo_3_actions_sampleservice_products_products_checkrequiredfields_create_action : crud_demo_3_actions_sampleservice_products_products_checkrequiredfields_create_action,
	crud_demo_3_actions_sampleservice_products_products_checkrequiredfields_createpurchaseorderitem_action : crud_demo_3_actions_sampleservice_products_products_checkrequiredfields_createpurchaseorderitem_action,
	crud_demo_3_actions_sampleservice_products_products_checkrequiredfields_createsalesorderitem_action : crud_demo_3_actions_sampleservice_products_products_checkrequiredfields_createsalesorderitem_action,
	crud_demo_3_actions_sampleservice_products_products_checkrequiredfields_edit_action : crud_demo_3_actions_sampleservice_products_products_checkrequiredfields_edit_action,
	crud_demo_3_actions_sampleservice_products_products_createentity_action : crud_demo_3_actions_sampleservice_products_products_createentity_action,
	crud_demo_3_actions_sampleservice_products_products_createpurchaseorderitem_action : crud_demo_3_actions_sampleservice_products_products_createpurchaseorderitem_action,
	crud_demo_3_actions_sampleservice_products_products_createsalesorderitem_action : crud_demo_3_actions_sampleservice_products_products_createsalesorderitem_action,
	crud_demo_3_actions_sampleservice_products_products_deleteentity_action : crud_demo_3_actions_sampleservice_products_products_deleteentity_action,
	crud_demo_3_actions_sampleservice_products_products_detailpopover_action : crud_demo_3_actions_sampleservice_products_products_detailpopover_action,
	crud_demo_3_actions_sampleservice_products_products_opendocument_action : crud_demo_3_actions_sampleservice_products_products_opendocument_action,
	crud_demo_3_actions_sampleservice_products_products_updateentity_action : crud_demo_3_actions_sampleservice_products_products_updateentity_action,
	crud_demo_3_actions_sampleservice_products_products_uploadstream_action : crud_demo_3_actions_sampleservice_products_products_uploadstream_action,
	crud_demo_3_actions_sampleservice_producttexts_navtoproducttexts_create_action : crud_demo_3_actions_sampleservice_producttexts_navtoproducttexts_create_action,
	crud_demo_3_actions_sampleservice_producttexts_navtoproducttexts_detail_action : crud_demo_3_actions_sampleservice_producttexts_navtoproducttexts_detail_action,
	crud_demo_3_actions_sampleservice_producttexts_navtoproducttexts_edit_action : crud_demo_3_actions_sampleservice_producttexts_navtoproducttexts_edit_action,
	crud_demo_3_actions_sampleservice_producttexts_navtoproducttexts_list_action : crud_demo_3_actions_sampleservice_producttexts_navtoproducttexts_list_action,
	crud_demo_3_actions_sampleservice_producttexts_producttexts_checkrequiredfields_create_action : crud_demo_3_actions_sampleservice_producttexts_producttexts_checkrequiredfields_create_action,
	crud_demo_3_actions_sampleservice_producttexts_producttexts_createentity_action : crud_demo_3_actions_sampleservice_producttexts_producttexts_createentity_action,
	crud_demo_3_actions_sampleservice_producttexts_producttexts_deleteentity_action : crud_demo_3_actions_sampleservice_producttexts_producttexts_deleteentity_action,
	crud_demo_3_actions_sampleservice_producttexts_producttexts_updateentity_action : crud_demo_3_actions_sampleservice_producttexts_producttexts_updateentity_action,
	crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_create_action : crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_create_action,
	crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_createpurchaseorderitem_action : crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_createpurchaseorderitem_action,
	crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_detail_action : crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_detail_action,
	crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_edit_action : crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_edit_action,
	crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_list_action : crud_demo_3_actions_sampleservice_purchaseorderheaders_navtopurchaseorderheaders_list_action,
	crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_checkrequiredfields_create_action : crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_checkrequiredfields_create_action,
	crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_checkrequiredfields_createpurchaseorderitem_action : crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_checkrequiredfields_createpurchaseorderitem_action,
	crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_checkrequiredfields_edit_action : crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_checkrequiredfields_edit_action,
	crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_createentity_action : crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_createentity_action,
	crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_createpurchaseorderitem_action : crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_createpurchaseorderitem_action,
	crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_deleteentity_action : crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_deleteentity_action,
	crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_detailpopover_action : crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_detailpopover_action,
	crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_updateentity_action : crud_demo_3_actions_sampleservice_purchaseorderheaders_purchaseorderheaders_updateentity_action,
	crud_demo_3_actions_sampleservice_purchaseorderitems_navtopurchaseorderitems_create_action : crud_demo_3_actions_sampleservice_purchaseorderitems_navtopurchaseorderitems_create_action,
	crud_demo_3_actions_sampleservice_purchaseorderitems_navtopurchaseorderitems_detail_action : crud_demo_3_actions_sampleservice_purchaseorderitems_navtopurchaseorderitems_detail_action,
	crud_demo_3_actions_sampleservice_purchaseorderitems_navtopurchaseorderitems_edit_action : crud_demo_3_actions_sampleservice_purchaseorderitems_navtopurchaseorderitems_edit_action,
	crud_demo_3_actions_sampleservice_purchaseorderitems_navtopurchaseorderitems_list_action : crud_demo_3_actions_sampleservice_purchaseorderitems_navtopurchaseorderitems_list_action,
	crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_checkrequiredfields_create_action : crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_checkrequiredfields_create_action,
	crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_checkrequiredfields_edit_action : crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_checkrequiredfields_edit_action,
	crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_createentity_action : crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_createentity_action,
	crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_deleteentity_action : crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_deleteentity_action,
	crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_updateentity_action : crud_demo_3_actions_sampleservice_purchaseorderitems_purchaseorderitems_updateentity_action,
	crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_create_action : crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_create_action,
	crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_createsalesorderitem_action : crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_createsalesorderitem_action,
	crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_detail_action : crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_detail_action,
	crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_edit_action : crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_edit_action,
	crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_list_action : crud_demo_3_actions_sampleservice_salesorderheaders_navtosalesorderheaders_list_action,
	crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_checkrequiredfields_create_action : crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_checkrequiredfields_create_action,
	crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_checkrequiredfields_createsalesorderitem_action : crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_checkrequiredfields_createsalesorderitem_action,
	crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_checkrequiredfields_edit_action : crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_checkrequiredfields_edit_action,
	crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_createentity_action : crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_createentity_action,
	crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_createsalesorderitem_action : crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_createsalesorderitem_action,
	crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_deleteentity_action : crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_deleteentity_action,
	crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_detailpopover_action : crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_detailpopover_action,
	crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_updateentity_action : crud_demo_3_actions_sampleservice_salesorderheaders_salesorderheaders_updateentity_action,
	crud_demo_3_actions_sampleservice_salesorderitems_navtosalesorderitems_create_action : crud_demo_3_actions_sampleservice_salesorderitems_navtosalesorderitems_create_action,
	crud_demo_3_actions_sampleservice_salesorderitems_navtosalesorderitems_detail_action : crud_demo_3_actions_sampleservice_salesorderitems_navtosalesorderitems_detail_action,
	crud_demo_3_actions_sampleservice_salesorderitems_navtosalesorderitems_edit_action : crud_demo_3_actions_sampleservice_salesorderitems_navtosalesorderitems_edit_action,
	crud_demo_3_actions_sampleservice_salesorderitems_navtosalesorderitems_list_action : crud_demo_3_actions_sampleservice_salesorderitems_navtosalesorderitems_list_action,
	crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_checkrequiredfields_create_action : crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_checkrequiredfields_create_action,
	crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_checkrequiredfields_edit_action : crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_checkrequiredfields_edit_action,
	crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_createentity_action : crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_createentity_action,
	crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_deleteentity_action : crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_deleteentity_action,
	crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_updateentity_action : crud_demo_3_actions_sampleservice_salesorderitems_salesorderitems_updateentity_action,
	crud_demo_3_actions_sampleservice_service_initializeonline_action : crud_demo_3_actions_sampleservice_service_initializeonline_action,
	crud_demo_3_actions_sampleservice_service_initializeonlinefailuremessage_action : crud_demo_3_actions_sampleservice_service_initializeonlinefailuremessage_action,
	crud_demo_3_actions_sampleservice_service_initializeonlinesuccessmessage_action : crud_demo_3_actions_sampleservice_service_initializeonlinesuccessmessage_action,
	crud_demo_3_actions_sampleservice_stock_navtostock_create_action : crud_demo_3_actions_sampleservice_stock_navtostock_create_action,
	crud_demo_3_actions_sampleservice_stock_navtostock_detail_action : crud_demo_3_actions_sampleservice_stock_navtostock_detail_action,
	crud_demo_3_actions_sampleservice_stock_navtostock_edit_action : crud_demo_3_actions_sampleservice_stock_navtostock_edit_action,
	crud_demo_3_actions_sampleservice_stock_navtostock_list_action : crud_demo_3_actions_sampleservice_stock_navtostock_list_action,
	crud_demo_3_actions_sampleservice_stock_stock_checkrequiredfields_create_action : crud_demo_3_actions_sampleservice_stock_stock_checkrequiredfields_create_action,
	crud_demo_3_actions_sampleservice_stock_stock_checkrequiredfields_edit_action : crud_demo_3_actions_sampleservice_stock_stock_checkrequiredfields_edit_action,
	crud_demo_3_actions_sampleservice_stock_stock_createentity_action : crud_demo_3_actions_sampleservice_stock_stock_createentity_action,
	crud_demo_3_actions_sampleservice_stock_stock_deleteentity_action : crud_demo_3_actions_sampleservice_stock_stock_deleteentity_action,
	crud_demo_3_actions_sampleservice_stock_stock_updateentity_action : crud_demo_3_actions_sampleservice_stock_stock_updateentity_action,
	crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_create_action : crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_create_action,
	crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_createproduct_action : crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_createproduct_action,
	crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_createpurchaseorderheader_action : crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_createpurchaseorderheader_action,
	crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_detail_action : crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_detail_action,
	crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_edit_action : crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_edit_action,
	crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_list_action : crud_demo_3_actions_sampleservice_suppliers_navtosuppliers_list_action,
	crud_demo_3_actions_sampleservice_suppliers_suppliers_checkrequiredfields_create_action : crud_demo_3_actions_sampleservice_suppliers_suppliers_checkrequiredfields_create_action,
	crud_demo_3_actions_sampleservice_suppliers_suppliers_checkrequiredfields_createproduct_action : crud_demo_3_actions_sampleservice_suppliers_suppliers_checkrequiredfields_createproduct_action,
	crud_demo_3_actions_sampleservice_suppliers_suppliers_checkrequiredfields_createpurchaseorderheader_action : crud_demo_3_actions_sampleservice_suppliers_suppliers_checkrequiredfields_createpurchaseorderheader_action,
	crud_demo_3_actions_sampleservice_suppliers_suppliers_createentity_action : crud_demo_3_actions_sampleservice_suppliers_suppliers_createentity_action,
	crud_demo_3_actions_sampleservice_suppliers_suppliers_createproduct_action : crud_demo_3_actions_sampleservice_suppliers_suppliers_createproduct_action,
	crud_demo_3_actions_sampleservice_suppliers_suppliers_createpurchaseorderheader_action : crud_demo_3_actions_sampleservice_suppliers_suppliers_createpurchaseorderheader_action,
	crud_demo_3_actions_sampleservice_suppliers_suppliers_deleteentity_action : crud_demo_3_actions_sampleservice_suppliers_suppliers_deleteentity_action,
	crud_demo_3_actions_sampleservice_suppliers_suppliers_detailpopover_action : crud_demo_3_actions_sampleservice_suppliers_suppliers_detailpopover_action,
	crud_demo_3_actions_sampleservice_suppliers_suppliers_updateentity_action : crud_demo_3_actions_sampleservice_suppliers_suppliers_updateentity_action,
	crud_demo_3_actions_updateentityfailuremessage_action : crud_demo_3_actions_updateentityfailuremessage_action,
	crud_demo_3_actions_updateentitysuccessmessage_action : crud_demo_3_actions_updateentitysuccessmessage_action,
	crud_demo_3_actions_uploadstreamfailuremessage_action : crud_demo_3_actions_uploadstreamfailuremessage_action,
	crud_demo_3_actions_uploadstreamsuccessmessage_action : crud_demo_3_actions_uploadstreamsuccessmessage_action,
	crud_demo_3_globals_application_appdefinition_version_global : crud_demo_3_globals_application_appdefinition_version_global,
	crud_demo_3_globals_application_applicationname_global : crud_demo_3_globals_application_applicationname_global,
	crud_demo_3_globals_application_supportemail_global : crud_demo_3_globals_application_supportemail_global,
	crud_demo_3_globals_application_supportphone_global : crud_demo_3_globals_application_supportphone_global,
	crud_demo_3_i18n_i18n_properties : crud_demo_3_i18n_i18n_properties,
	crud_demo_3_jsconfig_json : crud_demo_3_jsconfig_json,
	crud_demo_3_pages_application_about_page : crud_demo_3_pages_application_about_page,
	crud_demo_3_pages_application_support_page : crud_demo_3_pages_application_support_page,
	crud_demo_3_pages_application_useractivitylog_page : crud_demo_3_pages_application_useractivitylog_page,
	crud_demo_3_pages_main_page : crud_demo_3_pages_main_page,
	crud_demo_3_pages_sampleservice_customers_customers_create_page : crud_demo_3_pages_sampleservice_customers_customers_create_page,
	crud_demo_3_pages_sampleservice_customers_customers_createsalesorderheader_page : crud_demo_3_pages_sampleservice_customers_customers_createsalesorderheader_page,
	crud_demo_3_pages_sampleservice_customers_customers_detail_page : crud_demo_3_pages_sampleservice_customers_customers_detail_page,
	crud_demo_3_pages_sampleservice_customers_customers_edit_page : crud_demo_3_pages_sampleservice_customers_customers_edit_page,
	crud_demo_3_pages_sampleservice_customers_customers_list_page : crud_demo_3_pages_sampleservice_customers_customers_list_page,
	crud_demo_3_pages_sampleservice_productcategories_productcategories_create_page : crud_demo_3_pages_sampleservice_productcategories_productcategories_create_page,
	crud_demo_3_pages_sampleservice_productcategories_productcategories_detail_page : crud_demo_3_pages_sampleservice_productcategories_productcategories_detail_page,
	crud_demo_3_pages_sampleservice_productcategories_productcategories_edit_page : crud_demo_3_pages_sampleservice_productcategories_productcategories_edit_page,
	crud_demo_3_pages_sampleservice_productcategories_productcategories_list_page : crud_demo_3_pages_sampleservice_productcategories_productcategories_list_page,
	crud_demo_3_pages_sampleservice_products_products_create_page : crud_demo_3_pages_sampleservice_products_products_create_page,
	crud_demo_3_pages_sampleservice_products_products_createpurchaseorderitem_page : crud_demo_3_pages_sampleservice_products_products_createpurchaseorderitem_page,
	crud_demo_3_pages_sampleservice_products_products_createsalesorderitem_page : crud_demo_3_pages_sampleservice_products_products_createsalesorderitem_page,
	crud_demo_3_pages_sampleservice_products_products_detail_page : crud_demo_3_pages_sampleservice_products_products_detail_page,
	crud_demo_3_pages_sampleservice_products_products_edit_page : crud_demo_3_pages_sampleservice_products_products_edit_page,
	crud_demo_3_pages_sampleservice_products_products_list_page : crud_demo_3_pages_sampleservice_products_products_list_page,
	crud_demo_3_pages_sampleservice_producttexts_producttexts_create_page : crud_demo_3_pages_sampleservice_producttexts_producttexts_create_page,
	crud_demo_3_pages_sampleservice_producttexts_producttexts_detail_page : crud_demo_3_pages_sampleservice_producttexts_producttexts_detail_page,
	crud_demo_3_pages_sampleservice_producttexts_producttexts_edit_page : crud_demo_3_pages_sampleservice_producttexts_producttexts_edit_page,
	crud_demo_3_pages_sampleservice_producttexts_producttexts_list_page : crud_demo_3_pages_sampleservice_producttexts_producttexts_list_page,
	crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_create_page : crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_create_page,
	crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_createpurchaseorderitem_page : crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_createpurchaseorderitem_page,
	crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_detail_page : crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_detail_page,
	crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_edit_page : crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_edit_page,
	crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_list_page : crud_demo_3_pages_sampleservice_purchaseorderheaders_purchaseorderheaders_list_page,
	crud_demo_3_pages_sampleservice_purchaseorderitems_purchaseorderitems_create_page : crud_demo_3_pages_sampleservice_purchaseorderitems_purchaseorderitems_create_page,
	crud_demo_3_pages_sampleservice_purchaseorderitems_purchaseorderitems_detail_page : crud_demo_3_pages_sampleservice_purchaseorderitems_purchaseorderitems_detail_page,
	crud_demo_3_pages_sampleservice_purchaseorderitems_purchaseorderitems_edit_page : crud_demo_3_pages_sampleservice_purchaseorderitems_purchaseorderitems_edit_page,
	crud_demo_3_pages_sampleservice_purchaseorderitems_purchaseorderitems_list_page : crud_demo_3_pages_sampleservice_purchaseorderitems_purchaseorderitems_list_page,
	crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_create_page : crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_create_page,
	crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_createsalesorderitem_page : crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_createsalesorderitem_page,
	crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_detail_page : crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_detail_page,
	crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_edit_page : crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_edit_page,
	crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_list_page : crud_demo_3_pages_sampleservice_salesorderheaders_salesorderheaders_list_page,
	crud_demo_3_pages_sampleservice_salesorderitems_salesorderitems_create_page : crud_demo_3_pages_sampleservice_salesorderitems_salesorderitems_create_page,
	crud_demo_3_pages_sampleservice_salesorderitems_salesorderitems_detail_page : crud_demo_3_pages_sampleservice_salesorderitems_salesorderitems_detail_page,
	crud_demo_3_pages_sampleservice_salesorderitems_salesorderitems_edit_page : crud_demo_3_pages_sampleservice_salesorderitems_salesorderitems_edit_page,
	crud_demo_3_pages_sampleservice_salesorderitems_salesorderitems_list_page : crud_demo_3_pages_sampleservice_salesorderitems_salesorderitems_list_page,
	crud_demo_3_pages_sampleservice_stock_stock_create_page : crud_demo_3_pages_sampleservice_stock_stock_create_page,
	crud_demo_3_pages_sampleservice_stock_stock_detail_page : crud_demo_3_pages_sampleservice_stock_stock_detail_page,
	crud_demo_3_pages_sampleservice_stock_stock_edit_page : crud_demo_3_pages_sampleservice_stock_stock_edit_page,
	crud_demo_3_pages_sampleservice_stock_stock_list_page : crud_demo_3_pages_sampleservice_stock_stock_list_page,
	crud_demo_3_pages_sampleservice_suppliers_suppliers_create_page : crud_demo_3_pages_sampleservice_suppliers_suppliers_create_page,
	crud_demo_3_pages_sampleservice_suppliers_suppliers_createproduct_page : crud_demo_3_pages_sampleservice_suppliers_suppliers_createproduct_page,
	crud_demo_3_pages_sampleservice_suppliers_suppliers_createpurchaseorderheader_page : crud_demo_3_pages_sampleservice_suppliers_suppliers_createpurchaseorderheader_page,
	crud_demo_3_pages_sampleservice_suppliers_suppliers_detail_page : crud_demo_3_pages_sampleservice_suppliers_suppliers_detail_page,
	crud_demo_3_pages_sampleservice_suppliers_suppliers_edit_page : crud_demo_3_pages_sampleservice_suppliers_suppliers_edit_page,
	crud_demo_3_pages_sampleservice_suppliers_suppliers_list_page : crud_demo_3_pages_sampleservice_suppliers_suppliers_list_page,
	crud_demo_3_pages_user_info_page : crud_demo_3_pages_user_info_page,
	crud_demo_3_rules_application_appupdatefailure_js : crud_demo_3_rules_application_appupdatefailure_js,
	crud_demo_3_rules_application_appupdatesuccess_js : crud_demo_3_rules_application_appupdatesuccess_js,
	crud_demo_3_rules_application_clientismultiusermode_js : crud_demo_3_rules_application_clientismultiusermode_js,
	crud_demo_3_rules_application_getclientsupportversions_js : crud_demo_3_rules_application_getclientsupportversions_js,
	crud_demo_3_rules_application_getclientversion_js : crud_demo_3_rules_application_getclientversion_js,
	crud_demo_3_rules_application_onwillupdate_js : crud_demo_3_rules_application_onwillupdate_js,
	crud_demo_3_rules_application_resetappsettingsandlogout_js : crud_demo_3_rules_application_resetappsettingsandlogout_js,
	crud_demo_3_rules_getuserinfo_js : crud_demo_3_rules_getuserinfo_js,
	crud_demo_3_rules_logging_loglevels_js : crud_demo_3_rules_logging_loglevels_js,
	crud_demo_3_rules_logging_settracecategories_js : crud_demo_3_rules_logging_settracecategories_js,
	crud_demo_3_rules_logging_setuserloglevel_js : crud_demo_3_rules_logging_setuserloglevel_js,
	crud_demo_3_rules_logging_togglelogging_js : crud_demo_3_rules_logging_togglelogging_js,
	crud_demo_3_rules_logging_tracecategories_js : crud_demo_3_rules_logging_tracecategories_js,
	crud_demo_3_rules_logging_userlogsetting_js : crud_demo_3_rules_logging_userlogsetting_js,
	crud_demo_3_rules_sampleservice_customers_customers_deleteconfirmation_js : crud_demo_3_rules_sampleservice_customers_customers_deleteconfirmation_js,
	crud_demo_3_rules_sampleservice_productcategories_productcategories_deleteconfirmation_js : crud_demo_3_rules_sampleservice_productcategories_productcategories_deleteconfirmation_js,
	crud_demo_3_rules_sampleservice_products_products_createentity_js : crud_demo_3_rules_sampleservice_products_products_createentity_js,
	crud_demo_3_rules_sampleservice_products_products_deleteconfirmation_js : crud_demo_3_rules_sampleservice_products_products_deleteconfirmation_js,
	crud_demo_3_rules_sampleservice_producttexts_producttexts_deleteconfirmation_js : crud_demo_3_rules_sampleservice_producttexts_producttexts_deleteconfirmation_js,
	crud_demo_3_rules_sampleservice_purchaseorderheaders_purchaseorderheaders_deleteconfirmation_js : crud_demo_3_rules_sampleservice_purchaseorderheaders_purchaseorderheaders_deleteconfirmation_js,
	crud_demo_3_rules_sampleservice_purchaseorderitems_purchaseorderitems_deleteconfirmation_js : crud_demo_3_rules_sampleservice_purchaseorderitems_purchaseorderitems_deleteconfirmation_js,
	crud_demo_3_rules_sampleservice_salesorderheaders_salesorderheaders_deleteconfirmation_js : crud_demo_3_rules_sampleservice_salesorderheaders_salesorderheaders_deleteconfirmation_js,
	crud_demo_3_rules_sampleservice_salesorderitems_salesorderitems_deleteconfirmation_js : crud_demo_3_rules_sampleservice_salesorderitems_salesorderitems_deleteconfirmation_js,
	crud_demo_3_rules_sampleservice_stock_stock_deleteconfirmation_js : crud_demo_3_rules_sampleservice_stock_stock_deleteconfirmation_js,
	crud_demo_3_rules_sampleservice_suppliers_suppliers_deleteconfirmation_js : crud_demo_3_rules_sampleservice_suppliers_suppliers_deleteconfirmation_js,
	crud_demo_3_rules_service_initialize_js : crud_demo_3_rules_service_initialize_js,
	crud_demo_3_services_sampleservice_service : crud_demo_3_services_sampleservice_service,
	crud_demo_3_styles_styles_css : crud_demo_3_styles_styles_css,
	crud_demo_3_styles_styles_less : crud_demo_3_styles_styles_less,
	crud_demo_3_styles_styles_light_css : crud_demo_3_styles_styles_light_css,
	crud_demo_3_styles_styles_light_json : crud_demo_3_styles_styles_light_json,
	crud_demo_3_styles_styles_light_nss : crud_demo_3_styles_styles_light_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ },

/***/ "./build.definitions/version.mdkbundlerversion"
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
(module) {

"use strict";
module.exports = "1.1\n";

/***/ },

/***/ "webpack/container/entry/bundle.js"
/*!***********************!*\
  !*** container entry ***!
  \***********************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
const moduleMap = {
	".": () => {
		return Promise.resolve().then(() => (() => ((__webpack_require__(/*! ./build.definitions/application-index.js */ "./build.definitions/application-index.js")))));
	}
};
const get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
const init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	const name = "default"
	const oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ },

/***/ "./build.definitions/crud_demo_3/Styles/Styles.light.json"
/*!****************************************************************!*\
  !*** ./build.definitions/crud_demo_3/Styles/Styles.light.json ***!
  \****************************************************************/
(module) {

"use strict";
module.exports = {};

/***/ },

/***/ "./build.definitions/crud_demo_3/jsconfig.json"
/*!*****************************************************!*\
  !*** ./build.definitions/crud_demo_3/jsconfig.json ***!
  \*****************************************************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ },

/***/ "./build.definitions/tsconfig.json"
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":"."},"exclude":["node_modules"]}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		const initPromises = {};
/******/ 		const initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			let initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			const scope = __webpack_require__.S[name];
/******/ 			const warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			const uniqueName = undefined;
/******/ 			const register = (name, version, factory, eager) => {
/******/ 				const versions = scope[name] = scope[name] || {};
/******/ 				const activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			const initExternal = (id) => {
/******/ 				const handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					const module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					const initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					const initResult = initFn(module);
/******/ 					if(initResult?.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			const promises = [];
/******/ 			switch(name) {
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	let __webpack_exports__ = __webpack_require__("webpack/container/entry/bundle.js");
/******/ 	const __webpack_export_target__ = exports;
/******/ 	for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map