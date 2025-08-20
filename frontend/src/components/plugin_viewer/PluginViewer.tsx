import React from "react";
import { Authorized } from "../../utils/authority";

type Props = {
  requiredAuthorities?: string[];
};

const PluginViewer: React.FC<Props> = ({ requiredAuthorities = [] }) => {
  return (
    <Authorized
      requiredAuthorities={requiredAuthorities}
      fallback={<div style={{ padding: 12 }}>Not authorized</div>}
    >
      <div>
        <h3>Plugin Viewer</h3>
        <p>List / view plugin details here.</p>
      </div>
    </Authorized>
  );
};

export default PluginViewer;
