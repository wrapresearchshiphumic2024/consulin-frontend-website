import React from "react";
// Sesuaikan dengan import yang benar

import { Paperclip } from "lucide-react"; // Jika Anda menggunakan lucide-react
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "./extension/file-upload";
import FileSvgDrawer from "./file-svg-drawer";

// Definisikan tipe untuk props
interface CertificateUploaderProps {
  value: File[]; // Tipe untuk value, misalnya array of File
  onValueChange: (value: File[] | null) => void; // Fungsi untuk mengubah nilai
  dropzoneOptions: Record<string, any>; // Opsi dropzone, sesuaikan dengan tipe yang diperlukan
  className?: string;
  placeholder: string;
  reSelect: boolean; // ClassName tambahan
}

// Komponen CertificateUploader
export default function FileUploadCustom({
  value,
  onValueChange,
  dropzoneOptions,
  className = "",
  placeholder,
  reSelect, // Nilai default untuk className
}: CertificateUploaderProps) {
  return (
    <FileUploader
      value={value}
      onValueChange={onValueChange}
      dropzoneOptions={dropzoneOptions}
      reSelect={reSelect}
      className={`relative rounded-lg outline-primary-custom_primary p-3 outline outline-2 ${className}`}
    >
      <FileInput className="outline-dashed outline-2 rounded-md">
        <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full">
          <FileSvgDrawer title={placeholder} />
        </div>
      </FileInput>
      {value && value.length > 0 && (
        <FileUploaderContent>
          {value.map((file, i) => (
            <FileUploaderItem key={i} index={i}>
              <Paperclip className="h-4 w-4 stroke-current" />
              <span className="truncate w-[100px] md:w-[150px] overflow-hidden">
                {file.name}
              </span>
            </FileUploaderItem>
          ))}
        </FileUploaderContent>
      )}
    </FileUploader>
  );
}
