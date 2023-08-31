"use strict";
(() => {
var exports = {};
exports.id = 205;
exports.ids = [205];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 2196:
/***/ ((module) => {

module.exports = require("next/dist/compiled/ua-parser-js");

/***/ }),

/***/ 2081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 1808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 5477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 4404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "handlers": () => (/* reexport */ route_namespaceObject),
  "headerHooks": () => (/* reexport */ headers),
  "requestAsyncStorage": () => (/* reexport */ request_async_storage.requestAsyncStorage),
  "resolvedPagePath": () => (/* binding */ resolvedPagePath),
  "serverHooks": () => (/* reexport */ hooks_server_context),
  "staticGenerationAsyncStorage": () => (/* reexport */ static_generation_async_storage.staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* reexport */ static_generation_bailout.staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/sendmail/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "POST": () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(7376);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(139);
// EXTERNAL MODULE: ./node_modules/nodemailer/lib/nodemailer.js
var nodemailer = __webpack_require__(7812);
;// CONCATENATED MODULE: ./src/app/api/sendmail/route.ts


async function POST(request) {
    try {
        const { Email , Subject , Name , Phone , Message  } = await request.json();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "maheshddeshmukh068@gmail.com",
                pass: "yeriztzkclrwjwhq"
            }
        });
        const mailOption = {
            from: "deshmukh.mahesh.n@gmail.com",
            to: "deshmukh.mahesh.n@gmail.com",
            subject: "Counseling Session Enquiry",
            html: `
        <h3>Hello Mahesh</h3>
        <li> Name: ${Name}</li>
        <li> Email: ${Email}</li>
        <li> Phone: ${Phone}</li>
        <li> Subject: ${Subject}</li>
        <li> Message: ${Message}</li> 
        `
        };
        await transporter.sendMail(mailOption);
        return server.NextResponse.json({
            message: "Email Sent Successfully"
        }, {
            status: 200
        });
    } catch (error) {
        return server.NextResponse.json({
            message: error
        }, {
            status: 500
        });
    }
}

// EXTERNAL MODULE: ./node_modules/next/dist/client/components/static-generation-async-storage.js
var static_generation_async_storage = __webpack_require__(9029);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/hooks-server-context.js
var hooks_server_context = __webpack_require__(4065);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/static-generation-bailout.js
var static_generation_bailout = __webpack_require__(224);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/headers.js
var headers = __webpack_require__(5153);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/request-async-storage.js
var request_async_storage = __webpack_require__(2458);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsendmail%2Froute&pagePath=private-next-app-dir%2Fapi%2Fsendmail%2Froute.ts&appDir=%2FUsers%2Fmahesh%2FProgram%2FReact%2Fsuresmartc%2Fsrc%2Fapp&appPaths=%2Fapi%2Fsendmail%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&assetPrefix=%2Fsuresmart!

    

    
    const resolvedPagePath = "/Users/mahesh/Program/React/suresmartc/src/app/api/sendmail/route.ts"

    
  
    
    
    
    
    
  
    
  

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [359,508], () => (__webpack_exec__(362)));
module.exports = __webpack_exports__;

})();