# Random Users Generator

This is a wrapper to use fake user APIs at https://randomuser.me/

### Installation
```
npm i --save random-users-generator
```

### Usage
Once the package is installed, you can import the library with the name you prefer using `import` and start using it, see [example](#example).

```typescript
import generatorClient, { UsersResponse } from "random-users-generator";
```

[Response data model](#response-data) is the same as the REST API.

### Example
```typescript
import generatorClient, { UsersResponse } from "random-users-generator";

// request single user
generatorClient.getUsers()
    .then((data: UsersResponse) => {
        // handle response data
        console.log(data);
    }).catch(err => {
        // handle errors
        console.error(err);
    });
```

The function `getUsers()` accepts an [option object](#request-options) to specify data you want to retrieve, all parameters are optional. For example:
```typescript
import generatorClient, { UsersResponse } from "random-users-generator";

// retrieve 10 users, only email address field
generatorClient.getUsers({
    results: 10,
    include: ['email'],
}).then((data: UsersResponse) => {
    // handle response data
    console.log(data);
}).catch(err => {
    // handle errors
    console.error(err);
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

### Response Data
```json
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy"
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}
```


Please feel free to make suggestion or PR to improve the client.
If you are using this library please star the repo for visibility. Thank you.
