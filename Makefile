install: instal-deps install-flow
	npm install

instal-deps:
	npm install

install-flow:
	npm run flow-typed install

start-brainGames:
	npm run babel-node -- src/bin/brain-games.js 10

start-even:
	npm run babel-node -- src/bin/brain-even.js 10

start-calc:
	npm run babel-node -- src/bin/brain-calc.js 10

start-gcd:
	npm run babel-node -- src/bin/brain-gcd.js 10

start-balance:
	npm run babel-node -- src/bin/brain-balance.js 10

start-progression:
	npm run babel-node -- src/bin/brain-progression.js 10

start-prime:
	npm run babel-node -- src/bin/brain-prime.js 10

publish:
	npm publish

lint:
	npm run eslint .

check-types:
	npm run flow

build:
	npm run-script build
	

