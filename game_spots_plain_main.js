// ============================
// Разработчик: apelserg ; https://github.com/apelserg/
// Лицензия: WTFPL
// ============================

"use strict";

//-- Глобальные переменные
//--

var APELSERG = {};

APELSERG.MAIN = {};
APELSERG.MODEL = {};
APELSERG.CANVA = {};
APELSERG.UI = {};
APELSERG.LANG = {};
APELSERG.CONFIG = {};
APELSERG.CONFIG.SET = {};
APELSERG.CONFIG.PROC = {};
APELSERG.CONFIG.RESULT = {};

//===
// старт программы (начальная прорисовка)
//===
APELSERG.MAIN.OnLoad = function () {

    //-- определить место загрузки
    //--
    window.location.protocol == "file:" ? APELSERG.CONFIG.PROC.LoadFromWeb = false : APELSERG.CONFIG.PROC.LoadFromWeb = true;

    //-- инициализация
    //--
    APELSERG.CONFIG.GetConfigOnLoad();
    APELSERG.CONFIG.GetResultOnLoad();

    //-- канва
    //--
    APELSERG.CONFIG.PROC.CanvaID = document.getElementById('APELSERG_CanvasCatchboll');
    APELSERG.CONFIG.PROC.Ctx = APELSERG.CONFIG.PROC.CanvaID.getContext('2d');
    APELSERG.CONFIG.PROC.CanvaID.width = APELSERG.CONFIG.SET.CourtWidth; 
    APELSERG.CONFIG.PROC.CanvaID.height = APELSERG.CONFIG.SET.CourtHeight;

    APELSERG.CONFIG.PROC.Balls = APELSERG.MODEL.GetBalls();  //-- мячи
    APELSERG.CONFIG.PROC.Points = 0;
    APELSERG.CANVA.CourtRewrite();

    //===
    // Обработка клика мыши
    //===
    APELSERG.CONFIG.PROC.CanvaID.addEventListener('click', function (event) {

        if (APELSERG.CONFIG.PROC.GameStop) {
            APELSERG.MAIN.Start();
        }
        else {
            APELSERG.CONFIG.PROC.MouseX = event.clientX - APELSERG.CONFIG.PROC.CanvaID.offsetLeft - APELSERG.CONFIG.SET.CourtBorder;
            APELSERG.CONFIG.PROC.MouseY = event.clientY - APELSERG.CONFIG.PROC.CanvaID.offsetTop - APELSERG.CONFIG.SET.CourtBorder;

            APELSERG.CONFIG.PROC.RedCnt = 10;
        }

    });
}

//===
// Старт
//===
APELSERG.MAIN.Start = function () {

    //-- закрыть окна (если открыты - должны закрыться)
    //--
    if (APELSERG.CONFIG.PROC.UiSettings) {
        APELSERG.UI.ShowSettings();
    }
    if (APELSERG.CONFIG.PROC.UiPoints) {
        APELSERG.UI.ShowPoints();
    }
    if (APELSERG.CONFIG.PROC.UiHelp) {
        APELSERG.UI.ShowHelp();
    }

    //-- обработать "пробел"
    //--
    if (!APELSERG.CONFIG.PROC.UiSettings && !APELSERG.CONFIG.PROC.UiPoints && !APELSERG.CONFIG.PROC.UiHelp) {

        if (APELSERG.CONFIG.PROC.GameStop) {

            //-- новая игра - инициализация
            //--
            APELSERG.CONFIG.PROC.GameStop = false;
            APELSERG.CONFIG.PROC.Points = 0;
            APELSERG.CONFIG.PROC.Balls = APELSERG.MODEL.GetBalls();
            APELSERG.MAIN.Animation(); //-- запуск рабочего цикла
        }
    }
}

//===
// Рабочий цикл
//===
APELSERG.MAIN.Animation = function () {
    APELSERG.MODEL.UpdateBall(); //-- !!! окончание игры срабатывает здесь
    APELSERG.CANVA.CourtRewrite();
    if (!APELSERG.CONFIG.PROC.GameStop) {
        window.requestAnimationFrame(function () {
            APELSERG.MAIN.Animation();
        });
    }
}
