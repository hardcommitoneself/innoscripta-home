FROM ubuntu:22.04

# Define build arguments
ARG DB_NAME
ARG DB_USER
ARG DB_PASSWORD

# Set environment variables
ENV MYSQL_DATABASE=$DB_NAME
ENV MYSQL_USER=$DB_USER
ENV MYSQL_PASSWORD=$DB_PASSWORD

# Set the working directory
WORKDIR /var/www/html

# Copy the application code
COPY . /var/www/html

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Install dependencies
RUN apt-get update && \
    apt-get install -y \
    git \
    curl \
    libpng-dev \
    libxml2-dev \
    libzip-dev \
    zip \
    unzip

RUN apt-get update \
    && mkdir -p /etc/apt/keyrings \
    && apt-get install -y gnupg gosu curl ca-certificates zip unzip git supervisor sqlite3 libcap2-bin libpng-dev python2 dnsutils librsvg2-bin fswatch \
    && curl -sS 'https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x14aa40ec0831756756d7f66c4f4ea0aae5267a6c' | gpg --dearmor | tee /etc/apt/keyrings/ppa_ondrej_php.gpg > /dev/null \
    && echo "deb [signed-by=/etc/apt/keyrings/ppa_ondrej_php.gpg] https://ppa.launchpadcontent.net/ondrej/php/ubuntu jammy main" > /etc/apt/sources.list.d/ppa_ondrej_php.list \
    && apt-get update \
    && apt-get install -y php8.2-cli php8.2-dev \
    php8.2-pgsql php8.2-sqlite3 php8.2-gd php8.2-imagick \
    php8.2-curl \
    php8.2-imap php8.2-mysql php8.2-mbstring \
    php8.2-xml php8.2-zip php8.2-bcmath php8.2-soap \
    php8.2-intl php8.2-readline \
    php8.2-ldap \
    php8.2-msgpack php8.2-igbinary php8.2-redis php8.2-swoole \
    php8.2-memcached php8.2-pcov php8.2-xdebug \
    && curl -sLS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer \
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_VERSION.x nodistro main" > /etc/apt/sources.list.d/nodesource.list \
    && apt-get update \
    && apt-get install -y mysql-client \
    && apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install project dependencies
RUN composer install --no-interaction --no-scripts --no-dev --prefer-dist

# Copy the application configuration file
COPY .env.example .env

# Generate the applicationi key
RUN php artisan key:generate

# Check if the database exists, and create it if it doesn't
RUN php -r \
    "if (!file_exists(.db_created)) { \
    try { \
    \$dbh = new PDO('mysql:host=mysql;port=3306', '${DB_USERNAME}', '${DB_PASSWORD}}'); \
    \$dbh->exec('CREATE DATABASE ${DB_NAME}'); \
    touch('.db_created'); \
    } catch (PDOException \$e) { \
    die('Database connection failed: ' . \$e->getMessage()); \
    } \
    }"

# Set the cache driver to file
RUN php artisan config:cache

# set the port to 8000
EXPOSE 8000

# Start the server
CMD [ "php", "artisan", "serve", "--host=0.0.0.0", "--port=8000" ]
