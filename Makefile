.PHONY: sh db test lint setup up down doc

options ?=

up:
	@docker-compose up -d

down:
	@docker-compose down

build:
	@docker-compose build app

sh:
	@docker-compose run --rm app bash
