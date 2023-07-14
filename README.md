# Random Users Generator

This is a wrapper to use fake user APIs at https://randomuser.me/

### Installation
```
npm i --save random-users-generator
```

### Usage
Once the package is installed, you can import the library using `import`

```typescript
import client, { UsersResponse } from "random-users-generator";
```

### Example
```typescript
import client, { UsersResponse } from "random-users-generator";

// retrieve a fake user
client.getUsers()
    .then((data: UsersResponse) => {
        console.log(data)
    });
```

The function `getUsers()` accepts an [option object](#request-options) to specify data you want to retrieve, all parameters are optional. For example:
```typescript
import client, { UsersResponse } from "random-users-generator";

// retrieve 10 users, only email address field
client.getUsers({
    results: 10,
    include: ['email'],
}).then((data: UsersResponse) => {
    console.log(data)
});
```

#### Request Options
| Parameter   | Type            | Description                                                          | Required | Allowed Values                                                                                                                                                       |
|-------------|-----------------|----------------------------------------------------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| info        | boolean         | if you want info attribute in the response                           | no       | `true` or `false`                                                                                                                                                        |
| results     | number          | number of results                                                    | no       | any integer                                                                                                                                                          |
| seed        | string          | a seed used to generate always same sets of users (useful for pages) | no       | any string                                                                                                                                                           |
| page        | number          | number of the page you are requesting                                | no       | any integer                                                                                                                                                          |
| gender      | string          | gender of generated users                                            | no       | `'male' \| 'female'`                                                                                                                                                  |
| password    | PasswordOptions | password generation policy                                           | no       | see [PasswordOptions](#passwordoptions)                                                                                                                                                  |
| nationality | string[]        | nationality of generated users                                       | no       | `'AU' \| 'BR' \| 'CA' \| 'CH' \| 'DE' \| 'DK' \| 'ES' \| 'FI' \| 'FR' \| 'GB' \| 'IE' \| 'IN' \| 'IR' \| 'MX' \| 'NL' \| 'NO' \| 'NZ' \| 'RS' \| 'TR' \| 'UA' \| 'US'` |
| include     | string[]        | include fields in response                                           | no       | `'gender' \| 'name' \| 'location' \| 'email' \| 'login' \| 'registered' \| 'dob' \| 'phone' \| 'cell' \| 'id' \| 'picture' \| 'nat'`                                   |
| exclude     | string[]        | exclude fields in response                                           | no       | `'gender' \| 'name' \| 'location' \| 'email' \| 'login' \| 'registered' \| 'dob' \| 'phone' \| 'cell' \| 'id' \| 'picture' \| 'nat'`                                   |

#### PasswordOptions
| Parameter | Type     | Description                                                | Required | Allowed Values                              |
|-----------|----------|------------------------------------------------------------|----------|---------------------------------------------|
| charset   | string[] | what type of characters include in the generated password  | no       | `'special' \| 'upper' \| 'lower' \| 'number'` |
| minLength | number   | min length of generated password                           | no       | any number                                  |
| maxLength | number   | max length of generated password                           | no       | any number                                  |


Please feel free to make suggestion to improve.
