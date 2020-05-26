export interface IFilterOption {
  key: string;
  name: string;
  type: string;
  checked: boolean;
  other: boolean;
}

export interface ICharactersResponse {
  info: IResponseInfo;
  results: ICharacter[];
}

export interface IResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: INameUrl;
  location: INameUrl;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface INameUrl {
  name: string;
  url: string;
}
