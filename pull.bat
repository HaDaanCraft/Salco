@echo off
TITLE[GitPull]
:1
TIMEOUT /T 30 /NOBREAK >private/null
git pull >private/null
GOTO 1