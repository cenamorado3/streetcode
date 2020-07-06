FROM node:8 as react-build
WORKDIR /streetcode
COPY . ./
RUN npm install


FROM nginx:alpine
COPY — from=react-build
EXPOSE 8080
CMD [“nginx”, “-g”, “daemon off;”]
