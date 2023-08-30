import { useAppDispatch, useAppSelector } from 'src/services/typeHooks';
import './Selections.css';
import { ICompilationsTwo } from 'src/types/Compilations.types';
import { useEffect, useState } from 'react';
import { getCompilationsApi } from 'src/services/redux/slices/compilations/compilations';
import { getFilmsApi } from 'src/services/redux/slices/films/films';
import { getSelectionsApi } from 'src/services/redux/slices/selections/selections';
import { FilmCardSmall } from 'src/components/FilmCardWidth180/FilmCardSmall';
import { MoreButton } from 'src/components/MoreBtn/MoreButton';
import { IMovieCard } from 'src/types/MovieCard.types';

export const Selections = () => {
	const dispatch = useAppDispatch();
	const [isMoreButton, setIsMoreButton] = useState(false);
	const [screenSize, setScreenSize] = useState<number>(0);
	const [pageMore, setPageMore] = useState(screenSize);
	const films = JSON.parse(localStorage.getItem('filmsBy') || '');

	useEffect(() => {
		if (screenSize >= 1280) {
			const page = 12;
			setPageMore(page);
		} else if (screenSize <= 1280 && screenSize > 800) {
			const page = 9;
			setPageMore(page);
		} else if (screenSize < 800) {
			const page = 8;
			setPageMore(page);
		}
	}, [screenSize]);

	const handleMoreButtonClick = () => {
		setPageMore((prev) => prev + pageMore);
	};

	return (
		<section className="flank">
			<h1 className="flank_title">{films.title}</h1>

			<section>
				<div className="flank_container">
					{films.movies.slice(0, pageMore).map((film: IMovieCard) => (
						<FilmCardSmall film={film} />
					))}
				</div>
			</section>
			<div className="flank_btn">
				{isMoreButton ? <MoreButton onClick={handleMoreButtonClick} /> : null}
			</div>
		</section>
	);
};
