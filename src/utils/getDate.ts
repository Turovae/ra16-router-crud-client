import moment from "moment";

moment.locale("ru", {
  months: [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ],
  relativeTime: {
    past: '%s',
    s: 'только что',
    ss: 'только что',
    m: '%d мин.',
    mm: '%d мин.',
    h: '%d час.',
    hh: '%d час.',
    d: '%d дн.',
    dd: '%d дн.',
    w: '%d нед.',
    ww: '%d нед.',
    M: '%d мес.',
    MM: '%d мес.',
    y: '%d год.',
    yy: '%d лет.',
  }
});

const getDate = (timestamp: number): string => {
  const timeAgo = moment(timestamp);
  return timeAgo.fromNow();
};

export default getDate;