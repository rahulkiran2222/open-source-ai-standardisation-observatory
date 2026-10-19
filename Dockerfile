FROM node:20-alpine

# Set up user for Hugging Face Spaces (UID 1000)
RUN adduser -D -u 1000 appuser

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application source
COPY . .

# Build production Vite bundle
RUN npm run build

# Set permissions
RUN chown -R appuser:appuser /app

USER appuser

# Hugging Face Spaces expects port 7860
EXPOSE 7860

CMD ["npm", "run", "start"]
