// Events! Fancy function parameters!
// Parameters are given as:
//// addEvent(
////   function(name, of, arguments) {
////     /* stuff */
////   },
////   timeout,
////   arg1, arg2, arg3
//// );
// Arguments are saved as an array, then passed in using the apply() function in handleEvents
// Duplicates functionality of setTimeout, but within the game timer
function addEvent(func, count) {
  if(!(func instanceof Function)) return false;
  count = count || 1;
  
  // Get the first two arguments out of there, as they're stored in func & count
  var args = [].splice.call(arguments, 0);
  args.splice(0, 2);
  
  // Create the event, insert it into events, then return it.
  contents = {
    func: func,
    count: gamecount + count,
    args: args,
    timeout: count,
    repeat: true
  };
  insertSortedEvent(events, contents, contents.count);
  return contents;
}

function addEventInterval(func, count, reptimes) {
  // Usage: addEventInterval(function, timer, repetition times, ...arguments...);
  // For example: game.addEventInterval(game.scrollTime, 1, Infinity)
  if(!(func instanceof Function)) return false;
  count = count || 1;
  
  args = Array.prototype.splice.call(arguments, 0);
  // Reptimes is an extra parameter, so chop the first 3 instead of 2
  args.splice(0, 3);
  
  contents = {
    func: func,
    count: gamecount + count,
    args: args,
    timeout: count,
    repeat: reptimes
  };
  
  contents.func.event = contents; // whoa
  
  insertSortedEvent(events, contents, contents.count);
  return contents;
}

function addEventIntervalSynched(func, count, reptimes, me, settings) {
  var calctime = count * settings.length,
      entry = ceil(gamecount / calctime) * calctime,
      scope = this,
      addfunc = function(scope, arguments, me) {
        me.startcount = gamecount;
        return addEventInterval.apply(scope, arguments);
      };
  
  // There is no difference in times, you're good to go
  if(entry == gamecount) {
    return addfunc(scope, arguments, me);
  }
  // There's a difference; delay by that much
  else {
    var dt = entry - gamecount;
    addEvent(addfunc, dt, scope, arguments, me);
  }
}

// Checks the first (soonest) event's execution time (count) against current gamecount
// While the most recent event is at exec time, it's run, then deleted
function handleEvents() {
  ++gamecount;
  var i, len, events_current = events[gamecount], event, repfunc;
  
  // If there are no events on this timer, return
  if(!events_current) return;
  
  // For each event scheduled for now:
  for(i = 0, len = events_current.length; i < len; ++i) {
    event = events_current[i];
    
    // Call the function - apply is used to pass in the arguments dynamically
    // The event is done if result is true: (by default, it's null - nothing returned)
    if(event.repeat && !event.func.apply(undefined, event.args)) {
      
      // If repeat is a function, then running it determines whether to repeat
      if(event.repeat instanceof Function) {
        repfunc = event.repeat.bind(event);
        if(repfunc()) {
          event.count += event.timeout;
          insertSortedEvent(events, event, event.count);
        }
      }
      
      // Otherwise it's a number - decrement it and repeat if not 0.
      else {
        if(--event.repeat != 0) {
          event.count += event.timeout;
          insertSortedEvent(events, event, event.count);
        }
      }
    }
  }
  
  delete events[gamecount];
}

function insertSortedEvent(events, contents, count) {
  if(!events[count]) events[count] = [];
  events[count].push(contents);
}


/*
 * Sprite Cycles
 */
function addSpriteCycle(me, settings, name, timing) {
  if(!me.cycles) me.cycles = {}
  var cycle = me.cycles[name || 0] = setSpriteCycle(me, settings, timing);
  cycleClass(me, settings);
  return cycle;
}
function addSpriteCycleSynched(me, settings, name, timing) {
  if(!me.cycles) me.cycles = {}
  settings = settings || ["one", "two"];
  var cycle = me.cycles[name || 0] = setSpriteCycle(me, settings, timing, true);
  cycleClass(me, settings);
  return cycle;
}

// Repeated usage: setSpriteCycle(me, ["one", "two"]);
// To cancle, make settings false
function setSpriteCycle(me, settings, timing, synched) {
  settings.loc = -1;
  settings.oldclass = "761deadsoldiers"; // never reached - too inconspicuous
  me.onadding = function() { 
    if(synched) addEventIntervalSynched(cycleClass, timing || 9, Infinity, me, settings);
    else addEventInterval(cycleClass, timing || 9, Infinity, me, settings);
  }
  if(me.placed) me.onadding();
  return settings;
}

function cycleClass(me, settings) {
  if(!me || !me.element || !settings || !settings.length) return true;
  
  if(settings.oldclass != "") removeClass(me, settings.oldclass);
  settings.loc = ++settings.loc % settings.length;
  var current = settings[settings.loc];
  if(current) {
    var name = current instanceof Function ? current(me, settings) : current;
    me.element.className += " " + name;
    settings.oldclass = name;
  }
  // If it's false, this will stop the loop
  else {
    return current === false;
  }
}

function addSpriteCycleManual(me, settings, name, timing) {
  if(!me.cycles) me.cycles = {}
  me.cycles[name || 0] = setSpriteCycleManual(me, settings, timing);
}
function setSpriteCycleManual(me, settings, timing) {
  settings.loc = -1;
  settings.oldclass = "761deadsoldiers";
  timing = (timing || 9) * timer;
  var interval = setInterval(function() {
    if(cycleClass(me, settings))
      clearInterval(interval);
  }, timing);
  return settings;
}

/*
   "But you were dead a thousand times. Hopeless encounters successfully won.
    A man long dead, grafted to machines your builders did not understand. You follow
    the path, fitting into an infinite pattern.
    Yours to manipulate, to destroy and rebuild.
    I know what you are.
    You are Destiny."
*/
// Call this in generator
function scrollTime(dx) {
  dx = dx || 21;
  mario.nofall = mario.nocollide = nokeys = true;
  addEventInterval(scrollMario, 1, Infinity, dx);
  
  mario.oldtop = mario.top;
  mario.siny = Math.PI * -1;
  addEventInterval(function() {
    setTop(mario, mario.oldtop - Math.sin(mario.siny -= .125) * unitsizet8);
  }, 1, Infinity);
  addEventInterval(function() {
    shiftVert(mario, -1.4);
    mario.oldtop -= 1.4;
  }, 1, 49);
  
  setTimeout(function() {
    body.style.transition = "background 14s"
    body.style.background = "black";
    var backbool = true;
    setInterval(function() {
      if(backbool) {
        body.style.background = "black";
        body.className = "Night";
      } else {
        body.style.background = "#5c94fc";
        body.className = "Overworld Night";
      }
      backbool = !backbool;
    }, 14000);
  }, 7000);
  
  addEventInterval(function() {
    if(map.has_lakitu) killFlip(map.has_lakitu);
  }, 70);
}