import { ball } from '@/entities';
import { PhysicsEllipse } from 'types/GameObjects';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  private ball: PhysicsEllipse;
  private gameObjects: Phaser.GameObjects.GameObject[] = [];

  constructor() {
    super(sceneConfig);
  }

  public init() {}

  public preload() {}

  public create() {
    this.physics.systems.start(Phaser.Physics.Arcade);

    this.ball = ball(this);
    this.physics.world.on(
      'worldbounds',
      function (
        body: Phaser.Physics.Arcade.Body,
        up: boolean,
        down: boolean,
        left: boolean,
        right: boolean
      ) {
        if (left || right) {
          alert('Game over!');
        }
      }
    );
  }

  public update() {}
}
