/** @format */

import { Buffer } from "buffer";

import CryptoJS from "crypto-js";
import pako from "pako";

const CHIPER = "aes-256-cbc";
const ENCRYPTION_KEY = "19eyi&*£78dh£*$^@£^99£$%^hj^~&*$";
const CHIPER_IV = "Bmki34£&9~j&@9eo";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const universalBtoa = (str: any) => {
  return Buffer.from(str).toString("base64");
};
export const universalAtob = (str: any) => {
  return Buffer.from(str, "base64").toString();
};
const generateString = (length: number) => {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
export const getUrlEncodedData = (data: any) => {
  let formData: any = [];
  Object.keys(data).forEach((item) => {
    const encodedKey = encodeURIComponent(item);
    const encodedValue = encodeURIComponent(data[item]);
    formData.push(`${encodedKey}=${encodedValue}`);
  });
  formData = formData.join("&");
  return formData;
};
const bufferToBase64 = (buf: any) => {
  const binstr = Array.prototype.map
    .call(buf, (ch) => String.fromCharCode(ch))
    .join("");
  return universalBtoa(binstr);
};
const base64ToBuffer = (base64: any) => {
  const binstr = universalAtob(base64);
  const buf = new Uint8Array(binstr.length);
  Array.prototype.forEach.call(binstr, (ch, i) => {
    buf[i] = ch.charCodeAt(0);
  });
  return buf;
};
const compressData = (str: any) => {
  const utfData = new TextEncoder().encode(str);
  let compressedData: any = pako.gzip(utfData);
  compressedData = bufferToBase64(compressedData);
  return generateString(16).trim() + compressedData;
};
const decompressData = (str: any) => {
  str = str.substr(16);
  const test = base64ToBuffer(str);
  const decryptedData = pako.ungzip(test);
  const decompressed = new TextDecoder("utf-8").decode(decryptedData);
  // decryptedData = bufferToBase64(decryptedData);
  // decryptedData = atob(decryptedData);
  return decompressed;
};

export function encryptRequest(data: any) {
  const phrase = JSON.stringify(data);
  const compressedData = compressData(phrase);
  if (CHIPER && ENCRYPTION_KEY && CHIPER_IV) {
    const encrypted = CryptoJS.AES.encrypt(
      compressedData,
      CryptoJS.enc.Utf8.parse(ENCRYPTION_KEY),
      {
        iv: CryptoJS.enc.Utf8.parse(CHIPER_IV),
      },
    ).toString();
    return encrypted;
  }
  return null;
}

export function encrypt(data: any, isFormData = false) {
  const phrase = JSON.stringify(data);
  const compressedData = compressData(phrase);
  if (CHIPER && ENCRYPTION_KEY && CHIPER_IV) {
    const encrypted = CryptoJS.AES.encrypt(
      compressedData,
      CryptoJS.enc.Utf8.parse(ENCRYPTION_KEY),
      {
        iv: CryptoJS.enc.Utf8.parse(CHIPER_IV),
      },
    ).toString();
    return isFormData ? encrypted : getUrlEncodedData({ data: encrypted });
  }
  return null;
}

export function decrypt(data: any) {
  if (CHIPER && ENCRYPTION_KEY && CHIPER_IV) {
    const decrypted = CryptoJS.AES.decrypt(
      data,
      CryptoJS.enc.Utf8.parse(ENCRYPTION_KEY),
      {
        iv: CryptoJS.enc.Utf8.parse(CHIPER_IV),
      },
    );
    const deCpmoressed = decompressData(decrypted.toString(CryptoJS.enc.Utf8));
    if (deCpmoressed === "") {
      return null;
    }
    return JSON.parse(deCpmoressed);
  }
  return null;
}

export const pageSizeOption = [
  { value: 10, label: "10 / page" },
  { value: 20, label: "20 / page" },
  { value: 30, label: "30 / page" },
  { value: 40, label: "40 / page" },
  { value: 50, label: "50 / page" },
  { value: 100, label: "100 / page" },
];

export const convertLabelValue = (
  data: any[],
  key1Label: string | number,
  key2Value: string | number,
) => {
  const result = data?.map((item) => {
    const { [key1Label]: label, [key2Value]: value, ...rest } = item;
    return {
      ...rest,
      label,
      value,
    };
  });

  return result;
};

export const formatDate = (dateString: any) => {
  const options: any = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const [month, day, year] = new Date(dateString)
    .toLocaleDateString(undefined, options)
    .split('/');
  const formattedDate = `${year}-${day}-${month}`;
  return formattedDate;
};

export const formatTableDate = (dateString: any) => {
  const options: any = { year: '2-digit', month: '2-digit', day: '2-digit' };
  const [day, month, year] = new Date(dateString)
    .toLocaleDateString(undefined, options)
    .split('/');
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

const MAX_UPLOAD = 1

export const beforeUpload = (file: FileList | null, fileList: File[]) => {
  let valid: string | boolean = true

  const allowedFileType = ['image/jpeg', 'image/png']
  const MAX_FILE_SIZE = 500000

  if (fileList.length >= MAX_UPLOAD) {
    return `You can only upload ${MAX_UPLOAD} file(s)`
  }

  if (file) {
    for (const f of file) {
      if (!allowedFileType.includes(f.type)) {
        valid = 'Please upload a .jpeg or .png file!'
      }

      if (f.size >= MAX_FILE_SIZE) {
        valid = 'Upload image cannot more then 500kb!'
      }
    }
  }

  return valid
}
