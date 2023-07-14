# Fly.AI API Documentation

# API Endpoints

# 1. Users

## a. Get All Books (Paginated)
Endpoint URL: `/api/v1/book?per_page=10`  
Request Artfacts: `None`  
Example Response:  
```json
[
  {
  "id": "64afcf2ba65e541636308f0d",
  "bookId": 4,
  "author": "a",
  "link": "a",
  "title": "A Brief History of Time",
  "createdAt": "2023-07-13T10:17:15.588Z",
  "keywords": "science,physics,time",
  "description": "The greatest book",
  "public": true
  },
  {
  "id": "64afd42c3699a960929d881c",
  "bookId": 5,
  "author": "a",
  "link": "https://firebasestorage.googleapis.com/v0/b/litcode-ba82a.appspot.com/o/uploads%2FJaber_Ahmed%20Deedar_Resume_04-07-2023-11-51-15.pdf?alt=media&token=2060fa56-6069-436f-8580-af5519335e89",
  "title": "Pride and Prejudices",
  "createdAt": "2023-07-13T10:38:36.512Z",
  "keywords": "classic, romance, social critique",
  "description": "Set in the 19th century, Pride and Prejudice unravels the complexities of societal norms, love, and personal growth as Elizabeth Bennet navigates the challenges of her class-conscious world, facing her own prejudices and ultimately discovering the power of true love.",
  "public": true
  },....... 8 more
]
```

## a. Query Books by author, title, keyword
Endpoint URL: `/api/v1/book?author=anik&title=brief&`  
Request Artfacts: `None`  
Example Response:  
```json
[
  {
  "id": "64afcf2ba65e541636308f0d",
  "bookId": 4,
  "author": "a",
  "link": "a",
  "title": "A Brief History of Time",
  "createdAt": "2023-07-13T10:17:15.588Z",
  "keywords": "science,physics,time",
  "description": "The greatest book",
  "public": true
  },
  {
  "id": "64afd42c3699a960929d881c",
  "bookId": 5,
  "author": "a",
  "link": "https://firebasestorage.googleapis.com/v0/b/litcode-ba82a.appspot.com/o/uploads%2FJaber_Ahmed%20Deedar_Resume_04-07-2023-11-51-15.pdf?alt=media&token=2060fa56-6069-436f-8580-af5519335e89",
  "title": "Pride and Prejudices",
  "createdAt": "2023-07-13T10:38:36.512Z",
  "keywords": "classic, romance, social critique",
  "description": "Set in the 19th century, Pride and Prejudice unravels the complexities of societal norms, love, and personal growth as Elizabeth Bennet navigates the challenges of her class-conscious world, facing her own prejudices and ultimately discovering the power of true love.",
  "public": true
  }
]
```

