# SELECT the image
FROM oven/bun:latest

# Set working directory
WORKDIR /app

# Copy package and bun files
COPY package.json bun.lockb ./

# Install files
RUN bun install

# Copy all of the source code
COPY . .

# Expo port
EXPOSE 8080

# Start the app
CMD ["bun", "dev"]