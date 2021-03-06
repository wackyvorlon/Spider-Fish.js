/* human weapon that shoots 3 PeaBullets 
 *
 * trigger button is the Z key
 *
 * its update method is called by the ship when this
 * weapon is active
 */
function TriShooter(game,body) {
  HumanWeapon.call(this,game,body,
    CONST.TRI_SHOOTER_FIRING_SPEED,
    CONST.TRI_SHOOTER_NAME,
    CONST.TRI_SHOOTER_ID,
    CONST.TRI_SHOOTER_IMAGE
    );
}
obj.extend(TriShooter,HumanWeapon);

TriShooter.prototype.update = function() {
  TriShooter.zuper.update.call(this);
}

TriShooter.prototype.draw = function() {
  ctx.drawImage(this.sprite,this.body.x-this.sprite.width/2,this.body.y-this.sprite.height);
  DoubleBarrel.zuper.draw.call(this);
}

TriShooter.prototype.fireBullet = function(angle) {
  if (this.ammo > 0) {
    this.ammo -= 1;
    this.game.addEntity(new PeaBullet(this.game,this.body.x,this.body.y,angle));
  }
}

TriShooter.prototype.fire = function() {
  this.fireBullet(Math.PI/2*3); // 90
  this.fireBullet(Math.PI/3*4); // 120
  this.fireBullet(Math.PI/3*5); // 60
  TriShooter.zuper.fire.call(this);
}


