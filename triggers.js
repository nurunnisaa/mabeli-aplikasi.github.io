function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6rKtIPWIjFS":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6XtolkXWN9q');
const duration = 500;
const easing = 'ease-out';
const id = '5sPZACGxxu2';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
