import axios from "axios";

export const getNoticiasRequest = async () => await axios.get("http://localhost:4000/noticias");

export const getNoticiaRequest = async (id) => await axios.get("/noticias/" + id);