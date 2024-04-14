import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { auth } from "./components/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "./components/lib/userStore";
import { useChatStore } from "./components/lib/chatStore";

const App = () => {
  const { currentUser: user, isLoading, fetchUserInfo } = useUserStore();

  const { chatId } = useChatStore();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      fetchUserInfo(user?.uid);
    });
    return () => unSubscribe();
  }, [fetchUserInfo]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      {user ? (
        <>
          <List />
          {chatId && (
            <>
              <Chat />
              <Detail />
            </>
          )}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
