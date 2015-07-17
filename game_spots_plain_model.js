// ============================
// Разработчик: apelserg ; https://github.com/apelserg/
// Лицензия: WTFPL
// ============================

"use strict";

//===
// Базовый объект - мяч
//===
APELSERG.MODEL.Ball = function (ballX, ballY, dirX, dirY, upX, upY, ballColor) {
    this.X = ballX;
    this.Y = ballY;
    this.Radius = APELSERG.CONFIG.SET.BallSize / 2;
    this.DirX = dirX; //-- направление и скорость по X
    this.DirY = dirY; //-- направление и скорость по Y
    this.DirXSpeedUp = upX; //-- ускорение по X
    this.DirYSpeedUp = upY; //-- ускорение по Y
    this.Color = ballColor;
}

//===
// Новый мяч
//===
APELSERG.MODEL.GetBall = function () {

    var ballColor = APELSERG.MODEL.GetColor();
    var ballX = APELSERG.CONFIG.PROC.CanvaID.width / 2;
    var ballY = APELSERG.CONFIG.PROC.CanvaID.height / 2;
    var upX = APELSERG.MODEL.GetRandomSpeedUp();
    var upY = APELSERG.MODEL.GetRandomSpeedUp();
    var dirX = APELSERG.MODEL.GetRandomDir() * APELSERG.CONFIG.SET.Speed;
    var dirY = APELSERG.MODEL.GetRandomDir() * APELSERG.CONFIG.SET.Speed;

    return new APELSERG.MODEL.Ball(ballX, ballY, dirX, dirY, upX, upY, ballColor);
}

//===
// Новый набор мячей
//===
APELSERG.MODEL.GetBalls = function () {
    var balls = [];
    for(var n = 0; n < APELSERG.CONFIG.SET.BallNum; n++) {
        balls.push(APELSERG.MODEL.GetBall());
    }
    return balls;
}

//===
// Cлучайное число в диапазоне от 0 до max
//===
APELSERG.MODEL.GetRandomNumber = function (max) {

    if (max < 100) return Math.round(Math.random() * 100) % max;
    else return Math.round(Math.random() * max);
}

//===
// Случайное направление
//===
APELSERG.MODEL.GetRandomDir = function () {
    if (Math.round(Math.random() * 10) % 2 == 0) return 1;
    else return -1;
}

//===
// Случайное ускорение
//===
APELSERG.MODEL.GetRandomSpeedUp = function () {
    return APELSERG.MODEL.GetRandomNumber(APELSERG.CONFIG.SET.SpeedUp + 1);
}

//===
// Случайный цвет из списка
//===
APELSERG.MODEL.GetColor = function () {
    var colors = ['#CC3300', '#FF9900', '#FFFF00', '#009933', '#3399FF', '#0033CC', '#9900CC'];
    return colors[APELSERG.MODEL.GetRandomNumber(colors.length)];
}

