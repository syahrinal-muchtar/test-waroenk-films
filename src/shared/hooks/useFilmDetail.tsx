import { useState, useEffect } from "react";
import { getSingleFilm, FilmDetailType } from "src/shared/helpers/api";

export default function useFilmDetail(filmId: number): UseFilmDetailHooksType {
  const [filmDetail, setFilmDetail] = useState<FilmDetailType>({
    id: 0,
    title: "",
    director: "",
    producer: "",
    description: "",
    characters: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
    price: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const filmData = await getSingleFilm(filmId);
      if (mounted) {
        setFilmDetail(filmData);
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, [filmId]);

  return {
    loading,
    filmDetail,
  };
}

export type UseFilmDetailHooksType = {
  loading: boolean;
  filmDetail: FilmDetailType;
};
