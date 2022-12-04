FROM node:18-alpine
RUN npm install --only=development
RUN npm run build

FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf