/* Simple human weapon that shoots PeaBullets straight up
 *
 * trigger button is the Z key
 *
 * its update method is called by the ship when this
 * weapon is active
 */
function PeaShooter(game,body) {
  HumanWeapon.call(this,game,body,
    CONST.PEA_SHOOTER_FIRING_SPEED,
    CONST.PEA_SHOOTER_NAME,
    CONST.PEA_SHOOTER_ID,
    CONST.PEA_SHOOTER_IMAGE
    );
  this.ammo = -1;
}
obj.extend(PeaShooter,HumanWeapon);

PeaShooter.prototype.update = function() {
  PeaShooter.zuper.update.call(this);
}

PeaShooter.prototype.draw = function() {
  ctx.drawImage(this.sprite,this.body.x-this.sprite.width/2,this.body.y-this.sprite.height);
  PeaShooter.zuper.draw.call(this);
}

PeaShooter.prototype.fireBullet = function() {
  this.game.addEntity(new PeaBullet(this.game,this.body.x,this.body.y,Math.PI/2*3));
}

PeaShooter.prototype.fire = function() {
  this.fireBullet();
  PeaShooter.zuper.fire.call(this);
}


