export const CHECK = "form/check";

export default function checkAction (isChacked, id) {
    return ({
        type: CHECK,
        isChacked,
        id,
    })
}