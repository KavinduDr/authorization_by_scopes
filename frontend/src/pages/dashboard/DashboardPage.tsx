import { SignedIn, SignedOut, SignInButton, useUser } from "@asgardeo/react";
import { useNavigate } from "react-router-dom";
import PluginEditor from "../../components/plugin_editor/PluginEditor";
import PluginViewer from "../../components/plugin_viewer/PluginViewer";

const DashboardPage = () => {
  const user = useUser();
  const navigate = useNavigate();
  console.log(user);
  console.log(user?.profile?.roles);
  return (
    <div>
      <h1>Dashboard</h1>
      <SignedIn>
        <button onClick={() => navigate("/profile")}>View Profile</button>
        <PluginEditor requiredAuthorities={["pluginEditor"]} />
        <PluginViewer />
      </SignedIn>
      <SignedOut>
        <div>You are not signed in.</div>
        <p>Please sign in to access your dashboard.</p>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default DashboardPage;
