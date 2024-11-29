FROM node:18
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT 3001
RUN npx tsc
CMD ["npm", "run", "dev"]
