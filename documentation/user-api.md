<div id="top"></div>
<p> Signup User </p>
<p> E.g: http://localhost:4000/api/users/ </p>

```js
POST /api/users/
Sample Request Body:
{
    "userName": "Sumedha",
    "lastName": "Deshpande",
    "email": "test2@test2.com",
    "password": "test2"
}
Sample Response Body:
{
    "id": "61faab9029a14d64e84da49c"
}
Status: 201 (User Id), 500 (Internal Server Error)
```

<br>
<p align="right">(<a href="#top">back to top</a>)</p>
<br>

<p> Login User </p>
<p> E.g: http://localhost:4000/api/sessions/ </p>

```js
POST /api/users/
Sample Request Body:
{
    "userName": "Sumedha",
    "email": "test1@test.com",
    "password": "test1"
}

Status: 200 (User Id), 500 (Internal Server Error)
```

<br>
<p align="right">(<a href="#top">back to top</a>)</p>
<br>

<p> Update firstName and lastName of user </p>
<p> E.g: http://localhost:4000/api/users/me/ </p>

```js
PUT /api/users/
Sample Request Body:
{
    "firstName": "Sumedha",
    "lastName": "Deshpande"
}

Status: 204 (data updated), 500 (Internal Server Error)
```

<br>
<p align="right">(<a href="#top">back to top</a>)</p>
<br>

<p> get logged in user credentials </p>
<p> E.g: http://localhost:4000/api/users/me/ </p>

```js
GET /api/users/me/
Sample Response Body:
{
    "createdAt": "2022-02-02T16:03:07.394Z",
    "updatedAt": "2022-02-02T16:03:07.394Z",
    "_id": "61faab9029a14d64e84da49c",
    "email": "test1@test.com",
    "userName": "Sumedha",
    "__v": 0
}

Status: 200 (Valid User), 404 (User does not exist)
```
<br>
<p align="right">(<a href="#top">back to top</a>)</p>
<br>

<p> Get firstname of user using userID for sessions/ </p>
<p> E.g: http://localhost:4000/api/users/userId </p>

```js
GET /api/users/UserId/
Sample Response Body:
{
    "userName": "Sumedha"
}
Status: 200 (Valid User), 500 (Internal Server Error)

```
<br>
<p align="right">(<a href="#top">back to top</a>)</p>
<br>

<p> Logout User </p>
<p> E.g: http://localhost:4000/api/sessions/me/ </p>

```js
DELETE /api/sessions/me/

Status: 204 (logout User)
```
<br>
<p align="right">(<a href="#top">back to top</a>)</p>
<br>
