// Garden Gnome Software - Skin
// Pano2VR 7.0.9/20024
// Filename: ???? ?? VR ?? - ??????.ggsk
// Generated 2024-03-08T17:59:57

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
		el=me.__92=document.createElement('div');
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
		me.__92.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__92.logicBlock_position = function() {
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
			if (me.__92.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__92.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__92.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__92.ggCurrentLogicStatePosition == 0) {
					me.__92.style.left = 'calc(50% - (100% / 2))';
					me.__92.style.bottom='0%';
				}
				else {
					me.__92.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__92.style.bottom='-100%';
				}
			}
		}
		me.__92.logicBlock_position();
		me.__92.ggUpdatePosition=function (useTransition) {
		}
		el=me.__96=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.470588);';
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
		me.__96.ggIsActive=function() {
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
		me.__96.logicBlock_position = function() {
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
			if (me.__96.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__96.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__96.style.transition='left 0s, top 0s';
				if (me.__96.ggCurrentLogicStatePosition == 0) {
					me.__96.style.left='0px';
					me.__96.style.top='-52%';
				}
				else {
					me.__96.style.left='0px';
					me.__96.style.top='-55%';
				}
			}
		}
		me.__96.logicBlock_position();
		me.__96.ggUpdatePosition=function (useTransition) {
		}
		me.__92.appendChild(me.__96);
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
		hs+='left : 33%;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
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
				me._scrollarea_1.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._scrollarea_1.ggCurrentLogicStatePosition == 0) {
					me._scrollarea_1.style.left='0%';
					me._scrollarea_1.style.top='-203%';
				}
				else {
					me._scrollarea_1.style.left='33%';
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
				me._scrollarea_1.style.transition='left 0s, top 0s, width 0s, height 0s';
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
		el=me.__93=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__93;
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
		me.__93.ggIsActive=function() {
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
		me.__93.ggUpdatePosition=function (useTransition) {
		}
		el=me.__94=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__94;
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
			if(me.__94.ggUpdating == true) return;
			me.__94.ggUpdating = true;
			var el=me.__94;
			var curNumRows = 0;
			curNumRows = me.__94.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__94.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__94.ggCloneOffsetChanged = false;
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
			tourNodes = me.__94.getFilteredNodes(tourNodes, filter);
			me.__94.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__94.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__94.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__94.ggWidth) + 'px';
				parameter.width=me.__94.ggWidth + 'px';
				parameter.height=me.__94.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__94_Class(nodeId, me, el, parameter);
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
			me.__94.ggNodeCount = me.__94.ggNumFilterPassed;
			me.__94.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__94.parentNode && me.__94.parentNode.classList.contains('ggskin_subelement') && me.__94.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__94.parentNode.parentNode.ggUpdatePosition();
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
		me.__94.ggIsActive=function() {
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
		me.__94.logicBlock_size = function() {
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
			if (me.__94.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__94.ggCurrentLogicStateSize = newLogicStateSize;
				me.__94.style.transition='width 0s, height 0s';
				if (me.__94.ggCurrentLogicStateSize == 0) {
					me.__94.ggWidth=100;
					me.__94.ggHeight=150;
					me.__94.ggUpdate();
					skin.updateSize(me.__94);
				}
				else {
					me.__94.ggWidth=150;
					me.__94.ggHeight=180;
					me.__94.ggUpdate();
					skin.updateSize(me.__94);
				}
			}
		}
		me.__94.logicBlock_size();
		me.__94.ggCurrentLogicStateSize = -1;
		me.__94.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__94.childNodes.length; i++) {
				var child=me.__94.childNodes[i];
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
		me.__94.ggUpdatePosition=function (useTransition) {
			me.__94.ggUpdate();
		}
		me.__93.appendChild(me.__94);
		me._scrollarea_1__content.appendChild(me.__93);
		me.__92.appendChild(me._scrollarea_1);
		me.divSkin.appendChild(me.__92);
		el=me.__52=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 483px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : calc(50% - ((483px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__52.logicBlock_position = function() {
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
			if (me.__52.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__52.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__52.style.transition='right 0s, top 0s, transform 0s';
				if (me.__52.ggCurrentLogicStatePosition == 0) {
					me.__52.style.right='2px';
					me.__52.style.top = 'calc(50% - (483px / 2) + (0px / 2) + 5px)';
				}
				else {
					me.__52.style.right='15px';
					me.__52.style.top='calc(50% - ((483px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__52.logicBlock_position();
		me.__52.logicBlock_scaling = function() {
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
			if (me.__52.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__52.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__52.style.transition='right 0s, top 0s, transform 0s';
				if (me.__52.ggCurrentLogicStateScaling == 0) {
					me.__52.ggParameter.sx = 0.75;
					me.__52.ggParameter.sy = 0.7;
					me.__52.style.transform=parameterToTransform(me.__52.ggParameter);
					skin.updateSize(me.__52);
				}
				else {
					me.__52.ggParameter.sx = 1;
					me.__52.ggParameter.sy = 1;
					me.__52.style.transform=parameterToTransform(me.__52.ggParameter);
					skin.updateSize(me.__52);
				}
			}
		}
		me.__52.logicBlock_scaling();
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.470588);';
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
		el=me.__55=document.createElement('div');
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
		me.__55.ggIsActive=function() {
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
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me.__89=document.createElement('div');
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
		me.__89.ggIsActive=function() {
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
		me.__89.logicBlock_visible = function() {
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
			if (me.__89.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__89.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__89.style.transition='';
				if (me.__89.ggCurrentLogicStateVisible == 0) {
					me.__89.style.visibility="hidden";
					me.__89.ggVisible=false;
				}
				else if (me.__89.ggCurrentLogicStateVisible == 1) {
					me.__89.style.visibility="hidden";
					me.__89.ggVisible=false;
				}
				else {
					me.__89.style.visibility=(Number(me.__89.style.opacity)>0||!me.__89.style.opacity)?'inherit':'hidden';
					me.__89.ggVisible=true;
				}
			}
		}
		me.__89.logicBlock_visible();
		me.__89.onclick=function (e) {
			player.setVariableValue('vis_roomchoice', !player.getVariableValue('vis_roomchoice'));
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				me.__40.ggVisible = !me.__40.ggVisible;
				var flag=me.__40.ggVisible;
				me.__40.style.transition='none';
				me.__40.style.visibility=((flag)&&(Number(me.__40.style.opacity)>0||!me.__40.style.opacity))?'inherit':'hidden';
			}
		}
		me.__89.onmouseover=function (e) {
			me.elementMouseOver['_89']=true;
		}
		me.__89.onmousemove=function (e) {
			me.__90.style.transition='none';
			me.__90.style.visibility=(Number(me.__90.style.opacity)>0||!me.__90.style.opacity)?'inherit':'hidden';
			me.__90.ggVisible=true;
		}
		me.__89.onmouseout=function (e) {
			me.elementMouseOver['_89']=false;
		}
		me.__89.ggCurrentLogicStateVisible = -1;
		me.__89.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_89']) {
				me.__90.style.transition='none';
				me.__90.style.visibility=(Number(me.__90.style.opacity)>0||!me.__90.style.opacity)?'inherit':'hidden';
				me.__90.ggVisible=true;
			}
		}
		me.__89.ggUpdatePosition=function (useTransition) {
		}
		el=me.__211=document.createElement('div');
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
		me.__211.ggIsActive=function() {
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
		me.__211.logicBlock_visible = function() {
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
			if (me.__211.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__211.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__211.style.transition='background-color 0s';
				if (me.__211.ggCurrentLogicStateVisible == 0) {
					me.__211.style.visibility=(Number(me.__211.style.opacity)>0||!me.__211.style.opacity)?'inherit':'hidden';
					me.__211.ggVisible=true;
				}
				else {
					me.__211.style.visibility="hidden";
					me.__211.ggVisible=false;
				}
			}
		}
		me.__211.logicBlock_visible();
		me.__211.logicBlock_backgroundcolor = function() {
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
			if (me.__211.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__211.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__211.style.transition='background-color 0s';
				if (me.__211.ggCurrentLogicStateBackgroundColor == 0) {
					me.__211.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__211.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__211.logicBlock_backgroundcolor();
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		me.__89.appendChild(me.__211);
		el=me.__91=document.createElement('div');
		els=me.__91__img=document.createElement('img');
		els.className='ggskin ggskin__91';
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
		me.__91.ggIsActive=function() {
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
		me.__91.ggUpdatePosition=function (useTransition) {
		}
		me.__89.appendChild(me.__91);
		el=me.__90=document.createElement('div');
		els=me.__90__text=document.createElement('div');
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
		me.__90.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc120\ud0dd", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__90.ggUpdateText();
		el.appendChild(els);
		me.__90.ggIsActive=function() {
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
		me.__90.logicBlock_visible = function() {
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
			if (me.__90.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__90.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__90.style.transition='';
				if (me.__90.ggCurrentLogicStateVisible == 0) {
					me.__90.style.visibility=(Number(me.__90.style.opacity)>0||!me.__90.style.opacity)?'inherit':'hidden';
					me.__90.ggVisible=true;
				}
				else {
					me.__90.style.visibility="hidden";
					me.__90.ggVisible=false;
				}
			}
		}
		me.__90.logicBlock_visible();
		me.__90.ggUpdatePosition=function (useTransition) {
		}
		me.__89.appendChild(me.__90);
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
			me.__90.style.transition='none';
			me.__90.style.visibility='hidden';
			me.__90.ggVisible=false;
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.__89.appendChild(me._timer_1);
		me.__55.appendChild(me.__89);
		el=me.__85=document.createElement('div');
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
		me.__85.ggIsActive=function() {
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
		me.__85.logicBlock_visible = function() {
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
			if (me.__85.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__85.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__85.style.transition='';
				if (me.__85.ggCurrentLogicStateVisible == 0) {
					me.__85.style.visibility="hidden";
					me.__85.ggVisible=false;
				}
				else if (me.__85.ggCurrentLogicStateVisible == 1) {
					me.__85.style.visibility="hidden";
					me.__85.ggVisible=false;
				}
				else {
					me.__85.style.visibility=(Number(me.__85.style.opacity)>0||!me.__85.style.opacity)?'inherit':'hidden';
					me.__85.ggVisible=true;
				}
			}
		}
		me.__85.logicBlock_visible();
		me.__85.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 460))
				)
			) {
				me.__43.ggVisible = !me.__43.ggVisible;
				var flag=me.__43.ggVisible;
				me.__43.style.transition='none';
				me.__43.style.visibility=((flag)&&(Number(me.__43.style.opacity)>0||!me.__43.style.opacity))?'inherit':'hidden';
			}
			me.__88.ggVisible = !me.__88.ggVisible;
			var flag=me.__88.ggVisible;
			me.__88.style.transition='none';
			me.__88.style.visibility=((flag)&&(Number(me.__88.style.opacity)>0||!me.__88.style.opacity))?'inherit':'hidden';
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				player.setVariableValue('vis_mobilemap', false);
			}
			me.__37.style.transition='none';
			me.__37.style.visibility='hidden';
			me.__37.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				me.__40.ggVisible = !me.__40.ggVisible;
				var flag=me.__40.ggVisible;
				me.__40.style.transition='none';
				me.__40.style.visibility=((flag)&&(Number(me.__40.style.opacity)>0||!me.__40.style.opacity))?'inherit':'hidden';
			}
			player.setVariableValue('vis_roomchoice', false);
		}
		me.__85.onmouseover=function (e) {
			me.elementMouseOver['_85']=true;
		}
		me.__85.onmousemove=function (e) {
			me.__86.style.transition='none';
			me.__86.style.visibility=(Number(me.__86.style.opacity)>0||!me.__86.style.opacity)?'inherit':'hidden';
			me.__86.ggVisible=true;
		}
		me.__85.onmouseout=function (e) {
			me.elementMouseOver['_85']=false;
		}
		me.__85.ggCurrentLogicStateVisible = -1;
		me.__85.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_85']) {
				me.__86.style.transition='none';
				me.__86.style.visibility=(Number(me.__86.style.opacity)>0||!me.__86.style.opacity)?'inherit':'hidden';
				me.__86.ggVisible=true;
			}
		}
		me.__85.ggUpdatePosition=function (useTransition) {
		}
		el=me.__88=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
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
		me.__88.ggIsActive=function() {
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
		me.__88.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me.__88);
		el=me.__87=document.createElement('div');
		els=me.__87__img=document.createElement('img');
		els.className='ggskin ggskin__87';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAABaklEQVR4nO3dQUrDQABA0Ym4V7z/IYsXiAtXSilIZppPfG/fSctnOiFJp9u+74OOl7PfAD8JEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsS8ThzLrcdv25EXmyExgsQIEiNIzMxF/Z5DC9wf3TupWH386ScyZkiMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxKy+H/JMz7z3sowZEiNIjCAxgsQIEiNIjCAxgsQIEiNIzJUunVzi9ylmSIwgMYLEXGkN+W0fY9wWjv8+Flzyv3KQzzHGx8Lxb2OMt9mD+sqKESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkB'+
			'hBYgSJESRmm/hv0Wds0/ro+Gc9l3XoM68O8h/ZjP9KBIkRJEaQmJkPW19i85ezmSExgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEvMFdpgWzwr9THkAAAAASUVORK5CYII=';
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
		me.__87.ggIsActive=function() {
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
		me.__87.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me.__87);
		el=me.__86=document.createElement('div');
		els=me.__86__text=document.createElement('div');
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
		me.__86.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__86.ggUpdateText();
		el.appendChild(els);
		me.__86.ggIsActive=function() {
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
		me.__86.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me.__86);
		me.__55.appendChild(me.__85);
		el=me.__84=document.createElement('div');
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
		me.__84.ggIsActive=function() {
			return (me.__84.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__84.ggTimestamp) / me.__84.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__84.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__84.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__84.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__84.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__84.style.transition='';
				if (me.__84.ggCurrentLogicStateVisible == 0) {
					me.__84.style.visibility=(Number(me.__84.style.opacity)>0||!me.__84.style.opacity)?'inherit':'hidden';
					me.__84.ggVisible=true;
				}
				else {
					me.__84.style.visibility=(Number(me.__84.style.opacity)>0||!me.__84.style.opacity)?'inherit':'hidden';
					me.__84.ggVisible=true;
				}
			}
		}
		me.__84.logicBlock_visible();
		me.__84.ggActivate=function () {
			me.__86.style.transition='none';
			me.__86.style.visibility='hidden';
			me.__86.ggVisible=false;
		}
		me.__84.ggCurrentLogicStateVisible = -1;
		me.__84.ggUpdateConditionTimer=function () {
			me.__84.logicBlock_visible();
		}
		me.__84.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__84);
		el=me.__80=document.createElement('div');
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
		hs+='top : 166px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__80.ggIsActive=function() {
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
		me.__80.logicBlock_visible = function() {
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
			if (me.__80.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__80.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__80.style.transition='';
				if (me.__80.ggCurrentLogicStateVisible == 0) {
					me.__80.style.visibility="hidden";
					me.__80.ggVisible=false;
				}
				else if (me.__80.ggCurrentLogicStateVisible == 1) {
					me.__80.style.visibility="hidden";
					me.__80.ggVisible=false;
				}
				else {
					me.__80.style.visibility=(Number(me.__80.style.opacity)>0||!me.__80.style.opacity)?'inherit':'hidden';
					me.__80.ggVisible=true;
				}
			}
		}
		me.__80.logicBlock_visible();
		me.__80.onclick=function (e) {
			me.__47.style.transition='none';
			me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
			me.__47.ggVisible=true;
			me.__53.style.transition='none';
			me.__53.style.visibility='hidden';
			me.__53.ggVisible=false;
			me.__3.style.transition='none';
			me.__3.style.visibility='hidden';
			me.__3.ggVisible=false;
			if (
				(
					((player.getViewerSize().width > 460))
				)
			||
				(
					((player.getIsMobile() == false))
				)
			) {
				me.__43.style.transition='none';
				me.__43.style.visibility='hidden';
				me.__43.ggVisible=false;
			}
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.__92.style.transition='none';
			me.__92.style.visibility='hidden';
			me.__92.ggVisible=false;
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
				me.__40.style.transition='none';
				me.__40.style.visibility='hidden';
				me.__40.ggVisible=false;
			}
		}
		me.__80.onmouseover=function (e) {
			me.elementMouseOver['_80']=true;
		}
		me.__80.onmousemove=function (e) {
			me.__81.style.transition='none';
			me.__81.style.visibility=(Number(me.__81.style.opacity)>0||!me.__81.style.opacity)?'inherit':'hidden';
			me.__81.ggVisible=true;
		}
		me.__80.onmouseout=function (e) {
			me.elementMouseOver['_80']=false;
		}
		me.__80.ggCurrentLogicStateVisible = -1;
		me.__80.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_80']) {
				me.__81.style.transition='none';
				me.__81.style.visibility=(Number(me.__81.style.opacity)>0||!me.__81.style.opacity)?'inherit':'hidden';
				me.__81.ggVisible=true;
			}
		}
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		el=me.__83=document.createElement('div');
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
		me.__83.ggIsActive=function() {
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
		me.__83.ggUpdatePosition=function (useTransition) {
		}
		me.__80.appendChild(me.__83);
		el=me.__82=document.createElement('div');
		els=me.__82__img=document.createElement('img');
		els.className='ggskin ggskin__82';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuZjM1NGVmYywgMjAyMy8xMS8wOS0xMjo0MDoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wMy0wNFQxODowNTox'+
			'MSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDMtMDhUMTU6MDI6MTQrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDMtMDhUMTU6MDI6MTQrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk1YjUyOWZhLTg1Y2EtM2M0Ny05NmI0LWJmZTg0YzY4YWY1MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NWI1MjlmYS04NWNhLTNjNDctOTZiNC1iZmU4NGM2OGFmNTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NWI1MjlmYS04NWNhLTNjNDctOTZiNC1iZmU4NGM2OG'+
			'FmNTAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1YjUyOWZhLTg1Y2EtM2M0Ny05NmI0LWJmZTg0YzY4YWY1MCIgc3RFdnQ6d2hlbj0iMjAyNC0wMy0wNFQxODowNToxMSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps0WKroAAAjLSURBVHic7ZxdjF5FHcaf6RcU'+
			'K9BgsaxUWyntYv2o2ipCYosm0qImVTReyI1aEm/QKNaYaERRo4lR4gUGI4oXegGamO0NbTTSNgglgq1KLNCWbmNrLWX7tUChtv15Meel756dOWfmvB87686TTHbf8575z/Of5z3zdf4zBlBGOpg20QQyxiILkhiyIIkhC5IYsiCJIQuSGLIgiSELkhiyIIkhC5IYsiCJIQuSGLIgiSELkhiyIIkhC5IYsiCJIQuSGLIgiSELkhqA6DSVASwBtgCngc3AGwLyhNdtFiQcwCBwiLHYHJAvOJkmFWyMaeTQZAYwKOkhSfNLX500xlxSkze4nNyHBKBCDEna3u3CcpNVAU8z1cI+4MoAG8FpRj+c6gaAeZKWSRos0tWS5kl6vaTXSrpA0kWSTkt6QdJxSaPF/4ckPS1pV/H3aWPMaECZVU/GsKQbjDEHOnBrHJLtQ4rKWC'+
			'NplaTrJF3eRfPnJO2U9MciPWyMOeUov06M4ZDCouo4pSYLeDvwA2Cvp4noFU4Bvwc+AVxAfTO1MNKvyTPKAmZJukXS5yWt7Jrh5hiRdKGk1zi+G1bEk9FCTB1PmCDAhZI+J+lrkmo7xgSwX9LqWDGkxAUBpklaL+kOSQMxWSXtk/R3SbuL//8t6XlJJyS9VLp/tqTLZPuexZKWSLpG0lJJcyNpH5O00hizNzKfJZ6qIMByST+V9L7ALP+QtEnSVkl/lh05dQoj6a2SPlik1ZLmBOTbKelWY8zjsQVG1XFMh0PDTh2YCXwf+G9AB7sXuBO4qgm3Bmk5cDyAFwX/O4Hpkf6H122vBQEWAo/WOHoWGAJWASaQxyCwocj3TFulHgd2F9c3FPdV2fCNpqqwBTsvmlyCADcBx2qc+y2wLLBsA6wDtkdW4PYiX7vYVWIcAO7H'+
			'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';
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
		me.__82.ggIsActive=function() {
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
		me.__82.ggUpdatePosition=function (useTransition) {
		}
		me.__80.appendChild(me.__82);
		el=me.__81=document.createElement('div');
		els=me.__81__text=document.createElement('div');
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
		me.__81.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\uc81c\uac70", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__81.ggUpdateText();
		el.appendChild(els);
		me.__81.ggIsActive=function() {
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
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		me.__80.appendChild(me.__81);
		me.__55.appendChild(me.__80);
		el=me.__79=document.createElement('div');
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
		me.__79.ggIsActive=function() {
			return (me.__79.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__79.ggTimestamp) / me.__79.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__79.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__79.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__79.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__79.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__79.style.transition='';
				if (me.__79.ggCurrentLogicStateVisible == 0) {
					me.__79.style.visibility=(Number(me.__79.style.opacity)>0||!me.__79.style.opacity)?'inherit':'hidden';
					me.__79.ggVisible=true;
				}
				else {
					me.__79.style.visibility=(Number(me.__79.style.opacity)>0||!me.__79.style.opacity)?'inherit':'hidden';
					me.__79.ggVisible=true;
				}
			}
		}
		me.__79.logicBlock_visible();
		me.__79.ggActivate=function () {
			me.__81.style.transition='none';
			me.__81.style.visibility='hidden';
			me.__81.ggVisible=false;
		}
		me.__79.ggCurrentLogicStateVisible = -1;
		me.__79.ggUpdateConditionTimer=function () {
			me.__79.logicBlock_visible();
		}
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__79);
		el=me._onoff=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ubc30\uacbd\uc74c\uc545onoff";
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
		me._onoff.ggIsActive=function() {
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
		me._onoff.logicBlock_visible = function() {
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
			if (me._onoff.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._onoff.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._onoff.style.transition='';
				if (me._onoff.ggCurrentLogicStateVisible == 0) {
					me._onoff.style.visibility="hidden";
					me._onoff.ggVisible=false;
				}
				else if (me._onoff.ggCurrentLogicStateVisible == 1) {
					me._onoff.style.visibility="hidden";
					me._onoff.ggVisible=false;
				}
				else {
					me._onoff.style.visibility=(Number(me._onoff.style.opacity)>0||!me._onoff.style.opacity)?'inherit':'hidden';
					me._onoff.ggVisible=true;
				}
			}
		}
		me._onoff.logicBlock_visible();
		me._onoff.onclick=function (e) {
			me._onoff0.style.transition='none';
			me._onoff0.style.visibility=(Number(me._onoff0.style.opacity)>0||!me._onoff0.style.opacity)?'inherit':'hidden';
			me._onoff0.ggVisible=true;
			player.setVariableValue('vis_sound', !player.getVariableValue('vis_sound'));
				player.playPauseSound("_background","1");
		}
		me._onoff.onmouseover=function (e) {
			me.elementMouseOver['onoff']=true;
		}
		me._onoff.onmousemove=function (e) {
			me.__78.style.transition='none';
			me.__78.style.visibility=(Number(me.__78.style.opacity)>0||!me.__78.style.opacity)?'inherit':'hidden';
			me.__78.ggVisible=true;
		}
		me._onoff.onmouseout=function (e) {
			me.elementMouseOver['onoff']=false;
		}
		me._onoff.ggCurrentLogicStateVisible = -1;
		me._onoff.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['onoff']) {
				me.__78.style.transition='none';
				me.__78.style.visibility=(Number(me.__78.style.opacity)>0||!me.__78.style.opacity)?'inherit':'hidden';
				me.__78.ggVisible=true;
			}
		}
		me._onoff.ggUpdatePosition=function (useTransition) {
		}
		el=me._on=document.createElement('div');
		el.ggId="\ubc30\uacbd\uc74c\uc545-on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._on.ggIsActive=function() {
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
		me._on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sound') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on.style.transition='';
				if (me._on.ggCurrentLogicStateVisible == 0) {
					me._on.style.visibility=(Number(me._on.style.opacity)>0||!me._on.style.opacity)?'inherit':'hidden';
					me._on.ggVisible=true;
				}
				else {
					me._on.style.visibility="hidden";
					me._on.ggVisible=false;
				}
			}
		}
		me._on.logicBlock_visible();
		me._on.ggUpdatePosition=function (useTransition) {
		}
		el=me._onoff0=document.createElement('div');
		el.ggId="\ubc30\uacbd\uc74c\uc545onoff\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
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
		me._onoff0.ggIsActive=function() {
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
		me._onoff0.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._onoff0);
		el=me._on0=document.createElement('div');
		els=me._on0__img=document.createElement('img');
		els.className='ggskin ggskin_on0';
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
		el.ggId="\ubc30\uacbd\uc74c\uc545on";
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
		me._on0.ggIsActive=function() {
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
		me._on0.ggUpdatePosition=function (useTransition) {
		}
		me._on.appendChild(me._on0);
		me._onoff.appendChild(me._on);
		el=me._off=document.createElement('div');
		el.ggId="\ubc30\uacbd\uc74c\uc545-off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off.ggIsActive=function() {
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
		me._off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sound') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off.style.transition='';
				if (me._off.ggCurrentLogicStateVisible == 0) {
					me._off.style.visibility=(Number(me._off.style.opacity)>0||!me._off.style.opacity)?'inherit':'hidden';
					me._off.ggVisible=true;
				}
				else {
					me._off.style.visibility="hidden";
					me._off.ggVisible=false;
				}
			}
		}
		me._off.logicBlock_visible();
		me._off.ggUpdatePosition=function (useTransition) {
		}
		el=me._off0=document.createElement('div');
		els=me._off0__img=document.createElement('img');
		els.className='ggskin ggskin_off0';
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
		el.ggId="\ubc30\uacbd\uc74c\uc545off";
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
		me._off0.ggIsActive=function() {
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
		me._off0.ggUpdatePosition=function (useTransition) {
		}
		me._off.appendChild(me._off0);
		me._onoff.appendChild(me._off);
		el=me.__78=document.createElement('div');
		els=me.__78__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubc30\uacbd\uc74c\uc545\ud0dd\uc2a4\ud2b8";
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
		me.__78.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc74c\uc545\ub044\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__78.ggUpdateText();
		el.appendChild(els);
		me.__78.ggIsActive=function() {
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
		me.__78.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_sound') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__78.ggCurrentLogicStateText != newLogicStateText) {
				me.__78.ggCurrentLogicStateText = newLogicStateText;
				me.__78.style.transition='';
				if (me.__78.ggCurrentLogicStateText == 0) {
					if (me.__78.ggUpdateText) {
					me.__78.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc74c\uc545\ucf1c\uae30", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__78.ggUpdateText();
					} else {
						if (me.__78.ggUpdatePosition) me.__78.ggUpdatePosition();
					}
				}
				else {
					if (me.__78.ggUpdateText) {
					me.__78.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc74c\uc545\ub044\uae30", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__78.ggUpdateText();
					} else {
						if (me.__78.ggUpdatePosition) me.__78.ggUpdatePosition();
					}
				}
			}
		}
		me.__78.logicBlock_text();
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		me._onoff.appendChild(me.__78);
		me.__55.appendChild(me._onoff);
		el=me.__77=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uac00\uad6c\uc628\uc624\ud504\ud0c0\uc774\uba38";
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
		me.__77.ggIsActive=function() {
			return (me.__77.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__77.ggTimestamp) / me.__77.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__77.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__77.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__77.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__77.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__77.style.transition='';
				if (me.__77.ggCurrentLogicStateVisible == 0) {
					me.__77.style.visibility=(Number(me.__77.style.opacity)>0||!me.__77.style.opacity)?'inherit':'hidden';
					me.__77.ggVisible=true;
				}
				else {
					me.__77.style.visibility=(Number(me.__77.style.opacity)>0||!me.__77.style.opacity)?'inherit':'hidden';
					me.__77.ggVisible=true;
				}
			}
		}
		me.__77.logicBlock_visible();
		me.__77.ggActivate=function () {
			me.__78.style.transition='none';
			me.__78.style.visibility='hidden';
			me.__78.ggVisible=false;
		}
		me.__77.ggCurrentLogicStateVisible = -1;
		me.__77.ggUpdateConditionTimer=function () {
			me.__77.logicBlock_visible();
		}
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__77);
		el=me.__73=document.createElement('div');
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
		hs+='top : 271px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__73.ggIsActive=function() {
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
		me.__73.logicBlock_visible = function() {
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
			if (me.__73.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__73.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__73.style.transition='';
				if (me.__73.ggCurrentLogicStateVisible == 0) {
					me.__73.style.visibility="hidden";
					me.__73.ggVisible=false;
				}
				else if (me.__73.ggCurrentLogicStateVisible == 1) {
					me.__73.style.visibility=(Number(me.__73.style.opacity)>0||!me.__73.style.opacity)?'inherit':'hidden';
					me.__73.ggVisible=true;
				}
				else {
					me.__73.style.visibility=(Number(me.__73.style.opacity)>0||!me.__73.style.opacity)?'inherit':'hidden';
					me.__73.ggVisible=true;
				}
			}
		}
		me.__73.logicBlock_visible();
		me.__73.onclick=function (e) {
			player.toggleAutorotate();
			me.__76.ggVisible = !me.__76.ggVisible;
			var flag=me.__76.ggVisible;
			me.__76.style.transition='none';
			me.__76.style.visibility=((flag)&&(Number(me.__76.style.opacity)>0||!me.__76.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_icon5', true);
		}
		me.__73.onmouseover=function (e) {
			me.elementMouseOver['_73']=true;
		}
		me.__73.onmousemove=function (e) {
			me.__74.style.transition='none';
			me.__74.style.visibility=(Number(me.__74.style.opacity)>0||!me.__74.style.opacity)?'inherit':'hidden';
			me.__74.ggVisible=true;
		}
		me.__73.onmouseout=function (e) {
			me.elementMouseOver['_73']=false;
		}
		me.__73.ggCurrentLogicStateVisible = -1;
		me.__73.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_73']) {
				me.__74.style.transition='none';
				me.__74.style.visibility=(Number(me.__74.style.opacity)>0||!me.__74.style.opacity)?'inherit':'hidden';
				me.__74.ggVisible=true;
			}
		}
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		el=me.__76=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
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
		me.__76.ggIsActive=function() {
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
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		me.__73.appendChild(me.__76);
		el=me.__75=document.createElement('div');
		els=me.__75__img=document.createElement('img');
		els.className='ggskin ggskin__75';
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
		me.__75.ggIsActive=function() {
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
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		me.__73.appendChild(me.__75);
		el=me.__74=document.createElement('div');
		els=me.__74__text=document.createElement('div');
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
		me.__74.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__74.ggUpdateText();
		el.appendChild(els);
		me.__74.ggIsActive=function() {
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
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		me.__73.appendChild(me.__74);
		me.__55.appendChild(me.__73);
		el=me.__72=document.createElement('div');
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
		me.__72.ggIsActive=function() {
			return (me.__72.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__72.ggTimestamp) / me.__72.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__72.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__72.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__72.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__72.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__72.style.transition='';
				if (me.__72.ggCurrentLogicStateVisible == 0) {
					me.__72.style.visibility=(Number(me.__72.style.opacity)>0||!me.__72.style.opacity)?'inherit':'hidden';
					me.__72.ggVisible=true;
				}
				else {
					me.__72.style.visibility=(Number(me.__72.style.opacity)>0||!me.__72.style.opacity)?'inherit':'hidden';
					me.__72.ggVisible=true;
				}
			}
		}
		me.__72.logicBlock_visible();
		me.__72.ggActivate=function () {
			me.__74.style.transition='none';
			me.__74.style.visibility='hidden';
			me.__74.ggVisible=false;
		}
		me.__72.ggCurrentLogicStateVisible = -1;
		me.__72.ggUpdateConditionTimer=function () {
			me.__72.logicBlock_visible();
		}
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__72);
		el=me.__68=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc548\ub0b4\uc0ac\ud56d";
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
		hs+='top : 430px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__68.ggIsActive=function() {
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
		me.__68.logicBlock_visible = function() {
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
			if (me.__68.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__68.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__68.style.transition='';
				if (me.__68.ggCurrentLogicStateVisible == 0) {
					me.__68.style.visibility="hidden";
					me.__68.ggVisible=false;
				}
				else if (me.__68.ggCurrentLogicStateVisible == 1) {
					me.__68.style.visibility="hidden";
					me.__68.ggVisible=false;
				}
				else {
					me.__68.style.visibility=(Number(me.__68.style.opacity)>0||!me.__68.style.opacity)?'inherit':'hidden';
					me.__68.ggVisible=true;
				}
			}
		}
		me.__68.logicBlock_visible();
		me.__68.onclick=function (e) {
			me.__71.ggVisible = !me.__71.ggVisible;
			var flag=me.__71.ggVisible;
			me.__71.style.transition='none';
			me.__71.style.visibility=((flag)&&(Number(me.__71.style.opacity)>0||!me.__71.style.opacity))?'inherit':'hidden';
			if (
				(
					((player.getViewerSize().width > 460))
				)
			) {
				me.__15.style.transition='none';
				me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
				me.__15.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				me.__5.style.transition='none';
				me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
				me.__5.ggVisible=true;
			}
		}
		me.__68.onmouseover=function (e) {
			me.elementMouseOver['_68']=true;
		}
		me.__68.onmousemove=function (e) {
			me.__69.style.transition='none';
			me.__69.style.visibility=(Number(me.__69.style.opacity)>0||!me.__69.style.opacity)?'inherit':'hidden';
			me.__69.ggVisible=true;
		}
		me.__68.onmouseout=function (e) {
			me.elementMouseOver['_68']=false;
		}
		me.__68.ggCurrentLogicStateVisible = -1;
		me.__68.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_68']) {
				me.__69.style.transition='none';
				me.__69.style.visibility=(Number(me.__69.style.opacity)>0||!me.__69.style.opacity)?'inherit':'hidden';
				me.__69.ggVisible=true;
			}
		}
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		el=me.__71=document.createElement('div');
		el.ggId="\uc548\ub0b4\uc0ac\ud56d\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
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
		me.__71.ggIsActive=function() {
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
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		me.__68.appendChild(me.__71);
		el=me.__70=document.createElement('div');
		els=me.__70__img=document.createElement('img');
		els.className='ggskin ggskin__70';
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
		el.ggId="\uc548\ub0b4\uc0ac\ud56d";
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
		me.__70.ggIsActive=function() {
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
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		me.__68.appendChild(me.__70);
		el=me.__69=document.createElement('div');
		els=me.__69__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uc0ac\ud56d\ud0dd\uc2a4\ud2b8";
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
		me.__69.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0ac\uc6a9\uc548\ub0b4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__69.ggUpdateText();
		el.appendChild(els);
		me.__69.ggIsActive=function() {
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
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		me.__68.appendChild(me.__69);
		me.__55.appendChild(me.__68);
		el=me.__67=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\uc548\ub0b4\uc0ac\ud56d\ud0c0\uc774\uba38";
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
		me.__67.ggIsActive=function() {
			return (me.__67.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__67.ggTimestamp) / me.__67.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__67.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__67.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__67.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__67.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__67.style.transition='';
				if (me.__67.ggCurrentLogicStateVisible == 0) {
					me.__67.style.visibility=(Number(me.__67.style.opacity)>0||!me.__67.style.opacity)?'inherit':'hidden';
					me.__67.ggVisible=true;
				}
				else {
					me.__67.style.visibility=(Number(me.__67.style.opacity)>0||!me.__67.style.opacity)?'inherit':'hidden';
					me.__67.ggVisible=true;
				}
			}
		}
		me.__67.logicBlock_visible();
		me.__67.ggActivate=function () {
			me.__69.style.transition='none';
			me.__69.style.visibility='hidden';
			me.__69.ggVisible=false;
		}
		me.__67.ggCurrentLogicStateVisible = -1;
		me.__67.ggUpdateConditionTimer=function () {
			me.__67.logicBlock_visible();
		}
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__67);
		el=me.__62=document.createElement('div');
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
		hs+='top : 377px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__62.ggIsActive=function() {
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
		me.__62.logicBlock_visible = function() {
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
			if (me.__62.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__62.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__62.style.transition='';
				if (me.__62.ggCurrentLogicStateVisible == 0) {
					me.__62.style.visibility="hidden";
					me.__62.ggVisible=false;
				}
				else if (me.__62.ggCurrentLogicStateVisible == 1) {
					me.__62.style.visibility="hidden";
					me.__62.ggVisible=false;
				}
				else {
					me.__62.style.visibility=(Number(me.__62.style.opacity)>0||!me.__62.style.opacity)?'inherit':'hidden';
					me.__62.ggVisible=true;
				}
			}
		}
		me.__62.logicBlock_visible();
		me.__62.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me.__66.ggVisible = !me.__66.ggVisible;
			var flag=me.__66.ggVisible;
			me.__66.style.transition='none';
			me.__66.style.visibility=((flag)&&(Number(me.__66.style.opacity)>0||!me.__66.style.opacity))?'inherit':'hidden';
			me.__64.style.transition='none';
			me.__64.style.visibility=(Number(me.__64.style.opacity)>0||!me.__64.style.opacity)?'inherit':'hidden';
			me.__64.ggVisible=true;
		}
		me.__62.onmouseover=function (e) {
			me.elementMouseOver['_62']=true;
		}
		me.__62.onmousemove=function (e) {
			me.__65.style.transition='none';
			me.__65.style.visibility=(Number(me.__65.style.opacity)>0||!me.__65.style.opacity)?'inherit':'hidden';
			me.__65.ggVisible=true;
		}
		me.__62.onmouseout=function (e) {
			me.elementMouseOver['_62']=false;
		}
		me.__62.ggCurrentLogicStateVisible = -1;
		me.__62.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_62']) {
				me.__65.style.transition='none';
				me.__65.style.visibility=(Number(me.__65.style.opacity)>0||!me.__65.style.opacity)?'inherit':'hidden';
				me.__65.ggVisible=true;
			}
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		el=me.__66=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
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
		me.__66.ggIsActive=function() {
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
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__66);
		el=me.__65=document.createElement('div');
		els=me.__65__text=document.createElement('div');
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
		me.__65.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__65.ggUpdateText();
		el.appendChild(els);
		me.__65.ggIsActive=function() {
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
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__65);
		el=me.__64=document.createElement('div');
		els=me.__64__text=document.createElement('div');
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
		me.__64.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__64.ggUpdateText();
		el.appendChild(els);
		me.__64.ggIsActive=function() {
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
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__64);
		el=me.__63=document.createElement('div');
		els=me.__63__img=document.createElement('img');
		els.className='ggskin ggskin__63';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAABXklEQVR4nO3dWwrCMBQA0UTc/5brt1CwD7FjOedbRRji1ajpXJZl0PG4+gnwTpAYQWIEiREkRpAYQWIEiREkRpCY587b22cZY845D91xyzaVFRIjSIwgMYLE7B3qa45NuP/w8zcxVkiMIDGCxAgSI0iMIDGCxAgSI0jMNz6pb3WXrfvlxK89P+5qWCExgsQIEiNIzC+H+pq/3Lrf8p360clvhcQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIzDf+p36XQ2USrJAYQWIEiREkZu9QP3NYjOG/wa4gR6'+
			'8sM8b61WXOPN5decmKESRGkBhBYgSJESRGkBhBYi49JvbMIep3ZYXECBIjSIwgMdNcbbFCYgSJESRGkBhBYgSJESRGkJgXVnsdy/OgpXIAAAAASUVORK5CYII=';
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
		me.__63.ggIsActive=function() {
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
		me.__63.onclick=function (e) {
			me.__65.style.transition='none';
			me.__65.style.visibility='hidden';
			me.__65.ggVisible=false;
		}
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__63);
		me.__55.appendChild(me.__62);
		el=me.__61=document.createElement('div');
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
		me.__61.ggIsActive=function() {
			return (me.__61.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__61.ggTimestamp) / me.__61.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__61.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__61.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__61.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__61.style.transition='';
				if (me.__61.ggCurrentLogicStateVisible == 0) {
					me.__61.style.visibility=(Number(me.__61.style.opacity)>0||!me.__61.style.opacity)?'inherit':'hidden';
					me.__61.ggVisible=true;
				}
				else {
					me.__61.style.visibility=(Number(me.__61.style.opacity)>0||!me.__61.style.opacity)?'inherit':'hidden';
					me.__61.ggVisible=true;
				}
			}
		}
		me.__61.logicBlock_visible();
		me.__61.ggActivate=function () {
			me.__64.style.transition='none';
			me.__64.style.visibility='hidden';
			me.__64.ggVisible=false;
			me.__65.style.transition='none';
			me.__65.style.visibility='hidden';
			me.__65.ggVisible=false;
		}
		me.__61.ggCurrentLogicStateVisible = -1;
		me.__61.ggUpdateConditionTimer=function () {
			me.__61.logicBlock_visible();
		}
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__61);
		el=me.__57=document.createElement('div');
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
		hs+='top : 324px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
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
		me.__57.logicBlock_visible = function() {
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
			if (me.__57.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__57.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__57.style.transition='';
				if (me.__57.ggCurrentLogicStateVisible == 0) {
					me.__57.style.visibility="hidden";
					me.__57.ggVisible=false;
				}
				else if (me.__57.ggCurrentLogicStateVisible == 1) {
					me.__57.style.visibility="hidden";
					me.__57.ggVisible=false;
				}
				else {
					me.__57.style.visibility=(Number(me.__57.style.opacity)>0||!me.__57.style.opacity)?'inherit':'hidden';
					me.__57.ggVisible=true;
				}
			}
		}
		me.__57.logicBlock_visible();
		me.__57.onclick=function (e) {
			player.toggleFullscreen();
			me.__60.ggVisible = !me.__60.ggVisible;
			var flag=me.__60.ggVisible;
			me.__60.style.transition='none';
			me.__60.style.visibility=((flag)&&(Number(me.__60.style.opacity)>0||!me.__60.style.opacity))?'inherit':'hidden';
		}
		me.__57.onmouseover=function (e) {
			me.elementMouseOver['_57']=true;
		}
		me.__57.onmousemove=function (e) {
			me.__58.style.transition='none';
			me.__58.style.visibility=(Number(me.__58.style.opacity)>0||!me.__58.style.opacity)?'inherit':'hidden';
			me.__58.ggVisible=true;
		}
		me.__57.onmouseout=function (e) {
			me.elementMouseOver['_57']=false;
		}
		me.__57.ggCurrentLogicStateVisible = -1;
		me.__57.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_57']) {
				me.__58.style.transition='none';
				me.__58.style.visibility=(Number(me.__58.style.opacity)>0||!me.__58.style.opacity)?'inherit':'hidden';
				me.__58.ggVisible=true;
			}
		}
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		el=me.__60=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
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
		me.__60.ggIsActive=function() {
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
		me.__60.logicBlock_visible = function() {
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
			if (me.__60.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__60.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__60.style.transition='';
				if (me.__60.ggCurrentLogicStateVisible == 0) {
					me.__60.style.visibility="hidden";
					me.__60.ggVisible=false;
				}
				else {
					me.__60.style.visibility="hidden";
					me.__60.ggVisible=false;
				}
			}
		}
		me.__60.logicBlock_visible();
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		me.__57.appendChild(me.__60);
		el=me.__59=document.createElement('div');
		els=me.__59__img=document.createElement('img');
		els.className='ggskin ggskin__59';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAEKklEQVR4nO2c2WoUQRSGv4j3LhhRYohLFBeIKF6oN+4g+AR5BV9AL8VbH8AX8UJxvxAFiRJxiYq70WhQ4xPEizMNo1Yyne5a/gzng2GgK1Onpr9Ud01V9RmYn5/H0WFF6QY4f+NCxHAhYrgQMVyIGC5EDBcihgsRw4WI4ULEcCFiuBAxmgqZT/w607BdTbiS8HtUr9p4DxHDhYjhQsRwIWIMNFwx7PWhKeA48LVJ5cuEMeAGMFjjbwfqVpqqh+wE7gBDieovzVJkLImUl6wdmJThhDFKsJiM2baVxxTyM3BsFJMyEjFOSXrJONU2QEwhJ4EfgeNbMSmbI8YqQR0Zk22DxBTyGDhBuNtuxqRsjRgvJ1lkQPx7yC'+
			'Q2uvoeKBvBpIxGjpmaXjJOEkkGpLmpPwWOAd8CZcOYlB0J4qagjownMQOmGmU9B44S/h0yhEnZmSh2LLLLgLTD3imsp0wHyjYCt4HdCeO3oYgMSD918hKT8ilQtgGTsidxG5ZKMRmQZy7rNXb5+hgoW49J2ZuhHXUoKgPyTS6+BY4A7wNlg9hJ2JepLQtRXAbkne19j/WUd4GyddjJ2J+xPd1IyID80+8fsJ7yJlC2FrgJHMjaIiEZUGY95BMm5VWgbDV2cg5maouUDCi3QDWNjb6mAmWrgKvA4cRtkJMBZVcMv2BSXgTKVgEXE8e/hJgMgJUNP3c+UvwZ7EZ/i79/j7wExiPFWIhx/h/dxZDR6tw0XcKNTTX0HQM+A4c676lZC1zHRndFe0aFyiaHWWzq/jp2UnLIAFtUOwVc68QvKgN0eojTQaWHOB1ciBguRAwX'+
			'IoYLEcOFiOFCxHAhYrgQMVyIGC5EDBcihgsRw4WI4ULEcCFiuBAxXIgYLkQMFyKGCxHDhYjhQsRQEjKGbbJekznudmyj3LrMcYOobJTr3on+CNu9+CtD3E3A/c77JLaLsW2+ktA/VO3v0lRI6IGbbU0qIvxYQA4pg8BdYFfXsWcsnPigLqETWjs9U8x8WbWDdrHYMxrXgNMN6qxLtY/4X55j+3xnGtbb6tyUvIf0emDmXOL4F4DfgeO7sSeDNyaOH6SUkGzJXBbhHtYDQ1KKJWArIURBRsWDTry5QFmRBGy5hSjJqHiI3UskErDlFKIoo2ICkQRsuYQoy6iQSMCWQ0jWBGAtKZ6ALbUQyWfBe1A0AVtKIctRRkWxBGyphCxnGRVFErClENIPMiqyJ2CLLaSfZFRkTcAWU0g/yqjIloAt5mzvLP0po5sRrEdsCZRVWS'+
			'EmAmVFpt9D9JOMimFMSmj9Zw7L+fUvEkL6UUbFEJbBqO7vkeLrIf0sAxZPwNaK1JesppwFLieOAZYobS5DnOI9xGmICxHDhYjhQsRQ2SjndPAeIoYLEcOFiOFCxHAhYrgQMVyIGC5EDBcihgsR4w/iJkQwBPThTwAAAABJRU5ErkJggg==';
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
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		me.__57.appendChild(me.__59);
		el=me.__58=document.createElement('div');
		els=me.__58__text=document.createElement('div');
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
		me.__58.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__58.ggUpdateText();
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
		me.__57.appendChild(me.__58);
		me.__55.appendChild(me.__57);
		el=me.__56=document.createElement('div');
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
		me.__56.ggIsActive=function() {
			return (me.__56.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__56.ggTimestamp) / me.__56.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__56.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__56.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__56.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__56.style.transition='';
				if (me.__56.ggCurrentLogicStateVisible == 0) {
					me.__56.style.visibility=(Number(me.__56.style.opacity)>0||!me.__56.style.opacity)?'inherit':'hidden';
					me.__56.ggVisible=true;
				}
				else {
					me.__56.style.visibility=(Number(me.__56.style.opacity)>0||!me.__56.style.opacity)?'inherit':'hidden';
					me.__56.ggVisible=true;
				}
			}
		}
		me.__56.logicBlock_visible();
		me.__56.ggActivate=function () {
			me.__58.style.transition='none';
			me.__58.style.visibility='hidden';
			me.__58.ggVisible=false;
		}
		me.__56.ggCurrentLogicStateVisible = -1;
		me.__56.ggUpdateConditionTimer=function () {
			me.__56.logicBlock_visible();
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__56);
		me._rectangle_2.appendChild(me.__55);
		me.__52.appendChild(me._rectangle_2);
		el=me.__53=document.createElement('div');
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
		hs+='top : 219px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAYAAABU1PscAAAACXBIWXMAAC4jAAAuIwF4pT92AAACTElEQVRYhc2Yy27TUBCG/1RizxoKSbmUUKB9BoQKK0Cw6wZxFQsegmeh26ZARbmUtqTiokqIJ0AVC0CwQA1FgoDE4mPhHOFYx47nxHY6klfHM+f7xzPnjFwDlGI1SamLFdpxSXslbfoWx1Kc5iTdzlivypqS7kl6KGnW+waQfM4Dn4GfwC3PelVPE1jjv20BZ5LvJZ0uAh9jTjvAtRHAH0vAx0XMpgm41Mt80r4DVyuGX/VwOHtP7EsIGAMuA58ynLaB6xXBP8/giIs47QTcBb7mcOoAN0qEb+aEd7YFXBDwzuDUoZyemALWDRzO5gWcNTpvU2xPnAA2AuBbwCkXZAJYMTh/K0jENPAyAH4RGIf+U6hhFNEBrg'+
			'wBPxMIvwDsd3GSQRvYGukHYafTDPAqAL5FL/NpAgTUjSJ2sDX2NPAmAH6RWOazBAjYBzw1BO8CN3PAnwReB8If9MXM2qwOPDFs8ovsLzEFtAPgHxGVtjfuoIwdoJiemCTsqLzfY0hlzFOz48ALw6Z/6C+nJuGZnxjEl7fxGkYRXWCOKPPPAuAfA4fysFmOvqPYbuwvwFvgrxF+OS+8VYCAw/jn9KJsGThiYbIKEFF2yhCxRI6aL0KAO1Xao4YfRoDriY2C4L2XVNkCnIj2EPCpN2xVAlxPWC47ZwvDwhclQET3hGV2auEZzEYpQOQfAPvm+d0kQEQDYNYvkQcMmG1GLcCVk298GDiY7RYBIhoA4yKWyoAHVIPSfkDXJc1L6kq6I+lDGZuUKWCPpHOSfktaL2uTf1MB1zzqM1ZIAAAAAElFTkSuQmCC';
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
		me.__53.appendChild(me._up);
		el=me.__54=document.createElement('div');
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
		me.__54.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_54'] == true))
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
			if (me.__54.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__54.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__54.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__54.ggCurrentLogicStatePosition == 0) {
					me.__54.style.left='-10px';
					me.__54.style.top = 'calc(50% - (43px / 2))';
				}
				else if (me.__54.ggCurrentLogicStatePosition == 1) {
					me.__54.style.left='20px';
					me.__54.style.top = 'calc(50% - (43px / 2))';
				}
				else {
					me.__54.style.left='0px';
					me.__54.style.top='calc(50% - ((43px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__54.logicBlock_position();
		me.__54.logicBlock_visible = function() {
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
			if (me.__54.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__54.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__54.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__54.ggCurrentLogicStateVisible == 0) {
					me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
					me.__54.ggVisible=true;
				}
				else if (me.__54.ggCurrentLogicStateVisible == 1) {
					me.__54.style.visibility="hidden";
					me.__54.ggVisible=false;
				}
				else {
					me.__54.style.visibility="hidden";
					me.__54.ggVisible=false;
				}
			}
		}
		me.__54.logicBlock_visible();
		me.__54.logicBlock_alpha = function() {
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
			if (me.__54.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__54.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__54.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__54.ggCurrentLogicStateAlpha == 0) {
					me.__54.style.visibility=me.__54.ggVisible?'inherit':'hidden';
					me.__54.style.opacity=1;
				}
				else if (me.__54.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me.__54.style.opacity == 0.0) { me.__54.style.visibility="hidden"; } }, 505);
					me.__54.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me.__54.style.opacity == 0.0) { me.__54.style.visibility="hidden"; } }, 505);
					me.__54.style.opacity=0;
				}
			}
		}
		me.__54.logicBlock_alpha();
		me.__54.onmouseover=function (e) {
			me.elementMouseOver['_54']=true;
			me.__54.logicBlock_position();
		}
		me.__54.onmouseout=function (e) {
			me.elementMouseOver['_54']=false;
			me.__54.logicBlock_position();
		}
		me.__54.ggUpdatePosition=function (useTransition) {
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
		hs+='background : rgba(34,30,31,0.470588);';
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
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAYAAABU1PscAAAACXBIWXMAAC4jAAAuIwF4pT92AAACTElEQVRYhc2Yy27TUBCG/1RizxoKSbmUUKB9BoQKK0Cw6wZxFQsegmeh26ZARbmUtqTiokqIJ0AVC0CwQA1FgoDE4mPhHOFYx47nxHY6klfHM+f7xzPnjFwDlGI1SamLFdpxSXslbfoWx1Kc5iTdzlivypqS7kl6KGnW+waQfM4Dn4GfwC3PelVPE1jjv20BZ5LvJZ0uAh9jTjvAtRHAH0vAx0XMpgm41Mt80r4DVyuGX/VwOHtP7EsIGAMuA58ynLaB6xXBP8/giIs47QTcBb7mcOoAN0qEb+aEd7YFXBDwzuDUoZyemALWDRzO5gWcNTpvU2xPnAA2AuBbwCkXZAJYMTh/K0jENPAyAH4RGIf+U6hhFNEBrg'+
			'wBPxMIvwDsd3GSQRvYGukHYafTDPAqAL5FL/NpAgTUjSJ2sDX2NPAmAH6RWOazBAjYBzw1BO8CN3PAnwReB8If9MXM2qwOPDFs8ovsLzEFtAPgHxGVtjfuoIwdoJiemCTsqLzfY0hlzFOz48ALw6Z/6C+nJuGZnxjEl7fxGkYRXWCOKPPPAuAfA4fysFmOvqPYbuwvwFvgrxF+OS+8VYCAw/jn9KJsGThiYbIKEFF2yhCxRI6aL0KAO1Xao4YfRoDriY2C4L2XVNkCnIj2EPCpN2xVAlxPWC47ZwvDwhclQET3hGV2auEZzEYpQOQfAPvm+d0kQEQDYNYvkQcMmG1GLcCVk298GDiY7RYBIhoA4yKWyoAHVIPSfkDXJc1L6kq6I+lDGZuUKWCPpHOSfktaL2uTf1MB1zzqM1ZIAAAAAElFTkSuQmCC';
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
		me.__54.appendChild(me._rectangle_3);
		me.__53.appendChild(me.__54);
		me.__52.appendChild(me.__53);
		me.divSkin.appendChild(me.__52);
		el=me.__47=document.createElement('div');
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
		me.__47.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__47.logicBlock_scaling = function() {
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
			if (me.__47.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__47.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__47.style.transition='transform 0s';
				if (me.__47.ggCurrentLogicStateScaling == 0) {
					me.__47.ggParameter.sx = 0.75;
					me.__47.ggParameter.sy = 0.7;
					me.__47.style.transform=parameterToTransform(me.__47.ggParameter);
					skin.updateSize(me.__47);
				}
				else {
					me.__47.ggParameter.sx = 1;
					me.__47.ggParameter.sy = 1;
					me.__47.style.transform=parameterToTransform(me.__47.ggParameter);
					skin.updateSize(me.__47);
				}
			}
		}
		me.__47.logicBlock_scaling();
		me.__47.onclick=function (e) {
			me.__3.style.transition='none';
			me.__3.style.visibility=(Number(me.__3.style.opacity)>0||!me.__3.style.opacity)?'inherit':'hidden';
			me.__3.ggVisible=true;
			if (
				(
					((player.getViewerSize().width > 640))
				)
			) {
				me.__43.style.transition='none';
				me.__43.style.visibility=(Number(me.__43.style.opacity)>0||!me.__43.style.opacity)?'inherit':'hidden';
				me.__43.ggVisible=true;
			}
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			me.__92.style.transition='none';
			me.__92.style.visibility=(Number(me.__92.style.opacity)>0||!me.__92.style.opacity)?'inherit':'hidden';
			me.__92.ggVisible=true;
			me.__53.style.transition='none';
			me.__53.style.visibility=(Number(me.__53.style.opacity)>0||!me.__53.style.opacity)?'inherit':'hidden';
			me.__53.ggVisible=true;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility=(Number(me._rectangle_2.style.opacity)>0||!me._rectangle_2.style.opacity)?'inherit':'hidden';
			me._rectangle_2.ggVisible=true;
			me.__47.style.transition='none';
			me.__47.style.visibility='hidden';
			me.__47.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			||
				(
					((player.getIsMobile() == true))
				)
			) {
				me.__40.style.transition='none';
				me.__40.style.visibility=(Number(me.__40.style.opacity)>0||!me.__40.style.opacity)?'inherit':'hidden';
				me.__40.ggVisible=true;
			}
		}
		me.__47.onmouseover=function (e) {
			me.elementMouseOver['_47']=true;
		}
		me.__47.onmousemove=function (e) {
			me.__49.style.transition='none';
			me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
			me.__49.ggVisible=true;
		}
		me.__47.onmouseout=function (e) {
			me.elementMouseOver['_47']=false;
		}
		me.__47.ggCurrentLogicStateScaling = -1;
		me.__47.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_47']) {
				me.__49.style.transition='none';
				me.__49.style.visibility=(Number(me.__49.style.opacity)>0||!me.__49.style.opacity)?'inherit':'hidden';
				me.__49.ggVisible=true;
			}
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
		el.ggId="\uc2a4\ud0a8\ubcf4\uae30 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(34,30,31,0.470588);';
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
		me.__47.appendChild(me.__51);
		el=me.__50=document.createElement('div');
		els=me.__50__img=document.createElement('img');
		els.className='ggskin ggskin__50';
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
		me.__47.appendChild(me.__50);
		el=me.__49=document.createElement('div');
		els=me.__49__text=document.createElement('div');
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
		me.__49.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\ubcf4\uae30", params);
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
		me.__47.appendChild(me.__49);
		el=me.__48=document.createElement('div');
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
		me.__48.ggIsActive=function() {
			return (me.__48.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__48.ggTimestamp) / me.__48.ggTimeout) % 2 == 0));
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
				((me.__48.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__48.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__48.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__48.style.transition='';
				if (me.__48.ggCurrentLogicStateVisible == 0) {
					me.__48.style.visibility=(Number(me.__48.style.opacity)>0||!me.__48.style.opacity)?'inherit':'hidden';
					me.__48.ggVisible=true;
				}
				else {
					me.__48.style.visibility=(Number(me.__48.style.opacity)>0||!me.__48.style.opacity)?'inherit':'hidden';
					me.__48.ggVisible=true;
				}
			}
		}
		me.__48.logicBlock_visible();
		me.__48.ggActivate=function () {
			me.__49.style.transition='none';
			me.__49.style.visibility='hidden';
			me.__49.ggVisible=false;
		}
		me.__48.ggCurrentLogicStateVisible = -1;
		me.__48.ggUpdateConditionTimer=function () {
			me.__48.logicBlock_visible();
		}
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		me.__47.appendChild(me.__48);
		me.divSkin.appendChild(me.__47);
		el=me.__43=document.createElement('div');
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
		me.__43.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__43.logicBlock_position = function() {
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
			if (me.__43.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__43.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__43.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__43.ggCurrentLogicStatePosition == 0) {
					me.__43.style.left='10px';
					me.__43.style.top='45px';
				}
				else {
					me.__43.style.left='15px';
					me.__43.style.top='95px';
				}
			}
		}
		me.__43.logicBlock_position();
		me.__43.logicBlock_size = function() {
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
			if (me.__43.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__43.ggCurrentLogicStateSize = newLogicStateSize;
				me.__43.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__43.ggCurrentLogicStateSize == 0) {
					me.__43.style.width='110px';
					me.__43.style.height='100px';
					skin.updateSize(me.__43);
				}
				else if (me.__43.ggCurrentLogicStateSize == 1) {
					me.__43.style.width='200px';
					me.__43.style.height='200px';
					skin.updateSize(me.__43);
				}
				else {
					me.__43.style.width='200px';
					me.__43.style.height='200px';
					skin.updateSize(me.__43);
				}
			}
		}
		me.__43.logicBlock_size();
		me.__43.logicBlock_scaling = function() {
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
			if (me.__43.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__43.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__43.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__43.ggCurrentLogicStateScaling == 0) {
					me.__43.ggParameter.sx = 0.85;
					me.__43.ggParameter.sy = 0.8;
					me.__43.style.transform=parameterToTransform(me.__43.ggParameter);
					skin.updateSize(me.__43);
				}
				else {
					me.__43.ggParameter.sx = 1;
					me.__43.ggParameter.sy = 1;
					me.__43.style.transform=parameterToTransform(me.__43.ggParameter);
					skin.updateSize(me.__43);
				}
			}
		}
		me.__43.logicBlock_scaling();
		me.__43.logicBlock_visible = function() {
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
			if (me.__43.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__43.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__43.style.transition='left 0s, top 0s, width 0s, height 0s, transform 0s';
				if (me.__43.ggCurrentLogicStateVisible == 0) {
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
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__44=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.470588);';
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
		me.__44.onclick=function (e) {
			me.__37.style.transition='none';
			me.__37.style.visibility=(Number(me.__37.style.opacity)>0||!me.__37.style.opacity)?'inherit':'hidden';
			me.__37.ggVisible=true;
			me.__43.style.transition='none';
			me.__43.style.visibility='hidden';
			me.__43.ggVisible=false;
			player.setVariableValue('vis_mapangle', true);
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_41=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
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
				((player.getViewerSize().width <= 460))
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
		el=me.__46=document.createElement('div');
		els=me.__46__text=document.createElement('div');
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
		hs+='color : rgba(255,255,255,1);';
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
		me.__46.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__46.ggUpdateText();
		el.appendChild(els);
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
		me.__46.logicBlock_scaling = function() {
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
			if (me.__46.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__46.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__46.style.transition='transform 0s';
				if (me.__46.ggCurrentLogicStateScaling == 0) {
					me.__46.ggParameter.sx = 0.7;
					me.__46.ggParameter.sy = 0.7;
					me.__46.style.transform=parameterToTransform(me.__46.ggParameter);
					skin.updateSize(me.__46);
				}
				else {
					me.__46.ggParameter.sx = 1;
					me.__46.ggParameter.sy = 1;
					me.__46.style.transform=parameterToTransform(me.__46.ggParameter);
					skin.updateSize(me.__46);
				}
			}
		}
		me.__46.logicBlock_scaling();
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_41.appendChild(me.__46);
		me.__44.appendChild(me._rectangle_41);
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
		me.__44.appendChild(me._map_11);
		el=me.__45=document.createElement('div');
		els=me.__45__text=document.createElement('div');
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
		hs+='bottom : 10px;';
		hs+='color : rgba(119,119,119,1);';
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
		me.__45.ggUpdateText=function() {
			var params = [];
			var hs = player._("+ \ud06c\uac8c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__45.ggUpdateText();
		el.appendChild(els);
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
		me.__44.appendChild(me.__45);
		me.__43.appendChild(me.__44);
		me.divSkin.appendChild(me.__43);
		el=me.__40=document.createElement('div');
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
		me.__40.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__40.logicBlock_position = function() {
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
			if (me.__40.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__40.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__40.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__40.ggCurrentLogicStatePosition == 0) {
					me.__40.style.left='5px';
					me.__40.style.bottom='-120px';
				}
				else {
					me.__40.style.left='5px';
					me.__40.style.bottom='0px';
				}
			}
		}
		me.__40.logicBlock_position();
		me.__40.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 3;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__40.ggCurrentLogicStateVisible == 0) {
					me.__40.style.visibility=(Number(me.__40.style.opacity)>0||!me.__40.style.opacity)?'inherit':'hidden';
					me.__40.ggVisible=true;
				}
				else if (me.__40.ggCurrentLogicStateVisible == 1) {
					me.__40.style.visibility=(Number(me.__40.style.opacity)>0||!me.__40.style.opacity)?'inherit':'hidden';
					me.__40.ggVisible=true;
				}
				else if (me.__40.ggCurrentLogicStateVisible == 2) {
					me.__40.style.visibility="hidden";
					me.__40.ggVisible=false;
				}
				else if (me.__40.ggCurrentLogicStateVisible == 3) {
					me.__40.style.visibility="hidden";
					me.__40.ggVisible=false;
				}
				else {
					me.__40.style.visibility="hidden";
					me.__40.ggVisible=false;
				}
			}
		}
		me.__40.logicBlock_visible();
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__41=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.470588);';
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
		me.__41.onclick=function (e) {
			me.__37.style.transition='none';
			me.__37.style.visibility=(Number(me.__37.style.opacity)>0||!me.__37.style.opacity)?'inherit':'hidden';
			me.__37.ggVisible=true;
			me.__40.style.transition='none';
			me.__40.style.visibility='hidden';
			me.__40.ggVisible=false;
			player.setVariableValue('vis_mapangle', true);
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_40=document.createElement('div');
		el.ggId="Rectangle 4-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
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
				((player.getViewerSize().width <= 460))
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
					me._rectangle_40.style.width='65px';
					me._rectangle_40.style.height='30px';
					me._rectangle_40.style.left = 'calc(50% - (65px / 2))';
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
		el=me.__42=document.createElement('div');
		els=me.__42__text=document.createElement('div');
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
		hs+='color : rgba(255,255,255,1);';
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
		me.__42.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__42.ggUpdateText();
		el.appendChild(els);
		me.__42.ggIsActive=function() {
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
		me.__42.logicBlock_scaling = function() {
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
			if (me.__42.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__42.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__42.style.transition='transform 0s';
				if (me.__42.ggCurrentLogicStateScaling == 0) {
					me.__42.ggParameter.sx = 0.7;
					me.__42.ggParameter.sy = 0.7;
					me.__42.style.transform=parameterToTransform(me.__42.ggParameter);
					skin.updateSize(me.__42);
				}
				else {
					me.__42.ggParameter.sx = 1;
					me.__42.ggParameter.sy = 1;
					me.__42.style.transform=parameterToTransform(me.__42.ggParameter);
					skin.updateSize(me.__42);
				}
			}
		}
		me.__42.logicBlock_scaling();
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_40.appendChild(me.__42);
		me.__41.appendChild(me._rectangle_40);
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
		me.__41.appendChild(me._map_10);
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
		hs+='color : rgba(119,119,119,1);';
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
		me.__41.appendChild(me._text_4);
		me.__40.appendChild(me.__41);
		me.divSkin.appendChild(me.__40);
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
		el=me.__37=document.createElement('div');
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
		me.__37.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__37.logicBlock_position = function() {
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
			if (me.__37.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__37.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__37.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__37.ggCurrentLogicStatePosition == 0) {
					me.__37.style.left = 'calc(50% - (100% / 2) + (0px / 2) + 5px)';
					me.__37.style.top = 'calc(50% - (70% / 2) + (0px / 2) + -120px)';
				}
				else {
					me.__37.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__37.style.top='calc(50% - ((70% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__37.logicBlock_position();
		me.__37.logicBlock_size = function() {
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
			if (me.__37.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__37.ggCurrentLogicStateSize = newLogicStateSize;
				me.__37.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__37.ggCurrentLogicStateSize == 0) {
					me.__37.style.width='100%';
					me.__37.style.height='70%';
					me.__37.style.left = 'calc(50% - (100% / 2))';
					me.__37.style.top = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__37);
				}
				else {
					me.__37.style.width='100%';
					me.__37.style.height='70%';
					me.__37.style.left = 'calc(50% - (100% / 2))';
					me.__37.style.top = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__37);
				}
			}
		}
		me.__37.logicBlock_size();
		me.__37.logicBlock_scaling = function() {
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
			if (me.__37.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__37.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__37.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__37.ggCurrentLogicStateScaling == 0) {
					me.__37.ggParameter.sx = 1;
					me.__37.ggParameter.sy = 0.8;
					me.__37.style.transform=parameterToTransform(me.__37.ggParameter);
					skin.updateSize(me.__37);
				}
				else {
					me.__37.ggParameter.sx = 1;
					me.__37.ggParameter.sy = 1;
					me.__37.style.transform=parameterToTransform(me.__37.ggParameter);
					skin.updateSize(me.__37);
				}
			}
		}
		me.__37.logicBlock_scaling();
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.470588);';
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
		me.__38.logicBlock_size = function() {
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
			if (me.__38.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__38.ggCurrentLogicStateSize = newLogicStateSize;
				me.__38.style.transition='width 0s, height 0s';
				if (me.__38.ggCurrentLogicStateSize == 0) {
					me.__38.style.width='100%';
					me.__38.style.height='100%';
					me.__38.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__38);
				}
				else {
					me.__38.style.width='70%';
					me.__38.style.height='100%';
					me.__38.style.left = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__38);
				}
			}
		}
		me.__38.logicBlock_size();
		me.__38.onclick=function (e) {
			me.__37.style.transition='none';
			me.__37.style.visibility='hidden';
			me.__37.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 960))
				)
			) {
				me.__40.style.transition='none';
				me.__40.style.visibility=(Number(me.__40.style.opacity)>0||!me.__40.style.opacity)?'inherit':'hidden';
				me.__40.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width > 960))
				)
			) {
				me.__43.style.transition='none';
				me.__43.style.visibility=(Number(me.__43.style.opacity)>0||!me.__43.style.opacity)?'inherit':'hidden';
				me.__43.ggVisible=true;
			}
			player.setVariableValue('vis_mapangle', false);
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4-\ubaa8\ubc14\uc77c-\ud655\ub300";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
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
		el=me.__39=document.createElement('div');
		els=me.__39__text=document.createElement('div');
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
		hs+='color : rgba(255,255,255,1);';
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
		me.__39.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
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
		me.__39.logicBlock_size = function() {
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
			if (me.__39.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__39.ggCurrentLogicStateSize = newLogicStateSize;
				me.__39.style.transition='width 0s, height 0s';
				if (me.__39.ggCurrentLogicStateSize == 0) {
					me.__39.style.width='90%';
					me.__39.style.height='100%';
					me.__39.style.left = 'calc(50% - (90% / 2))';
					me.__39.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__39);
				}
				else {
					me.__39.style.width='100%';
					me.__39.style.height='100%';
					me.__39.style.left = 'calc(50% - (100% / 2))';
					me.__39.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__39);
				}
			}
		}
		me.__39.logicBlock_size();
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me.__39);
		me.__38.appendChild(me._rectangle_4);
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
		me.__38.appendChild(me._map_1);
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
		hs+='height : 22px;';
		hs+='position : absolute;';
		hs+='right : 100px;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
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
		me.__38.appendChild(me._image_2);
		me.__37.appendChild(me.__38);
		me.divSkin.appendChild(me.__37);
		el=me.__15=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me.__16=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 0px solid #000000;';
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
		me.__16.ggIsActive=function() {
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
		me.__16.onclick=function (e) {
				player.playSound("_background","1");
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ucee8\ud150\uce20";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 700px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((700px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
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
		me.__17.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 960))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__17.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__17.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__17.style.transition='transform 0s';
				if (me.__17.ggCurrentLogicStateScaling == 0) {
					me.__17.ggParameter.sx = 0.75;
					me.__17.ggParameter.sy = 0.75;
					me.__17.style.transform=parameterToTransform(me.__17.ggParameter);
					skin.updateSize(me.__17);
				}
				else {
					me.__17.ggParameter.sx = 1;
					me.__17.ggParameter.sy = 1;
					me.__17.style.transform=parameterToTransform(me.__17.ggParameter);
					skin.updateSize(me.__17);
				}
			}
		}
		me.__17.logicBlock_scaling();
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__35=document.createElement('div');
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4\uad00\ub78c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 10%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me.__36=document.createElement('div');
		els=me.__36__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 26px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__36.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__36.ggUpdateText();
		el.appendChild(els);
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
		el=me._container_40=document.createElement('div');
		el.ggId="Container 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70px;';
		hs+='left : 400px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_40.ggIsActive=function() {
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
		me._container_40.ggUpdatePosition=function (useTransition) {
		}
		el=me._tip0=document.createElement('div');
		els=me._tip0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TIP";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(50,105,78,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 26px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tip0.ggUpdateText=function() {
			var params = [];
			var hs = player._("Tip", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tip0.ggUpdateText();
		el.appendChild(els);
		me._tip0.ggIsActive=function() {
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
		me._tip0.ggUpdatePosition=function (useTransition) {
		}
		me._container_40.appendChild(me._tip0);
		me.__36.appendChild(me._container_40);
		me.__35.appendChild(me.__36);
		me.__17.appendChild(me.__35);
		el=me.__24=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58";
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30% + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
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
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me.__110=document.createElement('div');
		el.ggId="\uc544\uc774\ucf581";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -100px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33.5%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
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
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
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
		el.ggId="Image 8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8.ggIsActive=function() {
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
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		els=me.__34__img=document.createElement('img');
		els.className='ggskin ggskin__34';
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
		el.ggId="\uc67c\ucabd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -40px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__34.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__34.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__34.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__34.style.transition='left 300ms ease 0ms, top 300ms ease 0ms';
				if (me.__34.ggCurrentLogicStatePosition == 0) {
					me.__34.style.left='-30px';
					me.__34.style.top = 'calc(50% - (50px / 2))';
				}
				else {
					me.__34.style.left='-40px';
					me.__34.style.top='calc(50% - ((50px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__34.logicBlock_position();
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me._image_8.appendChild(me.__34);
		el=me.__33=document.createElement('div');
		els=me.__33__img=document.createElement('img');
		els.className='ggskin ggskin__33';
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
		el.ggId="\uc624\ub978\ucabd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : -40px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
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
		me.__33.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__33.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__33.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__33.style.transition='right 300ms ease 0ms, top 300ms ease 0ms';
				if (me.__33.ggCurrentLogicStatePosition == 0) {
					me.__33.style.right='-30px';
					me.__33.style.top = 'calc(50% - (50px / 2))';
				}
				else {
					me.__33.style.right='-40px';
					me.__33.style.top='calc(50% - ((50px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__33.logicBlock_position();
		me.__33.ggActivate=function () {
			player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me._image_8.appendChild(me.__33);
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=150;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 88px;';
		hs+='position : absolute;';
		hs+='top : 343px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_2.ggTimestamp) / me._timer_2.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style.transition='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.logicBlock_visible();
		me._timer_2.ggActivate=function () {
			player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me._image_8.appendChild(me._timer_2);
		me.__110.appendChild(me._image_8);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; line-height:20px; letter-spacing:-1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c8\uc6b0\uc2a4 \uc67c\ucabd\uc744 \ub204\ub978\ucc44 \uc6c0\uc9c1\uc774\uc2dc\uba74\n\uacf5\uac04\uc744 \ub458\ub7ec\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
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
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.__110.appendChild(me._text_1);
		me.__24.appendChild(me.__110);
		el=me.__26=document.createElement('div');
		el.ggId="\uc544\uc774\ucf582";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((33.5% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33.5%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
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
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		els=me.__28__img=document.createElement('img');
		els.className='ggskin ggskin__28';
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
		el.ggId="\ub9c8\uc6b0\uc2a4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me.__32=document.createElement('div');
		els=me.__32__img=document.createElement('img');
		els.className='ggskin ggskin__32';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQG'+
			'AAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6c'+
			'wR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCa'+
			'IkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj'+
			'9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj'+
			'1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisr'+
			'kw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUO'+
			'ihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNI'+
			'Uk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAAD2EAAA9hAag/p2kAAAieSURBVHic7Z17rB1VFYe/K0XwhlhDRGumIo5FHRGDGQwxoqGCaCE68jDysCpKsY6IRaKoFbUBGiXyUGAIBgIqUaKIDtIWeYrGmKhjCERHEzNR4/CwQlusl1p7uf6x5uDtdM4998ze65x9ZX5/7j17rcn61pxzZu+99pmYmZmhkzt6zrhvoNPu6oA4pg6IY+qAOKYOiGPqgDimDohj6oA4pg6IY+qAOKYOiGPqgDimDohj6oA4pkXjvoFBWrL80D3avMB/DfAx4K3AQVXzQ8BPgaTMiz8r3MphwEeA5ZXPGeBB4D7gGuAvsy9+9L6HWjmZcH09ZDYQL/D3AS5FAtMvmXYBFwIXl3kxbeEW9q58ng1MzO'+
			'FzHbAeeBraA1kwH1le4E8CtyNPxlxP9iIkODd7gb+XodtJYBPwcfrD6Pm8EPjmgOsGakEA8QL/ecAPgWOGGHYy8BkDt5PAbcDRQ4x5H/BpA5/uA6k+pm4Fjm0x/PNe4L+sxbheAgwDo6cvAC9tMQ5wHEgYR89FYLyjpYl9ke+bYWSSACBP1lktx7oLpIJxC3CcoakVQ1xrmgBtfO4mJ4FUMG4G3mnB3KvmeZ2tBBjG5x5yDkgYR4uA7wAnWDI5n3ctmwkA8lO5lZwCEsbRXgiMkyyafWxAv+0EAHi47UBngFQwbgLeY9n0r+bo00gAgJ+1HegEkArGjcApCuav79OulQAgkFtp7EAqGNchL1W2dX+ZFxsb2jUT4F7gzraDxwokjKMJ4BvABxXMl8DpDe2aCfAw8AETA2MDMgvGhxTMbwbeXuZFWWvXTIDHkKmdv5kY'+
			'GQuQCkYCnKlgfjNwTJkXv6u1TwDXopcARwO5qaGRA6lgfB1YrWD+ceDYMi8erLVPAFcDqxR8bkaejHoCtNI4npDLkbUF29qCwHig1j4BfA34qILPx5E5r3oCtNZIgYRxdBnwCQXT2xAYv23ouwxZz7CtLQiMB2waHRmQMI4uAc5VMN2D8ZuGvkuBNVo+gaYEMNJIgIRxtB74lILpJ4EVZV40vY1/Bfikgs8ejKYEMJY6kDCO1gGfVTC9HTiuzItfNvRdjOHKXR89iUytzzUdYyRVIGEcfRFZQbOtKQTGLxr61gGfU/C5HZmab0oAa1IDEsbRWuBLCqZ7MH7e0KeaAEBTAliVCpAwjs4HLlIwPQW8q8yL+xv6VBMAaEoA67IOJIyj84Av27YLPAWcUObFPQ19qgkANCWAiqwCCeNoDfBVmzYr/Rs4scyLpllU1QQAmh'+
			'JATdaAhHF0DvISZls7ERh3NPStQTEBMJhGbysrQMI4ioErMNy116CdwMl91jRUEwBoSgB1GQMJ42gVcBU6ME4t8+LHDX1noZgAQFMCjERGQMI4Wo7s/LYdmF3A6VmS3trQtwKZuteAcQrQlAAjU2sg1d6p65EVOJuaRmDc0tC3D5IAtn3uAk5Dto+OVSZPyHuBl9u6kUrTwMosSb/Xp38l0Gav7iCfpwE/sGy3lUyA2N6tMQ2ckSXpd+e45t0KPlcC37dst7VMgLzB2l1IkcuZWZJ+e8B1h1v0OQ2cAcyVACOXCZADrN0FXJkl6Y3zuO7FFn1eDgxKgJHLBMhWWzcBrArjaD7FONss+oyBoyzasyITIMY7LGZpEkjDODpqwHV/suxzA/BmizaNZQLkNmt3IZoENoRxNFeAbL8jTCIvgW+ybLe1TIBchyz029QksDGM'+
			'o34BuhK7H1sA+yFQ3mjZbiu1BpIl6RZkptW29kOelKYAPYHMYdnW85FqW5u/HFvJaOokS9Ib0FmHWAxsCuOoKUDfQurBNXzeBYQKtuct48nFLEkvAC6xcC91LQbu9AK/KUBr0ZnpXYxMub9ewfa8ZGX6PUvS89EJ0AsQKIc19J2H7Ei0rf0RKK9TsD1Q1haosiTVDNBdXuA3BehcZOrftl4I3A28VsH2nLK9pq4aIC/wD6m1zyBf8tcq+DwAWb4NFGz3lVUgWZJqB+heL/DrAZpBNlL3K10z0YuQiqjWZc7DyvqukwqKaoC8wK8HaAZZRbxBwecS5Ek5WMH2HlLZl1VBUQ2QF/j1AD2N1H9oTBh6yJPyCgXbu0lt52KWpOoB8gK/HiDNKfWlCBTbi3K7SXVvb5ak6gHyAr8eIM1FpwMRKAcq2AZGsPu9gqIaIC/w6w'+
			'HSXJY9CDnWb6mC7dHUh1RQVAPkBX49QJobF3yUoIysgipL0l6AfqRg3kegeLX23tae2xV8LkN+fb3EptGR1hhmSboT2a2yQcH8MuTjqx6gnchZJpsUfL4S+U6xtrQ88ircCsqJ6AXoHi/w6wHq+fyJgs9XI0+KlT0GYzk4YBYUjc3MAQKlHqAdlc+7FXwegiUoYztaI0vSHch2f60AbayOlp2tKSBCDly2rUORJeZ9TYyM9fCZLEl7AdIoiDkcqcStawo4Hp2KqCMwXBsa+/FMFRStkrHVXuAva2jXrBlczf+OPx9aYwcCz0A5HvsBWgSc2qdve+XTdlXt3sD72w52AghAlqT/RCdAc23x2YaUN/zass8j2g50BghAlqQaARr0jtA7mSGz6HNJ24FOAYFnoNgM0K55XLMVuwfJ/KftQOeAAGRJuhV7ASrmed0TwNuw'+
			'c9TSH9sOdBIIQJaktgI0zDzWP7BzGFnrglFngQBkSWoaoBI5PnwYbUb+uaftZvK/YjDD7DQQgDIvTAK0psyLp1qM+ztyhmKbj55zkGmaVnIeCECZF70A/WGIYevLvBj26ZitRxgeykVAauBzYQABKPPiEeBIBpdBTAFnl3mx1obbyuegMoh/ITttLjB1uKD+FKwnL/CXAx9Gim2WIkdh/B4pK7imgmdbb0H+HObIyucO5LvtDqRu/tHZF//f/kvbs00L5iPr2aIOiGPqgDimDohj6oA4pg6IY+qAOKYOiGPqgDimDohj6oA4pg6IY+qAOKb/AojBOZf+yMFRAAAAAElFTkSuQmCC';
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
		el.ggId="\uc544\ub798";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:270,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
		me.__32.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__32.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__32.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__32.style.transition='left 300ms ease 0ms, bottom 300ms ease 0ms';
				if (me.__32.ggCurrentLogicStatePosition == 0) {
					me.__32.style.left = 'calc(50% - (50px / 2))';
					me.__32.style.bottom='10px';
				}
				else {
					me.__32.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__32.style.bottom='20px';
				}
			}
		}
		me.__32.logicBlock_position();
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__32);
		el=me.__29=document.createElement('div');
		els=me.__29__img=document.createElement('img');
		els.className='ggskin ggskin__29';
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
		el.ggId="\uc704";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
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
		me.__29.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__29.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__29.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__29.style.transition='left 300ms ease 0ms, top 300ms ease 0ms';
				if (me.__29.ggCurrentLogicStatePosition == 0) {
					me.__29.style.left = 'calc(50% - (50px / 2))';
					me.__29.style.top='-30px';
				}
				else {
					me.__29.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__29.style.top='-40px';
				}
			}
		}
		me.__29.logicBlock_position();
		me.__29.ggActivate=function () {
			player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__29);
		me.__26.appendChild(me.__28);
		el=me.__27=document.createElement('div');
		els=me.__27__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__27.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c8\uc6b0\uc2a4 \ud720\uc744 \uc0ac\uc6a9\ud558\uc2dc\uba74\n\ud655\ub300\/\ucd95\uc18c\ub97c \ud558\uc2e4 \uc218 \uc788\uc73c\uc2ed\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__27.ggUpdateText();
		el.appendChild(els);
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
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		me.__26.appendChild(me.__27);
		me.__24.appendChild(me.__26);
		el=me.__31=document.createElement('div');
		el.ggId="\uc544\uc774\ucf583";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -100px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33.5%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
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
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me.__25=document.createElement('div');
		els=me.__25__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubc1c\ubc14\ub2e5 \uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 122%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__25.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud654\uc0b4\ud45c \uc120\ud0dd \ub610\ub294 \uacf5\uac04 \uce74\ud14c\uace0\ub9ac\ub85c \uacf5\uac04\uc744 \uc790\uc720\ub86d\uac8c \uc774\ub3d9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__25.ggUpdateText();
		el.appendChild(els);
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
		me.__31.appendChild(me.__25);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
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
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
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
		me._image_3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_3.style.transition='right 800ms linear 0ms, top 800ms linear 0ms';
				if (me._image_3.ggCurrentLogicStatePosition == 0) {
					me._image_3.style.right='20px';
					me._image_3.style.top='-20px';
				}
				else {
					me._image_3.style.right='20px';
					me._image_3.style.top='0px';
				}
			}
		}
		me._image_3.logicBlock_position();
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me._image_3);
		me.__24.appendChild(me.__31);
		me.__17.appendChild(me.__24);
		el=me.__19=document.createElement('div');
		el.ggId="\ubcf8 \ub0b4\uc6a9";
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30% + 0px) / 2) + 30%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me._rectangle_50=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
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
		me._rectangle_50.ggIsActive=function() {
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
		me._rectangle_50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23=document.createElement('div');
		els=me.__23__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf8 \ub0b4\uc6a9 \uba58\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:23px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__23.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b\n\ubcf8 \ucee8\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uc81c\uc791\ub41c \uac83\uc73c\ub85c \uc2e4\uc81c\uc640 \ucc28\uc774\uac00 \uc788\uc73c\uba70 \uac01\uc885 \uc804\uc2dc\ubb3c \ubc0f \uc18c\ud488, \uc5f0\ucd9c\uc6a9 \uc2dc\uacf5\ubd80\ubd84\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub3d9\uc2dd \uac00\uad6c \ubc0f \uc18c\ud488\ub4e4\uc740 \uc81c\uacf5 \ud488\ubaa9\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uad6c\uccb4\uc801\uc778 \ud488\ubaa9\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\uc640 \ucd5c\uc2e0\uc815\ubcf4\ub294 \uace0\uac1d\uc13c\ud130\uc5d0 \uc9c1\uc811 \ubb38\uc758\ud574 \uc8fc\uc138\uc694. \ubcf8 \ucee8\ud150\uce20\ub97c \ubb34\ub2e8\uc73c\ub85c \ucea1\uccd0\ud558\uac70\ub098 \ubc30\ud3ec\ud560 \uc2dc \uc800\uc791\uad8c\ubc95 \uc704\ubc18\uc73c\ub85c \ubc95\uc801\uc778 \uc81c\uc81c\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__23.ggUpdateText();
		el.appendChild(els);
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
		me._rectangle_50.appendChild(me.__23);
		me.__19.appendChild(me._rectangle_50);
		me.__17.appendChild(me.__19);
		el=me.__18=document.createElement('div');
		el.ggId="\uad00\ub78c\ud558\uae30\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__18.onclick=function (e) {
			me.__15.style.transition='none';
			me.__15.style.visibility='hidden';
			me.__15.ggVisible=false;
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #32694e;';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_20.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad00\ub78c\ud558\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_20.ggUpdateText();
		el.appendChild(els);
		me._text_20.ggIsActive=function() {
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
		me._text_20.ggUpdatePosition=function (useTransition) {
		}
		me.__18.appendChild(me._text_20);
		me.__17.appendChild(me.__18);
		me.__16.appendChild(me.__17);
		me.__15.appendChild(me.__16);
		me.divSkin.appendChild(me.__15);
		el=me.__5=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ubc30\uacbd-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 0px solid #000000;';
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
		me.__8.onclick=function (e) {
				player.playSound("_background","1");
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ucee8\ud150\uce20-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60%;';
		hs+='left : calc(50% - ((46.875% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60% + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 46.875%;';
		hs+='pointer-events:none;';
		hs+='min-width:150px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
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
		me.__9.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 620))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().height <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__9.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__9.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__9.style.transition='transform 0s';
				if (me.__9.ggCurrentLogicStateScaling == 0) {
					me.__9.ggParameter.sx = 0.7;
					me.__9.ggParameter.sy = 0.7;
					me.__9.style.transform=parameterToTransform(me.__9.ggParameter);
					skin.updateSize(me.__9);
				}
				else if (me.__9.ggCurrentLogicStateScaling == 1) {
					me.__9.ggParameter.sx = 0.8;
					me.__9.ggParameter.sy = 0.8;
					me.__9.style.transform=parameterToTransform(me.__9.ggParameter);
					skin.updateSize(me.__9);
				}
				else {
					me.__9.ggParameter.sx = 1;
					me.__9.ggParameter.sy = 1;
					me.__9.style.transform=parameterToTransform(me.__9.ggParameter);
					skin.updateSize(me.__9);
				}
			}
		}
		me.__9.logicBlock_scaling();
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4\uad00\ub78c-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 10%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		els=me.__14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__14.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c", params);
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
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 220px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_4.ggIsActive=function() {
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
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._tip=document.createElement('div');
		els=me._tip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TIP-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(50,105,78,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tip.ggUpdateText=function() {
			var params = [];
			var hs = player._("Tip", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tip.ggUpdateText();
		el.appendChild(els);
		me._tip.ggIsActive=function() {
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
		me._tip.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._tip);
		me.__14.appendChild(me._container_4);
		me.__13.appendChild(me.__14);
		me.__9.appendChild(me.__13);
		el=me.__11=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me.__12=document.createElement('div');
		el.ggId="\uc544\uc774\ucf581-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 33.3%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -70px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
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
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_110=document.createElement('div');
		els=me._image_110__img=document.createElement('img');
		els.className='ggskin ggskin_image_110';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAEsCAYAAADq/K67AAAACXBIWXMAAAsTAAALEwEAmpwYAAASf0lEQVR4nO3debBkZXnH8e+VAYZdiSSUiSMaCAaIGkQHd4uU1BBFQEDBtYhS4AIhYEDEZVgGiI4EEWRTMJEgJKKIGykKNdGKDAQRRBQElSCKRAREIOLgzR/vHYXr7ae7T/c5fU4/30/V1Oh9T7/3nRl+95zzrjOzs7NImm6PmXQDJNXPoEsJGHQpAYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUEDLqUgEGXEjDoUgIGXUrAoEsJGHQpAYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCR'+
			'h0KQGDLiVg0KUEDLqUgEGXEjDoUgIGXUrAoEsJGHQpAYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUEDLqUgEGXEjDoUgIGXUrAoEsJGHQpAYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUEDLqUgEGXElg06Qa02dKlSyfdhEE8HdgT2BHYDngcsBhYDdwN3AZcC3wd+Cxwx2Sa2S6rVq2adBMaZdC764XACuD5PcoXAZvN/doe2A94GPgCcBxwZQNtVEv46N49i4BTgK/QO+S9rAXsClwBnAGsN9aWqbUMeresA1wCHATMjFDPDHAA8DXKHV9TzqB3y6nALmOsb3vgMmD9'+
			'MdapFjLo3bET8KYa6n06cHoN9apFDHp3rGC0x/XI6yi99ppSBr0bnkUcxPuBE+au24jyA+Gxc5/ZH7gI+HXw+Rlg5TgaqnZyeK0bdg3Kfgm8APjmvK/fC6ya+/URYAlwPvC8HvU8D9gW+PYoDVU7eUfvhp2CslP4/ZAv5H+AlwI3B9fsM0Sb1CEGvRu2Dco+M0Q99wInBeUvHKIudYhBb78NKO/bvXx3yPquCMq2HrIudYRBb7+oH+Ve4BdD1veDoGzxkHWpIwx6Pg8FZU6cmVIGPZ8HgrK1G2uFGmXQ28/waWQGvf2ix+no7lyVcyumkEHvtmi2WyTqwNugYp1qMYOe0+ykG6BmGXQpAYOe0/8FZRs11go1xqDn9KugzP8mppD/qFICBj2n3wRl6zbWCjXGoLdf9G/0YMU67wvKnO8+hQx6+0WdY9G8dem3DLrmq2'+
			'tfOk2QQc/p/qBs48ZaocYY9JxWT7oBapZBlxIw6DlFi2HcfGIKGfT2q+MgRDefSMagt986QVk0Hi79lkHvtmiGW1VuPDGFDHpObjyRjEHPyY0nkjHoUgIGvf3q2AjCjSeSMejtV8e/kRtPJOM/arc5lVUDMejdFi1OibjxRDIGPSc3nkjGoLffWpNugLrPoLffhg1/PzeemEIGPSc3nkjGoHdb1c44e+uTMejdZmA1EIOekxtPJOOSxParY1x7kI0n1gV2BZYB2wObUxbD/BhYBXwe+HfqWSqrMTPo7df0uPYi4BDgncBmC5Q/AdgBeCtwC3Ac8HHg4Ybapwp8dO+2Ou6m+wH/yMIhn+9PgXOBq4Cn1dAWjYlB77aqW0lFG09Uecr7S8rj/P7VmqO6GfSc6th4YjFwFuWRXy1j0DVuK/DO3joGvf3q2MMtWo8+DqcA'+
			'29T8PTQEg95+dYyMRDvMzHcbpYd9C2Br4HDgnj6fWQx8FOfNt4ZB77aqU2AHdQGwHfBh4FbgJuD9wFOBf+nz2R2BV9faOg3MoHdb1Smw/TrjZoHlwL4s3EP/U+C1wGF96lqOczVawaDnFA2vAVwMHD1APScBZwflW1J+IGjCDHr7Nb0eHeBfh7j2XcC9Qfnf47v6xBn09ot2mPllTd/zG0Nc+7+U9/ZetgGeP1pzNCqD3m1V55dHi1qgdLwN4xTgzqB82dzvzwSOBD4FXE/p0b8VuAY4HziAsnhGY2ZHSfvV8cM4WqZ6J8OPs98HnAoc06N8X2BPyvDcQpYAz5i77kPAhcC7gR8O2Q714B29/Zo+OeWuip+7LCh7Mr1DPt/alA68Gyjj9xoDg95tdZyPvnb/SxZ041hbAetRnhLOwp1wR2bQu63qMtXoKWGdinXeDT'+
			'xY8bOR/SnDeBqBQW+/qsGL1LUrzEM11Xsw8Kqa6k7BoLffejXUGU2dbetj8snUs8AnBYPebf1muPUS3dFHmaAzyNPHrcD7gJ2AJ1Lmze8FXNLnc5sDB47QttQMerdV3UCijk48iDeynAWOB7YCjgC+DPyI0ol3EbAb8Drix/+D8b/ZSvxLa786HlfvrqFOgJt7fP1h4A3AUcRj+OcBBwXlS4AXV2pZcga9/aJJTaPc0XvNfrupYp1QdpeZ36ZZ4M2UnWIHcTZwbVD+8kf873Upj/7bAY8dsP6UDHp1z6bM8b6KcoecBX4OXAecDryU+v9+q76jw8Kz2GYp2zdX9c+U2W03UvoBrqf0lkcr3BZqw3lB+S7AW4D/pPzA+g7wLcrf/Q2UmXXPHrbh025mdraOfQKnw9KlS+d/aQNKh9BbgKcMUMXNwHuAT4zQjM9Rfmgs'+
			'5GWUgxSq2o/yvrwlZSHL8ZQlqpP2DMr891F8mrJy7paFCletWjVi9d3iHX1wLwC+DaxksJBDCdD5wBcZbJ/0hUSnm456aMK5lEffRZS74MUj1jcu19N/4U0/e1B+WCzrd2EGBn0wewOXA0+q+PlllDtmlUMOorXcdS1TnbTVwNVjqGcj4DPAc8dQV6cZ9P6eCfwT1eeAr/EnwFcZvte46SOZ2mLUR/c11qG8Oj1uTPV1kkGPrQV8hPHNTtuY8hi/1xCficamo6GqrvveGOtaArxjjPV1jkGP7UHpGBqnxZTdVV/e78I50aP7qO+xbdZrTH6+b1Mm3vTzVmCT6s3pNoMee02f8h9SjiDamvJo/3hKT2+/d+e1KI+Tv9etv4CoM26afX+Aa44F/oJyx94Z+EJw7QbA7qM3q5sMeuw5QdlZlP3QTqBMMllN2bRh5dzX++'+
			'27tj5lE8ZNR2hf3fu6T9KtxBOCzqMMXc7O/bqMMgwZbWy5y9ha1zEGPfZHQdkR9F5/fRtlOO6iPvUvAc4hfjxfPyiruq97F/yK3ptZ/Jgy730hXwrqTHu0s0GPRUHq1xH2AGVW2If7XLcb8aqsqLe/7jPUJu1YFp5S+3Z6z9e/LqjvieNoVBcZ9NhPg7JnDPD5hymdQKf3ue59lLPNFhKtDx/mDLUuOh94JWWaK3O/v4p4puH19H7k35CkG6Ia9NgNQdmuQ9RzEGXCTS8bAmcGZb1M86P7Gp+k9HnMzP3+b32uv494dV7K8XSDHvtyUPZGBt/mac0yzZ8H1+w8d80wprkzbhTRqEcdO/a0nkGPXRqUPZ7yWDmo2ymLYSIn8egOwOhuPuo896xGneHYSQY9dg3xnOtDGO5csQuJh382pSyzXGMSxzFNg2j5bjSKMbUM'+
			'en9Rr/kzGX5s9iDgZ0H53vxuYkc0/XXae9xH4drreQx6f58A7gnK3zVkfXcSb5cEcBplumb0PjntPe4aI4Pe34PEw2PPAf5qyDovoGwo0csTKNsyRdNf7YjTwAz6YE4iDtawd3WAtxG/Zx9IvKQ1w9CaxsSgD+Zn9B7nhhLIYc8AvxVYHpSvRbx/271Dfj8lZtAHt5L4bLGjKtT5QeCbQXn06D7NS1Q1ZgZ9cD+h7LHWyzJghyHrXE15RK9yFprDa9U4vKa+TiQ+SeTdFepcBZxR4XMGvRonzKiv2yh7l/eyK9WWQr6T8sQwDHvdq6njaOfWM+jDO5HePd4zlM0QhnUvcOiQn7mnwvdRfUc7t5pBH94tlHHwXl5B2d5oWBcQb4U0X7RARnoUg17NCnp3oM1Q7V0dyqKXQd+9DboGZtCr+S7x4pQ9KQf/DetWBp98Y9'+
			'A1MINeXXRXfwzVZssBnAp8bYDr7qhYvxIy6NVdD3wqKN+bsiPKsNZsUtGvV/0HFepWUgZ9NAttXrjGY6g2Ww7KnuZHBuXfId7PTnoUgz6a6yiH+PWyD+Vwhyo+RJl2O98scHLFOpWUQR/dMcR39ao98FBOfdmNsr/5fZQhuB0ph0dIAzPoo7uGeG35PsCfjVD/JZQzzDcG9gWuHKGuLKK99lIy6ONxTFC2FtV74FWNe+3NY9DH47+Bzwfl+wJbNdQWxVLunmvQx+fooGwR1XvgpZEZ9PG5iviu/hrgKQ21RXoUgz5e0bu6d3VNjEEfryuBLwblrwee3FBbpN8y6OPnu7pax6CP3yriu/ob8F1dDTPo9ej3rj7KbDn1l/IM9IhBr8cVxHf11wJbNtSWjDYIypwwo7FaTu858ItwttykOGFGY3Ul8Rz41+BdXQ0x6PV6'+
			'L/Fd3Xd1NcKg1+sa4OKg/NWMtrJNGohBr99yeu8t5129HtGxS76jqxbXAZ8Myl9Ntb3l1Ft07JK97qrN0cQ7xkbj7hrOnwdlKe/mYNCbcgP9T3fZvqG2TLtXBGU3N9aKljHozTma+My24xpsyzTbIyiLlhFPNYPenJuA84PyXYDnNdSWafUk4iejaB/+qWbQmxXd1aGc/qLq9qA8HS3kDuDrDbalVQx6s74PfCwofxHwkmaaMpWix/bP0LtDdOoZ9OatID6j+1h635XU2x8Sv/p8uqmGtJFBb94PgXOC8qWU01g1nN3ovc3zPcCXmmtK+xj0yVgB/CooPxbXVA8remz/HPDrphrSRgZ9Mn4EnBmUPxX4m4baMg02AXYKylM/toNBn6QVwC+C8vcSz9nW7/w1sG6PsgeBSxtsSysZ9Mm5E/hAUP4E4OCG2tJ10Wy4S4'+
			'EHmmpIWxn0yfoAZXy3lyOBzRtqS1etBywLytM/toNBn7T7ibeH3hg4saG2dNVL6H166q+Jd/lJw6BP3kco55/38nrg0Iba0kVRb/tXgLsbakerGfTJWw28IyifoTzin45DbvMtAl4elKed2z6fQW+Hi+nfM3wgcDmwpPbWdMeLgE17lP2GMu1VGPQ2OYj+vcMvpOxDF/UyZxI9tl8B/KSphrSdQW+Pm4HDBrhuU+AiyqN85nH2GWD3oNze9kcw6O1yBvDOAa89kHIm+9Pqa06rLQX+OCj3/fwRDHr7nECZ/hrNhV9jG8qhjgeTb8Vb9Nh+LWVJsOYY9HY6lzJ3+/YBrl0MfBC4BPiDOhvVIouAVwblPrbPY9Db67+ApwOfHfD6lwHfAJ5VW4vaY2dgi6DcoM9j0NvtLso6679jsEf5JcB/APvU2agWiKa83kjZS1+P'+
			'YNDbbxY4mbJ7SjSDbo31KJtQvqXGNk3atkFZtPw3LYPeHVdTdjg9a4BrZ4BTGWy4ros2CcpWNdaKDjHo3fIAcAClx/muPtfOACspK+CmzX1B2Q6NtaJDDHo3XUzpqPvqANcez/QdDnFDUHYksFFTDekKg95dt1OG4M4Y4NqjKOPz0+LyoGxz4kVCKRn0blsNvJnBjl5+B9MT9s8RzzE4FBf/PIpBnw7HAYcPcN20hP0h4D1B+WKm4885NgZ9erwfeBtlOC4yLWH/GGWqay/7UubDC4M+bU6j9Mr3O3poGsL+G+LhwxngJPKtAViQQZ8+ZwNvIkfYL6fM8e/lucDeDbWl1Qz6dDqXwcPe9aG3w4lPYfkHyjt7agZ9ep0L7E//sB8FLK+9NfW5kXiIcQvcH9+gT7lzGCzs75371VVHE+/2ehSwWUNtaSWDPv0GDftySi'+
			'C66C7KwZS9bNynfOoZ9BzWhL3f0NtxwBH1N6cWp1H23evljcSr3qaaQc9j0LCfSDdXvT1EPGloEWWRT0oGPZePUqbM9gv7SuCQ2lszfp+mbLzRyzLiTSumlkHP50zKHvL9wn4S3eytPoy4P2IlCU+8Meg5nUa5Y0dhn6HsbLN7/c0Zq6uBjwfl21J22U3FoOd1Cv0Pb5yhmz3xRxGfenNIQ+1oDYOe28nA2/tcs1UD7Ri32ymLfHrp4p9pJAZdHyDeqOF7TTVkzN5P7zXrNzXZkDYw6IIyH/xdC3x9FljRcFvG5X7gb1m4H+KYhtsycQZda6wAXgt8h7JI5DrKqa0XT7BNo7oI2IvyZ3kA+Nbc/79wko2ahJnZ2X6jLJK6zju6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUEDLqUgEGXEjDoUgIGXUrAoEsJGHQp'+
			'AYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUE/h8C2Kj6mEKLvQAAAABJRU5ErkJggg==';
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
		el.ggId="Image 11";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_110.ggIsActive=function() {
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
		me._image_110.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_130=document.createElement('div');
		els=me._image_130__img=document.createElement('img');
		els.className='ggskin ggskin_image_130';
		hs='data:image/png;base64,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'+
			'Fz0Q+xu+og64dlDQRQxQ013EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXc'+
			'QABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EAAVdxAAFXcQABV3EgP8HB52ZAD1z'+
			'krwAAAAASUVORK5CYII=';
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
		el.ggId="Image 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_130.ggIsActive=function() {
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
		me._image_130.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_130.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_130.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_130.style.transition='transform 0s';
				if (me._image_130.ggCurrentLogicStateScaling == 0) {
					me._image_130.ggParameter.sx = 1.05;
					me._image_130.ggParameter.sy = 1.05;
					me._image_130.style.transform=parameterToTransform(me._image_130.ggParameter);
					skin.updateSize(me._image_130);
				}
				else {
					me._image_130.ggParameter.sx = 1;
					me._image_130.ggParameter.sy = 1;
					me._image_130.style.transform=parameterToTransform(me._image_130.ggParameter);
					skin.updateSize(me._image_130);
				}
			}
		}
		me._image_130.logicBlock_scaling();
		me._image_130.ggUpdatePosition=function (useTransition) {
		}
		me._image_110.appendChild(me._image_130);
		me.__12.appendChild(me._image_110);
		el=me._text_311=document.createElement('div');
		els=me._text_311__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 311";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((142% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 142%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px; line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_311.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud654\uba74\uc744 \ub204\ub978\ucc44 \uc6c0\uc9c1\uc774\uba74\n\uacf5\uac04\uc744 \ub458\ub7ec\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_311.ggUpdateText();
		el.appendChild(els);
		me._text_311.ggIsActive=function() {
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
		me._text_311.ggUpdatePosition=function (useTransition) {
		}
		me.__12.appendChild(me._text_311);
		me.__11.appendChild(me.__12);
		el=me.__20=document.createElement('div');
		el.ggId="\uc544\uc774\ucf582-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 33.3%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33.3% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
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
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		els=me.__22__img=document.createElement('img');
		els.className='ggskin ggskin__22';
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
		el.ggId="\uc544\uc774\ucf582\uc544\uc774\ucf58-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
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
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__210=document.createElement('div');
		els=me.__210__img=document.createElement('img');
		els.className='ggskin ggskin__210';
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
		el.ggId="\uc544\uc774\ucf582-\ubaa8\ubc14\uc77c1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
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
		me.__210.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__210.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__210.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__210.style.transition='transform 0s';
				if (me.__210.ggCurrentLogicStateScaling == 0) {
					me.__210.ggParameter.sx = 1.05;
					me.__210.ggParameter.sy = 1.05;
					me.__210.style.transform=parameterToTransform(me.__210.ggParameter);
					skin.updateSize(me.__210);
				}
				else {
					me.__210.ggParameter.sx = 1;
					me.__210.ggParameter.sy = 1;
					me.__210.style.transform=parameterToTransform(me.__210.ggParameter);
					skin.updateSize(me.__210);
				}
			}
		}
		me.__210.logicBlock_scaling();
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me.__210);
		me.__20.appendChild(me.__22);
		el=me.__21=document.createElement('div');
		els=me.__21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc544\uc774\ucf58\ud0dd\uc2a4\ud2b82-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((142% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 142%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px; line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__21.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub450 \uc190\uac00\ub77d\uc73c\ub85c \ud654\uba74\uc744\n\ud655\ub300\/\ucd95\uc18c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__21.ggUpdateText();
		el.appendChild(els);
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
		me.__20.appendChild(me.__21);
		me.__11.appendChild(me.__20);
		el=me.__30=document.createElement('div');
		el.ggId="\uc544\uc774\ucf583-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -70px;';
		hs+='height : 33.3%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAEsCAYAAADq/K67AAAACXBIWXMAAAsTAAALEwEAmpwYAAASf0lEQVR4nO3debBkZXnH8e+VAYZdiSSUiSMaCAaIGkQHd4uU1BBFQEDBtYhS4AIhYEDEZVgGiI4EEWRTMJEgJKKIGykKNdGKDAQRRBQElSCKRAREIOLgzR/vHYXr7ae7T/c5fU4/30/V1Oh9T7/3nRl+95zzrjOzs7NImm6PmXQDJNXPoEsJGHQpAYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUEDLqUgEGXEjDoUgIGXUrAoEsJGHQpAYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCR'+
			'h0KQGDLiVg0KUEDLqUgEGXEjDoUgIGXUrAoEsJGHQpAYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUEDLqUgEGXEjDoUgIGXUrAoEsJGHQpAYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUEDLqUgEGXElg06Qa02dKlSyfdhEE8HdgT2BHYDngcsBhYDdwN3AZcC3wd+Cxwx2Sa2S6rVq2adBMaZdC764XACuD5PcoXAZvN/doe2A94GPgCcBxwZQNtVEv46N49i4BTgK/QO+S9rAXsClwBnAGsN9aWqbUMeresA1wCHATMjFDPDHAA8DXKHV9TzqB3y6nALmOsb3vgMmD9'+
			'MdapFjLo3bET8KYa6n06cHoN9apFDHp3rGC0x/XI6yi99ppSBr0bnkUcxPuBE+au24jyA+Gxc5/ZH7gI+HXw+Rlg5TgaqnZyeK0bdg3Kfgm8APjmvK/fC6ya+/URYAlwPvC8HvU8D9gW+PYoDVU7eUfvhp2CslP4/ZAv5H+AlwI3B9fsM0Sb1CEGvRu2Dco+M0Q99wInBeUvHKIudYhBb78NKO/bvXx3yPquCMq2HrIudYRBb7+oH+Ve4BdD1veDoGzxkHWpIwx6Pg8FZU6cmVIGPZ8HgrK1G2uFGmXQ28/waWQGvf2ix+no7lyVcyumkEHvtmi2WyTqwNugYp1qMYOe0+ykG6BmGXQpAYOe0/8FZRs11go1xqDn9KugzP8mppD/qFICBj2n3wRl6zbWCjXGoLdf9G/0YMU67wvKnO8+hQx6+0WdY9G8dem3DLrmq2'+
			'tfOk2QQc/p/qBs48ZaocYY9JxWT7oBapZBlxIw6DlFi2HcfGIKGfT2q+MgRDefSMagt986QVk0Hi79lkHvtmiGW1VuPDGFDHpObjyRjEHPyY0nkjHoUgIGvf3q2AjCjSeSMejtV8e/kRtPJOM/arc5lVUDMejdFi1OibjxRDIGPSc3nkjGoLffWpNugLrPoLffhg1/PzeemEIGPSc3nkjGoHdb1c44e+uTMejdZmA1EIOekxtPJOOSxParY1x7kI0n1gV2BZYB2wObUxbD/BhYBXwe+HfqWSqrMTPo7df0uPYi4BDgncBmC5Q/AdgBeCtwC3Ac8HHg4Ybapwp8dO+2Ou6m+wH/yMIhn+9PgXOBq4Cn1dAWjYlB77aqW0lFG09Uecr7S8rj/P7VmqO6GfSc6th4YjFwFuWRXy1j0DVuK/DO3joGvf3q2MMtWo8+DqcA'+
			'29T8PTQEg95+dYyMRDvMzHcbpYd9C2Br4HDgnj6fWQx8FOfNt4ZB77aqU2AHdQGwHfBh4FbgJuD9wFOBf+nz2R2BV9faOg3MoHdb1Smw/TrjZoHlwL4s3EP/U+C1wGF96lqOczVawaDnFA2vAVwMHD1APScBZwflW1J+IGjCDHr7Nb0eHeBfh7j2XcC9Qfnf47v6xBn09ot2mPllTd/zG0Nc+7+U9/ZetgGeP1pzNCqD3m1V55dHi1qgdLwN4xTgzqB82dzvzwSOBD4FXE/p0b8VuAY4HziAsnhGY2ZHSfvV8cM4WqZ6J8OPs98HnAoc06N8X2BPyvDcQpYAz5i77kPAhcC7gR8O2Q714B29/Zo+OeWuip+7LCh7Mr1DPt/alA68Gyjj9xoDg95tdZyPvnb/SxZ041hbAetRnhLOwp1wR2bQu63qMtXoKWGdinXeDT'+
			'xY8bOR/SnDeBqBQW+/qsGL1LUrzEM11Xsw8Kqa6k7BoLffejXUGU2dbetj8snUs8AnBYPebf1muPUS3dFHmaAzyNPHrcD7gJ2AJ1Lmze8FXNLnc5sDB47QttQMerdV3UCijk48iDeynAWOB7YCjgC+DPyI0ol3EbAb8Drix/+D8b/ZSvxLa786HlfvrqFOgJt7fP1h4A3AUcRj+OcBBwXlS4AXV2pZcga9/aJJTaPc0XvNfrupYp1QdpeZ36ZZ4M2UnWIHcTZwbVD+8kf873Upj/7bAY8dsP6UDHp1z6bM8b6KcoecBX4OXAecDryU+v9+q76jw8Kz2GYp2zdX9c+U2W03UvoBrqf0lkcr3BZqw3lB+S7AW4D/pPzA+g7wLcrf/Q2UmXXPHrbh025mdraOfQKnw9KlS+d/aQNKh9BbgKcMUMXNwHuAT4zQjM9Rfmgs'+
			'5GWUgxSq2o/yvrwlZSHL8ZQlqpP2DMr891F8mrJy7paFCletWjVi9d3iHX1wLwC+DaxksJBDCdD5wBcZbJ/0hUSnm456aMK5lEffRZS74MUj1jcu19N/4U0/e1B+WCzrd2EGBn0wewOXA0+q+PlllDtmlUMOorXcdS1TnbTVwNVjqGcj4DPAc8dQV6cZ9P6eCfwT1eeAr/EnwFcZvte46SOZ2mLUR/c11qG8Oj1uTPV1kkGPrQV8hPHNTtuY8hi/1xCficamo6GqrvveGOtaArxjjPV1jkGP7UHpGBqnxZTdVV/e78I50aP7qO+xbdZrTH6+b1Mm3vTzVmCT6s3pNoMee02f8h9SjiDamvJo/3hKT2+/d+e1KI+Tv9etv4CoM26afX+Aa44F/oJyx94Z+EJw7QbA7qM3q5sMeuw5QdlZlP3QTqBMMllN2bRh5dzX++'+
			'27tj5lE8ZNR2hf3fu6T9KtxBOCzqMMXc7O/bqMMgwZbWy5y9ha1zEGPfZHQdkR9F5/fRtlOO6iPvUvAc4hfjxfPyiruq97F/yK3ptZ/Jgy730hXwrqTHu0s0GPRUHq1xH2AGVW2If7XLcb8aqsqLe/7jPUJu1YFp5S+3Z6z9e/LqjvieNoVBcZ9NhPg7JnDPD5hymdQKf3ue59lLPNFhKtDx/mDLUuOh94JWWaK3O/v4p4puH19H7k35CkG6Ia9NgNQdmuQ9RzEGXCTS8bAmcGZb1M86P7Gp+k9HnMzP3+b32uv494dV7K8XSDHvtyUPZGBt/mac0yzZ8H1+w8d80wprkzbhTRqEcdO/a0nkGPXRqUPZ7yWDmo2ymLYSIn8egOwOhuPuo896xGneHYSQY9dg3xnOtDGO5csQuJh382pSyzXGMSxzFNg2j5bjSKMbUM'+
			'en9Rr/kzGX5s9iDgZ0H53vxuYkc0/XXae9xH4drreQx6f58A7gnK3zVkfXcSb5cEcBplumb0PjntPe4aI4Pe34PEw2PPAf5qyDovoGwo0csTKNsyRdNf7YjTwAz6YE4iDtawd3WAtxG/Zx9IvKQ1w9CaxsSgD+Zn9B7nhhLIYc8AvxVYHpSvRbx/271Dfj8lZtAHt5L4bLGjKtT5QeCbQXn06D7NS1Q1ZgZ9cD+h7LHWyzJghyHrXE15RK9yFprDa9U4vKa+TiQ+SeTdFepcBZxR4XMGvRonzKiv2yh7l/eyK9WWQr6T8sQwDHvdq6njaOfWM+jDO5HePd4zlM0QhnUvcOiQn7mnwvdRfUc7t5pBH94tlHHwXl5B2d5oWBcQb4U0X7RARnoUg17NCnp3oM1Q7V0dyqKXQd+9DboGZtCr+S7x4pQ9KQf/DetWBp98Y9'+
			'A1MINeXXRXfwzVZssBnAp8bYDr7qhYvxIy6NVdD3wqKN+bsiPKsNZsUtGvV/0HFepWUgZ9NAttXrjGY6g2Ww7KnuZHBuXfId7PTnoUgz6a6yiH+PWyD+Vwhyo+RJl2O98scHLFOpWUQR/dMcR39ao98FBOfdmNsr/5fZQhuB0ph0dIAzPoo7uGeG35PsCfjVD/JZQzzDcG9gWuHKGuLKK99lIy6ONxTFC2FtV74FWNe+3NY9DH47+Bzwfl+wJbNdQWxVLunmvQx+fooGwR1XvgpZEZ9PG5iviu/hrgKQ21RXoUgz5e0bu6d3VNjEEfryuBLwblrwee3FBbpN8y6OPnu7pax6CP3yriu/ob8F1dDTPo9ej3rj7KbDn1l/IM9IhBr8cVxHf11wJbNtSWjDYIypwwo7FaTu858ItwttykOGFGY3Ul8Rz41+BdXQ0x6PV6'+
			'L/Fd3Xd1NcKg1+sa4OKg/NWMtrJNGohBr99yeu8t5129HtGxS76jqxbXAZ8Myl9Ntb3l1Ft07JK97qrN0cQ7xkbj7hrOnwdlKe/mYNCbcgP9T3fZvqG2TLtXBGU3N9aKljHozTma+My24xpsyzTbIyiLlhFPNYPenJuA84PyXYDnNdSWafUk4iejaB/+qWbQmxXd1aGc/qLq9qA8HS3kDuDrDbalVQx6s74PfCwofxHwkmaaMpWix/bP0LtDdOoZ9OatID6j+1h635XU2x8Sv/p8uqmGtJFBb94PgXOC8qWU01g1nN3ovc3zPcCXmmtK+xj0yVgB/CooPxbXVA8remz/HPDrphrSRgZ9Mn4EnBmUPxX4m4baMg02AXYKylM/toNBn6QVwC+C8vcSz9nW7/w1sG6PsgeBSxtsSysZ9Mm5E/hAUP4E4OCG2tJ10Wy4S4'+
			'EHmmpIWxn0yfoAZXy3lyOBzRtqS1etBywLytM/toNBn7T7ibeH3hg4saG2dNVL6H166q+Jd/lJw6BP3kco55/38nrg0Iba0kVRb/tXgLsbakerGfTJWw28IyifoTzin45DbvMtAl4elKed2z6fQW+Hi+nfM3wgcDmwpPbWdMeLgE17lP2GMu1VGPQ2OYj+vcMvpOxDF/UyZxI9tl8B/KSphrSdQW+Pm4HDBrhuU+AiyqN85nH2GWD3oNze9kcw6O1yBvDOAa89kHIm+9Pqa06rLQX+OCj3/fwRDHr7nECZ/hrNhV9jG8qhjgeTb8Vb9Nh+LWVJsOYY9HY6lzJ3+/YBrl0MfBC4BPiDOhvVIouAVwblPrbPY9Db67+ApwOfHfD6lwHfAJ5VW4vaY2dgi6DcoM9j0NvtLso6679jsEf5JcB/APvU2agWiKa83kjZS1+P'+
			'YNDbbxY4mbJ7SjSDbo31KJtQvqXGNk3atkFZtPw3LYPeHVdTdjg9a4BrZ4BTGWy4ros2CcpWNdaKDjHo3fIAcAClx/muPtfOACspK+CmzX1B2Q6NtaJDDHo3XUzpqPvqANcez/QdDnFDUHYksFFTDekKg95dt1OG4M4Y4NqjKOPz0+LyoGxz4kVCKRn0blsNvJnBjl5+B9MT9s8RzzE4FBf/PIpBnw7HAYcPcN20hP0h4D1B+WKm4885NgZ9erwfeBtlOC4yLWH/GGWqay/7UubDC4M+bU6j9Mr3O3poGsL+G+LhwxngJPKtAViQQZ8+ZwNvIkfYL6fM8e/lucDeDbWl1Qz6dDqXwcPe9aG3w4lPYfkHyjt7agZ9ep0L7E//sB8FLK+9NfW5kXiIcQvcH9+gT7lzGCzs75371VVHE+/2ehSwWUNtaSWDPv0GDftySi'+
			'C66C7KwZS9bNynfOoZ9BzWhL3f0NtxwBH1N6cWp1H23evljcSr3qaaQc9j0LCfSDdXvT1EPGloEWWRT0oGPZePUqbM9gv7SuCQ2lszfp+mbLzRyzLiTSumlkHP50zKHvL9wn4S3eytPoy4P2IlCU+8Meg5nUa5Y0dhn6HsbLN7/c0Zq6uBjwfl21J22U3FoOd1Cv0Pb5yhmz3xRxGfenNIQ+1oDYOe28nA2/tcs1UD7Ri32ymLfHrp4p9pJAZdHyDeqOF7TTVkzN5P7zXrNzXZkDYw6IIyH/xdC3x9FljRcFvG5X7gb1m4H+KYhtsycQZda6wAXgt8h7JI5DrKqa0XT7BNo7oI2IvyZ3kA+Nbc/79wko2ahJnZ2X6jLJK6zju6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUEDLqUgEGXEjDoUgIGXUrAoEsJGHQp'+
			'AYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUE/h8C2Kj6mEKLvQAAAABJRU5ErkJggg==';
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
		el.ggId="Image 11-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_11.ggIsActive=function() {
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
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_13=document.createElement('div');
		els=me._image_13__img=document.createElement('img');
		els.className='ggskin ggskin_image_13';
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
		el.ggId="Image 13-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_13.ggIsActive=function() {
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
		me._image_13.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_13.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_13.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_13.style.transition='transform 0s';
				if (me._image_13.ggCurrentLogicStateScaling == 0) {
					me._image_13.ggParameter.sx = 1.05;
					me._image_13.ggParameter.sy = 1.05;
					me._image_13.style.transform=parameterToTransform(me._image_13.ggParameter);
					skin.updateSize(me._image_13);
				}
				else {
					me._image_13.ggParameter.sx = 1;
					me._image_13.ggParameter.sy = 1;
					me._image_13.style.transform=parameterToTransform(me._image_13.ggParameter);
					skin.updateSize(me._image_13);
				}
			}
		}
		me._image_13.logicBlock_scaling();
		me._image_13.ggUpdatePosition=function (useTransition) {
		}
		me._image_11.appendChild(me._image_13);
		me.__30.appendChild(me._image_11);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((142% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 142%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px; line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud654\uc0b4\ud45c \uc120\ud0dd\uc73c\ub85c\n\uacf5\uac04\uc744 \uc774\ub3d9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
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
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me._text_3);
		me.__11.appendChild(me.__30);
		me.__9.appendChild(me.__11);
		el=me.__10=document.createElement('div');
		el.ggId="\uad00\ub78c\ud558\uae30\ubc84\ud2bc-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -1%;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		me.__10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 620))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().height <= 800))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getViewerSize().height <= 1020))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__10.style.transition='left 0s, bottom 0s';
				if (me.__10.ggCurrentLogicStatePosition == 0) {
					me.__10.style.left = 'calc(50% - (100% / 2))';
					me.__10.style.bottom='-40%';
				}
				else if (me.__10.ggCurrentLogicStatePosition == 1) {
					me.__10.style.left = 'calc(50% - (100% / 2))';
					me.__10.style.bottom='-20%';
				}
				else if (me.__10.ggCurrentLogicStatePosition == 2) {
					me.__10.style.left = 'calc(50% - (100% / 2))';
					me.__10.style.bottom='-10%';
				}
				else {
					me.__10.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__10.style.bottom='-1%';
				}
			}
		}
		me.__10.logicBlock_position();
		me.__10.onclick=function (e) {
			me.__5.style.transition='none';
			me.__5.style.visibility='hidden';
			me.__5.ggVisible=false;
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #32694e;';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad00\ub78c\ud558\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
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
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me._text_2);
		me.__9.appendChild(me.__10);
		me.__8.appendChild(me.__9);
		me.__5.appendChild(me.__8);
		el=me.__6=document.createElement('div');
		el.ggId="\ubcf8 \ub0b4\uc6a9-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -12%;';
		hs+='height : 30%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
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
		me.__6.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__6.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__6.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__6.style.transition='left 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me.__6.ggCurrentLogicStatePosition == 0) {
					me.__6.style.left = 'calc(50% - (90% / 2))';
					me.__6.style.bottom='-5%';
				}
				else {
					me.__6.style.left='calc(50% - ((90% + 0px) / 2) + 0px)';
					me.__6.style.bottom='-12%';
				}
			}
		}
		me.__6.logicBlock_position();
		me.__6.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().height <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__6.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__6.ggCurrentLogicStateSize = newLogicStateSize;
				me.__6.style.transition='left 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me.__6.ggCurrentLogicStateSize == 0) {
					me.__6.style.width='100%';
					me.__6.style.height='30%';
					me.__6.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__6);
				}
				else {
					me.__6.style.width='90%';
					me.__6.style.height='30%';
					me.__6.style.left = 'calc(50% - (90% / 2))';
					skin.updateSize(me.__6);
				}
			}
		}
		me.__6.logicBlock_size();
		me.__6.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().height <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__6.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__6.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__6.style.transition='left 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me.__6.ggCurrentLogicStateScaling == 0) {
					me.__6.ggParameter.sx = 0.7;
					me.__6.ggParameter.sy = 0.7;
					me.__6.style.transform=parameterToTransform(me.__6.ggParameter);
					skin.updateSize(me.__6);
				}
				else if (me.__6.ggCurrentLogicStateScaling == 1) {
					me.__6.ggParameter.sx = 0.8;
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
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='min-width:150px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5.ggIsActive=function() {
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
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		els=me.__7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf8 \ub0b4\uc6a9 \uba58\ud2b8-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((115% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__7.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b\n\ubcf8 \ucee8\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uc81c\uc791\ub41c \uac83\uc73c\ub85c \uc2e4\uc81c\uc640 \ucc28\uc774\uac00 \uc788\uc73c\uba70 \uac01\uc885 \uc804\uc2dc\ubb3c \ubc0f \uc18c\ud488, \uc5f0\ucd9c\uc6a9 \uc2dc\uacf5\ubd80\ubd84\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub3d9\uc2dd \uac00\uad6c \ubc0f \uc18c\ud488\ub4e4\uc740 \uc81c\uacf5 \ud488\ubaa9\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uad6c\uccb4\uc801\uc778 \ud488\ubaa9\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\uc640 \ucd5c\uc2e0\uc815\ubcf4\ub294 \uace0\uac1d\uc13c\ud130\uc5d0 \uc9c1\uc811 \ubb38\uc758\ud574 \uc8fc\uc138\uc694. \ubcf8 \ucee8\ud150\uce20\ub97c \ubb34\ub2e8\uc73c\ub85c \ucea1\uccd0\ud558\uac70\ub098 \ubc30\ud3ec\ud560 \uc2dc \uc800\uc791\uad8c\ubc95 \uc704\ubc18\uc73c\ub85c \ubc95\uc801\uc778 \uc81c\uc81c\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__7.ggUpdateText();
		el.appendChild(els);
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
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me.__7);
		me.__6.appendChild(me._rectangle_5);
		me.__5.appendChild(me.__6);
		me.divSkin.appendChild(me.__5);
		el=me.__3=document.createElement('div');
		el.ggId="\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 54px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4=document.createElement('div');
		el.ggId="\ub85c\uace0\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.470588);';
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
		me.__4.ggIsActive=function() {
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
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
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
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'' };
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
		me.__4.appendChild(me._container_1);
		el=me._vr=document.createElement('div');
		els=me._vr__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub2e8\uc9c0VR";
		el.ggDx=5;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 5px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._vr.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e8\uc9c0VR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._vr.ggUpdateText();
		el.appendChild(els);
		me._vr.ggIsActive=function() {
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
		me._vr.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me._vr);
		me.__3.appendChild(me.__4);
		me.divSkin.appendChild(me.__3);
		el=me._timer_3=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=150;
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
		me.__92.logicBlock_position();
		me.__96.logicBlock_position();
		me._scrollarea_1.logicBlock_position();
		me._scrollarea_1.logicBlock_size();
		me.__94.logicBlock_size();
		me.__52.logicBlock_position();
		me.__52.logicBlock_scaling();
		me._rectangle_2.logicBlock_size();
		me.__89.logicBlock_visible();
		me.__211.logicBlock_visible();
		me.__211.logicBlock_backgroundcolor();
		me.__90.logicBlock_visible();
		me._timer_1.logicBlock_visible();
		me.__85.logicBlock_visible();
		me.__84.logicBlock_visible();
		me.__80.logicBlock_visible();
		me.__79.logicBlock_visible();
		me._onoff.logicBlock_visible();
		me._on.logicBlock_visible();
		me._off.logicBlock_visible();
		me.__78.logicBlock_text();
		me.__77.logicBlock_visible();
		me.__73.logicBlock_visible();
		me.__72.logicBlock_visible();
		me.__68.logicBlock_visible();
		me.__67.logicBlock_visible();
		me.__62.logicBlock_visible();
		me.__61.logicBlock_visible();
		me.__57.logicBlock_visible();
		me.__60.logicBlock_visible();
		me.__56.logicBlock_visible();
		me._up.logicBlock_visible();
		me.__54.logicBlock_position();
		me.__54.logicBlock_visible();
		me.__54.logicBlock_alpha();
		me._rectangle_3.logicBlock_visible();
		me._dowm.logicBlock_visible();
		me.__47.logicBlock_scaling();
		me.__48.logicBlock_visible();
		me.__43.logicBlock_position();
		me.__43.logicBlock_size();
		me.__43.logicBlock_scaling();
		me.__43.logicBlock_visible();
		me._rectangle_41.logicBlock_size();
		me.__46.logicBlock_scaling();
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
				radarPath.setAttributeNS(null,'fill', '#fe9900');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#fe9900');
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
		me.__40.logicBlock_position();
		me.__40.logicBlock_visible();
		me._rectangle_40.logicBlock_size();
		me.__42.logicBlock_scaling();
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
				radarPath.setAttributeNS(null,'fill', '#fe9900');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#fe9900');
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
		me.__37.logicBlock_position();
		me.__37.logicBlock_size();
		me.__37.logicBlock_scaling();
		me.__38.logicBlock_size();
		me.__39.logicBlock_size();
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
				radarPath.setAttributeNS(null,'fill', '#fe9900');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#fe9900');
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
		if (
			(
				((player.getViewerSize().width > 640))
			)
		) {
			me.__15.style.transition='none';
			me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
			me.__15.ggVisible=true;
		}
		me.__17.logicBlock_scaling();
		me.__34.logicBlock_position();
		me.__33.logicBlock_position();
		me._timer_2.logicBlock_visible();
		me.__32.logicBlock_position();
		me.__29.logicBlock_position();
		me._image_3.logicBlock_position();
		if (
			(
				((player.getViewerSize().width <= 640))
			)
		||
			(
				((player.getIsMobile() == true))
			)
		) {
			me.__5.style.transition='none';
			me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
			me.__5.ggVisible=true;
		}
		me.__9.logicBlock_scaling();
		me._image_130.logicBlock_scaling();
		me.__210.logicBlock_scaling();
		me._image_13.logicBlock_scaling();
		me.__10.logicBlock_position();
		me.__6.logicBlock_position();
		me.__6.logicBlock_size();
		me.__6.logicBlock_scaling();
		me._timer_3.logicBlock_visible();
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
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
			me.__92.logicBlock_position();
			me.__94.ggUpdateConditionNodeChange();
			me._rectangle_2.logicBlock_size();
			me.__89.logicBlock_visible();
			me.__211.logicBlock_visible();
			me.__211.logicBlock_backgroundcolor();
			me.__90.logicBlock_visible();
			me._timer_1.logicBlock_visible();
			me.__85.logicBlock_visible();
			me.__84.logicBlock_visible();
			me.__80.logicBlock_visible();
			me.__79.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me._on.logicBlock_visible();
			me._off.logicBlock_visible();
			me.__78.logicBlock_text();
			me.__77.logicBlock_visible();
			me.__73.logicBlock_visible();
			me.__72.logicBlock_visible();
			me.__68.logicBlock_visible();
			me.__67.logicBlock_visible();
			me.__62.logicBlock_visible();
			me.__61.logicBlock_visible();
			me.__57.logicBlock_visible();
			me.__56.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__54.logicBlock_position();
			me.__54.logicBlock_visible();
			me.__54.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			me.__48.logicBlock_visible();
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
			me.__40.logicBlock_position();
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
			me.__37.logicBlock_position();
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
			me.__34.logicBlock_position();
			me.__33.logicBlock_position();
			if (me.__33.ggLastIsActive!=me.__33.ggIsActive()) {
				me.__33.ggLastIsActive=me.__33.ggIsActive();
				if (me.__33.ggIsActive()) {
					if (me.__33.ggActivate) me.__33.ggActivate();
				} else {
					if (me.__33.ggDeactivate) me.__33.ggDeactivate();
				}
			}
			me._timer_2.logicBlock_visible();
			me.__32.logicBlock_position();
			me.__29.logicBlock_position();
			if (me.__29.ggLastIsActive!=me.__29.ggIsActive()) {
				me.__29.ggLastIsActive=me.__29.ggIsActive();
				if (me.__29.ggIsActive()) {
					if (me.__29.ggActivate) me.__29.ggActivate();
				} else {
					if (me.__29.ggDeactivate) me.__29.ggDeactivate();
				}
			}
			me._image_3.logicBlock_position();
			me._image_130.logicBlock_scaling();
			me.__210.logicBlock_scaling();
			me._image_13.logicBlock_scaling();
			me._timer_3.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
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
			me.__92.logicBlock_position();
			me._scrollarea_1.ggUpdatePosition();
			me._rectangle_2.logicBlock_size();
			me.__89.logicBlock_visible();
			me.__211.logicBlock_visible();
			me.__211.logicBlock_backgroundcolor();
			me.__90.logicBlock_visible();
			me.__85.logicBlock_visible();
			me.__80.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me._on.logicBlock_visible();
			me._off.logicBlock_visible();
			me.__78.logicBlock_text();
			me.__73.logicBlock_visible();
			me.__68.logicBlock_visible();
			me.__62.logicBlock_visible();
			me.__57.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__54.logicBlock_position();
			me.__54.logicBlock_visible();
			me.__54.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			for (var i=0; i < me._map_11.ggMarkerInstances.length; i++) {
				me._map_11.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_11.ggClearMap();
			me._map_11.ggInitMap(false);
			me._map_11.ggInitMapMarkers(true);
			me.__40.logicBlock_position();
			me.__40.logicBlock_visible();
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_10.ggClearMap();
			me._map_10.ggInitMap(false);
			me._map_10.ggInitMapMarkers(true);
			player.setMediaVisibility("\uc5d0\uc5b4\ucee8","0",0);
			me._markertemplate__normalInst.ggEvent_configloaded();
			me._markertemplate__activeInst.ggEvent_configloaded();
			me.__37.logicBlock_position();
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
			me.__34.logicBlock_position();
			me.__33.logicBlock_position();
			me.__32.logicBlock_position();
			me.__29.logicBlock_position();
			me._image_3.logicBlock_position();
			me._image_130.logicBlock_scaling();
			me.__210.logicBlock_scaling();
			me._image_13.logicBlock_scaling();
		});
		player.addListener('fullscreenenter', function(event) {
			me.__60.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me.__60.logicBlock_visible();
		});
		player.addListener('positionchanged', function(event) {
			me._map_11.ggRadar.update();
			me._map_10.ggRadar.update();
			me._map_1.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			for(var i = 0; i < me.__94.ggInstances.length; i++) {
				me.__94.ggInstances[i].ggEvent_sizechanged(event);
			}
			me.__96.logicBlock_position();
			me._scrollarea_1.logicBlock_position();
			me._scrollarea_1.logicBlock_size();
			me.__94.logicBlock_size();
			me.__52.logicBlock_position();
			me.__52.logicBlock_scaling();
			me.__47.logicBlock_scaling();
			me.__43.logicBlock_position();
			me.__43.logicBlock_size();
			me.__43.logicBlock_scaling();
			me.__43.logicBlock_visible();
			me._rectangle_41.logicBlock_size();
			me.__46.logicBlock_scaling();
			me.__40.logicBlock_visible();
			me._rectangle_40.logicBlock_size();
			me.__42.logicBlock_scaling();
			me.__37.logicBlock_size();
			me.__37.logicBlock_scaling();
			me.__38.logicBlock_size();
			me.__39.logicBlock_size();
			me._image_2.logicBlock_position();
			me.__17.logicBlock_scaling();
			me.__9.logicBlock_scaling();
			me.__10.logicBlock_position();
			me.__6.logicBlock_position();
			me.__6.logicBlock_size();
			me.__6.logicBlock_scaling();
		});
		player.addListener('varchanged_vis_arrow', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_arrow();
				}
			}
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
		});
		player.addListener('varchanged_vis_direction', function(event) {
			me.__34.logicBlock_position();
			me.__33.logicBlock_position();
			me.__32.logicBlock_position();
			me.__29.logicBlock_position();
			me._image_3.logicBlock_position();
			me._image_130.logicBlock_scaling();
			me.__210.logicBlock_scaling();
			me._image_13.logicBlock_scaling();
		});
		player.addListener('varchanged_vis_long', function(event) {
			me.__54.logicBlock_visible();
			me.__54.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_mobilemap', function(event) {
			me.__40.logicBlock_position();
			me.__37.logicBlock_position();
		});
		player.addListener('varchanged_vis_roomchoice', function(event) {
			me.__92.logicBlock_position();
			me.__211.logicBlock_visible();
			me.__211.logicBlock_backgroundcolor();
			me.__90.logicBlock_visible();
		});
		player.addListener('varchanged_vis_short', function(event) {
			me._rectangle_2.logicBlock_size();
			me.__89.logicBlock_visible();
			me.__85.logicBlock_visible();
			me.__80.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me.__73.logicBlock_visible();
			me.__68.logicBlock_visible();
			me.__62.logicBlock_visible();
			me.__57.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__54.logicBlock_position();
			me.__54.logicBlock_visible();
			me.__54.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin_show', function(event) {
			me.__89.logicBlock_visible();
			me.__85.logicBlock_visible();
			me.__80.logicBlock_visible();
			me._onoff.logicBlock_visible();
			me.__73.logicBlock_visible();
			me.__68.logicBlock_visible();
			me.__62.logicBlock_visible();
			me.__57.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sound', function(event) {
			me._on.logicBlock_visible();
			me._off.logicBlock_visible();
			me.__78.logicBlock_text();
		});
		player.addListener('viewerinit', function(event) {
			me.__94.ggUpdate();
		});
	};
	function SkinCloner__94_Class(nodeId, parentScope, ggParent, parameter) {
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
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__95=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__95;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__95__text=document.createElement('div');
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
		hs+='color : rgba(255,255,255,1);';
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
		me.__95.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__95.ggUpdateText();
		player.addListener('changenode', function() {
			me.__95.ggUpdateText();
		});
		el.appendChild(els);
		me.__95.ggIsActive=function() {
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
		me.__95.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me.__95);
		me._nodeimage_1.appendChild(me._rectangle_1);
		me.__div.appendChild(me._nodeimage_1);
		me._nodeimage_1.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_1.logicBlock_size();
			};
	};
	function SkinHotspotClass__(parentScope,hotspot) {
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
		el=me.__=document.createElement('div');
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
		me.__.ggIsActive=function() {
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
		me.__.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__.ggUpdatePosition=function (useTransition) {
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
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
				me._image_5.style.transition='left 500ms linear 0ms, top 500ms linear 0ms';
				if (me._image_5.ggCurrentLogicStatePosition == 0) {
					me._image_5.style.left='10px';
					me._image_5.style.top='0px';
				}
				else {
					me._image_5.style.left='-5px';
					me._image_5.style.top='-5px';
				}
			}
		}
		me._image_5.logicBlock_position();
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._external_2.appendChild(me._image_5);
		me.__.appendChild(me._external_2);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._image_5.logicBlock_position();
			me.ggEvent_changenode=function() {
				me._image_5.logicBlock_position();
			};
			me.ggEvent_configloaded=function() {
				me._image_5.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_arrow=function() {
				me._image_5.logicBlock_position();
			};
		me.ggUse3d=true;
		me.gg3dDistance=550;
			me.__div = me.__;
	};
	function SkinHotspotClass__0(parentScope,hotspot) {
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
		el=me.__0=document.createElement('div');
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
		me.__0.ggIsActive=function() {
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
		me.__0.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_0']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_0']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__0.ggUpdatePosition=function (useTransition) {
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
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
				me._image_50.style.transition='left 500ms linear 0ms, top 500ms linear 0ms';
				if (me._image_50.ggCurrentLogicStatePosition == 0) {
					me._image_50.style.left='0px';
					me._image_50.style.top='10px';
				}
				else {
					me._image_50.style.left='-5px';
					me._image_50.style.top='-5px';
				}
			}
		}
		me._image_50.logicBlock_position();
		me._image_50.ggUpdatePosition=function (useTransition) {
		}
		me._external_20.appendChild(me._image_50);
		me.__0.appendChild(me._external_20);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_20.style.width=hotspot.customimagewidth + 'px';
			me._external_20.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_20.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_20.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._image_50.logicBlock_position();
			me.ggEvent_changenode=function() {
				me._image_50.logicBlock_position();
			};
			me.ggEvent_configloaded=function() {
				me._image_50.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_arrow=function() {
				me._image_50.logicBlock_position();
			};
		me.ggUse3d=true;
		me.gg3dDistance=550;
			me.__div = me.__0;
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
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
				me._image_51.style.transition='left 500ms linear 0ms, top 500ms linear 0ms';
				if (me._image_51.ggCurrentLogicStatePosition == 0) {
					me._image_51.style.left='10px';
					me._image_51.style.top='0px';
				}
				else {
					me._image_51.style.left='-5px';
					me._image_51.style.top='-5px';
				}
			}
		}
		me._image_51.logicBlock_position();
		me._image_51.ggUpdatePosition=function (useTransition) {
		}
		me._external_21.appendChild(me._image_51);
		me.__2.appendChild(me._external_21);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_21.style.width=hotspot.customimagewidth + 'px';
			me._external_21.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_21.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_21.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._image_51.logicBlock_position();
			me.ggEvent_changenode=function() {
				me._image_51.logicBlock_position();
			};
			me.ggEvent_configloaded=function() {
				me._image_51.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_arrow=function() {
				me._image_51.logicBlock_position();
			};
		me.ggUse3d=true;
		me.gg3dDistance=550;
			me.__div = me.__2;
	};
	function SkinHotspotClass__1(parentScope,hotspot) {
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
		el=me.__1=document.createElement('div');
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
		me.__1.ggIsActive=function() {
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
		me.__1.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.ggUpdatePosition=function (useTransition) {
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
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQG'+
			'AAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6c'+
			'wR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCa'+
			'IkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj'+
			'9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj'+
			'1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisr'+
			'kw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUO'+
			'ihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNI'+
			'Uk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAACxMAAAsTAQCanBgAABYBSURBVHic7d15tF1lecfx700IJEAQkSFMAhEBiVMNiGMdKooFBK1SddXWuVq0unCmVlvaalFbq63KwgmLM2IVHMCqC3BAERGKdWCwVoQiKIQQMufe/vFw4Cbcm3vO2cP7vnt/P2s9C/9wJWc/e+9f9tnnHSampqaQpBLMS/0BJGlYBpakYhhYkophYEkqhoElqRgGlqRiGFiSimFgSSqGgSWpGAaWpGIYWJKKYWBJKoaBJakYBpakYhhYkophYEkqhoElqRgGlqRiGFiSimFgSSqGgSWpGAaWpGIYWJKKYWBJKoaBJakYBpakYhhYkophYEkqhoElqRgGlqRiGFiSimFgSSqGgSWpGAaWpGIYWJKKYW'+
			'BJKoaBJakYBpakYhhYkophYEkqhoElqRgGlqRiGFiSimFgSSqGgSWpGAaWpGIYWJKKYWBJKoaBJakYBpakYhhYkophYEkqhoElqRgGlqRiGFiSimFgSSqGgSWpGAaWpGIYWJKKYWBJKoaBJakYBpakYhhYkophYEkqhoElqRgGlqRiGFiSimFgSSqGgSWpGAaWpGIYWJKKYWBJKoaBJakYBpakYhhYkophYEkqhoElqRxTU1O1lXrpicDPgHXARmBqWm0C1gO3A58DDkj0GZWRShljYGkM9wG+w+bhNEpdBOzV+qdWFgwstWV34HuMH1Rb1sXAnq0egZKrkjETdQbNxMREbX+WsvNjYFlDf/blwFOAmxr685WRKpljYGkuPwAOa+nvuhZYDtzW0t+nBKpkjr8Saia7AOcTX9vaCiuA+wErgEuI92TS5nyHpWm25e6g'+
			'yqEuAPZo8oDVPt9hqaoJ4Fzg6NQfZBaXEU96/qvYAX4l1Li2A84BJsk3rAAeRnzGS1N/EKVlYPXT9kRQrQWOTfxZRrGceMr6NnCvxJ9FKfgOq1cWAh8j/bupuupCYNdaO6TGOXBUc1kEnEb6gGmqvkj8sqkCGFjamo8Qc/pSh0ob9SVgp3rapqYYWNrSfOB9xIvq1CHSdk0SQzOUKQNLA9sA7yF9aORSXwAWV2mo6mdgCeAD9POJapj6KvHUqQwYWP32dgyqYetrY/ZYNTKw+mce8LfABtKHQGk1CZxNTENSAgZWv/w16W/6rtSXR+y9amBg9cOrSX+Dd7XOGv40qCoDq7vmASfhO6q26lPE/Eo1yMDqpheS/gYet74GvDyDzzFufXaI86MxGVjd8nzKfZl+M/eclHxmBp9r3ProjGdIlRhY3fA80t+g49Ya4OFbOb'+
			'YdqbbLTur6+FaOTSMysMr2TMqd67ceeM4Ix7of8PMMPve49aERjlWzMLDKdAKx2ULqm3DcenOFY38QEXapj2GcmgQ+TKzSqjEYWGV5OvEVKvWNN26dRSxXU9U84uky9fGMW5uIlTA0IgOrDE8j9t1LfaONWz8EDqy9KzHHr/RR++8GFtTdmK4ysPL2DMoOqmuBR9XelXtaDJye4PjqqvXA+2vvSgcZWPmZAJ4M/I70N9K4tRb4o7obM4R9gfPG+Lw51T9Qz9fmTjKw8nIkcD3pb5pxaw3wFtK/VD4UuIr0/Ri3NgGn1t6VDjCw0psAjiCeSlLfKOPWJHnOqTsG+C3p+1Ol3oTvuO5iYKX1MMq/oS4i791nJoAXAbeTvlfj1iRwCrFzUa8ZWGk8AFhJ+huhSt1IvDMqyamk71vV+rvau1IQA6tdy4CrSX/RV63Hk/49'+
			'1bjuTazXnrqHVWot8FbKPQdjM7DasRz4Kekv9Cq1CnhN3Y1J6H7ABaTva5W6g549cRlYzXogZc9/G9S76e6L38OBn5G+x1XrVfRgswwDqxmHAleS/iKuUpuIMU3b19ybXB0HrCZ936vUeuC1xJZtnWRg1Wsn4AbSX7hV6wZgt5p7U4qTgI2kPwdV65V1NyYHBlY9DgK+T/qLtGr9GnhSzb0p0fbAO0l/PqrWauCvau5NUgZWNQcAF5P+wqxaG4nVSrW53YHPU/66+JuAV9CB7ckMrPHsTdmrYA5qHfEkoa3bB/gJ6c9X1VpDfFUs9uW8gTWaxcDlpL/w6qhz6fDL2YYcTtmrZ0yvF9bcm1ZUyZiJOoNmYiLrMXB7EZsKHEn5g/W+TXz9uzbx5xhYCPw+cBQxA2BH4ivYSuCXwLeA/wRuTfT5tjQPOJYYfFq624nVX9'+
			'+b+oMMq1Lm9OAJa2/gK6T/17COuop21qYaxt7ELtTXMfznXwOcAxxPPsuvvI0YvJn63FatNcALKGCsnV8JZ7YdsT9e6gupjloP/HG97RnbIuBzVD+mjcDryGOM2ELi6bvUdea3DK7nk/GrAgNrcwvpzhPVJPBG8nga2YZ4oqp7PfpbyCeMdyK+vqY+73XUOuBP621PPQyssBuxf1zpP18P6n3ALrV2aHzHMNpXv3HqR8Q0qBwsp/xZDoNaSXxVzEbfA2uwiUHqC6OuupR8xtocAFxCu8d/JvF1PgdPpfmgbrMeUW97xtPnwNqX8ldQGNTPgd+rtz2VfIR0T6urgBPJZ6zRCaS/Puqqi2vuzcj6GliPpfwF9KaAm4lJuzmYDzybfPp6NflMM5oPvIPyJ1cP6kH1tmd4fQysZ9KNC+ekuhtTwVLy3fThImBJc4c+kh2A'+
			'z1L2PoqDemLNvRlK3wLrkcRXhtQnu0q9F9i55r6MayHwSdL3ZK7aALynoR6MYw+6MQe19fdafQus1Ce4Sp1FzGnLwTxiwbjbSN+XUWod+XyFhrjhS1/gcWntXdmKPgXWB0l/csep68hrbaqDKXsHmiliInOrN9ocjgZWkL4v49R3iXXyW9GXwFpOefv+/QJ4WhPNGNO+wNnEUiWpe1NXfZp8fk3cDngZZb7fam1d+b4E1lmkP6nD1i3ETPpcJlkvAk4mfV+aqkngz4mvubn4IOUFVyv6ElipT+aw9TfkM/AR4n1PF5Z8nqsmiSfaI+ppWy2WAJ8ifW+Grec004bN9SGwlpP+ZM5VZ5NPUE0A96cbCxSOU+cA+1dtYo32I5bfzn3aWCuDSvsQWK8g38frHxJrbeXkNNL3JXWtI7Y2y8kjiTX3U/dmtrqluUO/Wx8C6/'+
			'mkP5lb1jXAE8jnPRXEKPUuDKits/7vzr7ktNzKc4kZDql7s2X9Dy1MQO9DYL2Y9CdzUCvJZzmUgYMpfyxQ03UNsehgTl5P+r5sWY0vANiHwDqU9CdyilhwLoe1qQYWE6PUc383klOdTotjjoawPfAB0vdlCvgvWhjY3IfA2ge4jHQn8qwmD25MLyX9BV5qrSVG+edkEfBN0vblO40fJfQisCDNmldfJn5ty8njgR+T/qbvQl1NTADO6T3kcuKHnBT9eB4t9KIvgbU37U02/RWxE3ROlgDnkf4m72JdQF5fEyH+YWrzF8VftnFQQG8CC+Awmv115VfEL0q5TPWA+BfvVMpfoaKE+schz0lbtiWWN256gvpvaHHdsT4FFsBDiXWb6nzRvBp4NXl9NYBYpNAX6u3WavJaDWLgbTQ3l/boFo+jd4EFsRbR+6m+n9wdwFvI'+
			'Z7OHgQcC55P+5u1rTQLfAx4814lq2R7EmmB1HeelwGNaPQKqZU6pgTVwX+LF+Kgn6lrgDxN83rlsQwRxl1ZTKL3OII+9E7f0TsY/pjXAKSQaolMlY7qyVf1exNenw4klVHYlVtLcRJyc3xAvFX9I/HR8e5JPObsFwJ8RF9GeiT+L7mkV8Sv1u1J/kBkcSfzj+zDgEGD3Gf4/64iBxVcRP1x9lnihn0SVzOlKYN31EYglRubf+b8H/6JsvPO/OVoKfIO8JutqZrcS07GuSP1BZrANMfl+PvGP9WLiuh+8sN9IBNfGVB9woFLmFP6VsGR7Uu4KqnPVamIVy9JXNZ2tvkCswKAx9PkdVqneRPxrnfrGa6J+Bzz5zuM8kHhfmPozNVGriOEmGpGBVYYJ4FHE+7TUN1sTtYF4NzKTtxDvElN/xibqRuBZ5DV2L2sGVv4OAP'+
			'4DWE/6G6yJ+gkxlme2JYoniAnsF2bwWZuoSWKBvmWzHL+mMbDytYhYMjn1DdVUrSX2WBzl6eKldPfd1hTwUfLZczJLBlZ+5hFTfLr6/maKGCLy+DH7sw/w+QyOoalaAbxmzN50noGVl92By0l/0zRZJwM7VuzTAuB4ytvIdZT6DbH6gqYxsPKwCzGwMPVN0lRtAi4BHlBXw+60GzGavKvv96aAL5HPjt/JGVjpnUisHZ76xmiqVhEL3u1QV8Nm8ARitYzUx9pUrSem0/SegZXOUvLeBaWOupx2XyL/a82fP7daR56rQbTGwGrfEuBDpL/4m6ybgZPqatiIHg5cOcRnLLkuoYUdanJkYLXrjcBvSX/BN1nnEktDp5wcugPwZro74HSKmNd3BjHvrzcMrHYcAdxE+ou8ybqJlrYrH8GBxNNI6t40WWuIzYJ7wcBq1lJi'+
			'lPpgxYeu1hnkt2/fdK+g+0+21wCPq6thuTKwmrEA+Hti49TUF3KTtZJYU6kE+xErJaTuWZO1CfgiHV5uyMCq39Po7iTl6XUmLez024Dj6fa4rSk6PAzCwKrPMuBbdH/jh6uIp6rZJiuXYGdidYiuB9ctwNPp0GoQBlZ19yHG/3T5F6kpYrLyP9OdybmD6T1Xkb63TdYksXfi4XU0LTUDq5oX093F9KbXNcQWaV20EPgA3d+8YyPwSfLbjm4kBtboJohNWf+b9Bdh07UCeHstXcvfHxBbV3U9uNYS/9AurKdt7TKwRrM/8BFiikTqC6/puoAYNd4nOxFLUG8gff+brh+R53Z1W2VgDe9kuj+WZ1AnkmjfuUzsT6yEmvo8NF0biV2Xdq6jaW0wsOb2aPoxTGEK+AEx11Hh9fTjaXqKWN12m1q61iADa3b3B84i/YXURt'+
			'0IvJpC32s0bCnwddKfo7augxPqaVszDKyZvYNYxyn1BdRGfQE4iMJ/PWrYPOBF9OeVwPeBB9fSuZoZWJs7jn4MU5giloD5EwyqUewNfIb0566t+gSZvcs0sMJSur+W+qA2Ap8G9qijcT00QWxLdiPpz2UbNQn8BdXX4a9F3wNrCd1fpXL6hfdz4Bm1dE57AKcDd5D+3LZRlxPDIJLOH+1rYC0A/pJur6U+vdYC/wbsWUfzdJcFwFHAFaQ/x23UOmK5pIPqaN44+hhYDwV+RvqT31bdQGxzr+YsBk6l+xPfB7WSmAHR+vvPPgXWXsS7m9Qnu626A3h/LZ3TsB5KbBKb+ty3VbcSq0G0pg+BtT3wOmKpjdQnuK36AbH1ldq3HfAG+vNr8xRwMfCgOpo3l64H1lHEJOW+PKpvAN5KZj9F99Qy4Hy6P5l6ep1Ow78+dzWw'+
			'7gecQ3+Cagr4LvCQOpqn2iwCXkK8R0x9fbRVvyO+0WxbQ//uoYuB9S/0Z/7XoF5J2SuAdt3exFrrqa+TNusXwGPqaN50XQmsbYFj6P6St9NrE7GF1e5Vm6fWPBO4nvTXTpv1FWCfOpoH5QfWPGLNpm+Q/sS0WdcDrx23aUpqL+DD9OtbwCri3Wrl0fIlB9YS4mf71SM2r/T6DHDwOA1TVp5KP1atnV7XA8+u0rRSA+vpwP821NRc62bguaM2SlnbldjYoy/TewZ1ITF/d2QlBtb76P5OytNrktgD0MnK3TSf2LH5+6S/1tqsdcSk6pF+TSwpsBYSA9RSN7rNWkE5Oyurmh2BN5L+mmu7zgZ2GLZJpQTW/YHvZNDctmo18O9DnkN1y1JipkLqa7DN+iUxI2VOJQTWrvTnyWoTsYzHscOcPHXWdsCrgNtIf022VSuA/e'+
			'ZqTAmBdVkGzWyjVhFLM997rpOm3tgP+Crpr8226grmmJOYc2AtAt6WQRPbqEuIF6/STF5CjBxPfZ22dS/MKufAelEGzWu6biG2V9playdJIubHnkb6a7aN+uhsTcg1sHYmXsSlblyTdSExSn/+bCdH2sI84In0Y3rPjEt55xhY84nBdKkb1lRtAF7DCD/lSltYBLyXWPo69fXcVF0BHLDlgecYWI+juzstX0TC9bDVOUcAPyH9dd1U3WPF3BwD68wMGlV3rSNenCbdcUSdNB84BVhD+uu87loJHDb9YHMLrAm6Ne1mPbGShEMV1LSH0M3xih+efpC5BdazMmhQXXUN8FKk9uwIvJ5Y9TP19V9XbZh+gLkF1ucyaFDVWgd8DNgXqX0TwIHA10h/L9RVd838yC2wrsugOVXqp8RTopSDE+nGgNNPDA4op8A6jHIX619J'+
			'LHtz31kuHCmVg4APUvYQiGsHB5NTYB0D/DqD5oxalwHHERNWpRzNI67Ra0l/v4xTvyKGcFTKmLp3aVlL7C5Skn8igvaLxLsrKUeTxDX6WGJ6T2nX6jzq+KW95ies40mf5MPWpcQUiYnKTZTatQA4mvLW3DocmMjpCWshcGPNf2bdNhI/Gx8JfJNopFSSDcTWW8cRE+9LMAXsT9X7reYnrMEHyrUuAQ6t1DApLxPE+lO5rzl3A/GNJqt3WAuJhfhzcxux1vajiXlbUldMAVcSX7deC9ya9uPM6j7E8Ixqan7CAvg46dN8ep3HHCsgSh3yAODrpL/vtqwvcedA7EoZ00BgPSWD5gzqBbgEjPpnIfBC8plMvY74ZRPIL7AOIF4IpmzQ+cDu+Aug+msC2BM4l/SBNUW8jpmA/AIL4ATSrKh4E+6sLG3pWNJOpv4Y07YAyz'+
			'GwAN7eclM+Cew26pmUemJ74AxiG7o278vr2OIdcq6BtQuxBGwbT1XuASgN58m0N71nkniPvNlW9rkGFty9bnXdL/8m7/zvacT6QZKGtxh4F82G1e3AG2b6y3MOrIFXAjdT/XF0kpiveB5w8JAnR9LMDiLGTW6g3oeJG4GXz/aXlhBYAMuATxNLDk9y91PSsE9TK4ilVg8Z5kxIGtqTiFkgGxn+vpztPv0e8AiYfVB6KYE1cAhwMvBt4rFxinjymql+QWzI+FSm/cogqRHLgA8RmwMPQmhrDxeT0/57JfAy4F5z/SVVMmZihKCZ08TEyMOeFgNLiRGwi4hxGiuJeUdXE+++JLVrG+DBwFHEopyHAEuI5WGmgFXEPXoVsWLEBcB3iYeMOVXJnFoDS5KaVPfkZ0lqjIElqRgGlqRiGFiSimFgSSqGgSWpGAaWpGIYWJKK'+
			'YWBJKoaBJakYBpakYhhYkophYEkqhoElqRgGlqRiGFiSimFgSSqGgSWpGAaWpGIYWJKKYWBJKoaBJakYBpakYhhYkophYEkqhoElqRgGlqRiGFiSimFgSSqGgSWpGAaWpGIYWJKKYWBJKoaBJakYBpakYhhYkophYEkqhoElqRgGlqRiGFiSimFgSSqGgSWpGAaWpGIYWJKKYWBJKoaBJakYBpakYhhYkophYEkqhoElqRgGlqRiGFiSimFgSSqGgSWpGAaWpGIYWJKKYWBJKoaBJakYBpakYhhYkophYEkqhoElqRgGlqRiGFiSimFgSSqGgSWpGAaWpGIYWJKKYWBJKoaBJakYBpakYhhYkophYEkqhoElqRgGlqRiGFiSimFgSSrG/wPGehpp4GAoSwAAAABJRU5ErkJggg==';
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
		el.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -5px;';
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
				me._image_52.style.transition='left 500ms linear 0ms, top 500ms linear 0ms';
				if (me._image_52.ggCurrentLogicStatePosition == 0) {
					me._image_52.style.left='10px';
					me._image_52.style.top='0px';
				}
				else {
					me._image_52.style.left='-5px';
					me._image_52.style.top='-5px';
				}
			}
		}
		me._image_52.logicBlock_position();
		me._image_52.ggUpdatePosition=function (useTransition) {
		}
		me._external_22.appendChild(me._image_52);
		me.__1.appendChild(me._external_22);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_22.style.width=hotspot.customimagewidth + 'px';
			me._external_22.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_22.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_22.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._image_52.logicBlock_position();
			me.ggEvent_changenode=function() {
				me._image_52.logicBlock_position();
			};
			me.ggEvent_configloaded=function() {
				me._image_52.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_arrow=function() {
				me._image_52.logicBlock_position();
			};
		me.ggUse3d=true;
		me.gg3dDistance=550;
			me.__div = me.__1;
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
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAJGUlEQVR4nO2df5BWVRnHP/fdl+WwXISAzXIRRc1facmPjOwHSESKaFPiUDaSJdWcUScdIsgZpqlplKxx+iFzq6mowZKBJrMILMWwpWaaBAOShETcgDVdDXDPLpfd9723P953lwXZ2r3nOffed/Mzs//s7PN9zr7f95x77jn3OdeL45jXyQ+FrBvwOidSzLoBAyEM/LHAW4DJ1Z8LgUbABxqAYYAHlIBjQDtwCNgHbAOeBPYqbVpSb/wg8fI6ZIWBfxEwG7gSmAOMFJDdDvwaaFba/E5AT5xcGRIGfgG4BZgHXOc43VPAI8D38tRzcmFIGPhjgJuBO4CzUk5fBh4Avq60eTrl3K8hc0PCwP8CsAx4Q6YNqbAKWK60OZhVAzIzJAz82cAKYGomDegfA3'+
			'xJaXNfFskzMSQM/PuAO1NPPDi2ATcqbXanmTRVQ8LAnwQ8CLwztaR2RMAnlDYPpJUwtRvDMPCnAH+ldsyAyuezOgz8r6SVMJUeEgb+VcBG54ncslJpc5vrJM57SBj4C6h9MwBuDQN/teskTntIGPizgE3OEmTDKqXNp1yJO+shYeC/jaFnBsAnw8C/x5W4kx4SBv5I4AAwRlw8P9zkYvblqoc0M7TNgMrsa6K0qLghYeDfS2WJ/P+Bx6UFRQ0JA38ysERSM+ecGwb+CklB6R7yM2G9WmBpGPhiK9RiO4Zh4N9KZSfPHcUGvFETqTv7Grzxl+KNbMIbNQFvRCN4ReKuI8TmIHQcJDr8LFHLI0Qv/gVKnU6bReWL+G4JIbFZVhj4HVS2U+UpNlBomkFx6hIKp18+qNDY7Kf89I8o7Vjp2ph5Spvf2IqIGBIG/qeB71sL'+
			'nUyxgcLYiylecQ+FN7/LSio+2kbpybspP/NTV8Y8pbSZYitibUgY+EXgeaDJtjEnUGygOPlOitO+KCobtTbTvWlRZWiTZ6bS5gkbAYmL+lwcmDFs9g/FzQAonPFehn90G4U3ToOi+Ai71FZAwpBbBDSOU2ygfu466iZdKyp7AsNGUn/9ZgrjL5U25erq8wGJsTIkDPxxSD4dUmygfs5PKDTNEJP8b9R/eFNlhibLTTbBtj1E1Izi22+ncNbVYpIDoX7ew9K9xGrEsDVkgWV8L96oiRQvXy4lN/C8Y86jOHWJpCkXhoFfnzTY1pDLLOMrFBsYNuM7IlKJ0k9ZgjfyTVJyw7EYORIbEgb+JcDpSeNPaETTDOv7DFuKU5dJ9pI5SQNteshsi9jjFBsoXnaHiJQNdRfciDd8tJRc4u5mY8gki9hePH8ChTNEloGsKUz8oJ'+
			'TU+YnbYJFUZL5YOPP9EjIi1J0vNkdJvPprY4jI9cM77WwJGRG8MYm/2CdTShpoY4jItKTQaL0eJ4Y3ohHPF1kFSrxAaGPIOIvYXrzR50jIyOAV8EaJb5MPChtDlEQDPJWHKoQ+DB+bafocFH3moAl98Ap1mea3+TSMRAPi7nYJGTHiY0cyzW9jyGGJBsTt+yVkxIhNtu2xMURkyy1u2yYhI0J87BBx54sSUl7SQBtDDlnE9hIf2SshI0L86j7o7pCQymS1t80itpfoYLOEjAjR3oekpBKXWdsYstMitpfo37uIX/mbhJQ15ecelpLakTTQxpBHLWKPU+qktPO7IlI2RPs3EXf8S0ruhaSBiQ1R2uwDWpPG96X8j7XEHYn/BxFKW1dIPq+V+FEg27symZMPSp10b3ZevtcvUctGorbtUnJdQOInGG0NedAyvpeotZny'+
			'3l9KyQ2cOKp8GeR6xy6lzdGkwbaG/NYy/jilTrof/4yrJwr7pWvD9VL3Hj2stQm2MkRp00rlVB0ZSp10PTQrteWL7ubFRK1/lJZdZxMssbK3SkCjl9gcpGvdFc4v8t3Niyk/s1r6weu/K22etRGQMORXAhonELe30LV2OtGB30tLQ3cHXRtucGEGwA9sBawNqR7+JXNP0oc4fIWujQvo3rIEoi4RzfKeNRxbM4WoZaMLMyIsrx8gVx8yj8rReU7w/Cbq3rqIuotuHvyzuHFEed96ytu/RfTyTpdFOxuVNnNtRSQrqNqA8SJi/VFsoO6c6yhMmIU3+lwK4y6BYa89ijE+vIfo0G7il7ZVbjrbUznBb5bSxnqMlTRkMfANEbEB4o1oxDttEoxoxCvUEXe1E5v9xKY1jbrCvmxV2kyTEJI8JnYlcC8p7snGR9uIj4osOt'+
			'vyZSkhsQ9PaRMC35TSqyH2K23Erp/S3+YVQLewZt6xLmPri6ghSps2IJDUzDn/VNqIreeBm/E+/aqb7Pi8tKC4IUqbV6lc3Ic6LUobq3WrU+FkRqS0WYrQQxA5ZpELUZdTVCcNzgl/UNo85kLYmSFKm19QOYx4KLLQlbDrmzirmu2cErh8m4JTQ5Q2u4Afu8yRMiGVNzg4I41ljs8CifeYc8ZCpY3MXkA/ODek+g84G3NT5AkX09yTSWUhUGnzc0B88zplPp5GkjSrZW5IMZc0d6X1kpfUDFHavAB8Lq18guxW2jg7yfpkUq0nU9p8G/hTmjkFuCrNZFkU+H0og5xJuV1p83yaCVM3RGnzMvCxtPMmYIvS5v60k2ZSAqu0WQOIVcc4wFB5l2LqZFmTPB8QK8gQ5lqlTSbluJkZorSJALHjdwRZrrTZnFXyTKv2lTY7'+
			'gMVZtuEktihtvpplAzI/RqH6Akex4j4LQipnEGdK5q9e7SEM/D1UXtGdFe9R2mS+vJN5D+nDBzLMvSwPZkCODKlu+szPIPV6pc3XMsh7SnIzZPUQBv7dgPyh76fmgNLmzJRyDYjc9JAelDZ3AetTSFUG3pdCnkGRux7SQwoXeetXS7ggdz2kDzOp1Hy74LY8mgE5NqRa4TvTgXSgtFnpQFeE3A5ZPYSBPx/LUuM+bFDaXCOk5YTc9pAeqvvxywSktubdDKgBQwCq9wk2ZQ67gWxP+x8guR+y+hIG/joGf/P4EnCB0kbkjEjX1JQhAGHgPwYM9MD4ELi4epRUTVBzhgCEgb8XGMiR2NOVNn923R5JauIacgqmA8/9j7/5SK2ZATVqSLWW8R1Af0PRQqVNnvfs+6Umh6weqq/texQ4r+dXwFKljegJRWlS04YMRWpyyB'+
			'rK/AdijsFZh/SchwAAAABJRU5ErkJggg==';
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
		el=me.__97=document.createElement('div');
		els=me.__97__img=document.createElement('img');
		els.className='ggskin ggskin__97';
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
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__97.ggIsActive=function() {
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
		me.__97.logicBlock_position = function() {
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
			if (me.__97.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__97.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__97.style.transition='left 500ms linear 0ms, top 500ms linear 0ms';
				if (me.__97.ggCurrentLogicStatePosition == 0) {
					me.__97.style.left='0px';
					me.__97.style.top='-10px';
				}
				else {
					me.__97.style.left='0px';
					me.__97.style.top='0px';
				}
			}
		}
		me.__97.logicBlock_position();
		me.__97.ggUpdatePosition=function (useTransition) {
		}
		me._external_1.appendChild(me.__97);
		me._ht_node.appendChild(me._external_1);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me.__97.logicBlock_position();
			me.ggEvent_changenode=function() {
				me.__97.logicBlock_position();
			};
			me.ggEvent_configloaded=function() {
				me.__97.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_arrow=function() {
				me.__97.logicBlock_position();
			};
		me.ggUse3d=true;
		me.gg3dDistance=700;
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='꺽은선') {
				hotspot.skinid = '꺽은선';
				hsinst = new SkinHotspotClass__1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='꺽은선2') {
				hotspot.skinid = '꺽은선2';
				hsinst = new SkinHotspotClass__2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='화살표 흰색') {
				hotspot.skinid = '화살표 흰색';
				hsinst = new SkinHotspotClass__0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = '화살표 흰색-꺽은선';
				hsinst = new SkinHotspotClass__(me, hotspot);
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
		me.__89.ggUpdateConditionTimer();
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				me.__90.style.transition='none';
				me.__90.style.visibility='hidden';
				me.__90.ggVisible=false;
			} else {
			}
		}
		me.__85.ggUpdateConditionTimer();
		me.__84.ggUpdateConditionTimer();
		if (me.__84.ggLastIsActive!=me.__84.ggIsActive()) {
			me.__84.ggLastIsActive=me.__84.ggIsActive();
			if (me.__84.ggLastIsActive) {
				me.__86.style.transition='none';
				me.__86.style.visibility='hidden';
				me.__86.ggVisible=false;
			} else {
			}
		}
		me.__80.ggUpdateConditionTimer();
		me.__79.ggUpdateConditionTimer();
		if (me.__79.ggLastIsActive!=me.__79.ggIsActive()) {
			me.__79.ggLastIsActive=me.__79.ggIsActive();
			if (me.__79.ggLastIsActive) {
				me.__81.style.transition='none';
				me.__81.style.visibility='hidden';
				me.__81.ggVisible=false;
			} else {
			}
		}
		me._onoff.ggUpdateConditionTimer();
		me.__77.ggUpdateConditionTimer();
		if (me.__77.ggLastIsActive!=me.__77.ggIsActive()) {
			me.__77.ggLastIsActive=me.__77.ggIsActive();
			if (me.__77.ggLastIsActive) {
				me.__78.style.transition='none';
				me.__78.style.visibility='hidden';
				me.__78.ggVisible=false;
			} else {
			}
		}
		me.__73.ggUpdateConditionTimer();
		me.__72.ggUpdateConditionTimer();
		if (me.__72.ggLastIsActive!=me.__72.ggIsActive()) {
			me.__72.ggLastIsActive=me.__72.ggIsActive();
			if (me.__72.ggLastIsActive) {
				me.__74.style.transition='none';
				me.__74.style.visibility='hidden';
				me.__74.ggVisible=false;
			} else {
			}
		}
		me.__68.ggUpdateConditionTimer();
		me.__67.ggUpdateConditionTimer();
		if (me.__67.ggLastIsActive!=me.__67.ggIsActive()) {
			me.__67.ggLastIsActive=me.__67.ggIsActive();
			if (me.__67.ggLastIsActive) {
				me.__69.style.transition='none';
				me.__69.style.visibility='hidden';
				me.__69.ggVisible=false;
			} else {
			}
		}
		me.__62.ggUpdateConditionTimer();
		me.__61.ggUpdateConditionTimer();
		if (me.__61.ggLastIsActive!=me.__61.ggIsActive()) {
			me.__61.ggLastIsActive=me.__61.ggIsActive();
			if (me.__61.ggLastIsActive) {
				me.__64.style.transition='none';
				me.__64.style.visibility='hidden';
				me.__64.ggVisible=false;
				me.__65.style.transition='none';
				me.__65.style.visibility='hidden';
				me.__65.ggVisible=false;
			} else {
			}
		}
		me.__57.ggUpdateConditionTimer();
		me.__56.ggUpdateConditionTimer();
		if (me.__56.ggLastIsActive!=me.__56.ggIsActive()) {
			me.__56.ggLastIsActive=me.__56.ggIsActive();
			if (me.__56.ggLastIsActive) {
				me.__58.style.transition='none';
				me.__58.style.visibility='hidden';
				me.__58.ggVisible=false;
			} else {
			}
		}
		me.__47.ggUpdateConditionTimer();
		me.__48.ggUpdateConditionTimer();
		if (me.__48.ggLastIsActive!=me.__48.ggIsActive()) {
			me.__48.ggLastIsActive=me.__48.ggIsActive();
			if (me.__48.ggLastIsActive) {
				me.__49.style.transition='none';
				me.__49.style.visibility='hidden';
				me.__49.ggVisible=false;
			} else {
			}
		}
		me._timer_2.ggUpdateConditionTimer();
		if (me._timer_2.ggLastIsActive!=me._timer_2.ggIsActive()) {
			me._timer_2.ggLastIsActive=me._timer_2.ggIsActive();
			if (me._timer_2.ggLastIsActive) {
				player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
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