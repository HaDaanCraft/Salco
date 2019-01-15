@echo off
TITLE[GitPull]
:1
TIMEOUT /T 5 /NOBREAK >null
git pull >null
GOTO 1