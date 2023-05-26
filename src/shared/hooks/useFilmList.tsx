import { useState, useEffect } from 'react';

import { getAllFilm, FilmDataType } from 'src/shared/helpers/api';

export default function useFilmList(): FilmListHooksType {
  const [filmList, setFilmList] = useState<FilmDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const filmDataType = await getAllFilm();
      if (mounted) {
        setFilmList(filmDataType);
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return {
    loading,
    filmList,
  };
}

export type FilmListHooksType = {
  loading: boolean;
  filmList: FilmDataType[];
};
