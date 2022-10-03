# Dockerized nodejs application

### Project Setup:

Setting up the project:

```sh
git clone https://github.com/joy2441139/Dockerize-a-NodeJS-application.git
```

```sh
cd Dockerize-a-NodeJS-application
```

Setting up Docker:

1.  Creating docker Images:

```sh
    docker build -t nodejs-docker .
```

2.  Create & run docker container:

```sh
    docker run -it -p 9000:3000 nodejs-docker
```

After running container current time & date can be seen on the console as well in this [http://localhost:9000](http://localhost:9000) link.
