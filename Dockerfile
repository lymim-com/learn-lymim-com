FROM node:18-alpine
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
RUN npm run build
COPY . .
RUN echo $(ls -1 /tmp/dir)

FROM nginx:alpine
RUN echo $(ls -1 /tmp/dir)
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf