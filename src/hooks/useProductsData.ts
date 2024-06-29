import { IProductDataResponse } from "../interfaces/product.interface";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC";

const fetchData = async (): AxiosPromise<IProductDataResponse> => {
    const response = await axios.get<IProductDataResponse>(API_URL);
    return response;
}

export function useProductData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['products-data'],
    })

    return {
        ...query,
        data: query.data?.data
    };
}