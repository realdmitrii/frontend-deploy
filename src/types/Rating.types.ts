export interface IRating {
	id: number;
	user: number;
	movie: number;
	rate: number;
	is_viewed: boolean;
	must_see: boolean;
	is_favorite: boolean;
}

export interface IRatingState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	movie_rating: IRating;
}

export enum ButtonTypes {
	seen = 'seen',
	willSee = 'willSee',
	favorites = 'favorites',
}

export interface IButton {
	buttonName: ButtonTypes;
	id: number;
}

export interface IImage {
	imageUrl: string;
}

export interface ActorsListProps {
	actors: string[];
}
export interface PopupTrailerProps {
	isPopupOpen: boolean;
	switchPopupTrailer: () => void;
}

export enum SlickSliderTypes {
	redactionOne = 'redactionOne',
	news = 'news',
	redactionTwo = 'redactionTwo',
	specialforyou = 'specialforyou',
	similar = 'similar',
	genres = 'genres',
	redactionThree = 'redactionThree',
}

export interface ISlider {
	type: SlickSliderTypes;
}
