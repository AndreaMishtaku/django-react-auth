echo "Waiting for db..."

while ! nc -z ${DB_HOST} ${DB_PORT}; do
  sleep 1
done

echo "DB is up - executing command"

python manage.py makemigrations
python manage.py migrate

echo "Starting server..."

exec "$@"