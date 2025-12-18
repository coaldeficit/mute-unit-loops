Events.on(ClientLoadEvent, e => {
  for (let i=0;i<Vars.content.units().size;i++) {
    let help = Vars.content.units().get(i)
    if (help instanceof MissileUnitType) continue // not fool-proof but the best i can do in just a few minutes
    help.loopSound = Sounds.none
    help.moveSound = Sounds.none
  }
})