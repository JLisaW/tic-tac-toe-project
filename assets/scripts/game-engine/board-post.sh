#!/bin/bash
curl "http://localhost:4741" \
  --include \
  --request POST \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data ""

  echo
