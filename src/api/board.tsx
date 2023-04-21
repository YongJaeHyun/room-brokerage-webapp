import { call } from ".";

const board = {
  create: (dto: object) => {
    return call("/board/create", "POST", dto).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  getAllBoards: () => {
    return call(`/board`, "GET", null).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  getBoardByMemberId: () => {
    return call(`/board/member`, "GET", null).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  getBoardByBoardUuid: (boardUuid: string) => {
    return call(`/board/boardUuid?boardUuid=${boardUuid}`, "GET", null).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  updateByLessee: (dto: object) => {
    return call("/board/lessee", "PUT", dto).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  updateByLandlord: (dto: object) => {
    return call("/board/landlord", "PUT", dto).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  getAllFavorite: () => {
    return call(`/board/favorite`, "GET", null).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  getBoardContractingByContractedMemberId: () => {
    return call(`/board/contractedMember+contracting`, "GET", null).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  getBoardContractingByMemberId: () => {
    return call(`/board/member+contracting`, "GET", null).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  getBoardContractedByContractedMemberId: () => {
    return call(`/board/contractedMember+contracted`, "GET", null).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  getBoardContractedByMemberId: () => {
    return call(`/board/member+contracted`, "GET", null).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
  getBoardContractingByBoardUuid: (boardUuid: string) => {
    return call(`/board/boardUuid+contracting?boardUuid=${boardUuid}`, "GET", null).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
};

export default board;
