install: instal-deps install-flow
	npm install

instal-deps:
	npm install

install-flow:
	npm run flow-typed install

start:
	npm run babel-node -- src/bin/brain-games.js 10

publish:
	npm publish

lint:
	npm run eslint .

check-types:
	npm run flow
	

