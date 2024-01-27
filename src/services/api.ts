import axios from "axios";
import { baseURL } from "./baseUrl";
import { IBarang } from "../types/barang";

const instance = axios.create({baseURL: `${baseURL}`})
export const getBarang = async () => {
    return (await instance.get<IBarang[]>('Barang')).data.map((barang) => barang.idBarang);
}