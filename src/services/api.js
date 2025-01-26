import axios from 'axios';

const BASE_URL = 'https://api.green-api.com';

export const sendMessage = async (idInstance, apiToken, chatId, message) => {
    const url = `${BASE_URL}/waInstance${idInstance}/SendMessage/${apiToken}`;
    return axios.post(url, {
        chatId,
        message,
    });
};

export const receiveMessages = async (idInstance, apiToken) => {
    const url = `${BASE_URL}/waInstance${idInstance}/ReceiveNotification/${apiToken}`;
    return axios.get(url);
};

export const deleteNotification = async (idInstance, apiToken, receiptId) => {
    const url = `${BASE_URL}/waInstance${idInstance}/DeleteNotification/${receiptId}`;
    return axios.delete(url);
};
