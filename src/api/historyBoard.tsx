import { call } from ".";

const historyBoard = {
  create: (dto: object) => {
    return call("/history_board", "POST", dto).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  getAllHistoryBoard: () => {
    return call(`/history_board`, "GET", null).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  update: (dto: object) => {
    return call("/history_board", "PUT", dto).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
};

export default historyBoard;
