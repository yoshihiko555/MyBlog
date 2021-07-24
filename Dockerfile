FROM python:3

WORKDIR /home/

ADD ./server .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN python manage.py collectstatic --noinput

CMD gunicorn server.wsgi:application --bind 0.0.0.0:$PORT
