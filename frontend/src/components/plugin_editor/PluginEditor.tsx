import React from "react";
import { Authorized } from "../../utils/authority";

type Props = {
  requiredAuthorities?: string[]; // pass required authorities when rendering
};

const PluginEditor: React.FC<Props> = ({ requiredAuthorities = [] }) => {
  //info, edit, delete
  return (
    <Authorized requiredAuthorities={requiredAuthorities} fallback={null}>
      <div>
        <h3>Plugin Editor</h3>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            marginBottom: "16px",
          }}
        >
          <thead style={{ borderBottom: "2px solid #ccc" }}>
            <tr>
              <th style={{ padding: "12px", textAlign: "center" }}>
                Plugin Name
              </th>
              <th style={{ padding: "12px", textAlign: "center" }}>Version</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center", gap: "12px" }}>
            <tr>
              <td>Example Plugin</td>
              <td>1.0.0</td>
              <td
                style={{
                  display: "flex",
                  gap: "8px",
                  justifyContent: "center",
                }}
              >
                <button style={{ backgroundColor: "green", color: "white" }}>
                  Info
                </button>
                <button style={{ backgroundColor: "blue", color: "white" }}>
                  Edit
                </button>
                <button style={{ backgroundColor: "red", color: "white" }}>
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>Another Plugin</td>
              <td>1.2.0</td>
              <td
                style={{
                  display: "flex",
                  gap: "8px",
                  justifyContent: "center",
                }}
              >
                <button style={{ backgroundColor: "green", color: "white" }}>
                  Info
                </button>
                <button style={{ backgroundColor: "blue", color: "white" }}>
                  Edit
                </button>
                <button style={{ backgroundColor: "red", color: "white" }}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Authorized>
  );
};

export default PluginEditor;
