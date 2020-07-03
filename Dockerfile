FROM node AS builder
RUN mkdir -p /opt/clerk
COPY . /opt/clerk
WORKDIR /opt/clerk
RUN npm install
RUN npm run build

FROM nginx:1.13.9-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY common.conf /etc/nginx/common.conf
RUN mkdir -p /www/data
