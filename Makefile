IMAGE_NAME=vuejs-cookbook/dockerize-vuejs-app

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -it -p 5173:8080 --rm --name dockerize-vuejs-app-1 $(IMAGE_NAME)

start:
	docker exec dockerize-vuejs-app-1 npm run dev