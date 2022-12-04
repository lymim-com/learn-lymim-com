FROM node:18-alpine
RUN npm install
RUN npm run build
COPY . .

FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf