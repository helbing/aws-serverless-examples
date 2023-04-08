"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// asset-input/node_modules/.pnpm/@jorgeferrero+stream-to-buffer@2.0.6/node_modules/@jorgeferrero/stream-to-buffer/dist/buffer-stream.js
var require_buffer_stream = __commonJS({
  "asset-input/node_modules/.pnpm/@jorgeferrero+stream-to-buffer@2.0.6/node_modules/@jorgeferrero/stream-to-buffer/dist/buffer-stream.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BufferableStream = void 0;
    var stream_1 = require("stream");
    var BufferableStream = function(_super) {
      __extends(BufferableStream2, _super);
      function BufferableStream2(opts) {
        var _this = _super.call(this, opts) || this;
        _this.chunks = [];
        return _this;
      }
      BufferableStream2.prototype.toBuffer = function() {
        return this.chunksToBuffer();
      };
      BufferableStream2.prototype._write = function(chunk, _, next) {
        this.chunks.push(chunk);
        next();
      };
      BufferableStream2.prototype.chunksToBuffer = function() {
        return Buffer.concat(this.chunks);
      };
      return BufferableStream2;
    }(stream_1.Writable);
    exports.BufferableStream = BufferableStream;
  }
});

// asset-input/node_modules/.pnpm/@jorgeferrero+stream-to-buffer@2.0.6/node_modules/@jorgeferrero/stream-to-buffer/dist/error.js
var require_error = __commonJS({
  "asset-input/node_modules/.pnpm/@jorgeferrero+stream-to-buffer@2.0.6/node_modules/@jorgeferrero/stream-to-buffer/dist/error.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InvalidStreamError = void 0;
    var InvalidStreamError = function(_super) {
      __extends(InvalidStreamError2, _super);
      function InvalidStreamError2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      return InvalidStreamError2;
    }(Error);
    exports.InvalidStreamError = InvalidStreamError;
  }
});

// asset-input/node_modules/.pnpm/@jorgeferrero+stream-to-buffer@2.0.6/node_modules/@jorgeferrero/stream-to-buffer/dist/stream-to-buffer.js
var require_stream_to_buffer = __commonJS({
  "asset-input/node_modules/.pnpm/@jorgeferrero+stream-to-buffer@2.0.6/node_modules/@jorgeferrero/stream-to-buffer/dist/stream-to-buffer.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.streamToBuffer = void 0;
    var buffer_stream_1 = require_buffer_stream();
    var error_1 = require_error();
    function streamToBuffer2(stream) {
      return __awaiter(this, void 0, void 0, function() {
        var bufferableStream;
        return __generator(this, function(_a) {
          if (!stream) {
            throw new error_1.InvalidStreamError("stream is not defined");
          }
          bufferableStream = new buffer_stream_1.BufferableStream();
          return [2, new Promise(function(resolve, reject) {
            stream.on("error", function(error) {
              bufferableStream.emit("error", error);
            }).pipe(bufferableStream).on("finish", function() {
              resolve(bufferableStream.toBuffer());
            }).on("error", function(error) {
              reject(error);
            });
          })];
        });
      });
    }
    exports.streamToBuffer = streamToBuffer2;
  }
});

// asset-input/node_modules/.pnpm/@jorgeferrero+stream-to-buffer@2.0.6/node_modules/@jorgeferrero/stream-to-buffer/dist/index.js
var require_dist = __commonJS({
  "asset-input/node_modules/.pnpm/@jorgeferrero+stream-to-buffer@2.0.6/node_modules/@jorgeferrero/stream-to-buffer/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !exports2.hasOwnProperty(p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_buffer_stream(), exports);
    __exportStar(require_stream_to_buffer(), exports);
  }
});

