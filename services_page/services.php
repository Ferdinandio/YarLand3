<!doctype html>
<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>План эвакуации А3 на ПВХ</title>
  <meta name="description"
    content="Изготовление планов эвакуации при пожаре. Фотолюминесцентные материалы в соответствие с ГОСТ 12.2.143 2009. Заказать в Москве по минимальной цене.">
  <meta name="keywords"
    content="Изготовление планов эвакуации при пожаре разработка схем фотолюминесцентные гост заказать в москве план пожарной эвакуации">
  <meta name="author" content="Планы-01: Планы эвакуации, Изготовление вывесок, Противопожарные системы">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../favicon.ico" rel="shortcut icon" type="image/x-icon">
  <link href="./css/normalize.css" rel="stylesheet">
  <link href="./css/bootstrap-grid.min.css" rel="stylesheet">
  <link href="../images/apple-favicon.ico" rel="apple-touch-icon" sizes="41x41">
  <link href="../css/min.app.css" rel="stylesheet">
  <link href="../css/styles.css" rel="stylesheet">
	<script src="https://www.google.com/recaptcha/api.js?onload=recaptchaCallback" async="" defer=""></script>
 
	 
	<!-- echo '<script>var yaParams = {ip_adress: "'. $_SERVER['REMOTE_ADDR'] .'" };</script>'; -->
		

   <!-- Yandex.Metrika counter -->
   <!-- <script type="text/javascript">
      (function (d, w, c) {
         (w[c] = w[c] || []).push(function () {
            try {
               w.yaCounter37401445 = new Ya.Metrika({
                  id: 37401445,
                  clickmap: true,
                  trackLinks: true,
                  params: window.yaParams,
                  accurateTrackBounce: true,
                  webvisor: true,
                  trackHash: true
               });
            } catch (e) {}
         });

         var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () {
               n.parentNode.insertBefore(s, n);
            };
         s.type = "text/javascript";
         s.async = true;
         s.src = "https://mc.yandex.ru/metrika/watch.js";

         if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
         } else {
            f();
         }
      })(document, window, "yandex_metrika_callbacks");
   </script>
   <noscript>
      <div><img src="https://mc.yandex.ru/watch/37401445" style="position:absolute; left:-9999px;" alt="" /></div>
   </noscript> -->
   <!-- /Yandex.Metrika counter -->

</head>

<?php

require_once('../smarty/libs/Smarty.class.php');

$smarty = new Smarty;

$smarty->template_dir = 'templates';
$smarty->compile_dir = 'template_c';
$smarty->config_dir = 'configs';
$smarty->cache_dir = 'cache';


$smarty->display('../smarty/templates/header.tpl');?>


<section class="sec1 container">
  <div class="wrapTop row">
    <div class="text col-xl-6">
      <div>План эвакуации А3 на пленке</div>
      <p>План эвакуации А3 печатаем на фотолюминесцентной пленке.
            Размер 400х300 мм подходит для помещений с одним выходом и площадью,
            ориентировочно, не более 300 м. Макеты схем разрабатывает проектировщик,
            придерживаясь требований ГОСТ 12.2.143.2009 с изм. №1 от 2012 г.</p>
      <p>
      Разработка макета включена в стоимость. От Вас необходимо получить 
      планировку вашего помещения с фактической расстановкой знаков
      пожарной безопасности, список которых Вам пришлет наш менеджер по запросу.</p>
      <p>Изготовление макета выполняется на нашем собственном производстве с использованием 
        сертифицированной фотолюминесцентной пленки, 
        также строго соответствующей требованиям ГОСТ 12.2.143.2009 с изм. №1 от 2012 г.</p>
    </div>
    <div id="first" class="slider col-xl-6">
      <div class="slider__item">
        <img src="./assets/photoplan.png" alt="photoplan">
      </div>
      <div class="slider__item">
        <img src="./assets/photoplan.png" alt="photoplan">
      </div>
      <div class="slider__item">
        <img src="./assets/photoplan.png" alt="photoplan">
      </div>
    </div>
  </div>
  <div class="wrapBottom row">
    <div class="wrapBottom__title col-md-5 col-xl-5">План эвакуации на фотолюминесцентной пленке</div>
    <div class="wrapBottom__size col-md-2 col-xl-2">400х300 мм</div>
    <div class="wrapBottom__price col-md-2 col-xl-2">1400 руб.</div>
    <div id="callModal" class="wrapBottom__order col-md-3 col-xl-3 row"><div class="col-2"></div><button class="col-8">Заказать</button><div class="col-2"></div>
  </div>
  <div class="modalWrapper">
    <form action="mail-services.php" id="form" class="form" method="POST">
      <div class="form__title">Заказать печать фотолюминесцентных планов эвакуации</div>
      <input name="user_name" class="form__name" placeholder="Введите ваше имя" required>
      <input name="phone" id="phone" class="form__phone" placeholder="Введите ваш телефон" required>
      <input name="countPlans" type="number" min="1" class="form__countPlan" placeholder="Кол-во планов" required>
      <select name="sizePlans" class="form__sizePlan" required>
        <option value disabled selected>Формат планов</option>
        <option value="400x300">400x300</option>
        <option value="600x400">600x400</option>
        <option value="800x600">800x600</option>
      </select>
      <div class="form__check">
        <input type="checkbox" value="0" id="form__check" required>
        <label for="form__check">Согласие на обработку персональных данных</label>
      </div>
      <div class="g-recaptcha" data-sitekey="6LfD8fgUAAAAAP0SeZ9lmL72EBwx7wklnRzx77KW"></div>
      <button type="submit" name="form__btn" class="form__btn">ЗАКАЗАТЬ ПЛАН</button>
    </form>
  </div>
