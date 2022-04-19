/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArea = /* GraphQL */ `
  subscription OnCreateArea {
    onCreateArea {
      id
      name
      description
      image
      residences {
        items {
          id
          name
          address
          totalUnits
          totalCapacity
          feature
          areaID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      residences {
        items {
          id
          name
          address
          totalUnits
          totalCapacity
          feature
          areaID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      residences {
        items {
          id
          name
          address
          totalUnits
          totalCapacity
          feature
          areaID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateResidence = /* GraphQL */ `
  subscription OnCreateResidence {
    onCreateResidence {
      id
      name
      address
      totalUnits
      totalCapacity
      feature
      areaID
      area {
        id
        name
        description
        image
        residences {
          nextToken
        }
        createdAt
        updatedAt
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
          residenceID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateResidence = /* GraphQL */ `
  subscription OnUpdateResidence {
    onUpdateResidence {
      id
      name
      address
      totalUnits
      totalCapacity
      feature
      areaID
      area {
        id
        name
        description
        image
        residences {
          nextToken
        }
        createdAt
        updatedAt
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
          residenceID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteResidence = /* GraphQL */ `
  subscription OnDeleteResidence {
    onDeleteResidence {
      id
      name
      address
      totalUnits
      totalCapacity
      feature
      areaID
      area {
        id
        name
        description
        image
        residences {
          nextToken
        }
        createdAt
        updatedAt
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
          residenceID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      residenceID
      residence {
        id
        name
        address
        totalUnits
        totalCapacity
        feature
        areaID
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      residenceID
      residence {
        id
        name
        address
        totalUnits
        totalCapacity
        feature
        areaID
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      residenceID
      residence {
        id
        name
        address
        totalUnits
        totalCapacity
        feature
        areaID
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