// asset-input/node_modules/.pnpm/http-status-codes@2.2.0/node_modules/http-status-codes/build/cjs/legacy.js
var require_legacy = __commonJS({
  "asset-input/node_modules/.pnpm/http-status-codes@2.2.0/node_modules/http-status-codes/build/cjs/legacy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.USE_PROXY = exports.UNSUPPORTED_MEDIA_TYPE = exports.UNPROCESSABLE_ENTITY = exports.UNAUTHORIZED = exports.TOO_MANY_REQUESTS = exports.TEMPORARY_REDIRECT = exports.SWITCHING_PROTOCOLS = exports.SERVICE_UNAVAILABLE = exports.SEE_OTHER = exports.RESET_CONTENT = exports.REQUESTED_RANGE_NOT_SATISFIABLE = exports.REQUEST_URI_TOO_LONG = exports.REQUEST_TOO_LONG = exports.REQUEST_TIMEOUT = exports.REQUEST_HEADER_FIELDS_TOO_LARGE = exports.PROXY_AUTHENTICATION_REQUIRED = exports.PROCESSING = exports.PRECONDITION_REQUIRED = exports.PRECONDITION_FAILED = exports.PERMANENT_REDIRECT = exports.PAYMENT_REQUIRED = exports.PARTIAL_CONTENT = exports.OK = exports.NOT_MODIFIED = exports.NOT_IMPLEMENTED = exports.NOT_FOUND = exports.NOT_ACCEPTABLE = exports.NON_AUTHORITATIVE_INFORMATION = exports.NO_CONTENT = exports.NETWORK_AUTHENTICATION_REQUIRED = exports.MULTIPLE_CHOICES = exports.MULTI_STATUS = exports.MOVED_TEMPORARILY = exports.MOVED_PERMANENTLY = exports.METHOD_NOT_ALLOWED = exports.METHOD_FAILURE = exports.LOCKED = exports.LENGTH_REQUIRED = exports.INTERNAL_SERVER_ERROR = exports.INSUFFICIENT_STORAGE = exports.INSUFFICIENT_SPACE_ON_RESOURCE = exports.IM_A_TEAPOT = exports.HTTP_VERSION_NOT_SUPPORTED = exports.GONE = exports.GATEWAY_TIMEOUT = exports.FORBIDDEN = exports.FAILED_DEPENDENCY = exports.EXPECTATION_FAILED = exports.CREATED = exports.CONTINUE = exports.CONFLICT = exports.BAD_REQUEST = exports.BAD_GATEWAY = exports.ACCEPTED = void 0;
    exports.ACCEPTED = 202;
    exports.BAD_GATEWAY = 502;
    exports.BAD_REQUEST = 400;
    exports.CONFLICT = 409;
    exports.CONTINUE = 100;
    exports.CREATED = 201;
    exports.EXPECTATION_FAILED = 417;
    exports.FAILED_DEPENDENCY = 424;
    exports.FORBIDDEN = 403;
    exports.GATEWAY_TIMEOUT = 504;
    exports.GONE = 410;
    exports.HTTP_VERSION_NOT_SUPPORTED = 505;
    exports.IM_A_TEAPOT = 418;
    exports.INSUFFICIENT_SPACE_ON_RESOURCE = 419;
    exports.INSUFFICIENT_STORAGE = 507;
    exports.INTERNAL_SERVER_ERROR = 500;
    exports.LENGTH_REQUIRED = 411;
    exports.LOCKED = 423;
    exports.METHOD_FAILURE = 420;
    exports.METHOD_NOT_ALLOWED = 405;
    exports.MOVED_PERMANENTLY = 301;
    exports.MOVED_TEMPORARILY = 302;
    exports.MULTI_STATUS = 207;
    exports.MULTIPLE_CHOICES = 300;
    exports.NETWORK_AUTHENTICATION_REQUIRED = 511;
    exports.NO_CONTENT = 204;
    exports.NON_AUTHORITATIVE_INFORMATION = 203;
    exports.NOT_ACCEPTABLE = 406;
    exports.NOT_FOUND = 404;
    exports.NOT_IMPLEMENTED = 501;
    exports.NOT_MODIFIED = 304;
    exports.OK = 200;
    exports.PARTIAL_CONTENT = 206;
    exports.PAYMENT_REQUIRED = 402;
    exports.PERMANENT_REDIRECT = 308;
    exports.PRECONDITION_FAILED = 412;
    exports.PRECONDITION_REQUIRED = 428;
    exports.PROCESSING = 102;
    exports.PROXY_AUTHENTICATION_REQUIRED = 407;
    exports.REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
    exports.REQUEST_TIMEOUT = 408;
    exports.REQUEST_TOO_LONG = 413;
    exports.REQUEST_URI_TOO_LONG = 414;
    exports.REQUESTED_RANGE_NOT_SATISFIABLE = 416;
    exports.RESET_CONTENT = 205;
    exports.SEE_OTHER = 303;
    exports.SERVICE_UNAVAILABLE = 503;
    exports.SWITCHING_PROTOCOLS = 101;
    exports.TEMPORARY_REDIRECT = 307;
    exports.TOO_MANY_REQUESTS = 429;
    exports.UNAUTHORIZED = 401;
    exports.UNPROCESSABLE_ENTITY = 422;
    exports.UNSUPPORTED_MEDIA_TYPE = 415;
    exports.USE_PROXY = 305;
    exports.default = {
      ACCEPTED: exports.ACCEPTED,
      BAD_GATEWAY: exports.BAD_GATEWAY,
      BAD_REQUEST: exports.BAD_REQUEST,
      CONFLICT: exports.CONFLICT,
      CONTINUE: exports.CONTINUE,
      CREATED: exports.CREATED,
      EXPECTATION_FAILED: exports.EXPECTATION_FAILED,
      FORBIDDEN: exports.FORBIDDEN,
      GATEWAY_TIMEOUT: exports.GATEWAY_TIMEOUT,
      GONE: exports.GONE,
      HTTP_VERSION_NOT_SUPPORTED: exports.HTTP_VERSION_NOT_SUPPORTED,
      IM_A_TEAPOT: exports.IM_A_TEAPOT,
      INSUFFICIENT_SPACE_ON_RESOURCE: exports.INSUFFICIENT_SPACE_ON_RESOURCE,
      INSUFFICIENT_STORAGE: exports.INSUFFICIENT_STORAGE,
      INTERNAL_SERVER_ERROR: exports.INTERNAL_SERVER_ERROR,
      LENGTH_REQUIRED: exports.LENGTH_REQUIRED,
      LOCKED: exports.LOCKED,
      METHOD_FAILURE: exports.METHOD_FAILURE,
      METHOD_NOT_ALLOWED: exports.METHOD_NOT_ALLOWED,
      MOVED_PERMANENTLY: exports.MOVED_PERMANENTLY,
      MOVED_TEMPORARILY: exports.MOVED_TEMPORARILY,
      MULTI_STATUS: exports.MULTI_STATUS,
      MULTIPLE_CHOICES: exports.MULTIPLE_CHOICES,
      NETWORK_AUTHENTICATION_REQUIRED: exports.NETWORK_AUTHENTICATION_REQUIRED,
      NO_CONTENT: exports.NO_CONTENT,
      NON_AUTHORITATIVE_INFORMATION: exports.NON_AUTHORITATIVE_INFORMATION,
      NOT_ACCEPTABLE: exports.NOT_ACCEPTABLE,
      NOT_FOUND: exports.NOT_FOUND,
      NOT_IMPLEMENTED: exports.NOT_IMPLEMENTED,
      NOT_MODIFIED: exports.NOT_MODIFIED,
      OK: exports.OK,
      PARTIAL_CONTENT: exports.PARTIAL_CONTENT,
      PAYMENT_REQUIRED: exports.PAYMENT_REQUIRED,
      PERMANENT_REDIRECT: exports.PERMANENT_REDIRECT,
      PRECONDITION_FAILED: exports.PRECONDITION_FAILED,
      PRECONDITION_REQUIRED: exports.PRECONDITION_REQUIRED,
      PROCESSING: exports.PROCESSING,
      PROXY_AUTHENTICATION_REQUIRED: exports.PROXY_AUTHENTICATION_REQUIRED,
      REQUEST_HEADER_FIELDS_TOO_LARGE: exports.REQUEST_HEADER_FIELDS_TOO_LARGE,
      REQUEST_TIMEOUT: exports.REQUEST_TIMEOUT,
      REQUEST_TOO_LONG: exports.REQUEST_TOO_LONG,
      REQUEST_URI_TOO_LONG: exports.REQUEST_URI_TOO_LONG,
      REQUESTED_RANGE_NOT_SATISFIABLE: exports.REQUESTED_RANGE_NOT_SATISFIABLE,
      RESET_CONTENT: exports.RESET_CONTENT,
      SEE_OTHER: exports.SEE_OTHER,
      SERVICE_UNAVAILABLE: exports.SERVICE_UNAVAILABLE,
      SWITCHING_PROTOCOLS: exports.SWITCHING_PROTOCOLS,
      TEMPORARY_REDIRECT: exports.TEMPORARY_REDIRECT,
      TOO_MANY_REQUESTS: exports.TOO_MANY_REQUESTS,
      UNAUTHORIZED: exports.UNAUTHORIZED,
      UNPROCESSABLE_ENTITY: exports.UNPROCESSABLE_ENTITY,
      UNSUPPORTED_MEDIA_TYPE: exports.UNSUPPORTED_MEDIA_TYPE,
      USE_PROXY: exports.USE_PROXY
    };
  }
});

