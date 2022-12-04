FROM nginx:alpine
COPY dist1/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf