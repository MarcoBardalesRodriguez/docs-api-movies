---
title: "Genres mapping (endpoint)"
description: ""
---


**`GET`** `https://api-movies.marco-code.ga/api/v1/genremapping.php?{movie_id or genre_id}`


```json
[
    {
        "id": "gn0012350",
        "0": "gn0012350",
        "name": "Fantasy",
        "1": "Fantasy"
    },
    {
        "id": "gn0017639",
        "0": "gn0017639",
        "name": "Drama",
        "1": "Drama"
    },
    {
        "id": "gn0019879",
        "0": "gn0019879",
        "name": "Comedy",
        "1": "Comedy"
    }
]
```  

## Genres mapping (type)


### movie_id

|     Named     |     Type     |
| :------------ | :----------- |
| id             | string       |
| title          | string       |
| year        | int      |
| date_published      | date |
| duration      | int    |
| country      | string     |
| worldwide_gross_income      | string |
| production_company      | string |


### genre_id

|     Named     |     Type     |
| :------------ | :----------- |
| id             | string       |
| name       | string       |
