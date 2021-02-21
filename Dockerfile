FROM node:slim
COPY ./hosts /etc/hosts
COPY . /pokedex
WORKDIR /pokedex


RUN apt update -y
RUN apt-get update -y
RUN apt install yarn -y
RUN yarn install 

EXPOSE 3000

CMD [ "yarn","dev" ]