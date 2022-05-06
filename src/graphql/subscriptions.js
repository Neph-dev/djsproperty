/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
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
export const onCreateArea = /* GraphQL */ `
  subscription OnCreateArea {
    onCreateArea {
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
export const onUpdateArea = /* GraphQL */ `
  subscription OnUpdateArea {
    onUpdateArea {
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
export const onDeleteArea = /* GraphQL */ `
  subscription OnDeleteArea {
    onDeleteArea {
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
export const onCreateResidence = /* GraphQL */ `
  subscription OnCreateResidence {
    onCreateResidence {
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
export const onUpdateResidence = /* GraphQL */ `
  subscription OnUpdateResidence {
    onUpdateResidence {
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
export const onDeleteResidence = /* GraphQL */ `
  subscription OnDeleteResidence {
    onDeleteResidence {
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
export const onCreateUnit = /* GraphQL */ `
  subscription OnCreateUnit {
    onCreateUnit {
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
export const onUpdateUnit = /* GraphQL */ `
  subscription OnUpdateUnit {
    onUpdateUnit {
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
export const onDeleteUnit = /* GraphQL */ `
  subscription OnDeleteUnit {
    onDeleteUnit {
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
