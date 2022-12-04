FROM node:18-alpine
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf