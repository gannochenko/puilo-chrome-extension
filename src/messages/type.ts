export type MessageHandlerType = (
    sendResponse: (response: unknown) => void,
) => void;
