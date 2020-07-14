FROM node AS builder
RUN mkdir -p /opt/clerk
COPY . /opt/clerk
WORKDIR /opt/clerk
RUN npm install
RUN npm run build

FROM nginx:1.13.9-alpine
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /www/data
COPY --from=builder /opt/clerk/build /www/data
