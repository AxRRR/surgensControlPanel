import { AppStore } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCallService = (callback: (role: string) => Promise<any>) => {
    const [call, setCall] = useState([]);
    const [isFinish, setIsFinish] = useState(false);

    const user = useSelector((store: AppStore) => store.user);

    useEffect(() => {
      const callService = async () => {
        await callback(user.role).then((data: any) =>
            setCall(data)
        );
        setIsFinish(true);
      };
      user.id != '' && callService();
    }, [user]);

    return { call, isFinish }
}