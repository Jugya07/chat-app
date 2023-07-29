# Project Name - API Documentation

## Description

Readme to provide description for each api route and what params does the server expect for POST or PATCH requests

## Authentication

Before hitting protected routes, the frontend application needs to authenticate by sending the `Authorization` header with a valid access token in the form of `Bearer <jwt token>`.

## Endpoints

### 1. Sign Up

- **Endpoint:** `/api/user/signup`
- **Method:** `POST`
- **Protected:** `False`
- **Description:** Registers an user into the server, and logs in the created user.
- **Expected Parameters:**
  - `name` (string, required)
  - `email` (string, required)
  - `password` (number, required)
  - `pic` (base64 string, optional)
- **Expected Response:**

```javascript
  {
  	status: "success",
  	message: "User created successfully",
  	token: jwt auth token,
  	user: {
  		_id: string,
  		name: string,
  		email: string,
  		pic: url string,
  		chats: []
  	}
  }
```

### 2. Login In

- **Endpoint:** `/api/user/login`
- **Method:** `POST`
- **Protected:** `False`
- **Description:** Generates a jwt auth token if the credentials are correct.
- **Expected Parameters:**
  - `email` (string, required)
  - `password` (string, required)
- **Expected Response**

```javascript
  {
  	status: "success",
  	message: "User logged in successfully",
  	token: jwt auth token,
  	user: {
  		_id: string,
  		name: string,
  		email: string,
  		pic: url string,
  		chats: [Object IDs]
  	}
  }
```

### 3. Create Chat

- **Endpoint:** `/api/chat/`
- **Method:** `POST`
- **Protected:** `True`
- **Description:** Creates a new group with the provided members + the signed in user
- **Expected Parameters:**
  - `memberIds` (array of Object IDs, required)
  - `groupName` (string, optional - defaults to `default`)
- **Expected Response:**

```javascript
	{
		status: "success",
		message: "Chat created successfully",
		chat : {
			_id,
			name: string,
			members: [{
				user: ObjectId,
				isAdmin: boolean
			}],
			memberCount: number
		}
	}
```

### 4. Get Chat

- **Endpoint:** `/api/chat/:chatID`
- **Method:** `GET`
- **Protected:** `True`
- **Description:** Retrieves info about a particular chat
- **Expected Response:**

```javascript
	{
		status: "success",
		chat : {
			_id,
			name: string,
			members: [{
				user: ObjectId,
				isAdmin: boolean
			}],
			memberCount: number,
			messages: [{
				sender: ObjectId,
				content: string,
				chat: ObjectId
			}]
		}
	}
```

## Error Handling

The server will return appropriate error responses in case of invalid requests or server errors. The frontend application is expected to handle these errors with relevant prompts or toasts.

## Status Codes

The API may return the following HTTP status codes:

- `200 OK`: The request was successful.
- `201 Created`: The resource was successfully created.
- `400 Bad Request`: The request was invalid or missing required parameters.
- `401 Unauthorized`: Authentication credentials are missing or invalid.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected server error occurred.
