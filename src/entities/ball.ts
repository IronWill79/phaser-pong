import { PhysicsEllipse } from 'types/GameObjects';

export const ball = (scene: Phaser.Scene): PhysicsEllipse => {
  const { width, height } = scene.sys.game.canvas;

  const ball = scene.add.ellipse(
    width / 2,
    height / 2,
    width / 16,
    width / 16,
    0xff0000
  ) as PhysicsEllipse;
  scene.physics.add.existing(ball);
  ball.body.setCollideWorldBounds(true, undefined, undefined, true);
  ball.body.setVelocity(100, 100);
  ball.body.setBounce(1, 1);
  return ball;
};
