/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      title
      description
      lastUpdated
      hasRead
      createdAt
      updatedAt
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      title
      description
      lastUpdated
      hasRead
      createdAt
      updatedAt
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      title
      description
      lastUpdated
      hasRead
      createdAt
      updatedAt
    }
  }
`;
export const createArea = /* GraphQL */ `
  mutation CreateArea(
    $input: CreateAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    createArea(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      residences {
        items {
          id
          name
          address
          city
          postalCode
          totalUnits
          totalCapacity
          feature
          image
          areaID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateArea = /* GraphQL */ `
  mutation UpdateArea(
    $input: UpdateAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    updateArea(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      residences {
        items {
          id
          name
          address
          city
          postalCode
          totalUnits
          totalCapacity
          feature
          image
          areaID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteArea = /* GraphQL */ `
  mutation DeleteArea(
    $input: DeleteAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    deleteArea(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      residences {
        items {
          id
          name
          address
          city
          postalCode
          totalUnits
          totalCapacity
          feature
          image
          areaID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createResidence = /* GraphQL */ `
  mutation CreateResidence(
    $input: CreateResidenceInput!
    $condition: ModelResidenceConditionInput
  ) {
    createResidence(input: $input, condition: $condition) {
      id
      name
      address
      city
      postalCode
      totalUnits
      totalCapacity
      feature
      image
      areaID
      createdAt
      updatedAt
      area {
        id
        name
        description
        image
        createdAt
        updatedAt
        residences {
          nextToken
        }
      }
      units {
        items {
          id
          type
          style
          capacity
          dimensions
          unitNumber
          rent_sale
          price
          deposit
          description
          feature
          image
          residenceID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateResidence = /* GraphQL */ `
  mutation UpdateResidence(
    $input: UpdateResidenceInput!
    $condition: ModelResidenceConditionInput
  ) {
    updateResidence(input: $input, condition: $condition) {
      id
      name
      address
      city
      postalCode
      totalUnits
      totalCapacity
      feature
      image
      areaID
      createdAt
      updatedAt
      area {
        id
        name
        description
        image
        createdAt
        updatedAt
        residences {
          nextToken
        }
      }
      units {
        items {
          id
          type
          style
          capacity
          dimensions
          unitNumber
          rent_sale
          price
          deposit
          description
          feature
          image
          residenceID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteResidence = /* GraphQL */ `
  mutation DeleteResidence(
    $input: DeleteResidenceInput!
    $condition: ModelResidenceConditionInput
  ) {
    deleteResidence(input: $input, condition: $condition) {
      id
      name
      address
      city
      postalCode
      totalUnits
      totalCapacity
      feature
      image
      areaID
      createdAt
      updatedAt
      area {
        id
        name
        description
        image
        createdAt
        updatedAt
        residences {
          nextToken
        }
      }
      units {
        items {
          id
          type
          style
          capacity
          dimensions
          unitNumber
          rent_sale
          price
          deposit
          description
          feature
          image
          residenceID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    createUnit(input: $input, condition: $condition) {
      id
      type
      style
      capacity
      dimensions
      unitNumber
      rent_sale
      price
      deposit
      description
      feature
      image
      residenceID
      createdAt
      updatedAt
      residence {
        id
        name
        address
        city
        postalCode
        totalUnits
        totalCapacity
        feature
        image
        areaID
        createdAt
        updatedAt
        area {
          id
          name
          description
          image
          createdAt
          updatedAt
        }
        units {
          nextToken
        }
      }
    }
  }
`;
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
      id
      type
      style
      capacity
      dimensions
      unitNumber
      rent_sale
      price
      deposit
      description
      feature
      image
      residenceID
      createdAt
      updatedAt
      residence {
        id
        name
        address
        city
        postalCode
        totalUnits
        totalCapacity
        feature
        image
        areaID
        createdAt
        updatedAt
        area {
          id
          name
          description
          image
          createdAt
          updatedAt
        }
        units {
          nextToken
        }
      }
    }
  }
`;
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
      id
      type
      style
      capacity
      dimensions
      unitNumber
      rent_sale
      price
      deposit
      description
      feature
      image
      residenceID
      createdAt
      updatedAt
      residence {
        id
        name
        address
        city
        postalCode
        totalUnits
        totalCapacity
        feature
        image
        areaID
        createdAt
        updatedAt
        area {
          id
          name
          description
          image
          createdAt
          updatedAt
        }
        units {
          nextToken
        }
      }
    }
  }
`;