// asset-input/node_modules/.pnpm/http-status-codes@2.2.0/node_modules/http-status-codes/build/cjs/utils.js
var require_utils = __commonJS({
  "asset-input/node_modules/.pnpm/http-status-codes@2.2.0/node_modules/http-status-codes/build/cjs/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reasonPhraseToStatusCode = exports.statusCodeToReasonPhrase = void 0;
    exports.statusCodeToReasonPhrase = {
      "202": "Accepted",
      "502": "Bad Gateway",
      "400": "Bad Request",
      "409": "Conflict",
      "100": "Continue",
      "201": "Created",
      "417": "Expectation Failed",
      "424": "Failed Dependency",
      "403": "Forbidden",
      "504": "Gateway Timeout",
      "410": "Gone",
      "505": "HTTP Version Not Supported",
      "418": "I'm a teapot",
      "419": "Insufficient Space on Resource",
      "507": "Insufficient Storage",
      "500": "Internal Server Error",
      "411": "Length Required",
      "423": "Locked",
      "420": "Method Failure",
      "405": "Method Not Allowed",
      "301": "Moved Permanently",
      "302": "Moved Temporarily",
      "207": "Multi-Status",
      "300": "Multiple Choices",
      "511": "Network Authentication Required",
      "204": "No Content",
      "203": "Non Authoritative Information",
      "406": "Not Acceptable",
      "404": "Not Found",
      "501": "Not Implemented",
      "304": "Not Modified",
      "200": "OK",
      "206": "Partial Content",
      "402": "Payment Required",
      "308": "Permanent Redirect",
      "412": "Precondition Failed",
      "428": "Precondition Required",
      "102": "Processing",
      "407": "Proxy Authentication Required",
      "431": "Request Header Fields Too Large",
      "408": "Request Timeout",
      "413": "Request Entity Too Large",
      "414": "Request-URI Too Long",
      "416": "Requested Range Not Satisfiable",
      "205": "Reset Content",
      "303": "See Other",
      "503": "Service Unavailable",
      "101": "Switching Protocols",
      "307": "Temporary Redirect",
      "429": "Too Many Requests",
      "401": "Unauthorized",
      "451": "Unavailable For Legal Reasons",
      "422": "Unprocessable Entity",
      "415": "Unsupported Media Type",
      "305": "Use Proxy",
      "421": "Misdirected Request"
    };
    exports.reasonPhraseToStatusCode = {
      "Accepted": 202,
      "Bad Gateway": 502,
      "Bad Request": 400,
      "Conflict": 409,
      "Continue": 100,
      "Created": 201,
      "Expectation Failed": 417,
      "Failed Dependency": 424,
      "Forbidden": 403,
      "Gateway Timeout": 504,
      "Gone": 410,
      "HTTP Version Not Supported": 505,
      "I'm a teapot": 418,
      "Insufficient Space on Resource": 419,
      "Insufficient Storage": 507,
      "Internal Server Error": 500,
      "Length Required": 411,
      "Locked": 423,
      "Method Failure": 420,
      "Method Not Allowed": 405,
      "Moved Permanently": 301,
      "Moved Temporarily": 302,
      "Multi-Status": 207,
      "Multiple Choices": 300,
      "Network Authentication Required": 511,
      "No Content": 204,
      "Non Authoritative Information": 203,
      "Not Acceptable": 406,
      "Not Found": 404,
      "Not Implemented": 501,
      "Not Modified": 304,
      "OK": 200,
      "Partial Content": 206,
      "Payment Required": 402,
      "Permanent Redirect": 308,
      "Precondition Failed": 412,
      "Precondition Required": 428,
      "Processing": 102,
      "Proxy Authentication Required": 407,
      "Request Header Fields Too Large": 431,
      "Request Timeout": 408,
      "Request Entity Too Large": 413,
      "Request-URI Too Long": 414,
      "Requested Range Not Satisfiable": 416,
      "Reset Content": 205,
      "See Other": 303,
      "Service Unavailable": 503,
      "Switching Protocols": 101,
      "Temporary Redirect": 307,
      "Too Many Requests": 429,
      "Unauthorized": 401,
      "Unavailable For Legal Reasons": 451,
      "Unprocessable Entity": 422,
      "Unsupported Media Type": 415,
      "Use Proxy": 305,
      "Misdirected Request": 421
    };
  }
});

