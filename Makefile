IMAGE_NAME=alissonfernandesdev/brazilian-minimum-salaries

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -it -p 8081:8081 --rm --name brazilian-minimum-salaries $(IMAGE_NAME)

start:
	docker exec dockerize-vuejs-app-1 npm run dev