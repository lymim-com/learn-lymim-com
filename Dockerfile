FROM node:18-alpine
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
RUN npm run build
COPY . .
RUN echo $(ls -1 .)

FROM nginx:alpine
WORKDIR /usr/app
RUN echo $(ls -1 .)
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf