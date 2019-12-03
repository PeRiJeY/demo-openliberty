docker build -t gcr.io/buoyant-ceiling-256716/frontend:0.0.6 .
docker push gcr.io/buoyant-ceiling-256716/frontend:0.0.6

#docker run --name frontend --rm -p 4200:4200 gcr.io/buoyant-ceiling-256716/frontend:0.0.6