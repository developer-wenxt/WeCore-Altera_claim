# syntax=docker/dockerfile:1

# ----- Build Stage -----
FROM node:18-bullseye-slim AS build
WORKDIR /app

# Install dependencies (production only for clean runtime image)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source code
COPY . .

# ----- Production Stage -----
FROM node:18-bullseye-slim AS runtime
WORKDIR /app

# Install required Oracle Instant Client dependencies (libaio1) and tools
RUN apt-get update && \
    apt-get install -y libaio1 wget unzip && \
    rm -rf /var/lib/apt/lists/*

# Copy application from build stage
COPY --from=build /app /app

# Install Linux Oracle Instant Client 19.24.0.0.0 (supports Oracle DB 11.2, 12c, 18c, 19c, 21c)
RUN rm -rf /app/instantclient_* && \
    wget https://download.oracle.com/otn_software/linux/instantclient/1924000/instantclient-basiclite-linux.x64-19.24.0.0.0dbru.zip && \
    unzip instantclient-basiclite-linux.x64-19.24.0.0.0dbru.zip -d /app && \
    rm instantclient-basiclite-linux.x64-19.24.0.0.0dbru.zip && \
    (ln -s /usr/lib/x86_64-linux-gnu/libnsl.so.2 /usr/lib/x86_64-linux-gnu/libnsl.so.1 || true) && \
    mkdir -p /app/instantclient_19_24/network/admin && \
    echo "SQLNET.ALLOWED_LOGON_VERSION_CLIENT = 8" > /app/instantclient_19_24/network/admin/sqlnet.ora && \
    echo "SQLNET.ALLOWED_LOGON_VERSION_SERVER = 8" >> /app/instantclient_19_24/network/admin/sqlnet.ora && \
    test -f /app/instantclient_19_24/libclntsh.so

# Use the built-in node user for security
RUN chown -R node:node /app
USER node

# Expose the application port
EXPOSE 5001
ENV PORT=5001

ENV NODE_ENV=production
# Set library path and TNS admin for Oracle Client
ENV LD_LIBRARY_PATH=/app/instantclient_19_24
ENV TNS_ADMIN=/app/instantclient_19_24/network/admin

# Start the application
CMD ["node", "server.js"]