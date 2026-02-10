function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KgvHF36WXA":
        Script1();
        break;
      case "5bhQKjmxLjE":
        Script2();
        break;
      case "6QGzdrUnFt4":
        Script3();
        break;
      case "5ldiRrZ0NU7":
        Script4();
        break;
      case "6bn4rJq8P82":
        Script5();
        break;
      case "6TAEGRNHiSJ":
        Script6();
        break;
      case "63MZBiN6ehK":
        Script7();
        break;
      case "619V6wcUuow":
        Script8();
        break;
      case "5gpS4Avofg0":
        Script9();
        break;
      case "6STqrlEPG7B":
        Script10();
        break;
      case "5mKaUx7ugPN":
        Script11();
        break;
      case "5V6q9mpl5vE":
        Script12();
        break;
      case "5ion9fLAtEh":
        Script13();
        break;
      case "6psiHcgiiOs":
        Script14();
        break;
      case "6g966zraiWs":
        Script15();
        break;
      case "5xKDoMoGCuZ":
        Script16();
        break;
      case "69mURMWIy7E":
        Script17();
        break;
      case "6ooajpXPCUd":
        Script18();
        break;
      case "6ph9tXcYxdb":
        Script19();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6QMy36NCUkV');
const duration = 750;
const easing = 'ease-out';
const id = '6ATQ7PofS6a';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6DzWuTX2RqP');
const duration = 750;
const easing = 'ease-out';
const id = '6MGnqYQRFar';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5n6NkT2kFgD');
const duration = 750;
const easing = 'ease-out';
const id = '6FSTVC8k8mG';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6d63SFyNbPh');
const duration = 750;
const easing = 'ease-out';
const id = '6ks0z8wZ1AR';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5bffcfa12SL');
const duration = 750;
const easing = 'ease-out';
const id = '6CnDjIzLod3';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5Wz3qCUzYh1');
const duration = 750;
const easing = 'ease-out';
const id = '6fg8g9APxIl';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5hO1bDDF6rv');
const duration = 750;
const easing = 'ease-out';
const id = '6ks0z8wZ1AR';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6pOrMnhtQwU');
const duration = 750;
const easing = 'ease-out';
const id = '6gn5MGYBc1D';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6pOrMnhtQwU');
const duration = 750;
const easing = 'ease-out';
const id = '6gn5MGYBc1D_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('699fmL9iu5w');
const duration = 750;
const easing = 'ease-out';
const id = '5kBXwUOTj3P';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('699fmL9iu5w');
const duration = 750;
const easing = 'ease-out';
const id = '5kBXwUOTj3P_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('5YXDk4Rx2NW');
const duration = 750;
const easing = 'ease-out';
const id = '6fg8g9APxIl';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('5yWP6AIzHYo');
const duration = 750;
const easing = 'ease-out';
const id = '6ks0z8wZ1AR';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('68K3aECgtn7');
const duration = 750;
const easing = 'ease-out';
const id = '6CnDjIzLod3';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('6cos9vg0ApC');
const duration = 750;
const easing = 'ease-out';
const id = '6XN0GUDFP6d';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('5Yco9I4Z4Fj');
const duration = 750;
const easing = 'ease-out';
const id = '6gyPSklxrnJ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('5lfjEx5puJg');
const duration = 750;
const easing = 'ease-out';
const id = '6AkHNLUCIZN';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('6OfnQWlcZqE');
const duration = 750;
const easing = 'ease-out';
const id = '6SwtZC5cmBN';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('5j69gv1z9ka');
const duration = 750;
const easing = 'ease-out';
const id = '5iMJzdXfZ0L';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
