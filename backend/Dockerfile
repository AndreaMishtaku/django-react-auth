FROM python:3.11-slim

WORKDIR /app

RUN apt-get update && \
    apt-get install -y build-essential libpq-dev curl netcat-openbsd && \
    apt-get clean

COPY requirements.txt .
RUN pip install  --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt


COPY . .

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0:8000"]