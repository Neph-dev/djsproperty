/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        lastUpdated
        hasRead
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArea = /* GraphQL */ `
  query GetArea($id: ID!) {
    getArea(id: $id) {
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
export const listAreas = /* GraphQL */ `
  query ListAreas(
    $filter: ModelAreaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getResidence = /* GraphQL */ `
  query GetResidence($id: ID!) {
    getResidence(id: $id) {
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
export const listResidences = /* GraphQL */ `
  query ListResidences(
    $filter: ModelResidenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResidences(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
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
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        }
      }
      nextToken
    }
  }
`;
