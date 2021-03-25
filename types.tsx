import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Login: undefined;
  Register: undefined;
};

export type LoginParamList = {
  LoginParamList: undefined;
};

export type RegisterParamList = {
  RegisterParamList: undefined;
};
export interface IResponse {
  success: boolean;
  status: number;
  comment: string;
}
export interface IBoard {
  pk: number;
  fields: {
    name: string;
  };
}
export type DateTime = string;
export interface IAuthor {
  fields: {
    username: string;
    nickname: string;
  };
}
export interface IRoute<T> {
  params: T;
}

export interface IPostParamsBase {
  pk: number;
  author: IAuthor;
  board: string;
  content: string;
  title: string;
}

export interface IPostParams extends IPostParamsBase {
  writeAt: Date;
}

export interface IBoardParams {
  boardPk: number;
  boardName: string;
  boardPage: number;
}

export interface IPostPreviewParams extends IPostParamsBase {
  navigation: StackNavigationHelpers;
  writeAtDT: DateTime;
}
