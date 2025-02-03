export enum MovieFilter {
  TITLE = 'TITLE',
  DESCRIPTION = 'DESCRIPTION',
  NONE = 'NONE'
}

export enum MovieSort {
  ASC = 'ASC',
  DESC = 'DESC',
  NONE = 'NONE'
}

export interface MovieContainerProps {
  filter: MovieFilter;
  sort: MovieSort;
}
