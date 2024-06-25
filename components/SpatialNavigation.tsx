import { Directions, SpatialNavigation } from "react-tv-space-navigation";

SpatialNavigation.configureRemoteControl({
  remoteControlSubscriber: (callback) => {
    const mapping = {
      ArrowRight: Directions.RIGHT,
      ArrowLeft: Directions.LEFT,
      ArrowUp: Directions.UP,
      ArrowDown: Directions.DOWN,
      Enter: Directions.ENTER,
    };

    const eventId = window.addEventListener("keydown", (keyEvent) => {
      const direction = mapping[keyEvent.code as keyof typeof mapping];
      if (direction !== undefined) {
        callback(direction);
      }
    });

    return eventId;
  },

  remoteControlUnsubscriber: (eventId) => {
    window.removeEventListener("keydown", eventId);
  },
});
