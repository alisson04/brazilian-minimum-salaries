IMAGE_NAME=alissonfernandesdev/brazilian-minimum-salaries
CONTAINER_NAME=brazilian-minimum-salaries

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -d -p 8081:8081 --rm --name $(CONTAINER_NAME) $(IMAGE_NAME)

stop:
	docker stop $(CONTAINER_NAME)

test:
	docker exec -it $(CONTAINER_NAME) npx cypress run