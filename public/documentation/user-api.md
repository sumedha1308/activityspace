<p> Signup User </p>
<p> E.g: http://localhost:4000/api/users/ </p>

```js
POST /api/users/
Sample Request Body:
{
	"email": "test1@test.com",
    "password": "test1"
}

Sample Response Body:
{
	"id": "61f18e916794be39308279be"
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
	"email": "test2@test.com",
    "password": "test2"
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
    "createdAt": "2022-01-27T07:05:32.029Z",
    "updatedAt": "2022-01-27T07:05:32.029Z",
    "_id": "61f24536fc69ec2b08c733c8",
    "email": "test2@test.com",
    "__v": 0,
    "firstName": "Sumedha",
    "lastName": "Deshpande"
}

Status: 200 (Valid User), 404 (User does not exist)
```js
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
```js
<br>
<p align="right">(<a href="#top">back to top</a>)</p>
<br>

<p> Logout User </p>
<p> E.g: http://localhost:4000/api/sessions/me/ </p>

```js
DELETE /api/sessions/me/

Status: 204 (logout User)
```js
<br>
<p align="right">(<a href="#top">back to top</a>)</p>
<br>