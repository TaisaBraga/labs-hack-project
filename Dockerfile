FROM python:3.9.7

WORKDIR /back

COPY back/requirements.txt .

RUN pip install -r requirements.txt

COPY ./back ./back