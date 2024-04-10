import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useGetCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(true);
  const client = useStreamVideoClient();

  useEffect(() => {
    const loadCall = async () => {
      try {
        if (!client) {
          console.log("Error: Client is not available.");
          return;
        }
        const { calls } = await client.queryCalls({
          filter_conditions: {
            id,
          },
        });
        if (calls.length > 0) setCall(calls[0]);
      } catch (error) {
        console.log("Error occurred while loading call:", error);
      } finally {
        setIsCallLoading(false);
      }
    };

    loadCall();
  }, [client, id]);

  console.log("Call is (inside useGetCallById) : ", call);

  return { call, isCallLoading };
};
