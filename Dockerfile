FROM node:current-slim
WORKDIR /streetcode
COPY package.json .
RUN npm install
COPY . .

CMD ["npm","start"]
CMD [ "/bin/bash", "-c", "--" ]
