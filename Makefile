IMAGE_NAME=vuejs-cookbook/dockerize-vuejs-app

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 $(IMAGE_NAME)