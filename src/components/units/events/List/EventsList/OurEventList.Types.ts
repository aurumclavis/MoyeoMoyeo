// import { ApolloQueryResult, OperationVariables } from "@apollo/client";

// export interface IOurEventList {
//   data: any;
//   refetch(
//     variables?: Partial<OperationVariables> | undefined
//   ): Promise<ApolloQueryResult<any>>;
//   refetchBoardsCount: (
//     variables: Partial<OperationVariables>
//   ) => Promise<ApolloQueryResult<any>>;
//   count?: number;
//   keyword: string;
// }

export interface IOurEventListUIAdd {
  el: any;
  data?: any;
  onClickDetail?: () => void;
}

export interface IOurEventListUI {
  data: any;
  //   refetch(
  //     variables?: Partial<OperationVariables> | undefined
  //   ): Promise<ApolloQueryResult<any>>;
  //   refetchBoardsCount: (
  //     variables: Partial<OperationVariables>
  //   ) => Promise<ApolloQueryResult<any>>;
  //   count?: number;
}
