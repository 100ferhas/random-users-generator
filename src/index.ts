import axios from 'axios';

const API_URL = 'https://randomuser.me/api/1.4/';

export interface UsersResponse {
    results: Result[]
    info: Info
}

interface Result {
    gender: string
    name: Name
    location: Location
    email: string
    login: Login
    dob: Dob
    registered: Registered
    phone: string
    cell: string
    id: Id
    picture: Picture
    nat: string
}

interface Name {
    title: string
    first: string
    last: string
}

interface Location {
    street: Street
    city: string
    state: string
    country: string
    postcode: string
    coordinates: Coordinates
    timezone: Timezone
}

interface Street {
    number: number
    name: string
}

interface Coordinates {
    latitude: string
    longitude: string
}

interface Timezone {
    offset: string
    description: string
}

interface Login {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
}

interface Dob {
    date: string
    age: number
}

interface Registered {
    date: string
    age: number
}

interface Id {
    name: string
    value: string
}

interface Picture {
    large: string
    medium: string
    thumbnail: string
}

interface Info {
    seed: string
    results: number
    page: number
    version: string
}

export interface UserRequestOptions {
    info?: boolean
    results?: number
    seed?: string
    page?: number
    gender?: 'male' | 'female'
    password?: PasswordOptions
    nationality?: ('AU' | 'BR' | 'CA' | 'CH' | 'DE' | 'DK' | 'ES' | 'FI' | 'FR' | 'GB' | 'IE' | 'IN' | 'IR' | 'MX' | 'NL' | 'NO' | 'NZ' | 'RS' | 'TR' | 'UA' | 'US')[]
    include?: ('gender' | 'name' | 'location' | 'email' | 'login' | 'registered' | 'dob' | 'phone' | 'cell' | 'id' | 'picture' | 'nat')[]
    exclude?: ('gender' | 'name' | 'location' | 'email' | 'login' | 'registered' | 'dob' | 'phone' | 'cell' | 'id' | 'picture' | 'nat')[]
}

export interface PasswordOptions {
    charset: ('special' | 'upper' | 'lower' | 'number')[]
    minLength?: number
    maxLength?: number
}

const optionKeysMapping = new Map<string, string>([
    ["nationality", "nat"],
    ["include", "inc"],
    ["exclude", "exc"],
]);

const serializeOptions = (params: UserRequestOptions) => {
    let result = params.info ? '' : 'noinfo&';
    delete params.info;

    Object.entries(params).forEach(([key, value]) => {
        let param = value;

        if (key === 'password') {
            const passwordOptions: PasswordOptions = value;
            param = passwordOptions.charset.join(',');

            if (passwordOptions.minLength && passwordOptions.maxLength) {
                param += `,${passwordOptions.minLength}-${passwordOptions.maxLength}`;
            } else if (passwordOptions.minLength || passwordOptions.maxLength) {
                param += `,${passwordOptions.minLength || passwordOptions.maxLength}`;
            }
        }

        result += `${optionKeysMapping.get(key) ?? key}=${encodeURIComponent(param)}&`;
    });

    return result.substring(0, result.length - 1);
}

class Client {
    getUsers = async (options?: UserRequestOptions): Promise<UsersResponse> => {
        const res = await axios.get<UsersResponse>(API_URL, { params: options, paramsSerializer: serializeOptions });
        if (res.status !== 200) {
            throw Error(`Error while requesting data, http status ${res.status}.`);
        }
        return res.data;
    }
}

const client = new Client();

export default client;