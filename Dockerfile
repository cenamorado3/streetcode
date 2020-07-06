FROM node:current-slim
WORKDIR /streetcode
COPY package.json .
RUN npm install -g serve
COPY . .

CMD ["npm","run","build","--production"]
CMD ["serve", "-s", "build"]
