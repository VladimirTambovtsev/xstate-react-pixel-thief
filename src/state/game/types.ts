export interface StartButtonClickedType {
  type: 'START_BUTTON_CLICKED'
}
export interface PlayerDiedType {
  type: 'PLAYER_DIED'
}
export interface PlayerGotTreasure {
  type: 'PLAYER_GOT_TREASURE'
}
export interface RestartButtonClicked {
  type: 'RESTART_BUTTON_CLICKED'
}
export interface HomeButtonClickedType {
  type: 'HOME_BUTTON_CLICKED'
}
export interface PlayerWalkedThroughDoor {
  type: 'PLAYER_WALKED_THROUGH_DOOR'
}

export type GameEventType =
  | StartButtonClickedType
  | PlayerDiedType
  | PlayerGotTreasure
  | RestartButtonClicked
  | HomeButtonClickedType
  | PlayerWalkedThroughDoor

export type GameStateType = {
  context: null
  value:
    | 'home'
    | 'playing'
    | 'player.level1'
    | 'player.level2'
    | 'player.level3'
    | 'gameOver'
    | 'gameComplete'
}
