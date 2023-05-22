FROM node:16
WORKDIR /workspace/fe
COPY package.json ./
RUN npm install --save --legacy-peer-deps
COPY . .
RUN npm run build
run npm install -g serve
EXPOSE 3000

CMD ["serve", "-l", "3000", "-s", "build"]