import axios from "axios";
import moment from "moment";

export default ({ app, router, store, Vue }) => {
  Vue.prototype.$axios = axios;

  Vue.filter("date", function(date) {
    return moment(date).format("DD/MM/YYYY");
  });

  Vue.filter("dateAdd", function(date, days) {
    return moment(date)
      .add(days, "days")
      .format("DD/MM/YYYY");
  });

  Vue.filter("dateInterval", function(date, days, fecudationDate) {
    const end = moment(fecudationDate).add(days, "days");
    alert(end);
    return moment(end).diff(date, "days");
  });

  //Vue.filter("dateInterval", function(date, days, fecudationDate) {
  //const end = moment(fecudationDate).add(days, "days");
  //return moment(date).from(end, true);
  //var setInterval = moment.interval("animal.parturition/end");
  //setInterval.start();
  //setInterval.period().humanize();
  //});
};
