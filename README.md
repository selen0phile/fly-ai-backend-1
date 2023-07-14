# Fly.AI API Documentation

# API Endpoints

# 1. Users

## a. Get All Books (Paginated)
Endpoint URL: `/api/v1/book?page=2&per_page=1`  
Request Artfacts: `None`  
Example Response:  
```json
[
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

## a. Query Books by author, title, keyword
Endpoint URL: `/api/v1/book?author=jaber&title=&keyword=offline`  
Request Artfacts: `None`  
Example Response:  
```json
[
    {
        "id": "64b0354cc7556db149915d7a",
        "bookId": 14,
        "author": "jaber",
        "link": "https://firebasestorage.googleapis.com/v0/b/litcode-ba82a.appspot.com/o/uploads%2FOfflineAllPairShortestPath.pdf?alt=media&token=f3ee15d4-b25c-47e2-84d8-e74cc4274558",
        "title": "Offline 3",
        "createdAt": "2023-07-13T17:33:00.833Z",
        "keywords": "offline, dsa, pera, pain",
        "description": "This is the offline 3......",
        "public": true
    }
]
```

