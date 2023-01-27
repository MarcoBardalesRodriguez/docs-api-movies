---
title: "Roles mapping (endpoint)"
description: ""
---


**`GET`** `https://api-movies.marco-code.ga/api/v1/rolemapping.php?{movie_id or person_id}`


```json
[
    {
        "id": "nm0000057",
        "0": "nm0000057",
        "name": "David Niven",
        "1": "David Niven",
        "height": 180,
        "2": 180,
        "date_of_birth": "1910-03-01",
        "3": "1910-03-01",
        "known_for_movies": null,
        "4": null,
        "role": "actor",
        "5": "actor"
    },
    {
        "id": "nm0001375",
        "0": "nm0001375",
        "name": "Kim Hunter",
        "1": "Kim Hunter",
        "height": 161,
        "2": 161,
        "date_of_birth": "1922-11-12",
        "3": "1922-11-12",
        "known_for_movies": null,
        "4": null,
        "role": "actress",
        "5": "actress"
    },
    {
        "id": "nm0126402",
        "0": "nm0126402",
        "name": "Kathleen Byron",
        "1": "Kathleen Byron",
        "height": 200,
        "2": 200,
        "date_of_birth": "1921-01-11",
        "3": "1921-01-11",
        "known_for_movies": null,
        "4": null,
        "role": "actress",
        "5": "actress"
    },
    {
        "id": "nm0178509",
        "0": "nm0178509",
        "name": "Robert Coote",
        "1": "Robert Coote",
        "height": 200,
        "2": 200,
        "date_of_birth": "1909-02-04",
        "3": "1909-02-04",
        "known_for_movies": "tt0038733",
        "4": "tt0038733",
        "role": "actor",
        "5": "actor"
    }
]
```  

## Roles mapping (type)


### movie_id

|     Named     |     Type     |
| :------------ | :----------- |
| id             | string       |
| name       | string       |
| height      | int       |
| date_of_birth       | date |
| known_for_movies        | string |
| role         | string       |


### person_id

|     Named     |     Type     |
| :------------ | :----------- |
| id             | string       |
| title          | string       |
| year        | int       |
| date_published      | date |
| duration      | int    |
| country      | string     |
| worldwide_gross_income      | string |
| production_company      | string |

