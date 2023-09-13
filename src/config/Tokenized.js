import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';

const Tokenized = {
    encrypt: data => {
        const id = uuidv4();
        const iv = CryptoJS.enc.Base64.parse("#base64IV#");

        return {
            id: id,
            token: CryptoJS.AES.encrypt(JSON.stringify(data), id, {iv}).toString()
        }
    },
    decrypt: (id, data) => {
        return JSON.parse(CryptoJS.AES.decrypt(data, id).toString(CryptoJS.enc.Utf8));
    }
}

export default Tokenized;