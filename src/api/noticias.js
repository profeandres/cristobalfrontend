import axios from "axios";

const uri = process.env.API_URI

export const getNoticiasRequest = async () => await axios.get(uri);

export const getNoticiaRequest = async (id) => await axios.get(uri + id);