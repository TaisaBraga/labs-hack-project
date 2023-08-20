FROM python:3.9.7

WORKDIR /back

COPY back/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY ./back ./back