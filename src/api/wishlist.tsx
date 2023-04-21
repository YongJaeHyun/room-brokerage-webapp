import { call } from ".";

const wishlist = {
  create: (dto: object) => {
    return call("/wishlist", "POST", dto).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  isExist: (boardUuid: string) => {
    return call(
      `/wishlist/exist/memberId+boardUuid?boardUuid=${boardUuid}`,
      "GET",
      null
    ).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  getFavoriteByBoardUuid: (boardUuid: string) => {
    return call(`/wishlist/memberId+boardUuid?boardUuid=${boardUuid}`, "GET", null).catch(
      (error) => {
        console.log("Oops!");
        console.log(error.status);
        return Promise.reject(error);
      }
    );
  },
  update: (dto: object) => {
    return call(`/wishlist`, "PUT", dto).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
};

export default wishlist;
