/** @format */

import { UploadOutlined } from "@ant-design/icons";
import { Upload, Button } from "antd";
import { UploadChangeParam } from "antd/lib/upload";
import React from "react";

interface FileUploadButtonProps {
  type: "file" | "button"; // New prop for specifying the type
  buttonName?: string;
  accept?: string;
  errors?: string | undefined;
  touched?: boolean | string | undefined;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  onChange?: (info: UploadChangeParam) => void;
  icon?: React.ReactNode;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  type,
  buttonName,
  accept,
  errors,
  touched,
  width,
  height,
  style,
  onChange,
  icon,
}) => {
  const commonStyle = {
    backgroundColor: "transparent",
    borderColor: errors && touched ? "#ff4d4f" : "#6B5DC7",
    width: `${width}px`,
    height: `${height}px`,
    fontSize: "12px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#6B5DC7",
    ...style,
  };

  // Add a custom class for specific styling
  const customBorderStyle = {
    border: "1px solid #6B5DC7",
  };
  const customBorderStyleButton = {
    border: "1px solid",
  };

  if (type === "file") {
    return (
      <Upload.Dragger
        height={height}
        multiple={false}
        showUploadList={false}
        accept={accept}
        style={{ ...commonStyle, ...customBorderStyle }}
        onChange={onChange}
      >
        {icon || (
          <UploadOutlined
            style={{ fontSize: "5px !important", marginRight: "8px" }}
          />
        )}
        {buttonName}
      </Upload.Dragger>
    );
  } else if (type === "button") {
    return (
      <Button
        style={{ ...commonStyle, ...customBorderStyleButton }}
        onClick={onChange}
      >
        {icon || (
          <UploadOutlined style={{ fontSize: "14px", marginRight: "8px" }} />
        )}
        {buttonName}
      </Button>
    );
  }

  return null;
};

export default FileUploadButton;
