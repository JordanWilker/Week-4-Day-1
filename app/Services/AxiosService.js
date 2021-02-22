// @ts-ignore
export const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10&type=multiple',
    timeout: 3000
})