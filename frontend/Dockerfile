FROM node:22
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
ENV PORT 5173
CMD ["npx", "serve", "-s", "dist", "-l", "5173"]