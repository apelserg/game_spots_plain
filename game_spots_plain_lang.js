// ============================
// Разработчик: apelserg ; https://github.com/apelserg/
// Лицензия: WTFPL
// ============================

"use strict";

//===
// Получить текст на выбранном языке
//===
APELSERG.LANG.GetText = function (keyText) {

    if (APELSERG.CONFIG.SET.Lang == "EN") {
        if (keyText == "YES") return "Yes";
        if (keyText == "NO") return "No";
        if (keyText == "CANCEL") return "Cancel";
        if (keyText == "STOP") return "CLICK";
        if (keyText == "PAUSE") return "PAUSE";
        if (keyText == "SAVE") return "Save";
        if (keyText == "RESET") return "Reset";
        if (keyText == "RELOAD_PAGE") return "Reload page";
        if (keyText == "NO_DATA") return "No data";
        if (keyText == "LABEL_NAME") return "Name";
        if (keyText == "LABEL_LANG") return "Lang";
        if (keyText == "LABEL_COURT_WIDTH") return "Width";
        if (keyText == "LABEL_COURT_HEIGHT") return "Height";
        if (keyText == "LABEL_POINTS") return "Points";
        if (keyText == "LABEL_BALL_SIZE") return "Ball";
        if (keyText == "LABEL_SPEED") return "Speed";
        if (keyText == "LABEL_NUMBER") return "Number";
        return "== ? EN ? ==";
    }

    if (APELSERG.CONFIG.SET.Lang == "RU") {
        if (keyText == "YES") return "Да";
        if (keyText == "NO") return "Нет";
        if (keyText == "CANCEL") return "Отмена";
        if (keyText == "STOP") return "КЛИК";
        if (keyText == "PAUSE") return "ПАУЗА";
        if (keyText == "SAVE") return "Сохранить";
        if (keyText == "RESET") return "Сбросить";
        if (keyText == "RELOAD_PAGE") return "Перегрузите страницу";
        if (keyText == "NO_DATA") return "Нет данных";
        if (keyText == "LABEL_NAME") return "Имя";
        if (keyText == "LABEL_LANG") return "Язык";
        if (keyText == "LABEL_COURT_WIDTH") return "Ширина";
        if (keyText == "LABEL_COURT_HEIGHT") return "Глубина";
        if (keyText == "LABEL_POINTS") return "Очков";
        if (keyText == "LABEL_BALL_SIZE") return "Мяч";
        if (keyText == "LABEL_SPEED") return "Скорость";
        if (keyText == "LABEL_NUMBER") return "Количество";
        return "== ? RU ? ==";
    }

    return "== ? No lang ? ==";
}


//===
// Получить помощь на выбранном языке
//===
APELSERG.LANG.GetHelp = function () {

    if (APELSERG.CONFIG.SET.Lang == "EN") {

        return "" +
            "<h3>Game</h3>" +
            "<pre>" +
            "Start - click on the court <br/>" +
            "More - click on the ball <br/>" +
            "Full screen mode on/off - [F11] for most browsers <br/>" +
            "Increase/decrease - [Ctrl+]/[Ctrl-] for most browsers <br/>" +
            "</pre>" +
            "" +
            "<h3>Top buttons</h3>" +
            "<pre>" +
            "Settings, Best results, Help <br/>" +
            "Available when [Stop] <br/>" +
            "Click on the court - windows closed, game begins <br/>" +
            "</pre>" +
            "" +
            "<h3>Offline mode</h3>" +
            "<pre>" +
            "Load from web server - Offline mode must be already installed <br/>" +
            "Load from local disk - does not work save the settings and results <br/>" +
            "</pre>" +
            "" +
            "<h3>Problems</h3>" +
            "<pre>" +
            "1. Update your browser to the latest version <br/>" +
            "2. Try a different browser <br/>" +
            "</pre>";

    }

    if (APELSERG.CONFIG.SET.Lang == "RU") {
        return "" +
            "<h3>Игра</h3>" +
            "<pre>" +
            "Старт - клик на корте <br/>" +
            "Далее - клик на круге <br/>" +
            "Стоп - выигрыш, перезагрузка страницы <br/>" +
            "Полноэкранный режим вкл/выкл - [F11] для большинства браузеров <br/>" +
            "Увеличить/уменьшить - [Ctrl+]/[Ctrl-] для большинства браузеров <br/>" +
            "</pre>" +
            "" +
            "<h3>Кнопки сверху</h3>" +
            "<pre>" +
            "Настройка, 10 лучших результатов, Подсказка <br/>" +
            "Доступны в режиме [Стоп] <br/>" +
            "При клике на корте - окна закрываются, начинается игра <br/>" +
            "</pre>" +
            "" +
            "<h3>Автономная работа</h3>" +
            "<pre>" +
            "С веб-сервера - автономный режим должен быть уже установлен <br/>" +
            "С локального диска - не работает сохранение настроек и результатов <br/>" +
            "</pre>" +
            "" +
            "<h3>Проблемы</h3>" +
            "<pre>" +
            "1. Обновить браузер до последней версии <br/>" +
            "2. Попробовать другой браузер <br/>" +
            "</pre>";
    }

    return "== ? No help ? ==";
}
