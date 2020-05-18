<?php
/* Smarty version 3.1.34-dev-7, created on 2020-05-11 19:34:02
  from 'C:\OpenServer\domains\YarLand3\smarty\templates\footer.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5eb97e7a7739f6_91957303',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '7e2f3d1269c819fc32f133721bff91c9dfa13011' => 
    array (
      0 => 'C:\\OpenServer\\domains\\YarLand3\\smarty\\templates\\footer.tpl',
      1 => 1589214838,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5eb97e7a7739f6_91957303 (Smarty_Internal_Template $_smarty_tpl) {
?>
	<div id="site_footer">
			<div id="footer">
				<div class="row">
						<div class="col-4">
							<div id="site_logo_footer">
									<img src="../../images/logo2.png" id="logo_footer" alt="">
							</div>
							<div id="site_Text131">
									<span id="site_span_id160">Изготовление планов эвакуации</span>
							</div>
						</div>
						<div class="col-4">
							<div id="site_Image50">
									<a href="#hit"><img src="../../images/circled chevron up-96.png" id="Image50"
												alt=""></a>
							</div>
						</div>
						<div class="col-4">
							<div id="site_Text132">
									<span id="site_span_id161"><strong><a href="tel:84999901231"
													style="text-decoration: none; color: #FFFFFF;">8 (499) 99-0123-1</a></strong></span>
							</div>
							<div id="site_Text133">
									<span id="site_span_id162">работаем: пн-пт 9.30 - 19.30</span>
							</div>
							<div id="site_Text138" onclick="$('#modal_window2').modal('show');return false;">
									<span id="site_span_id163"><strong><u>ЗАКАЗАТЬ ЗВОНОК</u></strong></span>
							</div>
						</div>
				</div>
			</div>
	</div>
	<div id="modal_window" class="modal fade" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
						<div class="modal-body">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							<hr id="modal_line">
							<div id="site_mod_cont">
									<form name="mod_cont" method="post" id="mod_cont">
										<div class="row">
												<div class="col-1">
													<div id="site_mod1_title">
															<div id="mod1_title">
																<div class="row">
																		<div class="col-1">
																			<div id="site_Image49">
																					<img src="../../images/floor plan filled-100 (1).png"
																						id="Image49" alt="">
																			</div>
																		</div>
																		<div class="col-2">
																			<div id="site_Text135">
																					<span id="site_span_id164">Изготовление планов эвакуации</span>
																			</div>
																		</div>
																</div>
															</div>
													</div>
													<div id="site_Text134">
															<span id="site_span_id165">Введите данные, мы свяжемся с Вами <br>в ближайшее
																время!</span>
													</div>
													<input type="text" id="Editbox5" name="name_mod1" value="" spellcheck="false"
															placeholder="&#1042;&#1074;&#1077;&#1076;&#1080;&#1090;&#1077; &#1074;&#1072;&#1096;&#1077; &#1080;&#1084;&#1103;"
															class="phone" required="">
													<input type="text" id="Editbox3" name="phone_mod1" value="" spellcheck="false"
															placeholder="&#1042;&#1074;&#1077;&#1076;&#1080;&#1090;&#1077; &#1074;&#1072;&#1096; &#1090;&#1077;&#1083;&#1077;&#1092;&#1086;&#1085;"
															class="phone" required="">
													<input type="number" id="Editbox4" name="plans_mod1" value="" spellcheck="false"
															placeholder="&#1042;&#1074;&#1077;&#1076;&#1080;&#1090;&#1077; &#1082;&#1086;&#1083;&#1080;&#1095;&#1077;&#1089;&#1090;&#1074;&#1086; &#1087;&#1083;&#1072;&#1085;&#1086;&#1074;"
															class="phone" required="">
													<div id="politika_mod1">
															<div id="ch1">
																<input type="checkbox" id="Checkbox_mod1" name="Checkboxmod1" value="on">
																<label for="Checkbox_mod1">
																		<span class="polit_mod">Согласие на обработку персональных данных</span>
																</label>
															</div>
															<div class="g-recaptcha" id="mod1_captcha"></div>
													</div>
													<input type="button" id="Button7" onclick="sendAjaxRequesModal1();return false;"
															name="Button7" value="ЗАКАЗАТЬ">
												</div>
										</div>
									</form>
							</div>
						</div>
				</div>
			</div>
	</div>
	<div id="modal_window2" class="modal fade" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
						<div class="modal-body">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							<hr id="Line4">
							<div id="site_mod_cont2">
									<form name="mod_cont" method="post" id="mod_cont2">
										<div class="row">
												<div class="col-1">
													<div id="site_mod2_title">
															<div id="mod2_title">
																<div class="row">
																		<div class="col-1">
																			<div id="site_Image59">
																					<img src="../../images/floor plan filled-100 (1).png"
																						id="Image59" alt="">
																			</div>
																		</div>
																		<div class="col-2">
																			<div id="site_Text137">
																					<span id="site_span_id166">Изготовление планов эвакуации</span>
																			</div>
																		</div>
																</div>
															</div>
													</div>
													<div id="site_Text136">
															<span id="site_span_id167">Введите данные, мы свяжемся с Вами <br>в ближайшее
																время!</span>
													</div>
													<input type="text" id="Editbox6" name="name_mod2" value="" spellcheck="false"
															placeholder="&#1042;&#1074;&#1077;&#1076;&#1080;&#1090;&#1077; &#1074;&#1072;&#1096;&#1077; &#1080;&#1084;&#1103;"
															class="phone" required="">
													<input type="text" id="Editbox7" name="phone_mod3" value="" spellcheck="false"
															placeholder="&#1042;&#1074;&#1077;&#1076;&#1080;&#1090;&#1077; &#1074;&#1072;&#1096; &#1090;&#1077;&#1083;&#1077;&#1092;&#1086;&#1085;"
															class="phone" required="">
													<div id="Html22">
														 <div id="ch2">
																<input type="checkbox" id="Checkbox_mod2" name="Checkboxmod2" value="on">
																<label for="Checkbox_mod2">
																	 <span class="polit_mod2">Согласие на обработку персональных данных</span>
																</label>
														 </div>
														 <div class="g-recaptcha" id="mod2_captcha"></div>
													</div>
													<input type="button" id="Button8" onclick="sendAjaxRequesModal2();return false;"
															name="Button8" value="ЗАКАЗАТЬ">
												</div>
										</div>
										<div id="define" style="bottom: 0px; left: 0px; width: 5px; height: 5px;"></div>
								 </form>
							</div>
					 </div>
				</div>
		 </div>
	</div>
	<div id="toTop">
		 <div id="toTop_Container">
				<div id="site_Image60">
					 <a href="#hit"><img src="../../images/to_top.png" id="Image60" alt=""></a>
				</div>
		 </div>
	</div><?php }
}