// asset-input/node_modules/.pnpm/http-status-codes@2.2.0/node_modules/http-status-codes/build/cjs/utils-functions.js
var require_utils_functions = __commonJS({
  "asset-input/node_modules/.pnpm/http-status-codes@2.2.0/node_modules/http-status-codes/build/cjs/utils-functions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStatusText = exports.getStatusCode = exports.getReasonPhrase = void 0;
    var utils_1 = require_utils();
    function getReasonPhrase(statusCode) {
      var result = utils_1.statusCodeToReasonPhrase[statusCode.toString()];
      if (!result) {
        throw new Error("Status code does not exist: " + statusCode);
      }
      return result;
    }
    exports.getReasonPhrase = getReasonPhrase;
    function getStatusCode(reasonPhrase) {
      var result = utils_1.reasonPhraseToStatusCode[reasonPhrase];
      if (!result) {
        throw new Error("Reason phrase does not exist: " + reasonPhrase);
      }
      return result;
    }
    exports.getStatusCode = getStatusCode;
    exports.getStatusText = getReasonPhrase;
  }
});

// asset-input/node_modules/.pnpm/http-status-codes@2.2.0/node_modules/http-status-codes/build/cjs/status-codes.js
var require_status_codes = __commonJS({
  "asset-input/node_modules/.pnpm/http-status-codes@2.2.0/node_modules/http-status-codes/build/cjs/status-codes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StatusCodes = void 0;
    var StatusCodes2;
    (function(StatusCodes3) {
      StatusCodes3[StatusCodes3["ACCEPTED"] = 202] = "ACCEPTED";
      StatusCodes3[StatusCodes3["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
      StatusCodes3[StatusCodes3["BAD_REQUEST"] = 400] = "BAD_REQUEST";
      StatusCodes3[StatusCodes3["CONFLICT"] = 409] = "CONFLICT";
      StatusCodes3[StatusCodes3["CONTINUE"] = 100] = "CONTINUE";
      StatusCodes3[StatusCodes3["CREATED"] = 201] = "CREATED";
      StatusCodes3[StatusCodes3["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
      StatusCodes3[StatusCodes3["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
      StatusCodes3[StatusCodes3["FORBIDDEN"] = 403] = "FORBIDDEN";
      StatusCodes3[StatusCodes3["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
      StatusCodes3[StatusCodes3["GONE"] = 410] = "GONE";
      StatusCodes3[StatusCodes3["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
      StatusCodes3[StatusCodes3["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
      StatusCodes3[StatusCodes3["INSUFFICIENT_SPACE_ON_RESOURCE"] = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE";
      StatusCodes3[StatusCodes3["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
      StatusCodes3[StatusCodes3["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
      StatusCodes3[StatusCodes3["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
      StatusCodes3[StatusCodes3["LOCKED"] = 423] = "LOCKED";
      StatusCodes3[StatusCodes3["METHOD_FAILURE"] = 420] = "METHOD_FAILURE";
      StatusCodes3[StatusCodes3["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
      StatusCodes3[StatusCodes3["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
      StatusCodes3[StatusCodes3["MOVED_TEMPORARILY"] = 302] = "MOVED_TEMPORARILY";
      StatusCodes3[StatusCodes3["MULTI_STATUS"] = 207] = "MULTI_STATUS";
      StatusCodes3[StatusCodes3["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
      StatusCodes3[StatusCodes3["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
      StatusCodes3[StatusCodes3["NO_CONTENT"] = 204] = "NO_CONTENT";
      StatusCodes3[StatusCodes3["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
      StatusCodes3[StatusCodes3["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
      StatusCodes3[StatusCodes3["NOT_FOUND"] = 404] = "NOT_FOUND";
      StatusCodes3[StatusCodes3["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
      StatusCodes3[StatusCodes3["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
      StatusCodes3[StatusCodes3["OK"] = 200] = "OK";
      StatusCodes3[StatusCodes3["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
      StatusCodes3[StatusCodes3["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
      StatusCodes3[StatusCodes3["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
      StatusCodes3[StatusCodes3["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
      StatusCodes3[StatusCodes3["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
      StatusCodes3[StatusCodes3["PROCESSING"] = 102] = "PROCESSING";
      StatusCodes3[StatusCodes3["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
      StatusCodes3[StatusCodes3["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
      StatusCodes3[StatusCodes3["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
      StatusCodes3[StatusCodes3["REQUEST_TOO_LONG"] = 413] = "REQUEST_TOO_LONG";
      StatusCodes3[StatusCodes3["REQUEST_URI_TOO_LONG"] = 414] = "REQUEST_URI_TOO_LONG";
      StatusCodes3[StatusCodes3["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
      StatusCodes3[StatusCodes3["RESET_CONTENT"] = 205] = "RESET_CONTENT";
      StatusCodes3[StatusCodes3["SEE_OTHER"] = 303] = "SEE_OTHER";
      StatusCodes3[StatusCodes3["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
      StatusCodes3[StatusCodes3["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
      StatusCodes3[StatusCodes3["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
      StatusCodes3[StatusCodes3["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
      StatusCodes3[StatusCodes3["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
      StatusCodes3[StatusCodes3["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
      StatusCodes3[StatusCodes3["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
      StatusCodes3[StatusCodes3["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
      StatusCodes3[StatusCodes3["USE_PROXY"] = 305] = "USE_PROXY";
      StatusCodes3[StatusCodes3["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    })(StatusCodes2 = exports.StatusCodes || (exports.StatusCodes = {}));
  }
});

// asset-input/node_modules/.pnpm/http-status-codes@2.2.0/node_modules/http-status-codes/build/cjs/reason-phrases.js
var require_reason_phrases = __commonJS({
  "asset-input/node_modules/.pnpm/http-status-codes@2.2.0/node_modules/http-status-codes/build/cjs/reason-phrases.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReasonPhrases = void 0;
    var ReasonPhrases;
    (function(ReasonPhrases2) {
      ReasonPhrases2["ACCEPTED"] = "Accepted";
      ReasonPhrases2["BAD_GATEWAY"] = "Bad Gateway";
      ReasonPhrases2["BAD_REQUEST"] = "Bad Request";
      ReasonPhrases2["CONFLICT"] = "Conflict";
      ReasonPhrases2["CONTINUE"] = "Continue";
      ReasonPhrases2["CREATED"] = "Created";
      ReasonPhrases2["EXPECTATION_FAILED"] = "Expectation Failed";
      ReasonPhrases2["FAILED_DEPENDENCY"] = "Failed Dependency";
      ReasonPhrases2["FORBIDDEN"] = "Forbidden";
      ReasonPhrases2["GATEWAY_TIMEOUT"] = "Gateway Timeout";
      ReasonPhrases2["GONE"] = "Gone";
      ReasonPhrases2["HTTP_VERSION_NOT_SUPPORTED"] = "HTTP Version Not Supported";
      ReasonPhrases2["IM_A_TEAPOT"] = "I'm a teapot";
      ReasonPhrases2["INSUFFICIENT_SPACE_ON_RESOURCE"] = "Insufficient Space on Resource";
      ReasonPhrases2["INSUFFICIENT_STORAGE"] = "Insufficient Storage";
      ReasonPhrases2["INTERNAL_SERVER_ERROR"] = "Internal Server Error";
      ReasonPhrases2["LENGTH_REQUIRED"] = "Length Required";
      ReasonPhrases2["LOCKED"] = "Locked";
      ReasonPhrases2["METHOD_FAILURE"] = "Method Failure";
      ReasonPhrases2["METHOD_NOT_ALLOWED"] = "Method Not Allowed";
      ReasonPhrases2["MOVED_PERMANENTLY"] = "Moved Permanently";
      ReasonPhrases2["MOVED_TEMPORARILY"] = "Moved Temporarily";
      ReasonPhrases2["MULTI_STATUS"] = "Multi-Status";
      ReasonPhrases2["MULTIPLE_CHOICES"] = "Multiple Choices";
      ReasonPhrases2["NETWORK_AUTHENTICATION_REQUIRED"] = "Network Authentication Required";
      ReasonPhrases2["NO_CONTENT"] = "No Content";
      ReasonPhrases2["NON_AUTHORITATIVE_INFORMATION"] = "Non Authoritative Information";
      ReasonPhrases2["NOT_ACCEPTABLE"] = "Not Acceptable";
      ReasonPhrases2["NOT_FOUND"] = "Not Found";
      ReasonPhrases2["NOT_IMPLEMENTED"] = "Not Implemented";
      ReasonPhrases2["NOT_MODIFIED"] = "Not Modified";
      ReasonPhrases2["OK"] = "OK";
      ReasonPhrases2["PARTIAL_CONTENT"] = "Partial Content";
      ReasonPhrases2["PAYMENT_REQUIRED"] = "Payment Required";
      ReasonPhrases2["PERMANENT_REDIRECT"] = "Permanent Redirect";
      ReasonPhrases2["PRECONDITION_FAILED"] = "Precondition Failed";
      ReasonPhrases2["PRECONDITION_REQUIRED"] = "Precondition Required";
      ReasonPhrases2["PROCESSING"] = "Processing";
      ReasonPhrases2["PROXY_AUTHENTICATION_REQUIRED"] = "Proxy Authentication Required";
      ReasonPhrases2["REQUEST_HEADER_FIELDS_TOO_LARGE"] = "Request Header Fields Too Large";
      ReasonPhrases2["REQUEST_TIMEOUT"] = "Request Timeout";
      ReasonPhrases2["REQUEST_TOO_LONG"] = "Request Entity Too Large";
      ReasonPhrases2["REQUEST_URI_TOO_LONG"] = "Request-URI Too Long";
      ReasonPhrases2["REQUESTED_RANGE_NOT_SATISFIABLE"] = "Requested Range Not Satisfiable";
      ReasonPhrases2["RESET_CONTENT"] = "Reset Content";
      ReasonPhrases2["SEE_OTHER"] = "See Other";
      ReasonPhrases2["SERVICE_UNAVAILABLE"] = "Service Unavailable";
      ReasonPhrases2["SWITCHING_PROTOCOLS"] = "Switching Protocols";
      ReasonPhrases2["TEMPORARY_REDIRECT"] = "Temporary Redirect";
      ReasonPhrases2["TOO_MANY_REQUESTS"] = "Too Many Requests";
      ReasonPhrases2["UNAUTHORIZED"] = "Unauthorized";
      ReasonPhrases2["UNAVAILABLE_FOR_LEGAL_REASONS"] = "Unavailable For Legal Reasons";
      ReasonPhrases2["UNPROCESSABLE_ENTITY"] = "Unprocessable Entity";
      ReasonPhrases2["UNSUPPORTED_MEDIA_TYPE"] = "Unsupported Media Type";
      ReasonPhrases2["USE_PROXY"] = "Use Proxy";
      ReasonPhrases2["MISDIRECTED_REQUEST"] = "Misdirected Request";
    })(ReasonPhrases = exports.ReasonPhrases || (exports.ReasonPhrases = {}));
  }
});

// asset-input/node_modules/.pnpm/http-status-codes@2.2.0/node_modules/http-status-codes/build/cjs/index.js
var require_cjs = __commonJS({
  "asset-input/node_modules/.pnpm/http-status-codes@2.2.0/node_modules/http-status-codes/build/cjs/index.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !exports2.hasOwnProperty(p))
          __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var legacy_1 = __importDefault(require_legacy());
    var utils_functions_1 = require_utils_functions();
    var utils_functions_2 = require_utils_functions();
    Object.defineProperty(exports, "getStatusCode", { enumerable: true, get: function() {
      return utils_functions_2.getStatusCode;
    } });
    Object.defineProperty(exports, "getReasonPhrase", { enumerable: true, get: function() {
      return utils_functions_2.getReasonPhrase;
    } });
    Object.defineProperty(exports, "getStatusText", { enumerable: true, get: function() {
      return utils_functions_2.getStatusText;
    } });
    var status_codes_1 = require_status_codes();
    Object.defineProperty(exports, "StatusCodes", { enumerable: true, get: function() {
      return status_codes_1.StatusCodes;
    } });
    var reason_phrases_1 = require_reason_phrases();
    Object.defineProperty(exports, "ReasonPhrases", { enumerable: true, get: function() {
      return reason_phrases_1.ReasonPhrases;
    } });
    __exportStar(require_legacy(), exports);
    exports.default = __assign(__assign({}, legacy_1.default), {
      getStatusCode: utils_functions_1.getStatusCode,
      getStatusText: utils_functions_1.getStatusText
    });
  }
});

// asset-input/examples/s3-thumbnail/lambda/index.ts
var lambda_exports = {};
__export(lambda_exports, {
  handler: () => handler,
  typeMatch: () => typeMatch
});
module.exports = __toCommonJS(lambda_exports);
var import_client_s3 = require("@aws-sdk/client-s3");
var import_stream_to_buffer = __toESM(require_dist());
var import_http_status_codes = __toESM(require_cjs());

// asset-input/examples/s3-thumbnail/lambda/thumbnail.ts
var import_sharp = __toESM(require("sharp"));
async function thumbnail(buffer, size) {
  return (0, import_sharp.default)(buffer).resize({ width: size || 100 }).toBuffer();
}

// asset-input/examples/s3-thumbnail/lambda/index.ts
async function handler(event) {
  const envs = process.env;
  if (envs.DEST_BUCKET == "") {
    throw new Error("Destination bucket unset");
  }
  if (event.Records.length == 0 || event.Records.length > 1) {
    throw new Error("Illegal record size, s3 event records = 0 or records > 1");
  }
  const record = event.Records[0];
  const key = record.s3.object.key;
  if (!typeMatch(envs.SUPPORT_IMAGE_TYPES.split(","), key)) {
    throw new Error("Not supported image type");
  }
  const s3 = new import_client_s3.S3Client({});
  const image = await s3.send(
    new import_client_s3.GetObjectCommand({
      Bucket: record.s3.bucket.name,
      Key: record.s3.object.key
    })
  );
  if (image.$metadata.httpStatusCode != import_http_status_codes.StatusCodes.OK) {
    throw new Error("S3 get object failed");
  }
  const buffer = await (0, import_stream_to_buffer.streamToBuffer)(image.Body);
  const resizedBuffer = await thumbnail(buffer, parseInt(envs.RESIZE_WIDTH));
  const result = await s3.send(
    new import_client_s3.PutObjectCommand({
      Bucket: envs.DEST_BUCKET,
      Key: record.s3.object.key,
      Body: resizedBuffer,
      ContentType: image.ContentType
    })
  );
  if (result.$metadata.httpStatusCode != import_http_status_codes.StatusCodes.OK && result.$metadata.httpStatusCode != import_http_status_codes.StatusCodes.CREATED) {
    throw new Error("S3 put object failed");
  }
}
function typeMatch(supportImageTypes, key) {
  key = decodeURIComponent(key.replace(/\+/g, " "));
  const typeMatch2 = key.match(/\.([^.]*)$/);
  if (!typeMatch2) {
    return false;
  }
  const imageType = typeMatch2[1].toLowerCase();
  return supportImageTypes.includes(imageType);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler,
  typeMatch
});
