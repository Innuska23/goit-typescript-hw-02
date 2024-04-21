/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
};

function isWeekend(day: DayWeek): boolean {
  const isWeekendDay = [DayWeek.SATURDAY, DayWeek.SUNDAY]
  return isWeekendDay.includes(day)
}