import { useAsgardeo, UserProfile, useUser } from "@asgardeo/react";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const user = useUser();
  const { http, isSignedIn, getDecodedIdToken } = useAsgardeo();
  const [userData, setUserData] = useState(null);
  console.log(getDecodedIdToken);

  useEffect(() => {
    if (!isSignedIn) {
      return;
    }

    (async () => {
      try {
        const response = await http.request({
          url: "<base-url>`/scim2/Me",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/scim+json",
          },
          method: "GET",
          cache: "default",
          credentials: "include",
          destination: "",
          integrity: "",
          keepalive: false,
          mode: "same-origin",
          redirect: "error",
          referrer: "",
          referrerPolicy: "",
          clone: function (): Request {
            throw new Error("Function not implemented.");
          },
          body: null,
          bodyUsed: false,
          arrayBuffer: function (): Promise<ArrayBuffer> {
            throw new Error("Function not implemented.");
          },
          blob: function (): Promise<Blob> {
            throw new Error("Function not implemented.");
          },
          bytes: function (): Promise<Uint8Array<ArrayBuffer>> {
            throw new Error("Function not implemented.");
          },
          formData: function (): Promise<FormData> {
            throw new Error("Function not implemented.");
          },
          json: function (): Promise<any> {
            throw new Error("Function not implemented.");
          },
          text: function (): Promise<string> {
            throw new Error("Function not implemented.");
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    })();
  }, [http, isSignedIn]);

  if (!isSignedIn) {
    return <div>Please sign in to view your profile.</div>;
  }

  return (
    <div>
      <div>Welcome {user.profile?.displayName}</div>
      <UserProfile />
      {userData && (
        <div>
          <h3>User Data:</h3>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
