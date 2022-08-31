import Moment from "moment";
export const formatDate = (date: string | Date) => {
  const formatedDate = Moment(date).format("DD/MM/YYYY");
  return formatedDate;
};