</section>

<section class="sec2">
  <div class="itemsWrapSec2">
    <div class="itemSec2">
      <div class="itemSec2__img"><img src="./assets/shipped.png" alt="shipped"></div>
      <div class="itemSec2__text">Доставка по всей России</div>
    </div>
    <div class="itemSec2">
      <div class="itemSec2__img"><img src="./assets/hour.png" alt="shipped"></div>
      <div class="itemSec2__text">Разработка от 1 часа</div>
    </div>
    <div class="itemSec2">
      <div class="itemSec2__img"><img src="./assets/tax.png" alt="shipped"></div>
      <div class="itemSec2__text">Работаем с НДС и без НДС</div>
    </div>
    <div class="itemSec2">
      <div class="itemSec2__img"><img src="./assets/document.png" alt="shipped"></div>
      <div class="itemSec2__text">Наличие лицензии МЧС</div>
    </div>
    <div class="itemSec2">
      <div class="itemSec2__img"><img src="./assets/shipped.png" alt="shipped"></div>
      <div class="itemSec2__text">Доставка по всей России</div>
    </div>
  </div>
</section>

<section class="sec3 container">
  <div class="row">
    <div class="wrapSlider col-xl-7">
      <div class="titleSlider">Наши акции</div>
      <div id="second" class="slider">
        <div class="slider__item">
          <img src="./assets/photoplan.png" alt="photoplan">
          <div class="imgAssignmentWrapper"></div>
          <p>До <span class="inText">01 июня 2020 года! </span>Стоимость фотолюминесцентного плана эвакуации 600х400 мм на ПВХ</p>
          <span class="outText">1990 руб.</span>
        </div>
        <div class="slider__item">
          <img src="./assets/photoplan.png" alt="photoplan">
          <div class="imgAssignmentWrapper"></div>
          <p>До <span class="inText">01 июня 2020 года! </span>Стоимость фотолюминесцентного плана эвакуации 600х400 мм в алюминиевой рамке</p>
          <span class="outText">2390 руб.</span>
        </div>
      </div>
    </div>
    <div class="wrapForm col-xl-5">
      <form action="mail-services2.php" id="form2" class="form2" method="POST">
        <div class="form2__title">Заказать печать фотолюминесцентных планов эвакуации</div>
        <input name="user_name" class="form2__name" placeholder="Введите ваше имя" required>
        <input name="phone" id="phone" class="form2__phone" placeholder="Введите ваш телефон" required>
        <input name="countPlans" type="number" min="1" class="form2__countPlan" placeholder="Кол-во планов" required>
        <select name="sizePlans" class="form2__sizePlan" required>
          <option value disabled selected>Формат планов</option>
          <option value="400x300">400x300</option>
          <option value="600x400">600x400</option>
          <option value="800x600">800x600</option>
        </select>
        <div class="form2__check">
          <input type="checkbox" value="0" id="form2__check" required>
          <label for="form2__check">Согласие на обработку персональных данных</label>
        </div>
        <div class="g-recaptcha" data-sitekey="6LfD8fgUAAAAAP0SeZ9lmL72EBwx7wklnRzx77KW"></div>
        <button type="submit" name="form2__btn" class="form2__btn">ЗАКАЗАТЬ ПЛАН</button>
      </form>
    </div>
  </div>
</section>

<section class="sec4 row">
  <div class="col-1"></div>
  <div class=" wrapTitle col-10">
    <h2>Рекомендуемые товары</h2>
  </div>
  <div class="col-1 disappeared"></div>
  <div class="col-1"></div>
  <div id="third" class="slider col-10">
    <div class="slider__item">
      <img src="./assets/photoplan.png" alt="take_it">
      <div class="imgAssignmentWrapper"></div>
      <p>План эвакуации</p>
    </div>
    <div class="slider__item">
      <img src="./assets/photoplan.png" alt="take_it">
      <div class="imgAssignmentWrapper"></div>
      <p>План эвакуации</p>
    </div>
    <div class="slider__item">
      <img src="./assets/photoplan.png" alt="take_it">
      <div class="imgAssignmentWrapper"></div>
      <p>План эвакуации</p>
    </div>
    <div class="slider__item">
      <img src="./assets/photoplan.png" alt="take_it">
      <div class="imgAssignmentWrapper"></div>
      <p>План эвакуации</p>
    </div>
    <div class="slider__item">
      <img src="./assets/photoplan.png" alt="take_it">
      <div class="imgAssignmentWrapper"></div>
      <p>План эвакуации</p>
    </div>
    <div class="slider__item">
      <img src="./assets/photoplan.png" alt="take_it">
      <div class="imgAssignmentWrapper"></div>
      <p>План эвакуации</p>
    </div>
    <div class="slider__item">
      <img src="./assets/photoplan.png" alt="take_it">
      <div class="imgAssignmentWrapper"></div>
      <p>План эвакуации</p>
    </div>
    <div class="slider__item">
      <img src="./assets/photoplan.png" alt="take_it">
      <div class="imgAssignmentWrapper"></div>
      <p>План эвакуации</p>
    </div>
  </div>
  <div class="col-1"></div>
</section>


<?php $smarty->display('../smarty/templates/footer.tpl'); ?>

	<script type="text/javascript" src="./jquery/jquery-3.5.0.js"></script>
	<script type="text/javascript" src="./jquery/jquery.maskedinput.js"></script>
  <!-- <script src="../js/app.min.js"></script> -->
	<script src="../build/js/main.js"></script>
	<script type="text/javascript" src="./slick/slick.min.js"></script>
	<script src="../services_page/script.js"></script>

  
</body>
</html>