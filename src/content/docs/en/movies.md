---
title: "Movies (endpoint)"
description: ""
---


**`GET`** `https://api-movies.marco-code.ga/api/v1/movies.php?{id}`


```json
[
  {
    "id": "tt0038733",
    "0": "tt0038733",
    "title": "A Matter of Life and Death",
    "1": "A Matter of Life and Death",
    "year": 2017,
    "2": 2017,
    "date_published": "2017-12-08",
    "3": "2017-12-08",
    "duration": 104,
    "4": 104,
    "country": "UK",
    "5": "UK",
    "worldwide_gross_income": "$ 124241",
    "6": "$ 124241",
    "languages": "English, French, Russian",
    "7": "English, French, Russian",
    "production_company": "The Archers",
    "8": "The Archers",
  }
]
```

## Movies (type)

|     Named     |     Type     |
| :------------ | :----------- |
| id             | string       |
| title          | string       |
| year        |  int      |
| date_published      | date |
| duration      | int    |
| country      | string     |
| worldwide_gross_income      | string |
| production_company      | string |

