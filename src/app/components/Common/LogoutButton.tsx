import { Button } from "@/components/ui/button";
import { logOut } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/features/hooks";

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const handelLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className="w-full">
      <Button
        onClick={handelLogOut}
        className="bg-red-500 w-full cursor-pointer text-white"
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogoutButton;
