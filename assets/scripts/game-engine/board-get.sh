#!/bin/bash
API="${API_ORIGIN:-http://localhost:4741/games}"
URL_PATH="/games/:id"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --"Authorization: Token token=$TOKEN"
