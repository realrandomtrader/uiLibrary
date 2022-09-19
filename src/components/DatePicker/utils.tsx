import moment, { Moment } from "moment";

/**
 * @param {number} year The start year
 * @param {number} month The end month
 */
function getMonthDateRange(year:number, month:number) {
  // month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
  // array is 'year', 'month', 'day', etc
  const startDate = moment([year, month]);

  // Clone the value before .endOf()
  const endDate = moment(startDate).endOf("month");

  // make sure to call toDate() for plain JavaScript date type
  return { start: startDate, end: endDate };
}

/**
 * @param {date|Moment} start The start date
 * @param {date|Moment} end The end date
 * @param {"monday"|"saturday"|"sunday"} weekStart First Day of the Week
 */
type weekStart = "monday"|"saturday"|"sunday"

function getCalendarDateRange(start: Moment, end: Moment, weekStart: weekStart) {
  const weekStartNum = start.day() || 7;
  const weekEndNum = end.day() || 7;

  let subtractDays = weekStartNum;

  if (weekStart === "monday") {
    subtractDays = weekStartNum - 1;
  } else if (weekStart === "saturday") {
    subtractDays = weekStartNum + 1;
  }

  const startCalendar = start.subtract(subtractDays, "d");
  const endCalendar = end.add(7 - weekEndNum, "d");

  return {
    startCalendar: startCalendar,
    endCalendar: endCalendar
  };
}

/**
 * @param {date|Moment} start The start date
 * @param {date|Moment} end The end date
 * @param { "year" | "years" | "y" | "month" | "months" | "M" |/
 * "week" | "weeks" | "w" | "day" | "days" } type The range type. eg: 'days', 'hours' etc
 */
type timeRange = "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days"

function getRange(start: Moment, end: Moment, type: timeRange) {
  const diff = end.diff(start, type, true);

  const range = [];
  for (let i = 0; i < diff; i++) {
    range.push(moment(start).add(i, type));
  }
  return range;
}

/**
 * Array split into groups of specific length
 * @param {[moment]} list The list of date
 * @param {number} howMany The end date
 */
function arrayTo2DArray2(list: Object[], howMany:number) {
  let idx = 0;
  const result = [];

  while (idx < list.length) {
    if (idx % howMany === 0) result.push([]);
    // @ts-ignore
    result[result.length - 1].push(list[idx++]);
  }

  return result;
}

/**
 * @param {number} year The year
 * @param {number} month The month
 */
type weekStartCopy = weekStart

function getMonthWeeks(year:number, month:number, weekStart: weekStartCopy) {
  const { start, end } = getMonthDateRange(year, month);

  const { startCalendar, endCalendar } = getCalendarDateRange(
    start,
    end,
    weekStart
  );

  return getRange(startCalendar, endCalendar, "day");
}

function weekdaysMin(weekStart: weekStart) {
  const weekDays = moment.weekdaysMin(false);

  if (weekStart === "monday") {
    const day = weekDays.shift()
    if(day){
      weekDays.push(day);
    }
  } else if (weekStart === "saturday") {
    const day = weekDays.pop()
    if(day){
      weekDays.unshift();
    }
  }

  return weekDays;
}

class DateCompare {
  static isSame(
    date1: Moment|null|undefined,
    date2: Moment|null|undefined
  ): boolean {
    if(date1 && date2) return date1.isSame(date2, "day");
    return false
  }

  static isInMonth(targetDate: Moment, month: Number):boolean {
    return targetDate.month() === month;
  }

  static minMaxDate(targetDate: Moment, start?: Moment, end?: Moment) {
    if (start && end) {
      return targetDate.isBetween(start, end);
    } else if (start) {
      return targetDate.isAfter(start);
    } else if (end) {
      return targetDate.isBefore(end);
    }
    return true;
  }

  static maybeEnd(
    targetDate: Moment,
    start?: Moment,
    end?: Moment,
    hoveredDate?: Moment,
  ):boolean {
    if (!start || (start && end)) return false;

    return this.isSame(targetDate, hoveredDate) && !start.isAfter(hoveredDate, "day")
  }

  static isBetweenMaybeEnd(
    targetDate: Moment,
    start?: Moment,
    end?: Moment,
    maybeEnd?: Moment
  ):boolean | undefined {
    const isSameOrBeforeEnd = targetDate.isSameOrBefore(maybeEnd, "day");
    const isSameOrAfterStart = targetDate.isSameOrAfter(start, "day");

    return start && !end && isSameOrAfterStart && isSameOrBeforeEnd;
  }

  static isInRange(
    targetDate: Moment,
    start?: Moment,
    end?: Moment,
    hoveredDate?: Moment,
  ): boolean | undefined {
    if (start && end) {
      return targetDate.isBetween(start, end, "day")
    }

    return this.isBetweenMaybeEnd(targetDate, start, end, hoveredDate);
  }
}


export {
  getMonthDateRange,
  getCalendarDateRange,
  getRange,
  arrayTo2DArray2,
  getMonthWeeks,
  weekdaysMin,
  DateCompare
};