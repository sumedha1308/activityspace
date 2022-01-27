<p> Get review of individual activity : </p>
<p> E.g: http://localhost:4000/api/reviews/1/ </p>

````js
GET /api/reviews/activityID

Before updating review

Sample Response Body:
{
    "reviewList": []
}

Status: 200

After updating review

Sample Response Body:

{
    "reviewList": [
        {
            "_id": "61f293843bd1cfb4286bc6fe",
            "activityId": "1",
            "userId": "61f24536fc69ec2b08c733c8",
            "__v": 0,
            "rating": 3,
            "review": "nice",
            "date": "2022-01-27T12:45:52.671Z"
        }
    ]
}
```js

<br>
<p align="right">(<a href="#top">back to top</a>)</p>

<br>

<p> Add/Update review of individual activity : </p>
<p> E.g: http://localhost:4000/api/reviews/ </p>

<br>
```js
POST /api/reviews/
E.g: http://localhost:4000/api/reviews/
Sample Request Body:
{
    "newRating": "3",
    "newReview": "nice",
    "activityId": "1"
}

Sample Response Body:
{
    "message": "Review Added"
}

Status: 200 (Review Added), 501 (Internal server error!)
````

<br>
<p align="right">(<a href="#top">back to top</a>)</p>
