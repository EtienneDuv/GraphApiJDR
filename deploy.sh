#!/bin/bash
set -e

VERSION=$(git log --oneline | head -n 1 | cut -d' ' -f1)
export VERSION
echo "DEPLOYING version $VERSION"

docker build . -t  etienneduv/graphapi-jdr

echo "Starting stack"
docker stack deploy --compose-file docker-compose.yml adalon-jdr

echo "Cleaning old containers"
docker ps | grep "adalon-jdr_" | grep -v "_db" | cut -d' ' -f1 | xargs docker rm -f