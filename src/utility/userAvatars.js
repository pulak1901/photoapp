// https://invent.kde.org/plasma/user-manager/-/tree/Plasma/5.18/src/pics/circles

export const Avatars = [
	"/assets/avatars/Konqi.png",
	"/assets/avatars/Male.png",
	"/assets/avatars/Female.png",
	"/assets/avatars/Cat.png",
	"/assets/avatars/Penguin.png",
	"/assets/avatars/Zebra.png"
]

export const GetAvatar = (iconNumber) => {
	if (iconNumber > Avatars.length) {
		return Avatars[0]
	}
	return Avatars[iconNumber]
}