//===
// Переместить мяч
//===
APELSERG.MODEL.UpdateBall = function () {

    //-- сперва проверка клика мыши
    //--
    for (var n = 0; n < APELSERG.CONFIG.PROC.Balls.length; n++) {

        var ball = APELSERG.CONFIG.PROC.Balls[n];

        //-- попадание
        //--
        if ((ball.X >= (APELSERG.CONFIG.PROC.MouseX - ball.Radius))
            && (ball.X <= (APELSERG.CONFIG.PROC.MouseX + ball.Radius))
            && (ball.Y >= (APELSERG.CONFIG.PROC.MouseY - ball.Radius))
            && (ball.Y <= (APELSERG.CONFIG.PROC.MouseY + ball.Radius))) {

            APELSERG.CONFIG.PROC.Balls.splice(n, 1);

            APELSERG.CONFIG.PROC.RedCnt = 0;

            APELSERG.CONFIG.PROC.Points += (1 + APELSERG.CONFIG.SET.Speed) * (100 - APELSERG.CONFIG.SET.BallSize);

            break; //--  за раз удаляется только один мяч
        }
    }

    //-- промах
    //--
    if (APELSERG.CONFIG.PROC.RedCnt == 1) {
        APELSERG.CONFIG.PROC.Points -= Math.round(APELSERG.CONFIG.SET.BallSize / APELSERG.CONFIG.SET.Speed);
    }

    APELSERG.CONFIG.PROC.MouseX = -999;
    APELSERG.CONFIG.PROC.MouseY = -999;

    //-- движение мяча
    //--
    for (var n = 0; n < APELSERG.CONFIG.PROC.Balls.length; n++) {

        var ball = APELSERG.CONFIG.PROC.Balls[n];

        if (ball.X < APELSERG.CONFIG.PROC.CanvaID.width / 2) {

            //--  Отскок от левой стороны корта
            //--
            if (ball.X <= ball.Radius) {
                ball.X = ball.Radius;
                ball.DirX *= -1;

                ball.DirYSpeedUp = APELSERG.MODEL.GetRandomSpeedUp(); //-- ускорение по Y

                ball.DirY *= APELSERG.MODEL.GetRandomDir();

                APELSERG.CONFIG.PROC.Points -= APELSERG.CONFIG.SET.BallSize / 10;
            }
        }
        else {
            //--  Отскок от правой стороны корта
            //--
            if (ball.X >= (APELSERG.CONFIG.PROC.CanvaID.width - ball.Radius)) {
                ball.X = APELSERG.CONFIG.PROC.CanvaID.width - ball.Radius;
                ball.DirX *= -1;

                ball.DirYSpeedUp = APELSERG.MODEL.GetRandomSpeedUp(); //-- ускорение по Y

                ball.DirY *= APELSERG.MODEL.GetRandomDir();

                APELSERG.CONFIG.PROC.Points -= APELSERG.CONFIG.SET.BallSize / 10;
            }
        }

        if (ball.Y < APELSERG.CONFIG.PROC.CanvaID.height / 2) {

            //--  Отскок от верха корта
            //--
            if (ball.Y <= ball.Radius) {
                ball.Y = ball.Radius;
                ball.DirY *= -1;

                ball.DirXSpeedUp = APELSERG.MODEL.GetRandomSpeedUp(); //-- ускорение по X

                ball.DirX *= APELSERG.MODEL.GetRandomDir();

                APELSERG.CONFIG.PROC.Points -= APELSERG.CONFIG.SET.BallSize / 10;
            }
        }
        else {

            //--  Отскок от низа корта
            //--
            if (ball.Y >= (APELSERG.CONFIG.PROC.CanvaID.height - ball.Radius)) {

                ball.Y = APELSERG.CONFIG.PROC.CanvaID.height - ball.Radius;
                ball.DirY *= -1;

                ball.DirXSpeedUp = APELSERG.MODEL.GetRandomSpeedUp(); //-- ускорение по X

                ball.DirX *= APELSERG.MODEL.GetRandomDir();

                APELSERG.CONFIG.PROC.Points -= APELSERG.CONFIG.SET.BallSize / 10;
            }
        }

        //-- движение мяча
        //--
        if (ball.DirX > 0) {
            ball.X += ball.DirX + ball.DirXSpeedUp;
        }
        else {
            ball.X += ball.DirX - ball.DirXSpeedUp;
        }

        if (ball.DirY > 0) {
            ball.Y += ball.DirY + ball.DirYSpeedUp;
        }
        else {
            ball.Y += ball.DirY - ball.DirYSpeedUp;
        }
    }

    //-- игра завершена (если не осталось мячей)
    //--
    if (APELSERG.CONFIG.PROC.Balls.length == 0) {

        APELSERG.CONFIG.PROC.GameStop = true;
        APELSERG.CONFIG.SetResult();
    }

    //-- игра завершена (если очки ушли в минус)
    //--
    if (APELSERG.CONFIG.PROC.Points < -1000) {

        APELSERG.CONFIG.PROC.GameStop = true;
    }
}
