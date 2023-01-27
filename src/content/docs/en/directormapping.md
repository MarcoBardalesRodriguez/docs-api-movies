---
title: " Directors mapping (endpoint)"
description: ""
---


**`GET`** `https://api-movies.marco-code.ga/api/v1/directormapping.php?{movie_id or person_id}`


```json
[
    {
        "id": "nm0003836",
        "0": "nm0003836",
        "name": "Michael Powell",
        "1": "Michael Powell",
        "height": 188,
        "2": 188,
        "date_of_birth": "1905-09-30",
        "3": "1905-09-30",
        "known_for_movies": "tt0038733",
        "4": "tt0038733"
    },
    {
        "id": "nm0696247",
        "0": "nm0696247",
        "name": "Emeric Pressburger",
        "1": "Emeric Pressburger",
        "height": 97,
        "2": 97,
        "date_of_birth": "1902-12-05",
        "3": "1902-12-05",
        "known_for_movies": "tt0038733",
        "4": "tt0038733"
    }
]
```  

## Directors mapping (type)


### movie_id

|     Named     |     Type     |
| :------------ | :----------- |
| id             | string       |
| name       | string       |
| height      |  int      |
| date_of_birth       | date |
| known_for_movies        | string |


### person_id

|     Named     |     Type     |
| :------------ | :----------- |
| id             | string       |
| title          | string       |
| year        | int       |
| date_published      | date |
| duration      | int   |
| country      | string     |
| worldwide_gross_income      | string |
| production_company      | string |

