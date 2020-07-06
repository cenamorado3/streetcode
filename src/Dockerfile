FROM node:current-slim as react-build
WORKDIR /streetcode
COPY package.json .
RUN npm install


FROM nginx:alpine
COPY — from=react-build
EXPOSE 8080
CMD [“nginx”, “-g”, “daemon off;”]
