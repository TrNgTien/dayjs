import dayjs, { Dayjs as DayjsDateType } from "dayjs";
declare enum MtDateFormat {
    TIME = "HH:mm",
    DATE = "YYYY-MM-DD",
    DAY_MONTH_YEAR = "D MMM YYYY",
    DATETIME = "YYYY-MM-DDTHH:mm",
    DATETIME_WITH_SECONDS = "YYYY-MM-DDTHH:mm:ss",
    ISO8601_WITH_MILLISECONDS = "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
}
declare const getIsoDateTime: () => string;
declare const getNowTime: (format?: MtDateFormat) => string;
declare const getTodayDate: (format?: MtDateFormat) => string;
declare const getDateFormatted: (date?: string | Date | DayjsDateType, format?: MtDateFormat) => string;
declare const getLocalDateTime: (date?: string | Date | MtDateFormat, format?: MtDateFormat) => string;
export { dayjs, getDateFormatted, getIsoDateTime, getLocalDateTime, getNowTime, getTodayDate, };
