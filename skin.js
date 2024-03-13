// Garden Gnome Software - Skin
// Pano2VR 7.0.9/20024
// Filename: ???? ?? VR ?? - ??????.ggsk
// Generated 2024-03-13T10:56:12

function pano2vrSkin(player,base) {
	player.addVariable('vis_maincenter', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_exparkinglot', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_walk', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_garden', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_underground', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_skonremove', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobileOpen', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_header', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mapMax', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_rotate', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_link', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_fullscreen', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roomchoice', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_short', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_icon5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_skin_show', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_long', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilemap', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_foot', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_direction', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_dropdown', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_sound', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mapangle', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_onefloor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_secondfloor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_arrow', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__55=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -100%;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__55.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__55.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__55.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__55.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__55.ggCurrentLogicStatePosition == 0) {
					me.__55.style.left = 'calc(50% - (100% / 2))';
					me.__55.style.bottom='0%';
				}
				else {
					me.__55.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__55.style.bottom='-100%';
				}
			}
		}
		me.__55.logicBlock_position();
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me.__59=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -55%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__59.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__59.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__59.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__59.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__59.style.transition='left 0s, top 0s';
				if (me.__59.ggCurrentLogicStatePosition == 0) {
					me.__59.style.left='0px';
					me.__59.style.top='-52%';
				}
				else {
					me.__59.style.left='0px';
					me.__59.style.top='-55%';
				}
			}
		}
		me.__59.logicBlock_position();
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__59);
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 199px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 319px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.65;
				me._scrollarea_1.ggDragInertiaY *= 0.65;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elHorScrollBg = me._scrollarea_1__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 320px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._scrollarea_1__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 320px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._scrollarea_1.ggScrollPosX = 0;
		me._scrollarea_1.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if (e.offsetX < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__horScrollBg.getBoundingClientRect();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._scrollarea_1.ggScrollByXSmooth(30 * me._scrollarea_1.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 200px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 8%;';
		hs+='top : -260%;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._scrollarea_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._scrollarea_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._scrollarea_1.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._scrollarea_1.ggCurrentLogicStatePosition == 0) {
					me._scrollarea_1.style.right='0%';
					me._scrollarea_1.style.top='-203%';
				}
				else {
					me._scrollarea_1.style.right='8%';
					me._scrollarea_1.style.top='-260%';
				}
			}
		}
		me._scrollarea_1.logicBlock_position();
		me._scrollarea_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._scrollarea_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._scrollarea_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._scrollarea_1.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me._scrollarea_1.ggCurrentLogicStateSize == 0) {
					me._scrollarea_1.style.width='95%';
					me._scrollarea_1.style.height='200px';
					skin.updateSize(me._scrollarea_1);
				}
				else {
					me._scrollarea_1.style.width='50%';
					me._scrollarea_1.style.height='200px';
					skin.updateSize(me._scrollarea_1);
				}
			}
		}
		me._scrollarea_1.logicBlock_size();
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__horScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__horScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggHorScrollVisible = true;
				if(me._scrollarea_1.ggHorScrollVisible) {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 0;
					if (me._scrollarea_1.ggVertScrollVisible) {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 0;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width - me._scrollarea_1__horScrollBg.getBoundingClientRect().height;
					} else {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width;
					}
					me._scrollarea_1__horScrollBg.style.width = me._scrollarea_1.ggAvailableWidth + 'px';
					me._scrollarea_1.ggHPercentVisible = contentWidth != 0 ? me._scrollarea_1.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._scrollarea_1.ggHPercentVisible > 1.0) me._scrollarea_1.ggHPercentVisible = 1.0;
					me._scrollarea_1.ggScrollWidth = Math.round(me._scrollarea_1__horScrollBg.offsetWidth * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1__horScrollFg.style.width = me._scrollarea_1.ggScrollWidth + 'px';
					me._scrollarea_1.ggScrollPosX = me._scrollarea_1.ggScrollPosXPercent * me._scrollarea_1.ggAvailableWidth;
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
					if (me._scrollarea_1.ggHPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
						me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
					me._scrollarea_1.ggScrollPosX = 0;
					me._scrollarea_1.ggScrollPosXPercent = 0.0;
					me._scrollarea_1__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me.__56=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__56;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uacf5\uac04\uc120\ud0dd \uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		el=me.__57=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__57;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 180;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__57.ggUpdating == true) return;
			me.__57.ggUpdating = true;
			var el=me.__57;
			var curNumRows = 0;
			curNumRows = me.__57.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__57.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__57.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__57.getFilteredNodes(tourNodes, filter);
			me.__57.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__57.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__57.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__57.ggWidth) + 'px';
				parameter.width=me.__57.ggWidth + 'px';
				parameter.height=me.__57.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__57_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__57.ggNodeCount = me.__57.ggNumFilterPassed;
			me.__57.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__57.parentNode && me.__57.parentNode.classList.contains('ggskin_subelement') && me.__57.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__57.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "메인";
		el.ggId="\uac00\uad6c\uc788\uc74c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 180px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__57.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__57.ggCurrentLogicStateSize = newLogicStateSize;
				me.__57.style.transition='width 0s, height 0s';
				if (me.__57.ggCurrentLogicStateSize == 0) {
					me.__57.ggWidth=100;
					me.__57.ggHeight=150;
					me.__57.ggUpdate();
					skin.updateSize(me.__57);
				}
				else {
					me.__57.ggWidth=150;
					me.__57.ggHeight=180;
					me.__57.ggUpdate();
					skin.updateSize(me.__57);
				}
			}
		}
		me.__57.logicBlock_size();
		me.__57.ggCurrentLogicStateSize = -1;
		me.__57.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__57.childNodes.length; i++) {
				var child=me.__57.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__57.ggUpdatePosition=function (useTransition) {
			me.__57.ggUpdate();
		}
		me.__56.appendChild(me.__57);
		me._scrollarea_1__content.appendChild(me.__56);
		me.__55.appendChild(me._scrollarea_1);
		me.divSkin.appendChild(me.__55);
		el=me.__22=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 380px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : calc(50% - ((380px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__22.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__22.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__22.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__22.style.transition='right 0s, top 0s, transform 0s';
				if (me.__22.ggCurrentLogicStatePosition == 0) {
					me.__22.style.right='2px';
					me.__22.style.top = 'calc(50% - (380px / 2) + (0px / 2) + 5px)';
				}
				else {
					me.__22.style.right='15px';
					me.__22.style.top='calc(50% - ((380px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__22.logicBlock_position();
		me.__22.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__22.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__22.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__22.style.transition='right 0s, top 0s, transform 0s';
				if (me.__22.ggCurrentLogicStateScaling == 0) {
					me.__22.ggParameter.sx = 0.75;
					me.__22.ggParameter.sy = 0.7;
					me.__22.style.transform=parameterToTransform(me.__22.ggParameter);
					skin.updateSize(me.__22);
				}
				else {
					me.__22.ggParameter.sx = 1;
					me.__22.ggParameter.sy = 1;
					me.__22.style.transform=parameterToTransform(me.__22.ggParameter);
					skin.updateSize(me.__22);
				}
			}
		}
		me.__22.logicBlock_scaling();
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_2.style.transition='width 500ms ease-in 0ms, height 500ms ease-in 0ms, top 500ms ease-in 0ms';
				if (me._rectangle_2.ggCurrentLogicStateSize == 0) {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='0%';
					me._rectangle_2.style.top = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
				else {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='100%';
					me._rectangle_2.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
			}
		}
		me._rectangle_2.logicBlock_size();
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__25=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58\ubc15\uc2a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me.__52=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uacf5\uac04\uc120\ud0dd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__52.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__52.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__52.style.transition='';
				if (me.__52.ggCurrentLogicStateVisible == 0) {
					me.__52.style.visibility="hidden";
					me.__52.ggVisible=false;
				}
				else if (me.__52.ggCurrentLogicStateVisible == 1) {
					me.__52.style.visibility="hidden";
					me.__52.ggVisible=false;
				}
				else {
					me.__52.style.visibility=(Number(me.__52.style.opacity)>0||!me.__52.style.opacity)?'inherit':'hidden';
					me.__52.ggVisible=true;
				}
			}
		}
		me.__52.logicBlock_visible();
		me.__52.onclick=function (e) {
			player.setVariableValue('vis_roomchoice', !player.getVariableValue('vis_roomchoice'));
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				me.__9.style.transition='none';
				me.__9.style.visibility='hidden';
				me.__9.ggVisible=false;
			}
		}
		me.__52.onmouseover=function (e) {
			me.elementMouseOver['_52']=true;
		}
		me.__52.onmousemove=function (e) {
			me.__53.style.transition='none';
			me.__53.style.visibility=(Number(me.__53.style.opacity)>0||!me.__53.style.opacity)?'inherit':'hidden';
			me.__53.ggVisible=true;
		}
		me.__52.onmouseout=function (e) {
			me.elementMouseOver['_52']=false;
		}
		me.__52.ggCurrentLogicStateVisible = -1;
		me.__52.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_52']) {
				me.__53.style.transition='none';
				me.__53.style.visibility=(Number(me.__53.style.opacity)>0||!me.__53.style.opacity)?'inherit':'hidden';
				me.__53.ggVisible=true;
			}
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me.__210=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__210.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__210.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__210.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__210.style.transition='background-color 0s';
				if (me.__210.ggCurrentLogicStateVisible == 0) {
					me.__210.style.visibility=(Number(me.__210.style.opacity)>0||!me.__210.style.opacity)?'inherit':'hidden';
					me.__210.ggVisible=true;
				}
				else {
					me.__210.style.visibility="hidden";
					me.__210.ggVisible=false;
				}
			}
		}
		me.__210.logicBlock_visible();
		me.__210.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__210.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__210.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__210.style.transition='background-color 0s';
				if (me.__210.ggCurrentLogicStateBackgroundColor == 0) {
					me.__210.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__210.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__210.logicBlock_backgroundcolor();
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__52.appendChild(me.__210);
		el=me.__54=document.createElement('div');
		els=me.__54__img=document.createElement('img');
		els.className='ggskin ggskin__54';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uacf5\uac04\uc120\ud0dd\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		me.__52.appendChild(me.__54);
		el=me.__53=document.createElement('div');
		els=me.__53__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uc120\ud0dd\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__53.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc120\ud0dd", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__53.ggUpdateText();
		el.appendChild(els);
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__53.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__53.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__53.style.transition='';
				if (me.__53.ggCurrentLogicStateVisible == 0) {
					me.__53.style.visibility=(Number(me.__53.style.opacity)>0||!me.__53.style.opacity)?'inherit':'hidden';
					me.__53.ggVisible=true;
				}
				else {
					me.__53.style.visibility="hidden";
					me.__53.ggVisible=false;
				}
			}
		}
		me.__53.logicBlock_visible();
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		me.__52.appendChild(me.__53);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -257px;';
		hs+='position : absolute;';
		hs+='top : 279px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggActivate=function () {
			me.__53.style.transition='none';
			me.__53.style.visibility='hidden';
			me.__53.ggVisible=false;
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.__52.appendChild(me._timer_1);
		me.__25.appendChild(me.__52);
		el=me.__48=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__48.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__48.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__48.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__48.style.transition='';
				if (me.__48.ggCurrentLogicStateVisible == 0) {
					me.__48.style.visibility="hidden";
					me.__48.ggVisible=false;
				}
				else if (me.__48.ggCurrentLogicStateVisible == 1) {
					me.__48.style.visibility="hidden";
					me.__48.ggVisible=false;
				}
				else {
					me.__48.style.visibility=(Number(me.__48.style.opacity)>0||!me.__48.style.opacity)?'inherit':'hidden';
					me.__48.ggVisible=true;
				}
			}
		}
		me.__48.logicBlock_visible();
		me.__48.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 640))
				)
			) {
				me.__12.ggVisible = !me.__12.ggVisible;
				var flag=me.__12.ggVisible;
				me.__12.style.transition='none';
				me.__12.style.visibility=((flag)&&(Number(me.__12.style.opacity)>0||!me.__12.style.opacity))?'inherit':'hidden';
			}
			me.__51.ggVisible = !me.__51.ggVisible;
			var flag=me.__51.ggVisible;
			me.__51.style.transition='none';
			me.__51.style.visibility=((flag)&&(Number(me.__51.style.opacity)>0||!me.__51.style.opacity))?'inherit':'hidden';
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				player.setVariableValue('vis_mobilemap', false);
			}
			me.__6.style.transition='none';
			me.__6.style.visibility='hidden';
			me.__6.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				me.__9.ggVisible = !me.__9.ggVisible;
				var flag=me.__9.ggVisible;
				me.__9.style.transition='none';
				me.__9.style.visibility=((flag)&&(Number(me.__9.style.opacity)>0||!me.__9.style.opacity))?'inherit':'hidden';
			}
			player.setVariableValue('vis_roomchoice', false);
		}
		me.__48.onmouseover=function (e) {
			me.elementMouseOver['_48']=true;
		}
		me.__48.onmousemove=function (e) {
			me.__49.style.transition='none';
			me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
			me.__49.ggVisible=true;
		}
		me.__48.onmouseout=function (e) {
			me.elementMouseOver['_48']=false;
		}
		me.__48.ggCurrentLogicStateVisible = -1;
		me.__48.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_48']) {
				me.__49.style.transition='none';
				me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
				me.__49.ggVisible=true;
			}
		}
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__51);
		el=me.__50=document.createElement('div');
		els=me.__50__img=document.createElement('img');
		els.className='ggskin ggskin__50';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAABaUlEQVR4nO3dwUrEMBRA0VdxreL/f6MM/kBcuFJ0IaZ6Kefsmxm4pClNp3OstYaOu//+AnwkSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBJzv2ug4zhsPc7MWuv4zfFmSIwgMYLECBKzbVH/xq8WuB/66qLi7M/ffiFjhsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIzNn7IX/pL/deTmOGxAgSI0iMIDGCxAgSI0iMIDGCxAgSc6VbJ5f4fYoZEiNIjCAxV1pDPlszcztx/Kc54Zb/lYO8zszziePfZuZx96BOWTGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMID'+
			'GCxAgSI0iMIDGCxFz5MaCHmXk5efztjl1/3+1l/O+8jP9iBIkRJEaQmG2LOnuYITGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgS8wZ7mBnYotOjNgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__50);
		el=me.__49=document.createElement('div');
		els=me.__49__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__49.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__49.ggUpdateText();
		el.appendChild(els);
		me.__49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__49);
		me.__25.appendChild(me.__48);
		el=me.__47=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\ud3c9\uba74\ub3c4\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			return (me.__47.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__47.ggTimestamp) / me.__47.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__47.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__47.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__47.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__47.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__47.style.transition='';
				if (me.__47.ggCurrentLogicStateVisible == 0) {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
				else {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
			}
		}
		me.__47.logicBlock_visible();
		me.__47.ggActivate=function () {
			me.__49.style.transition='none';
			me.__49.style.visibility='hidden';
			me.__49.ggVisible=false;
		}
		me.__47.ggCurrentLogicStateVisible = -1;
		me.__47.ggUpdateConditionTimer=function () {
			me.__47.logicBlock_visible();
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		me.__25.appendChild(me.__47);
		el=me.__43=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc2a4\ud31f\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 113px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__43.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__43.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__43.style.transition='';
				if (me.__43.ggCurrentLogicStateVisible == 0) {
					me.__43.style.visibility="hidden";
					me.__43.ggVisible=false;
				}
				else if (me.__43.ggCurrentLogicStateVisible == 1) {
					me.__43.style.visibility="hidden";
					me.__43.ggVisible=false;
				}
				else {
					me.__43.style.visibility=(Number(me.__43.style.opacity)>0||!me.__43.style.opacity)?'inherit':'hidden';
					me.__43.ggVisible=true;
				}
			}
		}
		me.__43.logicBlock_visible();
		me.__43.onclick=function (e) {
			me.__16.style.transition='none';
			me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
			me.__16.ggVisible=true;
			me.__23.style.transition='none';
			me.__23.style.visibility='hidden';
			me.__23.ggVisible=false;
			me.__.style.transition='none';
			me.__.style.visibility='hidden';
			me.__.ggVisible=false;
			if (
				(
					((player.getViewerSize().width > 460))
				)
			||
				(
					((player.getIsMobile() == false))
				)
			) {
				me.__12.style.transition='none';
				me.__12.style.visibility='hidden';
				me.__12.ggVisible=false;
			}
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.__55.style.transition='none';
			me.__55.style.visibility='hidden';
			me.__55.ggVisible=false;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility='hidden';
			me._rectangle_2.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__9.style.transition='none';
				me.__9.style.visibility='hidden';
				me.__9.ggVisible=false;
			}
		}
		me.__43.onmouseover=function (e) {
			me.elementMouseOver['_43']=true;
		}
		me.__43.onmousemove=function (e) {
			me.__44.style.transition='none';
			me.__44.style.visibility=(Number(me.__44.style.opacity)>0||!me.__44.style.opacity)?'inherit':'hidden';
			me.__44.ggVisible=true;
		}
		me.__43.onmouseout=function (e) {
			me.elementMouseOver['_43']=false;
		}
		me.__43.ggCurrentLogicStateVisible = -1;
		me.__43.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_43']) {
				me.__44.style.transition='none';
				me.__44.style.visibility=(Number(me.__44.style.opacity)>0||!me.__44.style.opacity)?'inherit':'hidden';
				me.__44.ggVisible=true;
			}
		}
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__46=document.createElement('div');
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__46);
		el=me.__45=document.createElement('div');
		els=me.__45__img=document.createElement('img');
		els.className='ggskin ggskin__45';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__45);
		el=me.__44=document.createElement('div');
		els=me.__44__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__44.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\uc81c\uac70", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__44.ggUpdateText();
		el.appendChild(els);
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__44);
		me.__25.appendChild(me.__43);
		el=me.__42=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__42.ggIsActive=function() {
			return (me.__42.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__42.ggTimestamp) / me.__42.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__42.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__42.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__42.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__42.style.transition='';
				if (me.__42.ggCurrentLogicStateVisible == 0) {
					me.__42.style.visibility=(Number(me.__42.style.opacity)>0||!me.__42.style.opacity)?'inherit':'hidden';
					me.__42.ggVisible=true;
				}
				else {
					me.__42.style.visibility=(Number(me.__42.style.opacity)>0||!me.__42.style.opacity)?'inherit':'hidden';
					me.__42.ggVisible=true;
				}
			}
		}
		me.__42.logicBlock_visible();
		me.__42.ggActivate=function () {
			me.__44.style.transition='none';
			me.__44.style.visibility='hidden';
			me.__44.ggVisible=false;
		}
		me.__42.ggCurrentLogicStateVisible = -1;
		me.__42.ggUpdateConditionTimer=function () {
			me.__42.logicBlock_visible();
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me.__25.appendChild(me.__42);
		el=me.__38=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 219px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__38.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__38.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__38.style.transition='';
				if (me.__38.ggCurrentLogicStateVisible == 0) {
					me.__38.style.visibility="hidden";
					me.__38.ggVisible=false;
				}
				else if (me.__38.ggCurrentLogicStateVisible == 1) {
					me.__38.style.visibility=(Number(me.__38.style.opacity)>0||!me.__38.style.opacity)?'inherit':'hidden';
					me.__38.ggVisible=true;
				}
				else {
					me.__38.style.visibility=(Number(me.__38.style.opacity)>0||!me.__38.style.opacity)?'inherit':'hidden';
					me.__38.ggVisible=true;
				}
			}
		}
		me.__38.logicBlock_visible();
		me.__38.onclick=function (e) {
			player.toggleAutorotate();
			me.__41.ggVisible = !me.__41.ggVisible;
			var flag=me.__41.ggVisible;
			me.__41.style.transition='none';
			me.__41.style.visibility=((flag)&&(Number(me.__41.style.opacity)>0||!me.__41.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_icon5', true);
		}
		me.__38.onmouseover=function (e) {
			me.elementMouseOver['_38']=true;
		}
		me.__38.onmousemove=function (e) {
			me.__39.style.transition='none';
			me.__39.style.visibility=(Number(me.__39.style.opacity)>0||!me.__39.style.opacity)?'inherit':'hidden';
			me.__39.ggVisible=true;
		}
		me.__38.onmouseout=function (e) {
			me.elementMouseOver['_38']=false;
		}
		me.__38.ggCurrentLogicStateVisible = -1;
		me.__38.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_38']) {
				me.__39.style.transition='none';
				me.__39.style.visibility=(Number(me.__39.style.opacity)>0||!me.__39.style.opacity)?'inherit':'hidden';
				me.__39.ggVisible=true;
			}
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me.__41=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		me.__38.appendChild(me.__41);
		el=me.__40=document.createElement('div');
		els=me.__40__img=document.createElement('img');
		els.className='ggskin ggskin__40';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		me.__38.appendChild(me.__40);
		el=me.__39=document.createElement('div');
		els=me.__39__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc790\ub3d9\ud68c\uc804\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__39.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__39.ggUpdateText();
		el.appendChild(els);
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		me.__38.appendChild(me.__39);
		me.__25.appendChild(me.__38);
		el=me.__37=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc790\ub3d9\ud68c\uc804\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
			return (me.__37.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__37.ggTimestamp) / me.__37.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__37.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__37.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__37.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__37.style.transition='';
				if (me.__37.ggCurrentLogicStateVisible == 0) {
					me.__37.style.visibility=(Number(me.__37.style.opacity)>0||!me.__37.style.opacity)?'inherit':'hidden';
					me.__37.ggVisible=true;
				}
				else {
					me.__37.style.visibility=(Number(me.__37.style.opacity)>0||!me.__37.style.opacity)?'inherit':'hidden';
					me.__37.ggVisible=true;
				}
			}
		}
		me.__37.logicBlock_visible();
		me.__37.ggActivate=function () {
			me.__39.style.transition='none';
			me.__39.style.visibility='hidden';
			me.__39.ggVisible=false;
		}
		me.__37.ggCurrentLogicStateVisible = -1;
		me.__37.ggUpdateConditionTimer=function () {
			me.__37.logicBlock_visible();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		me.__25.appendChild(me.__37);
		el=me.__32=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 324px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__32.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__32.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__32.style.transition='';
				if (me.__32.ggCurrentLogicStateVisible == 0) {
					me.__32.style.visibility="hidden";
					me.__32.ggVisible=false;
				}
				else if (me.__32.ggCurrentLogicStateVisible == 1) {
					me.__32.style.visibility="hidden";
					me.__32.ggVisible=false;
				}
				else {
					me.__32.style.visibility=(Number(me.__32.style.opacity)>0||!me.__32.style.opacity)?'inherit':'hidden';
					me.__32.ggVisible=true;
				}
			}
		}
		me.__32.logicBlock_visible();
		me.__32.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me.__36.ggVisible = !me.__36.ggVisible;
			var flag=me.__36.ggVisible;
			me.__36.style.transition='none';
			me.__36.style.visibility=((flag)&&(Number(me.__36.style.opacity)>0||!me.__36.style.opacity))?'inherit':'hidden';
			me.__34.style.transition='none';
			me.__34.style.visibility=(Number(me.__34.style.opacity)>0||!me.__34.style.opacity)?'inherit':'hidden';
			me.__34.ggVisible=true;
		}
		me.__32.onmouseover=function (e) {
			me.elementMouseOver['_32']=true;
		}
		me.__32.onmousemove=function (e) {
			me.__35.style.transition='none';
			me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
			me.__35.ggVisible=true;
		}
		me.__32.onmouseout=function (e) {
			me.elementMouseOver['_32']=false;
		}
		me.__32.ggCurrentLogicStateVisible = -1;
		me.__32.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_32']) {
				me.__35.style.transition='none';
				me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
				me.__35.ggVisible=true;
			}
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		me.__32.appendChild(me.__36);
		el=me.__35=document.createElement('div');
		els=me.__35__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__35.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__35.ggUpdateText();
		el.appendChild(els);
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		me.__32.appendChild(me.__35);
		el=me.__34=document.createElement('div');
		els=me.__34__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\uc0ac\uc644\ub8cc\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__34.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__34.ggUpdateText();
		el.appendChild(els);
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me.__32.appendChild(me.__34);
		el=me.__33=document.createElement('div');
		els=me.__33__img=document.createElement('img');
		els.className='ggskin ggskin__33';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAABX0lEQVR4nO3d0Y4BMRiA0al4/1fuXgubnTLDt3LONSL58itFZ8w5Nzoun34C3BIkRpAYQWIEiREkRpAYQWIEiREk5rpy4zGGfZZtG2duN5mQGEFiBIkRJGZpUf/FOOAxqt7+JsaExAgSI0iMIDGCxAgSI0iMIDGCxBzxSX2vb9m6n2M8tzkx5/zzjiYkRpAYQWIEiXnnov7Iv9y63/Od+rO/PzAhMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBJzxP/Uv+VQmQQTEiNIjCAxgsSsLuqvHBZj8d9hKc'+
			'grV5Z5dCyeCyPf85IVI0iMIDGCxAgSI0iMIDGCxHz0mFiXcr1nQmIEiREkRpCYU68NzjoTEiNIjCAxgsQIEiNIjCAxgsT8AMhtHc4x+ExaAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.onclick=function (e) {
			me.__35.style.transition='none';
			me.__35.style.visibility='hidden';
			me.__35.ggVisible=false;
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me.__32.appendChild(me.__33);
		me.__25.appendChild(me.__32);
		el=me.__31=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -234px;';
		hs+='position : absolute;';
		hs+='top : 157px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			return (me.__31.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__31.ggTimestamp) / me.__31.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__31.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__31.style.transition='';
				if (me.__31.ggCurrentLogicStateVisible == 0) {
					me.__31.style.visibility=(Number(me.__31.style.opacity)>0||!me.__31.style.opacity)?'inherit':'hidden';
					me.__31.ggVisible=true;
				}
				else {
					me.__31.style.visibility=(Number(me.__31.style.opacity)>0||!me.__31.style.opacity)?'inherit':'hidden';
					me.__31.ggVisible=true;
				}
			}
		}
		me.__31.logicBlock_visible();
		me.__31.ggActivate=function () {
			me.__34.style.transition='none';
			me.__34.style.visibility='hidden';
			me.__34.ggVisible=false;
			me.__35.style.transition='none';
			me.__35.style.visibility='hidden';
			me.__35.ggVisible=false;
		}
		me.__31.ggCurrentLogicStateVisible = -1;
		me.__31.ggUpdateConditionTimer=function () {
			me.__31.logicBlock_visible();
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me.__25.appendChild(me.__31);
		el=me.__27=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc804\uccb4\ud654\uba74";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 271px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__27.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__27.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__27.style.transition='';
				if (me.__27.ggCurrentLogicStateVisible == 0) {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
				else if (me.__27.ggCurrentLogicStateVisible == 1) {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
				else {
					me.__27.style.visibility=(Number(me.__27.style.opacity)>0||!me.__27.style.opacity)?'inherit':'hidden';
					me.__27.ggVisible=true;
				}
			}
		}
		me.__27.logicBlock_visible();
		me.__27.onclick=function (e) {
			player.toggleFullscreen();
			me.__30.ggVisible = !me.__30.ggVisible;
			var flag=me.__30.ggVisible;
			me.__30.style.transition='none';
			me.__30.style.visibility=((flag)&&(Number(me.__30.style.opacity)>0||!me.__30.style.opacity))?'inherit':'hidden';
		}
		me.__27.onmouseover=function (e) {
			me.elementMouseOver['_27']=true;
		}
		me.__27.onmousemove=function (e) {
			me.__28.style.transition='none';
			me.__28.style.visibility=(Number(me.__28.style.opacity)>0||!me.__28.style.opacity)?'inherit':'hidden';
			me.__28.ggVisible=true;
		}
		me.__27.onmouseout=function (e) {
			me.elementMouseOver['_27']=false;
		}
		me.__27.ggCurrentLogicStateVisible = -1;
		me.__27.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_27']) {
				me.__28.style.transition='none';
				me.__28.style.visibility=(Number(me.__28.style.opacity)>0||!me.__28.style.opacity)?'inherit':'hidden';
				me.__28.ggVisible=true;
			}
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me.__30=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__30.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__30.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__30.style.transition='';
				if (me.__30.ggCurrentLogicStateVisible == 0) {
					me.__30.style.visibility="hidden";
					me.__30.ggVisible=false;
				}
				else {
					me.__30.style.visibility="hidden";
					me.__30.ggVisible=false;
				}
			}
		}
		me.__30.logicBlock_visible();
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		me.__27.appendChild(me.__30);
		el=me.__29=document.createElement('div');
		els=me.__29__img=document.createElement('img');
		els.className='ggskin ggskin__29';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAD0UlEQVR4nO2c207VQBSGv228NxAwHjAQI2o8QDwlRG+88M4n4BF8Ax/MCzzENyBR4yFEAU9BEIm+Qb0YagBn9t6ddqZ/m/UlvdmdWdOuj9J275k1KIoCQ4djbR+AcRgTIoYJEcOEiGFCxDAhYpgQMUyIGCZEDBMihgkRw4SoURRF5Q0oEm8Pc50/8CTheRRAUSW3doWIYULEMCFimBA1Et3UPwCnWzqlXCwAP2n4pp7yKWsNOJszQxkZWwZCQgrgI3AuX56yMEyG9/O2hOwFPl8HZnNlKzGjZCz69rUl5AbwK7BvE5jLkrJ0jCMD3/62hLB/UKGD/gycT5qydIwrA1+bNoUAXAN2Am2+AhfS5CwZo2QsHGkvJw'+
			'TgCrAdaPcduNhszpJRVQa+tgpCAC4DW4G2W/v7lYmRga+9ihCAS7grwtf+B+5KUiRWBr4+SkIA5nH3Dl+fHeBqXM6SUUcGvn5qQsA9XX0ZcpKL4a5ZqSsDX19FIeDeQzYDfXdx7zFt0oQMfP1VhYB7Y98I9N8Dbo4Zp2makoEvhrIQcN9tfQrE+A3crhCrCZqUgS+OuhBw3wKvBeL8AZYqxoulaRn4YnVBCMAZ3O8mISl3I2JWIYUMfPG6IgTgFPA+EO9FZMxxeRoYt44MfDGr5PZ45KCPaxzwQbaB+8BLDr+PrAHLDY0RYhkn/eDT3S7wAHhTI2693EReIU0zDbzG/UV9A2ZSDOJhElilmSsjSI5/WSmYAp7hvm7JySSwAlxPNUCV3A5iEjwYDBIcdn+pkmObBiSGCRHDhIhhQsQwIWKYEDFMiBgmRAwTIoYJEcOE'+
			'iGFCxDAhYpgQMUyIGCZEDBMihgkRw4SIYULEMCFimBAxTIgYSkIWcBPWJjKPO4+b5zuVeVw/IjMXD85EXyWflBnc1NUCeIWb0lqXiaNbjqmk654tFt+ygBxSpvl/5v1b4GTNuJ1ejjBsjcZKnayMwfPAuO9wyyRi6ayQKvVDUnAPtzDIN36dAmydFNK2jJIlwlJiC7B1ToiKjJI7uMWmvuOJKcDWKSFqMkpu0VwBts4IUZVR0lQBtk4IUZdRskj9AmzyQlItP05F3QJs0kK6JqOkTgE2WSFdlVESW4BNUkjXZZTEFGCTE9IXGSVVC7BJCembjJIqBdhkhPRVRskc4xVgkxHSZxkls4wuwCYjpO8ySkYVYJMV0kcZJcMKsEkK6bOMkmEF2OSE1N0epc3lP05kOJdKQpRmnRhoTQMyMCFymBAxoirKGemwK0QMEyKGCR'+
			'HDhIhhQsQwIWKYEDFMiBgmRAwTIsZfnQGwNRLcyH4AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc804\uccb4\ud654\uba74";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		me.__27.appendChild(me.__29);
		el=me.__28=document.createElement('div');
		els=me.__28__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\uccb4\ud654\uba74\ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__28.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__28.ggUpdateText();
		el.appendChild(els);
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		me.__27.appendChild(me.__28);
		me.__25.appendChild(me.__27);
		el=me.__26=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc804\uccb4\ud654\uba74\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -502px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			return (me.__26.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__26.ggTimestamp) / me.__26.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__26.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__26.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__26.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__26.style.transition='';
				if (me.__26.ggCurrentLogicStateVisible == 0) {
					me.__26.style.visibility=(Number(me.__26.style.opacity)>0||!me.__26.style.opacity)?'inherit':'hidden';
					me.__26.ggVisible=true;
				}
				else {
					me.__26.style.visibility=(Number(me.__26.style.opacity)>0||!me.__26.style.opacity)?'inherit':'hidden';
					me.__26.ggVisible=true;
				}
			}
		}
		me.__26.logicBlock_visible();
		me.__26.ggActivate=function () {
			me.__28.style.transition='none';
			me.__28.style.visibility='hidden';
			me.__28.ggVisible=false;
		}
		me.__26.ggCurrentLogicStateVisible = -1;
		me.__26.ggUpdateConditionTimer=function () {
			me.__26.logicBlock_visible();
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me.__25.appendChild(me.__26);
		me._rectangle_2.appendChild(me.__25);
		me.__22.appendChild(me._rectangle_2);
		el=me.__23=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 166px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58up";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74.4186%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((74.4186% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._up.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._up.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._up.style.transition='';
				if (me._up.ggCurrentLogicStateVisible == 0) {
					me._up.style.visibility="hidden";
					me._up.ggVisible=false;
				}
				else {
					me._up.style.visibility=(Number(me._up.style.opacity)>0||!me._up.style.opacity)?'inherit':'hidden';
					me._up.ggVisible=true;
				}
			}
		}
		me._up.logicBlock_visible();
		me._up.onclick=function (e) {
			player.setVariableValue('vis_short', true);
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me.__23.appendChild(me._up);
		el=me.__24=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c\ub2e4\uc6b4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_24'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__24.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__24.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__24.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__24.ggCurrentLogicStatePosition == 0) {
					me.__24.style.left='-10px';
					me.__24.style.top = 'calc(50% - (43px / 2))';
				}
				else if (me.__24.ggCurrentLogicStatePosition == 1) {
					me.__24.style.left='20px';
					me.__24.style.top = 'calc(50% - (43px / 2))';
				}
				else {
					me.__24.style.left='0px';
					me.__24.style.top='calc(50% - ((43px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__24.logicBlock_position();
		me.__24.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_long') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__24.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__24.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__24.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__24.ggCurrentLogicStateVisible == 0) {
					me.__24.style.visibility=(Number(me.__24.style.opacity)>0||!me.__24.style.opacity)?'inherit':'hidden';
					me.__24.ggVisible=true;
				}
				else if (me.__24.ggCurrentLogicStateVisible == 1) {
					me.__24.style.visibility="hidden";
					me.__24.ggVisible=false;
				}
				else {
					me.__24.style.visibility="hidden";
					me.__24.ggVisible=false;
				}
			}
		}
		me.__24.logicBlock_visible();
		me.__24.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_long') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__24.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__24.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__24.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__24.ggCurrentLogicStateAlpha == 0) {
					me.__24.style.visibility=me.__24.ggVisible?'inherit':'hidden';
					me.__24.style.opacity=1;
				}
				else if (me.__24.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me.__24.style.opacity == 0.0) { me.__24.style.visibility="hidden"; } }, 505);
					me.__24.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me.__24.style.opacity == 0.0) { me.__24.style.visibility="hidden"; } }, 505);
					me.__24.style.opacity=0;
				}
			}
		}
		me.__24.logicBlock_alpha();
		me.__24.onmouseover=function (e) {
			me.elementMouseOver['_24']=true;
			me.__24.logicBlock_position();
		}
		me.__24.onmouseout=function (e) {
			me.elementMouseOver['_24']=false;
			me.__24.logicBlock_position();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_3.style.transition='';
				if (me._rectangle_3.ggCurrentLogicStateVisible == 0) {
					me._rectangle_3.style.visibility=(Number(me._rectangle_3.style.opacity)>0||!me._rectangle_3.style.opacity)?'inherit':'hidden';
					me._rectangle_3.ggVisible=true;
				}
				else {
					me._rectangle_3.style.visibility="hidden";
					me._rectangle_3.ggVisible=false;
				}
			}
		}
		me._rectangle_3.logicBlock_visible();
		me._rectangle_3.onclick=function (e) {
			player.setVariableValue('vis_long', true);
			player.setVariableValue('vis_short', false);
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._dowm=document.createElement('div');
		els=me._dowm__img=document.createElement('img');
		els.className='ggskin ggskin_dowm';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWUlEQVR4nO2bW28VVRiGn0pL7QFN/AEa7/gbJt61HGyLXngi4oUxIYqiBRFKoAkXApZSEk2gHEREKDQx/gb/gfHSw6XxQA8Uosj24p1JLM43h2+vmenFem52Zs9a36z97vWdVnd7Op0Okf/zWNsL2KhEYQyiMAZRGIMojEEUxiAKYxCFMYjCGERhDKIwBlEYgyiMQRTGoDfrzWefebrpdfQDzwPfAz81+eAff/4l8/2NsGOGgEngW+AU8ES7yxGZO6ZBHgc+BD5OrseS193AShsLSml7xxwG3ntkHWPANbSTWqMtYXqAaeADYDjj/ijwtXGvEdoQZhg4iuJKX864EeArWto5TQuzCdiH4kqZ+DYKXKWFndOkMA'+
			'PAR8AxFHTLshO4SMPZqqmsNIR2yRHn/AkUl94AlkMtKo+mdswB4P0ubYwDV2jIrZoQ5hiwnzBBdAdwPZCtXOoUZgA4geJKlZhSxAgNiFOXMAMopuxDmSg0oyiV1+ZWdQizGXgXlfn9NdhP2QZcArbUYTx0VhpC1exUYLsW40AHeBNYCmk4pDB9KPtMBrRZhgm083cTsPEM6UpTKKbklfl5/AnMAquOuWOoQg4WkEMI04cawkn8C1tCaf0d4GXgocPGdtR4DjrXsI5uhRlG6XgSv1veR03lueT6G2CX01awVN6NMJvQN3wQvyh3UfE3C/z9n/dvI/e457C5DfiSLlO5V5hBlI6n8afke4mNebJdZxF4FV9vtIMuG0/PN512yYe8D0U75SBwtmDcLdQ8zlO9XplIXvfgENezYw4hF/KyjLrsIlFSFlCd4nGrCeAyDreq'+
			'KsxRVOp7/XcFud/pivNuAK8B/zieuRPHSWBZYbagD3QYf51yN5l/xjl/AXgRVbpVSc+QS4tTRph+VLjtLzk+izUUaOeAv5w2QNlqHHjgmDtChb8+FH3QzUiQKfzZZw21CufwucKjLAIv4auQtwNfUCKQ5wkziALtdMG4PFZRBvuc9XVKt9xGvZEnlb8AXACezBtkpetelE67OY5cobuYUkSayi9SPRnsQgXqHuBO1gBLmFngdVSzeFhGvU9doqQsIHGuIrevwhjwFPBc1k1LmB/wN2NLrO996uYmqpxvUN3lf7duWIbOAnsrPgTUEB5B2SdkTCniFtUbz/PA29bNPIXn0BFl2dS4hoq/uQpzQpI2nvdLjJ1HMfRXa0DR1juTGChKs2mdch7fWUooFoFXyM9W19AX+FueoTJN5Mnk9RPj/irKPjMlbDVBmq0usL67fo'+
			'jOat6ixBFo2WB1kuzUfQfFlJmSdpoibTzXkusOaib3UvJcuMqxw2mk+qfJ9TJwnPpTspebSJDr6ODqAPBH2clVz2Nm0C47hdznM9qNKUUsoPbhO3ICbRY9Wf8sWvCrzV5gK6p1QvQ+rWL9ajNTmEj7P07csERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiDKIxBFMYgCmPwL1w8xZQZ/Qx/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58dowm";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 74.4186%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((74.4186% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 92%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._dowm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dowm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dowm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dowm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dowm.style.transition='';
				if (me._dowm.ggCurrentLogicStateVisible == 0) {
					me._dowm.style.visibility=(Number(me._dowm.style.opacity)>0||!me._dowm.style.opacity)?'inherit':'hidden';
					me._dowm.ggVisible=true;
				}
				else {
					me._dowm.style.visibility="hidden";
					me._dowm.ggVisible=false;
				}
			}
		}
		me._dowm.logicBlock_visible();
		me._dowm.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._dowm);
		me.__24.appendChild(me._rectangle_3);
		me.__23.appendChild(me.__24);
		me.__22.appendChild(me.__23);
		me.divSkin.appendChild(me.__22);
		el=me.__16=document.createElement('div');
		el.ggId="\uc2a4\ud0a8 \ubcf4\uc774\uae30 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__16.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__16.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__16.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__16.style.transition='transform 0s';
				if (me.__16.ggCurrentLogicStateScaling == 0) {
					me.__16.ggParameter.sx = 0.75;
					me.__16.ggParameter.sy = 0.7;
					me.__16.style.transform=parameterToTransform(me.__16.ggParameter);
					skin.updateSize(me.__16);
				}
				else {
					me.__16.ggParameter.sx = 1;
					me.__16.ggParameter.sy = 1;
					me.__16.style.transform=parameterToTransform(me.__16.ggParameter);
					skin.updateSize(me.__16);
				}
			}
		}
		me.__16.logicBlock_scaling();
		me.__16.onclick=function (e) {
			me.__.style.transition='none';
			me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
			me.__.ggVisible=true;
			if (
				(
					((player.getViewerSize().width > 640))
				)
			) {
				me.__12.style.transition='none';
				me.__12.style.visibility=(Number(me.__12.style.opacity)>0||!me.__12.style.opacity)?'inherit':'hidden';
				me.__12.ggVisible=true;
			}
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			me.__55.style.transition='none';
			me.__55.style.visibility=(Number(me.__55.style.opacity)>0||!me.__55.style.opacity)?'inherit':'hidden';
			me.__55.ggVisible=true;
			me.__23.style.transition='none';
			me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
			me.__23.ggVisible=true;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility=(Number(me._rectangle_2.style.opacity)>0||!me._rectangle_2.style.opacity)?'inherit':'hidden';
			me._rectangle_2.ggVisible=true;
			me.__16.style.transition='none';
			me.__16.style.visibility='hidden';
			me.__16.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__9.style.transition='none';
				me.__9.style.visibility=(Number(me.__9.style.opacity)>0||!me.__9.style.opacity)?'inherit':'hidden';
				me.__9.ggVisible=true;
			}
		}
		me.__16.onmouseover=function (e) {
			me.elementMouseOver['_16']=true;
		}
		me.__16.onmousemove=function (e) {
			me.__18.style.transition='none';
			me.__18.style.visibility=(Number(me.__18.style.opacity)>0||!me.__18.style.opacity)?'inherit':'hidden';
			me.__18.ggVisible=true;
		}
		me.__16.onmouseout=function (e) {
			me.elementMouseOver['_16']=false;
		}
		me.__16.ggCurrentLogicStateScaling = -1;
		me.__16.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_16']) {
				me.__18.style.transition='none';
				me.__18.style.visibility=(Number(me.__18.style.opacity)>0||!me.__18.style.opacity)?'inherit':'hidden';
				me.__18.ggVisible=true;
			}
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me.__21=document.createElement('div');
		el.ggId="\uc2a4\ud0a8\ubcf4\uae30 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me.__21);
		el=me.__19=document.createElement('div');
		els=me.__19__img=document.createElement('img');
		els.className='ggskin ggskin__19';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc2a4\ud0a8 \ubcf4\uae30";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me.__19);
		el=me.__18=document.createElement('div');
		els=me.__18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud0a8 \ubcf4\uae30 \ud0dd\uc2a4\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18.ggUpdateText();
		el.appendChild(els);
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me.__18);
		el=me.__17=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc2a4\ud0a8\ubcf4\uae30\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -508px;';
		hs+='position : absolute;';
		hs+='top : 234px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			return (me.__17.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__17.ggTimestamp) / me.__17.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__17.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__17.style.transition='';
				if (me.__17.ggCurrentLogicStateVisible == 0) {
					me.__17.style.visibility=(Number(me.__17.style.opacity)>0||!me.__17.style.opacity)?'inherit':'hidden';
					me.__17.ggVisible=true;
				}
				else {
					me.__17.style.visibility=(Number(me.__17.style.opacity)>0||!me.__17.style.opacity)?'inherit':'hidden';
					me.__17.ggVisible=true;
				}
			}
		}
		me.__17.logicBlock_visible();
		me.__17.ggActivate=function () {
			me.__18.style.transition='none';
			me.__18.style.visibility='hidden';
			me.__18.ggVisible=false;
		}
		me.__17.ggCurrentLogicStateVisible = -1;
		me.__17.ggUpdateConditionTimer=function () {
			me.__17.logicBlock_visible();
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me.__17);
		me.divSkin.appendChild(me.__16);
		el=me.__12=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 95px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		hs+='position:relative;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__12.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__12.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__12.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__12.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__12.ggCurrentLogicStatePosition == 0) {
					me.__12.style.left='10px';
					me.__12.style.top='45px';
				}
				else {
					me.__12.style.left='15px';
					me.__12.style.top='95px';
				}
			}
		}
		me.__12.logicBlock_position();
		me.__12.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__12.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__12.ggCurrentLogicStateSize = newLogicStateSize;
				me.__12.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__12.ggCurrentLogicStateSize == 0) {
					me.__12.style.width='110px';
					me.__12.style.height='100px';
					skin.updateSize(me.__12);
				}
				else if (me.__12.ggCurrentLogicStateSize == 1) {
					me.__12.style.width='200px';
					me.__12.style.height='200px';
					skin.updateSize(me.__12);
				}
				else {
					me.__12.style.width='200px';
					me.__12.style.height='200px';
					skin.updateSize(me.__12);
				}
			}
		}
		me.__12.logicBlock_size();
		me.__12.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__12.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__12.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__12.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__12.ggCurrentLogicStateScaling == 0) {
					me.__12.ggParameter.sx = 0.85;
					me.__12.ggParameter.sy = 0.8;
					me.__12.style.transform=parameterToTransform(me.__12.ggParameter);
					skin.updateSize(me.__12);
				}
				else {
					me.__12.ggParameter.sx = 1;
					me.__12.ggParameter.sy = 1;
					me.__12.style.transform=parameterToTransform(me.__12.ggParameter);
					skin.updateSize(me.__12);
				}
			}
		}
		me.__12.logicBlock_scaling();
		me.__12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__12.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__12.ggCurrentLogicStateVisible == 0) {
					me.__12.style.visibility="hidden";
					me.__12.ggVisible=false;
				}
				else {
					me.__12.style.visibility=(Number(me.__12.style.opacity)>0||!me.__12.style.opacity)?'inherit':'hidden';
					me.__12.ggVisible=true;
				}
			}
		}
		me.__12.logicBlock_visible();
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.onclick=function (e) {
			me.__6.style.transition='none';
			me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
			me.__6.ggVisible=true;
			me.__12.style.transition='none';
			me.__12.style.visibility='hidden';
			me.__12.ggVisible=false;
			player.setVariableValue('vis_mapangle', true);
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_41=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_41.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_41.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_41.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_41.style.transition='width 0s, height 0s';
				if (me._rectangle_41.ggCurrentLogicStateSize == 0) {
					me._rectangle_41.style.width='65px';
					me._rectangle_41.style.height='30px';
					me._rectangle_41.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me._rectangle_41);
				}
				else {
					me._rectangle_41.style.width='100px';
					me._rectangle_41.style.height='40px';
					me._rectangle_41.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me._rectangle_41);
				}
			}
		}
		me._rectangle_41.logicBlock_size();
		me._rectangle_41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		els=me.__15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__15.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__15.ggUpdateText();
		el.appendChild(els);
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__15.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__15.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__15.style.transition='transform 0s';
				if (me.__15.ggCurrentLogicStateScaling == 0) {
					me.__15.ggParameter.sx = 0.7;
					me.__15.ggParameter.sy = 0.7;
					me.__15.style.transform=parameterToTransform(me.__15.ggParameter);
					skin.updateSize(me.__15);
				}
				else {
					me.__15.ggParameter.sx = 1;
					me.__15.ggParameter.sy = 1;
					me.__15.style.transform=parameterToTransform(me.__15.ggParameter);
					skin.updateSize(me.__15);
				}
			}
		}
		me.__15.logicBlock_scaling();
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_41.appendChild(me.__15);
		me.__13.appendChild(me._rectangle_41);
		el=me._map_11=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_11.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_11.ggCalculateFloorplanSize(mapDetails);
				me._map_11.ggShowSimpleFloorplan(mapDetails);
				me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_11.ggRadar) me._map_11.ggRadar.update();
		}
		me._map_11.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_11.ggUpdateConditionResize();
		}
		me.__13.appendChild(me._map_11);
		el=me.__14=document.createElement('div');
		els=me.__14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud06c\uac8c\ubcf4\uae30";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 5px;';
		hs+='color : rgba(161,161,161,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 20px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__14.ggUpdateText=function() {
			var params = [];
			var hs = player._("+ \ud06c\uac8c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__14.ggUpdateText();
		el.appendChild(els);
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me.__14);
		me.__12.appendChild(me.__13);
		me.divSkin.appendChild(me.__12);
		el=me.__9=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 125px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__9.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobilemap') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__9.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__9.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__9.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__9.ggCurrentLogicStatePosition == 0) {
					me.__9.style.left='5px';
					me.__9.style.bottom='-120px';
				}
				else {
					me.__9.style.left='5px';
					me.__9.style.bottom='0px';
				}
			}
		}
		me.__9.logicBlock_position();
		me.__9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__9.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__9.ggCurrentLogicStateVisible == 0) {
					me.__9.style.visibility=(Number(me.__9.style.opacity)>0||!me.__9.style.opacity)?'inherit':'hidden';
					me.__9.ggVisible=true;
				}
				else {
					me.__9.style.visibility="hidden";
					me.__9.ggVisible=false;
				}
			}
		}
		me.__9.logicBlock_visible();
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px 20px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.onclick=function (e) {
			me.__6.style.transition='none';
			me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
			me.__6.ggVisible=true;
			me.__9.style.transition='none';
			me.__9.style.visibility='hidden';
			me.__9.ggVisible=false;
			player.setVariableValue('vis_mapangle', true);
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_40=document.createElement('div');
		el.ggId="Rectangle 4-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_40.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_40.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_40.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_40.style.transition='width 0s, height 0s';
				if (me._rectangle_40.ggCurrentLogicStateSize == 0) {
					me._rectangle_40.style.width='70px';
					me._rectangle_40.style.height='30px';
					me._rectangle_40.style.left = 'calc(50% - (70px / 2))';
					skin.updateSize(me._rectangle_40);
				}
				else {
					me._rectangle_40.style.width='100px';
					me._rectangle_40.style.height='40px';
					me._rectangle_40.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me._rectangle_40);
				}
			}
		}
		me._rectangle_40.logicBlock_size();
		me._rectangle_40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11=document.createElement('div');
		els=me.__11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__11.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__11.ggUpdateText();
		el.appendChild(els);
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_40.appendChild(me.__11);
		me.__10.appendChild(me._rectangle_40);
		el=me._map_10=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 71%;';
		hs+='left : calc(50% - ((71% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((71% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 71%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_10.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_10.ggCalculateFloorplanSize(mapDetails);
				me._map_10.ggShowSimpleFloorplan(mapDetails);
				me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_10.ggRadar) me._map_10.ggRadar.update();
		}
		me._map_10.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_10.ggUpdateConditionResize();
		}
		me.__10.appendChild(me._map_10);
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 2px;';
		hs+='color : rgba(161,161,161,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("+ \ud06c\uac8c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me._text_4);
		me.__9.appendChild(me.__10);
		me.divSkin.appendChild(me.__9);
		el=me._start=document.createElement('div');
		el.ggId="start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 326px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._start.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._start);
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
			me._markertemplate__normalInst.ggEvent_sizechanged();
			me._markertemplate__activeInst.ggEvent_sizechanged();
		}
		me.divSkin.appendChild(me._markertemplate);
		el=me.__6=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__6.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobilemap') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__6.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__6.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__6.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__6.ggCurrentLogicStatePosition == 0) {
					me.__6.style.left = 'calc(50% - (100% / 2) + (0px / 2) + 5px)';
					me.__6.style.top = 'calc(50% - (70% / 2) + (0px / 2) + -120px)';
				}
				else {
					me.__6.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__6.style.top='calc(50% - ((70% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__6.logicBlock_position();
		me.__6.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 960))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__6.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__6.ggCurrentLogicStateSize = newLogicStateSize;
				me.__6.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__6.ggCurrentLogicStateSize == 0) {
					me.__6.style.width='100%';
					me.__6.style.height='70%';
					me.__6.style.left = 'calc(50% - (100% / 2))';
					me.__6.style.top = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__6);
				}
				else {
					me.__6.style.width='100%';
					me.__6.style.height='70%';
					me.__6.style.left = 'calc(50% - (100% / 2))';
					me.__6.style.top = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__6);
				}
			}
		}
		me.__6.logicBlock_size();
		me.__6.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__6.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__6.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__6.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__6.ggCurrentLogicStateScaling == 0) {
					me.__6.ggParameter.sx = 1;
					me.__6.ggParameter.sy = 0.8;
					me.__6.style.transform=parameterToTransform(me.__6.ggParameter);
					skin.updateSize(me.__6);
				}
				else {
					me.__6.ggParameter.sx = 1;
					me.__6.ggParameter.sy = 1;
					me.__6.style.transform=parameterToTransform(me.__6.ggParameter);
					skin.updateSize(me.__6);
				}
			}
		}
		me.__6.logicBlock_scaling();
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__7.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__7.ggCurrentLogicStateSize = newLogicStateSize;
				me.__7.style.transition='width 0s, height 0s';
				if (me.__7.ggCurrentLogicStateSize == 0) {
					me.__7.style.width='100%';
					me.__7.style.height='100%';
					me.__7.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__7);
				}
				else {
					me.__7.style.width='70%';
					me.__7.style.height='100%';
					me.__7.style.left = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__7);
				}
			}
		}
		me.__7.logicBlock_size();
		me.__7.onclick=function (e) {
			me.__6.style.transition='none';
			me.__6.style.visibility='hidden';
			me.__6.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 960))
				)
			) {
				me.__9.style.transition='none';
				me.__9.style.visibility=(Number(me.__9.style.opacity)>0||!me.__9.style.opacity)?'inherit':'hidden';
				me.__9.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width > 960))
				)
			) {
				me.__12.style.transition='none';
				me.__12.style.visibility=(Number(me.__12.style.opacity)>0||!me.__12.style.opacity)?'inherit':'hidden';
				me.__12.ggVisible=true;
			}
			player.setVariableValue('vis_mapangle', false);
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		els=me.__8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\ud0c0\uc774\ud2c0-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<link rel=\"preconnect\" href=\"https:\/\/fonts.googleapis.com\"> <link rel=\"preconnect\" href=\"https:\/\/fonts.gstatic.com\" crossorigin> <link href=\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans&family=Noto+Sans+Display:wght@500&display=swap\" rel=\"stylesheet\"> font-family: \"Noto Sans\", sans-serif; font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__8.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__8.ggUpdateText();
		el.appendChild(els);
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__8.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__8.ggCurrentLogicStateSize = newLogicStateSize;
				me.__8.style.transition='width 0s, height 0s';
				if (me.__8.ggCurrentLogicStateSize == 0) {
					me.__8.style.width='90%';
					me.__8.style.height='100%';
					me.__8.style.left = 'calc(50% - (90% / 2))';
					me.__8.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__8);
				}
				else {
					me.__8.style.width='100%';
					me.__8.style.height='100%';
					me.__8.style.left = 'calc(50% - (100% / 2))';
					me.__8.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__8);
				}
			}
		}
		me.__8.logicBlock_size();
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me.__8);
		me.__7.appendChild(me._rectangle_4);
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 84.85%;';
		hs+='left : calc(50% - ((82% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((84.85% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 82%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_1.ggUpdateConditionResize();
		}
		me.__7.appendChild(me._map_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAitJREFUeF7tmuFOwzAMhLM3gycDngzebJPFgqKqaWznzp5IKvEH0vjuyzlbQ29l8eu2uP+yAewELE5gt8DiAdib4G6B3QKLE/C2wFspRX4+X4ifS5MHwPfTfPX+Xkr5SQQhxj8aTaJFNKkuKwBZcSl2vLIgiHlZELceK4BeQREQDeFKy5e2Pa0AxOixBVr6URCuzIsetS/1wMblqDgbArS+B4CwgIpQ7Va/g+B1vQAoYgYg4OZNvdIRRxF1UotWZyYBVSdN3LMAdX4EAGY7UM0jWqBNK1oser7TLkYlAN0OIebRCUBBCDPPAjCzJ4SaZwLwQAg3zwZggZBiPgKABoI8uZ09Ytc9hfpsgf4U6H2bHa1w7z6q+agEaD8djhDo5q'+
			'MBaNohJPYt6agWaGv2jtXqGPVpTq9vLL+PBqDdC0LiH90CWvOhbRCVAKv5MAgRAEbm//X3gJH52uvacZb9TTWWmQCrKet4lcHRIBYArxnvfSOf3b8zAMyamL3fBAMNACUeNc8QBhIAWjR6vlMYKAAssax5/2AgALBFUuefBUAV12SWVmcGAE1UZ+ei1PMCoIgZbtkv8t/hLPPakyXTo7QnAfeLlTIVV6y454wx5SUpERplXpMEtRZrAnrxVxecWPWzW3t61MdqVgAion1JSuImxbLfE2xflaO2QF0FOdiUQpnGj4lwafIkAJzi3Ok2gFz++dV3AvLXIFfBTkAu//zqOwH5a5CrYPkEPADiMJpBN5ipjwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 100px;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_2.style.transition='right 0s, top 0s';
				if (me._image_2.ggCurrentLogicStatePosition == 0) {
					me._image_2.style.right='15px';
					me._image_2.style.top='15px';
				}
				else {
					me._image_2.style.right='100px';
					me._image_2.style.top='50px';
				}
			}
		}
		me._image_2.logicBlock_position();
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me._image_2);
		me.__6.appendChild(me.__7);
		me.divSkin.appendChild(me.__6);
		el=me._timer_3=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=300;
		el.ggId="Timer 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 538px;';
		hs+='position : absolute;';
		hs+='top : 71px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_3.ggIsActive=function() {
			return (me._timer_3.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_3.ggTimestamp) / me._timer_3.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_3.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_3.style.transition='';
				if (me._timer_3.ggCurrentLogicStateVisible == 0) {
					me._timer_3.style.visibility="hidden";
					me._timer_3.ggVisible=false;
				}
				else {
					me._timer_3.style.visibility=(Number(me._timer_3.style.opacity)>0||!me._timer_3.style.opacity)?'inherit':'hidden';
					me._timer_3.ggVisible=true;
				}
			}
		}
		me._timer_3.logicBlock_visible();
		me._timer_3.ggActivate=function () {
			player.setVariableValue('vis_arrow', !player.getVariableValue('vis_arrow'));
		}
		me._timer_3.ggCurrentLogicStateVisible = -1;
		me._timer_3.ggUpdateConditionTimer=function () {
			me._timer_3.logicBlock_visible();
		}
		me._timer_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_3);
		el=me.__=document.createElement('div');
		el.ggId="\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 54px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 219px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		el.ggId="\ub85c\uace0\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 25px 25px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 88.5714%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88.5714% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_1);
		me._container_2.appendChild(me._container_1);
		me.__0.appendChild(me._container_2);
		me.__.appendChild(me.__0);
		me.divSkin.appendChild(me.__);
		me.__55.logicBlock_position();
		me.__59.logicBlock_position();
		me._scrollarea_1.logicBlock_position();
		me._scrollarea_1.logicBlock_size();
		me.__57.logicBlock_size();
		me.__22.logicBlock_position();
		me.__22.logicBlock_scaling();
		me._rectangle_2.logicBlock_size();
		me.__52.logicBlock_visible();
		me.__210.logicBlock_visible();
		me.__210.logicBlock_backgroundcolor();
		me.__53.logicBlock_visible();
		me._timer_1.logicBlock_visible();
		me.__48.logicBlock_visible();
		me.__47.logicBlock_visible();
		me.__43.logicBlock_visible();
		me.__42.logicBlock_visible();
		me.__38.logicBlock_visible();
		me.__37.logicBlock_visible();
		me.__32.logicBlock_visible();
		me.__31.logicBlock_visible();
		me.__27.logicBlock_visible();
		me.__30.logicBlock_visible();
		me.__26.logicBlock_visible();
		me._up.logicBlock_visible();
		me.__24.logicBlock_position();
		me.__24.logicBlock_visible();
		me.__24.logicBlock_alpha();
		me._rectangle_3.logicBlock_visible();
		me._dowm.logicBlock_visible();
		me.__16.logicBlock_scaling();
		me.__17.logicBlock_visible();
		me.__12.logicBlock_position();
		me.__12.logicBlock_size();
		me.__12.logicBlock_scaling();
		me.__12.logicBlock_visible();
		me._rectangle_41.logicBlock_size();
		me.__15.logicBlock_scaling();
		me._map_11.ggMarkerInstances=[];
		me._map_11.ggLastNodeId=null;
		me._map_11.ggSimpleFloorplanMarkerArray=[];
		me._map_11.ggFloorplanWidth=0;
		me._map_11.ggFloorplanHeight=0;
		me._map_11__mapdiv=document.createElement('div');
		me._map_11__mapdiv.className='ggskin ggskin_map';
		me._map_11.appendChild(me._map_11__mapdiv);
		me._map_11__img=document.createElement('img');
		me._map_11__img.className='ggskin ggskin_map';
		me._map_11__mapdiv.appendChild(me._map_11__img);
		me._map_11.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_11.ggRadar.update=function() {
			var radar=me._map_11.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_11.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_11.ggFilteredIds.length > 0 && me._map_11.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_11.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_11.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_11__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_11__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_11.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_11__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_11.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_11.clientWidth;
			var mapHeight = me._map_11.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_11.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_11__img.setAttribute('src', imageFilename);
		me._map_11__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_11.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_11.ggFloorplanHeight / 2 + 'px;width:' + me._map_11.ggFloorplanWidth + 'px;height:' + me._map_11.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_11__img.setAttribute('style','width:' + me._map_11.ggFloorplanWidth + 'px;height:' + me._map_11.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_11.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_11.clientWidth / me._map_11.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_11.ggFloorplanHeight = me._map_11.clientHeight;
				me._map_11.ggFloorplanWidth = me._map_11.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_11.ggFloorplanWidth = me._map_11.clientWidth;
				me._map_11.ggFloorplanHeight = me._map_11.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_11.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_11.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_11.ggPermeableMap = true;
			} else {
				me._map_11.ggPermeableMap = false;
			}
			me._map_11.ggCalculateFloorplanSize(mapDetails);
			me._map_11.ggShowSimpleFloorplan(mapDetails);
			me._map_11.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_11.ggMapNotLoaded = false;
		}
		me._map_11.ggClearMap=function() {
			me._map_11.ggClearMapMarkers();
			me._map_11.ggMapNotLoaded = true;
		}
		me._map_11.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_11.ggMapId = mapId;
			if (!me._map_11.ggMapNotLoaded) {
				me._map_11.ggClearMap();
				me._map_11.ggInitMap();
				me._map_11.ggInitMapMarkers();
			}
		}
		me._map_11.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_11.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_11.ggMapId);
					var xPos = (me._map_11.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_11.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_11.ggHMarkerAnchorOffset;
					yPos -= me._map_11.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_11.style['z-index'] + 2;
				}
			}
		}
		me._map_11.ggInitMapMarkers=function() {
			me._map_11.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_11.ggFilteredIds = [];
			if (me._map_11.ggFilter != '') {
				var filter = me._map_11.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_11.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_11.ggFilteredIds.length > 0) ids = me._map_11.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_11.ggMapId);
				if (coords.length>=2) {
					me._map_11.ggHMarkerAnchorOffset = 12;
					me._map_11.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_11.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_11.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_11__mapdiv.appendChild(marker);
				}
			}
			me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_11);
		}
		me._map_11.ggClearMapMarkers=function() {
			for (id in me._map_11.ggSimpleFloorplanMarkerArray) {
				if (me._map_11.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_11__mapdiv.removeChild(me._map_11.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_11.ggMarkerInstances=[];
			me._map_11.ggSimpleFloorplanMarkerArray=[];
		}
		me.__9.logicBlock_position();
		me.__9.logicBlock_visible();
		me._rectangle_40.logicBlock_size();
		me._map_10.ggMarkerInstances=[];
		me._map_10.ggLastNodeId=null;
		me._map_10.ggSimpleFloorplanMarkerArray=[];
		me._map_10.ggFloorplanWidth=0;
		me._map_10.ggFloorplanHeight=0;
		me._map_10__mapdiv=document.createElement('div');
		me._map_10__mapdiv.className='ggskin ggskin_map';
		me._map_10.appendChild(me._map_10__mapdiv);
		me._map_10__img=document.createElement('img');
		me._map_10__img.className='ggskin ggskin_map';
		me._map_10__mapdiv.appendChild(me._map_10__img);
		me._map_10.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_10.ggRadar.update=function() {
			var radar=me._map_10.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_10.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_10.ggFilteredIds.length > 0 && me._map_10.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_10.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_10.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_10__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_10__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_10.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_10__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_10.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_10.clientWidth;
			var mapHeight = me._map_10.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_10.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_10__img.setAttribute('src', imageFilename);
		me._map_10__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_10.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_10.ggFloorplanHeight / 2 + 'px;width:' + me._map_10.ggFloorplanWidth + 'px;height:' + me._map_10.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_10__img.setAttribute('style','width:' + me._map_10.ggFloorplanWidth + 'px;height:' + me._map_10.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_10.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_10.clientWidth / me._map_10.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_10.ggFloorplanHeight = me._map_10.clientHeight;
				me._map_10.ggFloorplanWidth = me._map_10.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_10.ggFloorplanWidth = me._map_10.clientWidth;
				me._map_10.ggFloorplanHeight = me._map_10.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_10.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_10.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_10.ggPermeableMap = true;
			} else {
				me._map_10.ggPermeableMap = false;
			}
			me._map_10.ggCalculateFloorplanSize(mapDetails);
			me._map_10.ggShowSimpleFloorplan(mapDetails);
			me._map_10.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_10.ggMapNotLoaded = false;
		}
		me._map_10.ggClearMap=function() {
			me._map_10.ggClearMapMarkers();
			me._map_10.ggMapNotLoaded = true;
		}
		me._map_10.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_10.ggMapId = mapId;
			if (!me._map_10.ggMapNotLoaded) {
				me._map_10.ggClearMap();
				me._map_10.ggInitMap();
				me._map_10.ggInitMapMarkers();
			}
		}
		me._map_10.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_10.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_10.ggMapId);
					var xPos = (me._map_10.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_10.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_10.ggHMarkerAnchorOffset;
					yPos -= me._map_10.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_10.style['z-index'] + 2;
				}
			}
		}
		me._map_10.ggInitMapMarkers=function() {
			me._map_10.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_10.ggFilteredIds = [];
			if (me._map_10.ggFilter != '') {
				var filter = me._map_10.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_10.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_10.ggFilteredIds.length > 0) ids = me._map_10.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_10.ggMapId);
				if (coords.length>=2) {
					me._map_10.ggHMarkerAnchorOffset = 12;
					me._map_10.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_10.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_10.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_10__mapdiv.appendChild(marker);
				}
			}
			me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_10);
		}
		me._map_10.ggClearMapMarkers=function() {
			for (id in me._map_10.ggSimpleFloorplanMarkerArray) {
				if (me._map_10.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_10__mapdiv.removeChild(me._map_10.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_10.ggMarkerInstances=[];
			me._map_10.ggSimpleFloorplanMarkerArray=[];
		}
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._map_pin;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='-12px';
		me._markertemplate__normal.style.top='-20px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._map_pin;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='-12px';
		me._markertemplate__active.style.top='-20px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me.__6.logicBlock_position();
		me.__6.logicBlock_size();
		me.__6.logicBlock_scaling();
		me.__7.logicBlock_size();
		me.__8.logicBlock_size();
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#27533d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#27533d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1.ggFloorplanHeight / 2 + 'px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers();
			}
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 12;
					me._map_1.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin2_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin2;
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		me._image_2.logicBlock_position();
		me._timer_3.logicBlock_visible();
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('꺽은선')) {
				for(var i = 0; i < hotspotTemplates['꺽은선'].length; i++) {
					hotspotTemplates['꺽은선'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('꺽은선2')) {
				for(var i = 0; i < hotspotTemplates['꺽은선2'].length; i++) {
					hotspotTemplates['꺽은선2'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('화살표 흰색')) {
				for(var i = 0; i < hotspotTemplates['화살표 흰색'].length; i++) {
					hotspotTemplates['화살표 흰색'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('화살표 흰색-꺽은선')) {
				for(var i = 0; i < hotspotTemplates['화살표 흰색-꺽은선'].length; i++) {
					hotspotTemplates['화살표 흰색-꺽은선'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('화살표 흰색-작게')) {
				for(var i = 0; i < hotspotTemplates['화살표 흰색-작게'].length; i++) {
					hotspotTemplates['화살표 흰색-작게'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me.__55.logicBlock_position();
			me.__57.ggUpdateConditionNodeChange();
			me._rectangle_2.logicBlock_size();
			me.__52.logicBlock_visible();
			me.__210.logicBlock_visible();
			me.__210.logicBlock_backgroundcolor();
			me.__53.logicBlock_visible();
			me._timer_1.logicBlock_visible();
			me.__48.logicBlock_visible();
			me.__47.logicBlock_visible();
			me.__43.logicBlock_visible();
			me.__42.logicBlock_visible();
			me.__38.logicBlock_visible();
			me.__37.logicBlock_visible();
			me.__32.logicBlock_visible();
			me.__31.logicBlock_visible();
			me.__27.logicBlock_visible();
			me.__26.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__24.logicBlock_position();
			me.__24.logicBlock_visible();
			me.__24.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__17.logicBlock_visible();
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_11.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_11.ggCalculateFloorplanSize(mapDetails);
				me._map_11.ggShowSimpleFloorplan(mapDetails);
				me._map_11.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_11.ggRadar) me._map_11.ggRadar.update();
			if (me._map_11.ggLastNodeId) {
				var lastActiveMarker = me._map_11.ggSimpleFloorplanMarkerArray[me._map_11.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_11.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_11.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_11.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_11.ggChangeMap(mapId);
					}
				}
			}
			me._map_11.ggLastNodeId = id;
			me._map_11.ggRadar.update();
			me.__9.logicBlock_position();
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_10.ggCalculateFloorplanSize(mapDetails);
				me._map_10.ggShowSimpleFloorplan(mapDetails);
				me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_10.ggRadar) me._map_10.ggRadar.update();
			if (me._map_10.ggLastNodeId) {
				var lastActiveMarker = me._map_10.ggSimpleFloorplanMarkerArray[me._map_10.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_10.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_10.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_10.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_10.ggChangeMap(mapId);
					}
				}
			}
			me._map_10.ggLastNodeId = id;
			me._map_10.ggRadar.update();
			me._markertemplate__normalInst.ggEvent_changenode();
			me._markertemplate__activeInst.ggEvent_changenode();
			me.__6.logicBlock_position();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._map_1.ggRadar.update();
			me._timer_3.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('꺽은선')) {
				for(var i = 0; i < hotspotTemplates['꺽은선'].length; i++) {
					hotspotTemplates['꺽은선'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('꺽은선2')) {
				for(var i = 0; i < hotspotTemplates['꺽은선2'].length; i++) {
					hotspotTemplates['꺽은선2'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('화살표 흰색')) {
				for(var i = 0; i < hotspotTemplates['화살표 흰색'].length; i++) {
					hotspotTemplates['화살표 흰색'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('화살표 흰색-꺽은선')) {
				for(var i = 0; i < hotspotTemplates['화살표 흰색-꺽은선'].length; i++) {
					hotspotTemplates['화살표 흰색-꺽은선'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('화살표 흰색-작게')) {
				for(var i = 0; i < hotspotTemplates['화살표 흰색-작게'].length; i++) {
					hotspotTemplates['화살표 흰색-작게'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__55.logicBlock_position();
			me._scrollarea_1.ggUpdatePosition();
			me._rectangle_2.logicBlock_size();
			me.__52.logicBlock_visible();
			me.__210.logicBlock_visible();
			me.__210.logicBlock_backgroundcolor();
			me.__53.logicBlock_visible();
			me.__48.logicBlock_visible();
			me.__43.logicBlock_visible();
			me.__38.logicBlock_visible();
			me.__32.logicBlock_visible();
			me.__27.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__24.logicBlock_position();
			me.__24.logicBlock_visible();
			me.__24.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_11.ggClearMap();
			me._map_11.ggInitMap(false);
			me._map_11.ggInitMapMarkers(true);
			me.__9.logicBlock_position();
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_10.ggClearMap();
			me._map_10.ggInitMap(false);
			me._map_10.ggInitMapMarkers(true);
			player.setMediaVisibility("\uc5d0\uc5b4\ucee8","0",0);
			me._markertemplate__normalInst.ggEvent_configloaded();
			me._markertemplate__activeInst.ggEvent_configloaded();
			me.__6.logicBlock_position();
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
		});
		player.addListener('fullscreenenter', function(event) {
			me.__30.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me.__30.logicBlock_visible();
		});
		player.addListener('positionchanged', function(event) {
			me._map_11.ggRadar.update();
			me._map_10.ggRadar.update();
			me._map_1.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			for(var i = 0; i < me.__57.ggInstances.length; i++) {
				me.__57.ggInstances[i].ggEvent_sizechanged(event);
			}
			if (hotspotTemplates.hasOwnProperty('꺽은선')) {
				for(var i = 0; i < hotspotTemplates['꺽은선'].length; i++) {
					hotspotTemplates['꺽은선'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('꺽은선2')) {
				for(var i = 0; i < hotspotTemplates['꺽은선2'].length; i++) {
					hotspotTemplates['꺽은선2'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('화살표 흰색')) {
				for(var i = 0; i < hotspotTemplates['화살표 흰색'].length; i++) {
					hotspotTemplates['화살표 흰색'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('화살표 흰색-꺽은선')) {
				for(var i = 0; i < hotspotTemplates['화살표 흰색-꺽은선'].length; i++) {
					hotspotTemplates['화살표 흰색-꺽은선'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('화살표 흰색-작게')) {
				for(var i = 0; i < hotspotTemplates['화살표 흰색-작게'].length; i++) {
					hotspotTemplates['화살표 흰색-작게'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__59.logicBlock_position();
			me._scrollarea_1.logicBlock_position();
			me._scrollarea_1.logicBlock_size();
			me.__57.logicBlock_size();
			me.__22.logicBlock_position();
			me.__22.logicBlock_scaling();
			me.__16.logicBlock_scaling();
			me.__12.logicBlock_position();
			me.__12.logicBlock_size();
			me.__12.logicBlock_scaling();
			me.__12.logicBlock_visible();
			me._rectangle_41.logicBlock_size();
			me.__15.logicBlock_scaling();
			me.__9.logicBlock_visible();
			me._rectangle_40.logicBlock_size();
			me.__6.logicBlock_size();
			me.__6.logicBlock_scaling();
			me.__7.logicBlock_size();
			me.__8.logicBlock_size();
			me._image_2.logicBlock_position();
		});
		player.addListener('varchanged_vis_arrow', function(event) {
			if (hotspotTemplates.hasOwnProperty('꺽은선')) {
				for(var i = 0; i < hotspotTemplates['꺽은선'].length; i++) {
					hotspotTemplates['꺽은선'][i].ggEvent_varchanged_vis_arrow();
				}
			}
			if (hotspotTemplates.hasOwnProperty('꺽은선2')) {
				for(var i = 0; i < hotspotTemplates['꺽은선2'].length; i++) {
					hotspotTemplates['꺽은선2'][i].ggEvent_varchanged_vis_arrow();
				}
			}
			if (hotspotTemplates.hasOwnProperty('화살표 흰색')) {
				for(var i = 0; i < hotspotTemplates['화살표 흰색'].length; i++) {
					hotspotTemplates['화살표 흰색'][i].ggEvent_varchanged_vis_arrow();
				}
			}
			if (hotspotTemplates.hasOwnProperty('화살표 흰색-꺽은선')) {
				for(var i = 0; i < hotspotTemplates['화살표 흰색-꺽은선'].length; i++) {
					hotspotTemplates['화살표 흰색-꺽은선'][i].ggEvent_varchanged_vis_arrow();
				}
			}
			if (hotspotTemplates.hasOwnProperty('화살표 흰색-작게')) {
				for(var i = 0; i < hotspotTemplates['화살표 흰색-작게'].length; i++) {
					hotspotTemplates['화살표 흰색-작게'][i].ggEvent_varchanged_vis_arrow();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_arrow();
				}
			}
		});
		player.addListener('varchanged_vis_long', function(event) {
			me.__24.logicBlock_visible();
			me.__24.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_mobilemap', function(event) {
			me.__9.logicBlock_position();
			me.__6.logicBlock_position();
		});
		player.addListener('varchanged_vis_roomchoice', function(event) {
			me.__55.logicBlock_position();
			me.__210.logicBlock_visible();
			me.__210.logicBlock_backgroundcolor();
			me.__53.logicBlock_visible();
		});
		player.addListener('varchanged_vis_short', function(event) {
			me._rectangle_2.logicBlock_size();
			me.__52.logicBlock_visible();
			me.__48.logicBlock_visible();
			me.__43.logicBlock_visible();
			me.__38.logicBlock_visible();
			me.__32.logicBlock_visible();
			me.__27.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__24.logicBlock_position();
			me.__24.logicBlock_visible();
			me.__24.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin_show', function(event) {
			me.__52.logicBlock_visible();
			me.__48.logicBlock_visible();
			me.__43.logicBlock_visible();
			me.__38.logicBlock_visible();
			me.__32.logicBlock_visible();
			me.__27.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me.__57.ggUpdate();
		});
	};
	function SkinCloner__57_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_1.style.transition='width 0s, height 0s';
				if (me._nodeimage_1.ggCurrentLogicStateSize == 0) {
					me._nodeimage_1.style.width='95px';
					me._nodeimage_1.style.height='95px';
					skin.updateSize(me._nodeimage_1);
				}
				else {
					me._nodeimage_1.style.width='115px';
					me._nodeimage_1.style.height='115px';
					skin.updateSize(me._nodeimage_1);
				}
			}
		}
		me._nodeimage_1.logicBlock_size();
		me._nodeimage_1.onclick=function (e) {
			if (me._nodeimage_1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
		}
		me._nodeimage_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_1.style.transition='width 0s, height 0s';
				if (me._rectangle_1.ggCurrentLogicStateSize == 0) {
					me._rectangle_1.style.width='100%';
					me._rectangle_1.style.height='60px';
					skin.updateSize(me._rectangle_1);
				}
				else {
					me._rectangle_1.style.width='100%';
					me._rectangle_1.style.height='40px';
					skin.updateSize(me._rectangle_1);
				}
			}
		}
		me._rectangle_1.logicBlock_size();
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__58=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__58;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__58__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc788\uc74c \ubc29\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__58.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__58.ggUpdateText();
		player.addListener('changenode', function() {
			me.__58.ggUpdateText();
		});
		el.appendChild(els);
		me.__58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me.__58);
		me._nodeimage_1.appendChild(me._rectangle_1);
		me.__div.appendChild(me._nodeimage_1);
		me._nodeimage_1.logicBlock_size();
		me._rectangle_1.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_1.logicBlock_size();
				me._rectangle_1.logicBlock_size();
			};
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -435px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_1.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__1=document.createElement('div');
		els=me.__1__img=document.createElement('img');
		els.className='ggskin ggskin__1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubc14\ub2e5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_arrow') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1.style.transition='left 500ms linear 0ms, top 500ms linear 0ms, width 0s, height 0s';
				if (me.__1.ggCurrentLogicStatePosition == 0) {
					me.__1.style.left = 'calc(50% - (100% / 2))';
					me.__1.style.top='-10px';
				}
				else {
					me.__1.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__1.style.top='0px';
				}
			}
		}
		me.__1.logicBlock_position();
		me.__1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__1.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1.style.transition='left 500ms linear 0ms, top 500ms linear 0ms, width 0s, height 0s';
				if (me.__1.ggCurrentLogicStateSize == 0) {
					me.__1.style.width='80%';
					me.__1.style.height='80%';
					me.__1.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me.__1);
				}
				else {
					me.__1.style.width='100%';
					me.__1.style.height='100%';
					me.__1.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__1);
				}
			}
		}
		me.__1.logicBlock_size();
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		me._external_1.appendChild(me.__1);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_3.ggUpdateText();
		});
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me._external_1.appendChild(me._text_3);
		me._ht_node.appendChild(me._external_1);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me.__1.logicBlock_position();
		me.__1.logicBlock_size();
			me.ggEvent_changenode=function() {
				me.__1.logicBlock_position();
			};
			me.ggEvent_configloaded=function() {
				me.__1.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me.__1.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_arrow=function() {
				me.__1.logicBlock_position();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass__2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__2=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c \ud770\uc0c9-\uc791\uac8c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__2.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_2']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_2']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2.ggSubElement.setAttribute('alt', player._(me._external_2.ggAltText));
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2.ggText_untranslated = img;
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2.ggSubElement.style.width = '0px';
			me._external_2.ggSubElement.style.height = '0px';
			me._external_2.ggSubElement.src='';
			me._external_2.ggSubElement.src=me._external_2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2.ggText != player._(me._external_2.ggText_untranslated)) {
				me._external_2.ggText = player._(me._external_2.ggText_untranslated);
				me._external_2.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_2.ggScrollbars || currentWidth < me._external_2.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2.ggScrollbars || currentHeight < me._external_2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQG'+
			'AAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6c'+
			'wR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCa'+
			'IkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj'+
			'9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj'+
			'1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisr'+
			'kw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUO'+
			'ihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNI'+
			'Uk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAACxMAAAsTAQCanBgAABkASURBVHic7d13lF1lvcbx76SRIFGaEMFIFwEpgqGKSBcMghAVxQoKFy8IoqigiPRLkyaCggEEQSGgCKLCQgN4KVKsQEwImAuX3tIbybl/PJmbIc6QmTl77/f97f181mItXJJzfknmPOfdb/m9Ha1WCzOzCAakLsDMrLccWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFo'+
			'YDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWXt2gmYAMwFXgNaXf5ZAMwDpgPjgLUS1Wg10dFqtVLXYPGsBPwK2Lafv/4uYH/g6cIqskZwYFlfrIKCaquCXu9eYF/gmYJez2rOgWW99Q9go5Je+y/A7sDzJb2+1YQDy5bmfuC9Fb3XZGALYGpF72fBeNLdurMi8Ds0cV5VWAGsA7wK/AnNk5m9'+
			'jgPLuhqCguolYLeEdYwCXgTGA6smrMMy40dCA+gAbgI+lLqQHjyERnr+YW04j7CabRm06reQfMMKYHNU4wOpC7G0HFjNtCwKqjnAXolr6Yst0Cjrj8BbEtdiCTiwmmUocAUwk1hBtaTt0OT8HcDKaUuxKjmwmmEYcDEwG/hM4lqK9H7gBeBGtLJpNedJ9/obC3yWZnw5/Rr4JDAtdSFWDgdWPQ0EzgcORSuATdICbkM7561mmvCt2ySDgPNQ14Qv0bywAv2ed0PB9UtgeNJqrFAeYdXHRcAhNDOklua3wGjU7sYC8wgrvtPQHqX/wGHVkw+iUeetqQux9jiwYhoAnADMB76Jg6q3dkXhfj06hmTB+JEwnuOAE1MXURO3kPcOf1uCAyuOI4FzUhdRU+OAj6YuwpbOj4R5GwAchR5jHFblGYNWFa9B5ystUw6sfB2IVr'+
			'XOJt4c1W1oW0U0+6PzldemLsS650fC/HwOuATtqYrmRWBdXt8x9ErgU2nKadvlwOdTF2GLObDy8WngJ6mL6Kc5wA6oU2h3lkONAft7y05qPyVu6NaKHwnTG4Me/SKG1Xx0dm8YPYcVwAzUYWFNYGL5ZRXuADTHdWnqQprOgZXOx9Cj03XE/Hs4Du1luqYPv2YKsD6wCQq7aA5CCyA/Jt68Yi34kbB6HwGuRr2pIhqHWtTMbvN1BqA7Ca9ru6I0FqLeYgemLqRJIn6zR/VhdO/eDcQMq4eA9dB+pXbDCvSBH4cWF05ER2ciGYAm5Ftoy8ngtOU0g0dY5dsXNc97a+pC+ulxtCBwd8nvMxxt4fhiye9Tlvlojivido4wHFjl6EDn1q4hbifMuWiy+fqK33ck2tYRuZ/VqcDJFDMStS4cWMXbFe3fWS1xHf01B3WAOIm0'+
			'12ptiPpZrZewhnYsBM4CvpG6kDpxYBWjA9gSXYoQ9WhHC42mcjtTNxp9AUS+CfpYFF4RV0az4kn39m2OLkK4l7hhdRewCvmFFcDNaP7vC2g/V0SnokfsE4m54JINj7D6bwPgPmK34H0OXQv/ZOpC+uB04Oupi2jTyWgfm/WRR1h9txEwCXiE2GG1I/A2YoUVaE5oRXS1V1TfRnOFx+MNqH3iwOq9LYBHgX+gA74RzQS+hj4k40k7qd6OV4B90N/DHWlL6bdlgO+ix9yT0pYShx8Jl+7daDL6nakLadO56FGqjhO/o1BXiPVTF9KmI4Hv48syeuTA6tmGwM9RYEW1EPWm2heYlbiWKuyN9r4NS11IG+ajVcVzibf7v3QOrH/3ZmACmt+J7BlgU7SC2TRHAWegC2Uj+zJwQeoicuI5rMXeiVb9phI7rP4XbV5djWaGFc'+
			'D30BfPWakLadP5aGT8rdSF5MIjLFgLdU/YOnUhbVqA9ipdnriO3KyCznLuQ+wVuYXAEcCPgHmJa0mmyYG1OurdHbULZqd56Jv46NSFZO7t6CLVDVIX0qY5aPHkBzRwcr6JgTUc7ezeNHUhBbgZ9dfy5GzvjQJ+TdzuGV0dBIxNXUSVmhRYqwGXofmdyI8GAH9El1VMTlxHp6HA+9GV8BugHu4LgWnAv9AXxG1o/1QOBgB7ocPV0U1HG1HPT11IFZoQWKujdiV7pC6kAJNQUJXdm6o3VkfdNg9Gj1u9MQcF11h0KUUO7VdORXNDy6YupE1zUC+uq6jnXjug3oG1DHATGlFFNx810ft56kLQHqcrgf3afJ0FwDHAhaTfIzYUuAj1/4reOXQOcCgKrtpNFdQxsIaiNsR1GFG10CbC80g/GhmEAuZYiu048Ar6gOUQxm9G'+
			'81vvS11IAeah7q0Rb2PqUZ32Yb0VfavMoh5h9QNgZeC/SB9Wo4EnKKc9ygrAz4A/k/5UwTRge+C96MxoZEPQJRnTqNFlsHUYYQ0EvrPonzp4EG21yGGvzVpo5DOqwve8Cu0nm1vhe/ZkD7TvqbdzdLnbBvVtCyt6YI1Ee2velbqQAkwE9kcjjRyMRRP8KVZUZ6I2MheTx16jj5HHI2sR7kXBFVLkR8LtgYeJH1Yvol3Y65M+rAai0Ox8jEi1/eNNqGvBBGCXRDV0dS2awzuT9I/n7doazY1unLqQ/og6whqDJhMjn8oH+Co695aDtYHfkuelD3ehUc6zqQtBYXoZ2rA7KHEt7doZ+H3qIvoi4ghrG3ReLnJYXYAmm3MIq6HoLOVk8gwr0Gj6SbRamtpMFJ5vJ/h8EHA7wc7QRhxhhSu4i3HAV4CnUheCvqwORyt/b0'+
			'5cS1/MQ4GRS4vkrdFqXOQGj+ugC3OzFy2wLkErSNE8xeLbdXKwPvAAOkIT1aNou0UuH7QPAT8F3pK6kH64B9Wfy9GpHkV6JNwC7faO5AnUBXMkeYTVSNTu+RFihxXozOJktIcrh0Z9vwZWRZtgo+0w3wY1PcxepBHWdWiyPYJX0GUPl5HHI+ww9Ch6SupCStJCQXEJOnSdg0vQtpBIE/PZNwWIFFhRCj0BXfWew8ZH0AjvImJ3Ue2NFuoM8QnUOTYHI4Bz0FaRCD6JeuJnK0pgbYHmXHJ2A/oLzyGoOtAVWJcTv0Fhf9yE+qH/K3EdndZAe7lGkfcoJvtNpVHmsLYh33mBh1Crlf3II6xAI6qJNDOsQL2u/olGNzmYAmwFbId67ucq+2vSogTWDPKbC5gM7IQOyj6duJZO+6PD34ekLiQDQ9A9f8+gP5ccfn7uQfu3'+
			'DkAnHHIzlfQH0N9QlMDK4Yet03T0AVgX+AN5zK2tj0YU0e/kK8MI9OcyAY2Ec3A16i7yjdSFLGFN9HOUrSiBlUOHTVDz/1XJ5yDscPTD/yixNy5WYR20H+5H6JRBDs5AR30uTl3IIn9HP9/ZihJY00h7MHgcmizN6fDrwejP5RPkPZGbmy+ix8QjUheyyCy0JWNZNGJPaTp5nMLoUZTAegqt/FTtFjRy+WiC9+7JB1BzuR8mriOyZdBV8JPQPGQOgT+bxXOiDyWq4WLy+LPoUZRtDaD5h3FUc1jzSdTWZGIF79VbI9A2hd0T11FHd6DuCzkdTfkAamZY1bzbFDSHlbUoIyzQcvDhlLu68iR6xFqLfMKqAzgdeAyHVVl2AF5G7ahzMR61/DkQPfqX6XmCnNGNNMLqtBnahLcuxQ1fZ7P4soec/kC2R9/+WQ/Ta2Y2+t'+
			'LKpRtEp1PReb9lSnjt0egsZPYijbA6/QV9kC+m/euhZgHHo70x55JPWL0b3dt3Jw6rqg0DfoF2fW+SuJaujkU75ou8MPVB9FkKEVYQc4TV1TvQru49+/jrHkePl7cUXlF7BqEfyEOI+WVSR1egC0pT3524pDPRAfv+mLPo159GPqvevRI9sDqthr4pRqEWKiujTpoL0F/Ic+hc2YOoJez0JFX2bDDwWdRMr+6HlCOagQ61n5W6kG7sir6wN0f3G6zSzX8zF20InYh2219L5tsXelKXwOrUgUYmAxf9e2vRP6+Rz+PektZGrWrXTFyHLd0rwI7AX1MX0o1BaH5rIPqyHo5+7qey+DMwl3zP5PZK3QIrkrehEVWI1Zk+mo3mGjcmfqPA7tyINp5OSV1I03ieJI1jUNfPOobVy+jasm2B95BPC+Mi7Y2umDs9dSFN4xFW'+
			'dTpQm5xf0P08Q3Svod/bx7r5/76DQrroa+5z8BxawLmBPC59rTWPsKqxFvqBHk89w+pRNKrqqbPmSagJ451VFVShzsPwdwMbJa6l9hxY5RoGfBc9Fu2DVgPrZC66Y3FjtJenp37qLfQIvAPasjGjkuqq0wFsic54XgYsn7SaGvMjYTkGoEejU9AqYB09hG6uHt+PX/t2tN/sI0UWlJGpaFR5dupC6saBVbxVgFuBTVMXUqJvocBpZ6Q0GN2FdwWxLnLti+fRHqkHUxdSF34kLM6KaGPhc9QzrBYC9wMbonNt7T7WzQd+ic6EXrHof9fNKujylJvRqNLa5BFWMf4T+DZqAVNHM9Go6tJF/16GHVFwjSzp9VObjw7XH526kMgcWO1ZG6185dIrvAx/Rb2ZXq3o/S4ADqvovVKYh+Y3c+sGEYIfCftnBBptTKa+YfUiml'+
			'TfjOrCCrSnaSu04lZHQ9Cj8J/I/IaaHHmE1XffRKfkV0pdSIluRr2XHiPdGcw3AV9Bj6J13HAK2mh6FQrp3A7kZ8mB1Xtbob7yb01dSIleQGfkcrqufF10M9Co1IWUaA6a2/p+6kJy50fCpVsbHTn5b+odVlegs385hRVolLclGoW8lLiWsgxFc3ePoc211gOPsHo2GHUj/TJq1VFX04H9gNtSF9ILa6CVtr1TF1KiheiR/AjUw826cGB178PAJdTz3F9XV6FLDqLtgdoHNaGr21GnrrwNohsOrNfbCPWK345691KfhPaO3U7P5/9ytzy6xXkf6h1crwAHAb/C3SA8h7XISmgO4QHgfdQ3rOYC56A5oduIG1agrRYHoD1Nk9KWUqoVgOvRl0udFx56xSMsNdE7k/qfsJ8MjEGdQOtmKArig6n3l/AC9Ch8APm2/C5V'+
			'nf9y30gHuhL8YTRXtXzSaso1FV0Qui71DCvQtoBDgd3QQePII8c3MhDdmTgbfdHWdX9aj5oYWGsCP0bbFDZMW0rp7kAf4mNSF1KR24Gd0LnO0JctLMUy6Iv2Hvp+xV1oTXskPBbt4K7zLvVOhwFjCXbvXIHWRPdObpC4jrItQF9M+1HtEaokmhJY26EWxXXfpgBaONgLeDZ1IZn4OmqmNyR1IRU4ATiZGo8u6/5IuB5wHfBH6h9Wz6Gzd9vjsOrqDDTKuj11IRU4Hl2Q2t1FILVQ5xHWGeiK8TelLqQCN6KRxCQaunrUCwOAz6OruZowJfAn4IvA31IXUqQ6BtbewOXUe+Wv04toVPVTHFS9tTrwPWo8ClnC1WhFsRZzmXUKrLXRPFUd2xMvaQEwDp03ey5xLRF1oNW1H6NruuquhRZhfkLwG4vqMIc1Au1Sn0z9w6'+
			'oFTESjg/1xWPVXC11LtinaHjArbTml6wAuRHO5exL4KFPkEdZgtFnwGOrbS72ruajL6SnAM4lrqZPBwM5obmuTxLVUYR7a7vEN9OUXStTA2gz4GbB+4jqq8gw6VnN36kJqbDjacHo09T1L2tV0NOo6lkDzn9ECazU0Yfrx1IVUZBZqrPel1IU0yGZobmvzxHVU5VXUYugXievolShzWMuib75/0JywegAYjcOqan8BtkW9+19NWkk1lkeLVfcAG6ctZekijLA+iK783oBmDNVfQ7uVz6AmS9GBbYRG9LsQ58u9XZcAx5Hpgk7OgbUOahkymmYEFehb7lB0F6DlYRjwKXTs5W2Ja6nKy6jDx3lokj4buQbWueiD24TzX52+jCZB69oaJbrVgR+g9tlN8QTwGbQdIgs5BdYQ1ArlBgLvE+mjhah/02jg+cS1WO+MQSOP'+
			'1VIXUqHfoOaIT6UuJIfn8gGoZe9v0L1/TQmrp9FemC1xWEUyDrUqHktmj0sl2gOYgA5XL5eykNQjrBHAd4DPobmCprgW/b7/mboQa8sewFnUvxFkV08DX0X7ICuXMrA+guaq3pGqgAReROf/rk5diBVmZbT58hC0/aYp7kTdLx6v8k1TBdaF6C94YIo3T6CFOip8jUyXi60tA9FtS2egR/ymmIe6hVxKRY/HVQfWUOAPwNZVvmliU4GPEuNmZWvPcqgrwmmpC6nYDWg1cWbZb1RlYK2H+lRtW9UbJjYbTdB+JnUhVrm1gZ+jm5maYgqayyu180VVq4Qro148TQirhWjj58dxWDXV4+gR8UhgWtpSKrMGmpBfo8w3qWqE9RDwnireKLGZaHPhaeiKcbM1gIvREbMm+Bs6GfD3Ml687BHWMOBUmhFW9wMfQr3VHVbWaQ'+
			'ra/nAw2jled5ugbhelKHuEdRBaQaizV4DzF/3zcuJaLG/roK4jh6QupAKXo20PhSozsJZHrTpKfaZN7E70A/gg6rNutjQDgA8AV1L/4z37oRXEwpT1SDgQ7eSua1i9hvZU7YmuU3JYWW8tBH4PrIvuIpibtpxSHQ+sVeQLlhVY7wMOKOm1U7sL9Uk6mwr2nVhtzUYdOnYAHk1cS1k2QU8ghSkrsL5A/W5anocmTncmYPN+y9Z9qNPnScCcxLWU4VMUuB+tjDmsDmA+9Tl2Mx+Nqsbg1T8r16ZoC0TdToKMRQtwbStjhDWG+oTVZHTUYmccVla+vwK7orZDdVpxLmwDdRmBVYdLIuahnfk7Aj9KXIs1ywzgTGAr6nP+dBCwVxEvVEZgbVXCa1ZpAnru/izwZOJarJlawGOoA+9h1GPD6f5FvEjRgfVe4j4OTkfHanYH'+
			'rktci1mnC9GxnkuJvQWikHm5ogNrBDEvUfgz8GngKOB/EtditqSJaHf8x6m4YV6BBlPA01fRgTUH3S4SydnoEogbif0NZvW2EP2Mbo9WEqP9rA4AVijiRYqUtEF9Hz2IVv+ORm0xzCJ4Gm043Q/dDh7F6sBLtHnHaNGBNRR4tuDXLNprqKPCruiIRDb3nJn10nzgFmBv4LtpS+m1FrAmbX7eig6se9E8Vq7uR5vzzsT7qiy2FhptnYiOwPw5bTlL9SwaYbWljBHWfQW/ZhGmAt8EtgMeSVyLWZFaqFneKHQgP9cv4pUoYMGg6MCagPaP5OR3aKLydDSUNqujBWgBaTvg9sS1dOc2CuhqUsbG0StLeM3+OhBNTpbSrtUsQ4+iVe+DyOcw9Tx0zX3bG7HLCKyJ6Nr5lG4FVkVdD90CxppmDnAZur3n5sS1AAxBA5m2Vg'+
			'ihnMB6AgVFiq0CL6A+XLsDz+MVQGuuFvAMOsP3YdIepv4JWhRo+/NYVj+sa1GRVboGNdbzNfBmr3cTMBK4gupPojwFnEVB9xWWeWvOmagFbNleQN8gn1z072b272YBn0M3+FR1vKeFWqX/s6gXLDOwXkZ9fS6g+Mm/zqHlD9Fz+k0Fv75ZXd0KbIZWFMs0AzgGzaXNK+pFq7pI9XCUtCvSXki20G9+PHAEBSa3WQO9E02Gb456VhWhheaPTwAuKug1/19VgQWaXzoO2JfFfzi9WTVoLfrvpgLXo0fNCWUUaNZQu6ALjzdHA4r+rOZ1fk7vA45Et0kVPl9WZWB1ehcKrT3RMZnl6Pk3NgW4A03i30FBE3dm1q2NgK+gz+cKvH5Vr7sQ6wypFvAw6t11DRpclCJFYHU1HM1BjUTX2ncA09CWiEnoKiQzq9YgdD7xg6gp'+
			'57vQGeHOEJuBPqMT0fnc8cDdVHA/Z+rAMjPrtTJXCc3MCuXAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWG'+
			'YWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRj/B97bAOXmjYO6AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_5.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_arrow') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_5.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_5.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_5.style.transition='left 500ms linear 0ms, top 500ms linear 0ms, width 0s, height 0s';
				if (me._image_5.ggCurrentLogicStatePosition == 0) {
					me._image_5.style.left = 'calc(50% - (100% / 2))';
					me._image_5.style.top='10px';
				}
				else {
					me._image_5.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._image_5.style.top='-5px';
				}
			}
		}
		me._image_5.logicBlock_position();
		me._image_5.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_5.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_5.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_5.style.transition='left 500ms linear 0ms, top 500ms linear 0ms, width 0s, height 0s';
				if (me._image_5.ggCurrentLogicStateSize == 0) {
					me._image_5.style.width='80%';
					me._image_5.style.height='80%';
					me._image_5.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me._image_5);
				}
				else {
					me._image_5.style.width='100%';
					me._image_5.style.height='100%';
					me._image_5.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me._image_5);
				}
			}
		}
		me._image_5.logicBlock_size();
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._external_2.appendChild(me._image_5);
		el=me._text_30=document.createElement('div');
		els=me._text_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_30.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_30.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_30.ggUpdateText();
		});
		el.appendChild(els);
		me._text_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_30.ggUpdatePosition=function (useTransition) {
		}
		me._external_2.appendChild(me._text_30);
		me.__2.appendChild(me._external_2);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._image_5.logicBlock_position();
		me._image_5.logicBlock_size();
			me.ggEvent_changenode=function() {
				me._image_5.logicBlock_position();
			};
			me.ggEvent_configloaded=function() {
				me._image_5.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._image_5.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_arrow=function() {
				me._image_5.logicBlock_position();
			};
			me.__div = me.__2;
	};
	function SkinHotspotClass__3(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__3=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c \ud770\uc0c9-\uaebd\uc740\uc120";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__3.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_3']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_3']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_20=document.createElement('div');
		els=me._external_20__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_20.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_20.ggSubElement.setAttribute('alt', player._(me._external_20.ggAltText));
			me._external_20.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_20.ggText_untranslated = img;
			me._external_20.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_20.ggSubElement.style.width = '0px';
			me._external_20.ggSubElement.style.height = '0px';
			me._external_20.ggSubElement.src='';
			me._external_20.ggSubElement.src=me._external_20.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_20.ggText != player._(me._external_20.ggText_untranslated)) {
				me._external_20.ggText = player._(me._external_20.ggText_untranslated);
				me._external_20.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_20.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._external_20.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_20.clientWidth;
			var parentHeight = me._external_20.clientHeight;
			var img = me._external_20__img;
			var aspectRatioDiv = me._external_20.clientWidth / me._external_20.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_20.ggScrollbars || currentWidth < me._external_20.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_20.ggScrollbars || currentHeight < me._external_20.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_50=document.createElement('div');
		els=me._image_50__img=document.createElement('img');
		els.className='ggskin ggskin_image_50';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_50.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_arrow') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_50.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_50.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_50.style.transition='left 500ms linear 0ms, top 500ms linear 0ms, width 0s, height 0s';
				if (me._image_50.ggCurrentLogicStatePosition == 0) {
					me._image_50.style.left = 'calc(50% - (100% / 2))';
					me._image_50.style.top='-5px';
				}
				else {
					me._image_50.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._image_50.style.top='-5px';
				}
			}
		}
		me._image_50.logicBlock_position();
		me._image_50.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_50.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_50.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_50.style.transition='left 500ms linear 0ms, top 500ms linear 0ms, width 0s, height 0s';
				if (me._image_50.ggCurrentLogicStateSize == 0) {
					me._image_50.style.width='80%';
					me._image_50.style.height='80%';
					me._image_50.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me._image_50);
				}
				else {
					me._image_50.style.width='100%';
					me._image_50.style.height='100%';
					me._image_50.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me._image_50);
				}
			}
		}
		me._image_50.logicBlock_size();
		me._image_50.ggUpdatePosition=function (useTransition) {
		}
		me._external_20.appendChild(me._image_50);
		el=me._text_31=document.createElement('div');
		els=me._text_31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_31.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_31.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_31.ggUpdateText();
		});
		el.appendChild(els);
		me._text_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_31.ggUpdatePosition=function (useTransition) {
		}
		me._external_20.appendChild(me._text_31);
		me.__3.appendChild(me._external_20);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_20.style.width=hotspot.customimagewidth + 'px';
			me._external_20.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_20.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_20.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._image_50.logicBlock_position();
		me._image_50.logicBlock_size();
			me.ggEvent_changenode=function() {
				me._image_50.logicBlock_position();
			};
			me.ggEvent_configloaded=function() {
				me._image_50.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._image_50.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_arrow=function() {
				me._image_50.logicBlock_position();
			};
			me.__div = me.__3;
	};
	function SkinHotspotClass__4(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__4=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c \ud770\uc0c9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__4.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_4']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_4']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_21=document.createElement('div');
		els=me._external_21__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_21.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_21.ggSubElement.setAttribute('alt', player._(me._external_21.ggAltText));
			me._external_21.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_21.ggText_untranslated = img;
			me._external_21.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_21.ggSubElement.style.width = '0px';
			me._external_21.ggSubElement.style.height = '0px';
			me._external_21.ggSubElement.src='';
			me._external_21.ggSubElement.src=me._external_21.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_21.ggText != player._(me._external_21.ggText_untranslated)) {
				me._external_21.ggText = player._(me._external_21.ggText_untranslated);
				me._external_21.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_21.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._external_21.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_21.clientWidth;
			var parentHeight = me._external_21.clientHeight;
			var img = me._external_21__img;
			var aspectRatioDiv = me._external_21.clientWidth / me._external_21.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_21.ggScrollbars || currentWidth < me._external_21.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_21.ggScrollbars || currentHeight < me._external_21.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_51=document.createElement('div');
		els=me._image_51__img=document.createElement('img');
		els.className='ggskin ggskin_image_51';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQG'+
			'AAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6c'+
			'wR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCa'+
			'IkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj'+
			'9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj'+
			'1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisr'+
			'kw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUO'+
			'ihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNI'+
			'Uk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAACxMAAAsTAQCanBgAABkASURBVHic7d13lF1lvcbx76SRIFGaEMFIFwEpgqGKSBcMghAVxQoKFy8IoqigiPRLkyaCggEEQSGgCKLCQgN4KVKsQEwImAuX3tIbybl/PJmbIc6QmTl77/f97f181mItXJJzfknmPOfdb/m9Ha1WCzOzCAakLsDMrLccWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFo'+
			'YDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWXt2gmYAMwFXgNaXf5ZAMwDpgPjgLUS1Wg10dFqtVLXYPGsBPwK2Lafv/4uYH/g6cIqskZwYFlfrIKCaquCXu9eYF/gmYJez2rOgWW99Q9go5Je+y/A7sDzJb2+1YQDy5bmfuC9Fb3XZGALYGpF72fBeNLdurMi8Ds0cV5VWAGsA7wK/AnNk5m9'+
			'jgPLuhqCguolYLeEdYwCXgTGA6smrMMy40dCA+gAbgI+lLqQHjyERnr+YW04j7CabRm06reQfMMKYHNU4wOpC7G0HFjNtCwKqjnAXolr6Yst0Cjrj8BbEtdiCTiwmmUocAUwk1hBtaTt0OT8HcDKaUuxKjmwmmEYcDEwG/hM4lqK9H7gBeBGtLJpNedJ9/obC3yWZnw5/Rr4JDAtdSFWDgdWPQ0EzgcORSuATdICbkM7561mmvCt2ySDgPNQ14Qv0bywAv2ed0PB9UtgeNJqrFAeYdXHRcAhNDOklua3wGjU7sYC8wgrvtPQHqX/wGHVkw+iUeetqQux9jiwYhoAnADMB76Jg6q3dkXhfj06hmTB+JEwnuOAE1MXURO3kPcOf1uCAyuOI4FzUhdRU+OAj6YuwpbOj4R5GwAchR5jHFblGYNWFa9B5ystUw6sfB2IVr'+
			'XOJt4c1W1oW0U0+6PzldemLsS650fC/HwOuATtqYrmRWBdXt8x9ErgU2nKadvlwOdTF2GLObDy8WngJ6mL6Kc5wA6oU2h3lkONAft7y05qPyVu6NaKHwnTG4Me/SKG1Xx0dm8YPYcVwAzUYWFNYGL5ZRXuADTHdWnqQprOgZXOx9Cj03XE/Hs4Du1luqYPv2YKsD6wCQq7aA5CCyA/Jt68Yi34kbB6HwGuRr2pIhqHWtTMbvN1BqA7Ca9ru6I0FqLeYgemLqRJIn6zR/VhdO/eDcQMq4eA9dB+pXbDCvSBH4cWF05ER2ciGYAm5Ftoy8ngtOU0g0dY5dsXNc97a+pC+ulxtCBwd8nvMxxt4fhiye9Tlvlojivido4wHFjl6EDn1q4hbifMuWiy+fqK33ck2tYRuZ/VqcDJFDMStS4cWMXbFe3fWS1xHf01B3WAOIm0'+
			'12ptiPpZrZewhnYsBM4CvpG6kDpxYBWjA9gSXYoQ9WhHC42mcjtTNxp9AUS+CfpYFF4RV0az4kn39m2OLkK4l7hhdRewCvmFFcDNaP7vC2g/V0SnokfsE4m54JINj7D6bwPgPmK34H0OXQv/ZOpC+uB04Oupi2jTyWgfm/WRR1h9txEwCXiE2GG1I/A2YoUVaE5oRXS1V1TfRnOFx+MNqH3iwOq9LYBHgX+gA74RzQS+hj4k40k7qd6OV4B90N/DHWlL6bdlgO+ix9yT0pYShx8Jl+7daDL6nakLadO56FGqjhO/o1BXiPVTF9KmI4Hv48syeuTA6tmGwM9RYEW1EPWm2heYlbiWKuyN9r4NS11IG+ajVcVzibf7v3QOrH/3ZmACmt+J7BlgU7SC2TRHAWegC2Uj+zJwQeoicuI5rMXeiVb9phI7rP4XbV5djWaGFc'+
			'D30BfPWakLadP5aGT8rdSF5MIjLFgLdU/YOnUhbVqA9ipdnriO3KyCznLuQ+wVuYXAEcCPgHmJa0mmyYG1OurdHbULZqd56Jv46NSFZO7t6CLVDVIX0qY5aPHkBzRwcr6JgTUc7ezeNHUhBbgZ9dfy5GzvjQJ+TdzuGV0dBIxNXUSVmhRYqwGXofmdyI8GAH9El1VMTlxHp6HA+9GV8BugHu4LgWnAv9AXxG1o/1QOBgB7ocPV0U1HG1HPT11IFZoQWKujdiV7pC6kAJNQUJXdm6o3VkfdNg9Gj1u9MQcF11h0KUUO7VdORXNDy6YupE1zUC+uq6jnXjug3oG1DHATGlFFNx810ft56kLQHqcrgf3afJ0FwDHAhaTfIzYUuAj1/4reOXQOcCgKrtpNFdQxsIaiNsR1GFG10CbC80g/GhmEAuZYiu048Ar6gOUQxm9G'+
			'81vvS11IAeah7q0Rb2PqUZ32Yb0VfavMoh5h9QNgZeC/SB9Wo4EnKKc9ygrAz4A/k/5UwTRge+C96MxoZEPQJRnTqNFlsHUYYQ0EvrPonzp4EG21yGGvzVpo5DOqwve8Cu0nm1vhe/ZkD7TvqbdzdLnbBvVtCyt6YI1Ee2velbqQAkwE9kcjjRyMRRP8KVZUZ6I2MheTx16jj5HHI2sR7kXBFVLkR8LtgYeJH1Yvol3Y65M+rAai0Ox8jEi1/eNNqGvBBGCXRDV0dS2awzuT9I/n7doazY1unLqQ/og6whqDJhMjn8oH+Co695aDtYHfkuelD3ehUc6zqQtBYXoZ2rA7KHEt7doZ+H3qIvoi4ghrG3ReLnJYXYAmm3MIq6HoLOVk8gwr0Gj6SbRamtpMFJ5vJ/h8EHA7wc7QRhxhhSu4i3HAV4CnUheCvqwORyt/b0'+
			'5cS1/MQ4GRS4vkrdFqXOQGj+ugC3OzFy2wLkErSNE8xeLbdXKwPvAAOkIT1aNou0UuH7QPAT8F3pK6kH64B9Wfy9GpHkV6JNwC7faO5AnUBXMkeYTVSNTu+RFihxXozOJktIcrh0Z9vwZWRZtgo+0w3wY1PcxepBHWdWiyPYJX0GUPl5HHI+ww9Ch6SupCStJCQXEJOnSdg0vQtpBIE/PZNwWIFFhRCj0BXfWew8ZH0AjvImJ3Ue2NFuoM8QnUOTYHI4Bz0FaRCD6JeuJnK0pgbYHmXHJ2A/oLzyGoOtAVWJcTv0Fhf9yE+qH/K3EdndZAe7lGkfcoJvtNpVHmsLYh33mBh1Crlf3II6xAI6qJNDOsQL2u/olGNzmYAmwFbId67ucq+2vSogTWDPKbC5gM7IQOyj6duJZO+6PD34ekLiQDQ9A9f8+gP5ccfn7uQfu3'+
			'DkAnHHIzlfQH0N9QlMDK4Yet03T0AVgX+AN5zK2tj0YU0e/kK8MI9OcyAY2Ec3A16i7yjdSFLGFN9HOUrSiBlUOHTVDz/1XJ5yDscPTD/yixNy5WYR20H+5H6JRBDs5AR30uTl3IIn9HP9/ZihJY00h7MHgcmizN6fDrwejP5RPkPZGbmy+ix8QjUheyyCy0JWNZNGJPaTp5nMLoUZTAegqt/FTtFjRy+WiC9+7JB1BzuR8mriOyZdBV8JPQPGQOgT+bxXOiDyWq4WLy+LPoUZRtDaD5h3FUc1jzSdTWZGIF79VbI9A2hd0T11FHd6DuCzkdTfkAamZY1bzbFDSHlbUoIyzQcvDhlLu68iR6xFqLfMKqAzgdeAyHVVl2AF5G7ahzMR61/DkQPfqX6XmCnNGNNMLqtBnahLcuxQ1fZ7P4soec/kC2R9/+WQ/Ta2Y2+t'+
			'LKpRtEp1PReb9lSnjt0egsZPYijbA6/QV9kC+m/euhZgHHo70x55JPWL0b3dt3Jw6rqg0DfoF2fW+SuJaujkU75ou8MPVB9FkKEVYQc4TV1TvQru49+/jrHkePl7cUXlF7BqEfyEOI+WVSR1egC0pT3524pDPRAfv+mLPo159GPqvevRI9sDqthr4pRqEWKiujTpoL0F/Ic+hc2YOoJez0JFX2bDDwWdRMr+6HlCOagQ61n5W6kG7sir6wN0f3G6zSzX8zF20InYh2219L5tsXelKXwOrUgUYmAxf9e2vRP6+Rz+PektZGrWrXTFyHLd0rwI7AX1MX0o1BaH5rIPqyHo5+7qey+DMwl3zP5PZK3QIrkrehEVWI1Zk+mo3mGjcmfqPA7tyINp5OSV1I03ieJI1jUNfPOobVy+jasm2B95BPC+Mi7Y2umDs9dSFN4xFW'+
			'dTpQm5xf0P08Q3Svod/bx7r5/76DQrroa+5z8BxawLmBPC59rTWPsKqxFvqBHk89w+pRNKrqqbPmSagJ451VFVShzsPwdwMbJa6l9hxY5RoGfBc9Fu2DVgPrZC66Y3FjtJenp37qLfQIvAPasjGjkuqq0wFsic54XgYsn7SaGvMjYTkGoEejU9AqYB09hG6uHt+PX/t2tN/sI0UWlJGpaFR5dupC6saBVbxVgFuBTVMXUqJvocBpZ6Q0GN2FdwWxLnLti+fRHqkHUxdSF34kLM6KaGPhc9QzrBYC9wMbonNt7T7WzQd+ic6EXrHof9fNKujylJvRqNLa5BFWMf4T+DZqAVNHM9Go6tJF/16GHVFwjSzp9VObjw7XH526kMgcWO1ZG6185dIrvAx/Rb2ZXq3o/S4ADqvovVKYh+Y3c+sGEYIfCftnBBptTKa+YfUiml'+
			'TfjOrCCrSnaSu04lZHQ9Cj8J/I/IaaHHmE1XffRKfkV0pdSIluRr2XHiPdGcw3AV9Bj6J13HAK2mh6FQrp3A7kZ8mB1Xtbob7yb01dSIleQGfkcrqufF10M9Co1IWUaA6a2/p+6kJy50fCpVsbHTn5b+odVlegs385hRVolLclGoW8lLiWsgxFc3ePoc211gOPsHo2GHUj/TJq1VFX04H9gNtSF9ILa6CVtr1TF1KiheiR/AjUw826cGB178PAJdTz3F9XV6FLDqLtgdoHNaGr21GnrrwNohsOrNfbCPWK345691KfhPaO3U7P5/9ytzy6xXkf6h1crwAHAb/C3SA8h7XISmgO4QHgfdQ3rOYC56A5oduIG1agrRYHoD1Nk9KWUqoVgOvRl0udFx56xSMsNdE7k/qfsJ8MjEGdQOtmKArig6n3l/AC9Ch8APm2/C5V'+
			'nf9y30gHuhL8YTRXtXzSaso1FV0Qui71DCvQtoBDgd3QQePII8c3MhDdmTgbfdHWdX9aj5oYWGsCP0bbFDZMW0rp7kAf4mNSF1KR24Gd0LnO0JctLMUy6Iv2Hvp+xV1oTXskPBbt4K7zLvVOhwFjCXbvXIHWRPdObpC4jrItQF9M+1HtEaokmhJY26EWxXXfpgBaONgLeDZ1IZn4OmqmNyR1IRU4ATiZGo8u6/5IuB5wHfBH6h9Wz6Gzd9vjsOrqDDTKuj11IRU4Hl2Q2t1FILVQ5xHWGeiK8TelLqQCN6KRxCQaunrUCwOAz6OruZowJfAn4IvA31IXUqQ6BtbewOXUe+Wv04toVPVTHFS9tTrwPWo8ClnC1WhFsRZzmXUKrLXRPFUd2xMvaQEwDp03ey5xLRF1oNW1H6NruuquhRZhfkLwG4vqMIc1Au1Sn0z9w6'+
			'oFTESjg/1xWPVXC11LtinaHjArbTml6wAuRHO5exL4KFPkEdZgtFnwGOrbS72ruajL6SnAM4lrqZPBwM5obmuTxLVUYR7a7vEN9OUXStTA2gz4GbB+4jqq8gw6VnN36kJqbDjacHo09T1L2tV0NOo6lkDzn9ECazU0Yfrx1IVUZBZqrPel1IU0yGZobmvzxHVU5VXUYugXievolShzWMuib75/0JywegAYjcOqan8BtkW9+19NWkk1lkeLVfcAG6ctZekijLA+iK783oBmDNVfQ7uVz6AmS9GBbYRG9LsQ58u9XZcAx5Hpgk7OgbUOahkymmYEFehb7lB0F6DlYRjwKXTs5W2Ja6nKy6jDx3lokj4buQbWueiD24TzX52+jCZB69oaJbrVgR+g9tlN8QTwGbQdIgs5BdYQ1ArlBgLvE+mjhah/02jg+cS1WO+MQSOP'+
			'1VIXUqHfoOaIT6UuJIfn8gGoZe9v0L1/TQmrp9FemC1xWEUyDrUqHktmj0sl2gOYgA5XL5eykNQjrBHAd4DPobmCprgW/b7/mboQa8sewFnUvxFkV08DX0X7ICuXMrA+guaq3pGqgAReROf/rk5diBVmZbT58hC0/aYp7kTdLx6v8k1TBdaF6C94YIo3T6CFOip8jUyXi60tA9FtS2egR/ymmIe6hVxKRY/HVQfWUOAPwNZVvmliU4GPEuNmZWvPcqgrwmmpC6nYDWg1cWbZb1RlYK2H+lRtW9UbJjYbTdB+JnUhVrm1gZ+jm5maYgqayyu180VVq4Qro148TQirhWjj58dxWDXV4+gR8UhgWtpSKrMGmpBfo8w3qWqE9RDwnireKLGZaHPhaeiKcbM1gIvREbMm+Bs6GfD3Ml687BHWMOBUmhFW9wMfQr3VHVbWaQ'+
			'ra/nAw2jled5ugbhelKHuEdRBaQaizV4DzF/3zcuJaLG/roK4jh6QupAKXo20PhSozsJZHrTpKfaZN7E70A/gg6rNutjQDgA8AV1L/4z37oRXEwpT1SDgQ7eSua1i9hvZU7YmuU3JYWW8tBH4PrIvuIpibtpxSHQ+sVeQLlhVY7wMOKOm1U7sL9Uk6mwr2nVhtzUYdOnYAHk1cS1k2QU8ghSkrsL5A/W5anocmTncmYPN+y9Z9qNPnScCcxLWU4VMUuB+tjDmsDmA+9Tl2Mx+Nqsbg1T8r16ZoC0TdToKMRQtwbStjhDWG+oTVZHTUYmccVla+vwK7orZDdVpxLmwDdRmBVYdLIuahnfk7Aj9KXIs1ywzgTGAr6nP+dBCwVxEvVEZgbVXCa1ZpAnru/izwZOJarJlawGOoA+9h1GPD6f5FvEjRgfVe4j4OTkfHanYH'+
			'rktci1mnC9GxnkuJvQWikHm5ogNrBDEvUfgz8GngKOB/EtditqSJaHf8x6m4YV6BBlPA01fRgTUH3S4SydnoEogbif0NZvW2EP2Mbo9WEqP9rA4AVijiRYqUtEF9Hz2IVv+ORm0xzCJ4Gm043Q/dDh7F6sBLtHnHaNGBNRR4tuDXLNprqKPCruiIRDb3nJn10nzgFmBv4LtpS+m1FrAmbX7eig6se9E8Vq7uR5vzzsT7qiy2FhptnYiOwPw5bTlL9SwaYbWljBHWfQW/ZhGmAt8EtgMeSVyLWZFaqFneKHQgP9cv4pUoYMGg6MCagPaP5OR3aKLydDSUNqujBWgBaTvg9sS1dOc2CuhqUsbG0StLeM3+OhBNTpbSrtUsQ4+iVe+DyOcw9Tx0zX3bG7HLCKyJ6Nr5lG4FVkVdD90CxppmDnAZur3n5sS1AAxBA5m2Vg'+
			'ihnMB6AgVFiq0CL6A+XLsDz+MVQGuuFvAMOsP3YdIepv4JWhRo+/NYVj+sa1GRVboGNdbzNfBmr3cTMBK4gupPojwFnEVB9xWWeWvOmagFbNleQN8gn1z072b272YBn0M3+FR1vKeFWqX/s6gXLDOwXkZ9fS6g+Mm/zqHlD9Fz+k0Fv75ZXd0KbIZWFMs0AzgGzaXNK+pFq7pI9XCUtCvSXki20G9+PHAEBSa3WQO9E02Gb456VhWhheaPTwAuKug1/19VgQWaXzoO2JfFfzi9WTVoLfrvpgLXo0fNCWUUaNZQu6ALjzdHA4r+rOZ1fk7vA45Et0kVPl9WZWB1ehcKrT3RMZnl6Pk3NgW4A03i30FBE3dm1q2NgK+gz+cKvH5Vr7sQ6wypFvAw6t11DRpclCJFYHU1HM1BjUTX2ncA09CWiEnoKiQzq9YgdD7xg6gp'+
			'57vQGeHOEJuBPqMT0fnc8cDdVHA/Z+rAMjPrtTJXCc3MCuXAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWG'+
			'YWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRj/B97bAOXmjYO6AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_51.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_arrow') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_51.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_51.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_51.style.transition='left 500ms linear 0ms, top 500ms linear 0ms, width 0s, height 0s';
				if (me._image_51.ggCurrentLogicStatePosition == 0) {
					me._image_51.style.left = 'calc(50% - (100% / 2))';
					me._image_51.style.top='10px';
				}
				else {
					me._image_51.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._image_51.style.top='-5px';
				}
			}
		}
		me._image_51.logicBlock_position();
		me._image_51.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_51.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_51.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_51.style.transition='left 500ms linear 0ms, top 500ms linear 0ms, width 0s, height 0s';
				if (me._image_51.ggCurrentLogicStateSize == 0) {
					me._image_51.style.width='80%';
					me._image_51.style.height='80%';
					me._image_51.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me._image_51);
				}
				else {
					me._image_51.style.width='100%';
					me._image_51.style.height='100%';
					me._image_51.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me._image_51);
				}
			}
		}
		me._image_51.logicBlock_size();
		me._image_51.ggUpdatePosition=function (useTransition) {
		}
		me._external_21.appendChild(me._image_51);
		el=me._text_32=document.createElement('div');
		els=me._text_32__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_32.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_32.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_32.ggUpdateText();
		});
		el.appendChild(els);
		me._text_32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_32.ggUpdatePosition=function (useTransition) {
		}
		me._external_21.appendChild(me._text_32);
		me.__4.appendChild(me._external_21);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_21.style.width=hotspot.customimagewidth + 'px';
			me._external_21.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_21.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_21.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._image_51.logicBlock_position();
		me._image_51.logicBlock_size();
			me.ggEvent_changenode=function() {
				me._image_51.logicBlock_position();
			};
			me.ggEvent_configloaded=function() {
				me._image_51.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._image_51.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_arrow=function() {
				me._image_51.logicBlock_position();
			};
			me.__div = me.__4;
	};
	function SkinHotspotClass__20(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__20=document.createElement('div');
		el.ggId="\uaebd\uc740\uc1202";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__20.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_20']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_20']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_22=document.createElement('div');
		els=me._external_22__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_22.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_22.ggSubElement.setAttribute('alt', player._(me._external_22.ggAltText));
			me._external_22.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_22.ggText_untranslated = img;
			me._external_22.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_22.ggSubElement.style.width = '0px';
			me._external_22.ggSubElement.style.height = '0px';
			me._external_22.ggSubElement.src='';
			me._external_22.ggSubElement.src=me._external_22.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_22.ggText != player._(me._external_22.ggText_untranslated)) {
				me._external_22.ggText = player._(me._external_22.ggText_untranslated);
				me._external_22.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_22.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._external_22.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_22.clientWidth;
			var parentHeight = me._external_22.clientHeight;
			var img = me._external_22__img;
			var aspectRatioDiv = me._external_22.clientWidth / me._external_22.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_22.ggScrollbars || currentWidth < me._external_22.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_22.ggScrollbars || currentHeight < me._external_22.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_52=document.createElement('div');
		els=me._image_52__img=document.createElement('img');
		els.className='ggskin ggskin_image_52';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:-180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_52.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_arrow') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_52.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_52.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_52.style.transition='left 500ms linear 0ms, top 500ms linear 0ms, width 0s, height 0s';
				if (me._image_52.ggCurrentLogicStatePosition == 0) {
					me._image_52.style.left = 'calc(50% - (100% / 2) + (0px / 2) + 10px)';
					me._image_52.style.top='-5px';
				}
				else {
					me._image_52.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._image_52.style.top='-5px';
				}
			}
		}
		me._image_52.logicBlock_position();
		me._image_52.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_52.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_52.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_52.style.transition='left 500ms linear 0ms, top 500ms linear 0ms, width 0s, height 0s';
				if (me._image_52.ggCurrentLogicStateSize == 0) {
					me._image_52.style.width='80%';
					me._image_52.style.height='80%';
					me._image_52.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me._image_52);
				}
				else {
					me._image_52.style.width='100%';
					me._image_52.style.height='100%';
					me._image_52.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me._image_52);
				}
			}
		}
		me._image_52.logicBlock_size();
		me._image_52.ggUpdatePosition=function (useTransition) {
		}
		me._external_22.appendChild(me._image_52);
		el=me._text_33=document.createElement('div');
		els=me._text_33__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_33.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_33.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_33.ggUpdateText();
		});
		el.appendChild(els);
		me._text_33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_33.ggUpdatePosition=function (useTransition) {
		}
		me._external_22.appendChild(me._text_33);
		me.__20.appendChild(me._external_22);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_22.style.width=hotspot.customimagewidth + 'px';
			me._external_22.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_22.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_22.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._image_52.logicBlock_position();
		me._image_52.logicBlock_size();
			me.ggEvent_changenode=function() {
				me._image_52.logicBlock_position();
			};
			me.ggEvent_configloaded=function() {
				me._image_52.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._image_52.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_arrow=function() {
				me._image_52.logicBlock_position();
			};
			me.__div = me.__20;
	};
	function SkinHotspotClass__5(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__5=document.createElement('div');
		el.ggId="\uaebd\uc740\uc120";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__5.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_5']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_5']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_23=document.createElement('div');
		els=me._external_23__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_23.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_23.ggSubElement.setAttribute('alt', player._(me._external_23.ggAltText));
			me._external_23.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_23.ggText_untranslated = img;
			me._external_23.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_23.ggSubElement.style.width = '0px';
			me._external_23.ggSubElement.style.height = '0px';
			me._external_23.ggSubElement.src='';
			me._external_23.ggSubElement.src=me._external_23.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_23.ggText != player._(me._external_23.ggText_untranslated)) {
				me._external_23.ggText = player._(me._external_23.ggText_untranslated);
				me._external_23.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_23.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._external_23.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_23.clientWidth;
			var parentHeight = me._external_23.clientHeight;
			var img = me._external_23__img;
			var aspectRatioDiv = me._external_23.clientWidth / me._external_23.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_23.ggScrollbars || currentWidth < me._external_23.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_23.ggScrollbars || currentHeight < me._external_23.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_53=document.createElement('div');
		els=me._image_53__img=document.createElement('img');
		els.className='ggskin ggskin_image_53';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:-10,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_53.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_arrow') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_53.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_53.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_53.style.transition='left 500ms linear 0ms, top 500ms linear 0ms, width 0s, height 0s';
				if (me._image_53.ggCurrentLogicStatePosition == 0) {
					me._image_53.style.left = 'calc(50% - (100% / 2) + (0px / 2) + -10px)';
					me._image_53.style.top='-5px';
				}
				else {
					me._image_53.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._image_53.style.top='-5px';
				}
			}
		}
		me._image_53.logicBlock_position();
		me._image_53.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_53.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_53.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_53.style.transition='left 500ms linear 0ms, top 500ms linear 0ms, width 0s, height 0s';
				if (me._image_53.ggCurrentLogicStateSize == 0) {
					me._image_53.style.width='80%';
					me._image_53.style.height='80%';
					me._image_53.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me._image_53);
				}
				else {
					me._image_53.style.width='100%';
					me._image_53.style.height='100%';
					me._image_53.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me._image_53);
				}
			}
		}
		me._image_53.logicBlock_size();
		me._image_53.ggUpdatePosition=function (useTransition) {
		}
		me._external_23.appendChild(me._image_53);
		el=me._text_34=document.createElement('div');
		els=me._text_34__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='line-height:10px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_34.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_34.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_34.ggUpdateText();
		});
		el.appendChild(els);
		me._text_34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_34.ggUpdatePosition=function (useTransition) {
		}
		me._external_23.appendChild(me._text_34);
		me.__5.appendChild(me._external_23);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_23.style.width=hotspot.customimagewidth + 'px';
			me._external_23.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_23.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_23.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._image_53.logicBlock_position();
		me._image_53.logicBlock_size();
			me.ggEvent_changenode=function() {
				me._image_53.logicBlock_position();
			};
			me.ggEvent_configloaded=function() {
				me._image_53.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._image_53.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_arrow=function() {
				me._image_53.logicBlock_position();
			};
			me.__div = me.__5;
	};
	function SkinElement_map_pin2_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin2=document.createElement('div');
		el.ggId="map_pin2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin2.onclick=function (e) {
			if (
				(
					((me._map_pin2.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin2.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active2=document.createElement('div');
		els=me._map_pin_active2__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active2.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateSize == 0) {
					me._map_pin_active2.style.width='18px';
					me._map_pin_active2.style.height='18px';
					me._map_pin_active2.style.left = 'calc(50% - (18px / 2))';
					me._map_pin_active2.style.top = 'calc(50% - (18px / 2))';
					skin.updateSize(me._map_pin_active2);
				}
				else {
					me._map_pin_active2.style.width='22px';
					me._map_pin_active2.style.height='22px';
					me._map_pin_active2.style.left = 'calc(50% - (22px / 2))';
					me._map_pin_active2.style.top = 'calc(50% - (22px / 2))';
					skin.updateSize(me._map_pin_active2);
				}
			}
		}
		me._map_pin_active2.logicBlock_size();
		me._map_pin_active2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active2.ggParameter.sx = 1.1;
					me._map_pin_active2.ggParameter.sy = 1.1;
					me._map_pin_active2.style.transform=parameterToTransform(me._map_pin_active2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active2);}, 250);
				}
				else {
					me._map_pin_active2.ggParameter.sx = 1;
					me._map_pin_active2.ggParameter.sy = 1;
					me._map_pin_active2.style.transform=parameterToTransform(me._map_pin_active2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active2);}, 250);
				}
			}
		}
		me._map_pin_active2.logicBlock_scaling();
		me._map_pin_active2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active2.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active2.style.visibility=me._map_pin_active2.ggVisible?'inherit':'hidden';
					me._map_pin_active2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active2.style.opacity == 0.0) { me._map_pin_active2.style.visibility="hidden"; } }, 505);
					me._map_pin_active2.style.opacity=0;
				}
			}
		}
		me._map_pin_active2.logicBlock_alpha();
		me._map_pin_active2.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active2']=true;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active2']=false;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin2.appendChild(me._map_pin_active2);
		el=me._map_pin_normal2=document.createElement('div');
		els=me._map_pin_normal2__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal2";
		el.ggDx=0;
		el.ggDy=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44px + 0px) / 2) - 20px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_pin_normal2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_pin_normal2.style.transition='left 0s, top 0s, width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStatePosition == 0) {
					me._map_pin_normal2.style.left = 'calc(50% - (38px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (44px / 2) + (0px / 2) + -10px)';
				}
				else {
					me._map_pin_normal2.style.left='calc(50% - ((38px + 0px) / 2) + 0px)';
					me._map_pin_normal2.style.top='calc(50% - ((44px + 0px) / 2) - 20px)';
				}
			}
		}
		me._map_pin_normal2.logicBlock_position();
		me._map_pin_normal2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal2.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal2.style.transition='left 0s, top 0s, width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal2.style.width='16px';
					me._map_pin_normal2.style.height='22px';
					me._map_pin_normal2.style.left = 'calc(50% - (16px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (22px / 2) + (0px / 2) + -20px)';
					skin.updateSize(me._map_pin_normal2);
				}
				else {
					me._map_pin_normal2.style.width='38px';
					me._map_pin_normal2.style.height='44px';
					me._map_pin_normal2.style.left = 'calc(50% - (38px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (44px / 2) + (0px / 2) + -20px)';
					skin.updateSize(me._map_pin_normal2);
				}
			}
		}
		me._map_pin_normal2.logicBlock_size();
		me._map_pin_normal2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal2.style.transition='left 0s, top 0s, width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal2.ggParameter.sx = 1.2;
					me._map_pin_normal2.ggParameter.sy = 1.1;
					me._map_pin_normal2.style.transform=parameterToTransform(me._map_pin_normal2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal2);}, 250);
				}
				else {
					me._map_pin_normal2.ggParameter.sx = 1;
					me._map_pin_normal2.ggParameter.sy = 1;
					me._map_pin_normal2.style.transform=parameterToTransform(me._map_pin_normal2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal2);}, 250);
				}
			}
		}
		me._map_pin_normal2.logicBlock_scaling();
		me._map_pin_normal2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal2.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal2.style.transition='left 0s, top 0s, width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal2.style.opacity == 0.0) { me._map_pin_normal2.style.visibility="hidden"; } }, 505);
					me._map_pin_normal2.style.opacity=0;
				}
				else {
					me._map_pin_normal2.style.visibility=me._map_pin_normal2.ggVisible?'inherit':'hidden';
					me._map_pin_normal2.style.opacity=1;
				}
			}
		}
		me._map_pin_normal2.logicBlock_alpha();
		me._map_pin_normal2.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal2']=true;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal2']=false;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin2.appendChild(me._map_pin_normal2);
		me._map_pin_active2.logicBlock_size();
		me._map_pin_active2.logicBlock_scaling();
		me._map_pin_active2.logicBlock_alpha();
		me._map_pin_normal2.logicBlock_position();
		me._map_pin_normal2.logicBlock_size();
		me._map_pin_normal2.logicBlock_scaling();
		me._map_pin_normal2.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active2.logicBlock_alpha();
				me._map_pin_normal2.logicBlock_alpha();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active2.logicBlock_size();
				me._map_pin_normal2.logicBlock_position();
				me._map_pin_normal2.logicBlock_size();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAB6klEQVQ4jZ2US2tTURSFv33aPOhAk2DbkY9a0/rCBw4aBBFE7x8IKFoc9F8IjnSkwxr/gEJVEGtRHKgICuJj4LPaQrwORJBS24RY0MbULAe5saHG2Nw12nDO+s6DvRc0kaSNks5IeiKpIOmXpC+SHks6JWlTM99KSJekUUkVtVZF0gVJXY1+awB1A3eBvVR/gn8VfbwGcy/hxyxE10DvfmzzUUgPg4sCvAE8M5v9A5MUBR4BGYpT6MExKLz79xOSOzBvHNYOADwHDppZ2QXL54AM33x060BrEEDxPZrIQOkDwBBwHsAkbQB8qpWIbuyB4tR//3b5htux7GtwkSUg7YARIEL+cnsgqO3PXwLoBEYccARA/pX2QIHkj9VLzwF9ABQmQ8GYf1uvBh3QC8'+
			'Di13CwcgEQQNIBJQDi68LBYkmCDis6YBqA1K5wsGXftANuA9iWE6FYlh6ul3dM0nogT7USb7vPEtuw7CvoiJWBQWdmn4EcLoJ5E8EfrELRBObdhI4YwEUz+1SfzTjwEBiilEf3s61HKrUTO3wdEluhNpuHzOx7Y2r0APeA3VSXwB+rNfLcC1ich1gKuvdh/cchfRJcJ8AktdSY+evAIM9yq8yz3Mo8aypJfZLOSnomaSEAzEh6Kum0pP5mvt/cMiU35fP3jQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateSize == 0) {
					me._map_pin_active.style.width='10px';
					me._map_pin_active.style.height='10px';
					me._map_pin_active.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else if (me._map_pin_active.ggCurrentLogicStateSize == 1) {
					me._map_pin_active.style.width='10px';
					me._map_pin_active.style.height='10px';
					me._map_pin_active.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else {
					me._map_pin_active.style.width='15px';
					me._map_pin_active.style.height='15px';
					me._map_pin_active.style.left = 'calc(50% - (15px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (15px / 2))';
					skin.updateSize(me._map_pin_active);
				}
			}
		}
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateSize == 1) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else {
					me._map_pin_normal.style.width='13px';
					me._map_pin_normal.style.height='22px';
					me._map_pin_normal.style.left = 'calc(50% - (13px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (22px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
			}
		}
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='꺽은선') {
				hotspot.skinid = '꺽은선';
				hsinst = new SkinHotspotClass__5(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='꺽은선2') {
				hotspot.skinid = '꺽은선2';
				hsinst = new SkinHotspotClass__20(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='화살표 흰색') {
				hotspot.skinid = '화살표 흰색';
				hsinst = new SkinHotspotClass__4(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='화살표 흰색-꺽은선') {
				hotspot.skinid = '화살표 흰색-꺽은선';
				hsinst = new SkinHotspotClass__3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='화살표 흰색-작게') {
				hotspot.skinid = '화살표 흰색-작게';
				hsinst = new SkinHotspotClass__2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__52.ggUpdateConditionTimer();
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				me.__53.style.transition='none';
				me.__53.style.visibility='hidden';
				me.__53.ggVisible=false;
			} else {
			}
		}
		me.__48.ggUpdateConditionTimer();
		me.__47.ggUpdateConditionTimer();
		if (me.__47.ggLastIsActive!=me.__47.ggIsActive()) {
			me.__47.ggLastIsActive=me.__47.ggIsActive();
			if (me.__47.ggLastIsActive) {
				me.__49.style.transition='none';
				me.__49.style.visibility='hidden';
				me.__49.ggVisible=false;
			} else {
			}
		}
		me.__43.ggUpdateConditionTimer();
		me.__42.ggUpdateConditionTimer();
		if (me.__42.ggLastIsActive!=me.__42.ggIsActive()) {
			me.__42.ggLastIsActive=me.__42.ggIsActive();
			if (me.__42.ggLastIsActive) {
				me.__44.style.transition='none';
				me.__44.style.visibility='hidden';
				me.__44.ggVisible=false;
			} else {
			}
		}
		me.__38.ggUpdateConditionTimer();
		me.__37.ggUpdateConditionTimer();
		if (me.__37.ggLastIsActive!=me.__37.ggIsActive()) {
			me.__37.ggLastIsActive=me.__37.ggIsActive();
			if (me.__37.ggLastIsActive) {
				me.__39.style.transition='none';
				me.__39.style.visibility='hidden';
				me.__39.ggVisible=false;
			} else {
			}
		}
		me.__32.ggUpdateConditionTimer();
		me.__31.ggUpdateConditionTimer();
		if (me.__31.ggLastIsActive!=me.__31.ggIsActive()) {
			me.__31.ggLastIsActive=me.__31.ggIsActive();
			if (me.__31.ggLastIsActive) {
				me.__34.style.transition='none';
				me.__34.style.visibility='hidden';
				me.__34.ggVisible=false;
				me.__35.style.transition='none';
				me.__35.style.visibility='hidden';
				me.__35.ggVisible=false;
			} else {
			}
		}
		me.__27.ggUpdateConditionTimer();
		me.__26.ggUpdateConditionTimer();
		if (me.__26.ggLastIsActive!=me.__26.ggIsActive()) {
			me.__26.ggLastIsActive=me.__26.ggIsActive();
			if (me.__26.ggLastIsActive) {
				me.__28.style.transition='none';
				me.__28.style.visibility='hidden';
				me.__28.ggVisible=false;
			} else {
			}
		}
		me.__16.ggUpdateConditionTimer();
		me.__17.ggUpdateConditionTimer();
		if (me.__17.ggLastIsActive!=me.__17.ggIsActive()) {
			me.__17.ggLastIsActive=me.__17.ggIsActive();
			if (me.__17.ggLastIsActive) {
				me.__18.style.transition='none';
				me.__18.style.visibility='hidden';
				me.__18.ggVisible=false;
			} else {
			}
		}
		me._timer_3.ggUpdateConditionTimer();
		if (me._timer_3.ggLastIsActive!=me._timer_3.ggIsActive()) {
			me._timer_3.ggLastIsActive=me._timer_3.ggIsActive();
			if (me._timer_3.ggLastIsActive) {
				player.setVariableValue('vis_arrow', !player.getVariableValue('vis_arrow'));
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap") .ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};