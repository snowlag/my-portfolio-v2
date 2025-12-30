# Stage 1: Build the React application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --only=production=false

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with NGINX
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose ports
EXPOSE 80 443

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

