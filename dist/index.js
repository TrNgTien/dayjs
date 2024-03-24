"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodayDate = exports.getNowTime = exports.getLocalDateTime = exports.getIsoDateTime = exports.getDateFormatted = exports.dayjs = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
exports.dayjs = dayjs_1.default;
var customParseFormat_1 = __importDefault(require("dayjs/plugin/customParseFormat"));
var isBetween_1 = __importDefault(require("dayjs/plugin/isBetween"));
var timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
var utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(customParseFormat_1.default);
dayjs_1.default.extend(isBetween_1.default);
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(timezone_1.default);
var tz = "Asia/Seoul";
dayjs_1.default.tz.setDefault(tz);
var MtDateFormat;
(function (MtDateFormat) {
    MtDateFormat["TIME"] = "HH:mm";
    MtDateFormat["DATE"] = "YYYY-MM-DD";
    MtDateFormat["DAY_MONTH_YEAR"] = "D MMM YYYY";
    MtDateFormat["DATETIME"] = "YYYY-MM-DDTHH:mm";
    MtDateFormat["DATETIME_WITH_SECONDS"] = "YYYY-MM-DDTHH:mm:ss";
    MtDateFormat["ISO8601_WITH_MILLISECONDS"] = "YYYY-MM-DDTHH:mm:ss.SSS[Z]";
})(MtDateFormat || (MtDateFormat = {}));
var getIsoDateTime = function () {
    // the issue with Date.prototype.toISOString() is that it TRANSFORMS time to UTC
    // which causes some validations to fail: e.g. you cannot document an activity before planned dateTime
    return (0, dayjs_1.default)().format(MtDateFormat.ISO8601_WITH_MILLISECONDS);
};
exports.getIsoDateTime = getIsoDateTime;
var getNowTime = function (format) {
    if (format === void 0) { format = MtDateFormat.TIME; }
    return (0, dayjs_1.default)().format(format);
};
exports.getNowTime = getNowTime;
var getTodayDate = function (format) {
    if (format === void 0) { format = MtDateFormat.DATE; }
    return (0, dayjs_1.default)().format(format);
};
exports.getTodayDate = getTodayDate;
var getDateFormatted = function (date, format) {
    if (date === void 0) { date = new Date(); }
    if (format === void 0) { format = MtDateFormat.DATE; }
    return (0, dayjs_1.default)(date).isValid() ? (0, dayjs_1.default)(date).format(format) : "";
};
exports.getDateFormatted = getDateFormatted;
var getLocalDateTime = function (date, format) {
    if (date === void 0) { date = new Date(); }
    if (format === void 0) { format = MtDateFormat.DATETIME; }
    return (0, dayjs_1.default)(date).isValid() ? dayjs_1.default.utc(date).local().format(format) : "";
};
exports.getLocalDateTime = getLocalDateTime;
//# sourceMappingURL=index.js.map