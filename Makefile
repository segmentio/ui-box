SRC := $(wildcard src/*.js src/*/*.js)

.DEFAULT_GOAL := lib

lib: $(SRC) node_modules
	./node_modules/.bin/babel --source-maps inline --out-dir lib src

clean:
	rm -rf lib storybook-static

node_modules: yarn.lock
	yarn install
	touch $@

storybook-static: node_modules
	./node_modules/.bin/build-storybook

server: node_modules
	./node_modules/.bin/start-storybook -p 9009

deploy: node_modules storybook-static
	git branch -f gh-pages
	git checkout gh-pages
	git reset --hard origin/master
	cp -r storybook-static/* .
	git add -A .
	git commit -a -m 'gh-pages update'
	git push origin gh-pages --force
	git checkout master

.PHONY: build clean server deploy
