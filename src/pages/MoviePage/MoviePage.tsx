import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import './MoviePage.css';
import ActorsList from '../../components/Actors/ActorsList';
import { RatedElement } from 'src/components/RatedElement/RatedElement';
import { getFilmsApi } from '../../services/redux/slices/films/films';
import MovieButton from 'src/components/MovieButton/MovieButton';
import { ButtonTypes, SlickSliderTypes } from 'src/types/Rating.types';
import TrailerButton from 'src/components/TrailerButton/TrailerButton';
import RatingElement from 'src/components/RatingElement/RatingElement';
import BackgroundImage from 'src/components/BackgroundImage/BackgroundImage';
import FilmAbout from 'src/components/FilmAbout/FilmAbout';
import { FilmCardSmall } from 'src/components/FilmCard180/FilmCardSmall';
import { SlickSlider } from 'src/components/SlickSlider/SlickSlider';

const MoviePage: FC = () => {
	const dispatch = useAppDispatch();

	const films = useAppSelector((state) => state.films.films[2]);
	const film = useAppSelector((state) => state.films.films);

	useEffect(() => {
		dispatch(getFilmsApi());
	}, []);

	return (
		<>
			<BackgroundImage imageUrl={films.imageUrl} />
			<section className="moviepage">
				<div className="moviepage__container">
					<div className="movie-block">
						<img className="movie-block__img" alt="" src={films.imageUrl} />
						<div className="movie-block__text">
							<div>
								<h2 className="movie-block__text_title">{films.title}</h2>
								<RatedElement
									imdb={films.rating.imdb}
									kinopoisk={films.rating.kinopoisk}
								/>
							</div>
							<ActorsList actors={films.actor} />
						</div>
						<div className="moviepage__button__container">
							<div className="moviepage__button__container_plus">
								<MovieButton buttonName={ButtonTypes.favorites} />
								<MovieButton buttonName={ButtonTypes.willSee} />
							</div>
							<RatingElement />
						</div>
					</div>
					<FilmAbout />
					<TrailerButton imageUrl={films.imageUrl} />
					<h2 className="moviepage-cards__title">Похожие фильмы</h2>
					<div className="moviepage-cards__container">
						<SlickSlider type={SlickSliderTypes.specialforyou} />
					</div>
				</div>
			</section>
		</>
	);
};

export default MoviePage;
