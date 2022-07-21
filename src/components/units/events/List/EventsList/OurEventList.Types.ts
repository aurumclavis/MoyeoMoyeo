// import { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { MouseEventHandler } from "react";

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
}

export interface IOurEventListUI {
  data: any;
  onClickMoveToPage?: (path: any) => MouseEventHandler<HTMLDivElement>;
  //   refetch(
  //     variables?: Partial<OperationVariables> | undefined
  //   ): Promise<ApolloQueryResult<any>>;
  //   refetchBoardsCount: (
  //     variables: Partial<OperationVariables>
  //   ) => Promise<ApolloQueryResult<any>>;
  //   count?: number;
}
