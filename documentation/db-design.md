<div id="top"></div>

# Database design and creation

## Schema

<ol>
  <li>User
      <ul>
          <li>email</li>
          <li>firstName</li>
          <li>lastName</li>
          <li>createdAt</li>
          <li>updatedAt</li>
      </ul>
  </li>
  <li>User Credential
      <ul>
          <li>email</li>
          <li>password</li>
          <li>createdAt</li>
          <li>updatedAt</li>
      </ul>
  </li>
  <li>Reviews
      <ul>
          <li>activityId</li>
          <li>userId</li>
          <li>rating</li>
          <li>review</li>
          <li>date</li>
      </ul>
  </li>
  <li>Activity
      <ul>
          <li>activityId</li>
          <li>activityName</li>
          <li>spaceName</li>
          <li>location</li>
          <li>description</li>
          <li>people</li>
          <li>area</li>
          <li>cancellationPolicy</li>
          <li>covidSafety</li>
          <li>operatingHours</li>
          <li>parking</li>
          <li>price</li>
          <li>amenities</li>
          <li>thumbnailUrl</li>
          <li>avgRating</li>
          <li>reviewCount</li>
          <li>ratingCount</li>
      </ul>
  </li>
</ol>

<p align="right">(<a href="#top">back to top</a>)</p>

## Database creation command

db.activities.insert({ <br>
    "activityId": "8",<br>
	"activityName": "Family get-together",<br>
	"spaceName": "Taj-Connemara",<br>
	"location": "Chennai",<br>
	"description": "Taj - Connemara, Chennai is the city's only heritage hotel, built in 1854 as the Imperial Hotel, renamed Albany in 1886, finally re-established as The Connemara in 1890. It was an Art Deco look that the Connemara sported when it ‘reopened’ in 1937. And the legendary architect Geoffrey Bawa added his touch to the tower block and linking pool in 1974.",<br>
	"people": "200",<br>
	"area": "8,000 Sq.Ft.",<br>
	"cancellationPolicy": "Guests may cancel their Booking until 7 days before the event start time and will receive a full refund (including all Fees) of their Booking Price. Guests may cancel their Booking between 7 days and 24 hours before the event start time and receive a 50% refund (excluding Fees) of their Booking Price.Booking cancellations submitted less than 24 hours before the Event start time are not refundable.",<br>
	"operatingHours": "Monday to Sunday 8AM to 10PM",<br>
	"parking": "Paid onsite parking",<br>
	"price": "Rs.5000 per hour",<br>
})<br>

<p align="right">(<a href="#top">back to top</a>)</p>
