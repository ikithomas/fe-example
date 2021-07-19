FROM debian:buster as with_basic_stuffs

WORKDIR "/app"

RUN apt-get update \
  && apt-get install -y vim git curl wget

FROM with_basic_stuffs as with_fe_env

# node and npm
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
  && apt-get install -y nodejs

COPY package.json .

RUN npm install
