#!/bin/bash
curl "http://localhost:4741/games/${ID}" \
 --include \
 --header "Content-Type: application/JSON" \
 --header "Authorization: Token token=$TOKEN" \
 --request PATCH \
    --data '{
      "game": {
        "cell": {
          "index": index,
          "value": value
        },
        "over": false
      }
    }'

echo
