import { call } from ".";

const review = {
  create: (dto: object) => {
    call("/review", "POST", dto).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  update: (dto: object) => {
    call("/review", "PUT", dto).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  getReviewByReceiveId: () => {
    return call("/review/received", "GET", null).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
};

export default review;
