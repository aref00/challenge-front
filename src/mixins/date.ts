import { format } from 'date-fns';
// const funcs = {
// 	'Date': function(value: Date, date_format?: string) {
// 		return format(value, date_format||'yy-MM-dd')
// 	},
// 	'number': function(value: number, date_format?: string) {

// 	},
// }
export const date = function (
  value: number,
  date_format = 'MMMM dd ,yyyy',
): string {
  return format(new Date(value), date_format);
};
export default date;
