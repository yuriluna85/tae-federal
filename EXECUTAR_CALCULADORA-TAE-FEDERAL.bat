@echo off
chcp 65001 > nul
cd /d "%~dp0"
title YLuna85 LABs / IF Baiano — Launcher
echo ========================================================
echo   Abrindo Interface Web: calculadora-tae-federal
echo ========================================================
start "" "%~dp0index.html"
