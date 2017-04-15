#!/bin/bash
curl "http://localhost:4741/games/${ID}" \
 --include \
 --header "Content-Type: application/JSON" \
 --request PATCH \
 --data ""

echo
