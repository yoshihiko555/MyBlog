#!/usr/bin/bash

# DBファイルの削除
rm -rf ./api/migrations
rm -rf db.sqlite3
rm -rf ./media/images

# マイグレーション
# read -p "Please enter the app name:" app_name
# python manage.py makemigrations $app_name
python manage.py makemigrations api

# マイグレート
python manage.py migrate

# admin作成
python manage.py create_admin

# サーバー起動
python manage.py runserver 0.0.0.0:8000
