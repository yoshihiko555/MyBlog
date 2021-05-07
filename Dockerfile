FROM drf-base:latest

ADD ./server/requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN python manage.py collectstatic --noinput

CMD gunicorn server.wsgi:application --bind 0.0.0.0:$PORT

# FROM continuumio/anaconda3:2020.02

# WORKDIR /home/blog/

# RUN apt-get update && apt-get install -y --no-install-recommends \
#   net-tools \
#   sudo \
#   bzip2 \
#   curl \
#   gcc \
#   git \
#   python3-dev \
#   vim \
#   && \
#   apt-get clean && \
#   pip install --upgrade pip && \
#   conda update -n base conda && \
#   conda update --all && \
#   conda clean --all -y && \
#   conda install -c anaconda django && \
#   conda install -c conda-forge django-filter && \
#   conda install -c conda-forge djangorestframework && \
#   conda install -c conda-forge djangorestframework-jwt && \
#   conda install -c conda-forge django-cors-headers && \
#   conda install -c conda-forge django-cleanup && \
#   conda install -c anaconda psycopg2 && \
#   conda install -c conda-forge whitenoise && \
#   conda install -c anaconda gunicorn && \
#   conda install -c conda-forge django-environ && \
#   conda install -c conda-forge dj-database-url && \
#   pip install markdown && \
#   pip install dj3-cloudinary-storage

# COPY ./server .

# ENV DJANGO_ENV production

# RUN python manage.py collectstatic --noinput

# MAINTAINER admin

# ENV USER admin

# RUN useradd -m ${USER}
# RUN gpasswd -a ${USER} sudo
# RUN echo "${USER}:test_pass" | chpasswd
# USER ${USER}

# CMD gunicorn server.wsgi:application --bind 0.0.0.0:$PORT