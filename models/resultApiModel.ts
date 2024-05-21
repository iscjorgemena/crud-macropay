export interface IResultApi {
    status: boolean;
    message: string;
    data: any;
}

export const defaultValues: IResultApi = {
    status: false,
    message: 'Error in request',
    data: null
}