// ============================
// Разработчик: apelserg ; https://github.com/apelserg/
// Лицензия: WTFPL
// ============================

"use strict";

//===
// Полная отрисовка
//===
APELSERG.CANVA.CourtRewrite = function () {
    
    var ctx = APELSERG.CONFIG.PROC.Ctx;

    //-- Поле
    //--
    if (APELSERG.CONFIG.PROC.RedCnt > 0) {
        ctx.fillStyle = 'red';
        APELSERG.CONFIG.PROC.RedCnt--;
    }
    else {
        ctx.fillStyle = 'gray';
    }
    ctx.fillRect(0, 0, APELSERG.CONFIG.PROC.CanvaID.width, APELSERG.CONFIG.PROC.CanvaID.height);

    //-- Мяч
    //--
    for (var n = 0; n < APELSERG.CONFIG.PROC.Balls.length; n++) {
        var ball = APELSERG.CONFIG.PROC.Balls[n];
        APELSERG.CANVA.BallRewrite(ctx, ball);
    }
     
    //-- Пауза
    //--
    if (APELSERG.CONFIG.PROC.GamePause && !APELSERG.CONFIG.PROC.GameStop) {
        APELSERG.CANVA.TextRewrite(ctx, APELSERG.LANG.GetText("PAUSE"));
    }

    //-- Стоп
    //--
    if (APELSERG.CONFIG.PROC.GameStop) {
        APELSERG.CANVA.TextRewrite(ctx, APELSERG.LANG.GetText("STOP"));
    }

    //-- Инфо
    //--
    APELSERG.CANVA.InfoRewrite(ctx);
}

//===
// Мяч
//===
APELSERG.CANVA.BallRewrite = function (ctx, ball) {

    ctx.beginPath();
    ctx.arc(ball.X, ball.Y, ball.Radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = ball.Color;
    ctx.fill();
}

//===
// Текст
//===
APELSERG.CANVA.TextRewrite = function (ctx, strText) {

    var fontHight = APELSERG.CONFIG.SET.BallSize;

    if (fontHight < 20) {
        fontHight = 20;
    }
    if (fontHight > 30) {
        fontHight = 30;
    }

    ctx.font = fontHight.toString() + "px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(strText, APELSERG.CONFIG.PROC.CanvaID.width / 2, APELSERG.CONFIG.PROC.CanvaID.height / 2);
}

//===
// Инфо
//===
APELSERG.CANVA.InfoRewrite = function (ctx) {

    var fontHight = APELSERG.CONFIG.SET.BallSize;

    if (fontHight < 20) {
        fontHight = 20;
    }
    if (fontHight > 30) {
        fontHight = 30;
    }

    var strText = APELSERG.CONFIG.SET.UserName;

    strText += "  ";
    strText += APELSERG.LANG.GetText("LABEL_POINTS") + " : " + APELSERG.CONFIG.PROC.Points.toString();

    ctx.font = fontHight.toString() + "px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(strText, APELSERG.CONFIG.PROC.CanvaID.width / 2, APELSERG.CONFIG.PROC.CanvaID.height - 3);
}
