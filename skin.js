// Garden Gnome Software - Skin
// Pano2VR 7.0.9/20024
// Filename: ???? ?? VR ??.ggsk
// Generated 2024-03-05T13:23:06

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
	var me=this;
	var skin=this;
	var flag=false;
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
		el=me._header=document.createElement('div');
		el.ggId="HEADER";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 53px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._header.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._header.logicBlock_position = function() {
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
			if (me._header.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._header.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._header.style.transition='left 0s, top 0s, transform 0s, opacity 300ms linear 0ms';
				if (me._header.ggCurrentLogicStatePosition == 0) {
					me._header.style.left='-30px';
					me._header.style.top='30px';
				}
				else {
					me._header.style.left='0px';
					me._header.style.top='30px';
				}
			}
		}
		me._header.logicBlock_position();
		me._header.logicBlock_scaling = function() {
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
			if (me._header.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._header.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._header.style.transition='left 0s, top 0s, transform 0s, opacity 300ms linear 0ms';
				if (me._header.ggCurrentLogicStateScaling == 0) {
					me._header.ggParameter.sx = 0.8;
					me._header.ggParameter.sy = 0.8;
					me._header.style.transform=parameterToTransform(me._header.ggParameter);
					skin.updateSize(me._header);
				}
				else {
					me._header.ggParameter.sx = 1;
					me._header.ggParameter.sy = 1;
					me._header.style.transform=parameterToTransform(me._header.ggParameter);
					skin.updateSize(me._header);
				}
			}
		}
		me._header.logicBlock_scaling();
		me._header.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_header') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._header.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._header.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._header.style.transition='left 0s, top 0s, transform 0s, opacity 300ms linear 0ms';
				if (me._header.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._header.style.opacity == 0.0) { me._header.style.visibility="hidden"; } }, 305);
					me._header.style.opacity=0;
				}
				else {
					me._header.style.visibility=me._header.ggVisible?'inherit':'hidden';
					me._header.style.opacity=1;
				}
			}
		}
		me._header.logicBlock_alpha();
		me._header.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
		el.ggId="\ud5e4\ub354 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.862745);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 25px 25px 0px;';
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
		me.__36.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 540))
				)
			) {
				me.__9.ggVisible = !me.__9.ggVisible;
				var flag=me.__9.ggVisible;
				me.__9.style.transition='none';
				me.__9.style.visibility=((flag)&&(Number(me.__9.style.opacity)>0||!me.__9.style.opacity))?'inherit':'hidden';
			}
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me.__36);
		el=me.__29=document.createElement('div');
		el.ggId="\ud5e4\ub354 \ud0dd\uc2a4\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me.__35=document.createElement('div');
		el.ggId="\uc67c\ucabd \uc774\ubbf8\uc9c0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
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
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
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
		me.__35.appendChild(me._image_1);
		me.__29.appendChild(me.__35);
		el=me.__34=document.createElement('div');
		els=me.__34__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uc7ac \uc704\uce58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
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
		hs ='';
		hs += 'box-sizing: border-box;';
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
		me.__34.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__34.ggUpdateText();
		player.addListener('changenode', function() {
			me.__34.ggUpdateText();
		});
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
		me.__34.onclick=function (e) {
			me.__9.ggVisible = !me.__9.ggVisible;
			var flag=me.__9.ggVisible;
			me.__9.style.transition='none';
			me.__9.style.visibility=((flag)&&(Number(me.__9.style.opacity)>0||!me.__9.style.opacity))?'inherit':'hidden';
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__34);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12px;';
		hs+='left : 168px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
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
		el=me.__33=document.createElement('div');
		el.ggId="\uc624\ub978\ucabd \uc774\ubbf8\uc9c0";
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((12px + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
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
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
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
		me._image_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_2.style.transition='';
				if (me._image_2.ggCurrentLogicStateVisible == 0) {
					me._image_2.style.visibility=(Number(me._image_2.style.opacity)>0||!me._image_2.style.opacity)?'inherit':'hidden';
					me._image_2.ggVisible=true;
				}
				else {
					me._image_2.style.visibility="hidden";
					me._image_2.ggVisible=false;
				}
			}
		}
		me._image_2.logicBlock_visible();
		me._image_2.onclick=function (e) {
			me.__9.ggVisible = !me.__9.ggVisible;
			var flag=me.__9.ggVisible;
			me.__9.style.transition='none';
			me.__9.style.visibility=((flag)&&(Number(me.__9.style.opacity)>0||!me.__9.style.opacity))?'inherit':'hidden';
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__33.appendChild(me._image_2);
		me._container_1.appendChild(me.__33);
		me.__29.appendChild(me._container_1);
		me._header.appendChild(me.__29);
		me.divSkin.appendChild(me._header);
		el=me.__9=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 65%;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : hidden;';
		hs+='width : 260px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__9.style.transition='';
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
		el=me.__23=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
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
		me.__23.onclick=function (e) {
			player.setVariableValue('vis_mapMax', true);
			me.__9.style.transition='none';
			me.__9.style.visibility='hidden';
			me.__9.ggVisible=false;
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me.__27=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
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
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		els=me.__28__text=document.createElement('div');
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
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__28.ggUpdateText=function() {
			var params = [];
			var hs = player._("+ \ud06c\uac8c\ubcf4\uae30", params);
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
		me.__23.appendChild(me.__27);
		el=me._map_1=document.createElement('div');
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
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='cursor : default;';
		hs+='height : 65.8824%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((65.8824% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
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
			me._map_1.ggUpdateConditionResize();
		}
		me.__23.appendChild(me._map_1);
		el=me.__24=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5 \ud0dd\uc2a4\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 34px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
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
		el=me.__26=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5 \ud0dd\uc2a4\ud2b8 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
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
		me.__24.appendChild(me.__26);
		el=me.__25=document.createElement('div');
		els=me.__25__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\uae00\uc790";
		el.ggDx=0;
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
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-family:\"Oswald\", sans-serif;';
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
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__25.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
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
		me.__24.appendChild(me.__25);
		me.__23.appendChild(me.__24);
		me.__9.appendChild(me.__23);
		el=me.__17=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd \ubc14";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40.1042%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 40%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
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
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 15.2%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
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
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_0=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 1 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_0.ggIsActive=function() {
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
		me.__1_0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_maincenter') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1_0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1_0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1_0.style.transition='background-color 0s';
				if (me.__1_0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1_0.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__1_0.style.backgroundColor="rgba(34,30,31,1)";
				}
			}
		}
		me.__1_0.logicBlock_backgroundcolor();
		me.__1_0.onclick=function (e) {
			player.setVariableValue('vis_maincenter', !player.getVariableValue('vis_maincenter'));
			player.setVariableValue('vis_exparkinglot', false);
			player.setVariableValue('vis_walk', false);
			player.setVariableValue('vis_garden', false);
			player.setVariableValue('vis_underground', false);
			player.openNext("{node3}","$(cur)");
		}
		me.__1_0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		els=me.__19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc7a5\uc18c 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text letter-spacing:1px;";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 86.8055%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((86.8055% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__19.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ucd9c\uc785\uad6c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__19.ggUpdateText();
		el.appendChild(els);
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
		me.__19.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_maincenter') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__19.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__19.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__19.style.transition='color 0s';
				if (me.__19.ggCurrentLogicStateTextColor == 0) {
					me.__19.style.color="rgba(34,30,31,1)";
				}
				else {
					me.__19.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__19.logicBlock_textcolor();
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me.__1_0.appendChild(me.__19);
		el=me.__1_2=document.createElement('div');
		els=me.__1_2__img=document.createElement('img');
		els.className='ggskin ggskin__1_2';
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
		el.ggId="\uc7a5\uc18c 1 \ud654\uc0b4\ud45c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 14px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__1_2.ggIsActive=function() {
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
		me.__1_2.ggUpdatePosition=function (useTransition) {
		}
		me.__1_0.appendChild(me.__1_2);
		el=me.__1_1=document.createElement('div');
		els=me.__1_1__img=document.createElement('img');
		els.className='ggskin ggskin__1_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAACXBIWXMAAC4jAAAuIwF4pT92AAADDUlEQVRYhbXYy49URRTH8Q+PhAC2KMsJT0dmmAmwYUXAGGLYujCuycwwA7ox/g1uBXmG8DfwD/AYUAhhmBlRFrrwEXWIhgCioP4Bujj3YqfTt29V3+6TTDpz+1T/vnXqnFN1a9XIyIgKexfv41N8U+XU1NZWPD+MzzCKDfgYvw0DYE2r1ep89g4u4c3i/0nswF38M2yAI7iIXR1+E9iGe/h7WACdM++0SWw34EiUAEcK8dEa/3I5FvHXoAAO4DK2Jo6ZEJFYxoumAKuLH3mYOe49nJcOXWlrWq3WM9wRM3sjY+yYWI5GkShz4FnxQ7kQEyJvlvC8CUAJsYTdmRBjomwX+4Ho7AN/iEiMq6+IdtslyncZfzYBaA'+
			'IxVvjfk5ET3QBKiC9F3e/MhNgpljIJogqAyIn72COyPdXGC4gFCc2qFwD8LiKxVzSfHIjRFIg6gBLiKxGJXIjtatp2CgA8wdcFxLYMiAnRLRdUbGCpAO0Q++S14J67aA5ACXG/gMiJxGThv6jjPJELUEIs+39rzoEoq+MlRD8A8FRUR26J7i78X0L0C0BUx4Io0RyIcgNbxvMmAETHXBJ7wQ5xvkix8eLvceqAXvYdPsKDzHEbsL7qvSDX9mNLhv81nMCjQQDM4hzWZ4jPKl50mgLM4ALWJfrfwAfa3rKa5MA0TmeIXxUzX2l/2G8EZnFWJFKq+DE86vyiH4BpeWs+jw+7iZO/BDMi7Knit8Sar1Q55ETgaCH+aqL/bRzHz72cUiMwhTMZ4rcwhx/rHFMApsQtyeuJ4jdFk6kVp34JpnESmzPEa8Pebr0icAynMsQ/'+
			'FzNPFu8FMCMv7F+IbP8pR5zuSzDVh/iMHqWWAzAtbsdeSxw/X4j3fYO2uu1zTtR5qvgVkSeNru/WYpXI3JPYmDjuqmivvzYRJ2b+r3hzeZE4Zl7MPPdap6uVZ8JvReM4hE014nMGeGvafij9QdTwW7q33Ouizgcy824A8D1+wcEOiFJ8ZZDi3QCIU+5DvI1XRIc7PgzxKgAiEhvRwifi9Xwo9h99YKX0bgrIPQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc7a5\uc18c 1 \ud654\uc0b4\ud45c-\uac80\uc815";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_1.ggIsActive=function() {
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
		me.__1_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_maincenter') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1_1.style.transition='';
				if (me.__1_1.ggCurrentLogicStateVisible == 0) {
					me.__1_1.style.visibility=(Number(me.__1_1.style.opacity)>0||!me.__1_1.style.opacity)?'inherit':'hidden';
					me.__1_1.ggVisible=true;
				}
				else {
					me.__1_1.style.visibility="hidden";
					me.__1_1.ggVisible=false;
				}
			}
		}
		me.__1_1.logicBlock_visible();
		me.__1_1.ggUpdatePosition=function (useTransition) {
		}
		me.__1_0.appendChild(me.__1_1);
		me.__18.appendChild(me.__1_0);
		me.__17.appendChild(me.__18);
		el=me.__21=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 15.2%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		el=me.__2_0=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 2 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_0.ggIsActive=function() {
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
		me.__2_0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_exparkinglot') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2_0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2_0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2_0.style.transition='background-color 0s';
				if (me.__2_0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2_0.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__2_0.style.backgroundColor="rgba(34,30,31,1)";
				}
			}
		}
		me.__2_0.logicBlock_backgroundcolor();
		me.__2_0.onclick=function (e) {
			player.setVariableValue('vis_maincenter', false);
			player.setVariableValue('vis_exparkinglot', !player.getVariableValue('vis_exparkinglot'));
			player.setVariableValue('vis_walk', false);
			player.setVariableValue('vis_garden', false);
			player.setVariableValue('vis_underground', false);
			player.openNext("{node4}","$(cur)");
		}
		me.__2_0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		els=me.__22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc7a5\uc18c 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text letter-spacing:1px;";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 86.8055%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((86.8055% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__22.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc57c\uc678\uc8fc\ucc28\uc7a5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__22.ggUpdateText();
		el.appendChild(els);
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
		me.__22.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_exparkinglot') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__22.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__22.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__22.style.transition='color 0s';
				if (me.__22.ggCurrentLogicStateTextColor == 0) {
					me.__22.style.color="rgba(34,30,31,1)";
				}
				else {
					me.__22.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__22.logicBlock_textcolor();
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		me.__2_0.appendChild(me.__22);
		el=me.__2_2=document.createElement('div');
		els=me.__2_2__img=document.createElement('img');
		els.className='ggskin ggskin__2_2';
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
		el.ggId="\uc7a5\uc18c 2 \ud654\uc0b4\ud45c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 14px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__2_2.ggIsActive=function() {
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
		me.__2_2.ggUpdatePosition=function (useTransition) {
		}
		me.__2_0.appendChild(me.__2_2);
		el=me.__2_1=document.createElement('div');
		els=me.__2_1__img=document.createElement('img');
		els.className='ggskin ggskin__2_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAACXBIWXMAAC4jAAAuIwF4pT92AAADDUlEQVRYhbXYy49URRTH8Q+PhAC2KMsJT0dmmAmwYUXAGGLYujCuycwwA7ox/g1uBXmG8DfwD/AYUAhhmBlRFrrwEXWIhgCioP4Bujj3YqfTt29V3+6TTDpz+1T/vnXqnFN1a9XIyIgKexfv41N8U+XU1NZWPD+MzzCKDfgYvw0DYE2r1ep89g4u4c3i/0nswF38M2yAI7iIXR1+E9iGe/h7WACdM++0SWw34EiUAEcK8dEa/3I5FvHXoAAO4DK2Jo6ZEJFYxoumAKuLH3mYOe49nJcOXWlrWq3WM9wRM3sjY+yYWI5GkShz4FnxQ7kQEyJvlvC8CUAJsYTdmRBjomwX+4Ho7AN/iEiMq6+IdtslyncZfzYBaA'+
			'IxVvjfk5ET3QBKiC9F3e/MhNgpljIJogqAyIn72COyPdXGC4gFCc2qFwD8LiKxVzSfHIjRFIg6gBLiKxGJXIjtatp2CgA8wdcFxLYMiAnRLRdUbGCpAO0Q++S14J67aA5ACXG/gMiJxGThv6jjPJELUEIs+39rzoEoq+MlRD8A8FRUR26J7i78X0L0C0BUx4Io0RyIcgNbxvMmAETHXBJ7wQ5xvkix8eLvceqAXvYdPsKDzHEbsL7qvSDX9mNLhv81nMCjQQDM4hzWZ4jPKl50mgLM4ALWJfrfwAfa3rKa5MA0TmeIXxUzX2l/2G8EZnFWJFKq+DE86vyiH4BpeWs+jw+7iZO/BDMi7Knit8Sar1Q55ETgaCH+aqL/bRzHz72cUiMwhTMZ4rcwhx/rHFMApsQtyeuJ4jdFk6kVp34JpnESmzPEa8Pebr0icAynMsQ/'+
			'FzNPFu8FMCMv7F+IbP8pR5zuSzDVh/iMHqWWAzAtbsdeSxw/X4j3fYO2uu1zTtR5qvgVkSeNru/WYpXI3JPYmDjuqmivvzYRJ2b+r3hzeZE4Zl7MPPdap6uVZ8JvReM4hE014nMGeGvafij9QdTwW7q33Ouizgcy824A8D1+wcEOiFJ8ZZDi3QCIU+5DvI1XRIc7PgzxKgAiEhvRwifi9Xwo9h99YKX0bgrIPQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc7a5\uc18c 2 \ud654\uc0b4\ud45c-\uac80\uc815";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_1.ggIsActive=function() {
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
		me.__2_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_exparkinglot') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2_1.style.transition='';
				if (me.__2_1.ggCurrentLogicStateVisible == 0) {
					me.__2_1.style.visibility=(Number(me.__2_1.style.opacity)>0||!me.__2_1.style.opacity)?'inherit':'hidden';
					me.__2_1.ggVisible=true;
				}
				else {
					me.__2_1.style.visibility="hidden";
					me.__2_1.ggVisible=false;
				}
			}
		}
		me.__2_1.logicBlock_visible();
		me.__2_1.ggUpdatePosition=function (useTransition) {
		}
		me.__2_0.appendChild(me.__2_1);
		me.__21.appendChild(me.__2_0);
		me.__17.appendChild(me.__21);
		el=me.__31=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 15.2%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 40%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
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
		el=me.__3_0=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 3 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3_0.ggIsActive=function() {
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
		me.__3_0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_walk') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__3_0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__3_0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__3_0.style.transition='background-color 0s';
				if (me.__3_0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__3_0.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__3_0.style.backgroundColor="rgba(34,30,31,1)";
				}
			}
		}
		me.__3_0.logicBlock_backgroundcolor();
		me.__3_0.onclick=function (e) {
			player.setVariableValue('vis_maincenter', false);
			player.setVariableValue('vis_exparkinglot', false);
			player.setVariableValue('vis_walk', !player.getVariableValue('vis_walk'));
			player.setVariableValue('vis_garden', false);
			player.setVariableValue('vis_underground', false);
			player.openNext("{node1}","$(cur)");
		}
		me.__3_0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		els=me.__32__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc7a5\uc18c 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text letter-spacing:1px;";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 86.8055%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((86.8055% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__32.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e8\uc9c0\ub0b4\ubd80\uc778\ub3c4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__32.ggUpdateText();
		el.appendChild(els);
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
		me.__32.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_walk') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__32.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__32.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__32.style.transition='color 0s';
				if (me.__32.ggCurrentLogicStateTextColor == 0) {
					me.__32.style.color="rgba(34,30,31,1)";
				}
				else {
					me.__32.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__32.logicBlock_textcolor();
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me.__3_0.appendChild(me.__32);
		el=me.__3_2=document.createElement('div');
		els=me.__3_2__img=document.createElement('img');
		els.className='ggskin ggskin__3_2';
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
		el.ggId="\uc7a5\uc18c 3 \ud654\uc0b4\ud45c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 14px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__3_2.ggIsActive=function() {
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
		me.__3_2.ggUpdatePosition=function (useTransition) {
		}
		me.__3_0.appendChild(me.__3_2);
		el=me.__3_1=document.createElement('div');
		els=me.__3_1__img=document.createElement('img');
		els.className='ggskin ggskin__3_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAACXBIWXMAAC4jAAAuIwF4pT92AAADDUlEQVRYhbXYy49URRTH8Q+PhAC2KMsJT0dmmAmwYUXAGGLYujCuycwwA7ox/g1uBXmG8DfwD/AYUAhhmBlRFrrwEXWIhgCioP4Bujj3YqfTt29V3+6TTDpz+1T/vnXqnFN1a9XIyIgKexfv41N8U+XU1NZWPD+MzzCKDfgYvw0DYE2r1ep89g4u4c3i/0nswF38M2yAI7iIXR1+E9iGe/h7WACdM++0SWw34EiUAEcK8dEa/3I5FvHXoAAO4DK2Jo6ZEJFYxoumAKuLH3mYOe49nJcOXWlrWq3WM9wRM3sjY+yYWI5GkShz4FnxQ7kQEyJvlvC8CUAJsYTdmRBjomwX+4Ho7AN/iEiMq6+IdtslyncZfzYBaA'+
			'IxVvjfk5ET3QBKiC9F3e/MhNgpljIJogqAyIn72COyPdXGC4gFCc2qFwD8LiKxVzSfHIjRFIg6gBLiKxGJXIjtatp2CgA8wdcFxLYMiAnRLRdUbGCpAO0Q++S14J67aA5ACXG/gMiJxGThv6jjPJELUEIs+39rzoEoq+MlRD8A8FRUR26J7i78X0L0C0BUx4Io0RyIcgNbxvMmAETHXBJ7wQ5xvkix8eLvceqAXvYdPsKDzHEbsL7qvSDX9mNLhv81nMCjQQDM4hzWZ4jPKl50mgLM4ALWJfrfwAfa3rKa5MA0TmeIXxUzX2l/2G8EZnFWJFKq+DE86vyiH4BpeWs+jw+7iZO/BDMi7Knit8Sar1Q55ETgaCH+aqL/bRzHz72cUiMwhTMZ4rcwhx/rHFMApsQtyeuJ4jdFk6kVp34JpnESmzPEa8Pebr0icAynMsQ/'+
			'FzNPFu8FMCMv7F+IbP8pR5zuSzDVh/iMHqWWAzAtbsdeSxw/X4j3fYO2uu1zTtR5qvgVkSeNru/WYpXI3JPYmDjuqmivvzYRJ2b+r3hzeZE4Zl7MPPdap6uVZ8JvReM4hE014nMGeGvafij9QdTwW7q33Ouizgcy824A8D1+wcEOiFJ8ZZDi3QCIU+5DvI1XRIc7PgzxKgAiEhvRwifi9Xwo9h99YKX0bgrIPQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc7a5\uc18c 3 \ud654\uc0b4\ud45c-\uac80\uc815";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3_1.ggIsActive=function() {
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
		me.__3_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_walk') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__3_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__3_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__3_1.style.transition='';
				if (me.__3_1.ggCurrentLogicStateVisible == 0) {
					me.__3_1.style.visibility=(Number(me.__3_1.style.opacity)>0||!me.__3_1.style.opacity)?'inherit':'hidden';
					me.__3_1.ggVisible=true;
				}
				else {
					me.__3_1.style.visibility="hidden";
					me.__3_1.ggVisible=false;
				}
			}
		}
		me.__3_1.logicBlock_visible();
		me.__3_1.ggUpdatePosition=function (useTransition) {
		}
		me.__3_0.appendChild(me.__3_1);
		me.__31.appendChild(me.__3_0);
		me.__17.appendChild(me.__31);
		el=me.__41=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 15.2%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 60%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
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
		el=me.__4_0=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 4 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4_0.ggIsActive=function() {
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
		me.__4_0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_garden') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__4_0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__4_0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__4_0.style.transition='background-color 0s';
				if (me.__4_0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__4_0.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__4_0.style.backgroundColor="rgba(34,30,31,1)";
				}
			}
		}
		me.__4_0.logicBlock_backgroundcolor();
		me.__4_0.onclick=function (e) {
			player.setVariableValue('vis_maincenter', false);
			player.setVariableValue('vis_exparkinglot', false);
			player.setVariableValue('vis_walk', false);
			player.setVariableValue('vis_garden', !player.getVariableValue('vis_garden'));
			player.setVariableValue('vis_underground', false);
			player.openNext("{node2}","$(cur)");
		}
		me.__4_0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__42=document.createElement('div');
		els=me.__42__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc7a5\uc18c 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text letter-spacing:1px;";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 86.8055%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((86.8055% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__42.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e8\uc9c0\ub0b4\ubd80\uc815\uc6d0", params);
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
		me.__42.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_garden') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__42.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__42.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__42.style.transition='color 0s';
				if (me.__42.ggCurrentLogicStateTextColor == 0) {
					me.__42.style.color="rgba(34,30,31,1)";
				}
				else {
					me.__42.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__42.logicBlock_textcolor();
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me.__4_0.appendChild(me.__42);
		el=me.__4_2=document.createElement('div');
		els=me.__4_2__img=document.createElement('img');
		els.className='ggskin ggskin__4_2';
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
		el.ggId="\uc7a5\uc18c 4 \ud654\uc0b4\ud45c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 14px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__4_2.ggIsActive=function() {
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
		me.__4_2.ggUpdatePosition=function (useTransition) {
		}
		me.__4_0.appendChild(me.__4_2);
		el=me.__4_1=document.createElement('div');
		els=me.__4_1__img=document.createElement('img');
		els.className='ggskin ggskin__4_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAACXBIWXMAAC4jAAAuIwF4pT92AAADDUlEQVRYhbXYy49URRTH8Q+PhAC2KMsJT0dmmAmwYUXAGGLYujCuycwwA7ox/g1uBXmG8DfwD/AYUAhhmBlRFrrwEXWIhgCioP4Bujj3YqfTt29V3+6TTDpz+1T/vnXqnFN1a9XIyIgKexfv41N8U+XU1NZWPD+MzzCKDfgYvw0DYE2r1ep89g4u4c3i/0nswF38M2yAI7iIXR1+E9iGe/h7WACdM++0SWw34EiUAEcK8dEa/3I5FvHXoAAO4DK2Jo6ZEJFYxoumAKuLH3mYOe49nJcOXWlrWq3WM9wRM3sjY+yYWI5GkShz4FnxQ7kQEyJvlvC8CUAJsYTdmRBjomwX+4Ho7AN/iEiMq6+IdtslyncZfzYBaA'+
			'IxVvjfk5ET3QBKiC9F3e/MhNgpljIJogqAyIn72COyPdXGC4gFCc2qFwD8LiKxVzSfHIjRFIg6gBLiKxGJXIjtatp2CgA8wdcFxLYMiAnRLRdUbGCpAO0Q++S14J67aA5ACXG/gMiJxGThv6jjPJELUEIs+39rzoEoq+MlRD8A8FRUR26J7i78X0L0C0BUx4Io0RyIcgNbxvMmAETHXBJ7wQ5xvkix8eLvceqAXvYdPsKDzHEbsL7qvSDX9mNLhv81nMCjQQDM4hzWZ4jPKl50mgLM4ALWJfrfwAfa3rKa5MA0TmeIXxUzX2l/2G8EZnFWJFKq+DE86vyiH4BpeWs+jw+7iZO/BDMi7Knit8Sar1Q55ETgaCH+aqL/bRzHz72cUiMwhTMZ4rcwhx/rHFMApsQtyeuJ4jdFk6kVp34JpnESmzPEa8Pebr0icAynMsQ/'+
			'FzNPFu8FMCMv7F+IbP8pR5zuSzDVh/iMHqWWAzAtbsdeSxw/X4j3fYO2uu1zTtR5qvgVkSeNru/WYpXI3JPYmDjuqmivvzYRJ2b+r3hzeZE4Zl7MPPdap6uVZ8JvReM4hE014nMGeGvafij9QdTwW7q33Ouizgcy824A8D1+wcEOiFJ8ZZDi3QCIU+5DvI1XRIc7PgzxKgAiEhvRwifi9Xwo9h99YKX0bgrIPQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc7a5\uc18c 4 \ud654\uc0b4\ud45c-\uac80\uc815";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4_1.ggIsActive=function() {
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
		me.__4_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_garden') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__4_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__4_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__4_1.style.transition='';
				if (me.__4_1.ggCurrentLogicStateVisible == 0) {
					me.__4_1.style.visibility=(Number(me.__4_1.style.opacity)>0||!me.__4_1.style.opacity)?'inherit':'hidden';
					me.__4_1.ggVisible=true;
				}
				else {
					me.__4_1.style.visibility="hidden";
					me.__4_1.ggVisible=false;
				}
			}
		}
		me.__4_1.logicBlock_visible();
		me.__4_1.ggUpdatePosition=function (useTransition) {
		}
		me.__4_0.appendChild(me.__4_1);
		me.__41.appendChild(me.__4_0);
		me.__17.appendChild(me.__41);
		el=me.__50=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 15.2%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 80%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me.__5_=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 5 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5_.ggIsActive=function() {
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
		me.__5_.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_underground') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__5_.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__5_.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__5_.style.transition='background-color 0s';
				if (me.__5_.ggCurrentLogicStateBackgroundColor == 0) {
					me.__5_.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__5_.style.backgroundColor="rgba(34,30,31,1)";
				}
			}
		}
		me.__5_.logicBlock_backgroundcolor();
		me.__5_.onclick=function (e) {
			player.setVariableValue('vis_maincenter', false);
			player.setVariableValue('vis_exparkinglot', false);
			player.setVariableValue('vis_walk', false);
			player.setVariableValue('vis_garden', false);
			player.setVariableValue('vis_underground', !player.getVariableValue('vis_underground'));
			player.openNext("{node5}","$(cur)");
		}
		me.__5_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
		els=me.__51__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc7a5\uc18c 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text letter-spacing:1px;";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 86.8055%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((86.8055% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__51.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc9c0\ud558\uc8fc\ucc28\uc7a5\uc785\uad6c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__51.ggUpdateText();
		el.appendChild(els);
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
		me.__51.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_underground') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__51.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__51.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__51.style.transition='color 0s';
				if (me.__51.ggCurrentLogicStateTextColor == 0) {
					me.__51.style.color="rgba(34,30,31,1)";
				}
				else {
					me.__51.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__51.logicBlock_textcolor();
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		me.__5_.appendChild(me.__51);
		el=me.__5_1=document.createElement('div');
		els=me.__5_1__img=document.createElement('img');
		els.className='ggskin ggskin__5_1';
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
		el.ggId="\uc7a5\uc18c 5 \ud654\uc0b4\ud45c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 14px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__5_1.ggIsActive=function() {
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
		me.__5_1.ggUpdatePosition=function (useTransition) {
		}
		me.__5_.appendChild(me.__5_1);
		el=me.__5_0=document.createElement('div');
		els=me.__5_0__img=document.createElement('img');
		els.className='ggskin ggskin__5_0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAACXBIWXMAAC4jAAAuIwF4pT92AAADDUlEQVRYhbXYy49URRTH8Q+PhAC2KMsJT0dmmAmwYUXAGGLYujCuycwwA7ox/g1uBXmG8DfwD/AYUAhhmBlRFrrwEXWIhgCioP4Bujj3YqfTt29V3+6TTDpz+1T/vnXqnFN1a9XIyIgKexfv41N8U+XU1NZWPD+MzzCKDfgYvw0DYE2r1ep89g4u4c3i/0nswF38M2yAI7iIXR1+E9iGe/h7WACdM++0SWw34EiUAEcK8dEa/3I5FvHXoAAO4DK2Jo6ZEJFYxoumAKuLH3mYOe49nJcOXWlrWq3WM9wRM3sjY+yYWI5GkShz4FnxQ7kQEyJvlvC8CUAJsYTdmRBjomwX+4Ho7AN/iEiMq6+IdtslyncZfzYBaA'+
			'IxVvjfk5ET3QBKiC9F3e/MhNgpljIJogqAyIn72COyPdXGC4gFCc2qFwD8LiKxVzSfHIjRFIg6gBLiKxGJXIjtatp2CgA8wdcFxLYMiAnRLRdUbGCpAO0Q++S14J67aA5ACXG/gMiJxGThv6jjPJELUEIs+39rzoEoq+MlRD8A8FRUR26J7i78X0L0C0BUx4Io0RyIcgNbxvMmAETHXBJ7wQ5xvkix8eLvceqAXvYdPsKDzHEbsL7qvSDX9mNLhv81nMCjQQDM4hzWZ4jPKl50mgLM4ALWJfrfwAfa3rKa5MA0TmeIXxUzX2l/2G8EZnFWJFKq+DE86vyiH4BpeWs+jw+7iZO/BDMi7Knit8Sar1Q55ETgaCH+aqL/bRzHz72cUiMwhTMZ4rcwhx/rHFMApsQtyeuJ4jdFk6kVp34JpnESmzPEa8Pebr0icAynMsQ/'+
			'FzNPFu8FMCMv7F+IbP8pR5zuSzDVh/iMHqWWAzAtbsdeSxw/X4j3fYO2uu1zTtR5qvgVkSeNru/WYpXI3JPYmDjuqmivvzYRJ2b+r3hzeZE4Zl7MPPdap6uVZ8JvReM4hE014nMGeGvafij9QdTwW7q33Ouizgcy824A8D1+wcEOiFJ8ZZDi3QCIU+5DvI1XRIc7PgzxKgAiEhvRwifi9Xwo9h99YKX0bgrIPQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc7a5\uc18c 5 \ud654\uc0b4\ud45c-\uac80\uc815";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5_0.ggIsActive=function() {
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
		me.__5_0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_underground') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__5_0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__5_0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__5_0.style.transition='';
				if (me.__5_0.ggCurrentLogicStateVisible == 0) {
					me.__5_0.style.visibility=(Number(me.__5_0.style.opacity)>0||!me.__5_0.style.opacity)?'inherit':'hidden';
					me.__5_0.ggVisible=true;
				}
				else {
					me.__5_0.style.visibility="hidden";
					me.__5_0.ggVisible=false;
				}
			}
		}
		me.__5_0.logicBlock_visible();
		me.__5_0.ggUpdatePosition=function (useTransition) {
		}
		me.__5_.appendChild(me.__5_0);
		me.__50.appendChild(me.__5_);
		me.__17.appendChild(me.__50);
		me.__9.appendChild(me.__17);
		el=me.__10=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14 \ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 84.38%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
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
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		el.ggId="\ubc84\ud2bc 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_=document.createElement('div');
		el.ggId="\ubc84\ud2bc 1 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
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
		me.__1_.ggIsActive=function() {
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
		me.__1_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__16=document.createElement('div');
		els=me.__16__img=document.createElement('img');
		els.className='ggskin ggskin__16';
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
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 57.8947%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((57.8947% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
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
			player.toggleAutorotate();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		me.__1_.appendChild(me.__16);
		me.__15.appendChild(me.__1_);
		me.__10.appendChild(me.__15);
		el=me.__20=document.createElement('div');
		el.ggId="\ubc84\ud2bc 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 27%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
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
		el=me.__2_=document.createElement('div');
		el.ggId="\ubc84\ud2bc 2 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
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
		me.__2_.ggIsActive=function() {
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
		me.__2_.onclick=function (e) {
			player.toggleFullscreen();
		}
		me.__2_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		els=me.__14__img=document.createElement('img');
		els.className='ggskin ggskin__14';
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
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 57.8947%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((57.8947% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__2_.appendChild(me.__14);
		me.__20.appendChild(me.__2_);
		me.__10.appendChild(me.__20);
		el=me.__30=document.createElement('div');
		el.ggId="\ubc84\ud2bc 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 27%;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
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
		el=me.__3_=document.createElement('div');
		el.ggId="\ubc84\ud2bc 3 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
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
		me.__3_.ggIsActive=function() {
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
		me.__3_.onclick=function (e) {
			player.openUrl("","");
		}
		me.__3_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		els=me.__13__img=document.createElement('img');
		els.className='ggskin ggskin__13';
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
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 57.8947%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((57.8947% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
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
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		me.__3_.appendChild(me.__13);
		me.__30.appendChild(me.__3_);
		me.__10.appendChild(me.__30);
		el=me.__40=document.createElement('div');
		el.ggId="\ubc84\ud2bc 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__40.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_skonremove') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__40.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__40.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__40.style.transition='right 0s, top 0s';
				if (me.__40.ggCurrentLogicStatePosition == 0) {
					me.__40.style.right='170px';
					me.__40.style.top = 'calc(50% - (38px / 2))';
				}
				else {
					me.__40.style.right='0px';
					me.__40.style.top='calc(50% - ((38px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__40.logicBlock_position();
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4_=document.createElement('div');
		el.ggId="\ubc84\ud2bc 4 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
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
		me.__4_.ggIsActive=function() {
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
		me.__4_.onclick=function (e) {
			me.__17.ggVisible = !me.__17.ggVisible;
			var flag=me.__17.ggVisible;
			me.__17.style.transition='none';
			me.__17.style.visibility=((flag)&&(Number(me.__17.style.opacity)>0||!me.__17.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_skonremove', !player.getVariableValue('vis_skonremove'));
			me.__23.ggVisible = !me.__23.ggVisible;
			var flag=me.__23.ggVisible;
			me.__23.style.transition='none';
			me.__23.style.visibility=((flag)&&(Number(me.__23.style.opacity)>0||!me.__23.style.opacity))?'inherit':'hidden';
			me.__15.ggVisible = !me.__15.ggVisible;
			var flag=me.__15.ggVisible;
			me.__15.style.transition='none';
			me.__15.style.visibility=((flag)&&(Number(me.__15.style.opacity)>0||!me.__15.style.opacity))?'inherit':'hidden';
			me.__20.ggVisible = !me.__20.ggVisible;
			var flag=me.__20.ggVisible;
			me.__20.style.transition='none';
			me.__20.style.visibility=((flag)&&(Number(me.__20.style.opacity)>0||!me.__20.style.opacity))?'inherit':'hidden';
			me.__30.ggVisible = !me.__30.ggVisible;
			var flag=me.__30.ggVisible;
			me.__30.style.transition='none';
			me.__30.style.visibility=((flag)&&(Number(me.__30.style.opacity)>0||!me.__30.style.opacity))?'inherit':'hidden';
			me._header.ggVisible = !me._header.ggVisible;
			var flag=me._header.ggVisible;
			me._header.style.transition='none';
			me._header.style.visibility=((flag)&&(Number(me._header.style.opacity)>0||!me._header.style.opacity))?'inherit':'hidden';
		}
		me.__4_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__12=document.createElement('div');
		els=me.__12__img=document.createElement('img');
		els.className='ggskin ggskin__12';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAIFklEQVR4nO2cWawfUxzHP6fL1dbSStW+lapbUoqiCLUkuiCpLR54QYmX2olEYhdC8CQh1gceLIncetAi0UpDxVIaiVaV22jRVqvtbdFqHQ+/89d/xzkzc/6znRvnm0zuMjO/8zvnM2f/zSitNVHhaEDTDkTtqggkMEUggSkCCUwRSGCKQAJTBBKYIpDAFIEEpggkMEUggSkCCUwRSGCKQAJTBBKYIpDAFIEEpggkMEUggSkCCUwRiKeUUmOVUvOUUtuUUnOVUgeVaj9GneSXUqob+ADYv+3f72qtp5SWRgSSTw4YAJu01sPLSic2WTmUAgNgYalpxRqSrgwYvcCZWuuVZaU3qCxDVUspNQo4Fug2x1HAKGA/YE'+
			'9gN2AYsA3YDGwA+szvPwNLgW/Mz6Va674caWbBOKdMGBBwDTGFMRWYDJwO7Fui+b+BL4H3zbFAa/2HJf0sGL0l+iTSWgdzAMcBjwLLAV3j8QfwFnAZUtO6kVplu/YH4PCqyqDxGqKU6gKuAm4ATm7UGdE6YAiwu+VcL1XVDKPGgCilhgDXAncBBzfihJ9WAGdXCQMaAKKUGgDMBO4FDvS4tdVcLAaWmd9/An4FNgK/J64fCoxE+p4xwFhgHHA0sLen278BJ2utl3ve56+a+4gJwEfkb9sXA48BFwAjSsqyAsYDNwNvIyOxPL4sAiZWXkY1gRgMPAL8lSPjy4EHgCNLApClCcgQOQ+Uv4xvA/stEOBw4OOMjO4AepAhrspZkN3AHea+b9sKdQPSpPWY890ZNlyjqbRjHjCq3wEBpiPtb1rm3kAmfHmkgBnIcoVPAS40'+
			'97XDToOxEngNeVBcNr8Hju43QIBZwPaUDH2FjFpa12dpDPJk+j7NySd7TAaMXsw8AzgD+DrF3mrgxOCBAPenZGIbcDcwKHFPmi4HNhWE0Tq24K61/8Jo86sLeAh3bdkInBosEKTTcxXGctcTlaKZKYVR5vEfGAn/piCTRtu964DxwQEB7knJ8HvAiJR7bbqU9GbvC+A2YBIyp+kyPyeZ/3/hAwPSywOZw/Q6bPwIHBwMEOBKZNHO5uyLwOCM+5Mai7uZ+g4ZMOTRdGSW7YKxqgUjC4jx8xBk1dhm61NgaONAkOHqVoeTT+a00S6FuwPvAfbKCQOkA/8lBchC2kZfOX09ABla2+y91CgQ45wrw0952GnXDIe9ucBATxh55hkzfIAYf8cAa1z2GgGCbAF/4HDqFcxaWQdAbMsr3wHDK4ChTXpeQIzPZ2BvGVYBezcB5B'+
			'ZHBj8EujxttRekzea0kmCsdvy/2xeI8XuWw95LtQIBRiMrrElH1gGHdGCvpTssNheVBKMX6cA/t5y7s0MgCnjHkd65dQJ50+HEpR3aa6nHYvP2EmGADImT53s6AWJ8PxCZICZtflwLEOAcR6afLwC4pW8tdieVCANgouWaZZ0CMf7f5Ej7wjqA2CZcfaRM/DyA2J60rI0sHxggG1TJ6zYWBNKFvX/62sdOmYFyg5AAgaKyzTFWp1yfFh2yAjgbgdKu33Km66Md5iimkpus1yuqIa4tV9+a0ZKthmzqtDyM/zMdflxUeZNlHHB16tcUBGLrQ2zRKJ3CgJL7EGAfZG+/mU7dOOEa9vYBRxUAkmeUVQQGwK2W+4qMslwP53m1ATGO2DKmkXH+sA6BZM1DisKAcuchVzt86aj5LgokbemkB49ggESB2+xNKwnGVMf93jN1'+
			'4CTsrcR64KDagRin0hYXXyDnelZCtj3z3pR08sLYA3sf5b2WhQT3/ejw56qOy7MoEOPcZNzL78/lgZLQDIetIjAGYu+fNJ6rvUjU/RKHrZcLlWUZQIyTaRtUrwFDPIAoYH6JMEYAcxw25uOxH4LMd75y2PoMz76zMiDG2bQt3A+BkTmBgOwYbkmxtwYZ6aVJAZfgjqbvQ7Zl/1VG/o5AtgFstsLawm1zOi3IYQVwWk4g3WTHdC1CRnoT2RlqOsL8fas577p3O3BFMtGUfE0G1jpsrSfEIIecUFrhmEMT9yRhdBJRmPfYAVxnewoseRmEBIa7gi3CDgNqy0hWoNwyYKoFSNUw+pA4L6sSeTgFd3+h6S+Bcm0ZyhNK2oO8OZUFYxXwSUEY80n0GTYgSGTJM6THg/1AfwolbYMymuxg67+RCaYrEK0XGU21Ynt9wXzCf2'+
			'N7bToUeBr3EL51zKM/Blu3QRmMvDuY53UEF4ykupHljtlI89eK4dpk/p5tzqdFv4NsGVyM1NS0Jlab8w+SCIPtd0DawJyAX+T6NuBZ5IWd4RkF66NjgRsNhLwxw19Swws7Tb7Sdh+y7JJXGnkFYDEyF/iena+0bQD+RJ7gAeZovdI2EjgMeQFoHPKCzkiPdPuAh4EntNbbPe7rSE2+9Hk8MlksulNXlTYj/cnjWut1dSXayJcczEv5cwgTxlrgeSTqcm3didcOJOMLCT8jnfH5ZC+LlKk/kTDVV4HZWuutNaa9i2oFkgFjl/fAlVLjkD2Qs5BPa4wq0ZXMT2s0pdr6EB8Yjvv3Z+eHZ45Bgp33NcceSCc+xFy+BRmhrUc6/ZXs/PjMEnJ+fKYJ1QKkKIz/kyr/gFmE4adKa4hS6khgARFGblVdQ54jwvBS1TWkD+lw'+
			'2xVhpKjqGrIg8XeEkaGqgVyPzMjXmJ8RRoYa/6Jc1K6K3+0NTBFIYIpAAlMEEpgikMAUgQSmCCQwRSCBKQIJTBFIYIpAAlMEEpgikMAUgQSmCCQwRSCBKQIJTBFIYIpAAlMEEpj+AeF2nLPgYqQEAAAAAElFTkSuQmCC';
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
		el.ggId="\uc2a4\ud0a8\uc81c\uac70";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 57.8947%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((57.8947% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
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
		me.__12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skonremove') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__12.style.transition='';
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
		me.__4_.appendChild(me.__12);
		el=me.__11=document.createElement('div');
		els=me.__11__img=document.createElement('img');
		els.className='ggskin ggskin__11';
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
		el.ggId="\uc2a4\ud0a8\uc0dd\uc131";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 57.89%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((57.89% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
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
		me.__11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skonremove') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__11.style.transition='';
				if (me.__11.ggCurrentLogicStateVisible == 0) {
					me.__11.style.visibility=(Number(me.__11.style.opacity)>0||!me.__11.style.opacity)?'inherit':'hidden';
					me.__11.ggVisible=true;
				}
				else {
					me.__11.style.visibility="hidden";
					me.__11.ggVisible=false;
				}
			}
		}
		me.__11.logicBlock_visible();
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		me.__4_.appendChild(me.__11);
		me.__40.appendChild(me.__4_);
		me.__10.appendChild(me.__40);
		me.__9.appendChild(me.__10);
		me.divSkin.appendChild(me.__9);
		el=me.__4=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc0ac\uc774\ub4dc \ubc14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -68%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 68%;';
		hs+='pointer-events:none;';
		hs+='max-width:320px; max-width:640px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobileOpen') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__4.style.transition='right 800ms linear 0ms, top 800ms linear 0ms';
				if (me.__4.ggCurrentLogicStatePosition == 0) {
					me.__4.style.right='0%';
					me.__4.style.top = 'calc(50% - (100% / 2))';
				}
				else {
					me.__4.style.right='-68%';
					me.__4.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__4.logicBlock_position();
		me.__4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__4.style.transition='right 800ms linear 0ms, top 800ms linear 0ms';
				if (me.__4.ggCurrentLogicStateVisible == 0) {
					me.__4.style.visibility=(Number(me.__4.style.opacity)>0||!me.__4.style.opacity)?'inherit':'hidden';
					me.__4.ggVisible=true;
				}
				else {
					me.__4.style.visibility="hidden";
					me.__4.ggVisible=false;
				}
			}
		}
		me.__4.logicBlock_visible();
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc0ac\uc774\ub4dc \ubc14 \ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -99;';
		hs+='background : rgba(34,30,31,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
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
			player.setVariableValue('vis_mobileOpen', !player.getVariableValue('vis_mobileOpen'));
			player.setVariableValue('vis_header', !player.getVariableValue('vis_header'));
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me.__8);
		el=me.__6=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc0ac\uc774\ub4dc \ubc14 \ud654\uc0b4\ud45c \ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px 0px 0px 25px;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : -23px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
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
		me.__6.onclick=function (e) {
			player.setVariableValue('vis_mobileOpen', !player.getVariableValue('vis_mobileOpen'));
			player.setVariableValue('vis_header', !player.getVariableValue('vis_header'));
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		els=me.__7__img=document.createElement('img');
		els.className='ggskin ggskin__7';
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
		el.ggId="\ubaa8\ubc14\uc77c \uc0ac\uc774\ub4dc \ubc14 \ud654\uc0b4\ud45c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((11px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
		me.__7.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_mobileOpen') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__7.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__7.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__7.style.transition='transform 800ms linear 0ms';
				if (me.__7.ggCurrentLogicStateAngle == 0) {
					me.__7.ggParameter.a = -90;
					me.__7.style.transform=parameterToTransform(me.__7.ggParameter);
				}
				else {
					me.__7.ggParameter.a = 90;
					me.__7.style.transform=parameterToTransform(me.__7.ggParameter);
				}
			}
		}
		me.__7.logicBlock_angle();
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me.__7);
		me.__4.appendChild(me.__6);
		el=me.__5=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uc0ac\uc774\ub4dc \ubc14 \uc804\uccb4 \ucee8\ud2b8\ub864 \ubc15\uc2a4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
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
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m3=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14 \ubc84\ud2bc-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 95%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m3.ggIsActive=function() {
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
		me.__m3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1m1=document.createElement('div');
		el.ggId="\ubc84\ud2bc 1-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1m1.ggIsActive=function() {
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
		me.__1m1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_m2=document.createElement('div');
		el.ggId="\ubc84\ud2bc 1 \ubc30\uacbd-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
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
		me.__1_m2.ggIsActive=function() {
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
		me.__1_m2.ggUpdatePosition=function (useTransition) {
		}
		el=me._m7=document.createElement('div');
		els=me._m7__img=document.createElement('img');
		els.className='ggskin ggskin_m7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAG1klEQVR4nO3cf4hmVR3H8dfs7M5au5tlZbth5I8CNS0rybJSK5GsDCn6gZuQBClCEVQQKWIZWNBPpJ+gFBpR0Bb+Y+bmFoUpbAZbG4G1UblqbrqZ29ju2Nz++M7A7My5z9w7+9z7HJ85bzjscPeee77n+7nPOd/z605UVaWQD2tGbUDhcIogmVEEyYwiSGYUQTKjCJIZRZDMKIJkRhEkM4ogmVEEyYwiSGYUQTKjCJIZRZDMKIJkRhEkM4ogmVEEyYwiSGYUQTJjbZubJyYmurJjOZ6B03AqXjCXjsMWPH3u/9djEx7HITyGJ/AA9uJv+Dt243c40GsN0GSHz0SbbUA9CbIGp+M8nIMzcAKGWXiFPbgXv8AO/G'+
			'GIz08X2sTXVVU1Th2yCe/BD/CIcFjf6QHciDdjXReVbOTjEQoyiYuwDdNGI0JdegTfxCuGWeFcBTkW14g2fdSOb5J+ja1a9rcpmvi4zz7kefg4rsCGlnkPiTZ+F/6Iv+J+7MN+0UEv7KQ3zqVn4bkiCDgeL8ZLRIBwVEsb7sN1+C5mW+ZFPn3IBnwG/9H8rXwUP8KH8TLDb9PX4Ux8DLcJMZvathtvWkmhOTRZ7xZvc5OK7sUNOFf/46P1oj+7WYTLTey9BZvbFDJKQZ6NHzao1CF8H+fLZ5D6NFyG31je/n14a9MHj0qQN4q3fVBFpvFlMbjLmdfhDoPrMosvaNCsjkKQKzAzwPiDQohWP/UMOBd3GyzMdhFE1NKnIBP44jIG34FTVu6TkbMGl4uorq6Ou0RYn6QvQSZw0wAjH8OlQ3BILmw2uBnbhaNTGfsS5GsD'+
			'jLtLxP/jxhpchSel6/1LMel5GH0IcnmNQRW+I8LJceYd6qd9blp8c9eCnCU66ZQxn+7KAxnyevWD3sOa6i4FOUpMJaSM+FTXHsiQ86VfzsctCO27FOTaROGVmCFdrVwm7ZPvzd/QlSBbxErc4oJ/haneqp8nN0oPHM+gO0GuSxQ6jZN6rXqebBLLxKkApxNB1ov5m8UFXt1/3bMl1XRN45ldCHJBorD94s0oBFNiOXixny5p4uO2M6wXJK7dLKKJQnBIYgyCNzTJ3FaQ1yau3dryGauB2xLXXt4oZ8smK9V/HDOkSowTx1rqp3828XHbNfUZSxf7R7Z7LmMmLF13n62qanK5jG2brP2Ja+UXspRUkPNok4xtBflT4tqZLZ+xGjgtcW1vk4xtBdmZuHZRy2esBi5MXLu3Uc6WnfqFlnZW/7bM0uUqY0p6tH5pVyP1Bx'+
			'OFfW4UNc+UKy31z0Ec09Vc1tWJAmfwyr5rniFbpDeLdzaXBc8RzdTiQu8T2zZXK5P4qfRs70vpdj3kQ4mCK9wpNpqtRr4i7ZNvz9/QpSCT6vcpbZdY4B9zrpX2xYOiRUG3ghCnmh6uMeQuw90Md6L49f0XP58rOwfW4uvSPngSb1l4c9eCEDOYdTsV7xcbIYbBjkXPzqG/Ohq3S9e9EtuEDqMPQeBd6kWZEUcRjnRpN7XV5h41G9J64Bwxa1EnxldTmfoSBN6pfktQJU69nncEDriz5rk/0+86/gZxZOJ/NfZU+IaaCdc+BSGar9T0/MLwb5s4wdSWF6nvr26pc8AQmcIHDT6GNyv2G9TStyDEttHfDjC6Em/Xj/Galk45S/2GtOtbPqspa8Ua+Z6acufTAXE4aSCjEITYRPclg3/W82mnmGpo2he8XX3T+NGmBjbg'+
			'ZHzW8udc5utwcpOHjkqQec4WfcdyFapEp70N77cgbq9hq2geUk3G1rZGLmAC7xMhe1Obr9Li/OOoBSF+8lfioYaVrET8fg8+j4ulz1t8oibvQXGCayV8sqF9s+K43oltC8hBkHk2iiYlNS3dJP1DRFQ34CN4rzilm7r3X+LTHG1pcjj1drx6Bc9GXoLMMyWapZ1WJkzTtE9EZm3YXfOsaRHJHfFsdo6CLOR0cQyuTXPWJrUdzV/s8AFu24BjWXIXZJ5JEQBcj98brijbW9pyPC6RXhM/Ypr4OMfPMz1fjOrPFhsoTrWyraoP4W3ivHkWNPF1joKkeKE4wXvK3N/H4VXiGyYp/iIO0ezpxbqGNPJ1Bk1WW9aJRZ+6Zupuy49lRsJTpQ9pw0b8RL0Yt8p4cWzcBNlscLj8LREgZMs4CXIS/qxejGtGZ1pzxkmQHdJCzO'+
			'ADI7SrFeMkSOqQ6QEtPo2UA+MkyOIVw4dF2PuUYpwEOUF8X/eJuX/bzlNlQRMftxoYFronl8/qFeYogmRGESQziiCZUQTJjCJIZhRBMqMIkhlFkMwogmRGESQziiCZUQTJjCJIZhRBMqMIkhlFkMwogmRGESQz/g/WMZdCzRcDvgAAAABJRU5ErkJggg==';
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
		el.ggId="\uc790\ub3d9\ud68c\uc804-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 57.8947%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((57.8947% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m7.ggIsActive=function() {
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
		me._m7.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._m7.ggUpdatePosition=function (useTransition) {
		}
		me.__1_m2.appendChild(me._m7);
		me.__1m1.appendChild(me.__1_m2);
		me.__m3.appendChild(me.__1m1);
		el=me.__2m1=document.createElement('div');
		el.ggId="\ubc84\ud2bc 2-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 27%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2m1.ggIsActive=function() {
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
		me.__2m1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_m2=document.createElement('div');
		el.ggId="\ubc84\ud2bc 2 \ubc30\uacbd-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
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
		me.__2_m2.ggIsActive=function() {
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
		me.__2_m2.onclick=function (e) {
			player.toggleFullscreen();
		}
		me.__2_m2.ggUpdatePosition=function (useTransition) {
		}
		el=me._m6=document.createElement('div');
		els=me._m6__img=document.createElement('img');
		els.className='ggskin ggskin_m6';
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
		el.ggId="\uc804\uccb4\ud654\uba74-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 57.8947%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((57.8947% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m6.ggIsActive=function() {
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
		me._m6.ggUpdatePosition=function (useTransition) {
		}
		me.__2_m2.appendChild(me._m6);
		me.__2m1.appendChild(me.__2_m2);
		me.__m3.appendChild(me.__2m1);
		el=me.__3m1=document.createElement('div');
		el.ggId="\ubc84\ud2bc 3-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 27%;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3m1.ggIsActive=function() {
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
		me.__3m1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_m2=document.createElement('div');
		el.ggId="\ubc84\ud2bc 3 \ubc30\uacbd-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
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
		me.__3_m2.ggIsActive=function() {
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
		me.__3_m2.onclick=function (e) {
			player.openUrl("","");
		}
		me.__3_m2.ggUpdatePosition=function (useTransition) {
		}
		el=me._m5=document.createElement('div');
		els=me._m5__img=document.createElement('img');
		els.className='ggskin ggskin_m5';
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
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 57.8947%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((57.8947% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m5.ggIsActive=function() {
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
		me._m5.ggUpdatePosition=function (useTransition) {
		}
		me.__3_m2.appendChild(me._m5);
		me.__3m1.appendChild(me.__3_m2);
		me.__m3.appendChild(me.__3m1);
		el=me.__4m1=document.createElement('div');
		el.ggId="\ubc84\ud2bc 4-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4m1.ggIsActive=function() {
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
		me.__4m1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_skonremove') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__4m1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__4m1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__4m1.style.transition='right 0s, top 0s';
				if (me.__4m1.ggCurrentLogicStatePosition == 0) {
					me.__4m1.style.right='0px';
					me.__4m1.style.top = 'calc(50% - (38px / 2) + (0px / 2) + 5px)';
				}
				else {
					me.__4m1.style.right='0px';
					me.__4m1.style.top='calc(50% - ((38px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__4m1.logicBlock_position();
		me.__4m1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4_m2=document.createElement('div');
		el.ggId="\ubc84\ud2bc 4 \ubc30\uacbd-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
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
		me.__4_m2.ggIsActive=function() {
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
		me.__4_m2.onclick=function (e) {
			me.__m2.ggVisible = !me.__m2.ggVisible;
			var flag=me.__m2.ggVisible;
			me.__m2.style.transition='none';
			me.__m2.style.visibility=((flag)&&(Number(me.__m2.style.opacity)>0||!me.__m2.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_skonremove', !player.getVariableValue('vis_skonremove'));
			me._m.ggVisible = !me._m.ggVisible;
			var flag=me._m.ggVisible;
			me._m.style.transition='none';
			me._m.style.visibility=((flag)&&(Number(me._m.style.opacity)>0||!me._m.style.opacity))?'inherit':'hidden';
			me.__1m1.ggVisible = !me.__1m1.ggVisible;
			var flag=me.__1m1.ggVisible;
			me.__1m1.style.transition='none';
			me.__1m1.style.visibility=((flag)&&(Number(me.__1m1.style.opacity)>0||!me.__1m1.style.opacity))?'inherit':'hidden';
			me.__2m1.ggVisible = !me.__2m1.ggVisible;
			var flag=me.__2m1.ggVisible;
			me.__2m1.style.transition='none';
			me.__2m1.style.visibility=((flag)&&(Number(me.__2m1.style.opacity)>0||!me.__2m1.style.opacity))?'inherit':'hidden';
			me.__3m1.ggVisible = !me.__3m1.ggVisible;
			var flag=me.__3m1.ggVisible;
			me.__3m1.style.transition='none';
			me.__3m1.style.visibility=((flag)&&(Number(me.__3m1.style.opacity)>0||!me.__3m1.style.opacity))?'inherit':'hidden';
			me._header.ggVisible = !me._header.ggVisible;
			var flag=me._header.ggVisible;
			me._header.style.transition='none';
			me._header.style.visibility=((flag)&&(Number(me._header.style.opacity)>0||!me._header.style.opacity))?'inherit':'hidden';
			me.__6.ggVisible = !me.__6.ggVisible;
			var flag=me.__6.ggVisible;
			me.__6.style.transition='none';
			me.__6.style.visibility=((flag)&&(Number(me.__6.style.opacity)>0||!me.__6.style.opacity))?'inherit':'hidden';
			me.__8.ggVisible = !me.__8.ggVisible;
			var flag=me.__8.ggVisible;
			me.__8.style.transition='none';
			me.__8.style.visibility=((flag)&&(Number(me.__8.style.opacity)>0||!me.__8.style.opacity))?'inherit':'hidden';
		}
		me.__4_m2.ggUpdatePosition=function (useTransition) {
		}
		el=me._m4=document.createElement('div');
		els=me._m4__img=document.createElement('img');
		els.className='ggskin ggskin_m4';
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
		el.ggId="\uc2a4\ud0a8\uc81c\uac70-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 57.8947%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((57.8947% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m4.ggIsActive=function() {
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
		me._m4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skonremove') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m4.style.transition='';
				if (me._m4.ggCurrentLogicStateVisible == 0) {
					me._m4.style.visibility="hidden";
					me._m4.ggVisible=false;
				}
				else {
					me._m4.style.visibility=(Number(me._m4.style.opacity)>0||!me._m4.style.opacity)?'inherit':'hidden';
					me._m4.ggVisible=true;
				}
			}
		}
		me._m4.logicBlock_visible();
		me._m4.ggUpdatePosition=function (useTransition) {
		}
		me.__4_m2.appendChild(me._m4);
		el=me._m3=document.createElement('div');
		els=me._m3__img=document.createElement('img');
		els.className='ggskin ggskin_m3';
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
		el.ggId="\uc2a4\ud0a8\uc0dd\uc131-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 57.89%;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((57.89% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m3.ggIsActive=function() {
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
		me._m3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skonremove') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m3.style.transition='';
				if (me._m3.ggCurrentLogicStateVisible == 0) {
					me._m3.style.visibility=(Number(me._m3.style.opacity)>0||!me._m3.style.opacity)?'inherit':'hidden';
					me._m3.ggVisible=true;
				}
				else {
					me._m3.style.visibility="hidden";
					me._m3.ggVisible=false;
				}
			}
		}
		me._m3.logicBlock_visible();
		me._m3.ggUpdatePosition=function (useTransition) {
		}
		me.__4_m2.appendChild(me._m3);
		me.__4m1.appendChild(me.__4_m2);
		me.__m3.appendChild(me.__4m1);
		me.__5.appendChild(me.__m3);
		el=me.__m2=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd \ubc14-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40.1042%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 48%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m2.ggIsActive=function() {
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
		me.__m2.onclick=function (e) {
			player.setVariableValue('vis_mobileOpen', !player.getVariableValue('vis_mobileOpen'));
			player.setVariableValue('vis_header', !player.getVariableValue('vis_header'));
		}
		me.__m2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1m=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 1-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 15.2%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1m.ggIsActive=function() {
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
		me.__1m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_m=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 1 \ubc30\uacbd-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_m.ggIsActive=function() {
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
		me.__1_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_maincenter') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1_m.style.transition='background-color 0s';
				if (me.__1_m.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1_m.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__1_m.style.backgroundColor="rgba(34,30,31,1)";
				}
			}
		}
		me.__1_m.logicBlock_backgroundcolor();
		me.__1_m.onclick=function (e) {
			player.setVariableValue('vis_maincenter', !player.getVariableValue('vis_maincenter'));
			player.setVariableValue('vis_exparkinglot', false);
			player.setVariableValue('vis_walk', false);
			player.setVariableValue('vis_garden', false);
			player.setVariableValue('vis_underground', false);
			player.openNext("{node3}","$(cur)");
		}
		me.__1_m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1m0=document.createElement('div');
		els=me.__1m0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc7a5\uc18c 1-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text letter-spacing:1px;";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 86.8055%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((86.8055% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1m0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ucd9c\uc785\uad6c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1m0.ggUpdateText();
		el.appendChild(els);
		me.__1m0.ggIsActive=function() {
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
		me.__1m0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_maincenter') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1m0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1m0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1m0.style.transition='color 0s';
				if (me.__1m0.ggCurrentLogicStateTextColor == 0) {
					me.__1m0.style.color="rgba(34,30,31,1)";
				}
				else {
					me.__1m0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__1m0.logicBlock_textcolor();
		me.__1m0.ggUpdatePosition=function (useTransition) {
		}
		me.__1_m.appendChild(me.__1m0);
		el=me.__1_m1=document.createElement('div');
		els=me.__1_m1__img=document.createElement('img');
		els.className='ggskin ggskin__1_m1';
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
		el.ggId="\uc7a5\uc18c 1 \ud654\uc0b4\ud45c-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 14px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__1_m1.ggIsActive=function() {
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
		me.__1_m1.ggUpdatePosition=function (useTransition) {
		}
		me.__1_m.appendChild(me.__1_m1);
		el=me.__1_m0=document.createElement('div');
		els=me.__1_m0__img=document.createElement('img');
		els.className='ggskin ggskin__1_m0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAACXBIWXMAAC4jAAAuIwF4pT92AAADDUlEQVRYhbXYy49URRTH8Q+PhAC2KMsJT0dmmAmwYUXAGGLYujCuycwwA7ox/g1uBXmG8DfwD/AYUAhhmBlRFrrwEXWIhgCioP4Bujj3YqfTt29V3+6TTDpz+1T/vnXqnFN1a9XIyIgKexfv41N8U+XU1NZWPD+MzzCKDfgYvw0DYE2r1ep89g4u4c3i/0nswF38M2yAI7iIXR1+E9iGe/h7WACdM++0SWw34EiUAEcK8dEa/3I5FvHXoAAO4DK2Jo6ZEJFYxoumAKuLH3mYOe49nJcOXWlrWq3WM9wRM3sjY+yYWI5GkShz4FnxQ7kQEyJvlvC8CUAJsYTdmRBjomwX+4Ho7AN/iEiMq6+IdtslyncZfzYBaA'+
			'IxVvjfk5ET3QBKiC9F3e/MhNgpljIJogqAyIn72COyPdXGC4gFCc2qFwD8LiKxVzSfHIjRFIg6gBLiKxGJXIjtatp2CgA8wdcFxLYMiAnRLRdUbGCpAO0Q++S14J67aA5ACXG/gMiJxGThv6jjPJELUEIs+39rzoEoq+MlRD8A8FRUR26J7i78X0L0C0BUx4Io0RyIcgNbxvMmAETHXBJ7wQ5xvkix8eLvceqAXvYdPsKDzHEbsL7qvSDX9mNLhv81nMCjQQDM4hzWZ4jPKl50mgLM4ALWJfrfwAfa3rKa5MA0TmeIXxUzX2l/2G8EZnFWJFKq+DE86vyiH4BpeWs+jw+7iZO/BDMi7Knit8Sar1Q55ETgaCH+aqL/bRzHz72cUiMwhTMZ4rcwhx/rHFMApsQtyeuJ4jdFk6kVp34JpnESmzPEa8Pebr0icAynMsQ/'+
			'FzNPFu8FMCMv7F+IbP8pR5zuSzDVh/iMHqWWAzAtbsdeSxw/X4j3fYO2uu1zTtR5qvgVkSeNru/WYpXI3JPYmDjuqmivvzYRJ2b+r3hzeZE4Zl7MPPdap6uVZ8JvReM4hE014nMGeGvafij9QdTwW7q33Ouizgcy824A8D1+wcEOiFJ8ZZDi3QCIU+5DvI1XRIc7PgzxKgAiEhvRwifi9Xwo9h99YKX0bgrIPQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc7a5\uc18c 1 \ud654\uc0b4\ud45c-\uac80\uc815-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_m0.ggIsActive=function() {
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
		me.__1_m0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_maincenter') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1_m0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1_m0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1_m0.style.transition='';
				if (me.__1_m0.ggCurrentLogicStateVisible == 0) {
					me.__1_m0.style.visibility=(Number(me.__1_m0.style.opacity)>0||!me.__1_m0.style.opacity)?'inherit':'hidden';
					me.__1_m0.ggVisible=true;
				}
				else {
					me.__1_m0.style.visibility="hidden";
					me.__1_m0.ggVisible=false;
				}
			}
		}
		me.__1_m0.logicBlock_visible();
		me.__1_m0.ggUpdatePosition=function (useTransition) {
		}
		me.__1_m.appendChild(me.__1_m0);
		me.__1m.appendChild(me.__1_m);
		me.__m2.appendChild(me.__1m);
		el=me.__2m=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 2-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 15.2%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2m.ggIsActive=function() {
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
		me.__2m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_m=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 2 \ubc30\uacbd-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_m.ggIsActive=function() {
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
		me.__2_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_exparkinglot') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2_m.style.transition='background-color 0s';
				if (me.__2_m.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2_m.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__2_m.style.backgroundColor="rgba(34,30,31,1)";
				}
			}
		}
		me.__2_m.logicBlock_backgroundcolor();
		me.__2_m.onclick=function (e) {
			player.setVariableValue('vis_maincenter', false);
			player.setVariableValue('vis_exparkinglot', !player.getVariableValue('vis_exparkinglot'));
			player.setVariableValue('vis_walk', false);
			player.setVariableValue('vis_garden', false);
			player.setVariableValue('vis_underground', false);
			player.openNext("{node4}","$(cur)");
		}
		me.__2_m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2m0=document.createElement('div');
		els=me.__2m0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc7a5\uc18c 2-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text letter-spacing:1px;";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 86.8055%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((86.8055% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2m0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc57c\uc678\uc8fc\ucc28\uc7a5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2m0.ggUpdateText();
		el.appendChild(els);
		me.__2m0.ggIsActive=function() {
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
		me.__2m0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_exparkinglot') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__2m0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__2m0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__2m0.style.transition='color 0s';
				if (me.__2m0.ggCurrentLogicStateTextColor == 0) {
					me.__2m0.style.color="rgba(34,30,31,1)";
				}
				else {
					me.__2m0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__2m0.logicBlock_textcolor();
		me.__2m0.ggUpdatePosition=function (useTransition) {
		}
		me.__2_m.appendChild(me.__2m0);
		el=me.__2_m1=document.createElement('div');
		els=me.__2_m1__img=document.createElement('img');
		els.className='ggskin ggskin__2_m1';
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
		el.ggId="\uc7a5\uc18c 2 \ud654\uc0b4\ud45c-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 14px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__2_m1.ggIsActive=function() {
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
		me.__2_m1.ggUpdatePosition=function (useTransition) {
		}
		me.__2_m.appendChild(me.__2_m1);
		el=me.__2_m0=document.createElement('div');
		els=me.__2_m0__img=document.createElement('img');
		els.className='ggskin ggskin__2_m0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAACXBIWXMAAC4jAAAuIwF4pT92AAADDUlEQVRYhbXYy49URRTH8Q+PhAC2KMsJT0dmmAmwYUXAGGLYujCuycwwA7ox/g1uBXmG8DfwD/AYUAhhmBlRFrrwEXWIhgCioP4Bujj3YqfTt29V3+6TTDpz+1T/vnXqnFN1a9XIyIgKexfv41N8U+XU1NZWPD+MzzCKDfgYvw0DYE2r1ep89g4u4c3i/0nswF38M2yAI7iIXR1+E9iGe/h7WACdM++0SWw34EiUAEcK8dEa/3I5FvHXoAAO4DK2Jo6ZEJFYxoumAKuLH3mYOe49nJcOXWlrWq3WM9wRM3sjY+yYWI5GkShz4FnxQ7kQEyJvlvC8CUAJsYTdmRBjomwX+4Ho7AN/iEiMq6+IdtslyncZfzYBaA'+
			'IxVvjfk5ET3QBKiC9F3e/MhNgpljIJogqAyIn72COyPdXGC4gFCc2qFwD8LiKxVzSfHIjRFIg6gBLiKxGJXIjtatp2CgA8wdcFxLYMiAnRLRdUbGCpAO0Q++S14J67aA5ACXG/gMiJxGThv6jjPJELUEIs+39rzoEoq+MlRD8A8FRUR26J7i78X0L0C0BUx4Io0RyIcgNbxvMmAETHXBJ7wQ5xvkix8eLvceqAXvYdPsKDzHEbsL7qvSDX9mNLhv81nMCjQQDM4hzWZ4jPKl50mgLM4ALWJfrfwAfa3rKa5MA0TmeIXxUzX2l/2G8EZnFWJFKq+DE86vyiH4BpeWs+jw+7iZO/BDMi7Knit8Sar1Q55ETgaCH+aqL/bRzHz72cUiMwhTMZ4rcwhx/rHFMApsQtyeuJ4jdFk6kVp34JpnESmzPEa8Pebr0icAynMsQ/'+
			'FzNPFu8FMCMv7F+IbP8pR5zuSzDVh/iMHqWWAzAtbsdeSxw/X4j3fYO2uu1zTtR5qvgVkSeNru/WYpXI3JPYmDjuqmivvzYRJ2b+r3hzeZE4Zl7MPPdap6uVZ8JvReM4hE014nMGeGvafij9QdTwW7q33Ouizgcy824A8D1+wcEOiFJ8ZZDi3QCIU+5DvI1XRIc7PgzxKgAiEhvRwifi9Xwo9h99YKX0bgrIPQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc7a5\uc18c 2 \ud654\uc0b4\ud45c-\uac80\uc815-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_m0.ggIsActive=function() {
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
		me.__2_m0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_exparkinglot') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2_m0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2_m0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2_m0.style.transition='';
				if (me.__2_m0.ggCurrentLogicStateVisible == 0) {
					me.__2_m0.style.visibility=(Number(me.__2_m0.style.opacity)>0||!me.__2_m0.style.opacity)?'inherit':'hidden';
					me.__2_m0.ggVisible=true;
				}
				else {
					me.__2_m0.style.visibility="hidden";
					me.__2_m0.ggVisible=false;
				}
			}
		}
		me.__2_m0.logicBlock_visible();
		me.__2_m0.ggUpdatePosition=function (useTransition) {
		}
		me.__2_m.appendChild(me.__2_m0);
		me.__2m.appendChild(me.__2_m);
		me.__m2.appendChild(me.__2m);
		el=me.__3m=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 3-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 15.2%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 40%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3m.ggIsActive=function() {
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
		me.__3m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_m=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 3 \ubc30\uacbd-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3_m.ggIsActive=function() {
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
		me.__3_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_walk') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__3_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__3_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__3_m.style.transition='background-color 0s';
				if (me.__3_m.ggCurrentLogicStateBackgroundColor == 0) {
					me.__3_m.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__3_m.style.backgroundColor="rgba(34,30,31,1)";
				}
			}
		}
		me.__3_m.logicBlock_backgroundcolor();
		me.__3_m.onclick=function (e) {
			player.setVariableValue('vis_maincenter', false);
			player.setVariableValue('vis_exparkinglot', false);
			player.setVariableValue('vis_walk', !player.getVariableValue('vis_walk'));
			player.setVariableValue('vis_garden', false);
			player.setVariableValue('vis_underground', false);
			player.openNext("{node1}","$(cur)");
		}
		me.__3_m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3m0=document.createElement('div');
		els=me.__3m0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc7a5\uc18c 3-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text letter-spacing:1px;";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 86.8055%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((86.8055% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3m0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e8\uc9c0\ub0b4\ubd80\uc778\ub3c4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3m0.ggUpdateText();
		el.appendChild(els);
		me.__3m0.ggIsActive=function() {
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
		me.__3m0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_walk') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__3m0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__3m0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__3m0.style.transition='color 0s';
				if (me.__3m0.ggCurrentLogicStateTextColor == 0) {
					me.__3m0.style.color="rgba(34,30,31,1)";
				}
				else {
					me.__3m0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__3m0.logicBlock_textcolor();
		me.__3m0.ggUpdatePosition=function (useTransition) {
		}
		me.__3_m.appendChild(me.__3m0);
		el=me.__3_m1=document.createElement('div');
		els=me.__3_m1__img=document.createElement('img');
		els.className='ggskin ggskin__3_m1';
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
		el.ggId="\uc7a5\uc18c 3 \ud654\uc0b4\ud45c-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 14px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__3_m1.ggIsActive=function() {
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
		me.__3_m1.ggUpdatePosition=function (useTransition) {
		}
		me.__3_m.appendChild(me.__3_m1);
		el=me.__3_m0=document.createElement('div');
		els=me.__3_m0__img=document.createElement('img');
		els.className='ggskin ggskin__3_m0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAACXBIWXMAAC4jAAAuIwF4pT92AAADDUlEQVRYhbXYy49URRTH8Q+PhAC2KMsJT0dmmAmwYUXAGGLYujCuycwwA7ox/g1uBXmG8DfwD/AYUAhhmBlRFrrwEXWIhgCioP4Bujj3YqfTt29V3+6TTDpz+1T/vnXqnFN1a9XIyIgKexfv41N8U+XU1NZWPD+MzzCKDfgYvw0DYE2r1ep89g4u4c3i/0nswF38M2yAI7iIXR1+E9iGe/h7WACdM++0SWw34EiUAEcK8dEa/3I5FvHXoAAO4DK2Jo6ZEJFYxoumAKuLH3mYOe49nJcOXWlrWq3WM9wRM3sjY+yYWI5GkShz4FnxQ7kQEyJvlvC8CUAJsYTdmRBjomwX+4Ho7AN/iEiMq6+IdtslyncZfzYBaA'+
			'IxVvjfk5ET3QBKiC9F3e/MhNgpljIJogqAyIn72COyPdXGC4gFCc2qFwD8LiKxVzSfHIjRFIg6gBLiKxGJXIjtatp2CgA8wdcFxLYMiAnRLRdUbGCpAO0Q++S14J67aA5ACXG/gMiJxGThv6jjPJELUEIs+39rzoEoq+MlRD8A8FRUR26J7i78X0L0C0BUx4Io0RyIcgNbxvMmAETHXBJ7wQ5xvkix8eLvceqAXvYdPsKDzHEbsL7qvSDX9mNLhv81nMCjQQDM4hzWZ4jPKl50mgLM4ALWJfrfwAfa3rKa5MA0TmeIXxUzX2l/2G8EZnFWJFKq+DE86vyiH4BpeWs+jw+7iZO/BDMi7Knit8Sar1Q55ETgaCH+aqL/bRzHz72cUiMwhTMZ4rcwhx/rHFMApsQtyeuJ4jdFk6kVp34JpnESmzPEa8Pebr0icAynMsQ/'+
			'FzNPFu8FMCMv7F+IbP8pR5zuSzDVh/iMHqWWAzAtbsdeSxw/X4j3fYO2uu1zTtR5qvgVkSeNru/WYpXI3JPYmDjuqmivvzYRJ2b+r3hzeZE4Zl7MPPdap6uVZ8JvReM4hE014nMGeGvafij9QdTwW7q33Ouizgcy824A8D1+wcEOiFJ8ZZDi3QCIU+5DvI1XRIc7PgzxKgAiEhvRwifi9Xwo9h99YKX0bgrIPQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc7a5\uc18c 3 \ud654\uc0b4\ud45c-\uac80\uc815-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3_m0.ggIsActive=function() {
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
		me.__3_m0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_walk') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__3_m0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__3_m0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__3_m0.style.transition='';
				if (me.__3_m0.ggCurrentLogicStateVisible == 0) {
					me.__3_m0.style.visibility=(Number(me.__3_m0.style.opacity)>0||!me.__3_m0.style.opacity)?'inherit':'hidden';
					me.__3_m0.ggVisible=true;
				}
				else {
					me.__3_m0.style.visibility="hidden";
					me.__3_m0.ggVisible=false;
				}
			}
		}
		me.__3_m0.logicBlock_visible();
		me.__3_m0.ggUpdatePosition=function (useTransition) {
		}
		me.__3_m.appendChild(me.__3_m0);
		me.__3m.appendChild(me.__3_m);
		me.__m2.appendChild(me.__3m);
		el=me.__4m=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 4-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 15.2%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 60%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4m.ggIsActive=function() {
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
		me.__4m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4_m=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 4 \ubc30\uacbd-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4_m.ggIsActive=function() {
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
		me.__4_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_garden') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__4_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__4_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__4_m.style.transition='background-color 0s';
				if (me.__4_m.ggCurrentLogicStateBackgroundColor == 0) {
					me.__4_m.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__4_m.style.backgroundColor="rgba(34,30,31,1)";
				}
			}
		}
		me.__4_m.logicBlock_backgroundcolor();
		me.__4_m.onclick=function (e) {
			player.setVariableValue('vis_maincenter', false);
			player.setVariableValue('vis_exparkinglot', false);
			player.setVariableValue('vis_walk', false);
			player.setVariableValue('vis_garden', !player.getVariableValue('vis_garden'));
			player.setVariableValue('vis_underground', false);
			player.openNext("{node2}","$(cur)");
		}
		me.__4_m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4m0=document.createElement('div');
		els=me.__4m0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc7a5\uc18c 4-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text letter-spacing:1px;";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 86.8055%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((86.8055% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__4m0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e8\uc9c0\ub0b4\ubd80\uc815\uc6d0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__4m0.ggUpdateText();
		el.appendChild(els);
		me.__4m0.ggIsActive=function() {
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
		me.__4m0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_garden') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__4m0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__4m0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__4m0.style.transition='color 0s';
				if (me.__4m0.ggCurrentLogicStateTextColor == 0) {
					me.__4m0.style.color="rgba(34,30,31,1)";
				}
				else {
					me.__4m0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__4m0.logicBlock_textcolor();
		me.__4m0.ggUpdatePosition=function (useTransition) {
		}
		me.__4_m.appendChild(me.__4m0);
		el=me.__4_m1=document.createElement('div');
		els=me.__4_m1__img=document.createElement('img');
		els.className='ggskin ggskin__4_m1';
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
		el.ggId="\uc7a5\uc18c 4 \ud654\uc0b4\ud45c-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 14px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__4_m1.ggIsActive=function() {
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
		me.__4_m1.ggUpdatePosition=function (useTransition) {
		}
		me.__4_m.appendChild(me.__4_m1);
		el=me.__4_m0=document.createElement('div');
		els=me.__4_m0__img=document.createElement('img');
		els.className='ggskin ggskin__4_m0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAACXBIWXMAAC4jAAAuIwF4pT92AAADDUlEQVRYhbXYy49URRTH8Q+PhAC2KMsJT0dmmAmwYUXAGGLYujCuycwwA7ox/g1uBXmG8DfwD/AYUAhhmBlRFrrwEXWIhgCioP4Bujj3YqfTt29V3+6TTDpz+1T/vnXqnFN1a9XIyIgKexfv41N8U+XU1NZWPD+MzzCKDfgYvw0DYE2r1ep89g4u4c3i/0nswF38M2yAI7iIXR1+E9iGe/h7WACdM++0SWw34EiUAEcK8dEa/3I5FvHXoAAO4DK2Jo6ZEJFYxoumAKuLH3mYOe49nJcOXWlrWq3WM9wRM3sjY+yYWI5GkShz4FnxQ7kQEyJvlvC8CUAJsYTdmRBjomwX+4Ho7AN/iEiMq6+IdtslyncZfzYBaA'+
			'IxVvjfk5ET3QBKiC9F3e/MhNgpljIJogqAyIn72COyPdXGC4gFCc2qFwD8LiKxVzSfHIjRFIg6gBLiKxGJXIjtatp2CgA8wdcFxLYMiAnRLRdUbGCpAO0Q++S14J67aA5ACXG/gMiJxGThv6jjPJELUEIs+39rzoEoq+MlRD8A8FRUR26J7i78X0L0C0BUx4Io0RyIcgNbxvMmAETHXBJ7wQ5xvkix8eLvceqAXvYdPsKDzHEbsL7qvSDX9mNLhv81nMCjQQDM4hzWZ4jPKl50mgLM4ALWJfrfwAfa3rKa5MA0TmeIXxUzX2l/2G8EZnFWJFKq+DE86vyiH4BpeWs+jw+7iZO/BDMi7Knit8Sar1Q55ETgaCH+aqL/bRzHz72cUiMwhTMZ4rcwhx/rHFMApsQtyeuJ4jdFk6kVp34JpnESmzPEa8Pebr0icAynMsQ/'+
			'FzNPFu8FMCMv7F+IbP8pR5zuSzDVh/iMHqWWAzAtbsdeSxw/X4j3fYO2uu1zTtR5qvgVkSeNru/WYpXI3JPYmDjuqmivvzYRJ2b+r3hzeZE4Zl7MPPdap6uVZ8JvReM4hE014nMGeGvafij9QdTwW7q33Ouizgcy824A8D1+wcEOiFJ8ZZDi3QCIU+5DvI1XRIc7PgzxKgAiEhvRwifi9Xwo9h99YKX0bgrIPQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc7a5\uc18c 4 \ud654\uc0b4\ud45c-\uac80\uc815-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4_m0.ggIsActive=function() {
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
		me.__4_m0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_garden') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__4_m0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__4_m0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__4_m0.style.transition='';
				if (me.__4_m0.ggCurrentLogicStateVisible == 0) {
					me.__4_m0.style.visibility=(Number(me.__4_m0.style.opacity)>0||!me.__4_m0.style.opacity)?'inherit':'hidden';
					me.__4_m0.ggVisible=true;
				}
				else {
					me.__4_m0.style.visibility="hidden";
					me.__4_m0.ggVisible=false;
				}
			}
		}
		me.__4_m0.logicBlock_visible();
		me.__4_m0.ggUpdatePosition=function (useTransition) {
		}
		me.__4_m.appendChild(me.__4_m0);
		me.__4m.appendChild(me.__4_m);
		me.__m2.appendChild(me.__4m);
		el=me.__5m=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 5-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 15.2%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 80%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5m.ggIsActive=function() {
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
		me.__5m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5_m=document.createElement('div');
		el.ggId="\uc7a5\uc18c \uc120\ud0dd 5 \ubc30\uacbd-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5_m.ggIsActive=function() {
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
		me.__5_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_underground') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__5_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__5_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__5_m.style.transition='background-color 0s';
				if (me.__5_m.ggCurrentLogicStateBackgroundColor == 0) {
					me.__5_m.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__5_m.style.backgroundColor="rgba(34,30,31,1)";
				}
			}
		}
		me.__5_m.logicBlock_backgroundcolor();
		me.__5_m.onclick=function (e) {
			player.setVariableValue('vis_maincenter', false);
			player.setVariableValue('vis_exparkinglot', false);
			player.setVariableValue('vis_walk', false);
			player.setVariableValue('vis_garden', false);
			player.setVariableValue('vis_underground', !player.getVariableValue('vis_underground'));
			player.openNext("{node5}","$(cur)");
		}
		me.__5_m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5m0=document.createElement('div');
		els=me.__5m0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc7a5\uc18c 5-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text letter-spacing:1px;";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 86.8055%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((86.8055% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__5m0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc9c0\ud558\uc8fc\ucc28\uc7a5\uc785\uad6c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5m0.ggUpdateText();
		el.appendChild(els);
		me.__5m0.ggIsActive=function() {
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
		me.__5m0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_underground') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__5m0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__5m0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__5m0.style.transition='color 0s';
				if (me.__5m0.ggCurrentLogicStateTextColor == 0) {
					me.__5m0.style.color="rgba(34,30,31,1)";
				}
				else {
					me.__5m0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__5m0.logicBlock_textcolor();
		me.__5m0.ggUpdatePosition=function (useTransition) {
		}
		me.__5_m.appendChild(me.__5m0);
		el=me.__5_m1=document.createElement('div');
		els=me.__5_m1__img=document.createElement('img');
		els.className='ggskin ggskin__5_m1';
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
		el.ggId="\uc7a5\uc18c 5 \ud654\uc0b4\ud45c-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 14px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__5_m1.ggIsActive=function() {
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
		me.__5_m1.ggUpdatePosition=function (useTransition) {
		}
		me.__5_m.appendChild(me.__5_m1);
		el=me.__5_m0=document.createElement('div');
		els=me.__5_m0__img=document.createElement('img');
		els.className='ggskin ggskin__5_m0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAACXBIWXMAAC4jAAAuIwF4pT92AAADDUlEQVRYhbXYy49URRTH8Q+PhAC2KMsJT0dmmAmwYUXAGGLYujCuycwwA7ox/g1uBXmG8DfwD/AYUAhhmBlRFrrwEXWIhgCioP4Bujj3YqfTt29V3+6TTDpz+1T/vnXqnFN1a9XIyIgKexfv41N8U+XU1NZWPD+MzzCKDfgYvw0DYE2r1ep89g4u4c3i/0nswF38M2yAI7iIXR1+E9iGe/h7WACdM++0SWw34EiUAEcK8dEa/3I5FvHXoAAO4DK2Jo6ZEJFYxoumAKuLH3mYOe49nJcOXWlrWq3WM9wRM3sjY+yYWI5GkShz4FnxQ7kQEyJvlvC8CUAJsYTdmRBjomwX+4Ho7AN/iEiMq6+IdtslyncZfzYBaA'+
			'IxVvjfk5ET3QBKiC9F3e/MhNgpljIJogqAyIn72COyPdXGC4gFCc2qFwD8LiKxVzSfHIjRFIg6gBLiKxGJXIjtatp2CgA8wdcFxLYMiAnRLRdUbGCpAO0Q++S14J67aA5ACXG/gMiJxGThv6jjPJELUEIs+39rzoEoq+MlRD8A8FRUR26J7i78X0L0C0BUx4Io0RyIcgNbxvMmAETHXBJ7wQ5xvkix8eLvceqAXvYdPsKDzHEbsL7qvSDX9mNLhv81nMCjQQDM4hzWZ4jPKl50mgLM4ALWJfrfwAfa3rKa5MA0TmeIXxUzX2l/2G8EZnFWJFKq+DE86vyiH4BpeWs+jw+7iZO/BDMi7Knit8Sar1Q55ETgaCH+aqL/bRzHz72cUiMwhTMZ4rcwhx/rHFMApsQtyeuJ4jdFk6kVp34JpnESmzPEa8Pebr0icAynMsQ/'+
			'FzNPFu8FMCMv7F+IbP8pR5zuSzDVh/iMHqWWAzAtbsdeSxw/X4j3fYO2uu1zTtR5qvgVkSeNru/WYpXI3JPYmDjuqmivvzYRJ2b+r3hzeZE4Zl7MPPdap6uVZ8JvReM4hE014nMGeGvafij9QdTwW7q33Ouizgcy824A8D1+wcEOiFJ8ZZDi3QCIU+5DvI1XRIc7PgzxKgAiEhvRwifi9Xwo9h99YKX0bgrIPQAAAABJRU5ErkJggg==';
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
		el.ggId="\uc7a5\uc18c 5 \ud654\uc0b4\ud45c-\uac80\uc815-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5_m0.ggIsActive=function() {
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
		me.__5_m0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_underground') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__5_m0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__5_m0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__5_m0.style.transition='';
				if (me.__5_m0.ggCurrentLogicStateVisible == 0) {
					me.__5_m0.style.visibility=(Number(me.__5_m0.style.opacity)>0||!me.__5_m0.style.opacity)?'inherit':'hidden';
					me.__5_m0.ggVisible=true;
				}
				else {
					me.__5_m0.style.visibility="hidden";
					me.__5_m0.ggVisible=false;
				}
			}
		}
		me.__5_m0.logicBlock_visible();
		me.__5_m0.ggUpdatePosition=function (useTransition) {
		}
		me.__5_m.appendChild(me.__5_m0);
		me.__5m.appendChild(me.__5_m);
		me.__m2.appendChild(me.__5m);
		me.__5.appendChild(me.__m2);
		el=me._m=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m.ggIsActive=function() {
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
		me._m.ggUpdatePosition=function (useTransition) {
		}
		el=me._m1=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
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
		me._m1.ggIsActive=function() {
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
		me._m1.ggUpdatePosition=function (useTransition) {
		}
		el=me._m2=document.createElement('div');
		els=me._m2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud06c\uac8c\ubcf4\uae30-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -80px;';
		hs+='color : rgba(161,161,161,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m2.ggUpdateText=function() {
			var params = [];
			var hs = player._("+ \ud06c\uac8c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m2.ggUpdateText();
		el.appendChild(els);
		me._m2.ggIsActive=function() {
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
		me._m2.onclick=function (e) {
			player.setVariableValue('vis_mapMax', true);
			me.__4.style.transition='none';
			me.__4.style.visibility='hidden';
			me.__4.ggVisible=false;
		}
		me._m2.ggUpdatePosition=function (useTransition) {
		}
		me._m1.appendChild(me._m2);
		me._m.appendChild(me._m1);
		el=me._map_1m=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-m";
		el.ggDx=0;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : default;';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((180px + 0px) / 2) + 30px);';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1m.ggIsActive=function() {
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
		me._map_1m.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1m.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1m.ggCalculateFloorplanSize(mapDetails);
				me._map_1m.ggShowSimpleFloorplan(mapDetails);
				me._map_1m.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1m.ggRadar) me._map_1m.ggRadar.update();
		}
		me._map_1m.ggUpdatePosition=function (useTransition) {
			me._map_1m.ggUpdateConditionResize();
		}
		me._m.appendChild(me._map_1m);
		el=me.__m0=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5 \ud0dd\uc2a4\ud2b8-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 34px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m0.ggIsActive=function() {
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
		me.__m0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m1=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5 \ud0dd\uc2a4\ud2b8 \ubc30\uacbd-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
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
		me.__m1.ggIsActive=function() {
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
		me.__m1.ggUpdatePosition=function (useTransition) {
		}
		me.__m0.appendChild(me.__m1);
		el=me._m0=document.createElement('div');
		els=me._m0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\uae00\uc790-m";
		el.ggDx=0;
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
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='font-family:\"Oswald\", sans-serif;';
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
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._m0.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m0.ggUpdateText();
		el.appendChild(els);
		me._m0.ggIsActive=function() {
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
		me._m0.ggUpdatePosition=function (useTransition) {
		}
		me.__m0.appendChild(me._m0);
		me._m.appendChild(me.__m0);
		me.__5.appendChild(me._m);
		me.__4.appendChild(me.__5);
		me.divSkin.appendChild(me.__4);
		el=me.__=document.createElement('div');
		el.ggId="\ub9f5 \ud06c\uac8c \ubcf4\uae30";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 40%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__.ggCurrentLogicStateSize = newLogicStateSize;
				me.__.style.transition='width 0s, height 0s';
				if (me.__.ggCurrentLogicStateSize == 0) {
					me.__.style.width='83%';
					me.__.style.height='58%';
					me.__.style.left = 'calc(50% - (83% / 2))';
					me.__.style.top = 'calc(50% - (58% / 2))';
					skin.updateSize(me.__);
				}
				else {
					me.__.style.width='40%';
					me.__.style.height='50%';
					me.__.style.left = 'calc(50% - (40% / 2))';
					me.__.style.top = 'calc(50% - (50% / 2))';
					skin.updateSize(me.__);
				}
			}
		}
		me.__.logicBlock_size();
		me.__.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_mapMax') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__.style.transition='width 0s, height 0s';
				if (me.__.ggCurrentLogicStateVisible == 0) {
					me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
					me.__.ggVisible=true;
				}
				else {
					me.__.style.visibility="hidden";
					me.__.ggVisible=false;
				}
			}
		}
		me.__.logicBlock_visible();
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		el.ggId="\ub9f5 \ud06c\uac8c \ubcf4\uae30 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
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
		me.__0.onclick=function (e) {
			player.setVariableValue('vis_mapMax', false);
			if (
				(
					((player.getViewerSize().width > 460))
				)
			) {
				me.__9.style.transition='none';
				me.__9.style.visibility=(Number(me.__9.style.opacity)>0||!me.__9.style.opacity)?'inherit':'hidden';
				me.__9.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 460))
				)
			) {
				me.__4.style.transition='none';
				me.__4.style.visibility=(Number(me.__4.style.opacity)>0||!me.__4.style.opacity)?'inherit':'hidden';
				me.__4.ggVisible=true;
			}
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		el.ggId="\ub9f5 \ud06c\uac8c \ud0c0\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 44px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -22px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
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
			return player.getCurrentNode();
		}
		me.__1.logicBlock_position = function() {
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
			if (me.__1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__1.ggCurrentLogicStatePosition == 0) {
					me.__1.style.left = 'calc(50% - (200px / 2))';
					me.__1.style.top='-19px';
				}
				else {
					me.__1.style.left='calc(50% - ((200px + 0px) / 2) + 0px)';
					me.__1.style.top='-22px';
				}
			}
		}
		me.__1.logicBlock_position();
		me.__1.logicBlock_size = function() {
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
			if (me.__1.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__1.ggCurrentLogicStateSize == 0) {
					me.__1.style.width='140px';
					me.__1.style.height='38px';
					me.__1.style.left = 'calc(50% - (140px / 2))';
					skin.updateSize(me.__1);
				}
				else {
					me.__1.style.width='200px';
					me.__1.style.height='44px';
					me.__1.style.left = 'calc(50% - (200px / 2))';
					skin.updateSize(me.__1);
				}
			}
		}
		me.__1.logicBlock_size();
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		el.ggId="\ub9f5 \ud06c\uac8c \ud0c0\uc77c \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
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
		me.__2.ggIsActive=function() {
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
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3=document.createElement('div');
		els=me.__3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud655\ub300 \ub9f5 \ud0c0\uc774\ud2c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
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
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3.ggUpdateText();
		el.appendChild(els);
		me.__3.ggIsActive=function() {
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
		me.__3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__3.style.transition='';
				if (me.__3.ggCurrentLogicStateVisible == 0) {
					me.__3.style.visibility=(Number(me.__3.style.opacity)>0||!me.__3.style.opacity)?'inherit':'hidden';
					me.__3.ggVisible=true;
				}
				else {
					me.__3.style.visibility="hidden";
					me.__3.ggVisible=false;
				}
			}
		}
		me.__3.logicBlock_visible();
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me.__3);
		el=me.__m=document.createElement('div');
		els=me.__m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud655\ub300 \ub9f5 \ud0c0\uc774\ud2c0-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
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
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__m.ggUpdateText=function() {
			var params = [];
			var hs = player._("MINI MAP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__m.ggUpdateText();
		el.appendChild(els);
		me.__m.ggIsActive=function() {
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
		me.__m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m.style.transition='';
				if (me.__m.ggCurrentLogicStateVisible == 0) {
					me.__m.style.visibility=(Number(me.__m.style.opacity)>0||!me.__m.style.opacity)?'inherit':'hidden';
					me.__m.ggVisible=true;
				}
				else {
					me.__m.style.visibility="hidden";
					me.__m.ggVisible=false;
				}
			}
		}
		me.__m.logicBlock_visible();
		me.__m.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me.__m);
		me.__1.appendChild(me.__2);
		me.__0.appendChild(me.__1);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
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
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 28px;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
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
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__0.appendChild(me._image_3);
		me.__.appendChild(me.__0);
		el=me._map_2=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_2.ggIsActive=function() {
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
		me._map_2.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
		}
		me._map_2.ggUpdatePosition=function (useTransition) {
			me._map_2.ggUpdateConditionResize();
		}
		me.__.appendChild(me._map_2);
		me.divSkin.appendChild(me.__);
		me._header.logicBlock_position();
		me._header.logicBlock_scaling();
		me._header.logicBlock_alpha();
		me._image_2.logicBlock_visible();
		me.__9.logicBlock_visible();
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
				radar.radarElement.setAttributeNS(null,'width',100);
				radar.radarElement.setAttributeNS(null,'height',100);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 100 100');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 50 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 50 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 50 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 50 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 50;
				arcY1 += 50;
				arcX2 += 50;
				arcY2 += 50;
				var radarPathString = 'M50,50 L' + arcX1 + ',' + arcY1 + ' A 50 50 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#d99528');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#d99528');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 50;
				var radarYPos = activeMarker.radarYPos - 50;
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
					me._map_1.ggHMarkerAnchorOffset = 20;
					me._map_1.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
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
		me.__1_0.logicBlock_backgroundcolor();
		me.__19.logicBlock_textcolor();
		me.__1_1.logicBlock_visible();
		me.__2_0.logicBlock_backgroundcolor();
		me.__22.logicBlock_textcolor();
		me.__2_1.logicBlock_visible();
		me.__3_0.logicBlock_backgroundcolor();
		me.__32.logicBlock_textcolor();
		me.__3_1.logicBlock_visible();
		me.__4_0.logicBlock_backgroundcolor();
		me.__42.logicBlock_textcolor();
		me.__4_1.logicBlock_visible();
		me.__5_.logicBlock_backgroundcolor();
		me.__51.logicBlock_textcolor();
		me.__5_0.logicBlock_visible();
		me.__40.logicBlock_position();
		me.__12.logicBlock_visible();
		me.__11.logicBlock_visible();
		me.__4.logicBlock_position();
		me.__4.logicBlock_visible();
		me.__7.logicBlock_angle();
		me.__4m1.logicBlock_position();
		me._m4.logicBlock_visible();
		me._m3.logicBlock_visible();
		me.__1_m.logicBlock_backgroundcolor();
		me.__1m0.logicBlock_textcolor();
		me.__1_m0.logicBlock_visible();
		me.__2_m.logicBlock_backgroundcolor();
		me.__2m0.logicBlock_textcolor();
		me.__2_m0.logicBlock_visible();
		me.__3_m.logicBlock_backgroundcolor();
		me.__3m0.logicBlock_textcolor();
		me.__3_m0.logicBlock_visible();
		me.__4_m.logicBlock_backgroundcolor();
		me.__4m0.logicBlock_textcolor();
		me.__4_m0.logicBlock_visible();
		me.__5_m.logicBlock_backgroundcolor();
		me.__5m0.logicBlock_textcolor();
		me.__5_m0.logicBlock_visible();
		me._map_1m.ggMarkerInstances=[];
		me._map_1m.ggLastNodeId=null;
		me._map_1m.ggSimpleFloorplanMarkerArray=[];
		me._map_1m.ggFloorplanWidth=0;
		me._map_1m.ggFloorplanHeight=0;
		me._map_1m__mapdiv=document.createElement('div');
		me._map_1m__mapdiv.className='ggskin ggskin_map';
		me._map_1m.appendChild(me._map_1m__mapdiv);
		me._map_1m__img=document.createElement('img');
		me._map_1m__img.className='ggskin ggskin_map';
		me._map_1m__mapdiv.appendChild(me._map_1m__img);
		me._map_1m.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1m.ggRadar.update=function() {
			var radar=me._map_1m.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1m.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1m.ggFilteredIds.length > 0 && me._map_1m.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1m.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1m.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1m__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',100);
				radar.radarElement.setAttributeNS(null,'height',100);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 100 100');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 50 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 50 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 50 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 50 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 50;
				arcY1 += 50;
				arcX2 += 50;
				arcY2 += 50;
				var radarPathString = 'M50,50 L' + arcX1 + ',' + arcY1 + ' A 50 50 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#d99528');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#d99528');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1m__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 50;
				var radarYPos = activeMarker.radarYPos - 50;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1m.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1m__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1m.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1m.clientWidth;
			var mapHeight = me._map_1m.clientHeight;
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
			var imageFilename = basePath + 'images/maptiles/' + me._map_1m.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1m__img.setAttribute('src', imageFilename);
		me._map_1m__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1m.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1m.ggFloorplanHeight / 2 + 'px;width:' + me._map_1m.ggFloorplanWidth + 'px;height:' + me._map_1m.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1m__img.setAttribute('style','width:' + me._map_1m.ggFloorplanWidth + 'px;height:' + me._map_1m.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1m.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1m.clientWidth / me._map_1m.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1m.ggFloorplanHeight = me._map_1m.clientHeight;
				me._map_1m.ggFloorplanWidth = me._map_1m.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1m.ggFloorplanWidth = me._map_1m.clientWidth;
				me._map_1m.ggFloorplanHeight = me._map_1m.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1m.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1m.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1m.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1m.ggPermeableMap = true;
			} else {
				me._map_1m.ggPermeableMap = false;
			}
			me._map_1m.ggCalculateFloorplanSize(mapDetails);
			me._map_1m.ggShowSimpleFloorplan(mapDetails);
			me._map_1m.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1m.ggMapNotLoaded = false;
		}
		me._map_1m.ggClearMap=function() {
			me._map_1m.ggClearMapMarkers();
			me._map_1m.ggMapNotLoaded = true;
		}
		me._map_1m.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1m.ggMapId = mapId;
			if (!me._map_1m.ggMapNotLoaded) {
				me._map_1m.ggClearMap();
				me._map_1m.ggInitMap();
				me._map_1m.ggInitMapMarkers();
			}
		}
		me._map_1m.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1m.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1m.ggMapId);
					var xPos = (me._map_1m.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1m.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1m.ggHMarkerAnchorOffset;
					yPos -= me._map_1m.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1m.style['z-index'] + 2;
				}
			}
		}
		me._map_1m.ggInitMapMarkers=function() {
			me._map_1m.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1m.ggFilteredIds = [];
			if (me._map_1m.ggFilter != '') {
				var filter = me._map_1m.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1m.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1m.ggFilteredIds.length > 0) ids = me._map_1m.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1m.ggMapId);
				if (coords.length>=2) {
					me._map_1m.ggHMarkerAnchorOffset = 20;
					me._map_1m.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me._map_1m.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1m__mapdiv.appendChild(marker);
				}
			}
			me._map_1m.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1m);
		}
		me._map_1m.ggClearMapMarkers=function() {
			for (id in me._map_1m.ggSimpleFloorplanMarkerArray) {
				if (me._map_1m.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1m__mapdiv.removeChild(me._map_1m.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1m.ggMarkerInstances=[];
			me._map_1m.ggSimpleFloorplanMarkerArray=[];
		}
		me.__.logicBlock_size();
		me.__.logicBlock_visible();
		me.__1.logicBlock_position();
		me.__1.logicBlock_size();
		me.__3.logicBlock_visible();
		me.__m.logicBlock_visible();
		me._map_2.ggMarkerInstances=[];
		me._map_2.ggLastNodeId=null;
		me._map_2.ggSimpleFloorplanMarkerArray=[];
		me._map_2.ggFloorplanWidth=0;
		me._map_2.ggFloorplanHeight=0;
		me._map_2__mapdiv=document.createElement('div');
		me._map_2__mapdiv.className='ggskin ggskin_map';
		me._map_2.appendChild(me._map_2__mapdiv);
		me._map_2__img=document.createElement('img');
		me._map_2__img.className='ggskin ggskin_map';
		me._map_2__mapdiv.appendChild(me._map_2__img);
		me._map_2.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_2.ggRadar.update=function() {
			var radar=me._map_2.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_2.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_2.ggFilteredIds.length > 0 && me._map_2.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_2.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_2__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',100);
				radar.radarElement.setAttributeNS(null,'height',100);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 100 100');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 50 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 50 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 50 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 50 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 50;
				arcY1 += 50;
				arcX2 += 50;
				arcY2 += 50;
				var radarPathString = 'M50,50 L' + arcX1 + ',' + arcY1 + ' A 50 50 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#d99528');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#d99528');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_2__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 50;
				var radarYPos = activeMarker.radarYPos - 50;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_2.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_2__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_2.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_2.clientWidth;
			var mapHeight = me._map_2.clientHeight;
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
			var imageFilename = basePath + 'images/maptiles/' + me._map_2.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_2__img.setAttribute('src', imageFilename);
		me._map_2__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_2.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_2.ggFloorplanHeight / 2 + 'px;width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_2__img.setAttribute('style','width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_2.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_2.clientWidth / me._map_2.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_2.ggFloorplanHeight = me._map_2.clientHeight;
				me._map_2.ggFloorplanWidth = me._map_2.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_2.ggFloorplanWidth = me._map_2.clientWidth;
				me._map_2.ggFloorplanHeight = me._map_2.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_2.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_2.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_2.ggPermeableMap = true;
			} else {
				me._map_2.ggPermeableMap = false;
			}
			me._map_2.ggCalculateFloorplanSize(mapDetails);
			me._map_2.ggShowSimpleFloorplan(mapDetails);
			me._map_2.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_2.ggMapNotLoaded = false;
		}
		me._map_2.ggClearMap=function() {
			me._map_2.ggClearMapMarkers();
			me._map_2.ggMapNotLoaded = true;
		}
		me._map_2.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_2.ggMapId = mapId;
			if (!me._map_2.ggMapNotLoaded) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap();
				me._map_2.ggInitMapMarkers();
			}
		}
		me._map_2.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_2.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
					var xPos = (me._map_2.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_2.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_2.ggHMarkerAnchorOffset;
					yPos -= me._map_2.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_2.style['z-index'] + 2;
				}
			}
		}
		me._map_2.ggInitMapMarkers=function() {
			me._map_2.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_2.ggFilteredIds = [];
			if (me._map_2.ggFilter != '') {
				var filter = me._map_2.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_2.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_2.ggFilteredIds.length > 0) ids = me._map_2.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
				if (coords.length>=2) {
					me._map_2.ggHMarkerAnchorOffset = 20;
					me._map_2.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me._map_2.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_2__mapdiv.appendChild(marker);
				}
			}
			me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_2);
		}
		me._map_2.ggClearMapMarkers=function() {
			for (id in me._map_2.ggSimpleFloorplanMarkerArray) {
				if (me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_2__mapdiv.removeChild(me._map_2.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_2.ggMarkerInstances=[];
			me._map_2.ggSimpleFloorplanMarkerArray=[];
		}
		player.addListener('changenode', function(event) {
			me._header.logicBlock_alpha();
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
			me.__1_0.logicBlock_backgroundcolor();
			me.__19.logicBlock_textcolor();
			me.__1_1.logicBlock_visible();
			me.__2_0.logicBlock_backgroundcolor();
			me.__22.logicBlock_textcolor();
			me.__2_1.logicBlock_visible();
			me.__3_0.logicBlock_backgroundcolor();
			me.__32.logicBlock_textcolor();
			me.__3_1.logicBlock_visible();
			me.__4_0.logicBlock_backgroundcolor();
			me.__42.logicBlock_textcolor();
			me.__4_1.logicBlock_visible();
			me.__5_.logicBlock_backgroundcolor();
			me.__51.logicBlock_textcolor();
			me.__5_0.logicBlock_visible();
			me.__40.logicBlock_position();
			me.__12.logicBlock_visible();
			me.__11.logicBlock_visible();
			me.__4.logicBlock_position();
			me.__7.logicBlock_angle();
			me.__4m1.logicBlock_position();
			me._m4.logicBlock_visible();
			me._m3.logicBlock_visible();
			me.__1_m.logicBlock_backgroundcolor();
			me.__1m0.logicBlock_textcolor();
			me.__1_m0.logicBlock_visible();
			me.__2_m.logicBlock_backgroundcolor();
			me.__2m0.logicBlock_textcolor();
			me.__2_m0.logicBlock_visible();
			me.__3_m.logicBlock_backgroundcolor();
			me.__3m0.logicBlock_textcolor();
			me.__3_m0.logicBlock_visible();
			me.__4_m.logicBlock_backgroundcolor();
			me.__4m0.logicBlock_textcolor();
			me.__4_m0.logicBlock_visible();
			me.__5_m.logicBlock_backgroundcolor();
			me.__5m0.logicBlock_textcolor();
			me.__5_m0.logicBlock_visible();
			var mapDetails = player.getMapDetails(me._map_1m.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1m.ggCalculateFloorplanSize(mapDetails);
				me._map_1m.ggShowSimpleFloorplan(mapDetails);
				me._map_1m.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1m.ggRadar) me._map_1m.ggRadar.update();
			if (me._map_1m.ggLastNodeId) {
				var lastActiveMarker = me._map_1m.ggSimpleFloorplanMarkerArray[me._map_1m.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1m.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1m.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1m.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1m.ggChangeMap(mapId);
					}
				}
			}
			me._map_1m.ggLastNodeId = id;
			me._map_1m.ggRadar.update();
			me.__.logicBlock_visible();
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
			if (me._map_2.ggLastNodeId) {
				var lastActiveMarker = me._map_2.ggSimpleFloorplanMarkerArray[me._map_2.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_2.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_2.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_2.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_2.ggChangeMap(mapId);
					}
				}
			}
			me._map_2.ggLastNodeId = id;
			me._map_2.ggRadar.update();
		});
		player.addListener('configloaded', function(event) {
			me._header.logicBlock_alpha();
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
			me.__1_0.logicBlock_backgroundcolor();
			me.__19.logicBlock_textcolor();
			me.__1_1.logicBlock_visible();
			me.__2_0.logicBlock_backgroundcolor();
			me.__22.logicBlock_textcolor();
			me.__2_1.logicBlock_visible();
			me.__3_0.logicBlock_backgroundcolor();
			me.__32.logicBlock_textcolor();
			me.__3_1.logicBlock_visible();
			me.__4_0.logicBlock_backgroundcolor();
			me.__42.logicBlock_textcolor();
			me.__4_1.logicBlock_visible();
			me.__5_.logicBlock_backgroundcolor();
			me.__51.logicBlock_textcolor();
			me.__5_0.logicBlock_visible();
			me.__40.logicBlock_position();
			me.__12.logicBlock_visible();
			me.__11.logicBlock_visible();
			me.__4.logicBlock_position();
			me.__7.logicBlock_angle();
			me.__4m1.logicBlock_position();
			me._m4.logicBlock_visible();
			me._m3.logicBlock_visible();
			me.__1_m.logicBlock_backgroundcolor();
			me.__1m0.logicBlock_textcolor();
			me.__1_m0.logicBlock_visible();
			me.__2_m.logicBlock_backgroundcolor();
			me.__2m0.logicBlock_textcolor();
			me.__2_m0.logicBlock_visible();
			me.__3_m.logicBlock_backgroundcolor();
			me.__3m0.logicBlock_textcolor();
			me.__3_m0.logicBlock_visible();
			me.__4_m.logicBlock_backgroundcolor();
			me.__4m0.logicBlock_textcolor();
			me.__4_m0.logicBlock_visible();
			me.__5_m.logicBlock_backgroundcolor();
			me.__5m0.logicBlock_textcolor();
			me.__5_m0.logicBlock_visible();
			me._map_1m.ggClearMap();
			me._map_1m.ggInitMap(false);
			me._map_1m.ggInitMapMarkers(true);
			me.__.logicBlock_visible();
			me._map_2.ggClearMap();
			me._map_2.ggInitMap(false);
			me._map_2.ggInitMapMarkers(true);
		});
		player.addListener('positionchanged', function(event) {
			me._map_1.ggRadar.update();
			me._map_1m.ggRadar.update();
			me._map_2.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			me._header.logicBlock_position();
			me._header.logicBlock_scaling();
			me._image_2.logicBlock_visible();
			me.__9.logicBlock_visible();
			me.__4.logicBlock_visible();
			me.__.logicBlock_size();
			me.__1.logicBlock_position();
			me.__1.logicBlock_size();
			me.__3.logicBlock_visible();
			me.__m.logicBlock_visible();
		});
		player.addListener('varchanged_vis_exparkinglot', function(event) {
			me.__2_0.logicBlock_backgroundcolor();
			me.__22.logicBlock_textcolor();
			me.__2_1.logicBlock_visible();
			me.__2_m.logicBlock_backgroundcolor();
			me.__2m0.logicBlock_textcolor();
			me.__2_m0.logicBlock_visible();
		});
		player.addListener('varchanged_vis_garden', function(event) {
			me.__4_0.logicBlock_backgroundcolor();
			me.__42.logicBlock_textcolor();
			me.__4_1.logicBlock_visible();
			me.__4_m.logicBlock_backgroundcolor();
			me.__4m0.logicBlock_textcolor();
			me.__4_m0.logicBlock_visible();
		});
		player.addListener('varchanged_vis_header', function(event) {
			me._header.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_maincenter', function(event) {
			me.__1_0.logicBlock_backgroundcolor();
			me.__19.logicBlock_textcolor();
			me.__1_1.logicBlock_visible();
			me.__1_m.logicBlock_backgroundcolor();
			me.__1m0.logicBlock_textcolor();
			me.__1_m0.logicBlock_visible();
		});
		player.addListener('varchanged_vis_mapMax', function(event) {
			me.__.logicBlock_visible();
		});
		player.addListener('varchanged_vis_mobileOpen', function(event) {
			me.__4.logicBlock_position();
			me.__7.logicBlock_angle();
		});
		player.addListener('varchanged_vis_skonremove', function(event) {
			me.__40.logicBlock_position();
			me.__12.logicBlock_visible();
			me.__11.logicBlock_visible();
			me.__4m1.logicBlock_position();
			me._m4.logicBlock_visible();
			me._m3.logicBlock_visible();
		});
		player.addListener('varchanged_vis_underground', function(event) {
			me.__5_.logicBlock_backgroundcolor();
			me.__51.logicBlock_textcolor();
			me.__5_0.logicBlock_visible();
			me.__5_m.logicBlock_backgroundcolor();
			me.__5m0.logicBlock_textcolor();
			me.__5_m0.logicBlock_visible();
		});
		player.addListener('varchanged_vis_walk', function(event) {
			me.__3_0.logicBlock_backgroundcolor();
			me.__32.logicBlock_textcolor();
			me.__3_1.logicBlock_visible();
			me.__3_m.logicBlock_backgroundcolor();
			me.__3m0.logicBlock_textcolor();
			me.__3_m0.logicBlock_visible();
		});
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
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