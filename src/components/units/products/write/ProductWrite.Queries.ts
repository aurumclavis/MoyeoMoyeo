import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct($productInput: ProductInput!) {
    createProduct(productInput: $productInput) {
      id
      name
    }
  }
`;
export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $productId: String!
    $updateProductInput: UpdateProductInput!
  ) {
    updateProduct(
      productId: $productId
      updateProductInput: $updateProductInput
    ) {
      id
      name
    }
  }
`;
export const UPLOAD_IMAGES = gql`
  mutation uploadImages($files: [Upload!]!) {
    uploadImages(files: $files)
  }
`;
