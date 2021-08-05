import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push("/home");
          } else {
            alert("ないよ");
          }
        })
        .catch(() => alert("ログインできません"))
        .finally(() => setLoading(false));
    },
    [history]
  );

  return { login };
};

// import { useCallback, useState } from "react";
// import axios from "axios";

// import { User } from "../types/api/user";
// import { useMessage } from "./useMessage";

// export const useAllUsers = () => {
//   const { showMessage } = useMessage();

//   const [loading, setLoading] = useState(false);
//   const [users, setUsers] = useState<Array<User>>([]);

//   const getUsers = useCallback(() => {
//     setLoading(true);
//     axios
//       .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
//       .then(res => setUsers(res.data))
//       .catch(() =>
//         showMessage({ title: "ユーザー取得に失敗しました", status: "error" })
//       )
//       .finally(() => setLoading(false));
//   }, []);

//   return { getUsers, loading, users };
// };