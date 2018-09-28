FROM mysql
RUN apt update && apt install git -y && \
    git clone https://github.com/prabaprakash/test_db.git && \
    apt remove --purge git -y
EXPOSE 3306 33060
CMD mysqld start && \
    cd /test_db && \
    mysql -u root -ppassword  < employees.sql && \
    cd / && rm -rf test_db && \
    mysqld