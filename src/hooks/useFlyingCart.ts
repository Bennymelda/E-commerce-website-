type FlyPayload = {
 image: HTMLImageElement;
};

const FLY_EVENT = "cart:fly";

export const triggerFlyCart = (payload: FlyPayload) => {
 window.dispatchEvent(new CustomEvent(FLY_EVENT, { detail: payload }));
};