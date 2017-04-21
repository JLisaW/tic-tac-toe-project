#!/bin/bash
curl "http://localhost:4741/games/${ID}" \
 --include \
 --header "Content-Type: application/JSON" \
 --header "Authorization: Token token=$TOKEN" \
    --data '{
      "game": {
        "cell": {
          "index": index
          "value": value
        },
        "over": true
      }
    }'

echo
