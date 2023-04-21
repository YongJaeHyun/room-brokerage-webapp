import { call } from ".";

const ACCESS_TOKEN = "ACCESS_TOKEN";

const member = {
  login: (dto: object) => {
    type Response = {
      memberId: string;
      token: string;
    };
    return call("/auth/signin", "POST", dto).then((response: Response) => {
      if (response?.token && response?.memberId) {
        // local 스토리지에 토큰 저장
        localStorage.setItem(ACCESS_TOKEN, response.token);
        // token이 존재하는 경우 todo 화면으로 리디렉트
        window.location.href = "/";
      } else {
        alert("아이디나 비밀번호가 다릅니다.");
      }
    });
  },
  signUp: (dto: object) => {
    type Response = {
      memberId: string;
    };
    return call("/auth/signup", "POST", dto)
      .then((response: Response) => {
        console.log("func signup :", response);
        if (response.memberId) {
          window.location.href = "/auth/login";
        }
      })
      .catch((error) => {
        console.log("Oops!");
        console.log(error.status);
        return Promise.reject(error);
      });
  },
  logout: () => {
    // local 스토리지에 토큰 삭제
    localStorage.removeItem(ACCESS_TOKEN);
    window.location.href = "/";
  },
  signOut: () => {
    return call("/auth/user", "DELETE", null)
      .then(() => {
        localStorage.removeItem(ACCESS_TOKEN);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("Oops!");
        console.log(error.status);
        return Promise.reject(error);
      });
  },
  updateUserInfo: (dto: object) => {
    return call("/auth/user", "PUT", dto)
      .then(() => {
        window.location.href = "/auth/user";
      })
      .catch((error) => {
        console.log("Oops!");
        console.log(error.status);
        return Promise.reject(error);
      });
  },
  getUserInfo: () => {
    return call(`/auth/user`, "GET", null).catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      return Promise.reject(error);
    });
  },
};

export default member;
